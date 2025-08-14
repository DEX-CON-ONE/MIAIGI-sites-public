# Project Summary

A clean, single‑page static site for **My AI Guy** (working title — replace with your preferred brand). The site helps independent businesses understand what you do, why you’re credible, and how to start — without any heavy frameworks or backend. Designed for GitHub Pages: one `index.html`, one small `styles.css` (or inline CSS), zero build tools.

---

## Audience & Tone

* **Audience:** independent businesses and small teams (trades, professional services, local ecommerce, boutique manufacturers, agencies).
* **Tone:** plain English, no hype. Practical, friendly, credible. British spelling.

---

## Page Structure (single page)

1. **Header / Nav** — Logo (text or simple SVG), links: Services, Use Cases, Case Studies, About, Contact.
2. **Hero** — Clear promise + short subhead + call to action (CTA).
3. **Services** — Four cards with short descriptions and outcomes.
4. **Use Cases** — Two columns: **AI (classic/ML)** vs **GenAI** with concrete examples per small business.
5. **Mini Case Studies** — Two short wins with outcomes.
6. **About Gareth** — Credibility story → why this makes a great AI consultant.
7. **How We Work** — 3‑step delivery with low‑risk pilot.
8. **FAQ (optional)** — Security, Microsoft-first stance, pricing approach (no numbers yet).
9. **Contact / CTA** — “Book a free discovery call” (Bookings embed when ready; otherwise `mailto:` link).
10. **Footer** — Copyright, lightweight links.

---

## Visual Style

* **Layout:** centered content, max‑width \~900–1000px. Generous white space.
* **Typography:** System stack (fast + no tracking) or Google Fonts (optional) e.g., headings: Inter/SF/Segoe; body: Inter/Segoe UI/Arial. Font sizes: H1 40–48px, H2 28–32px, body 16–18px, line‑height 1.6.
* **Colour palette (accessible):**

  * Primary: `#0B5FFF` (blue)
  * Dark text: `#0B1221`
  * Accents: `#00A37A` (success), `#FFB302` (attention)
  * Background: `#F8FAFC` / white
  * Ensure contrast ≥ 4.5:1 for body text.
* **Imagery:** keep it simple — one tasteful hero illustration or icon set. Avoid stock clichés.
* **Icons/Badges:** optional small 3‑star badge (your brand motif) to reinforce “enhanced performance”.

---

## Tech Constraints (GitHub Pages‑friendly)

* **No build step.** Pure HTML + CSS, tiny vanilla JS for nav and smooth scroll.
* **No cookies, no analytics** (add later if desired).
* **Contact:** start with `mailto:hello@myai.guy` (replace). Later: embed Microsoft Bookings via iframe.
* **Performance:** inline critical CSS or single small stylesheet (<10KB). Defer any JS. Use SVG where possible.

---

## SEO Meta (fill brand where noted)

* **Title:** My AI Guy — Practical AI for Independent Businesses
* **Meta Description:** Practical AI and GenAI consulting for small teams. Automate the boring work, improve quality, and expand capacity — safely, on the Microsoft stack.
* **Open Graph:** same title/description; `og:type=website`; placeholder image 1200×630.
* **Keywords (lightweight):** AI consulting, small business automation, Microsoft 365, Power Automate, Copilot, SQL Server, data strategy.

---

# FINAL SITE COPY (paste straight into HTML)

## Header

* **Logo text:** My AI Guy ☆☆☆
* **Nav:** Services · Use Cases · Case Studies · About · Contact

## Hero

**Practical AI for independent businesses**
Automate the boring work, improve quality, and give your team more hours in the day — without breaking your systems (or your brain).
[Book a free discovery call](/bookings) ← replace with your Bookings link or use `mailto:hello@myai.guy?subject=Discovery%20Call`.

**Trust markers (inline bullets):** Microsoft‑first · Security‑minded · Plain‑English delivery

## Services

**AI Discovery Session (free)**
A 30–45 minute call to map bottlenecks, quick wins, and sensible guardrails. You leave with a 1‑page plan and next steps.

**Process Automation Audit**
We document repeatable tasks and design flows (Power Automate / scripts) to remove manual effort and reduce errors.

**Custom AI Strategy Session**
A focused workshop to define goals, risks, data boundaries, and a practical 4–12 week roadmap.

**AI Readiness Assessment**
Lightweight review of data, tools, access, and policies so you can adopt AI safely and efficiently.

> **Outcome, not jargon:** fewer manual hours, tighter quality control, and faster turnaround for your customers.

