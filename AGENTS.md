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

React 19, TypeScript 6, Vite 8, Tailwind CSS v4 (`@tailwindcss/vite`), React Router v7 (`BrowserRouter`), Lucide React. Cloudflare Workers static assets only. No Worker API and no contact form.

`framer-motion` is in `package.json` but unused. Do not add animation libraries unless asked.

## Routes and nav

| Route       | Content                                                             |
| ----------- | ------------------------------------------------------------------- |
| `/`         | Hero, HighlightedWork, Experience, Contact                          |
| `/services` | Client work, **not** in header nav and **not** linked from homepage |
| `*`         | NotFound                                                            |

Header nav (`src/data/siteNav.ts`) renders only on `/`. Nav order: Highlights, Experience, Contact. Links scroll to section IDs via `scrollIntoView`: `highlights`, `experience`, `contact`. Sections use `scroll-mt-24` where sticky header overlap matters.

## Design system

The site uses a dark product-craft aesthetic: zinc surfaces, hairline borders, Geist type, and a white primary CTA. Tokens live in `src/index.css` `@theme` as OKLCH values. Use Tailwind semantic classes from those tokens:

- Backgrounds: `bg-(--color-bg-primary)`, `bg-bg-secondary`, `bg-bg-tertiary`
- Text: `text-text-primary`, `text-text-muted`, `text-text-subtle`
- Accent: `text-accent`, `hover:text-accent` for labels, links, and focus
- CTA: `bg-cta`, `hover:bg-cta-hover`, `text-text-on-cta` for primary buttons
- Borders: `border-border`, `border-border-emphasis`

Keep one atmosphere. Do not alternate full-bleed section fills. Use hairline `border-t border-border` dividers and `bg-bg-secondary` only for raised panels.

`body` uses `background-color: var(--color-bg-primary)` plus a faint top radial so iOS overscroll matches the page.

Typography: Geist Sans variable for UI and headings (weight 400 or 500). Geist Mono variable for section kickers, dates, and tech lists. Both load through `@fontsource-variable` in `index.css`. Headings use `font-medium` via the base `font-weight: 500` rule, not bold.

Layout convention: `section` with `px-6 py-20 sm:py-28` and an `mx-auto max-w-6xl` wrapper. On large screens, section kickers sit in a `10rem` left column (`lg:grid-cols-[10rem_minmax(0,1fr)]`). Hero is a two-column split (copy left, portrait right). Motion is CSS only (`motion-safe:animate-enter`, header `backdrop-blur`). Honor `prefers-reduced-motion`. Do not add animation libraries.

Token reference:

```css
--color-bg-primary: oklch(0.145 0.01 260);
--color-bg-secondary: oklch(0.19 0.012 260);
--color-bg-tertiary: oklch(0.22 0.012 260);
--color-accent: oklch(0.78 0.11 232);
--color-accent-hover: oklch(0.84 0.09 232);
--color-cta: oklch(0.97 0.005 260);
--color-cta-hover: oklch(0.9 0.008 260);
--color-text-on-cta: oklch(0.145 0.01 260);
--color-text-on-accent: oklch(0.145 0.01 260);
--color-text-primary: oklch(0.97 0.005 260);
--color-text-muted: oklch(0.72 0.015 260);
--color-text-subtle: oklch(0.62 0.015 260);
--color-border: oklch(1 0 0 / 0.08);
--color-border-emphasis: oklch(1 0 0 / 0.12);
```

## Component patterns

- **Pages** (`src/pages/`): compose section components; keep page files thin.
- **Sections** (`src/components/`): one component per homepage block.
- **Data**: shared config in `src/data/` (`constants.ts`, `siteNav.ts`). Page-specific lists as typed arrays colocated in the page or section file (see `Services.tsx`, `HighlightedWork.tsx`).
- **LabeledEntry**: shared label/title/description block for `/services`. Reuse its visual language (`font-mono text-xs text-accent`, `border-t border-border py-8`) for similar content.
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

