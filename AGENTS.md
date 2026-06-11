# AGENTS.md — Matthew B. Smith (matthewbsmith.com)

Personal portfolio site. Primary audience: W2/C2C recruiters. Secondary: local Kentucky client work on `/services`.

Human onboarding: `README.md`. Cursor-specific rules: `.cursor/rules/mbs.mdc`.

## Hard rules

- **Voice**: First-person singular only (`I`, `my`, `me`). Every `we`/`our`/`us` is a bug.
- **Brand**: Personal portfolio, not "Matthew B. Smith Consulting" or an LLC. Wordmark: MATTHEW B. SMITH.
- **Copy**: No em dashes. No AI-sounding prose.
- **Styling**: Tailwind utility classes only. No inline `style={}`.
- **TypeScript**: `strict: true`. Explicit return types on functions. Components return `React.JSX.Element`.
- **Imports**: Use `import type` for type-only imports (`verbatimModuleSyntax`, `erasableSyntaxOnly`).
- **Scope**: Minimal diffs. Match existing patterns. Do not refactor unrelated code.

## Stack

React 19, TypeScript 6, Vite 8, Tailwind CSS v4 (`@tailwindcss/vite`), React Router v7 (`BrowserRouter`), Lucide React. Cloudflare Workers static assets only — no Worker API, no contact form.

`framer-motion` is in `package.json` but unused. Do not add animation libraries unless asked.

## Routes and nav

| Route | Content |
|-------|---------|
| `/` | Hero, Experience, HighlightedWork, Contact |
| `/services` | Client work — **not** in header nav, **not** linked from homepage |
| `*` | NotFound |

Header nav (`src/data/siteNav.ts`) renders only on `/`. Nav order: Experience, Highlights, Get In Touch. Links scroll to section IDs via `scrollIntoView`: `experience`, `highlights`, `contact`. Sections use `scroll-mt-20` where sticky header overlap matters.

## Design system

Tokens live in `src/index.css` `@theme`. Use Tailwind semantic classes from those tokens:

- Backgrounds: `bg-(--color-bg-primary)`, `bg-bg-secondary`, `bg-bg-tertiary`
- Text: `text-text-primary`, `text-text-muted`, `text-text-subtle`
- Accent: `text-accent`, `bg-accent`, `hover:text-accent`
- Borders: `border-border`, `border-border-emphasis`

All homepage sections use `bg-(--color-bg-primary)`. No alternating section backgrounds. Dividers: `border-t border-border`.

`body { background-color: #0f1117 }` in `index.css` prevents white overscroll on iOS.

Typography: Instrument Serif (h1–h3, weight 400), Inter (body, 400 or 500). Headings use `font-normal`, not bold. Both fonts via `@fontsource` in `index.css`.

Layout convention: `section` → `mx-auto max-w-5xl` wrapper, `px-6 py-12` or `py-16`.

Token reference:

```css
--color-bg-primary: #0f1117;
--color-bg-secondary: #161b24;
--color-bg-tertiary: #1c2333;
--color-accent: #4a87d1;
--color-accent-hover: #5590d4;
--color-text-on-accent: #0f1117;
--color-text-primary: #e8eaf0;
--color-text-muted: #9ca3af;
--color-text-subtle: #7c8492;
--color-border: rgba(232, 234, 240, 0.07);
--color-border-emphasis: rgba(232, 234, 240, 0.13);
```

## Component patterns

- **Pages** (`src/pages/`): compose section components; keep page files thin.
- **Sections** (`src/components/`): one component per homepage block.
- **Data**: shared config in `src/data/` (`constants.ts`, `siteNav.ts`). Page-specific lists as typed arrays colocated in the page or section file (see `Services.tsx`, `HighlightedWork.tsx`).
- **LabeledEntry**: shared label/title/description block for `/services`. Reuse its visual language (`text-xs uppercase tracking-widest text-text-subtle`, `border-t border-border py-10`) for similar content.
- **Assets**: SVGs imported from `src/assets/`. PNGs/PDFs served from `public/`.

