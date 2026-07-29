# AGENT.md — Mamikos Clone (Frontend Technical Test)

## Project Goal

Build a frontend clone of Mamikos (a kost/rental search platform) for a Frontend Engineer Intern technical test. The test evaluates AI-assisted workflow quality, not pixel-perfect cloning. Priority: a clean, working, well-structured MVP over a large unfinished build.

## Scope

**In scope**

- Homepage: full clone, broken into reusable section components
- Kost Detail page (stretch goal, only if time allows): breadcrumb, image gallery, title/description, price card, specification, facilities, rules
- Client-side routing from a homepage kost card to its detail page
- Fully responsive layout (mobile / tablet / desktop)

**Out of scope**

- Real backend / API integration — all data is static mock data
- Authentication, chat, notifications, booking/payment flow
- Search functionality that returns real results (input is UI-only)
- Map / location section on the detail page
- Reviews, "owner's story", and related-listing sections on the detail page

## Tech Stack

- Nuxt 4 (Vue 4, Composition API, `<script setup lang="ts">`)
- TypeScript (strict)
- Tailwind CSS (theme extended with design tokens — see `design.md`)
- Pinia — light client state only (e.g. saved/favorite kost), not used for data fetching
- `lucide-vue-next` for all icons (facilities, UI icons)

## Design Reference

- `design.md` — condensed design tokens (colors, typography, spacing, radius, components)
- Reference screenshots: Mamikos homepage & kost detail page (provided separately, not in repo)
- Primary accent: green `#1BAA56`. Font: Lato. Keep the UI flat, white-surface, airy — no gradients, no dark mode, no glossy shadows.

## Conventions

- **Language:** all code, UI copy, comments, and commit messages in English, even though the reference UI is in Bahasa Indonesia (translate labels, e.g. "Cari" → "Search", "Lihat semua" → "View all").
- **Components:** PascalCase filenames, one component per file, Composition API only. Every visual block that repeats (card, banner, grid tile, section header) must be its own reusable component — no copy-pasted markup across sections.
- **Props/typing:** all component props typed via interfaces in `types/`. No `any`.
- **Mock data:** one file per data domain inside `data/` (e.g. `data/kosts.ts`, `data/promos.ts`, `data/cities.ts`, `data/campuses.ts`). Components never hardcode list content inline — they receive it as props or import it from `data/`.
- **Images:** use placeholder images (e.g. seeded `picsum.photos` URLs, or static placeholder blocks) until real assets are available. Always set a meaningful `alt`.
- **Routing:** kost detail lives at `/kost/[slug]`. `slug` is a field on the mock kost object, not derived at runtime.
- **State:** Pinia is intentionally minimal — only for small client-only state (e.g. saved/favorite kost ids). Page content stays as static mock data/props, not store state.

## Folder Structure

```
components/
  layout/       → AppHeader, AppFooter
  home/         → homepage-only sections
  kost/         → kost detail-only sections + KostCard (shared)
  ui/           → BaseButton, BaseChip, BaseBadge, Breadcrumb
pages/
  index.vue
  kost/[slug].vue
data/           → one mock data file per domain
types/          → shared TS interfaces
stores/         → Pinia stores (kept minimal)
```

## Working Agreement

- Work through `ISSUE.md` top to bottom, one issue at a time. Don't start the next issue until the current one's acceptance criteria are met.
- After generating code for an issue, review the diff before accepting — check for hardcoded copy that should be mock data, missing types, or non-reusable markup.
- The homepage is the MVP and must be finished, responsive, and deployed before starting the Kost Detail page.
