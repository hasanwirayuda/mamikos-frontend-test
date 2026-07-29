# Mamikos Homepage Clone — Frontend Engineer Technical Test

A frontend clone of the Mamikos homepage, built with an AI-assisted, per-issue workflow. Final submission scope is **homepage only** (the kost detail page was planned as a stretch goal but was intentionally cut to keep the delivered scope polished within the time budget).

- **Live demo:** https://mamikos-frontend-test.vercel.app/
- **Repository:** https://github.com/hasanwirayuda/mamikos-frontend-test
- **Screen recording:** [Google Drive link — to be added]

## Tech Stack

- Nuxt 4 (Vue 4, Composition API, `<script setup lang="ts">`)
- TypeScript
- Tailwind CSS (theme extended with a custom design token set)
- Pinia (installed for the planned favorites/saved-kost state; not used in the final homepage-only scope)
- lucide-vue-next for icons

## Approach

Before writing any code, the test requirements (`README.md` from the test brief) and a scraped design reference (`design.md`) were turned into two planning documents:

- **AGENT.md** — persistent project context for the AI coding agent: scope boundaries, tech stack, folder structure, and coding conventions.
- **ISSUE.md** — the work broken into 13 sequential, independently reviewable issues across 5 phases (Setup → Foundation → Homepage MVP → Kost Detail stretch goal → Wrap-up), each with an explicit acceptance-criteria checklist.

This planning step was done deliberately before touching code, so that every AI prompt afterward could reference a fixed spec instead of re-explaining context each time.

## AI Workflow

Development used two AI agents across the session, both driven by the same `ISSUE.md`/`AGENT.md` plan:

1. **Gemini (Antigravity built-in agent)** — ISSUE-01 to ISSUE-04 (project scaffold, design tokens, base UI components, types, mock data, header, footer). Project setup itself was done manually rather than delegated, to stay hands-on with a structure similar to prior personal projects.
2. **Claude** — ISSUE-05 to ISSUE-08 (Hero + promo banners, KostCard + reusable carousel section, popular areas/campus grid/about section, homepage assembly, responsive pass, and deploy). The switch happened mid-test after the Gemini session hit its usage limit; work continued in a fresh chat by handing over the current file structure and existing component code as context.

**Prompting pattern:** issues were executed one at a time, granular — one issue per prompt, reviewing the generated code before moving to the next, rather than batching multiple issues into a single agent run. This kept each diff small enough to actually verify against the acceptance criteria instead of rubber-stamping large generations.

**Note on the recording:** the screen recording captures the complete end-to-end development process—from the initial planning phase through deployment (~5h13m total). It begins with reviewing the test brief and design reference, then creating `AGENT.md`, `ISSUE.md`, and a condensed `design.md` before any implementation started.

- An `npm install` error that was debugged and resolved with AI assistance.
- A `npm run dev` failure caused by the project living inside the OS `.Trash` path instead of the intended working directory (`docs/development/mamikos/`) — resolved by relocating the project.

## Key Decisions & Tradeoffs

- **Homepage-only scope.** With the detail page (ISSUE-09 onward) unstarted by the ~5-hour mark, the decision was to stop and finish the homepage properly — responsive, deployed, documented — rather than start a detail page that would end up unfinished. This follows the test brief's own guidance that a small, polished submission beats a large, incomplete one.
- **Reusable `KostCarouselSection`.** The three kost list sections on the homepage (Promo Ngebut, Recommended, On Promo) share one component. Section-specific content (like the Promo Ngebut countdown) is passed through a `meta` slot instead of a dedicated prop, so the component doesn't accumulate one-off props for a single use case.
- **Data-driven, not hardcoded.** All list content (kosts, promos, cities, campuses) lives in `data/`, typed via shared interfaces in `types/`, and is filtered/passed into components as props (e.g. `mockKosts.filter(k => k.isPromoNgebut)`), keeping components reusable and testable independent of the mock data source.
- **`goToDetail` left as a placeholder.** `KostCard` selection emits an event that currently only logs, instead of routing to `/kost/[slug]`, since that route doesn't exist in the homepage-only scope. This avoids a dead link/404 while keeping the event wiring ready for a future detail-page implementation.
- **Polymorphic `BaseButton`.** Renders as either `NuxtLink` or a native `button` depending on whether a `to` prop is passed, so the same component covers both navigation links and form actions (e.g. the hero search submit button) without a separate link-button variant.

## What Was Skipped (and why)

- **Kost detail page** (breadcrumb, image gallery, price card, specification/facilities/rules sections) — planned as a stretch goal in `ISSUE.md`, not started due to time budget.
- **Real search / booking / auth / payment** — explicitly out of scope per `AGENT.md`; all interactive elements are UI-only against mock data.
- **Favorites persistence (Pinia store)** — the store module was scaffolded but never wired up, since it was tied to the detail page's Save button.

## QA

- Manual responsive check at mobile (375px), tablet (768px), and desktop (1280px+) — all breakpoints passed.
- `npm run build` completes with no errors.
- Deployed and re-verified on the production URL (not just localhost).

## Running Locally

```bash
git clone https://github.com/hasanwirayuda/mamikos-frontend-test.git
cd mamikos-frontend-test
npm install
npm run dev
```