## Use Cases

**What’s the difference?**
**AI (classic/ML)** predicts, classifies, or optimises using structured rules or models.
**GenAI** creates draft content or answers questions in natural language, grounded in your data.

### AI (classic/ML) — great for:

* **Forecasting & planning:** demand, staffing, or stock level projections.
* **Anomaly detection:** flag unusual spend, transactions, or KPI spikes.
* **Routing & scheduling:** optimise service routes, delivery windows, or job sequencing.
* **Quality checks:** rules‑based data validation on imports and spreadsheets.
* **Document processing:** OCR + rules to pull key fields from invoices, PDFs, or forms.

### GenAI — great for:

* **Customer support triage:** a help assistant that answers from *your* docs (SharePoint/OneDrive) using retrieval‑augmented generation (RAG).
* **Sales & marketing drafts:** emails, proposals, web copy — in your voice, ready for human edit.
* **SOPs & documentation:** generate first drafts of procedures and how‑tos from subject‑matter notes.
* **Meeting notes & follow‑ups:** summarise calls and propose next actions.
* **Internal search:** ask natural‑language questions over policies, price lists, or product specs.
* **Lightweight code helpers:** build spreadsheet formulas, Power Automate flows, or queries faster.

> **Rule of thumb:** AI *decides*, GenAI *drafts*. We combine both so the right tool does the right job.

## Mini Case Studies

**1) Change requests, without the chaos**
A small tech team managed database change requests in chat and email. We implemented a simple workflow with **Microsoft Forms + Power Automate + Teams** and a tracker. Result: centralised intake, time‑stamped approvals, and faster turnaround — with an audit trail.

**2) Reliable reporting on Azure SQL MI**
A client’s reporting queries hammered production. We materialised a heavy view into a table via a scheduled SQL Agent job (skips if BI users are active), and cleaned historical rows on a timer. Result: predictable refreshes, fewer CPU spikes, and happier dashboards.

*(More examples available on request. We keep this section small by design.)*

## About Gareth

Hi, I’m **Gareth Huggins** — Microsoft SQL Server specialist and founder of **SQL OPTIMISE**. I’ve spent **more than a decade** improving database performance and reliability in regulated industries (finance, defence, energy, healthcare). Along the way I’ve **automated myself out of more jobs than most people have had interviews** — on purpose.

That obsession with operational excellence is exactly why I’m an effective AI consultant: I hunt for wasted effort, design guardrails, and automate the right tasks so your team gets time back **without** losing control of quality or security. I speak DBA and business, so you don’t have to choose between them.

## How We Work

**1) Assess (week 0–1):** discovery call → quick‑win ideas and a sketch plan.
**2) Pilot (weeks 1–4):** prove value on one process; measure time saved and quality impact.
**3) Roll‑out (weeks 4–12):** productionise with governance, access controls, and training.
**4) Handover:** documentation, mini‑playbooks, and optional support.

## FAQ (short)

**Do we need fancy tools?** No. We start with what you already have (Microsoft 365, Power Automate, SharePoint, Teams, SQL).
**Is this safe?** Yes — we set boundaries: data sources, access, logging, and review steps.
**How do you price?** Fixed‑price pilots or a day rate for short engagements. We agree scope before we start.

## Contact

**Book a free discovery call:** `/bookings` (replace with your Microsoft Bookings link)
**Email:** `hello@myai.guy` (replace)
**LinkedIn:** add your profile URL

---

## Implementation Notes (for the dev agent)

* **Files:** `index.html`, optional `styles.css`, optional `logo.svg`. No build, no bundlers.
* **Nav:** anchor links with smooth scroll. Scroll‑spy optional.
* **Accessibility:** semantic headings, `aria-labels` on nav and buttons; focus outlines visible; contrast ≥ 4.5:1.
* **Performance:**

  * Inline critical CSS or single tiny stylesheet.
  * Use a single SVG logo/badge.
  * Avoid webfonts or use one lightweight family; use `font-display: swap`.
* **Bookings:** placeholder CTA now; later, embed Microsoft Bookings with an `<iframe>` (document height responsive).
* **Analytics:** none for v1. Add later if needed.
* **Favicons/OG:** include a simple star‑badge SVG; generate PNGs via favicon generator.

---

## Optional Extras (later)

* Client logo strip (once you have permission).
* A download link to a 1‑page PDF: “Top 10 AI Uses for Small Teams”.
* A minimal blog (Markdown to static) — but keep off for v1 to avoid scope creep.
