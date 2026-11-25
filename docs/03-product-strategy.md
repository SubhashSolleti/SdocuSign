# Phase 3: Product strategy

Status: **Draft, awaiting approval** · 2026-11-24
Built on the approved [Phase 2 research](02-ux-research-report.md) and decisions D1–D11 in the [decision log](DECISION_LOG.md).
References such as I3 (insight), O2 (opportunity), V8 (audit item) and P6 (pending decision) point to items in those documents.

---

## 1. Vision

**Signora (the product):**
> *Agreements people understand before they sign, and evidence that holds, on ground you control.*

**The landing page (this project):**
> *A page a UAE government or enterprise buyer can forward to their security, legal and procurement colleagues, and each of them finds a straight, verifiable answer.*

**Mission:** replace claims with things a buyer can check: the real product, a real sealed file, measured numbers, real people, and the honest list of what is not done yet.

## 2. Value proposition

**Core value proposition (draft external wording):**
> E-signature for UAE government and enterprise that runs on your own servers, seals every signature into the PDF, and can be verified without us for years, in Arabic and English.

**Unique selling proposition (internal, not a public "only" claim):**
Among the 12 vendors we checked, none states on its landing page all four of these:
1. **on-prem with customer-held keys** (own CA, Azure Key Vault, AWS KMS);
2. **a long-term seal per signer** (PAdES-B-LT + RFC 3161) with a **public, graded verification** that works offline;
3. **published performance measurements** with their test conditions;
4. **UAE PASS identity + native Arabic/RTL**.

**Proof we can show today (no customers needed):** the sealed sample PDF and verifier report, the OWASP ASVS review with its gaps, the benchmarks, the install guide, the API documents, the release notes.

## 3. Goals

| Type | Goal | How we will know (measurement that keeps the "no cookies" promise) |
|---|---|---|
| **Business** | B1. More *qualified* Signora trial requests | Count submissions on the server (the form already posts to our server), with organisation type, before vs after. Sales rates lead quality. |
| | B2. Credibility: a real UAE company | Phase 7 5-second test: ≥ 4/5 people say "a real company"; 0/5 say "AI-made or template" (W6). |
| | B3. Platform interest without dead ends | Roadmap "register interest" requests per product (server-side count) |
| | B4. Fewer basic questions in sales calls | Ask sales after 4–6 weeks: which questions stopped coming up |
| **User** | U1. In 10 s: what it is, where it runs, the legal level, that it is real | 5-second test recall |
| | U2. Each role finds its answer within 1–2 scrolls | Task-based test: "Find where the keys are stored", "Find the signature level" |
| | U3. Verify the claims yourself | Downloads of the sealed sample and opens of the verify page (server log) |
| | U4. Contact without friction | Form completion: ≤ 6 fields, no error dead ends |
| **Product** | P1. One combined page replacing home + Signora, in EN + AR | Both locales live; old URLs redirect |
| | P2. Honesty kept: no over-claims, no internal notes | A pre-publish content check (a search for internal tokens and banned claims) |
| **Technical** | T1. WCAG 2.2 AA in both languages | An axe/Lighthouse run plus a manual keyboard and screen-reader pass (VoiceOver + NVDA) |
| | T2. Core Web Vitals "good" at p75 (LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1) | Lab measurement before and after, both locales |
| | T3. All content works without JavaScript (fixes V8); no third-party requests; no cookies | A no-JavaScript render check; a network panel audit |
| | T4. Built on the existing static Next.js site and theme tokens | Code review |

**Measurement principle:** we will **not** add cookie-based analytics. "This site sets no cookies and runs no analytics" is itself a trust asset for a privacy-sensitive audience. Only server-side counts of our own form and download endpoints.

---

## 4. Feature prioritisation (MoSCoW)

For a landing page, a "feature" is a section, a piece of content or a capability.

### Must have (MVP)

