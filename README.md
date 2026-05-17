# Matthew B. Smith Consulting

Personal consulting site for [matthewbsmith.com](https://matthewbsmith.com).
Built with React, TypeScript, Vite, and Tailwind CSS. Deployed on Cloudflare Workers.

## Development

```bash
npm install
wrangler dev
```

Use `wrangler dev` instead of `npm run dev` to test Worker functions (contact form)
locally. Create a `.dev.vars` file at the project root:

```
RESEND_API_KEY=your_resend_api_key_here
```

For UI-only work without the contact form, `npm run dev` is fine.

## Deployment

Pushes to `main` auto-deploy via Cloudflare Workers Builds.
For manual deployment:

```bash
npm run build && wrangler deploy
```

## Stack

- React 19, TypeScript, Vite
- Tailwind CSS v4
- React Router v7 (BrowserRouter)
- Lucide React (icons)
- Resend API via Cloudflare Worker (contact form)
- Cloudflare Workers + static assets

## Branch Strategy

- `main` — production, auto-deploys to matthewbsmith.com
- Feature branches merged to main via PR

## Contact Form

Handled by `functions/api/contact.ts` via Resend API.
`RESEND_API_KEY` must be set as a Cloudflare Workers secret:

```bash
wrangler secret put RESEND_API_KEY
```

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
| `public/resume.pdf` | Downloadable CV |

To regenerate `og-image.png`: open `src/assets/og-image1200x630.svg` in Chrome,
set DevTools viewport to 1200x630, capture screenshot, save to `public/og-image.png`.

To regenerate `favicon.png`: open `src/assets/favicon-512x512.svg` in Chrome,
capture at 512x512, save to `public/favicon.png`.