# Matthew B. Smith

Personal site for [matthewbsmith.com](https://matthewbsmith.com). Portfolio and resume
for senior software engineering roles, with a secondary page for local client work.
Built with React, TypeScript, Vite, and Tailwind CSS. Deployed on Cloudflare Workers
(static assets only).

## Development

```bash
npm install
npm run dev
```

For a production-like preview of the built site:

```bash
npm run build && wrangler dev
```

## Deployment

Pushes to `main` auto-deploy via Cloudflare Workers Builds.
For manual deployment:

```bash
npm run build
wrangler deploy
```

## Stack

- React 19, TypeScript, Vite
- Tailwind CSS v4
- React Router v7 (BrowserRouter)
- Lucide React (icons)
- Cloudflare Workers (static asset hosting, SPA routing)

## Routes

- `/` — Homepage (Hero, Work, Experience, About, Contact)
- `/services` — Local client work (linked from About)
- `*` — 404

## Contact

Homepage contact is a `mailto:` link to matt@matthewbsmith.com. There is no contact
form on the site at this time.

## Branch Strategy

- `main` — production, auto-deploys to matthewbsmith.com
- Feature branches merged to main via PR

## Assets

SVG source files live in `src/assets/` and are imported by React components.
PNG files for favicons and OG image live in `public/` and are served directly.

| File | Purpose |
|---|---|
| `src/assets/mbsc-wordmark.svg` | Header wordmark (900x70) |
| `src/assets/mbsc-wordmark-sm.svg` | Footer wordmark (680x50) |
| `src/assets/favicon-512x512.svg` | Source SVG for favicon.png |
| `src/assets/og-image1200x630.svg` | Source SVG for og-image.png |
| `src/assets/demo-cards/` | Portfolio screenshot PNGs |
| `public/favicon.png` | 512x512 favicon |
| `public/og-image.png` | 1200x630 social preview image |
| `public/MatthewSmithResume.pdf` | Downloadable CV |

To regenerate `og-image.png`: open `src/assets/og-image1200x630.svg` in Chrome,
set DevTools viewport to 1200x630, capture screenshot, save to `public/og-image.png`.

To regenerate `favicon.png`: open `src/assets/favicon-512x512.svg` in Chrome,
capture at 512x512, save to `public/favicon.png`.
