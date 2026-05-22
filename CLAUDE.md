# CLAUDE.md - Matthew B. Smith (matthewbsmith.com)

Personal site for matthewbsmith.com. Primary audience: W2 and C2C recruiters.
Secondary audience: local organizations and selective client work in Kentucky.
Built with React, TypeScript, Vite, and Tailwind CSS. Hosted on Cloudflare Workers
(static assets, SPA routing).

## Project Structure

```
src/
  components/    # Page sections and UI components
  pages/         # Home, Services, NotFound
  assets/        # SVG source files
    demo-cards/  # Portfolio screenshot PNGs
  data/          # constants.ts (CAREER_START, FEDERAL_START), siteNav.ts
  hooks/         # useYearsOfExperience.ts
  index.css      # Tailwind entry point + theme tokens
  main.tsx       # Entry point
  App.tsx        # Router and layout
public/          # favicon.png, og-image.png, robots.txt, sitemap.xml, MatthewSmithResume.pdf
```

## Stack

- Framework: React 19, TypeScript 6, Vite 8
- Styling: Tailwind CSS v4 via @tailwindcss/vite plugin
- Routing: React Router v7 (BrowserRouter)
- Icons: Lucide React
- Deployment: Cloudflare Workers with static assets, custom domain via Cloudflare

## Site Architecture

React SPA. React Router v7 handles routing. Pages:
- `/` — Homepage (Hero, Work, Experience, About, Contact)
- `/services` — Local client work (linked from About, not in header nav)
- `*` — 404 NotFound

## Design System

Dark theme throughout. All sections use `bg-[var(--color-bg-primary)]`.

```css
--color-bg-primary: #0f1117;         /* primary background, used by all sections */
--color-bg-secondary: #161b24;       /* subtle section contrast where needed */
--color-bg-tertiary: #1c2333;        /* deeper contrast surface */
--color-accent: #4a87d1;             /* blue accent */
--color-accent-hover: #5590d4;       /* accent hover state */
--color-text-on-accent: #0f1117;     /* text on filled accent buttons */
--color-text-primary: #e8eaf0;       /* primary text */
--color-text-muted: #9ca3af;         /* secondary/body text */
--color-text-subtle: #7c8492;        /* tertiary/label text */
--color-border: rgba(232, 234, 240, 0.07);       /* default dividers */
--color-border-emphasis: rgba(232, 234, 240, 0.13); /* stronger borders, tag rings */
```

There is no alternating section background pattern. All page sections use
`bg-[var(--color-bg-primary)]`. Borders between content blocks use
`border-[var(--color-border)]`.

