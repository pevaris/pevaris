# PEVARIS.COM — Fresh Build PRD
**Version:** 2.0  
**Date:** May 2026  
**Owner:** Joe Darkins, Founder — Pevaris  
**For use with:** Claude Code  
**Build type:** Complete fresh build — no dependency on existing site  

---

## 1. Project Overview

Build a complete, production-ready static HTML/CSS/JS website for Pevaris — a technology and AI consultancy founded by Joe Darkins. The design language is directly inspired by Monzo.com: bold full-width sections, strong minimal headlines, alternating dark and light panels, product-led presentation of services, and a single persistent CTA throughout.

The site must feel like a premium consumer product site applied to a B2B consultancy context — not a typical corporate consulting website. Every section should have one strong headline, minimal supporting copy, and a clear next action.

---

## 2. Design System

### 2.1 Colour Palette

Define all colours as CSS custom properties in `:root`. Use these throughout. Do not hardcode hex values anywhere outside of `:root`.

```css
:root {
  /* Backgrounds */
  --color-dark:        #0B1C2C;   /* Primary dark — deep navy, used for hero and dark sections */
  --color-dark-soft:   #112638;   /* Slightly lighter navy for card surfaces on dark backgrounds */
  --color-light:       #F6F8FA;   /* Off-white light section background */
  --color-white:       #FFFFFF;

  /* Accent */
  --color-accent:      #00C48C;   /* Strong green — CTAs, highlights, active states */
  --color-accent-dark: #00A374;   /* Accent hover state */

  /* Text */
  --color-text-dark:   #0B1C2C;   /* Primary text on light backgrounds */
  --color-text-muted:  #5A6E82;   /* Secondary text on light backgrounds */
  --color-text-white:  #FFFFFF;
  --color-text-faded:  rgba(255, 255, 255, 0.60);  /* Secondary text on dark backgrounds */

  /* Borders */
  --color-border:      #E2E8F0;
  --color-border-dark: rgba(255, 255, 255, 0.12);

  /* Utility */
  --color-pill-bg:     rgba(0, 196, 140, 0.12);   /* Pill/badge background */
  --color-pill-text:   #00C48C;
}
```

### 2.2 Typography

Load both fonts from Google Fonts in every page `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300;12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap" rel="stylesheet">
```

```css
:root {
  --font-display: 'Bricolage Grotesque', sans-serif;  /* All headings */
  --font-body:    'DM Sans', sans-serif;               /* All body copy, nav, labels */
}
```

**Type scale:**

```css
:root {
  --text-xs:   0.75rem;    /* 12px — labels, legal, meta */
  --text-sm:   0.875rem;   /* 14px — nav, captions */
  --text-base: 1rem;       /* 16px — body copy */
  --text-lg:   1.125rem;   /* 18px — lead paragraphs */
  --text-xl:   1.375rem;   /* 22px — card headings */
  --text-2xl:  1.75rem;    /* 28px — section sub-headings */
  --text-3xl:  2.25rem;    /* 36px — section headings */
  --text-4xl:  3rem;       /* 48px — page headings */
  --text-5xl:  3.75rem;    /* 60px — hero headlines */
  --text-6xl:  5rem;       /* 80px — hero on large screens */
}
```

**Heading weights:** 700 or 800 for all `h1`/`h2`. 600 for `h3`. All headings use `--font-display`.  
**Body:** 400 regular, 500 medium for labels. All body uses `--font-body`.  
**Line heights:** Headings: 1.1. Body: 1.6.  
**Letter spacing:** Headings: -0.02em. Body: 0.

### 2.3 Spacing

```css
:root {
  --space-1:   0.25rem;
  --space-2:   0.5rem;
  --space-3:   0.75rem;
  --space-4:   1rem;
  --space-6:   1.5rem;
  --space-8:   2rem;
  --space-10:  2.5rem;
  --space-12:  3rem;
  --space-16:  4rem;
  --space-20:  5rem;
  --space-24:  6rem;
  --space-32:  8rem;

  --section-padding-y:  var(--space-24);   /* Standard vertical section padding */
  --section-padding-x:  var(--space-8);    /* Side padding on mobile */
  --container-max:      1200px;
  --container-narrow:   760px;
}
```

### 2.4 Border Radius

```css
:root {
  --radius-sm:   6px;
  --radius-md:   12px;
  --radius-lg:   20px;
  --radius-xl:   28px;
  --radius-full: 9999px;
}
```

### 2.5 Shadows

```css
:root {
  --shadow-card: 0 2px 12px rgba(11, 28, 44, 0.08), 0 1px 3px rgba(11, 28, 44, 0.06);
  --shadow-card-hover: 0 8px 32px rgba(11, 28, 44, 0.14), 0 2px 8px rgba(11, 28, 44, 0.08);
  --shadow-nav: 0 1px 0 var(--color-border);
}
```

### 2.6 Core Components

Define these reusable components in a shared `styles.css`. Every page links to this file.

**Container:**
```css
.container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--space-8);
}
.container--narrow {
  max-width: var(--container-narrow);
  margin: 0 auto;
  padding: 0 var(--space-8);
}
```

**Buttons:**
```css
/* Primary — dark fill */
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  background: var(--color-dark);
  color: var(--color-white);
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 500;
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-full);
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.2s, transform 0.15s;
  letter-spacing: 0.01em;
}
.btn-primary:hover {
  background: #162D41;
  transform: translateY(-1px);
}

/* Accent — green fill */
.btn-accent {
  background: var(--color-accent);
  color: var(--color-dark);
  font-weight: 600;
  /* inherits .btn-primary base */
}
.btn-accent:hover {
  background: var(--color-accent-dark);
}

/* Ghost — outline on dark background */
.btn-ghost {
  background: transparent;
  color: var(--color-white);
  border: 1.5px solid rgba(255, 255, 255, 0.35);
}
.btn-ghost:hover {
  border-color: var(--color-white);
  background: rgba(255, 255, 255, 0.06);
  transform: translateY(-1px);
}
```

**Pill / label badge:**
```css
.pill {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  background: var(--color-pill-bg);
  color: var(--color-pill-text);
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
}

.pill--white {
  background: rgba(255, 255, 255, 0.12);
  color: var(--color-white);
}
```