| # | Feature | Why / user problem | Business value |
|---|---|---|---|
| M1 | **Hero: control + verifiability** (D8). One headline, a sub-line naming *on your servers · seal per signer · UAE PASS identity · Arabic & English*, one primary CTA, the sample link, and a **real product screenshot** | U1. Every persona's 10-second question (I1, I5) | Defines the position no competitor holds |
| M2 | **"Verify it yourself" proof object**: download the sealed sample PDF plus the verifier report, ungated, near the top | Trust without logos (I8); Persona B | Turns a claim into evidence |
| M3 | **How it works, in 4 steps** (compose → sign → seal → verify) with **real screenshots**, user-controlled, no autoplay | Persona C; NN/g "show the product" | Shows the product is real (fixes V2, V3) |
| M4 | **"For security teams" block**: where it runs, where keys live, what calls out, SSO/SCIM/API, the security review *and its gaps*, links to install, security and API docs | Persona A, the gatekeeper (I6) | Unblocks the most common veto |
| M5 | **"For legal & compliance" block**: the signature level in plain words, when it is enough, the evidence and audit trail, retention, consent. **Wording reviewed by counsel.** | Persona B (I3, P6) | Prevents over-claiming and legal risk |
| M6 | **"For procurement" block**: company facts, the licensing model, the trial terms (30 days, limits, what is not included, what happens after), support | Persona E (I6) | Removes vendor-viability doubt |
| M7 | **Measured performance**: 3–4 numbers as **static text** with their conditions | K1; fixes V8 | A unique proof point |
| M8 | **Real company presence**: legal entity, address, phone, contacts, security contact. Named people if allowed. | T1; Stanford credibility | Credibility for government buyers |
| M9 | **Trial request form**: ≤ 6 fields; explain why each is asked; "what happens next"; works without JavaScript | U4; B1 | The conversion |
| M10 | **One primary CTA style and label** everywhere ("Request a 30-day trial"); a quieter "Talk to us" | Fixes V6; I6 | Clarity |
| M11 | **Arabic page with equal quality**: native Arabic copy (not translated literally), Arabic screenshots, correct RTL, an "العربية / English" switch to the equivalent page | I10; the core claim | Required for the government market |
| M12 | **WCAG 2.2 AA, reduced motion, no-JavaScript content, no cookies, no third-party requests** | I10; T1–T3 | A requirement, and a selling point |
| M13 | **Remove all internal notes and placeholders** ("Spec 21", "Draft for the owner", "proposed") | Fixes C2 | Credibility |
| M14 | **A new visual identity applied** (direction decided in Phase 6): light-first (D10), no AI tells | I9; the goal of the project | The reason for the project |
| M15 | **AI features shown as real product capability** (D12). For each: the real screen, the concrete outcome, and the control. Examples: the signer asks "What am I agreeing to?" and gets the answer with the clause cited; the sender's assistant answers with source documents and asks before acting; Nora voice-guided signing on the phone; "your model, your region, your keys". | AI is a genuine differentiator. The buyer-committee concern (I7) is answered by showing **control and citations**, not by hiding AI. | Product differentiation |

### How we show AI without the website looking AI-made (rules for M15 and C4)
1. **Show the real AI output on a real screen**: the answer, the cited clause, the source documents. Never an abstract "AI" illustration.
2. **Every AI example shows its source** (a quote, a page number, a document link), because "answers with the quote it came from" is the product's own principle.
3. **Plain labels**: "Summary", "Ask about this document", "Suggested". No "magic", "supercharge", "AI-powered" or "intelligent" in headings.
4. **No AI visual clichés**: no sparkle or star icons, no purple or indigo gradients, no glow, no shimmer or typing-dot animations, no robot or brain imagery.
5. **Pair every capability with its control**: which model, where it runs, that it is off until configured, that a person accepts suggestions.
6. **Placement:** the hero leads with control and verifiability (D8). AI gets its **own full section in the first half of the page**, not tucked at the bottom (revises D9).

### Should have

| # | Feature | Why | Note |
|---|---|---|---|
| S1 | **The platform roadmap, in one compact section**: TroveDocs, Diwan, Tameer with honest status and "register interest" | B3; avoids dead ends (T2) | No prominent links to thin pages |
| ~~S2~~ | *Promoted to M15 (D12).* | | |
| S3 | **"What your signers see"**: one phone view of the Arabic signing page with UAE PASS / code options | Persona D as proof for Persona C | Wording per I4 |
| S4 | **"Questions to ask any e-signature vendor" table**, rewritten so it names no competitor | Gives champions a ready-made evaluation tool | Kept from the current site |
| S5 | **Integration summary**: REST, SDKs, webhooks, embed, SCIM, migration from AcuteSign | Persona A; AcuteSign users (A5) | Links to the API docs |
| S6 | **Licensing / pricing signal**: how licensing works + "from AED…" **only once the pricing is approved**; until then, the trial terms + "ask us" | Top wish: transparent pricing (I6) | Depends on business approval |
| S7 | **security.txt + an accessibility statement + a vulnerability disclosure note** | Trust signals (RFC 9116, TDRA) | Small effort |
| S8 | **The new tokens, header and footer applied site-wide** so the other pages do not clash | Consistency | Layouts of the other pages unchanged |

