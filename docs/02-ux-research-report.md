# Phase 2: UX research report (synthesis)

Status: **Draft, awaiting approval** · 2026-11-24
Scope: one combined landing page, Signora-led (D3, D5). Desk research only (D6).

Detailed reports, each with its sources:

| Report | File |
|---|---|
| Competitors (12 vendors) | [02-competitor-analysis.md](research/02-competitor-analysis.md) |
| Audience, market, regulation, personas | [02-audience-and-market.md](research/02-audience-and-market.md) |
| Landing page UX patterns and best practice | [02-ux-patterns-and-best-practices.md](research/02-ux-patterns-and-best-practices.md) |
| Visual direction (removing the AI look) | [02-visual-direction-research.md](research/02-visual-direction-research.md) |
| Current-site screenshots | [research/current-site/](research/current-site/) |

**Evidence labels.**
- **[V] Verified:** read at a cited source.
- **[V-sec] Verified (secondary):** the primary source was blocked; read in trade-press coverage.
- **[H] Hypothesis:** must be validated.
- **[O] Opinion:** a designer's or researcher's judgement.

**Limits.** G2, Capterra, TrustRadius reviews and Gartner pages blocked automated access. The text of Decree-Law 46/2021 was read from a republished English copy, not the official Arabic. Complaint data is global; none of it is clearly from GCC reviewers. Citations were gathered by research agents and have not been re-checked line by line. **Legal claims must be reviewed by counsel before any wording goes live.**

---

## 1. Key insights (the 10 that should shape the page)

| # | Insight | Evidence | So what for the page |
|---|---|---|---|
| I1 | **No competitor landing page claims on-prem with customer-held keys, verification that works without the vendor for years, or published benchmarks.** None names PAdES or RFC 3161; they say "legally binding" instead. | [V] 12 vendor pages | Control and verifiability are Signora's open positions. Lead with them. |
| I2 | **In Saudi Arabia the formula is licence + national ID + local hosting + Arabic** (Signit, Sadq). **In the UAE it is largely unclaimed.** Docusign's and Adobe's UAE pages only describe the law; emSigner's UAE page omits UAE PASS; DTSigner's site redirects away. | [V] | A UAE-first page is open ground. Speak about "GCC" only with qualifiers. |
| I3 | **Legal precision is required.** Under Decree-Law 46/2021 only a *qualified* signature equals a handwritten one (Art. 18(3)). An *advanced* signature has legal effect if its conditions are met (Art. 18(7), 19). Government entities may require a particular level (Art. 28(7)(c)). | [V] (republished text) | State the level plainly and honestly, and say when it is enough. Never imply equivalence to a handwritten signature. Counsel decides "advanced signature vs advanced seal" (P6). |
| I4 | **UAE PASS has 11–12M users and its own document-signing feature.** Competitors sell "signing *with* UAE PASS"; Signora uses UAE PASS only to identify the signer, tested against a stand-in. | [V] | Wording: "Signers prove who they are with UAE PASS." Never "sign with UAE PASS". |
| I5 | **Data residency is a real requirement.** Docusign's data regions have no Gulf location. Dubai government data must stay in the UAE. The National Cloud Security Policy binds government entities. | [V] | "Runs on your servers" answers a requirement, not a preference. |
| I6 | **Large buying groups that research alone.** About 13 internal stakeholders plus 9 external influencers (Forrester 2026); procurement decides in 53% of cases; 67% prefer no sales rep (Gartner 2026); trials and demos are the most influential resources; enterprise buyers' top wish is transparent pricing (TrustRadius). | [V], Gartner [V-sec]; global samples | The page is a **document a champion forwards to the committee**. Each role (security, legal, procurement) needs its own clearly labelled answer. Don't gate the basics. |
| I7 | **AI features double the size of the buying group,** and 28% of procurement respondents lost confidence because of AI errors (Forrester 2026). | [V-sec] | **Don't lead with AI.** Present it as optional, configurable and kept inside the customer's environment. This contradicts the current "AI-powered" hero. |
| I8 | **Credibility comes from real things.** NN/g: decorative imagery is ignored, while real product shots and real people are studied. Small numbers make social proof backfire. Visible errors and drafts destroy credibility (Stanford guidelines). | [V] | Show the real product and real people. Remove internal notes (C2). Don't pad thin proof. Make the sealed sample PDF the hero proof object. |
| I9 | **The current site matches 15 of 16 published "AI look" tells.** The common escape, warm beige with an italic serif, is now itself listed as an AI tell. | [V] sources; mapping [O] | Changing the style alone won't work. The fix is **specificity**: things only Signora could show. |
| I10 | **There are hard rules for Arabic and accessibility.** The TDRA policy (March 2024) requires WCAG 2.1 AA on public-service sites, including contractors; the UAE Design System follows WCAG 2.2. Arabic and English must be equal, with mirrored layout. Adobe Acrobat Sign and Dropbox Sign have documented right-to-left field problems. | [V] | WCAG 2.2 AA is the baseline and a selling point. Arabic copy is written natively and screenshots are taken in Arabic. |