**Section patterns:**
```css
/* Dark section */
.section-dark {
  background: var(--color-dark);
  color: var(--color-text-white);
  padding: var(--section-padding-y) 0;
}
/* Light section */
.section-light {
  background: var(--color-light);
  color: var(--color-text-dark);
  padding: var(--section-padding-y) 0;
}
/* White section */
.section-white {
  background: var(--color-white);
  color: var(--color-text-dark);
  padding: var(--section-padding-y) 0;
}
```

**Service / feature card:**
```css
.card {
  background: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
  box-shadow: var(--shadow-card);
  transition: box-shadow 0.25s, transform 0.25s;
}
.card:hover {
  box-shadow: var(--shadow-card-hover);
  transform: translateY(-3px);
}
/* Dark variant */
.card--dark {
  background: var(--color-dark-soft);
  border-color: var(--color-border-dark);
  color: var(--color-text-white);
}
```

**Placeholder image:**
```css
.img-placeholder {
  display: block;
  width: 100%;
  border-radius: var(--radius-xl);
  overflow: hidden;
  aspect-ratio: 4 / 3;
  background: linear-gradient(135deg, #1a3a5c 0%, #0e2438 100%);
  position: relative;
}
.img-placeholder::after {
  content: attr(data-label);
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: rgba(255,255,255,0.3);
  letter-spacing: 0.05em;
}
```
Usage: `<div class="img-placeholder" data-label="[Image description]"></div>`

### 2.7 Animation

Add these baseline animations to `styles.css`:

```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
.animate-fade-up {
  animation: fadeUp 0.6s ease forwards;
}
.animate-fade-up-delay-1 { animation-delay: 0.1s; opacity: 0; animation-fill-mode: forwards; }
.animate-fade-up-delay-2 { animation-delay: 0.2s; opacity: 0; animation-fill-mode: forwards; }
.animate-fade-up-delay-3 { animation-delay: 0.3s; opacity: 0; animation-fill-mode: forwards; }
```

Apply staggered `animate-fade-up` to hero headlines, subtext, and CTAs on all pages.

---

## 3. Navigation Component (Global)

The navigation is a sticky top bar, shared across all pages. Create it as a reusable HTML snippet included at the top of every page.

### 3.1 Structure

```
[PEVARIS logo wordmark]       [About] [Services ▾] [Approach] [Blog]       [Book a call →]
```

### 3.2 Behaviour

- Sticky (`position: sticky; top: 0; z-index: 100`)
- Background: `var(--color-white)` with `backdrop-filter: blur(12px)` and very light `box-shadow: var(--shadow-nav)`
- On scroll > 20px: add a subtle bottom border
- Mobile: hamburger icon, slides in a full-screen dark panel overlay with the same nav items stacked vertically

### 3.3 Services Dropdown

On hover/focus of "Services", show a dropdown panel with three columns:

```
Fractional Leadership          AI Strategy & Delivery         Technology Delivery
Senior CTO, CPO or CAIO        From readiness to production    The last 20%, done properly
[→ Learn more]                 [→ Learn more]                  [→ Learn more]
```

Links:
- Fractional Leadership → `/fractional-leadership.html`
- AI Strategy & Delivery → `/ai-strategy.html`
- Technology Delivery → `/technology-delivery.html`
- Dropdown can also include: "See all services →" linking to `/services.html`

### 3.4 CTA Button

"Book a call →" links to `mailto:hello@pevaris.com`. Style as `.btn-primary`.

### 3.5 Logo

Text wordmark: **PEVARIS** in `--font-display`, weight 700, `--color-dark`, tracking: 0.05em. No icon at this stage.

### 3.6 Active States

Apply `font-weight: 600` and `color: var(--color-dark)` to the current page's nav item. All other items: `font-weight: 400`, `color: var(--color-text-muted)`.

---

## 4. Footer Component (Global)

Shared footer on every page.

### 4.1 Layout

Dark background (`var(--color-dark)`). Three column layout on desktop, stacked on mobile.

**Column 1 — Brand:**
- PEVARIS wordmark
- Tagline: *Technology and AI leadership for businesses that need it done.*
- LinkedIn icon linking to Joe's LinkedIn (placeholder URL: `https://linkedin.com/in/joedarkins`)

**Column 2 — Services:**
Heading: Services
- Fractional Leadership
- AI Strategy & Delivery
- Technology Delivery
- Executive AI Training (links to `/ai-strategy.html#training`)

**Column 3 — Company:**
Heading: Company
- About
- Approach
- Blog
- Book a call (→ `mailto:hello@pevaris.com`)

**Bottom bar:**
`© 2026 Pevaris. All rights reserved.` | `hello@pevaris.com`

All footer links: `var(--color-text-faded)`, hover: `var(--color-white)`.

---

## 5. Page Specifications

### PAGE 1: index.html (Home)

**Meta:**
```html
<title>Pevaris — Technology & AI Leadership That Delivers</title>
<meta name="description" content="Pevaris provides fractional CTO leadership, AI strategy and technology delivery for businesses between £10m and £100m. Founded by Joe Darkins, former CTO of Burnley Football Club.">
```

---

#### SECTION 1.1 — Hero

**Layout:** Full-width dark section (`var(--color-dark)`). Left column: copy. Right column: placeholder image. 50/50 split on desktop, stacked (copy first) on mobile.

**Left column content:**

Pill badge: `Technology Leadership · AI Strategy · Delivery`  (class: `.pill .pill--white`)

Headline (`h1`, `--text-5xl` to `--text-6xl`):
```
Technology that
delivers revenue.
Not just reports.
```

Subtext (`--text-lg`, `var(--color-text-faded)`):
```
Senior fractional technology leadership and AI strategy for 
businesses between £10m and £100m. Built on experience from 
Premier League football, Fortune 500 and high-growth fintech.
```

CTA row:
- Primary button: `Book a discovery call →` → `mailto:hello@pevaris.com`
- Ghost button: `See how it works ↓` → `#services`

Attribution line (small, faded, italic):
```
Founded and led by Joe Darkins — former CTO, Burnley Football Club
```

**Right column content:**

```html
<div class="img-placeholder" 
     style="aspect-ratio: 4/5;"
     data-label="[PLACEHOLDER: Professional portrait of Joe Darkins in a modern office or boardroom setting. Confident, approachable. Shot from chest up. Neutral background.]">
</div>
```

---

#### SECTION 1.2 — Credentials Bar

**Layout:** Full-width white strip. Single row of credentials separated by thin dividers on desktop. Scrollable strip on mobile.

**Background:** `var(--color-white)`. Border top and bottom: `1px solid var(--color-border)`.

**Content (5 credential items):**

