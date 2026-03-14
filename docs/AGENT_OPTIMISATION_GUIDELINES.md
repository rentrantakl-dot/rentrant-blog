# Agent Optimisation Guidelines for RentRant Articles

> **How this document was made:** The topic, angle, and evaluation criteria were defined by a human. An AI tool conducted the audit across all published articles and drafted these guidelines. Every recommendation here has been cross-checked against the existing content. Spot something off? [Tell us](mailto:hello@rentrant.nz).

*Last updated: February 2026*

---

## Why This Matters

AI agents — LLM-powered assistants, search engines like Perplexity and ChatGPT with browsing, RAG pipelines, and voice assistants — increasingly read and summarise web content to answer user questions. If someone asks "what's the bond maximum in NZ?" an agent will scan available sources and surface the clearest, most structured answer.

RentRant articles are already strong on accuracy and voice. The gaps are in *machine-readability*: agents struggle with facts buried in prose, ambiguous dates, implied jurisdiction, and colloquial phrasing that requires human context to decode.

These guidelines are additive — they don't replace the existing `BLOG_CONTENT_PROMPT.md`. They describe additional structural requirements that sit on top of voice and SEO considerations.

---

## The Audit: What the Current Articles Do Well

Before the gaps, what's already working:

- **Specific numbers throughout** — bond limits, notice periods, dollar amounts, timeframes. Agents can extract these cleanly.
- **Structured tables** — the rent-by-suburb table, upfront cost breakdowns, red flag cheat sheets. These are excellent for agent extraction.
- **External links to authoritative sources** — `.govt.nz` domains are trusted by agents as canonical NZ government sources.
- **Frontmatter metadata** — title, date, description, tags. Clean and consistent.
- **Checklists** — the `- [ ]` format is parseable and often surfaced directly in AI answers.
- **Template emails** — actionable content agents can quote directly.

---

## The Gaps: Where Agents Struggle

### 1. No structured "Key Facts" block
Legal facts are distributed across prose. An agent scanning for "how many days to lodge bond?" has to read the whole article rather than finding a designated fact block.

### 2. Effective dates aren't always explicit
"Since July 2025" appears inconsistently. Some facts say "since 30 January 2025", others just say "the law requires." An agent can't tell how current a rule is without a date.

### 3. Jurisdiction is often implied
Articles assume the reader knows this is NZ content. An agent processing the raw text may not surface that context unless it's stated explicitly early.

### 4. Blockquotes carry multiple semantic types
The same `>` blockquote is used for warnings, key takeaways, example emails, quotes from sources, and rhetorical emphasis. Agents can't distinguish between "this is a warning" and "this is an example" without a label.

### 5. The AI disclosure is HTML-only
The `ai-disclosure.html` partial appears at render time but doesn't exist in the markdown source. Agents consuming raw markdown (via RSS, API, or scraping) never see the disclosure.

### 6. No explicit content-type declaration
Frontmatter has tags but no machine-readable field declaring whether an article is a `guide`, `news`, `checklist`, or `analysis`. This affects how agents should weight the content.

### 7. Cross-references are human-readable but not typed
Internal links say "we've covered this in our guide" but don't tell an agent what the linked article contains or how authoritative the cross-reference is.

### 8. Colloquial phrasing can confuse agent extraction
Phrases like "yeah nah it probably is" are perfect for human voice. But an agent extracting a factual claim might mis-parse the negation. Where a fact is the point, state it plainly.

---

## Required Changes for New Articles

### R1 — Key Facts block in frontmatter

Add a `key_facts` field to every article frontmatter. This is the machine-readable summary an agent can surface without reading the body.

```yaml
key_facts:
  jurisdiction: "New Zealand"
  last_verified: "2026-02-28"
  content_type: "guide"   # guide | checklist | news | analysis | update
  primary_law: "Residential Tenancies Act 1986"
  facts:
    - "Bond maximum: 4 weeks' rent"
    - "Pet bond maximum: 2 weeks' rent (from 1 December 2025)"
    - "Bond lodgement deadline: 23 working days"
```

Rules for `key_facts`:
- `last_verified` is the date the claims were last checked against official sources — update this on any factual revision
- `facts` should be 3-7 bullet points maximum, written as complete factual sentences
- Do not write opinionated statements in `key_facts` — only verifiable facts
- `primary_law` is the main legislation the article references; omit if not applicable (e.g., market analysis)

---

### R2 — Explicit jurisdiction statement in the opening paragraph

