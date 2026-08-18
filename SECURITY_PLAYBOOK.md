# 🛡️ Web Application Security Playbook

This playbook documents the core security hardening measures implemented to secure a modern React/Vite web application hosted on Vercel. You can use this guide as a checklist and reference architecture for securing future web projects.

## 1. HTTP Security Headers (Vercel)

Hardening the frontend browser environment is critical for preventing XSS, clickjacking, and MIME-type sniffing. For Vercel deployments, these are configured globally in `vercel.json`.

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=31536000; includeSubDomains; preload"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "Permissions-Policy",
          "value": "camera=(), microphone=(), geolocation=(), interest-cohort=()"
        },
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; object-src 'none'; upgrade-insecure-requests;"
        },
        {
          "key": "Cross-Origin-Opener-Policy",
          "value": "same-origin"
        },
        {
          "key": "Cross-Origin-Resource-Policy",
          "value": "same-origin"
        },
        {
          "key": "Access-Control-Allow-Origin",
          "value": "https://your-production-domain.com"
        }
      ]
    }
  ]
}
```

### Key Highlights:
- **Content-Security-Policy (CSP):** Strictly limits where scripts, styles, and images can be loaded from.
- **X-Frame-Options (`DENY`):** Prevents Clickjacking by disallowing the site from being rendered in an iframe.
- **Strict-Transport-Security (HSTS):** Forces browsers to strictly communicate over HTTPS.
- **Access-Control-Allow-Origin (CORS):** Scopes cross-origin requests exclusively to the production domain, preventing unauthorized clients from calling the backend.

---

## 2. Serverless API Security (Node.js/TypeScript)

Serverless functions (like `/api/contact.ts`) expose backend attack surfaces. They must be protected against abuse, spam, and injection.

### A. IP-Based Rate Limiting
To prevent automated spam and Denial of Service (DoS), implement a rate limiter. In a serverless environment, you must properly parse the `x-forwarded-for` header to get the actual client IP, as the request passes through Vercel's proxies.

```typescript
// Simple In-Memory Rate Limiter (For light traffic)
// Note: For enterprise apps, replace this Map with Vercel KV / Redis (Upstash)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const clientData = rateLimitMap.get(ip);

  if (!clientData) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (now > clientData.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (clientData.count >= MAX_REQUESTS) {
    return false; // Rate limit exceeded
  }

  clientData.count++;
  return true;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Correctly parse the IP behind proxies
  const forwardedFor = req.headers["x-forwarded-for"];
  let ip = "unknown";
  if (typeof forwardedFor === "string") {
    ip = forwardedFor.split(",")[0].trim();
  } else if (req.socket.remoteAddress) {
    ip = req.socket.remoteAddress;
  }

  if (!checkRateLimit(ip)) {
    return res.status(429).json({ error: "Too many requests, please try again later." });
  }
  
  // ... rest of API logic
}
```

### B. Server-Side Input Validation
Never trust client-side validation alone (e.g., HTML `required` attributes), as they are easily bypassed using raw tools like `curl` or Postman.

```typescript
const { name, email, message } = req.body;

// 1. Strict Type and Existence Checks
if (!name || typeof name !== "string" || !email || typeof email !== "string") {
  return res.status(400).json({ error: "Invalid input types." });
}

// 2. Length Constraints (Prevent DoS via massive payloads)
if (name.length > 100 || message.length > 5000) {
  return res.status(400).json({ error: "Input exceeds maximum allowed length." });
}

// 3. Pattern Matching (Regex Validation)
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
  return res.status(400).json({ error: "Invalid email format." });
}
```

---

## 3. Bot Traffic & AI Scraper Mitigation (`robots.txt`)

Protect the site's bandwidth and intellectual property by explicitly blocking unauthorized AI training bots and mass scrapers, while explicitly allowing standard AI Search Engines (like Perplexity or SearchGPT) and standard crawlers (Googlebot).

```text
User-agent: *
Allow: /

# Allow AI Search Engines for visibility
User-agent: PerplexityBot
Allow: /
User-agent: OAI-SearchBot
Allow: /

# Block mass-harvesting AI Training Scrapers
User-agent: GPTBot
Disallow: /
User-agent: ChatGPT-User
Disallow: /
User-agent: CCBot
Disallow: /
User-agent: anthropic-ai
Disallow: /
User-agent: Claude-Web
Disallow: /
User-agent: Google-Extended
Disallow: /
User-agent: Amazonbot
Disallow: /
User-agent: FacebookBot
Disallow: /

Sitemap: https://your-production-domain.com/sitemap.xml
```

---

## 4. Build Environment & Secrets Security

1. **Active Node Runtimes:** Never deploy projects on end-of-life (EOL) Node versions (e.g., Node 20). Always explicitly declare the supported engine in your `package.json` to enforce container upgrades, ensuring you receive the latest security patches for the underlying operating system and Vercel builder.
   ```json
   "engines": {
     "node": "24.x"
   }
   ```
2. **Secrets Isolation:** Never expose API keys (e.g., Resend, SendGrid, Supabase Service Roles) in your frontend code or `VITE_` prefixed environment variables. Keep them strictly in Vercel Server-Side environment variables.
3. **Audit Distinctions:** When running `npm audit`, distinguish between `devDependencies` (build-time tools like `puppeteer` or `eslint`) and `dependencies`. Build-time vulnerabilities generally do not ship to the production browser bundle and represent a vastly lower risk profile.
