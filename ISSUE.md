# ISSUE.md — Task Backlog

Work top to bottom. Each issue is meant to be handed to the AI agent as one focused prompt. Don't move to the next issue until the current one's acceptance criteria are checked off — review the generated code before accepting it.

Time estimates assume AI-assisted execution and are a pacing guide, not a hard limit. Total test budget: 3-5 hours.

---

## Phase 1 — Setup (~20 min)

### ISSUE-01: Project Scaffold & Tooling

**Goal:** a working Nuxt 4 + TS project with all dependencies installed and the folder skeleton in place.

- [ ] Init Nuxt 4 project with TypeScript
- [ ] Install & configure Tailwind CSS
- [ ] Install Pinia, register module
- [ ] Install `lucide-vue-next`
- [ ] Create empty folder skeleton per AGENT.md (`components/{layout,home,kost,ui}`, `data/`, `types/`, `stores/`)
- [ ] Project runs on `npm run dev` with no errors

**Est:** 15-20 min

---

## Phase 2 — Foundation (~45-55 min)

### ISSUE-02: Design Tokens + Base UI Components

**Goal:** Tailwind theme matches `design.md`; base components are ready to reuse everywhere.

- [ ] Extend `tailwind.config.ts` with colors, font family (Lato via Google Fonts / `@nuxt/fonts`), spacing, radius from `design.md`
- [ ] `BaseButton.vue` — primary / secondary / link variants
- [ ] `BaseChip.vue`
- [ ] `BaseBadge.vue` (discount tags, rating, room-availability tags)
- [ ] `Breadcrumb.vue` (generic, accepts an array of `{ label, to }`)

**Est:** 25-30 min

### ISSUE-03: Types & Mock Data

**Goal:** all list content for the homepage is typed and centralized — nothing hardcoded in components later.

- [ ] `types/kost.ts` — `Kost`, `KostDetail`, `Promo`, `City`, `Campus`, `Facility`, `Rule`
- [ ] `data/kosts.ts` — ~10-12 mock kost items (cover the "Promo Ngebut" / "Recommended" / "On Promo" sections; include slug, image placeholder, price, discount, rating, facility tags)
- [ ] `data/promos.ts` — 3 promo banner items
- [ ] `data/cities.ts` — 8 popular-area cities
- [ ] `data/campuses.ts` — 8 campus items

**Est:** 20-25 min

---

## Phase 3 — Homepage MVP (~2-2.5h)

### ISSUE-04: App Shell — Header & Footer

- [ ] `AppHeader.vue` — logo, nav items (Search, Favorites, Chat, Notifications, More), avatar
- [ ] `AppFooter.vue` — brand block, app download badges, 3 link columns, social icons, copyright
- [ ] Wired into `app.vue`

**Est:** 20-25 min

### ISSUE-05: Hero Search + Promo Banners

- [ ] `HeroSearch.vue` — headline, subtext, location search input + Search button, background illustration
- [ ] `PromoBannerCarousel.vue` — 3 promo banners from `data/promos.ts`, prev/next controls, "View all promo" link
- [ ] `SurveyBanner.vue` and `TrustBanner.vue` (static info banners)

**Est:** 30-35 min

### ISSUE-06: KostCard + Reusable Carousel Section

This is the core repeating pattern — build it once, reuse it three times.

- [ ] `KostCard.vue` — image with badges, type + rating, title, location, facility icon row, discount + strikethrough price, final price. Props typed via `Kost`.
- [ ] `KostCarouselSection.vue` — reusable wrapper: section title, optional city label/dropdown, optional countdown-timer slot, "View all" link, prev/next controls, horizontal-scroll row of `KostCard`
- [ ] Use `KostCarouselSection` 3x on the homepage: "Promo Ngebut" (with countdown), "Recommended kost in [city]", "Kost on promo"

**Est:** 45-50 min

### ISSUE-07: Popular Areas, Campus Grid, About Section

- [ ] `PopularAreaGrid.vue` — city image tiles + "View all" tile
- [ ] `CampusGrid.vue` — campus icon tiles + "View all" tile
- [ ] `AboutSection.vue` — static description block

**Est:** 20-25 min

### ISSUE-08: Homepage Assembly + Responsive Pass + Deploy Checkpoint

- [ ] Assemble all sections in `pages/index.vue` in the correct order
- [ ] Check mobile / tablet / desktop breakpoints; fix carousel overflow/scroll on mobile
- [ ] Build check (`nuxt build`) passes with no errors
- [ ] Deploy the MVP (Vercel/Netlify) — this is your safety checkpoint before attempting the detail page

**Est:** 30-35 min

> **Checkpoint:** if you're past ~3 hours here, stop and move straight to documentation instead of starting Phase 4. A polished, deployed homepage beats an unfinished detail page.

---

## Phase 4 — Kost Detail Page (stretch goal, ~1.5h)

### ISSUE-09: Routing + Breadcrumb, Image Gallery, Title/Description

- [ ] `pages/kost/[slug].vue`; `KostCard` links to `/kost/[slug]`
- [ ] Extend mock data with detail fields (gallery images, specification, facilities, rules), e.g. `data/kostDetails.ts` keyed by slug
- [ ] `ImageGallery.vue` — 1 large image + 2 stacked images grid, "View all photos" button
- [ ] `KostHeader.vue` — managed-by badge, title, type/location/rating/review count, room availability, Save/Share buttons, owner mini-info
- [ ] `Breadcrumb` wired with a dynamic trail (Home / City / Kost name)

**Est:** 35-40 min

### ISSUE-10: Price Card

- [ ] `PriceCard.vue` — discount + strikethrough price, final price, start-date + duration selectors (static/non-functional is fine), two CTA buttons: "Ask Owner" (secondary), "Apply to Rent" (primary)
- [ ] Sticky on desktop, reflows to inline/bottom on mobile

**Est:** 15-20 min

### ISSUE-11: Specification, Facilities, Rules Sections

- [ ] `SpecificationSection.vue` — room size, electricity note
- [ ] `FacilitiesSection.vue` — grouped: Room / Bathroom / Common / Parking, each item paired with a `lucide-vue-next` icon
- [ ] `RulesSection.vue` — grouped: room-type rules / general kost rules

**Est:** 30-35 min

### ISSUE-12: Detail Page Assembly + Final Polish + Redeploy

- [ ] Assemble detail page sections in order (breadcrumb → gallery → header → price card → specification → facilities → rules)
- [ ] Responsive check
- [ ] (Optional) Pinia `stores/favorites.ts` — toggle saved kost, wire to the Save button + `KostCard` heart icon
- [ ] Redeploy, re-verify the live link

**Est:** 30-35 min

---

## Phase 5 — Wrap-up (~15-20 min)

### ISSUE-13: Project README

- [ ] Approach summary, tools/AI agent used, key decisions
- [ ] What's in scope vs intentionally skipped, and why
- [ ] Live demo link + how to run locally
- [ ] Cross-check against the test's evaluation criteria before submitting