```
Burnley Football Club — CTO
JLL Fortune 500 — Senior Product Director
RateSetter — Head of Product
Fonix Mobile — Director of Technology
MEng Computer Science
```

**Style:** `--text-sm`, `--color-text-muted`, font-weight 500. Each item preceded by a small `•` or `|` separator in `--color-accent`. Horizontally scrollable on mobile with `overflow-x: auto; white-space: nowrap`.

---

#### SECTION 1.3 — Services Overview

**Layout:** Light section (`var(--color-light)`). Section label pill at top, then large heading, then 4-card grid.

**Section label:** `What we do` (class: `.pill`)

**Heading (`h2`):**
```
Three ways to create
commercial value.
```

**Subtext:**
```
Every engagement starts with one question: what should technology 
actually be doing for this business?
```

**4 Cards (grid: 2 columns on desktop, 1 on mobile):**

Card 1:
```
Number label: 01
Heading: Fractional Leadership
Body: Embedded senior technology leadership — CTO, CPO or CAIO — 
without permanent headcount or the overhead that comes with it.
Tags (pills): CTO · CPO · CAIO · Strategy · Delivery
CTA: Learn more →  (links to /fractional-leadership.html)
```

Card 2:
```
Number label: 02
Heading: AI Strategy & Delivery
Body: From readiness assessment to production deployment. Practical 
AI strategy grounded in governance, commercial outcomes and real 
implementation capability.
Tags (pills): Readiness · Governance · Production · ROI
CTA: Learn more →  (links to /ai-strategy.html)
```

Card 3:
```
Number label: 03
Heading: Technology Delivery
Body: For businesses that have built internal software and need the 
final stretch to production done properly. Scoped, fixed-price, 
with onshore and nearshore engineering partners.
Tags (pills): Delivery · Production · Partners · Go-Live
CTA: Learn more →  (links to /technology-delivery.html)
```

Card 4:
```
Number label: 04
Heading: Executive AI Training
Body: Half-day and full-day workshops for CEOs, CFOs and boards 
who need to understand what their AI investment means — stripped 
of vendor hype.
Tags (pills): C-Suite · Workshops · AI Literacy · Boards
CTA: Learn more →  (links to /ai-strategy.html#training)
```

Card styling: class `.card`. Number label: `--text-xl`, `--color-accent`, `--font-display`, weight 800. Card heading: `--text-xl`, `--font-display`, weight 700. Body: `--text-base`, `--color-text-muted`. Tags: small `.pill` elements in a flex-wrap row.

---

#### SECTION 1.4 — Feature Split: The Problem

**Layout:** White section. Large 2-column split. Left: large pull-quote headline. Right: body copy + CTA.

**Left (heading, `h2`, `--text-4xl`):**
```
Businesses are sitting 
on technology that 
isn't delivering.
```
Accent underline on "isn't delivering" using `text-decoration: underline; text-decoration-color: var(--color-accent)`.

**Right:**
Body (two short paragraphs):
```
Strategy too abstract to execute. Platforms that have outgrown their 
foundations. An AI agenda generating noise but not traction.

That's the gap Pevaris exists to close — with leadership that has 
been in the room where these problems are actually lived.
```

CTA link: `How we work →` → `/approach.html`

---

#### SECTION 1.5 — Stats / Proof Strip

**Layout:** Dark section (`var(--color-dark)`). 4-column grid of large stat blocks. On mobile: 2x2 grid.

**4 stats:**

```
Stat 1:
Number: £470m
Label: revenue supported as Senior Product Director at JLL

Stat 2:
Number: £850m
Label: assets under management as Head of Product, RateSetter

Stat 3:
Number: 2.5 yrs
Label: as Burnley FC's first dedicated technology executive

Stat 4:
Number: 15+
Label: years building and running technology in high-pressure environments
```

Stat number: `--text-4xl`, `--font-display`, weight 800, `--color-accent`.  
Stat label: `--text-sm`, `--color-text-faded`.  
Dividers: thin `1px solid var(--color-border-dark)` vertical lines between columns.

---

#### SECTION 1.6 — Feature Split: Who Pevaris Is

**Layout:** Light section. Left: placeholder image. Right: copy. (Reverse of section 1.4.)

**Image (left):**
```html
<div class="img-placeholder" 
     data-label="[PLACEHOLDER: Joe Darkins at a whiteboard or in a meeting with a small team. Active, engaged. Professional but not stiff. Burnley FC or boardroom context.]">
</div>
```

**Right — label, heading, body, CTA:**

Label pill: `About Pevaris`

Heading (`h2`):
```
A consultancy.
Not a contractor.
```

Body:
```
Pevaris is founder-led — which means Joe Darkins leads every 
engagement directly. For programmes that need additional senior 
capacity, we draw on a network of trusted associate consultants 
and engineering delivery partners.

The model is built to scale to what the outcome requires, without 
compromising on who is doing the work.
```

CTA: `Meet Joe →` → `/about.html`

---

#### SECTION 1.7 — How We Work (Process)

**Layout:** White section. Centred heading, then 4 horizontal steps (or stacked on mobile).

**Heading (`h2`):**
```
From first conversation
to measurable outcomes.
```

**4 steps (horizontal flex on desktop, vertical stack on mobile):**

Each step: number + title + one-line description. Connected by a faint line between steps on desktop.

```
01 — Discovery
Map your technology landscape and where it fails to connect 
to commercial outcomes.

02 — Clarity  
A clear view of what needs to change, what it costs, and 
what it's worth — in language that lands at board level.

03 — Delivery
Embedded leadership through execution. Running programmes, 
managing vendors, or coaching your team to own it.

04 — Outcomes
Success defined upfront by commercial results. Measured from 
day one. Reported throughout.
```

Step number: `--text-3xl`, `--color-accent`, weight 800.  
Step title: `--text-lg`, weight 700.  
Step description: `--text-sm`, `--color-text-muted`.

---

#### SECTION 1.8 — Final CTA Banner

**Layout:** Dark section, centred, generous padding. Single headline + two buttons.

**Heading (`h2`):**
```
Ready to see what 
technology could actually 
do for your business?
```

**Buttons:**
- Primary (accent): `Book a discovery call →` → `mailto:hello@pevaris.com`
- Ghost: `See our services →` → `/services.html`

---

### PAGE 2: about.html

**Meta:**
```html
<title>About — Pevaris</title>
<meta name="description" content="Pevaris is founded and led by Joe Darkins — a technology executive with a background spanning Premier League football, Fortune 500 global product leadership and high-growth fintech.">
```

