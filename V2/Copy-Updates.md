# PEVARIS.COM — Copy Spec
**Version:** 1.0 (in progress — additional pages to follow)
**For use with:** Claude Code
**Note:** This spec covers agreed copy changes only. Do not alter any design, layout, or structure not explicitly referenced here.

---

## 1. Global Navigation — Services Dropdown

Update the Services dropdown to add Executive AI Training below a visual divider. The three core services remain at the top. Executive AI Training sits below the divider as a distinct but related offering.

**Dropdown structure:**
```
Fractional Leadership        → /fractional-leadership.html
AI Strategy & Delivery       → /ai-strategy.html
Technology Delivery          → /technology-delivery.html
─────────────────────────────
Executive AI Training        → /executive-ai-training.html
```

The divider should be a simple `<hr>` or `border-top` styled to match the existing dropdown aesthetic. No label or heading needed above or below the divider.

Apply this change to the nav component on **every page**.

---

## 2. services.html — Full Page Copy

### 2.1 Hero

**Headline:**
```
Technology and AI,
from strategy to production.
```

**Subtext:**
```
Senior experience, without permanent headcount.
Outcomes from day one.
```

No other changes to the hero section.

---

### 2.2 Service Cards

Replace all four existing service cards with the following three. Remove the Executive AI Training card entirely.

**Card 1 — Fractional Leadership**
```
Heading:    Fractional Leadership
Body:       Embedded CTO, CPO, or CAIO. At the board table,
            running the programme.
Link:       Learn more →  (/fractional-leadership.html)
```

**Card 2 — AI Strategy & Delivery**
```
Heading:    AI Strategy & Delivery
Body:       Built for your business problem — not the vendor's
            roadmap. Strategy to production, with governance
            from day one.
Link:       Learn more →  (/ai-strategy.html)
```

**Card 3 — Technology Delivery**
```
Heading:    Technology Delivery
Body:       Software that's 80% built but stuck? We take it
            across the line to production. Fixed scope,
            fixed cost.
Link:       Learn more →  (/technology-delivery.html)
```

**Do not add any other cards.** Three cards only.

---

### 2.3 CTA Section

No changes. Keep existing copy:
```
Not sure what you need?
Book a free discovery call. No pitch, no pressure.
[Book a call →]
```

---

## 3. Footer — All Pages

Add **Executive AI Training** as a fourth link under the Services column, below Technology Delivery.

**Services column (updated):**
```
Fractional Leadership        → /fractional-leadership.html
AI Strategy & Delivery       → /ai-strategy.html
Technology Delivery          → /technology-delivery.html
Executive AI Training        → /executive-ai-training.html
```

Apply this change to the footer on **every page**.

---

## 4. New Page — executive-ai-training.html

Create a new page at `/executive-ai-training.html`.

**Meta:**
```html
<title>Executive AI Training — Pevaris</title>
<meta name="description" content="Half-day and full-day AI workshops for boards and leadership teams. Understand what your AI investment means — without the vendor spin. Delivered by Pevaris.">
```

---

### 4.1 Hero (Dark)

**Label pill:** `Executive AI Training`

**Headline:**
```
What your board needs
to know about AI.
```

**Subtext:**
```
Half-day and full-day workshops for leadership teams
who are approving AI spend — and need to know if
it's working.
```

No image. Centred layout. Consistent with existing dark hero pattern on the site.

**CTA button:** `Book a workshop →` → `mailto:hello@pevaris.com`

---

### 4.2 The Problem (White)

**Headline:**
```
Most boards are approving
AI spend. Few can assess
whether it's working.
```

**Body:**
```
The problem isn't technical literacy. It's commercial clarity.
What is this investment actually doing? Is the risk proportionate
to the return? What should we be asking our technology team?

These workshops answer those questions — without vendor spin,
without jargon, and without turning your leadership team into
engineers.
```

---

### 4.3 What the Session Covers (Light)

**Headline:**
```
What you'll leave with.
```

