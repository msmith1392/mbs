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

Header nav (`src/data/siteNav.ts`) renders only on `/`. Nav order: Highlights, Experience, Contact. Links scroll to section IDs via `scrollIntoView`: `highlights`, `experience`, `contact`. Sections use `scroll-mt-20` where sticky header overlap matters.

## Design system

The site uses a quiet dark technical personal-site aesthetic. Tokens live in `src/index.css` `@theme`. Use Tailwind semantic classes from those tokens:

- Backgrounds: `bg-(--color-bg-primary)`, `bg-bg-secondary`, `bg-bg-tertiary`
- Text: `text-text-primary`, `text-text-muted`, `text-text-subtle`
- Accent: `text-accent`, `bg-accent`, `hover:text-accent`
- Borders: `border-border`, `border-border-emphasis`

Use `bg-(--color-bg-primary)` for the near-black primary surface and `bg-bg-secondary` for subtle section and card contrast. Dividers use `border-border` or `border-border-emphasis`.

`body { background-color: #0b0d10 }` in `index.css` prevents mismatched overscroll on iOS.

Typography: Inter for headings and body copy, weights 400 or 500. Inter is loaded through `@fontsource` in `index.css`.

Layout convention: `section` with an `mx-auto max-w-5xl` wrapper and `px-6 py-16`. Use familiar headings, restrained blue accents, subtle borders, and small border radii. Avoid decorative metadata, numbered sections, and oversized display type.

Token reference:

```css
--color-bg-primary: #0b0d10;
--color-bg-secondary: #11141a;
--color-bg-tertiary: #181c23;
--color-accent: #60a5fa;
--color-accent-hover: #93c5fd;
--color-text-on-accent: #0b0d10;
--color-text-primary: #f4f4f5;
--color-text-muted: #a1a1aa;
--color-text-subtle: #858993;
--color-border: #272a31;
--color-border-emphasis: #3f434c;
```

## Component patterns

- **Pages** (`src/pages/`): compose section components; keep page files thin.
- **Sections** (`src/components/`): one component per homepage block.
- **Data**: shared config in `src/data/` (`constants.ts`, `siteNav.ts`). Page-specific lists as typed arrays colocated in the page or section file (see `Services.tsx`, `HighlightedWork.tsx`).
- **LabeledEntry**: shared label/title/description block for `/services`. Reuse its visual language (`text-sm font-medium text-accent`, `border-t border-border py-8`) for similar content.
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

- **Hero.tsx** - compact two-column introduction with resume and contact actions and natural-color headshot
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
    <section className="bg-(--color-bg-primary) px-6 py-16">
      <div className="mx-auto max-w-5xl">...</div>
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