---

#### SECTION 2.1 — Hero (Dark)

**Layout:** Dark section. Left copy, right image. Same hero split pattern as home.

**Label pill:** `About Pevaris` (`.pill .pill--white`)

**Heading (`h1`):**
```
The experience behind 
every engagement.
```

**Subtext:**
```
Founded and led by Joe Darkins — a technology executive who has 
built and run technology functions in some of the most commercially 
pressured environments in the UK.
```

**Right image:**
```html
<div class="img-placeholder" 
     style="aspect-ratio: 3/4;"
     data-label="[PLACEHOLDER: Formal-casual portrait of Joe Darkins. Direct eye contact, slight smile. Clean, professional setting. Preferably outdoors or modern office with natural light.]">
</div>
```

---

#### SECTION 2.2 — Joe's Story (White)

**Layout:** White section. Narrow container (`--container-narrow`). Large body copy with pull-quote.

**Heading (`h2`):**
```
Built in the field.
Not in a boardroom.
```

**Body copy (3 short paragraphs — keep each tight):**

Paragraph 1:
```
Joe Darkins joined Burnley Football Club in January 2024 as its 
first ever dedicated technology executive. He built the entire 
technology function from the ground up — in a Premier League 
environment where every decision is scrutinised and the margin 
for error is thin.
```

Paragraph 2:
```
Before that, five years at JLL — Fortune 500, global real estate — 
as Senior Product Director, leading product across businesses 
supporting $470m in annual revenue. Before that: Head of Product 
at RateSetter (£850m AUM), Director of Technology at Fonix Mobile, 
and programme leadership at IG Group across capital markets.
```

Paragraph 3:
```
He holds an MEng in Computer Science from the University of Reading 
and has represented England internationally in lacrosse. That last 
fact matters less for the trophy case and more for what competitive 
international sport teaches about performance under pressure.
```

**Pull quote (styled as large blockquote):**
```
"The difference between technology advice that lands and advice 
that doesn't is whether the person giving it has ever had to 
live with the consequences."
```
Style: `--text-2xl`, `--font-display`, italic, `--color-accent` left border (4px solid).

---

#### SECTION 2.3 — Credentials Grid (Light)

**Layout:** Light section. Label, heading, then 5 credential cards in a responsive grid (3 then 2 on desktop).

**Heading (`h2`):**
```
Where the experience 
comes from.
```

**5 Credential cards (class: `.card`):**

Each card: icon area (use simple CSS shape or emoji as placeholder), company name, role, 1-line proof point.

```
Card 1:
Icon: [Football/sport icon placeholder — CSS circle in --color-accent]
Company: Burnley Football Club
Role: Chief Technology Officer · 2024–Present
Proof: Club's first CTO. Built the entire technology function 
from zero. AI agents deployed in production across commercial, 
legal and operational departments.

Card 2:
Icon: [Building/enterprise icon placeholder]
Company: JLL (Fortune 500)
Role: Senior Product Director · 2019–2023
Proof: Global product leadership supporting $470m in annual 
revenue. Created AI data products generating $4.6m in fees p/a.

Card 3:
Icon: [Fintech/coin icon placeholder]
Company: RateSetter
Role: Head of Product · 2017–2018
Proof: £850m AUM. £170m IFISA launched in year one. £100m+ 
in new loans annually.

Card 4:
Icon: [Mobile/phone icon placeholder]
Company: Fonix Mobile
Role: Director of Technology · 2014–2017
Proof: Led technology and product through doubling of 
end-user spend to £95m per year.

Card 5:
Icon: [Trading/chart icon placeholder]
Company: IG Group · Markit
Role: Programme Management & BA · 2010–2014
Proof: Led £m stockbroking integration with 100 developers. 
Clients: Citi, Goldman Sachs, JP Morgan.
```

---

#### SECTION 2.4 — What Pevaris Is (Dark)

**Layout:** Dark section. Two-column split. Left: heading. Right: two paragraphs.

**Left heading (`h2`):**
```
A consultancy.
Not a contractor.
```

**Right body:**

Paragraph 1:
```
Pevaris is structured as a consultancy with a network model — not 
a solo practice. Joe leads every engagement directly. Where 
programmes need additional senior capacity, we bring in trusted 
associate consultants and engineering delivery partners.
```

Paragraph 2:
```
Our engineering partners maintain onshore and nearshore teams 
with strong records in production deployment, database 
architecture and platform go-live. Every partner operates under 
the same outcome-based framework as Pevaris itself.
```

---

#### SECTION 2.5 — CTA (Accent)

**Layout:** Full-width section with `background: var(--color-accent)`. Dark text.

**Heading (`h2`, `--color-dark`):**
```
If the problem sounds familiar,
the conversation is easy to start.
```

**Button:** `Book a discovery call →` → `mailto:hello@pevaris.com` (class: `.btn-primary`)

---

### PAGE 3: services.html (Services Overview)

**Meta:**
```html
<title>Services — Pevaris</title>
<meta name="description" content="Pevaris offers fractional CTO leadership, AI strategy and implementation, and technology delivery for UK businesses. Outcome-based engagements scoped around commercial results.">
```

---

#### SECTION 3.1 — Hero (Dark)

**Label:** `Our Services`

**Heading (`h1`):**
```
Three ways we create
commercial value.
```

**Subtext:**
```
Senior technology leadership without the overhead. Every engagement 
defined by outcomes — not hours, not headcount, not complexity 
for its own sake.
```

No image in this hero. Centred layout. Full-width dark panel.

---

#### SECTION 3.2 — Service 01: Fractional Leadership (White)

**Layout:** Full-width white section. Large 2-column: left copy, right image.

**Label pill:** `01 — Fractional Leadership`

**Heading (`h2`):**
```
Senior technology leadership.
Without the permanent 
headcount.
```

**Body:**
```
Embedded CTO, CPO or CAIO-level leadership — attending board 
meetings, setting strategy, managing delivery and holding 
vendors accountable. The experience of a seasoned technology 
executive, at the scale your business actually needs right now.
```

**4 feature points (icon + label + one line):**
```
→ Technology strategy and roadmap
→ Team leadership and hiring support
→ Vendor selection and management
→ Board and investor reporting
```

**Engagement model note:**
```
Day rate or structured retainer — scoped to what the 
engagement actually requires.
```

**CTA:** `Start a conversation →` → `mailto:hello@pevaris.com`