Every article must establish NZ context in the first 50 words. This is already done in most articles but not consistently.

**Good:**
> Under New Zealand tenancy law, your landlord is required to lodge your bond with Tenancy Services within 23 working days.

**Not sufficient for agents:**
> Your landlord is required to lodge your bond within 23 working days.

A single sentence suffices. The pattern is: *"Under [NZ law / New Zealand's Residential Tenancies Act / NZ tenancy rules]..."* or *"In New Zealand..."*

---

### R3 — Date-stamp legal facts at first mention

When citing a rule that has a specific effective date, include the date inline at first mention. Subsequent mentions in the same article don't need it.

**Good:**
> Since 30 January 2025, landlords can end a periodic tenancy with 90 days' notice and no stated reason.

**Also acceptable (for older, longstanding rules):**
> Bond must be lodged within 23 working days — this has been the rule since the Residential Tenancies Act.

For rules with future effective dates (not yet in effect), flag them explicitly:
> From 1 July 2026 (if enacted), landlords will be required to...

---

### R4 — Labelled blockquotes

Prefix blockquotes with a semantic label in bold. This lets agents and human readers identify the type at a glance.

| Type | Prefix | When to use |
|------|--------|-------------|
| Warning / legal risk | `> **Warning:**` | Legal consequences, tenant risks, things that can go wrong |
| Key takeaway | `> **Key point:**` | The most important single fact in a section |
| Email/letter template | `> **Template:**` | Copy-paste content for the reader |
| Real example | `> **Example:**` | Tribunal cases, specific scenarios |
| Tip | `> **Tip:**` | Practical advice that isn't a legal requirement |

Existing unlabelled blockquotes used for emphasis (rhetorical effect) can stay as-is — only label where the type matters for understanding.

---

### R5 — AI disclosure in markdown source

In addition to the `ai-disclosure.html` partial (which handles rendered HTML), add a disclosure block in the markdown source. Place it as the final element before the closing resources/links section.

```markdown
---

*This article was researched and drafted using AI tools. The topic, angle, and research parameters were set by a human editor. Every factual claim has been verified against official NZ sources (Tenancy Services, MBIE, Tribunal records) before publication. For legal advice specific to your situation, contact [Community Law NZ](https://communitylaw.org.nz/) or [Citizens Advice Bureau](https://www.cab.org.nz/).*
```

This ensures the disclosure travels with the content in RSS feeds, raw markdown scrapes, and API access — not just the rendered HTML.

---

### R6 — Self-contained H2 sections

Each H2 section should be interpretable without reading the rest of the article. This means:

- Don't use "as mentioned above" or "as we saw earlier" — repeat the key fact
- Introduce the subject of the section in the first sentence
- Don't rely on prior sections for definitions — either restate them briefly or link to a glossary entry

Agents often extract individual sections to answer specific questions. A section that makes sense only in context of the whole article is partially useless to an agent.

---

### R7 — Fact tables over prose for regulatory data

When citing multiple related legal facts (thresholds, timeframes, limits), use a table rather than prose.

**Agent-unfriendly (prose):**
> Bond is capped at 4 weeks' rent, and you can be charged up to 2 weeks' rent in advance. From December 2025, a pet bond of up to another 2 weeks is also allowed.

**Agent-friendly (table):**

| Item | Limit | Effective date |
|------|-------|----------------|
| Bond | 4 weeks' rent | Longstanding |
| Rent in advance | 2 weeks' rent | Longstanding |
| Pet bond | 2 weeks' rent | 1 December 2025 |

Tables are extracted cleanly by most LLMs and returned as structured answers.

---

### R9 — FAQPage JSON-LD via `faqs:` frontmatter

Every article — both guides (`/posts/`) and briefs (`/briefs/`) — must include a `faqs:` block in frontmatter. The `head.html` partial automatically emits `FAQPage` structured data for any page with this block. This enables:

- Direct "People also ask" appearances in Google search
- FAQ answers surfaced by AI agents (Perplexity, ChatGPT with browsing, etc.) without reading the full article body
- Snippet extraction in voice assistants and RAG pipelines

**`faqs:` requirements:**
- 3–4 questions for guides; 2–3 for briefs
- Answers must be self-contained — an agent may surface the answer without the question context
- Include the key fact (number, timeframe, condition) in the answer, not just a pointer to the article
- State jurisdiction ("In New Zealand...") in any answer where it could otherwise be ambiguous

