# matthewbsmith.com Guide

Important: never edit this file without confirming with Matt first.

Personal site for Matthew B. Smith, a senior software engineer. The homepage is a
portfolio for recruiters and hiring managers. `/services` covers local client work and is
reached by direct link only.

Claude Code loads this file through `CLAUDE.md`. Cursor and Codex read it directly.
Human onboarding lives in `README.md`. When routes, layout, tokens, or deployment
change, propose the matching update to this file.

## Repo Layout

- `src/pages`: route components (`Home`, `Services`, `NotFound`). Keep them thin; they
  compose sections.
- `src/components`: one component per homepage section, plus shared layout pieces
  (`Header`, `Footer`, `SkipToMain`, `ScrollToTop`, `LabeledEntry`).
- `src/data`: shared config. `constants.ts` holds `CAREER_START` and `FEDERAL_START`;
  `siteNav.ts` holds the header nav links.
- `src/hooks`: `useYearsOfExperience.ts`, which turns a start date into whole years.
- `src/assets`: SVG sources for the wordmarks, favicon, and OG image.
- `src/index.css`: Tailwind entry point and `@theme` design tokens.
- `src/App.tsx`: router and page shell. `src/main.tsx`: entry point.
- `public`: portrait, favicon, OG image, resume PDF/DOCX, `robots.txt`, `sitemap.xml`.
- `index.html`: title, meta description, Open Graph tags, and JSON-LD.
- `plans`: local planning docs. Gitignored.

## Stack

- React 19, TypeScript 6, Vite 8.
- Tailwind CSS v4 through `@tailwindcss/vite`.
- React Router v7 (`BrowserRouter`).
- Lucide React for UI icons. Brand icons (LinkedIn, GitHub) are inline SVG in
  `Footer.tsx`.
- Geist Sans and Geist Mono through `@fontsource-variable`.
- Cloudflare Workers static assets. No Worker API, backend, or contact form.
- `framer-motion` is in `package.json` but unused. Do not import it.

## Routes

| Route       | Content                                                  |
| ----------- | -------------------------------------------------------- |
| `/`         | `Hero`, `HighlightedWork`, `Experience`, `Contact`       |
| `/services` | Client work. Not in the header nav, not linked from `/`. |
| `*`         | `NotFound`                                               |

- The header nav renders only on `/`. Links scroll to section IDs `highlights`,
  `experience`, and `contact`.
- When adding, removing, or reordering a homepage section, update `Home.tsx`,
  `siteNav.ts`, this table, and the README together.

## Content Rules

- First person singular only (`I`, `my`, `me`). Any `we`, `our`, or `us` is a bug.
- No em dashes.
- Write plainly. State what was built and what it changed. Avoid filler words like
  "leverage", "passionate", or "seamless", and avoid hype.
- Never publish an email address anywhere: UI, metadata, docs, or generated assets.
  Contact goes through LinkedIn, the resume, and GitHub.
- Do not describe the site or its owner as a company, agency, or consultancy.

## Layout and Design

- One narrow column. Every page wraps content in `mx-auto max-w-2xl`. The header and
  footer use the same width.
- Sections use `border-t border-border px-6 py-16 sm:py-20`. The first section on a page
  has no top border.
- Section headings are `h2` with `text-lg text-text-primary`, followed by an optional
  `text-sm text-text-muted` intro.
- List entries (highlights, roles, services) are separated by `border-t border-border
py-8 first:border-t-0`. Titles are `text-base`. Secondary labels and dates sit on the
  right in `font-mono text-xs text-text-subtle`, wrapping below on narrow screens.
- Tech lists and small metadata use Geist Mono at `text-xs`.
- Headings use weight 500 through the base rule. Do not use bold.
- One primary CTA style: `bg-cta text-text-on-cta hover:bg-cta-hover`. Secondary actions
  are plain text links.
- Keep layouts readable at 375px wide with no horizontal scroll. Prefer content that
  wraps over content that stacks into a narrow column.
- Footer content is centered: wordmark, text, then icons.
- Motion is CSS only (`motion-safe:animate-enter`). Honor `prefers-reduced-motion`.

## Design Tokens

- Tokens live in `src/index.css` under `@theme` as OKLCH values. That file is the source
  of truth.
- Use the generated semantic classes, never raw colors:
  - Backgrounds: `bg-(--color-bg-primary)`, `bg-bg-secondary`, `bg-bg-tertiary`
  - Text: `text-text-primary`, `text-text-muted`, `text-text-subtle`
  - Accent: `text-accent`, `hover:text-accent-hover` for links and focus
  - CTA: `bg-cta`, `hover:bg-cta-hover`, `text-text-on-cta`
  - Borders: `border-border`, `border-border-emphasis`
- Keep one dark atmosphere. Do not alternate full-bleed section backgrounds.

## Code Style