**Right image:**
```html
<div class="img-placeholder" 
     data-label="[PLACEHOLDER: Abstract board meeting or strategy session. People around a table, one person presenting. Clean, modern boardroom. Professional.]">
</div>
```

---

#### SECTION 3.3 — Service 02: AI Strategy & Delivery (Light)

**Layout:** Light section. Left image, right copy. (Alternating from section 3.2.)

**Left image:**
```html
<div class="img-placeholder" 
     data-label="[PLACEHOLDER: Abstract AI/data visualization. Could be laptop with data dashboard, or abstract neural network imagery. Dark-toned, technical, clean.]">
</div>
```

**Label pill:** `02 — AI Strategy & Delivery`

**Heading (`h2`):**
```
From proof-of-concept
to production.
```

**Body:**
```
Most AI projects stall because the strategy was disconnected 
from the business problem. Pevaris starts with the commercial 
outcome — governance and compliance built in from day one, not 
retrofitted when it matters.
```

**4 feature points:**
```
→ AI readiness and gap assessment
→ Governance and compliance frameworks
→ Production deployment with delivery capability
→ Executive AI literacy for boards and leadership teams
```

**CTA:** `Explore AI services →` → `/ai-strategy.html`

---

#### SECTION 3.4 — Service 03: Technology Delivery (White)

**Layout:** White section. Left copy, right image.

**Label pill:** `03 — Technology Delivery`

**Heading (`h2`):**
```
The last 20% is where
most projects stall.
```

**Body:**
```
You've built something valuable. Getting it safely into 
production is a different challenge. Scoped delivery 
engagements — with onshore and nearshore engineering 
partners — that bridge the gap between what exists 
and what's live.
```

**4 feature points:**
```
→ Delivery scoping and go-live criteria
→ Onshore and nearshore engineering partners
→ Production readiness: infrastructure, security, monitoring
→ Defined handover with internal team ownership
```

**Engagement note:**
```
Project-based. Fixed scope. Fixed cost. Not open-ended 
time and materials.
```

**CTA:** `Scope a project →` → `/technology-delivery.html`

**Right image:**
```html
<div class="img-placeholder" 
     data-label="[PLACEHOLDER: Developer at a laptop in a clean, modern workspace. Code on screen. Focused. Could be pair programming or solo. Not stock-photo-generic.]">
</div>
```

---

#### SECTION 3.5 — Service 04: Executive AI Training (Dark)

**Layout:** Dark section. Centred, narrow container. No image.

**Label pill:** `04 — Executive AI Training` (`.pill .pill--white`)

**Heading (`h2`):**
```
For boards and leadership
teams who need clarity
on AI — not more noise.
```

**Body:**
```
Most boards are approving AI spend. Fewer can assess whether it's 
working. Structured half-day and full-day workshops for CEOs, CFOs 
and non-technical leadership — tailored to your sector, your 
maturity, and the actual decisions in front of you.
```

**3 workshop topics (horizontal cards on dark background using `.card .card--dark`):**
```
Card 1: What AI can and cannot do
Stripped of vendor hype. A clear-eyed view of where 
the value is and where the risk is.

Card 2: How to evaluate AI spend
What good looks like. What waste looks like. 
The questions to ask your technology team.

Card 3: AI and business structure
How AI is changing how companies operate — and what 
that means for leadership decisions today.
```

**CTA:** `Book a workshop →` → `mailto:hello@pevaris.com`

---

#### SECTION 3.6 — Final CTA (Accent)

Same accent CTA banner as home page:

```
Not sure which engagement is right?
The first conversation is free, focused 
and completely without obligation.
```

Button: `Book a discovery call →` → `mailto:hello@pevaris.com`

---

### PAGE 4: fractional-leadership.html

**Meta:**
```html
<title>Fractional Leadership — Pevaris</title>
<meta name="description" content="Fractional CTO, CPO and CAIO services for UK businesses. Senior embedded technology leadership without permanent headcount. Founded by Joe Darkins, former Burnley FC CTO.">
```

---

#### SECTION 4.1 — Hero (Dark)

**Label:** `Fractional Leadership`

**Heading (`h1`):**
```
Senior technology leadership.
At the scale you 
actually need.
```

**Subtext:**
```
Fractional CTO, CPO or CAIO — embedded in your business, 
attending your board, managing your delivery, holding your 
vendors accountable. Without the permanent headcount or the 
12-month hiring process.
```

**Right image:**
```html
<div class="img-placeholder" 
     data-label="[PLACEHOLDER: Confident executive presenting to a small board. Natural light. Modern setting. Mix of ages around table — suggests leadership context.]">
</div>
```

---

#### SECTION 4.2 — The Three Roles (Light)

**Heading (`h2`):**
```
Three roles. One question:
what does the business 
actually need?
```

**3 role cards (grid, `.card`):**
```
CTO — Chief Technology Officer
For businesses that need technology strategy, delivery 
accountability and vendor management at the senior level. 
Typically: post-acquisition PE businesses, scaleups without 
a tech lead, or enterprises needing a fresh perspective.

CPO — Chief Product Officer
For businesses with a product at the centre of their 
commercial model that needs a senior product leader — 
setting roadmap, managing PMs, translating customer 
insight into delivery.

CAIO — Chief AI Officer
For businesses ready to build a serious AI capability 
and needing senior leadership to define the strategy, 
govern the risk and drive adoption across the organisation.
```

---

#### SECTION 4.3 — Proof (Dark)

**Layout:** Dark section. Two columns. Left: heading. Right: 3 proof point cards (`.card .card--dark`).

**Left heading (`h2`):**
```
What this looks like
in practice.
```

**3 proof cards (right column):**
```
Card 1:
Burnley Football Club
Built the club's entire technology function from zero as 
first CTO — strategy, vendors, infrastructure, AI agents 
in production, data strategy, procurement.

Card 2:
JLL — Fortune 500
Global product leadership across businesses supporting 
$470m in annual revenue. Digital transformation of a 
global division while reducing budget by c.$240k p/a.

Card 3:
RateSetter — Fintech
Head of Product at £850m AUM business. Led team that 
launched £170m IFISA product in year one and managed 
£100m+ in annual loan generation.
```

---

#### SECTION 4.4 — How an Engagement Works (White)

Same 4-step process as home page (Discovery → Clarity → Delivery → Outcomes), with an additional note:

After the steps, add:

