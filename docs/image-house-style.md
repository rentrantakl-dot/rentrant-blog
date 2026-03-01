# RentRant Image House Style

## Style: Loose Ink Line Drawing with Watercolour Wash

Editorial, opinionated, tenant-side. Not stock photography, not corporate vector flat.
Slightly imperfect linework — suggests a knowing human made this, matching the cheeky brand voice.

---

## Style Prefix (paste at the start of every prompt)

```
Loose editorial ink line drawing with soft watercolour washes, slightly imperfect linework,
warm ochre and muted grey-blue Auckland palette, small expressive human figures,
watercolour bleeds slightly past ink lines, hand-illustrated feel, no text or labels,
wide landscape format suitable for a blog header.
```

---

## Colour Palette

| Role | Colour |
|------|--------|
| RentRant accent | Warm honey/ochre yellow — used sparingly for emphasis |
| Architecture | Muted kauri-wood brown and weatherboard cream |
| Sky / water | Auckland harbour grey-blue |
| Brick details | Aged terracotta |
| Warning / emphasis | Cheeky coral/red |

---

## Recurring Visual Language

- **Characters:** Slightly round, expressive figures. No detailed faces — mood over portrait.
  - A renter peering suspiciously at a wall
  - A cyclist looking smug
  - A landlord who is conspicuously absent
- **Architecture:** NZ weatherboard villas with bay windows are the default building type
- **Scale:** Small human figures against larger environments reinforces the renter-as-underdog tone

---

## Image Storage & Dimensions

- **Location:** `static/images/`
- **Format:** PNG (what nano banana exports)
- **Dimensions:** Generate at **1200 × 630px** (1.9:1 ratio)
  - Matches the OG/Twitter card meta tags hardcoded in `head.html`
  - Renders as full-width blog header on desktop (~768px wide) and scales cleanly to mobile (~320px wide, ~168px tall — not too tall, not cramped)
- **Naming convention:** `[topic-slug].png` — e.g. `grey-lynn-villa-guide.png`
- **Frontmatter:** two lines always together — note: NO leading slash on the path:
  ```yaml
  image: "images/filename.png"
  image_alt: "Brief descriptive alt text for accessibility"
  ```
  The leading slash is intentionally omitted. Hugo's `absURL` with a relative path
  correctly appends to the full baseURL (`https://rentrant.nz/blog/`), producing
  `https://rentrant.nz/blog/images/filename.png`. A leading slash would strip the
  `/blog/` subpath and break images in production.

### Mobile behaviour
The theme renders images with `width: 100%; height: auto` so they scale automatically.
`loading="lazy"` is set on the image tag so they don't block mobile page load.
At 1200×630, images will never be awkwardly tall on a narrow screen.

---

## Article Prompts

### Renting in Grey Lynn (main guide)
**Article:** `renting-in-grey-lynn-auckland.md`
**File:** `grey-lynn-villa-guide.png`

```
[style prefix]

A classic New Zealand weatherboard villa with a bay window and covered front porch,
Grey Lynn inner-suburb street scene, one small figure on the front steps holding a
moving box and looking appraisingly at the building. Warm afternoon light,
leafy pohutukawa tree on the left edge framing the scene.
```

---

### Best Suburbs for Renters (suburb comparison)
**Article:** `best-suburbs-for-renters-in-auckland-2026.md`
**File:** `auckland-suburbs-comparison.png`

```
[style prefix]

An illustrated Auckland isthmus bird's-eye view sketch — different neighbourhoods
suggested by loose architectural clusters at varying distances from a central city
landmark. Price tags float as small speech bubbles above different areas,
varying in size. A small figure at the bottom studies the scene with binoculars,
looking slightly overwhelmed but determined. The harbour visible in the distance.
```

---

### City Rail Link / Maungawhau station
**Article:** `city-rail-link-maungawhau-grey-lynn-2026.md`
**File:** `city-rail-link-grey-lynn.png`

```
[style prefix]

A modern urban train station entrance with dark volcanic basalt stone cladding and
patterned concrete walls. Warm amber-lava coloured glass triangle panels glow in the
facade. A small figure on a bicycle approaches from the street. Behind and above the
station building, the silhouette of a volcanic cone (Mount Eden) rises against a
grey-blue Auckland sky. The street-level approach has the texture of an inner suburb —
footpath, low buildings — meeting this serious piece of infrastructure.
```