- **Hero.tsx** - split introduction: copy and white resume CTA on the left, larger natural-color portrait on the right
- **Experience.tsx** - professional timeline with four roles from a data array
- **HighlightedWork.tsx** - readable case-study cards with Problem/Decision/Outcome sections
- **Contact.tsx** - light LinkedIn, resume, and GitHub contact directory
- **Header.tsx** - compact sticky nav, SVG wordmark, reduced-motion-aware scrolling, mobile menu with focus trap
- **Footer.tsx** - identity, location, copyright, and plain text links
- **LabeledEntry.tsx** - shared label/title/description pattern for `/services`
- **SkipToMain.tsx** — skip link for keyboard/screen reader users
- **ScrollToTop.tsx** — scrolls to top on route change
- **pages/Services.tsx** — local client work; uses `LabeledEntry` for What I work on and What to expect

## Assets

| File                              | Purpose                                           |
| --------------------------------- | ------------------------------------------------- |
| `src/assets/mbsc-wordmark.svg`    | Header wordmark (900x70), "MATTHEW B. SMITH" only |
| `src/assets/mbsc-wordmark-sm.svg` | Footer wordmark (680x50)                          |
| `src/assets/favicon-512x512.svg`  | Source SVG for `public/favicon.png`               |
| `src/assets/og-image1200x630.svg` | Source SVG for `public/og-image.png`              |
| `src/assets/demo-cards/`          | Portfolio screenshot PNGs                         |
| `public/favicon.png`              | 512x512 favicon                                   |
| `public/og-image.png`             | 1200x630 social preview                           |
| `public/MatthewSmithResume.pdf`   | Downloadable CV (PDF)                             |
| `public/MatthewSmithResume.docx`  | Downloadable CV (Word)                            |

Regenerate `public/og-image.png`: open `src/assets/og-image1200x630.svg` in Chrome, DevTools viewport 1200x630, screenshot, save to `public/og-image.png`.

Regenerate `public/favicon.png`: open `src/assets/favicon-512x512.svg` in Chrome, capture at 512x512, save to `public/favicon.png`.

## Code style

Prettier: single quotes, semicolons, 2-space indent, 100 char width. ESLint for logic/quality (`eslint-config-prettier` prevents conflicts). Run `npm run lint` after substantive changes.

```tsx
// Component shape
function Example(): React.JSX.Element {
  return (
    <section className="border-t border-border px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl lg:grid lg:grid-cols-[10rem_minmax(0,1fr)] lg:gap-16">
        <p className="mb-6 font-mono text-xs text-text-subtle lg:mb-0">Kicker</p>
        <div>...</div>
      </div>
    </section>
  );
}
```

## Accessibility

Target Lighthouse accessibility 100. `SkipToMain`, focus trap in mobile nav (return focus to hamburger on close), `aria-label` or visible text on interactive elements, `id="main-content"` on `<main>`.

## Contact

Homepage Contact points recruiters to the downloadable resume and professional profiles. Do not publish the raw mailbox address in UI, metadata, docs, or generated assets.

## Deployment

`wrangler.json`: static `./dist`, `not_found_handling: single-page-application`. No `_redirects`. No Worker API entry. Push to `main` auto-deploys via Cloudflare Workers Builds. `.wrangler` is gitignored.

```bash
npm run dev          # UI development
npm run build        # production build (tsc -b && vite build)
npm run build && wrangler dev   # local production preview
```

## DNS

- matthewbsmith.com registered via Cloudflare Registrar
- Email routing is configured in Cloudflare
- Cloudflare Email Routing MX and TXT records in place

## Versioning

Conventional commits (`feat`/`fix`/`chore`/`docs`, subject under 50 chars). Semver tags on `main` after releases (e.g. `git tag -a v1.0.0 -m "message"`).

## Do not

- Commit unless explicitly asked