**Five items** — display as a clean numbered or check-mark list:
```
1. A clear-eyed view of what AI can and cannot do for
   your specific business

2. How to evaluate AI spend — what good looks like,
   what waste looks like

3. The right questions to ask your technology team

4. Current trends in enterprise AI, stripped of hype

5. How AI is changing business structure — and what
   that means for decisions you're making now
```

---

### 4.4 Format (Dark)

**Headline:**
```
Built around your
leadership team.
```

**Three format cards** (`.card .card--dark`):

```
Card 1:
Heading:  Half-day workshop
Body:     For leadership teams of up to 12 people.
          Tailored to your sector and current AI maturity.

Card 2:
Heading:  Full-day workshop
Body:     Deeper coverage, including live examples and a
          structured review of your current AI agenda.

Card 3:
Heading:  Executive briefing
Body:     One-to-one or small group. For CEOs, CFOs or
          board members who want a focused, private session.
```

---

### 4.5 Who Delivers It (White)

**Headline:**
```
Delivered by someone
who has done it.
```

**Body:**
```
These sessions are delivered by Joe Darkins — a technology
executive with cross-sector experience across Premier League
football, Fortune 500, fintech and startups, where AI agents
have been deployed in production across commercial, legal and
operational departments.

Not a trainer with a slide deck. Someone who has made the
decisions, lived with the consequences, and can answer the
questions your board will actually ask.
```

---

### 4.6 CTA Banner (Accent)

**Headline:**
```
Ready to give your leadership
team genuine AI clarity?
```

**Button:** `Book a workshop →` → `mailto:hello@pevaris.com`

---

## 5. index.html — Homepage Copy Changes

### 5.1 Hero Subtext

Replace current subtext with:
```
Senior technology and AI leadership — without the
permanent headcount.
```

---

### 5.2a Hero Attribution Line

Replace current attribution line with:
```
Founded and led by Joe Darkins —
Premier League · Fortune 500 · Fintech · Startups
```

All other hero content unchanged.

---

### 5.2 Service Cards

Replace all four existing cards with the following three. Remove the Executive AI Training card entirely.

**Card 1 — Fractional Leadership**
```
Heading:    Fractional Leadership
Body:       Embedded CTO, CPO, or CAIO. At the board table,
            running the programme.
Link:       Learn more →  (/fractional-leadership.html)
```

**Card 2 — AI Strategy & Delivery**
```
Heading:    AI Strategy & Delivery
Body:       Built for your business problem — not the vendor's
            roadmap. Strategy to production, with governance
            from day one.
Link:       Learn more →  (/ai-strategy.html)
```

**Card 3 — Technology Delivery**
```
Heading:    Technology Delivery
Body:       Software that's 80% built but stuck? We take it
            across the line. Fixed scope, fixed cost.
Link:       Learn more →  (/technology-delivery.html)
```

**Do not add any other cards.** Three cards only.

---

### 5.3 Founder Section Body Copy

Replace current body copy with:
```
Every Pevaris engagement is led directly by Joe — not
handed to a team. Cross-sector experience across Premier
League football, Fortune 500, fintech and startups.
```

Heading and CTA link unchanged.

---

## 6. about.html — Copy Changes

### 6.1 Hero Subtext

Replace current subtext with:
```
Technology and AI leadership built across Premier League
football, Fortune 500 enterprise, fintech and high-growth
startups — environments where commercial pressure is real
and the margin for error is thin.
```

**Note:** "Joe Darkins" heading and all other hero content unchanged.

---

### 6.2 Credential Cards — Heading Update

Update the first credential card heading only. All body copy within every card remains unchanged.

**Card 1 — update heading:**
```
Before:   Burnley Football Club
After:    Premier League Football
```

Role line beneath the heading:
```
Chief Technology Officer · 2024–Present  (Burnley FC)
```

All other four credential card headings unchanged.

---

### 6.3 Consultancy Section — Second Paragraph

Replace current second paragraph in the "A consultancy. Not a contractor." section with:
```
Our engineering partners — onshore and nearshore — have
strong records in production deployment and platform
go-live. Every partner is held to the same standard
as Pevaris.
```