**Engagement model note (styled as a clean info panel with a left border in `--color-accent`):**
```
Fractional engagements are structured on a day rate or as a 
monthly retainer — scoped to what the business actually needs. 
From one day a week to near full-time. We agree the model before 
any work begins.
```

---

#### SECTION 4.5 — Who This Is For (Light)

**Heading (`h2`):**
```
Right for you if...
```

**5 scenario statements (displayed as large check-mark list items with a tick in `--color-accent`):**
```
✓ You're a PE-backed business post-acquisition and need 
  technology oversight before you can hire permanently

✓ You're scaling faster than your current technology 
  leadership can manage

✓ You have a board that needs a trusted technology voice — 
  without the cost of a full-time CXO

✓ You're in a technology transition and need senior 
  leadership through the change

✓ You want to sense-check your current technology strategy 
  before committing further investment
```

---

#### SECTION 4.6 — CTA Banner

```
Ready to explore what 
fractional leadership 
looks like for your business?
```

Button: `Book a discovery call →`

---

### PAGE 5: ai-strategy.html

**Meta:**
```html
<title>AI Strategy & Delivery — Pevaris</title>
<meta name="description" content="AI strategy, implementation and executive training for UK businesses. From readiness to production — governance built in from day one. Delivered by Pevaris.">
```

---

#### SECTION 5.1 — Hero (Dark)

**Label:** `AI Strategy & Delivery`

**Heading (`h1`):**
```
AI that actually 
works for your business.
```

**Subtext:**
```
Most AI projects stall at proof-of-concept. Not because the 
technology doesn't work — but because the strategy was 
disconnected from the commercial reality. We start with the 
business problem. Not the technology.
```

**Right image:**
```html
<div class="img-placeholder" 
     data-label="[PLACEHOLDER: Abstract AI/technology visual. Could be stylized data flow diagram, or a clean laptop screen showing a dashboard. Dark background preferred. Technical but not cold.]">
</div>
```

---

#### SECTION 5.2 — Four Service Areas (Light)

**Heading (`h2`):**
```
From readiness to production.
```

**4 cards (`.card`, 2x2 grid):**
```
Card 1: AI Readiness Assessment
Gap analysis, data maturity, infrastructure review. 
A clear view of where AI can create commercial value in 
your specific business — before any vendor conversation.

Card 2: Governance & Compliance
Risk frameworks, responsible AI policies, compliance 
structures built for your sector and scale. Built in 
from day one — not retrofitted later.

Card 3: Implementation & Production
From technical architecture to change management. Full 
delivery capability — agents, pipelines, integrations — 
deployed in production, not just in a proof-of-concept.

Card 4: ROI & Measurement
KPIs tied to revenue impact from the start. Not 
activity metrics. Not vanity dashboards. Commercial 
outcomes, measured and reported throughout.
```

---

#### SECTION 5.3 — Proof Statement (Dark)

**Layout:** Dark, centred, pull quote style.

**Large quote (`--text-3xl`, `--font-display`):**
```
"AI agents deployed in production across commercial, 
legal and operational departments at Burnley FC — 
driving revenue, reporting and cost savings."
```

Attribution line:
```
Joe Darkins — from the Burnley FC CTO engagement
```

---

#### SECTION 5.4 — Executive AI Training (White) [id="training"]

**Important:** This section must have `id="training"` so that nav/card links to `#training` work correctly.

**Label pill:** `Executive AI Training`

**Heading (`h2`):**
```
For boards who need 
clarity — not more noise.
```

**Body:**
```
Structured half-day and full-day workshops for CEOs, CFOs, 
Boards and senior leadership teams. Tailored to your sector 
and current AI maturity. Designed to make leadership teams 
commercially effective at overseeing AI — not to make them 
technical.
```

**What the sessions cover (5 items as a clean numbered list):**
```
1. What AI can and cannot do — stripped of vendor hype
2. How to evaluate AI spend and interrogate your technology team
3. Current trends in enterprise AI: what's genuinely changing
4. Governance and risk: what boards are now expected to know
5. AI and organisational structure: how companies are evolving
```

**Format note:**
```
Available as half-day or full-day workshops for leadership 
teams of up to 12 people, or as individual executive briefings. 
All sessions are tailored to sector and AI maturity.
```

**CTA:** `Book a session →` → `mailto:hello@pevaris.com`

---

#### SECTION 5.5 — CTA Banner

```
Ready to build an AI strategy 
that actually delivers?
```

Button: `Book a discovery call →`

---

### PAGE 6: technology-delivery.html

**Meta:**
```html
<title>Technology Delivery — Pevaris</title>
<meta name="description" content="Pevaris helps businesses complete and deploy internal software that has stalled before production. Fixed-scope delivery with onshore and nearshore engineering partners.">
```

---

#### SECTION 6.1 — Hero (Dark)

**Label:** `Technology Delivery`

**Heading (`h1`):**
```
The last 20% is where 
most projects stall.
```

**Subtext:**
```
You've built something valuable. Getting it safely into 
production is a different challenge — and a solvable one. 
Scoped delivery engagements that bridge the gap between 
what exists and what's live.
```

**Right image:**
```html
<div class="img-placeholder" 
     data-label="[PLACEHOLDER: Small developer team around screens in a clean modern workspace. Collaborative but focused. Code visible on screens. Not staged or overly styled.]">
</div>
```

---

#### SECTION 6.2 — The Problem (White)

**Layout:** White, narrow container, large copy.

**Heading (`h2`):**
```
The problem is almost 
always the same.
```

**Body (3 short paragraphs):**
```
A business builds internal software — usually because off-the-shelf 
tools don't fit their specific workflow. The team makes real 
progress. The core functionality works.

Then it stalls.

Not because the software is bad. Because the final stretch to 
production requires a different set of skills: infrastructure, 
security, monitoring, deployment pipelines, documentation, 
rollback planning. Skills that most internal teams don't have in 
depth. The result is investment that isn't delivering.
```

---

#### SECTION 6.3 — What We Do (Light)

**Heading (`h2`):**
```
Four stages to go-live.
```

**4 steps (same style as home page process section):**
```
01 — Scoping
A structured technical review of what has been built, what 
remains, and what production-readiness means for this 
specific platform. Output: scoped delivery plan, timeline, 
fixed project cost.

02 — Engineering Mobilisation
Deploying the right development resource — onshore or 
nearshore — with direct experience of taking existing 
codebases to production. They work within your codebase, 
not alongside it.

03 — Production Delivery
Infrastructure, security, monitoring, alerting, deployment 
pipelines, load testing, documentation. Delivered to agreed 
go-live criteria — not when the hours run out.

04 — Handover & Stability
A defined post-launch support window — typically 4 to 8 
weeks — ensuring your team fully owns what is live, with 
no ongoing dependency on Pevaris.
```