## Project structure

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

## Components

- **Hero.tsx** — two-column hero on desktop (`flex-row`), single column on mobile (`flex-col-reverse`); eyebrow, heading, body, resume + mailto links, headshot
- **Experience.tsx** — career timeline, four roles from a data array
- **HighlightedWork.tsx** — chosen work items, each with Problem/Decision/Outcome case study block
- **Contact.tsx** — mailto contact section
- **Header.tsx** — sticky nav, SVG wordmark (`mbsc-wordmark.svg` at h-8), scroll-based nav, mobile menu with focus trap
- **Footer.tsx** — wordmark, tagline, icon links (LinkedIn, GitHub, Email, Resume), copyright
- **LabeledEntry.tsx** — shared label/title/description pattern for `/services`
- **SkipToMain.tsx** — skip link for keyboard/screen reader users
- **ScrollToTop.tsx** — scrolls to top on route change
- **pages/Services.tsx** — local client work; uses `LabeledEntry` for What I work on and What to expect

## Assets

| File | Purpose |
|------|---------|
| `src/assets/mbsc-wordmark.svg` | Header wordmark (900x70), "MATTHEW B. SMITH" only |
| `src/assets/mbsc-wordmark-sm.svg` | Footer wordmark (680x50) |
| `src/assets/favicon-512x512.svg` | Source SVG for `public/favicon.png` |
| `src/assets/og-image1200x630.svg` | Source SVG for `public/og-image.png` |
| `src/assets/demo-cards/` | Portfolio screenshot PNGs |
| `public/favicon.png` | 512x512 favicon |
| `public/og-image.png` | 1200x630 social preview |
| `public/MatthewSmithResume.pdf` | Downloadable CV (PDF) |
| `public/MatthewSmithResume.docx` | Downloadable CV (Word) |

Regenerate `public/og-image.png`: open `src/assets/og-image1200x630.svg` in Chrome, DevTools viewport 1200x630, screenshot, save to `public/og-image.png`.

Regenerate `public/favicon.png`: open `src/assets/favicon-512x512.svg` in Chrome, capture at 512x512, save to `public/favicon.png`.

## Code style

Prettier: single quotes, semicolons, 2-space indent, 100 char width. ESLint for logic/quality (`eslint-config-prettier` prevents conflicts). Run `npm run lint` after substantive changes.

```tsx
// Component shape
function Example(): React.JSX.Element {
  return (
    <section className="bg-(--color-bg-primary) px-6 py-12">
      <div className="mx-auto max-w-5xl">...</div>
    </section>
  );
}
```

## Accessibility

Target Lighthouse accessibility 100. `SkipToMain`, focus trap in mobile nav (return focus to hamburger on close), `aria-label` or visible text on interactive elements, `id="main-content"` on `<main>`.

## Contact

Homepage Contact uses a mailto link to matt@matthewbsmith.com. No contact form is deployed. A prior Resend/Worker contact API may be reintroduced later; do not document it as live.

## Deployment

`wrangler.json`: static `./dist`, `not_found_handling: single-page-application`. No `_redirects`. No Worker API entry. Push to `main` auto-deploys via Cloudflare Workers Builds. `.wrangler` is gitignored.

```bash
npm run dev          # UI development
npm run build        # production build (tsc -b && vite build)
npm run build && wrangler dev   # local production preview
```

## DNS

- matthewbsmith.com registered via Cloudflare Registrar
- Email routing: matt@matthewbsmith.com forwards to matthew.smith.tech.consulting@gmail.com
- Cloudflare Email Routing MX and TXT records in place

## Versioning

Conventional commits (`feat`/`fix`/`chore`/`docs`, subject under 50 chars). Semver tags on `main` after releases (e.g. `git tag -a v1.0.0 -m "message"`).

## Do not

- Commit unless explicitly asked