---

## 2. Target audience and personas

Committee model: the landing page serves **evaluators**. Signers rarely visit it; their experience is shown as proof to senders.

| Persona | Role on the page | What they must find | Status |
|---|---|---|---|
| **A. Khalid, IT and security evaluator** | Primary gatekeeper | Where it runs, where keys live, what calls out of the network, SSO/SCIM/API, security review *and its gaps*, install guide, performance | Context [V]; needs [H] |
| **B. Mariam, legal and compliance officer** | Can veto | The signature level in plain words, the sealed sample and verifier report, audit trail and retention, consent | Law [V]; needs [H] |
| **C. Noura, business sender (HR or procurement)** | Champion, brings the tool in | The real compose and send flow, templates, bulk send, Arabic documents, tracking | Pains partly [V]; [H] |
| **E. Abdullah, procurement and tender committee** | Decision-maker | Legal entity, address, licensing model, indicative pricing, SLA, trial terms, references | Influence [V]; needs [H] |
| **D. Rahul, external signer on a phone** | Shown as proof only | "What your signers see": UAE PASS or a code, Arabic, a short summary | [H] |
| *Fatima, correspondence officer (Diwan)* | Secondary; platform roadmap only | — | [H] |

Full persona sheets: [02-audience-and-market.md §4](research/02-audience-and-market.md). Names are illustrative, and the "quotes" are prompts to test, not real quotes.

**Problems today**
- [V], global, from public reviews: licensing and pricing complexity in incumbents; slow or region-dependent support; template and field glitches; Arabic and right-to-left field failures; no Gulf data region.
- [H], plausible for the GCC: sensitive government documents fall back to paper and scanning; approval chains with an approver, a signatory and a company stamp don't fit Western signer models; foreign signers have no UAE PASS; legal teams worry about AI reading contracts.

---

## 3. Competitors: what the market looks like