---

#### SECTION 6.4 — Engineering Partners (Dark)

**Layout:** Dark section. Left heading, right text.

**Left heading (`h2`):**
```
The delivery network
behind every engagement.
```

**Right body:**
```
Pevaris works with a small number of trusted engineering 
delivery partners — teams we have worked with directly 
and whose standards we are confident in. Not a marketplace 
of unknown contractors.

Our partners maintain both onshore (UK) and nearshore 
development capacity. Engagements are structured so the 
right blend of resource is applied to the right parts 
of the delivery.

Every partner operates under the same outcome-based 
framework as Pevaris. Accountable to the delivery plan — 
not to hours on a timesheet.
```

---

#### SECTION 6.5 — Who This Is For (White)

**Heading (`h2`):**
```
Right for you if...
```

**5 check-mark items:**
```
✓ You have internal software in development that hasn't 
  reached production

✓ Your team built the core functionality but lacks depth 
  in infrastructure, DevOps or deployment

✓ You have a go-live deadline the current team cannot hit alone

✓ You've used an agency to build something and need independent 
  help getting it across the line

✓ You need the platform to be fully owned by your team after 
  go-live — not dependent on an ongoing external contract
```

---

#### SECTION 6.6 — What This Is Not (Light)

**3 items (styled with `✗` marker in `--color-text-muted`):**
```
✗ Not a full software development engagement from scratch

✗ Not a time and materials arrangement — every engagement 
  is scoped with fixed deliverables and a fixed cost

✗ Not a handover that leaves you dependent — internal 
  ownership is built into the engagement from day one
```

---

#### SECTION 6.7 — CTA Banner

```
Ready to scope what getting 
to production actually requires?
```

Subtext: `60-minute scoping call. No obligation. Fixed cost from day one.`

Button: `Scope your project →` → `mailto:hello@pevaris.com`

---

### PAGE 7: approach.html

**Meta:**
```html
<title>How We Work — Pevaris</title>
<meta name="description" content="How Pevaris works. Discovery, Clarity, Delivery, Outcomes. Founder-led engagements. No incentive to overrun. Senior experience throughout.">
```

---

#### SECTION 7.1 — Hero (Dark)

**Label:** `How We Work`

**Heading (`h1`):**
```
No vanity frameworks.
No decks that gather dust.
```

**Subtext:**
```
Every Pevaris engagement is structured around a clear 
commercial outcome — defined before any work begins, 
measured throughout, reported honestly.
```

No image. Centred layout.

---

#### SECTION 7.2 — Philosophy (White)

**Two columns.**

**Left (`h2`):**
```
Technology is a means.
Revenue is the end.
```

**Right (body):**
```
The underlying question is always the same: how does 
technology create commercial advantage for this business?

Most technology consultancies measure success in hours 
delivered. Pevaris measures it in outcomes — revenue 
driven, costs removed, capabilities built. That means 
defining what success looks like at the start, and being 
held accountable to it throughout.

Pevaris is founder-led. Joe Darkins leads every engagement 
directly. For programmes that need additional capacity, 
we draw on a network of trusted senior associates and 
delivery partners — all operating under the same 
outcome-based framework.
```

---

#### SECTION 7.3 — Four Stages (Light)

Full detail of the 4-stage process. Expand each step with output description.

**Heading (`h2`):**
```
Four stages. One focus.
```

**Stage cards (4 cards in a vertical stack, full-width `.card` each):**
```
01 — Discovery: Understanding before acting
A focused session — typically 90 minutes — mapping your 
technology landscape, commercial priorities and where the 
two fail to connect. No obligation. No pitch deck.

What you leave with:
· A clear view of your biggest technology risk
· Two or three commercial opportunities in AI or platform
· A recommended engagement structure

02 — Clarity: The commercial case, clearly stated
A clear view of what needs to change, what it costs and 
what it's worth — in language that works for your board, 
not just your engineering team.

Output:
· Prioritised roadmap with commercial rationale
· Risk-adjusted investment case
· Success metrics defined and agreed

03 — Delivery: Embedded leadership, not just advice
Embedded through execution — running the programme, 
managing vendors, or coaching your team to own it. 
Strategy that stops at the slide deck isn't strategy.

How it works:
· Scaled to what the programme actually needs
· Regular leadership-level checkpoints
· Vendor and supplier accountability

04 — Outcomes: Measured from day one
Success defined upfront, measured throughout, reported 
honestly. Not in hours — in the commercial results agreed 
at the start.

What good looks like:
· Commercial KPIs hit or exceeded
· Team capability left behind
· Clear view of what comes next
```

---

#### SECTION 7.4 — What This Isn't (Dark)

**Heading (`h2`):**
```
What this isn't.
```

**3 items (`.card .card--dark`, horizontal grid):**
```
Card 1:
✗ Not structured to overrun
No incentive to slow things down or expand scope. 
The work is done when the outcome is achieved, 
not when the hours run out.

Card 2:
✗ Not a junior team behind a senior name
Joe Darkins leads every engagement. Additional capacity 
is brought in because the engagement requires specific 
expertise — not to appear larger.

Card 3:
✗ Not a permanent headcount decision
Scale up when you need senior leadership. Scale back 
when the programme is done. The flexibility of a 
consultant with the commitment of someone who owns 
the outcome.
```

---

#### SECTION 7.5 — CTA Banner

```
Sound like the right approach 
for your business?
```

Button: `Book a discovery call →`

---

### PAGE 8: blog.html

**Meta:**
```html
<title>Blog — Pevaris</title>
<meta name="description" content="Technology, AI and leadership insights from Joe Darkins and the Pevaris team.">
```

---

#### SECTION 8.1 — Hero (Dark, minimal)

**Heading (`h1`):**
```
Perspectives on technology,
AI and leadership.
```

**Subtext:**
```
Practical observations from the field — not predictions 
from the sideline.
```

---

#### SECTION 8.2 — Blog Grid (White)

3-column card grid on desktop, 1-column on mobile. Placeholder cards (3 items):