body { background-color: #0f1117 } set in index.css to prevent white overscroll on iOS.

## Typography

- Headings (h1, h2, h3): Instrument Serif, font-weight: 400
- Body copy: Inter, font-weight: 400 or 500
- Both fonts loaded via @fontsource packages in index.css

## Voice and Tone

This is a solo developer personal brand site. Every instance of "we", "our",
"us" is a bug. All copy uses first-person singular: "I", "my", "me".
No em dashes anywhere. No AI-sounding copy.

Do not frame the site as "Matthew B. Smith Consulting" or an LLC brand. The
wordmark reads MATTHEW B. SMITH; the site is a personal portfolio.

## Header

- SVG wordmark (mbsc-wordmark.svg at h-8)
- Scroll-based nav: clicking a link smoothly scrolls to the section via scrollIntoView
- Mobile menu with focus trap and keyboard navigation
- Sticky, dark background
- Nav order: Work, Experience, About, Contact
- Nav links only render on `/` (homepage)

## Assets

SVG source files live in src/assets/ and are imported by React components.
PNG files live in public/ and are served directly.

- src/assets/mbsc-wordmark.svg — header wordmark (900x70), "MATTHEW B. SMITH" only
- src/assets/mbsc-wordmark-sm.svg — footer wordmark (680x50), imported by Footer.tsx
- src/assets/favicon-512x512.svg — source SVG for generating favicon.png
- src/assets/og-image1200x630.svg — source SVG for generating og-image.png
- src/assets/demo-cards/ — portfolio screenshot PNGs
- public/favicon.png — 512x512 favicon
- public/og-image.png — 1200x630 social preview image
- public/MatthewSmithResume.pdf — downloadable CV (PDF)
- public/MatthewSmithResume.docx — downloadable CV (Word)

To regenerate og-image.png: open src/assets/og-image1200x630.svg in Chrome,
set DevTools viewport to 1200x630, capture screenshot, save to public/og-image.png.

To regenerate favicon.png: open src/assets/favicon-512x512.svg in Chrome,
capture at 512x512, save to public/favicon.png.

## Components

- Hero.tsx — two-column hero on desktop (flex-row), single column on mobile (flex-col-reverse); eyebrow, heading, body, resume + mailto links, headshot
- Work.tsx — work/portfolio section with three items; uses useYearsOfExperience for the FEMA item description
- Experience.tsx — career timeline, four roles rendered from a data array
- About.tsx — brief bio; link to /services ("See how I can help.")
- Contact.tsx — simple contact section with mailto email link
- Header.tsx — sticky nav with wordmark, scroll-based nav links, mobile hamburger menu
- Footer.tsx — centered name, tagline, icon links (LinkedIn, GitHub, Email, Resume), copyright
- SkipToMain.tsx — visually hidden skip link for keyboard/screen reader users
- ScrollToTop.tsx — scrolls to top on route change
- pages/Services.tsx — local client work; Work-style rows, no numbered index columns

## TypeScript Standards

- strict: true (covers noImplicitAny, strictNullChecks, strictFunctionTypes, etc.)
- noUnusedLocals, noUnusedParameters
- noImplicitReturns
- noFallthroughCasesInSwitch
- All variables and function return types explicitly typed
- React components use tsconfig.app.json with vite/client types

## Code Style

- Prettier handles formatting on save
- ESLint handles logic/quality rules (eslint-config-prettier prevents conflicts)
- Single quotes, semicolons, 2 space indent, 100 char print width
- No inline styles — Tailwind utility classes only
- No em dashes anywhere in copy or code comments

## Brand

- Accent: #4a87d1
- Background: #0f1117 (primary), #161b24 (secondary)
- Text: #e8eaf0 (primary), #9ca3af (muted), #7c8492 (subtle)
- Wordmark: MATTHEW B. SMITH
- Tone: credible, professional, personal — solo dev voice throughout
- No em dashes anywhere

## Contact

- Homepage Contact section uses a mailto link to matt@matthewbsmith.com
- No contact form is deployed at this time
- A prior Resend/Worker contact API may be reintroduced later; do not document it as live

## Accessibility

- Lighthouse accessibility score: 100 target
- SkipToMain component for keyboard/screen reader users
- All nav links have aria-label or visible text
- Mobile menu has focus trap, returns focus to hamburger on close

## Routing and Deployment

- BrowserRouter (not HashRouter)
- SPA routing via wrangler.json: not_found_handling: single-page-application
- No _redirects file needed
- wrangler.json serves static assets only (no Worker API entry)
- Deploy: git push to main triggers auto-deploy via Cloudflare Workers Builds

## Local Development

- `npm run dev` for UI work
- `npm run build && wrangler dev` to preview the production build locally
- `.wrangler` is gitignored

## DNS Configuration

- matthewbsmith.com registered via Cloudflare Registrar
- Email routing: matt@matthewbsmith.com forwards to
  matthew.smith.tech.consulting@gmail.com
- Cloudflare Email Routing MX and TXT records in place

## Versioning

- Annotated tags on main after each release e.g. git tag -a v1.0.0 -m "message"
- Semver: patch for fixes/wording, minor for new features, major for redesigns
- Conventional commits: feat/fix/chore/docs, subject line under 50 chars
