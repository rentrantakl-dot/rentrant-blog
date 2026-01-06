# RentRant Design System

## Design Intent

RentRant should feel like **a polished black shoe with a bright red sole**.

At first glance, the product is calm, trustworthy, and almost boring in the best possible way. It should feel stable, neutral, and credible — something renters can rely on when stakes are high.

Then, at deliberate moments, a bold accent appears. That accent is intentional, rare, and meaningful. It signals *attention*, *risk*, or *dissent*. It is never decorative.

This balance — reassurance first, boldness as a reveal — is core to the RentRant identity.

---

## Core Principles

1. **Calm dominates**
   Most screens should feel neutral and quiet.

2. **Accent colours are semantic**
   If a bold colour appears, it must mean something.

3. **Gradients and shades are permitted**
   Use gradients and shades derived from the core palette if they are visually pleasing or arresting.

4. **Readable over clever**
   Typography and contrast must prioritise long-form reading and scanning.

5. **Opinionated but restrained**
   RentRant has a voice, but it never shouts without reason.

---

## Colour Palette

### Base (The Shoe — 90–95% of UI)

* **Ink / Primary Text**: `#0D0D0D`
* **Paper / Main Background**: `#F2F2F2`
* **White / Elevated Surfaces**: `#FFFFFF`

Usage:

* Body text
* Headings
* Page backgrounds
* Cards, tables, forms
* Long-form content

These colours establish trust and visual stability.

---

### Interaction (The Polish)

* **Action Blue**: `#38BDF2`

Usage:

* Primary buttons
* Inline links
* Focus states
* Active UI controls

Rules:

* Gradients and shades derived from the palette are allowed if visually pleasing
* Do not mix with red in the same component
* Blue represents *action and navigation*, not emotion

---

### Emphasis (The Red Sole — Surprise & Accent)

* **Defiance Red**: `#F22816`
* **Soft Alert**: `#F25244`

Usage:

* **Surprise accents / Showcase** (e.g. "New", "Hot")
* Warning banners
* Critical notices
* Rant highlights

Rules:

* **Surprise**: Use red to arrest attention or create a visual "pop".
* **Beta is Insurance**: Beta badges should be Amber/Yellow (caution), not Red.
* Gradients on text allowed only for "show off" elements.
* Never use as a page background
* Never use for default buttons
* Red should feel *earned*, not decorative

---

## Typography

### Primary Typeface (UI & Body)

**Inter**

Rationale:

* Neutral and highly readable
* Feels modern but not trendy
* Excellent for data-heavy and text-heavy interfaces
* Widely available and well-supported

Usage:

* Body text
* UI labels
* Forms
* Navigation

---

### Secondary Typeface (Headings & Emphasis)

**Source Serif 4**

Rationale:

* Adds seriousness and editorial weight
* Signals credibility and long-form reading
* Contrasts well with Inter without feeling old

Usage:

* Blog headings
* Long-form article titles
* Key editorial sections

Rules:

* Do not overuse
* Avoid for small UI text

---

## Tailwind Guidance

* Colours must be defined as semantic tokens (e.g. `text-ink`, `bg-paper`, `text-attention`)
* Avoid direct hex usage in components
* SVG icons must inherit `currentColor`
* Red tokens must never be used without semantic meaning

---

## What Not To Do

* No purple or teal palettes
* No gradients or shadows that clash with the core palette
* No decorative red
* No mixing blue and red in the same interaction
* No reinterpreting accent colours creatively

---

## Summary

RentRant should feel dependable first and opinionated second.

Most of the time, the design should disappear.
When colour appears, it should make the user pause.
