# MILLRAT Studio — Asset Checklist

All images go in `/public/assets/images/`. They are referenced with paths like `/assets/images/filename.ext`.

## Status legend
- [ ] Not yet provided
- [x] In place and ready

---

## Brand / Global

| File | Dimensions | Format | Used in | Notes |
|---|---|---|---|---|
| [ ] `millrat-logo.svg` | — (vector) | SVG | Header, Footer, Home hero | Full Millrat Studio wordmark + logomark. Transparent bg. **Standalone studio logo still needed.** |
| [ ] `millrat-logo-dark.svg` | — | SVG | Any light bg context | Ink-colored version for paper sections |
| [ ] `og-image.jpg` | 1200 × 630 px | JPG | Social link previews (OG/Twitter) | Product shot + "MILLRAT Pack — 4 Games for Game Night". Compress to <200KB. |
| [ ] `favicon.svg` | 32 × 32 px | SVG | Browser tab | Replace the default Vite favicon |

---

## MILLRAT Pack — Product Photos & Logo

| File | Dimensions | Format | Used in | Notes |
|---|---|---|---|---|
| [x] `millrat-pack/millrat-pack-logo.png` | — | PNG (transparent) | Hero (decorative), Current Release card, Kickstarter strip | "MILLRAT PACK!" sticker-badge logo art |
| [x] `millrat-pack/millrat-pack-hero-closeup.jpg` | — | JPG | Millrat Pack hero, Homepage Current Release card | Side-angle box shot in colorful tissue paper |
| [x] `millrat-pack/millrat-pack-hero-overhead.jpg` | — | JPG | What's in the Box section | Overhead flat-lay of open box with all 4 games |
| [x] `millrat-pack/millrat-pack-kickstarter-strip.png` | — | PNG | Kickstarter section header | Logo + Kickstarter launch date sticker combo |
| [x] `millrat-pack/millrat-pack-kickstarter-ad.avif` | — | AVIF | Kickstarter section preview image | Campaign feature card graphic |
| [x] `millrat-pack/millrat-pack-testimonials.png` | — | PNG | Reviews section | Real players at table + playtester quotes |

---

## Game Logos (Title Art)

| File | Format | Used in | Notes |
|---|---|---|---|
| [x] `games/someones-y-logo.png` | PNG (transparent) | Someone's Y game card, quiz result | Purple foam-letter style |
| [x] `games/scrapbook-logo.png` | PNG (transparent) | Scrapbook game card, quiz result | Dark maroon textured letters |
| [x] `games/footfalls-logo.png` | PNG (transparent) | Footfalls game card, quiz result | Wood-texture carved letters |
| [x] `games/bad-eggs-logo.png` | PNG (transparent) | Bad Eggs game card, quiz result | Yellow cracked-texture letters |

---

## Game Component Renders (Spreads)

| File | Format | Used in | Notes |
|---|---|---|---|
| [x] `games/someones-y-components.png` | PNG (transparent) | Someone's Y card image area, quiz result, What's in the Box | Components spread out |
| [x] `games/scrapbook-components.png` | PNG (transparent) | Scrapbook card image area, quiz result, What's in the Box | Cards + corner pieces + tokens |
| [x] `games/footfalls-components.png` | PNG (transparent) | Footfalls card image area, quiz result, What's in the Box | Board tiles + meeples + cards |
| [x] `games/bad-eggs-components.png` | PNG (transparent) | Bad Eggs card image area, quiz result, What's in the Box | Full component spread |

---

## People / Photography

| File | Dimensions | Format | Used in | Notes |
|---|---|---|---|---|
| [x] `studio/adam-and-nick.png` | — | PNG (transparent) | About section, About page, Homepage Makers section | On dark bg — white annotations visible |
| [ ] `millrat-pack/kickstarter-preview.jpg` | 1200 × 675 px | JPG | Kickstarter campaign thumbnail | Matches Kickstarter's recommended thumbnail size |

---

## Still Missing Before Launch

1. **`millrat-logo.svg`** — standalone Millrat Studio logo (not the MILLRAT Pack sticker). Used in Header and Footer as the brand mark.
2. **`og-image.jpg`** — 1200×630 social share preview. Can be generated from the hero photo + text overlay.
3. **`favicon.svg`** — browser tab icon. Should match the studio logomark.
4. **`millrat-pack/kickstarter-preview.jpg`** — Kickstarter thumbnail at their required dimensions.

---

## Optimization notes
- PNG game components: transparent backgrounds — they float over colored section backgrounds
- JPGs: compress to <200KB each; use Squoosh or imagemin
- SVGs: run through SVGO when ready
- AVIF is already an optimized format; no further compression needed
- All images have real `alt` attributes in the code

---

## Where to swap images in code

Search for `TODO: replace` to find any remaining swap points:

```
grep -r "TODO: replace" src/
```
