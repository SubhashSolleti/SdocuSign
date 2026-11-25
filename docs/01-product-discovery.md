# Phase 1: Product discovery

Status: **Draft, awaiting approval** · 2026-11-24
Related: [SITE_CONTEXT.md](SITE_CONTEXT.md) · [DECISION_LOG.md](DECISION_LOG.md)

## Product overview
We are building a single **combined landing page** for Smart Orbit. It replaces the current home page (`/site/en/`) and the Signora page (`/site/en/signora/`). **Signora**, the e-signature product, leads the page because it is the only product a visitor can get today. The wider platform (TroveDocs, Diwan, Tameer) is presented second, as where the product goes next. This is a **redesign and improvement** of existing pages, done by the in-house building team.

## Problem statement
The current site describes a capable, honestly documented product, but it **reads as generic and AI-generated**. That undermines credibility with the audience who care about it most: GCC government and enterprise buyers choosing a vendor to hold their signatures, keys and evidence.

From the audit (see the decision log), the causes are:
1. a template-like visual style;
2. the product is never actually shown;
3. copy that reads like a spec, with internal notes leaking onto the page;
4. no human, customer or regional proof.

On top of that, the home page splits attention across 4 products, 3 of which a visitor cannot get.

## Business objectives (draft, to confirm)
- B1. More **qualified Signora trial requests** from GCC government and enterprise organisations.
- B2. Establish **credibility**: a real UAE company with a real, inspectable product.
- B3. Position Smart Orbit as a **platform**, so that interest in Signora leads into TroveDocs, Diwan and Tameer later.
- B4. Fewer sales conversations spent re-explaining basics. The page should answer questions about deployment, legal level, residency and Arabic support.

## Initial assumptions
| # | Assumption | Status |
|---|---|---|
| A1 | The main conversion is a Signora trial request. Demo or sales contact is secondary. | Assumed |
| A2 | Buyers are GCC government and enterprise organisations; Arabic is as important as English. | Assumed |
| A3 | There is no analytics data on how the current page performs. | Likely (the site runs no analytics) |
| A4 | There is no direct customer access, so research is desk research and customer insights are hypotheses. | Confirmed for now |
| A5 | Existing AcuteSign customers are an important audience: they are migrating. | Hypothesis |
| A6 | The "AI look" comes as much from missing substance (product, proof, people) as from styling. | Hypothesis, to test in Phase 2 |

## Known constraints
- Bilingual English and Arabic (right-to-left) is required. Every decision must work in both.
- The only trial is on-prem. There is no self-service signup, so the call to action is a request form.
- The honest positioning stays: signatures are advanced, not qualified; there is no penetration test or ISO certification yet; there is no SaaS yet. We must not over-claim.
- There are currently no customer logos or testimonials (to confirm).
- Existing stack: a static Next.js site with a theme-token file (`content/theme.json`). Assumed to stay; to confirm.

## Open questions
1. Deadline and launch date?
2. Must the Arabic version launch at the same time as the English one?
3. Who gives final sign-off? The site refers to "the owner".
4. Are there any customers, pilots or partners we may name, or quotes we may use?
5. Are there brand assets we must keep, such as the Smart Orbit logo or the orbit mark?
6. Are there budget limits for commercial fonts, photography or illustration?
7. What happens to the other pages (Platform, Pricing, Security, Docs)? Are they kept as they are, or redesigned later?
