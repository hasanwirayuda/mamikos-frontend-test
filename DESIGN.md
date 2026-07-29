# DESIGN.md — Mamikos Clean Search (Condensed Design Reference)

Condensed from the full scraped design system. Use this as the source of truth for the Tailwind theme and component styling — treat it as a quick lookup, not narrative documentation.

## Colors

| Token             | Hex       | Usage                                   |
| ----------------- | --------- | --------------------------------------- |
| primary           | #1BAA56   | CTAs, active states, brand accent       |
| primary-hover     | #15954B   | button hover state                      |
| secondary         | #484848   | headings, body text, nav                |
| tertiary          | #8F8F8F   | muted/helper text, metadata             |
| surface / neutral | #FFFFFF   | page & card background                  |
| border            | #E8E8E8   | dividers, input/card borders            |
| error             | #D64545   | validation/destructive only, use rarely |
| shadow            | #00000014 | very light elevation only               |

## Typography

Font: **Lato**, sans-serif. Letter-spacing: `0` everywhere.

| Style            | Size / Line height | Weight |
| ---------------- | ------------------ | ------ |
| headline-display | 32px / 42px        | 900    |
| headline-lg      | 24px / 29px        | 700    |
| headline-md      | 20px / 24px        | 600    |
| headline-sm      | 18px / 22px        | 600    |
| body-lg          | 16px / 24px        | 600    |
| body-md          | 16px / 24px        | 400    |
| body-sm          | 14px / 20px        | 400    |
| label-lg         | 16px / 24px        | 700    |
| label-md         | 14px / 20px        | 700    |
| label-sm         | 12px / 16px        | 700    |
| nav-link         | 14px / 20px        | 400    |

## Radius

`none: 0 · sm: 4px · md: 8px · lg: 12px · xl: 16px · full: 9999px`
Buttons/inputs → `sm`. Cards/panels → `md`. Chips/pills only → `full`. Never round primary cards or buttons into pills.

## Spacing scale

`xs: 8px · sm: 16px · md: 24px · lg: 32px · xl: 60px`
Small tokens for internal control spacing; large tokens for section separation. Card internal padding: 24px.

## Components (quick spec)

- **button-primary:** solid `primary` bg, white text, `label-lg`, radius `sm`, padding `12px 20px`, height `40px`. Hover → `primary-hover`.
- **button-secondary:** transparent bg, `primary` border + text, same sizing as primary.
- **button-link:** text-only, `secondary` color, `body-sm`, no padding/radius.
- **input:** white bg, `border` outline, radius `sm`, height `48px`, padding `12px 16px`, optional leading icon, muted placeholder.
- **card:** white bg, radius `md`, padding `24px`, very light shadow only when tappable/distinct.
- **chip:** `#F5F5F5` bg, radius `full`, padding `8px 12px`, `label-md`, bold.

## Layout

- Centered, fixed max-width container, generous outer margins.
- Content in stacked sections, not a tight grid — hero text left / image right, promo content as large horizontal cards below.
- Elevation stays flat: soft shadow + thin border only, no gradients, no glossy/raised look.

## Do / Don't

- Do keep surfaces white-dominant, green as the only accent color.
- Do use bold Lato weights for headlines, CTAs, nav emphasis.
- Do preserve generous whitespace between major sections.
- Do use subtle border + very soft shadow for separation.
- Don't use gradients, dark backgrounds, or glossy effects.
- Don't over-round cards/buttons into pills — that's reserved for chips.
- Don't shrink body text below readable sizes.
- Don't crowd the layout with dense multi-column content.
