# Usman Ibrahim — Cybersecurity Portfolio

Personal portfolio focused on Security Engineering, SOC/DFIR, and Detection Engineering, alongside the full-stack and systems projects that support that work.

[Live portfolio](https://usmanprime-portfolio.vercel.app/) · [GitHub](https://github.com/UsmanPrime) · [LinkedIn](https://www.linkedin.com/in/usman-ibrahim-992253276/) · [Email](mailto:i242038@isb.nu.edu.pk)

## About

The site presents hands-on security work, experience, certifications, and software projects. Its interactive incident investigation keeps a static SVG fallback; the Three.js scene is lazy-loaded, pauses while offscreen, and respects reduced-motion and Motion-off preferences. The About section includes a terminal with commands based on portfolio content.

## Built with

- React 18, TypeScript, and Vite
- Tailwind CSS with semantic design tokens
- Three.js for the optional animated defense scene
- Vercel serverless function and Resend for contact form delivery

## Run locally

Requires Node.js 24.x and npm.

```sh
npm ci
npm run dev
```

Vite serves the frontend at `http://localhost:8080`. The contact endpoint in `api/contact.ts` runs as a Vercel function and is not served by Vite's development server.

## Checks and production build

```sh
npm run lint
npm run typecheck
npm run build
npm run preview
```

The production build prerenders the homepage from the same React components used in the browser, then hydrates it for interactive behavior. Build output is written to `dist/` and ignored by Git.

## Contact form configuration

Set `RESEND_API_KEY` in the Vercel project environment. Never commit API keys. The deployed sender must be eligible with the configured Resend account; the form delivers to the portfolio's configured destination and uses the visitor's address as Reply-To.

## SEO and crawling

Page metadata and ProfilePage/Person JSON-LD are in `index.html`. The canonical URL, Open Graph and X preview URLs, `public/robots.txt`, and `public/sitemap.xml` currently use `https://usmanprime-portfolio.vercel.app/`. Update those together if the production domain changes. After deployment, submit the sitemap and inspect the homepage in Google Search Console; local checks cannot establish indexing or rankings.

## Project structure

- `src/components/` — page sections, project diagrams, incident simulation, terminal, and shared controls
- `src/hooks/` — motion preferences, section reveals, anchor navigation, and interaction lifecycles
- `src/lib/` — defense renderer, worker, and shared simulation logic
- `src/data/` — profile and skills data
- `src/index.css` and `src/cyber.css` — semantic tokens, typography, layouts, and interaction states
- `api/contact.ts` — validated contact form email delivery
- `public/` — project screenshots, profile image variants, licensed fonts, and downloadable PDFs
- `scripts/` — build prerendering, design checks, and asset utilities

## Deployment

Deploy with the included `vercel.json` configuration and set the required environment variables in the Vercel project. Keep build output, browser sessions, local environment files, and diagnostic captures out of commits; `.gitignore` excludes them.