### Could have

| # | Feature | Condition |
|---|---|---|
| C1 | A short real screen recording of compose → sign → verify, captioned in both languages | If the product team can record one; user-started, with a transcript |
| C2 | An interactive, ungated signer demo using the real signing page with a sample envelope | Needs a hosted demo tenant |
| C3 | Commissioned photography of real people in UAE workplaces | Only for the photographic direction in Phase 6; never stock or AI images |
| C4 | The "Ask us" assistant **kept as a working demo of the product's AI**. Requirements: restyled with no sparkle icon and plain labelling ("Ask a question about Signora"); answers only from the published docs, always with source links; declines legal advice; labelled as AI. | Recommended. Pending the user's confirmation (Q-A) |

### Won't have (for now)

| # | Feature | Why not |
|---|---|---|
| W-1 | Customer logos, testimonials, "trusted by" | None exist that we can name; invented proof is off the table (W1). Leave space to add them later. |
| W-2 | Cookie analytics, chat widgets or tracking pixels from other companies | Breaks the "no cookies" trust asset (T3) |
| W-3 | Saudi or "GCC-wide" claims | No Nafath or KSA hosting (I2) |
| W-4 | Full redesign of the Platform, Pricing, Security, Docs and product sub-pages | Out of scope; only the shared tokens, header and footer (S8) |
| W-5 | Self-service signup | Not available; the trial is installed on-prem |
| W-6 | Auto-playing carousels, count-up numbers, decorative motion | Fails accessibility and the AI-tell checklist |

---

## 5. Scope

**MVP:** M1–M14 on one combined page in English + Arabic, plus S1–S5 and S7, which are cheap and high value.
**Next (after launch):** S6 pricing once approved, S8 if it is not done in the MVP, C1 recording, C2 demo, real customer proof when available, the Phase 7 5-second test repeated with real buyers.
**Out of scope:** W-1 to W-6; changes to the Signora product itself.

### Dependencies (who must provide what)

| # | Dependency | Owner | Blocks |
|---|---|---|---|
| DEP1 | **Real screenshots** of the trial build, in EN and AR, with sample data | Product team | M1, M3, S3 |
| DEP2 | **Legal wording** on the signature level, and "signature vs seal" (P6) | Counsel | M5, M1 sub-line |
| DEP3 | **Company facts**: legal entity, trade licence number, address, phone, contacts, named people (optional) | Leadership | M6, M8 |
| DEP4 | **Native Arabic copywriting** and review | Arabic-speaking writer (in-house or freelance) | M11 |
| DEP5 | Pricing approval | Leadership | S6 |
| DEP6 | Whether live UAE PASS integration is confirmed, or still stand-in only | Product | Wording in M1, S3 |
| DEP7 | Server endpoint counts for the form and downloads | Engineering | Measuring B1, U3 |

### Risks

| Risk | Impact | Mitigation |
|---|---|---|
| **No real screenshots arrive, so the team falls back to drawn mocks** | Brings the AI look straight back (V2) | Treat DEP1 as blocking; if needed, capture screenshots ourselves from a local install of the trial package |
| Legal wording is wrong or over-claims | Legal and reputational damage with government buyers | Counsel sign-off is a release gate |
| The Arabic copy reads as a translation | Fails the core claim | Write it natively; a native speaker reviews it; screenshots taken in Arabic |
| The new style becomes the *next* cliché (beige + italic serif) | Still looks AI-made | Phase 6 checklist; Phase 7 5-second test |
| The page becomes too long (every role wants a section) | People drop off | Role blocks stay short and link to the existing deep pages; Phase 4 limits the section count |
| The other pages clash with the new look | Feels unfinished | S8 shared tokens, header and footer |
| No baseline measurement (no analytics) | We cannot prove improvement | Count server-side from launch; use qualitative tests now |