- Read neighboring files first and match their naming, class order, and data shape.
- Keep diffs minimal. Do not refactor unrelated code.
- TypeScript `strict`. Explicit return types on functions. Components return
  `React.JSX.Element`.
- Use `import type` for type-only imports (`verbatimModuleSyntax`,
  `erasableSyntaxOnly`).
- Tailwind utility classes only. No inline `style={}`.
- Page-specific content lives in typed arrays at the top of the page or section file
  (see `HighlightedWork.tsx`, `Experience.tsx`, `Services.tsx`).
- Prettier: single quotes, semicolons, 2-space indent, ES5 trailing commas, 100 character
  width. ESLint handles logic and quality.
- Do not add tests unless asked.

## Accessibility

- Target Lighthouse accessibility 100.
- Keep `SkipToMain`, `id="main-content"` on `<main>`, and the mobile nav focus trap that
  returns focus to the menu button on close.
- Every interactive element needs visible text or an `aria-label`.
- Images need meaningful `alt` text, or `alt=""` when decorative.
- Prefer native elements (`<details>`, `<button>`, `<a>`) over custom widgets.

## Planning

- Keep plans proportional. Small copy or style edits need no plan.
- For larger changes (new section, new route, token or layout changes), use:
  1. **Summary**: which files and components change.
  2. **Decisions**: confirmed requirements versus assumptions. Call out anything that
     affects copy or SEO metadata.
  3. **TODOs**: concrete steps naming target files and symbols.
  4. **Verification**: lint, build, and what to check at mobile and desktop widths.
- Save multi-session plans in `plans/` (gitignored) and keep their status current.

## Workflow

- Be proactive: read the relevant files, make reasonable assumptions, and implement when
  the path is clear. Ask when a choice changes content, copy, or the look of the site.
- Fine to run without asking: file reads, `rg`, `git status`, `git diff`, `npm run lint`,
  and `npm run build`.
- Run `npm run lint` and `npm run build` after substantive changes. Fix what you broke.
  Report pre-existing failures instead of silently fixing them.
- Matt usually runs `npm run dev` himself. Check whether port 5173 is already in use
  before starting another dev server.
- For visual changes, check the page at mobile (375px to 440px) and desktop widths
  before calling it done.
- Do not add dependencies unless asked.

## Git

- Do not run `git commit` or `git push` unless explicitly asked. Pushing to `main`
  deploys to production.
- Commit subjects use a conventional prefix: `feat:`, `fix:`, `docs:`, `chore:`, or
  `refactor:`. Follow it with a lowercase imperative summary. Keep the whole subject at
  50 characters or fewer.
- Add a body only when the change is not obvious from the subject. Leave a blank line
  after the subject, write short imperative lines ("Move", "Remove", "Restore"), and put
  code names in backticks. Wrap at 72 characters.
- State behavior changes plainly. No filler, and no lists of every file touched.
- Tag releases on `main` with semver (`git tag -a v1.7.0 -m "message"`) and bump
  `package.json` `version` to match.

## Deployment

- `wrangler.json` serves `./dist` as static assets with
  `not_found_handling: single-page-application`. No `_redirects` and no Worker entry.
- Pushes to `main` auto-deploy through Cloudflare Workers Builds.
- The domain is registered through Cloudflare Registrar.

```bash
npm run dev                     # local development
npm run lint                    # ESLint
npm run build                   # tsc -b && vite build
npm run build && wrangler dev   # local production preview
```

## Assets

- `src/assets/mbsc-wordmark.svg` and `mbsc-wordmark-sm.svg`: header and footer
  wordmarks. The text is centered inside a wide canvas, so the visible name does not sit
  flush with the left edge of the image.
- `src/assets/favicon-512x512.svg`: source for `public/favicon.png`. To regenerate, open
  it in Chrome and capture at 512x512.
- `src/assets/og-image1200x630.svg`: source for `public/og-image.png`. It loads Geist
  from `node_modules` and the photo from `public/` using relative paths, so render it
  from the repo root:

  ```bash
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --hide-scrollbars --force-device-scale-factor=1 --window-size=1200,630 --virtual-time-budget=3000 --allow-file-access-from-files --screenshot="$PWD/public/og-image.png" "file://$PWD/src/assets/og-image1200x630.svg"
  ```

  Keep it to name, title, location, domain, and avatar so copy changes on the site don't
  require a new image.

- `public/photo1.webp`: hero avatar. `photo1.jpg` is the original.
- `public/MatthewSmithResume.pdf` and `.docx`: downloadable resume.

## Scope Boundaries

- Do not link `/services` from the homepage or header nav.
- Do not add a contact form, backend, analytics, or third-party scripts unless asked.
- Do not edit `dist/` or other build output.
- Do not edit `public/MatthewSmithResume.*` or regenerate binary assets unless asked.
- Do not run `wrangler deploy` or change DNS or Cloudflare settings unless asked.