| | Global (Docusign, Adobe, Dropbox Sign, Zoho, PandaDoc, Youtrust) | Regional (Signit, Sadq, emdha, emSigner UAE, Cygnature, DTSigner) | Signora today |
|---|---|---|---|
| Headline theme | Agreement management, speed, AI | Legal + licensed + local | "Sign with a smile" (playful, doesn't say what it is) |
| Primary call to action | A sales call to action for enterprise, a trial for SMB | Request a demo | Request a trial (only one option) |
| Trust signal | Scale, Fortune 500 logos | **Regulator licence + ministry logos** | Measured benchmarks + sample PDF (unique, but buried) |
| Arabic | Adobe and Zoho only | Standard; Sadq is Arabic-first | Yes |
| On-prem or customer keys | None stated | None stated | **Yes** |
| Visual style | Docusign owns indigo and cobalt; others use the generic SaaS look | Mostly the generic SaaS look; Sadq (IBM Plex Arabic + green) is the exception | Generic AI look |

**Where Signora is behind:** no customer logos, no regulator licence, advanced rather than qualified signatures, no Saudi story, one high-friction call to action, and placeholder company pages.
**Where Signora is ahead:** sovereignty (on-prem, own keys), verification that works without the vendor, transparency (benchmarks, a "not done" list), Arabic support, and voice-guided signing.

**Cautionary look-alikes:** Documenso, an e-signature competitor, and Lean, a UAE fintech, look almost identical to the current hero. A visitor could not tell these companies apart.

---

## 4. UX patterns and requirements (from best practice)

| Area | Finding | Label |
|---|---|---|
| Hero | Say what it is, who it's for and why it's different in one look. Show the real product. | [V] NN/g |
| Page length | 57% of viewing time is above the fold and 74% in the first two screens, but long pages work if each section earns its place. | [V] NN/g |
| Multiple products | Leading users toward content that doesn't exist makes them think the offer is missing. Put unreleased products in one compact roadmap section. | [V] NN/g |
| Calls to action | One honest primary action and one quieter alternative. Don't gate information. A short form that explains why each field is asked. | [V] NN/g, Gartner |
| Trust without logos | Verifiable artefacts, named people, an address and phone, security.txt and a vulnerability disclosure policy, the honest "not done" list. | [V] Stanford, NN/g, RFC 9116 |
| Right-to-left | Set direction in markup; mirror the layout but not media controls or numbers; an "العربية / English" switcher with no flags that links to the equivalent page; no letter-spacing on Arabic; line-height 1.5; Arabic screenshots. | [V] W3C, UAE Design System |
| Numerals | u.ae uses Western digits. Confirm with buyers. | [V] / [H] |
| Accessibility | WCAG 2.2 AA; reduced motion respected; nothing auto-advances; focus not hidden behind the sticky header or the "Ask us" widget; an accessibility statement. | [V] |
| Technical | Final numbers in the HTML (fixes the "0 field kinds" bug); Core Web Vitals; subset fonts; reflow at 320px. | [V] |

---

## 5. Visual research (input for Phase 6, no decisions yet)

- **Avoid:**
  - a dark default background;
  - glow, orbs, haze and dot grids;
  - indigo or violet (both an AI default and Docusign's colour);
  - Inter/Geist-only type;
  - eyebrow, heading, subtitle and card grid in every section;
  - status-pill clutter;
  - fake app windows;
  - the sparkle "AI" icon;
  - count-up numbers;
  - **and the new cliché: warm beige with an italic serif.**
- **What the credible references share** [O] (Harvey, Stripe Press, GOV.UK, Wise, Thmanyah, Tabby, Tamara, Foodics, Museum of the Future, the UAE Design System and TAMM):
  - one colour they own;
  - real product, objects, places and people;
  - typography with a point of view **in both scripts**;
  - section layouts that vary.
- **Light-first** suits this audience: NN/g, studies of older readers, the UAE Design System defaults to white, and documents are paper. Dark stays as a toggle.
- **Type, free and open licence:** IBM Plex Sans Arabic + IBM Plex Sans + Plex Mono is the strongest coherent system. Markazi Text is an editorial option for headings. Tajawal and Cairo are the regional equivalent of Inter, so avoid them.
- **Motif:** "a seal per signer". The seal, the stamp and the sealed PDF are the brand's own objects.
- **Three directions are parked for Phase 6:** *Ink & Seal* (documentary and typographic), *Civic Standard* (government-style utility, proof-forward), *Majlis Daylight* (regional photography; needs a real photo shoot).

---

## 6. Opportunities (ranked)

| # | Opportunity | Solves | Effort | Confidence |
|---|---|---|---|---|
| O1 | **Reposition the hero on control + verifiability**, for example "E-signatures that stay in your data centre and can be verified without us, for years." | I1, I5; the vague hero | Low | High |
| O2 | **Make the sealed sample the proof object**: "Download a sealed PDF and verify it yourself", ungated, near the top. | I1, I8, no logos | Low (the asset exists) | High |
| O3 | **Show the real product**: real screenshots in English and Arabic, captured from the running trial. | V2, V3, I8, I9 | Medium | High |
| O4 | **Sections for each committee role**: for security, for legal, for procurement. | I6 | Medium | Medium–high |
| O5 | **An honest legal-level statement** (advanced, under Decree-Law 46/2021, when it is enough), reviewed by counsel. | I3, Persona B | Low, but needs counsel | High |
| O6 | **Real company presence**: named people, an address, phone, trade licence, security.txt. | T1, Persona E | Low (needs information from the business) | High |
| O7 | **Keep the transparency, but say it shorter**: benchmarks as static text with their conditions, and the "not done" list. | K1, I8, V8 | Low | High |
| O8 | **AI moved down the page** as optional and kept inside the customer's environment. | I7 | Low | Medium (a business decision) |
| O9 | **One compact platform roadmap** for TroveDocs, Diwan and Tameer. | T2 | Low | High |
| O10 | **Arabic-first parity and WCAG 2.2 AA** as stated selling points. | I10 | Medium | High |
| O11 | **A distinctive visual identity** built from specific things: the seal motif, Plex Arabic + Latin, one colour we own, light-first. | I9 | Medium–high | Medium (validate in Phase 7) |

---

## 7. Open questions and validation plan

| # | Question | How to resolve |
|---|---|---|
| Q1 | Is the per-signer seal an advanced *signature* or an advanced *seal*? What legal wording is safe? | **Counsel** (blocks O5) |
| Q2 | Are there existing AcuteSign customers we could reference, even anonymously ("a federal entity")? | Sales or leadership |
| Q3 | Company facts for the page: address, phone, trade licence number, named people? | Leadership (blocks O6) |
| Q4 | Can we capture real screenshots from the trial build in both languages? | Product team (blocks O3) |
| Q5 | Do GCC government buyers prefer "request a trial" or "book a walkthrough"? | Sales objection log, or tender mining (10–20 public tenders) |
| Q6 | Western or Arabic-Indic digits on the Arabic page? | u.ae uses Western digits; confirm with 2–3 Arabic-speaking buyers |
| Q7 | Does the business accept moving AI down the page? | Leadership (affects O8 and the platform positioning) |
| Q8 | Validate the personas and the "not AI-made" goal. | Phase 7: a 5-second test with at least 5 people; interviews when access allows |