**Good:**
```yaml
faqs:
  - question: "How much notice does a landlord need to give to end a tenancy in NZ?"
    answer: "For a periodic tenancy with no stated reason, a landlord must give 90 days' written notice (since 30 January 2025). For specific reasons (owner-occupancy, sale, renovations), 42 days' notice applies."
```

**Not sufficient:**
```yaml
faqs:
  - question: "How much notice does a landlord need to give?"
    answer: "See the notice periods section of this article."
```

---

### R8 — Plain-language factual conclusions

In sections where the article reaches a factual conclusion (as opposed to providing advice or opinion), state it plainly in the final sentence of the section. Avoid ending on a rhetorical question or colloquial phrase when the point is factual.

**Good:**
> The bond maximum is 4 weeks' rent. Any amount above this is illegal under the Residential Tenancies Act.

**Less clear for agents:**
> Yeah nah, if they're asking for more than four weeks, something's off.

The human voice is still welcome throughout — but the concluding factual sentence of each section should be unambiguous.

---

## Recommended Frontmatter Template (Updated)

This extends the existing template from `BLOG_CONTENT_PROMPT.md`:

```yaml
---
title: "Your Post Title Here"
date: YYYY-MM-DDTHH:MM:SS+13:00
draft: false
description: "150-160 character meta description with primary keyword."
tags: ["tag-one", "tag-two"]
author: "RentRant Team"

# Agent optimisation (required for new articles)
key_facts:
  jurisdiction: "New Zealand"
  last_verified: "YYYY-MM-DD"
  content_type: "guide"   # guide | checklist | news | analysis | update
  primary_law: "Residential Tenancies Act 1986"  # omit if not applicable
  facts:
    - "Fact one: specific, verifiable, complete sentence"
    - "Fact two: include effective dates where relevant"
    - "Fact three: 3-7 facts maximum"

# Social (optional)
# image: "images/your-image.jpg"
# skipDisclosure: false  # set true only for non-AI articles
---
```

---

## The AI Disclosure: Continuity Requirement

Every article produced with AI assistance must carry the disclosure. This is non-negotiable and covers two surfaces:

**1. The HTML partial** (`ai-disclosure.html`) — automatically injected by the theme on all posts. Do not set `skipDisclosure: true` unless the article was written entirely without AI tools.

**2. The markdown source** — include the disclosure block (R5 above) as the second-to-last section, before the Resources block. Exact wording:

> *This article was researched and drafted using AI tools. The topic, angle, and research parameters were set by a human editor. Every factual claim has been verified against official NZ sources before publication. For legal advice specific to your situation, contact [Community Law NZ](https://communitylaw.org.nz/) or [Citizens Advice Bureau](https://www.cab.org.nz/).*

The disclosure wording should not be altered to downplay AI involvement or to overclaim human authorship. The framing is: **AI executes, human directs and verifies.**

---

## Article Audit Checklist (Agent Optimisation)

Add these items to the existing final checklist in `BLOG_CONTENT_PROMPT.md`:

### Agent Optimisation
- [ ] `key_facts` frontmatter block present with jurisdiction, last_verified, content_type, and 3-7 facts
- [ ] NZ jurisdiction stated explicitly in the first 50 words
- [ ] All regulations include their effective date at first mention
- [ ] Blockquotes that carry functional content (warnings, templates, examples) are prefixed with a semantic label
- [ ] Each H2 section is self-contained — no "as mentioned above" dependencies
- [ ] Regulatory data in tables, not prose, wherever 3+ related facts apply
- [ ] Factual conclusions stated plainly at the end of each section
- [ ] AI disclosure block present in markdown source (second-to-last section)
- [ ] `skipDisclosure` is `false` (or absent) in frontmatter
- [ ] `faqs:` frontmatter block present with 3–4 questions (guides) or 2–3 questions (briefs) — fires FAQPage JSON-LD on all page types

---

## What Not to Over-Engineer

These guidelines exist to help agents extract facts. They are not an excuse to:

- Strip the RentRant voice in favour of clinical precision
- Add disclaimer paragraphs everywhere
- Turn every sentence into a definition
- Replace good prose with bullet points throughout

The goal is a layer of machine-readable structure *underneath* the human writing — not a replacement for it. A well-labelled blockquote still has personality. A `key_facts` block doesn't change the article body. The voice and the structure coexist.

---

*Last updated: March 2026. Review whenever significant changes to NZ tenancy law or AI agent consumption patterns require updating.*
