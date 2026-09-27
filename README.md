# Usman Ibrahim — Cybersecurity Portfolio

Personal portfolio focused on Security Engineering, SOC/DFIR, and Detection Engineering, alongside the full-stack and systems projects that support that work.

[Live portfolio](https://usmanprime-portfolio.vercel.app/) · [GitHub](https://github.com/UsmanPrime) · [LinkedIn](https://www.linkedin.com/in/usman-ibrahim-992253276/) · [Email](mailto:i242038@isb.nu.edu.pk)

## Portfolio tour

The portfolio is organized around operational security and the engineering that supports it:

| Section | What it covers |
| --- | --- |
| Hero | Security focus and an interactive network defense demonstration |
| About | Background, current focus, system status, and a portfolio-aware terminal |
| Skills | Security operations, application security, development, systems, and infrastructure |
| Experience | Security internships, technical work, and competition achievements |
| Certifications | Completed credentials and linked evidence |
| Projects | PIMS and NextGen Residency case studies, architecture decisions, and supporting work |
| Resume | Current downloadable and browser-viewable CV |
| Contact | Validated contact form and direct contact links |

### Interaction and accessibility

The incident walkthrough advances through a short investigation using simulated evidence. It remains usable when WebGL is unavailable. The Three.js globe loads on demand, pauses when offscreen, and is disposed when its component unmounts.

The site preserves native anchor navigation, visible keyboard focus, responsive layouts, and the shared section reveal behavior. Animations follow the operating system's reduced-motion preference and can also be paused with the Motion control.

### Project presentation

The featured PIMS and NextGen Residency entries explain the problem, contribution, architecture, and technology choices alongside frontend screenshots and expandable diagrams. Supporting Work groups additional applications, network engineering, systems, and game projects by domain.

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