---

### Great North Road Cycleway / Green Corridor
**Article:** `great-north-road-cycleway-grey-lynn-2026.md`
**File:** `great-north-road-cycleway.png`

```
[style prefix]

A separated cycleway lined with young native trees in watercolour green, one cheerful
small figure cycling confidently in the protected lane while large bus and car shapes
loom to the right. The trees are slightly oversized and optimistic — aspirational planting.
The figure on the bike looks a bit smug. Dappled watercolour light through the canopy.
```

---

### Plan Change 120 — 6-storey zoning
**Article:** `plan-change-120-grey-lynn-renters-2026.md`
**File:** `plan-change-120-grey-lynn.png`

```
[style prefix]

A charming 1920s bungalow in ink and warm watercolour sits centre-left. Directly behind it,
rendered in faint pencil sketch and dotted-line outlines only, looms the ghost of a
tall six-storey apartment building. The contrast between solid-warm-real and
dotted-speculative-grey is the image. A small figure on the bungalow porch
looks over their shoulder at the outline, expression uncertain.
```

---

### Leys Institute reopening
**Article:** `leys-institute-grey-lynn-reopening-2026.md`
**File:** `leys-institute-grey-lynn.png`

```
[style prefix]

A grand 1905 heritage public building in watercolour ink — stone facade, arched windows,
slightly worn grandeur — wrapped in construction scaffolding rendered in thin grey lines.
A small figure stands in front looking up at it, arms folded, patient but waiting.
Muted palette except warm ochre light from the building's windows behind the scaffolding,
suggesting something worth waiting for.
```

---

### Grey Lynn Villa Renovation / Healthy Homes
**Article:** `grey-lynn-villa-renovation-sustainability-2026.md`
**File:** `grey-lynn-villa-renovation.png`

```
[style prefix]

A split cross-section of a Grey Lynn weatherboard villa. The left half shows the
beautiful interior — warm rimu floors, a renovated kitchen, high ceilings —
rendered in warm honey and timber tones. The right half reveals the roof cavity
above: thin, patchy, clearly inadequate insulation shown as a few wispy lines against
cold grey. A small figure stands in the middle of the living room, arms folded,
breath visible as a small puff of cold air despite the nice surroundings.
The contrast between warm aesthetic and cold reality is the whole image.
```

---

### Grey Lynn 2030 / Community & Sustainability
**Article:** `grey-lynn-2030-net-zero-sustainability.md`
**File:** `grey-lynn-2030-sustainability.png`

```
[style prefix]

A Grey Lynn Farmers Market scene — a row of market stalls with produce, plants and
handmade goods, set against a backdrop of weatherboard villas on a leafy street.
Small figures browse contentedly. One stall has overflowing vegetables in watercolour
greens and ochres. In the background, a community garden plot is just visible beside
the park. The mood is genuine warmth and community rather than utopian polish —
lived-in, a bit imperfect, clearly real.
```

---

### What to Check Before Signing Your NZ Rental Lease
**Article:** `practical-nz-renter-checklist-2026.md`
**File:** `nz-rental-lease-checklist.png`

```
[style prefix]

A small figure stands in a rental property doorway, phone raised to photograph
something on the wall, a printed checklist tucked under their other arm. Expression
is focused and slightly suspicious — methodical, not anxious. In the background,
a second figure (the property manager) stands with arms crossed, rendered slightly
smaller and in cooler grey tones, visibly waiting. The renter is in warm ochre light;
the property manager in cool shadow. The power dynamic is clear: the renter is
in control of this moment. A tiny snail sits on the doorstep — unhurried, deliberate.
```

---

## Nano Banana Tips

- If the style prefix isn't sticking, add `--style watercolor ink illustration` as a suffix
- If figures look too polished, add `rough sketch, gestural marks` to the prefix
- If colours are too saturated, add `muted tones, low saturation, editorial palette`
- Once a first batch is done, compare against the palette above and adjust prefix accordingly