```
Post 1:
Date: Coming soon
Category pill: AI Strategy
Headline: Why most AI projects stall before they deliver value
Excerpt: The problem isn't the technology. It's the gap between 
the strategy and the commercial reality of the business.

Post 2:
Date: Coming soon
Category pill: Leadership
Headline: What Premier League football taught me about 
technology resilience
Excerpt: When 30,000 people are in the stadium, every system 
that fails is visible. That shapes how you think about risk.

Post 3:
Date: Coming soon
Category pill: Delivery
Headline: Why 80% built is not 80% done
Excerpt: The last 20% of any software project is where the 
real complexity lives. Here's what that actually looks like.
```

Each card: class `.card`. Date + category pill at top. Headline (`--text-xl`). Excerpt (`--text-sm`, muted). "Read more →" link at bottom (disabled / `#` for now, with note in code comment: `<!-- Blog post page to be built when first post is published -->`).

---

## 6. File Structure

Claude Code should create the following file structure:

```
/
├── index.html
├── about.html
├── services.html
├── fractional-leadership.html
├── ai-strategy.html
├── technology-delivery.html
├── approach.html
├── blog.html
├── styles.css              (global styles, design system, components)
├── nav.js                  (navigation behaviour: sticky, dropdown, mobile menu)
└── /assets/
    └── (empty — placeholder images are CSS-only at this stage)
```

**Do not use a framework.** Pure HTML, CSS and vanilla JavaScript only. No build tools, no npm, no bundlers. The site should run by opening any `.html` file directly in a browser with no server required, and should also work correctly when served from a static host (Netlify, GitHub Pages, etc.).

---

## 7. Navigation JavaScript (nav.js)

Implement the following behaviours in `nav.js`:

1. **Sticky scroll shadow:** On scroll > 20px, add class `.nav--scrolled` to the `<nav>` element. In CSS, `.nav--scrolled` adds `box-shadow: 0 2px 16px rgba(11,28,44,0.10)`.

2. **Services dropdown:** On desktop, show the dropdown on hover of `.nav-item--services`. On keyboard focus, show on `Enter` or `Space`. Close on `Escape`. Close on click outside.

3. **Mobile menu:** Toggle a full-screen overlay (`position: fixed; inset: 0; background: var(--color-dark); z-index: 200`) on hamburger click. Include all nav links stacked vertically plus the "Book a call" CTA. Add a close button in the top-right.

4. **Active page:** On page load, read `window.location.pathname` and apply `.nav-link--active` class to the matching nav link.

5. **Smooth scroll:** For any `<a href="#...">` anchor links on the same page, use `behavior: 'smooth'` scroll.

---

## 8. Responsive Breakpoints

```css
/* Mobile first */
/* Base styles: mobile (< 768px) */

@media (min-width: 768px) {
  /* Tablet: 2-column grids, larger type */
}

@media (min-width: 1024px) {
  /* Desktop: full layouts, dropdowns, side-by-side splits */
}

@media (min-width: 1280px) {
  /* Wide: max container width kicks in, hero type scales up */
}
```

**Specific responsive rules:**
- All hero sections: stacked (copy top, image bottom) on mobile; side-by-side on desktop
- All card grids: 1 column on mobile, 2 on tablet, 3 or 4 on desktop (as specified per section)
- 4-step process: vertical stack on mobile, horizontal row on desktop
- Navigation: hamburger + slide-in overlay on mobile; full horizontal nav on desktop (≥ 1024px)
- Stats bar: 2×2 grid on mobile, 4-column row on desktop
- Credentials strip: horizontally scrollable on mobile
- Footer: stacked columns on mobile, 3-column grid on desktop

---

## 9. SEO & Head Tags

Apply to every page:

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="author" content="Joe Darkins, Pevaris">
<link rel="canonical" href="https://www.pevaris.com/[page].html">

<!-- Open Graph (social sharing) -->
<meta property="og:site_name" content="Pevaris">
<meta property="og:type" content="website">
<meta property="og:title" content="[Page title]">
<meta property="og:description" content="[Page meta description]">
<meta property="og:url" content="https://www.pevaris.com/[page].html">

<!-- Per-page title and description as specified in each page section above -->
```

---

## 10. Accessibility Requirements

- All images (including CSS placeholder divs used as `<img>` replacements) must have descriptive `alt` text
- All interactive elements must be keyboard-navigable
- Colour contrast must meet WCAG AA minimum (4.5:1 for body text, 3:1 for large text)
- All CTA buttons must have clear `:focus` states (outline in `--color-accent`)
- `<html lang="en">` on every page
- Navigation landmark: `<nav aria-label="Main navigation">`
- Main content landmark: `<main id="mainContent">`

---

## 11. Performance Notes

- Fonts loaded with `display=swap` (already in the Google Fonts URL above)
- No external JS libraries — vanilla JS only
- Placeholder images are CSS-only (no `<img>` tags), so no image loading required at this stage
- CSS file should be a single `styles.css` — no preprocessors
- Minification is not required for this build stage

---

## 12. Acceptance Criteria

The build is complete when:

- [ ] All 8 pages render correctly in Chrome, Firefox and Safari at mobile (375px), tablet (768px) and desktop (1280px) viewport widths
- [ ] Global navigation appears on every page with correct links and active states
- [ ] Services dropdown functions correctly on desktop (hover) and mobile (hamburger menu)
- [ ] Global footer appears on every page with correct links
- [ ] All internal page-to-page links work
- [ ] All `mailto:hello@pevaris.com` CTA links function
- [ ] The `ai-strategy.html#training` anchor link scrolls to the Executive AI Training section
- [ ] No placeholder text (lorem ipsum, "[TBD]", etc.) remains in any visible page content
- [ ] All CSS custom properties from Section 2 are defined in `:root` in `styles.css`
- [ ] Both Google Fonts (`Bricolage Grotesque` and `DM Sans`) load correctly
- [ ] Mobile menu opens and closes correctly
- [ ] Sticky navigation behaviour works on scroll
- [ ] All pages include correct meta title and description as specified in Section 5
- [ ] `<html lang="en">` is present on every page
- [ ] No JavaScript errors in the browser console on any page

---

## 13. Out of Scope

Do not implement these in this build:

- Contact form with backend (mailto CTA is sufficient)
- CMS or dynamic content
- Blog post individual pages (blog.html is a placeholder grid only)
- Analytics/tracking scripts
- Cookie consent banner
- Logo graphic or favicon (text wordmark only for now)
- Team or associates page
- Case study pages
- Pricing pages
- Any server-side functionality

---

*End of PRD — Version 2.0*  
*For questions on this specification, contact hello@pevaris.com*