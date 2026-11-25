# Decision log: landing page redesign

Phase: **Build v1 running for review.** Phases 1–2 are approved; Phase 3 was accepted by default. Phases 4–6 were compressed into [04-build-decisions.md](04-build-decisions.md) at the user's request.
Context source: [SITE_CONTEXT.md](SITE_CONTEXT.md)

## Confirmed decisions
| # | Date | Decision | Source |
|---|---|---|---|
| D1 | 2026-11-24 | The project is a **landing page**: a redesign and improvement of an existing one. | User |
| D2 | 2026-11-24 | The user is on the Smart Orbit building team (internal, not a competitor or an agency). | User |
| D3 | 2026-11-24 | One **combined page** replaces the home page and the Signora page for now. | User |
| D5 | 2026-11-24 | Signora leads the combined page; the platform story comes second. | User ("yes") |
| D6 | 2026-11-24 | Research is desk research: no direct customer access, so customer insights are hypotheses. | User ("yes, do research") |
| D7 | 2026-11-24 | Research into visual direction (theme, colour, fonts) runs alongside Phase 2. It is research only; no visual decisions until Phase 6. | User |
| D8 | 2026-11-24 | The hero leads with control + verifiability. | User approved Phase 2 |
| D9 | 2026-11-24 | ~~AI is presented below the fold~~ Revised by D12: AI is presented with its controls (optional, kept inside the customer's environment), in its own section in the first half of the page. | User approved Phase 2; revised |
| D10 | 2026-11-24 | Light-first, with dark as a toggle. | User approved Phase 2 |
| D17 | 2026-11-24 | **3D, scroll-driven and interactive page.** It adds: a 3D hero document stack (pointer tilt, seals stamp in, flattens on scroll); a pinned "What is inside a sealed PDF" exploded view (document, signature, RFC 3161 time stamp, validation data); a pinned 3D cube for the 4 steps on large screens; tappable assistant questions with citations; an auto-replaying verification of the real report; staggered reveals; tile tilt. Guardrails: reduced motion turns all of it off, the page works without JavaScript, there is no animation library, and phones get simplified scenes. | User |
| D16 | 2026-11-24 | **Apple design system and theme** replaces the "Ink & Seal" direction. System font (SF Pro / SF Arabic on Apple devices; SF Pro is not embedded because of licensing), white and #f5f5f7 surfaces, #1d1d1f text, Apple blue #0071e3 for actions, pill buttons, 18px tiles, a frosted header, true-black dark mode. Apple's design *language* only: no Apple logo, name or assets. The real sealed document and the product panels stay. | User |
| D13 | 2026-11-24 | **Start building now** and share the page through an ngrok link. Phases 4–6 are decided during the build and documented for review. | User |
| D14 | 2026-11-24 | Apply Apple HIG and Google Material principles where relevant. | User |
| D15 | 2026-11-24 | Open questions resolved by default: keep the Ask us assistant (grounded) but not built in v1; the new look applies site-wide later; no cookies, with server-side counts only. | Default (no objection) |
| D12 | 2026-11-24 | **The product's AI features are a strength to showcase; only the website's *visual style* must not look AI-made.** AI gets its own section in the first half of the page (M15), shown through real screens with citations and controls. **D9 is revised**: AI is no longer below the fold. The hero still leads with control and verifiability (D8). | User |
| D11 | 2026-11-24 | The user restated the goal: a landing page with proper UX and the best theme. | User |
| D4 | 2026-11-24 | Why we are redesigning: the site "looks too AI / Claude-designed", meaning generic. The redesign needs proper UX research and customer analysis. | User |

## Pending decisions
| # | Question | Raised |
|---|---|---|
| P1 | ~~Which page?~~ Resolved by D3. Still open: which story leads the combined page, Signora or the platform? Recommendation: Signora leads. | 2026-11-24 |
| P2 | Who is the primary audience, and what is the single conversion goal? | 2026-11-24 |
| P3 | ~~What is wrong with the page?~~ Partly resolved by D4. Evidence: the visual audit below. | 2026-11-24 |
| P4 | Is there access to real customers (trial customers, AcuteSign users, sales)? This decides whether research is primary or desk-only. | 2026-11-24 |
| P6 | **Legal wording, for counsel:** under Decree-Law 46/2021, is Signora's per-signer seal (made with the organisation's key) an "advanced electronic signature" or an "advanced electronic seal"? The page's legal claim depends on the answer. The wording must not imply that signing happens *with* UAE PASS; UAE PASS only confirms the signer's identity. | 2026-11-24 (research) |
| P5 | Constraints: deadline, whether we stay on the current Next.js and theme-token stack, whether Arabic must launch at the same time, and who gives final approval (the site refers to "the owner"). | 2026-11-24 |

## Initial audit: why the current site reads as "AI-generated"
Evidence: [research/current-site/](research/current-site/) (screenshots taken 2026-11-24, desktop 1440px and mobile 390px).