First paragraph and section heading unchanged.

---

### 6.4 Design Flag — Credential Card Icons

**This is a design change, not a copy change.** The emoji icons on the five credential cards (⚽ 🏢 💷 📱 📈) should be replaced with CSS icon placeholders consistent with the design system. Claude Code should implement simple CSS shapes or SVG icons in `--color-accent` to replace the emoji. Do not leave emoji in the final build.

---

## 8. approach.html — Copy Changes

### 8.1 Delivery Step

Replace current Delivery step body with:
```
Embedded leadership through execution — running
programmes, managing vendors, holding everyone
accountable.
```

---

### 8.2 Founder-Led Section

Replace current body copy with:
```
Joe Darkins leads every engagement. When programmes
need more — additional senior leadership, specialist
AI capability, or engineering delivery resource — we
bring in a trusted network of associates and partners.
The right people, at the right time, held to the
same standard.
```

Section heading unchanged.

---

### 8.3 New Section — "What This Isn't"

Add a new section after the four steps and before the CTA. Three short contrast statements displayed as a list with ✗ markers:

```
Heading:   What this isn't.

✗  Not a strategy deck that gathers dust
✗  Not a junior team behind a senior name
✗  Not open-ended hours with no defined outcome
```

Style consistent with existing contrast/negative list pattern on the site.

---

## 9. fractional-leadership.html — Copy Changes

### 9.1 Hero

No changes.

---

### 9.2 Three Roles Section

No changes to the three role cards. Add one line directly beneath the cards:

```
Need a different kind of leadership? Get in touch.
```

Link "Get in touch" to `mailto:hello@pevaris.com`.

---

### 9.3 New Section — "Not a consultant. Not a hire."

Add this section immediately after the three roles section.

**Heading:**
```
Not a consultant.
Not a hire.
```

**Body:**
```
A fractional CTO isn't a consultant who shows up with a
slide deck. They're in your leadership meetings, making
decisions, holding vendors accountable, and presenting
to your board — on the days you need them, without the
overhead of a permanent hire.
```

---

### 9.4 New Section — "Why fractional"

Add this section after 9.3. Four cards displayed in a 2x2 grid.

**Section heading:**
```
Why fractional.
```

**Card 1:**
```
Heading:  Senior experience from day one
Body:     No 6-month hiring process. No onboarding lag.
```

**Card 2:**
```
Heading:  Scale up or down
Body:     No notice periods. No redundancy risk. Adjust
          as the business changes.
```

**Card 3:**
```
Heading:  Outside perspective
Body:     Someone who's solved the same problem across
          different sectors and knows what good looks like.
```

**Card 4:**
```
Heading:  Immediate accountability
Body:     Outcomes agreed before work begins.
          Not hours tracked after.
```

---

### 9.5 "In Practice" Section — Reframe

Keep the section heading "In practice". Replace all three proof point entries with the following. Do not add or remove entries.

**Entry 1:**
```
Heading:  Premier League Football
Body:     Technology function built from zero. AI agents
          deployed in production. Stadium infrastructure
          rebuilt.
```

**Entry 2:**
```
Heading:  Fortune 500
Body:     $470m revenue supported. Digital transformation
          delivered while reducing budget by $240k p/a.
```

**Entry 3:**
```
Heading:  Fintech
Body:     £850m AUM. New product launched with £170m in
          deposits in year one.
```

---

### 9.6 New Closing Note Before CTA

Add a short note between the "In practice" section and the existing CTA:

```
Thinking about a permanent hire? Fractional is often the
right first step — giving you time to understand what the
role actually needs before committing to a full-time salary.
We can help you work that out.
```

Style: smaller body text, muted colour, centred or left-aligned consistent with the page layout. Not a card — plain text.

---

## 10. ai-strategy.html — Copy Changes

### 10.1 Hero

No changes.

---

### 10.2 New Section — "Not a strategy paper. Not a vendor recommendation."

Add immediately after the hero and before the "How it works" section.

