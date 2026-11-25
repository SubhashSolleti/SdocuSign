# Build v1: decisions made while building

Status: **v1 running for review** · 2026-11-24
The user asked to start building before Phases 4–7 had their own reviews. The structure and design decisions those phases would have made are recorded here instead, so they can be reviewed against the live page.
Code: [web/](../web/) (Next.js 16, App Router). Content: [web/src/content/en.ts](../web/src/content/en.ts) and [ar.ts](../web/src/content/ar.ts).

## Page structure (Phase 4, compressed)
| # | Section | Strategy item | Main question it answers |
|---|---|---|---|
| 1 | Hero: "E-signatures that stay on your servers, and verify without us for years." + the real sealed sample PDF with seal marks + the verifier's verdict | M1, D8 | What is it, where does it run, is it real? |
| 2 | Facts strip (where it runs, how it is sealed, who signs, languages) | M1 | The 10-second scan |
| 3 | How it works, in 4 steps, each with a product panel | M3 | How does it work? |
| 4 | Assistant (AI): signer Q&A with a cited clause, sender assistant with sources and actions, Nora voice, "You stay in control" | M15, D12 | What does the AI do, and who controls it? |
| 5 | Verify it yourself (inverted band): downloads + the real verifier report and SHA-256 | M2 | Can I check the claim myself? |
| 6 | For your teams: Security and IT / Legal and compliance / Procurement | M4–M6 | Each approver's answer |
| 7 | Measured, not promised (static numbers + conditions) | M7 | Is it proven at scale? |
| 8 | Questions to ask any e-signature vendor | S4 | How do I compare vendors? |
| 9 | Part of one platform (roadmap, honest status) | S1 | What comes next? |
| 10 | Trial: what is included and not included, what you need + the form | M9 | How do I start? |
| 11 | Footer: company, contacts, resources, legal, "no cookies" | M8 | Who is behind this? |

## Visual direction: UPDATED to the Apple design system (D16)

| Element | Choice |
|---|---|
| Type | System stack: `-apple-system` (SF Pro / SF Arabic), then Segoe UI and Roboto; IBM Plex Sans Arabic self-hosted only as the Arabic fallback. 17px body, line-height 1.47, letter-spacing −0.022em (Latin only). Headlines 600–700, tight tracking. |
| Colour | Light: `#ffffff` / `#f5f5f7` surfaces, `#1d1d1f` text, `#6e6e73` secondary, link `#0066cc`, action `#0071e3`. Dark: `#000` / `#1d1d1f` tiles, `#f5f5f7` text, link `#2997ff`. Green only for "verified"; red only for the seal stamps on the real document. |
| Shape | Pill buttons (980px radius), 18px tiles, 12px inner panels, soft shadows |
| Layout | Centred hero, product below it; alternating white and grey sections; a black band for "Check a sealed file yourself"; tiles for steps, assistant, teams, numbers, roadmap and trial |
| Header | 52px frosted translucent bar, 13px nav, small pill CTA |
| Phone mock | iPhone-style rounded bezel, with iMessage-style question and answer bubbles |

### Superseded: first direction (kept for the record)
A hybrid of the two researched directions: **"Ink & Seal"** (paper, type, the seal motif) **with "Civic Standard" clarity** (plain layout, tables, high contrast).

| Element | Choice | Why |
|---|---|---|
| Base | Near-white paper `#FBFAF7`, ink `#16181D` | Light-first (D10); deliberately not beige (the "AI beige" tell) |
| Accent | Carnelian seal red `#9C2F25` (dark mode `#E38677`), used for the CTA and seal marks only | Ownable; not the indigo that is both an AI default and Docusign's colour; ties to the wax-seal idea |
| Status | Green `#23663A` only for "verified" | Keeps the meaning clear |
| Display type | Markazi Text (Arabic Naskh + matching Latin), upright, no italics | A "document" voice in both scripts; avoids the Inter look and the italic-serif cliché |
| Body / UI | IBM Plex Sans + IBM Plex Sans Arabic | One superfamily drawn for both scripts (open font licence) |
| Data | IBM Plex Mono for hashes, timestamps, standards | Proof should look like proof |
| Motif | An SVG round seal ("SEALED · PAdES-B-LT · RFC 3161") stamped over the real signature boxes | "A seal per signer" made visible |
| Layout | Hairline rules, spec sheets, tables; section forms vary (steps, phone, report, columns, table, list) | Breaks the card-grid template rhythm |
| Removed | Dot grid, orbs, glow, gradients, fake window chrome, skeleton lines, sparkle icon, count-up numbers, eyebrow pills, the "Illustration composed…" disclaimer | The AI-tell checklist |
| Theme | Follows the system appearance; a toggle remembers the choice (localStorage, no cookies) | Apple HIG / Material: respect the OS appearance |

## Apple / Google principles applied
- Targets of at least 44px (HIG) for every button, link row and field.
- 17px body text in English and 18px in Arabic.
- Clear visual hierarchy: one primary action colour.
- Visible focus rings; `scroll-padding` so focused content is never hidden behind the sticky header (WCAG 2.4.11).
- Respect for reduced motion. The page has no decorative motion at all.
- The mobile menu uses native `<details>`, so it works without JavaScript.

## Technical
- English and Arabic are static, prerendered pages: `/en` and `/ar`, with `dir="rtl"` and logical CSS properties throughout. `/` redirects to `/en`.
- All content, including the numbers, is in the HTML, so it works without JavaScript (fixes V8).
- The fonts are self-hosted through `next/font`, so no request goes to Google. There are no third-party requests and no cookies.
- The form is a plain HTML POST to `/api/trial`, with server validation, a honeypot field and a per-address rate limit. Requests are stored in `web/data/trial-requests.jsonl`, which is git-ignored. **Before production it must forward to the sales inbox.**
- Security headers: `nosniff`, `Referrer-Policy`, `X-Frame-Options: DENY`.
- Verified at a true 390px phone width through DevTools emulation: no horizontal overflow in either language.

## Known gaps in v1 (to do)
| Gap | Owner / dependency |
|---|---|
| Product panels are built in HTML with sample data, not real screenshots | **DEP1**: product team screenshots in EN + AR |
| Legal wording ("advanced electronic signatures under Decree-Law 46/2021") not yet reviewed | **DEP2**: counsel (P6) |
| No company address, phone or named people | **DEP3**: leadership |
| Arabic copy written by us; needs review by a native copywriter | **DEP4** |
| "Ask us" assistant not built (it needs a model grounded in the docs) | Later (C4) |
| Links to the deeper pages (Security, Install, Pricing) go to the existing live site | The S8 site-wide token refresh comes later |
| No security.txt or accessibility statement yet | S7 |
| Phase 7 validation (5-second test with 5+ people, accessibility audit) not run | Next step |
