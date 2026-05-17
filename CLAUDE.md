# CLAUDE.md - Matthew B. Smith Consulting Site

Personal consulting site for matthewbsmith.com. Built with React,
TypeScript, Vite, and Tailwind CSS. Hosted on Cloudflare Workers.

## Project Structure

```
src/
  components/    # Page sections and UI components
  pages/         # Full page components (About, Consulting, Websites, Contact)
  assets/        # SVG source files
    demo-cards/  # Portfolio screenshot PNGs
  data/          # constants.ts (CAREER_START)
  hooks/         # useYearsOfExperience.ts
  index.css      # Tailwind entry point + theme tokens
  main.tsx       # Entry point
  App.tsx        # Router and layout
functions/
  api/
    contact.ts   # Cloudflare Worker handling POST /api/contact via Resend
public/          # favicon.png, og-image.png, robots.txt, sitemap.xml, resume.pdf
```

## Stack

- Framework: React 19, TypeScript 6, Vite 8
- Styling: Tailwind CSS v4 via @tailwindcss/vite plugin
- Routing: React Router v7 (BrowserRouter)
- Icons: Lucide React
- Email: Resend API via Cloudflare Worker function
- Deployment: Cloudflare Workers with static assets, custom domain via Cloudflare

## Site Architecture

Multi-page React app. React Router v7 handles routing. Pages:
- `/` — Homepage (Hero, Services, PortfolioPreview, Process, Contact)
- `/consulting` — Technical Consulting page
- `/websites` — Custom Websites page
- `/about` — About Me page
- `/contact` — Contact form page
- `*` — 404 NotFound

## Design System

Dark theme throughout. Alternating bg-dark and bg-dark-light sections.

```css
--color-blue-lct: #3b82f6;           /* electric blue accent */
--color-blue-lct-cta: #1d4ed8;       /* darker blue for filled buttons (WCAG AA) */
--color-blue-lct-cta-hover: #2563eb;
--color-fg-muted: #a3a3a3;           /* secondary/muted text */
--color-dark: #111111;                /* primary background */
--color-dark-light: #1c1c1c;         /* card and section backgrounds */
```

Card pattern: cards always use the opposite background from their section.
Cards on bg-dark use bg-dark-light. Cards on bg-dark-light use bg-dark.
Icon circles follow the same rule.

Homepage section background sequence:
- Header: bg-dark
- Hero: bg-dark
- Services: bg-dark-light (cards use bg-dark)
- Portfolio: bg-dark (card uses bg-dark-light)
- Process: bg-dark-light (cards use bg-dark)
- Contact CTA: bg-dark
- Footer: bg-dark

body { background-color: #111111 } set in index.css to prevent white overscroll on iOS.

## Voice and Tone

This is a solo developer personal brand site. Every instance of "we", "our",
"us" is a bug. All copy uses first-person singular: "I", "my", "me".
No em dashes anywhere. No AI-sounding copy.

## Header

- SVG wordmark (mbsc-wordmark.svg at h-8)
- Active nav link highlighting via pathname from useLocation
- Mobile menu with focus trap and keyboard navigation
- Sticky, dark background
- Nav order: Home, Consulting, Websites, About, Contact

## Assets

SVG source files live in src/assets/ and are imported by React components.
PNG files live in public/ and are served directly.

- src/assets/mbsc-wordmark.svg — header wordmark (900x70)
- src/assets/mbsc-wordmark-sm.svg — footer wordmark (680x50)
- src/assets/favicon-512x512.svg — source SVG for generating favicon.png
- src/assets/og-image1200x630.svg — source SVG for generating og-image.png
- src/assets/demo-cards/ — portfolio screenshot PNGs
- public/favicon.png — 512x512 favicon
- public/og-image.png — 1200x630 social preview image
- public/resume.pdf — downloadable CV

To regenerate og-image.png: open src/assets/og-image1200x630.svg in Chrome,
set DevTools viewport to 1200x630, capture screenshot, save to public/og-image.png.

To regenerate favicon.png: open src/assets/favicon-512x512.svg in Chrome,
capture at 512x512, save to public/favicon.png.

## TypeScript Standards

- strict: true (covers noImplicitAny, strictNullChecks, strictFunctionTypes, etc.)
- noUnusedLocals, noUnusedParameters
- noImplicitReturns
- noFallthroughCasesInSwitch
- All variables and function return types explicitly typed
- Worker functions use tsconfig.worker.json with @cloudflare/workers-types
- React components use tsconfig.app.json with vite/client types

## Code Style

- Prettier handles formatting on save
- ESLint handles logic/quality rules (eslint-config-prettier prevents conflicts)
- Single quotes, semicolons, 2 space indent, 100 char print width
- No inline styles — Tailwind utility classes only
- No em dashes anywhere in copy or code comments

## Brand

- Accent: electric blue #3b82f6
- Dark backgrounds: #111111 and #1c1c1c
- Text: white (#f8fafc), muted (#a3a3a3 / white/60 / white/40)
- Wordmark: MATTHEW B. SMITH (white) + CONSULTING (blue)
- Monogram: MBS (white) + C (blue)
- Tone: credible, professional, personal — solo dev voice throughout
- No em dashes anywhere

## Contact Form

- POSTs to /api/contact, handled by functions/api/contact.ts
- Uses Resend API
- Honeypot field: hidden input named "website", must be empty on submit
- Project type options: Technical Consulting, Custom Website, Not Sure Yet
- projectType is required — validation rejects empty selection
- RESEND_API_KEY stored as Cloudflare Worker secret
- reply_to set to matt@matthewbsmith.com

## Accessibility

- Lighthouse accessibility score: 100 target
- SkipToMain component for keyboard/screen reader users
- All nav links have aria-current="page" when active
- Mobile menu has focus trap, returns focus to hamburger on close
- aria-expanded on FAQ accordion buttons
- aria-labelledby on FAQ sections

## Routing and Deployment

- BrowserRouter (not HashRouter)
- SPA routing via wrangler.json: not_found_handling: single-page-application
- No _redirects file needed
- Worker entry point: functions/api/contact.ts
- Deploy: git push to main triggers auto-deploy via Cloudflare Workers Builds

## Local Development

- Run `wrangler dev` to test Worker functions locally
- Create `.dev.vars` at project root: RESEND_API_KEY=your_key_here
- `.dev.vars` and `.wrangler` are gitignored
- `npm run dev` is fine for UI-only work
- Emails send for real during local testing via Resend

## DNS Configuration

- matthewbsmith.com registered via Cloudflare Registrar
- Email routing: matt@matthewbsmith.com forwards to
  matthew.smith.tech.consulting@gmail.com
- Cloudflare Email Routing MX and TXT records in place

## Versioning

- Annotated tags on main after each release e.g. git tag -a v1.0.0 -m "message"
- Semver: patch for fixes/wording, minor for new features, major for redesigns
- Conventional commits: feat/fix/chore/docs, subject line under 50 chars