**Heading:**
```
Not a strategy paper.
Not a vendor recommendation.
```

**Body:**
```
Most AI consultants stop at the strategy. Pevaris builds
and deploys — agents in production, pipelines running,
commercial outcomes tracked from day one.
```

---

### 10.3 "How It Works" — Update Production Step and Add ML Models

Update the Production step body copy:

**Production step — replace body with:**
```
Agents, pipelines and integrations — deployed and
working. Not stuck in proof-of-concept.
```

Add a fifth step after Measurement:

**New step — ML Models:**
```
Heading:  ML Models
Body:     Custom machine learning model deployment —
          through a specialist partner network with
          production experience.
```

All other steps (Readiness, Governance, Measurement) unchanged.

---

### 10.4 "In Practice" — New Section

Add a new "In practice" section after the five steps, using the same pattern as `fractional-leadership.html`. Two entries only.

**Section heading:**
```
In practice.
```

**Entry 1:**
```
Heading:  Premier League Football
Body:     AI agents deployed in production across
          commercial, legal and operational departments.
```

**Entry 2:**
```
Heading:  Fortune 500
Body:     AI data products built for clients generating
          $4.6m in fees per year.
```

---

### 10.5 Pull Quote — Update Attribution

Update the pull quote and attribution. Quote body unchanged.

**Replace attribution with:**
```
Joe Darkins — from a Premier League CTO engagement
```

Also update the quote body, replacing "at Burnley FC" with:
```
"AI agents deployed in production across commercial,
legal and operational departments at a Premier League
football club — driving revenue, reporting and
cost savings."
```

---

### 10.6 Executive AI Training Section — Simplify to Teaser

Replace the current Executive AI Training section with a short teaser only. Do not reproduce the full description — that now lives on `/executive-ai-training.html`.

**Replace entire current section with:**
```
Heading:  Want to bring your board up to speed on AI?

Body:     We run half-day and full-day workshops for
          boards and leadership teams.

Link:     Find out more →  (/executive-ai-training.html)
```

---

## 11. technology-delivery.html — Copy Changes

### 11.1 Hero Subtext

Replace current subtext with:
```
Scoped and priced before work begins. Your team owns
it when we're done.
```

Hero headline unchanged.

---

### 11.2 Scoping Step — Update Body Copy

Replace current body copy with:
```
Technical review of what's built and what remains.
Clear scope and agreed price before work starts.
```

All other steps (Engineering, Production, Handover) unchanged.

---

### 11.3 New Section — Full Project Capability

Add a short note after the four steps and before the "Trusted delivery partners" section:

```
Need a full build, not just the final stretch?
Same approach — scoped and priced upfront, your team
owns it when we're done. Get in touch.
```

Link "Get in touch" to `mailto:hello@pevaris.com`. Style as plain body text, muted colour — consistent with the closing note pattern on `fractional-leadership.html`.

---

### 11.4 New Section — "In Practice"

Add after the "Trusted delivery partners" section. Use illustrative project descriptions rather than named clients — delivery work is framed around what was built, not where.

**Section heading:**
```
In practice.
```

**Entry 1:**
```
Heading:  Internal platform to production
Body:     Scoped, engineered and handed over with full
          team ownership. Stalled for months. Live in
          eight weeks.
```

**Entry 2:**
```
Heading:  Legacy system replacement
Body:     Existing codebase taken across the line where
          the internal team had run out of road.
```

---

### 11.5 New Closing Section — "Got an idea?"

Add after "In practice" and before the existing CTA.

**Heading:**
```
Got an idea you want to explore?
```

**Body:**
```
It doesn't need to be fully formed. Get in touch and
we'll work out together whether we can help.
```

**Link:** `Start a conversation →` → `mailto:hello@pevaris.com`

Style consistent with closing note pattern used on other service pages.

---

## 12. Pages Pending Review

The following pages have not yet been reviewed and should **not** be altered by Claude Code until a copy review has been completed and this spec is updated:

- `blog.html`

---

*End of Version 1.7 — blog.html pending review*