**Visual**
- V1. The hero is the generic "AI startup" template: dark navy, a dot grid, glowing orbs, orbit lines and a gradient haze.
- V2. The product is never actually shown. Mock windows with traffic-light dots hold grey skeleton lines, and the hero mock is mostly empty space.
- V3. Every mock carries the caption "Illustration composed from the product's design system, with sample data". It reads as a disclaimer and draws attention to the fact that nothing is real.
- V4. Every section uses the same rhythm: eyebrow label, large heading, grey subtitle, then a grid of identical rounded cards with checkmarks or status pills.
- V5. No people, places or photography. The page has no human or regional (UAE/GCC) presence, although "Arabic and the GCC first" is a core claim.
- V6. The primary call to action has two colours (yellow in the hero, periwinkle in the nav).
- V7. The same envelope mock appears 3 times on the home page, and "Built once, shared by every product" appears on both pages.
- V8. On the Signora page, the stat counters showed **"0 field kinds"** and **"0 weeks"** when captured. They count up with JavaScript, so link previews, crawlers and visitors without JavaScript see zeros.
- V9. The mobile capture at 390px shows the hero text and mocks overflowing to the right. This needs checking on a real device.

**Copy**
- C1. Long sentences chained with semicolons that read like a spec ("A sender prepares documents, recipients and fields and sends; each signer…").
- C2. Internal notes are visible on the site: "F-H3-2", "Spec 21", "owner item B34", "Draft for the owner", "Proposed pricing — for the owner's review", "Placeholder for the owner's lawyer".
- C3. Formulaic headings: "AI, your way", "What is different: seven points", "Built once. Shared by every product."

**Trust**
- T1. No customer logos, case studies, testimonials, named team, office address or phone number; the company page is a placeholder. For GCC government and enterprise buyers this is likely the real credibility gap.
- T2. Visitors are sent to 3 products they cannot get (in development or coming).

**Worth keeping**
- K1. The honest transparency: measured numbers with their conditions, and a "not yet done" list.
- K2. A real sealed sample PDF and its verifier report.
- K3. Arabic and right-to-left support, a dark/light theme toggle, no cookies.

## Working defaults (the user has no information on these yet; revisit if facts arrive)
| # | Default | Why |
|---|---|---|
| W1 | **No named customers.** Trust is built through an inspectable product, a sealed sample, transparency, a real company presence and compliance facts, not logos or testimonials. | No customers or quotes are confirmed; inventing them is off the table. |
| W2 | **Arabic is designed in from the start, not translated afterwards.** Every layout is tested in right-to-left. Launch timing for Arabic is open. | Retrofitting right-to-left is costly, and "Arabic first" is a core claim. |
| W3 | **Keep the Smart Orbit name and logo. Everything around them may change.** | The least risky choice without brand guidance. |
| W4 | **Free or open-source fonts and assets by default.** Commercial options are only listed for comparison. | No budget is known. |
| W5 | **No fixed deadline.** Quality takes priority; scope stays one page. | No deadline is known. |
| W6 | **The success bar: "designed by a person".** A senior designer or a target buyer should not identify it as AI-generated. Validate with a quick 5-second test with 5+ people in Phase 7. | The user's stated goal. |

## Rejected ideas
| # | Idea | Why rejected |
|---|---|---|
| X2 | "Ink & Seal" visual direction (Markazi serif, carnelian accent, paper tone) | Replaced by the Apple design system at the user's request (D16). |
| X1 | Hide AI or play it down on the page | The user wants AI showcased as a product strength (D12). Buyer concerns are answered with citations and controls instead. |

## Assumptions (to validate)
| # | Assumption | Why we assume it | How to validate |
|---|---|---|---|
| A1 | The main conversion is "Request a trial" for Signora. | Signora is the only product customers can try; every page ends with the Signora trial call to action. | Confirm with the user. |
| A2 | Buyers are GCC government and enterprise organisations, and Arabic matters as much as English. | The site positioning, UAE PASS, Hijri dates and right-to-left layout. | Confirm the target segments with the user or sales. |
| A3 | There is no quantitative data on how the current page performs. | The site states that it "runs no analytics" and sets no cookies. | Ask whether sales or trial-form data exists. |

## Research findings
Phase 2 synthesis: [02-ux-research-report.md](02-ux-research-report.md), with 10 key insights (I1–I10) and 11 opportunities (O1–O11). Headlines:
- On-prem with customer-held keys, offline verification and published benchmarks: **no competitor claims these** on its landing page (I1).
- The UAE-first position is largely unclaimed. The Saudi formula is licence + national ID + local hosting + Arabic (I2).
- Legal wording must be exact: advanced ≠ handwritten. UAE PASS is for identity, not signing (I3, I4).
- Buyers are committees that research alone. AI features double the size of the buying group, so **don't lead with AI** (I6, I7).
- The current site matches 15 of 16 published "AI look" tells. The fix is specificity, not a new trend (I9).
- WCAG 2.2 AA and Arabic parity are requirements for government buyers (I10).

## Proposed for approval (Phase 2 → 3)
| # | Proposal | Status |
|---|---|---|
| R1 | The hero leads with control + verifiability, replacing "Sign with a smile" and "AI-powered". | **Approved → D8** |
| R2 | AI moves down the page as optional and kept inside the customer's environment. | **Approved → D9** |
| R3 | Light-first visual direction (to finalise in Phase 6). | **Approved → D10** |

## Scope changes
_None yet._
