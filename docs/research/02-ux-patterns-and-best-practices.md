# 02: UX patterns and best practices for the combined landing page

Desk research. Compiled 2026-11-24 for the merged Smart Orbit home page and Signora page.
Inputs: [../SITE_CONTEXT.md](../SITE_CONTEXT.md) and the audit in [../DECISION_LOG.md](../DECISION_LOG.md) (codes V1–V9, C1–C3, T1–T2, K1–K3 refer to that audit).

## How to read this report

- **[S]**: the claim comes from a source fetched on 2026-11-24. The URL follows it.
- **[V]**: vendor or industry data. The URL is given, but the publisher has a commercial interest, so read it as a direction, not as proof.
- **[PO/H]**: practitioner opinion or hypothesis. No fetched source backs it. Validate it before relying on it.
- Quotations are taken from the fetched pages. No statistic in this report is estimated. Where a source gave no number, none is given here.
- **Age of sources.** Some NN/g articles are old (B2B usability 2006; carousels 2013, last reviewed August 2026; photos 2010, last reviewed August 2026). Their principles are still cited, but their specific numbers are dated, and each is flagged where it is used.
- **Fetch failures.** Gartner's 2025 and March 2026 press releases returned HTTP 403; the May 2026 release was read from Gartner's mirror host. The Material Design 2 bidirectionality page rendered empty, so the Material 1 version (m1.material.io) was used. Apple's HIG was read through its JSON documentation endpoint.

---

## 1. Landing-page structure for complex enterprise B2B products

### 1.1 Hero clarity
- **[S]** State what the company does and why someone should choose it. NN/g's homepage principles say "Your homepage should communicate your unique value proposition clearly," should answer "Why should I choose this site/company over others?", and warn: "Do not assume visitors to your site know your brand." (NN/g, *Homepage Design Principles*, 2024) https://www.nngroup.com/articles/homepage-design-principles/
- **[S]** Concrete examples work better than umbrella terms: "Thoughtfully curated content examples are more effective in communicating your value than broad, umbrella terms." (same source)
- **[S]** Plain language is itself a trust signal: "Clear copy builds trust because it tends to be perceived as honest and transparent." (NN/g, *What B2B Designers Can Learn from B2C About Building Trust*, 2019) https://www.nngroup.com/articles/b2b-trust-from-b2c/
- **[PO/H]** For us, the hero should name the category in words a buyer would search for (e-signature for UAE government and enterprise). It should also state the single biggest differentiator in one line: runs on your own servers, seals that anyone can verify, Arabic and UAE PASS. A slogan such as "Sign with a smile" should not stand in for that line.

### 1.2 Show the real product
- **[S]** Users study images that carry information and ignore decoration: "Photos of products and real people (as opposed to stock photos of models)" get attention, while "big feel-good images that are purely decorative" are "completely ignored"; "on the web, jazzed-up = ignored." (NN/g, *Photos as Web Content*, 2010, last reviewed 2026) https://www.nngroup.com/articles/photos-as-web-content/
- **[S]** "Avoid purely decorative or unhelpful graphics, as users tend to skip over them... Every image should serve a purpose and add value." (NN/g, *Homepage Design Principles*) https://www.nngroup.com/articles/homepage-design-principles/
- **[S]** "Showing the product in action is useful for many users." (NN/g, B2B trust, 2019) https://www.nngroup.com/articles/b2b-trust-from-b2c/

### 1.3 Section order and page length
- **[S]** Attention is concentrated at the top. In NN/g's 2018 eyetracking study (120 participants, 1920×1080), about **57%** of viewing time was above the fold and **74%** was in the first two screenfuls. NN/g's advice: "Reserve the top of the page for high-priority content: key business and user goals." Use consistent headings so readers can scan, and avoid "false floors" that make the page look finished before it is. https://www.nngroup.com/articles/scrolling-and-attention/
- **[S]** People do scroll, so a long page is acceptable if each section earns its place and the most important material comes first. The same article recommends testing page length with representative users. https://www.nngroup.com/articles/scrolling-and-attention/
- **[S]** B2B purchases are "the result of a long, complex decision-making process" involving both **users** (specifications, support) and **choosers** (ROI). Sites should cover every stage, including case studies, comparison tables, integration and compatibility details, compliance, and price ranges. "Not being able to find compatibility and integration details on a website is a major pain point for B2B customers." (NN/g, *B2B vs. B2C Websites*, 2016) https://www.nngroup.com/articles/b2b-vs-b2c/
- **[S]** Information available without registration "must be complete enough for users to judge whether your solution applies to their circumstances," and pricing ranked first of 28 information types. Both findings are from 2006 data. (NN/g, *B2B Usability*) https://www.nngroup.com/articles/b2b-usability/
- **[S]** Buyers want to serve themselves but still want a person at key moments. In a Gartner survey of 645 B2B buyers (August–September 2025), 67% preferred a rep-free experience and 70% preferred a completely digital self-service experience. Sales reps remain the most important source when buyers are researching a business problem, choosing a preferred supplier and securing internal support, and finalising the purchase. Buyers used an average of seven information sources, and 45% used GenAI. (Gartner press release, 20 May 2026) https://gcom.pdo.aws.gartner.com/en/newsroom/press-releases/2026-05-20-gartner-survey-finds-sixty-nine-percent-of-b-two-b-buyers-turn-to-sales-reps-to-validate-ai-generated-insights

### 1.4 A multi-product platform when only one product is available
- **[S]** Strong "information scent" toward a page that does not deliver backfires: "If that place doesn't contain what they want, they're likely to conclude that the site doesn't offer it at all." (NN/g, *Wrong Information Scent Costs Sales*, 2004) https://www.nngroup.com/articles/wrong-information-scent-costs-sales/ Avoid dead ends: "Do not create a dead end for users by taking them to a page with little or no meaningful content." (Digital.gov, in a language-switch context; the principle carries over) https://designsystem.digital.gov/patterns/select-a-language/two-languages/
- **[PO/H]** Lead with Signora as the product you can get today. Present the platform as one compact "what comes next" section with honest status labels ("In development", "Coming"). Do not give the other products equal weight, separate cards that each carry a call to action, or links to thin pages. Frame the platform as a reason to choose Signora: it carries the same identity, audit and residency model into later products, so it lowers the risk of choosing Signora now. This addresses T2.

### 1.5 Proposed section order (hypothesis to test) **[PO/H]**
Built from the sources above. It is not a validated template.
1. **Hero.** The category and differentiator in one line; the primary call to action (request the 30-day trial) and a secondary one (talk to us); a real Signora screen, in Arabic on the Arabic page.
2. **Proof strip.** Facts that need no customer logos: verifiable seal (PAdES-B-LT and RFC 3161), on-prem deployment, UAE PASS, Arabic RTL, and a "download a sealed sample and verify it yourself" link (K2).
3. **How it works.** The 4-step journey (compose, sign, seal, verify) with real screens.
4. **For your security and legal teams.** Where data and keys live, the legal position (advanced, not qualified), the OWASP review, and the "not yet done" list (K1).
5. **Measured performance.** Real numbers with their test conditions, rendered as static text.
6. **Integration.** API, webhooks, embed SDK, SCIM, and migration from AcuteSign.
7. **What the trial includes.** Limits, what is not included, and what happens after 30 days.
8. **The platform roadmap.** Compact, with status labels.
9. **Company.** Named people, address, phone, contacts, and security.txt.
10. **Closing call to action and the form**, or a link to it.

---

## 2. Calls to action: free trial, request a demo, or contact sales

### 2.1 Which call to action
- **[S]** NN/g: "Offer as much information about the product or service as you can upfront, without requiring contact with sales rep." Gating basic information behind a login or contact wall makes the company look as if it has something to hide. "Request a quote" and "contact sales" gates are a weak strategy because they add steps. Free trials should not require a credit card. https://www.nngroup.com/articles/b2b-trust-from-b2c/
- **[S]** Gartner: buyers prefer self-service, but they turn to sellers for "contextual" questions such as whether a product fits their needs (see 1.3). Read together with NN/g, this supports a self-serve primary path with an easy human route next to it. https://gcom.pdo.aws.gartner.com/en/newsroom/press-releases/2026-05-20-gartner-survey-finds-sixty-nine-percent-of-b-two-b-buyers-turn-to-sales-reps-to-validate-ai-generated-insights
- **[V]** In Navattic's annual sample of about 5,000 B2B SaaS sites (2026), "Book a Demo" appeared on 61%, "Try for Free" on 22% and "Interactive Demo" on 18% (sites can have several). Navattic says 66% of the top-performing interactive demos on its platform have no form gate. Navattic sells interactive demos. https://www.navattic.com/report/state-of-the-interactive-product-demo-2026
- **[PO/H]** For us:
  - The **primary** call to action is "Request a 30-day trial". The label should be honest: it is a request, it is on-prem, and someone will get in touch. "Start free trial" would promise instant access that the product does not give.
  - The **secondary** call to action is "Talk to us" or "Book a walkthrough", for buyers who cannot install software themselves. That is likely common in government, where IT and procurement are separate from the business sponsor. This is a hypothesis to check with sales (P4).
  - Add an **ungated self-serve proof**: the sealed sample PDF and verifier report, and an interactive demo if one is built.
  - Use **one colour and one label** for the primary call to action everywhere (V6).

### 2.2 Form length and lead-form practice
- **[S]** Keep forms short: "Every time you cut a field or question from a form, you increase its conversion rate." Use a single column, labels close to fields (above them on mobile), and no placeholder text in place of labels. Keep to one or two optional fields and label them "optional". Errors should be visible and specific, not signalled by colour alone, and the user's input should be kept. (NN/g, *Website Forms Usability: Top 10 Recommendations*, 2016) https://www.nngroup.com/articles/web-form-design/
- **[S]** Explain why you ask: "If you do have to request information from users, provide a reason why you are making the request." Let buyers attach requirements, such as an RFP. (NN/g B2B trust) https://www.nngroup.com/articles/b2b-trust-from-b2c/ Long forms for a basic quote erode credibility. (NN/g, *Trustworthiness*) https://www.nngroup.com/articles/trustworthy-design/
- **[S]** "Know why you're asking every question." Add help text only where research shows users need it. (GOV.UK Service Manual) https://www.gov.uk/service-manual/design/designing-good-questions
- **[S]** Baymard (e-commerce checkout, not B2B lead forms) found the number of form fields "impacts overall usability far more than the number of steps". The 2024 average was 11.3 fields, against 8 that most sites need. This is useful as a principle (fields cost more than steps) but should not be used as a lead-form benchmark. https://baymard.com/blog/checkout-flow-average-form-fields
- **[S]** Accessibility rules that apply to the form:
  - 1.3.5 Identify Input Purpose (AA): use `autocomplete` values. https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html
  - 3.3.7 Redundant Entry (A): do not ask again for something already given. https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/
  - Use `dir="auto"` and `dirname` on free-text fields, because users may type Arabic or English in either page. https://www.w3.org/International/questions/qa-html-dir
- **[PO/H]** Suggested trial form, to validate with sales:
  - **Required:** name, work e-mail, organisation, country, role.
  - **Optional (one or two):** expected number of users, and "anything we should know" with an attachment.
  - Collect deployment details (hosting, TSA, e-mail server) **after** the request, during onboarding, not on the landing page.
  - State what happens next and how soon: who will contact the buyer, and what they will receive (package, licence, install guide).

---

## 3. Trust and credibility for enterprise and security-sensitive buyers

### 3.1 What research says builds credibility
- **[S]** NN/g names four credibility factors: **design quality** ("Typos, broken links, and other mistakes quickly degrade credibility"); **upfront disclosure** (contact details, costs, no gating); **comprehensive, correct and current content**, including photos of "the people who will do the work"; and **connection to the rest of the web**, meaning independent presence on third-party sites, press and social media. On-site testimonials are treated with scepticism. https://www.nngroup.com/articles/trustworthy-design/
- **[S]** The Stanford Web Credibility Guidelines (2002, still widely cited):
  1. "Make it easy to verify the accuracy of the information on your site."
  2. "Show that there's a real organization behind your site."
  3. Highlight expertise.
  4. "Show that honest and trustworthy people stand behind your site."
  5. "Make it easy to contact you."
  6. Look professional.
  7. Be useful.
  8. Show the content was reviewed recently.
  9. "Use restraint with any promotional content."
  10. "Avoid errors of all types, no matter how small they seem."

  https://credibility.stanford.edu/guidelines/index.html
- **[S]** "Seeing a physical location and humans behind the product or service bolsters their trust." At a minimum, give an e-mail address and a phone number. https://www.nngroup.com/articles/b2b-trust-from-b2c/
- **[S]** Real staff photos get attention; generic stock people are ignored. https://www.nngroup.com/articles/photos-as-web-content/
- **[S]** NN/g's B2B findings: compliance details (for example ISO certification) and integration and compatibility information matter to B2B buyers, and buyers need a price range early so they can start budget approval. https://www.nngroup.com/articles/b2b-vs-b2c/ If the price varies, "offer common pricing scenarios." https://www.nngroup.com/articles/b2b-trust-from-b2c/

### 3.2 Showing security, compliance and transparency
- **[S]** Publish a machine-readable vulnerability contact at `/.well-known/security.txt`. **Contact** and **Expires** are required, and Expires should be less than a year ahead. (RFC 9116, April 2022, Informational) https://www.rfc-editor.org/rfc/rfc9116
- **[S]** CISA's Secure by Design Pledge treats a public vulnerability disclosure policy, which authorises good-faith testing and promises no legal action against researchers, as a sign of a mature vendor. Prompt CVEs, MFA, logs for evidence of intrusions, and no default passwords are its other goals. The pledge is voluntary and US-centric, but it gives a useful checklist of what to publish. https://www.cisa.gov/securebydesign/pledge
- **[S]** UAE context buyers will look for:
  - Federal Decree-Law 46/2021 on electronic transactions and trust services (e-signatures).
  - Federal Decree-Law 45/2021, the PDPL, which controls cross-border transfer of personal data.
  - DIFC Data Protection Law 5/2020, for buyers in the DIFC.

  All are listed by the UAE government at https://u.ae/about-the-uae/digital-uae/data/data-protection-laws.
- **[PO/H]**
  - State the legal level ("advanced, not qualified") next to the claim it limits, not in small print. The legal wording must be checked by counsel.
  - Show **where data and keys live** as a simple diagram: your servers, your KMS (Azure Key Vault or AWS KMS), your TSA.
  - Keep the "not yet done" list (pen test, ISO 27001) on the main page in short form. For a security reviewer, a dated, specific list is more credible than silence, and it matches K1.

### 3.3 When there are no customer logos yet
- **[S]** Social proof backfires when numbers look small: "The most significant risk with using social proof is the perception that too few people approve." (NN/g, 2014) https://www.nngroup.com/articles/social-proof-ux/ Do not show thin counts or invented proof.
- **[S]** Stanford guideline 1 ("easy to verify") and NN/g's "connected to the rest of the web" suggest replacing social proof with proof the buyer can **check independently**. https://credibility.stanford.edu/guidelines/index.html · https://www.nngroup.com/articles/trustworthy-design/
- **[PO/H]** Substitutes, in rough order of strength for a security-sensitive GCC buyer:
  1. A sealed sample PDF the buyer can open in Adobe Reader or any PAdES validator, plus the verifier report (K2). This is "verify it yourself" proof that needs no customer.
  2. Published, conditioned benchmarks with their test conditions (K1).
  3. A named team with photos, roles and LinkedIn profiles, a UAE trade-licence number, and a physical address and phone number.
  4. Standards met, with links to the standards: PAdES (ETSI), RFC 3161, OWASP ASVS 5.0.0, Standard Webhooks.
  5. Integrations with known national infrastructure (UAE PASS), stated precisely ("tested against a stand-in; live connection at go-live").
  6. A migration path from AcuteSign. Naming an incumbent signals that the team understands the market.
  7. Once trial customers agree, attributed quotes with name, job title and organisation (NN/g: testimonials from relevant job titles and industries help). https://www.nngroup.com/articles/b2b-trust-from-b2c/

---

## 4. Bilingual and right-to-left design

### 4.1 Direction and markup
- **[S]** Set `dir="rtl"` (with `lang="ar"`) on `<html>`. "Never use CSS to apply the base direction." Use CSS logical properties (`start`/`end`) instead of `left`/`right`, and `dir="auto"` for user-entered or run-time text. https://www.w3.org/International/questions/qa-html-dir
- **[S]** In Arabic text, "tightly wrap every opposite-direction phrase in markup that sets its base direction". Wrap Latin product names and codes in `span dir="ltr"`, and use `bdi` for inserted values. Examples here are "PAdES-B-LT", "RFC 3161", "UAE PASS" and `POST /api/v1/envelopes`. https://www.w3.org/International/articles/inline-bidi-markup/
- **[S]** Both language versions must be equally accessible. Each page needs a correct `lang`, phrases in the other language need their own `lang`, and the Arabic version should be tested with an Arabic screen reader. (UAE Design System) https://designsystem.gov.ae/guidelines/accessibility

### 4.2 Mirroring: what to flip and what not to flip
- **[S]** **Mirror:**
  - the layout;
  - navigation and back/next arrows;
  - controls that show progress or a fixed order ("Flip controls that show progress from one value to another");
  - icons that represent text or reading direction;
  - the order of images when the order means something.

  **Do not mirror:**
  - logos, "universal signs and marks" (for example the checkmark), and real-world objects (clocks);
  - photographs and illustrations. Make a localised version instead.

  (Apple HIG, *Right to left*) https://developer.apple.com/design/human-interface-guidelines/right-to-left
- **[S]** Material (v1): "An RTL layout is the mirror image of an LTR layout." Do not mirror media playback controls, clocks ("Clocks still turn clockwise for RTL languages"), or physical objects. "Any LTR words, such as a URL, will continue to be shown in an LTR format." Time and progress flow right to left in RTL. https://m1.material.io/usability/bidirectionality.html
- **[PO/H]**
  - The 4-step journey (compose, sign, seal, verify) must run right to left on the Arabic page, with its connectors mirrored.
  - A QR code, the seal or certificate graphic, and code samples must not be mirrored.
  - Product screenshots on the Arabic page should be **real Arabic-UI captures**, not flipped English images (following Apple's advice not to flip images).

### 4.3 Numerals
- **[S]** Numbers are written left to right even in Arabic. Eastern Arabic-speaking countries (examples given: Egypt, Saudi Arabia, Iraq) traditionally use Arabic-Indic digits (٠–٩); Western Arabic-speaking countries use European digits. (W3C *Arabic & Persian Layout Requirements*, §3.1 and §6.1.2) https://www.w3.org/TR/alreq/
- **[S]** "Don't reverse the order of numerals in a specific number"; "never flip the numerals themselves." Arabic may use either Western or Eastern Arabic numerals depending on region. https://developer.apple.com/design/human-interface-guidelines/right-to-left
- **[S]** Observation, not a guideline: the UAE government portal's Arabic home page uses Western digits on 2026-11-24, for example "20 نوفمبر 2026", "أكثر من 1,600 خدمة حكومية" and "الشرطة: 999". https://u.ae/ar The UAE Design System typography page does not specify a numeral form. https://designsystem.gov.ae/guidelines/typography
- **[PO/H]**
  - Use Western digits on the Arabic page to match u.ae.
  - Keep one form across the whole page.
  - Check with target buyers. Diwan's "Arabic numerals" configuration pack suggests that some customers do want Arabic-Indic digits in documents, which is a separate question from the marketing page.

### 4.4 Arabic typography
- **[S]** UAE Design System:
  - Arabic body text in Noto Kufi Arabic, headings in Alexandria.
  - Minimum body size of 16px.
  - Line-height of at least 1.5 for paragraphs.
  - Right-aligned Arabic content.
  - "do not add letter spacing to body text, especially in Arabic, where letters connect."

  https://designsystem.gov.ae/guidelines/typography
- **[S]** "Arabic ascenders and descenders extend much further than those of the Latin script," so mixed lines need extra line height (§7.4). Moving joined letters apart "creates undesirable results" (§4.3.7.1). https://www.w3.org/TR/alreq/
- **[S]** Arabic can look small beside Latin text; raising the RTL font size by about 2 points often balances it. Align a paragraph by its own language, not by the surrounding context. https://developer.apple.com/design/human-interface-guidelines/right-to-left
- **[PO/H]**
  - Do not use all-caps "eyebrow" labels or tracking styles that have no Arabic equivalent; they also feed the template look (V4).
  - Avoid italic for Arabic emphasis.
  - Pick Arabic and Latin typefaces as a designed pair; do not let the Arabic fall back to a system font.

### 4.5 Language switcher
- **[S]**
  - Label each language in its own language and mark it with `lang`.
  - Do not use flags ("Flags do not map to languages; Arabic, for example, is spoken in many countries").
  - Put it in the upper corner of the header: top-right for LTR pages, top-left for RTL pages.
  - Link to the **equivalent page**.
  - Do not redirect automatically based on location or browser.

  (Digital.gov) https://designsystem.digital.gov/patterns/select-a-language/two-languages/
- **[S]** Use the native name, keep the switcher in one consistent location, and "Make sure the user does not lose any data they've entered" when switching. (GOV.UK Design System, *Language navigation*, in trial) https://design-system.service.gov.uk/components/language-navigation/
- **[S]** Automatic content negotiation is not a replacement for links on the page. Native-language option names help users recognise their language. https://www.w3.org/International/questions/qa-navigation-select
- **[PO/H]**
  - With exactly two languages, a single text link ("العربية" on the English page, "English" on the Arabic page) is clearer than a dropdown or a globe.
  - Keep it visible on mobile, not only inside the menu.
  - Preserve the trial-form state and the scroll position when switching.

---

## 5. Accessibility

### 5.1 UAE requirements
- **[S]** The **National Policy for Digital Accessibility** (TDRA, March 2024) requires public service websites to meet **WCAG 2.1 AA as a minimum**.
  - **Scope:** federal ministries, authorities and semi-government entities, plus "contractors and service providers that build or run their digital services".
  - **Third-party components:** vendor components used on government services must meet WCAG 2.2 AA and "must not be used for public services until it conforms".
  - **Other duties:** an accessibility statement linked from every page footer (Article 12), and reduced-motion support in the statement checklist.
  - **Private sector:** encouraged, not mandated.

  (UAE Design System, *Accessibility*) https://designsystem.gov.ae/guidelines/accessibility
- **[PO/H]**
  - The marketing site is probably not covered by the mandate. The **signing page that government signers use** almost certainly would be, if a federal entity deploys it.
  - A WCAG 2.2 AA marketing site with a published accessibility statement is therefore also a sales argument.
  - Mention the signing page's accessibility on the landing page only if it has been tested.

### 5.2 WCAG 2.2 AA criteria most relevant to this page
WCAG 2.2 is a W3C Recommendation (version of 12 December 2024). Normative text: https://www.w3.org/TR/WCAG22/ What is new: https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/

| Criterion | Level | What it means here | Source |
|---|---|---|---|
| 1.4.3 Contrast (Minimum) | AA | 4.5:1 for text, 3:1 for large text. Check grey subtitles on navy and text over gradients or orbs (V1). | https://www.w3.org/TR/WCAG22/ · https://designsystem.gov.ae/guidelines/accessibility |
| 1.4.11 Non-text Contrast | AA | 3:1 for icons, input borders and focus rings, including the two call-to-action colours (V6) in both themes. | same |
| 1.4.10 Reflow | AA | No two-dimensional scrolling at 320 CSS px (the same as 1280px at 400% zoom). The 390px overflow (V9) would fail. | https://www.w3.org/WAI/WCAG22/Understanding/reflow.html |
| 1.4.2 Audio Control | A | Audio that plays automatically for more than 3 seconds needs a control. Relevant if the Nora voice demo autoplays. | https://www.w3.org/TR/WCAG22/ |
| 2.2.2 Pause, Stop, Hide | A | Motion that starts automatically, lasts more than 5 s and runs alongside other content needs a pause control. Auto-updating content has no 5 s exception. Covers orbit animations, looping mocks and carousels. | https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html |
| 2.3.3 Animation from Interactions | AAA | Not required at AA, but scroll-triggered motion and parallax can trigger vestibular symptoms. The technique is `prefers-reduced-motion`. The UAE statement checklist asks about reduced motion. | https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html |
| 2.4.7 Focus Visible | AA | A visible focus indicator on every interactive element, in both themes. | https://www.w3.org/TR/WCAG22/ |
| 2.4.11 Focus Not Obscured (Minimum) | AA (new) | A sticky header, cookie bar, sticky call to action or the "Ask us" widget must not completely hide the focused element. Use `scroll-padding` (technique C43). | https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html |
| 2.5.8 Target Size (Minimum) | AA (new) | Targets of at least 24×24 CSS px, or enough spacing. Check carousel dots, the theme toggle and the language link. | https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html |
| 2.5.7 Dragging Movements | AA (new) | Any drag interaction in an interactive demo (for example placing a field) needs a single-pointer alternative. | https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/ |
| 2.1.1 Keyboard / 2.4.1 Bypass Blocks | A | Demo, tabs and "Ask us" operable by keyboard; a skip link. | https://www.w3.org/TR/WCAG22/ |
| 3.1.1 / 3.1.2 Language of Page / Parts | A / AA | `lang` on `<html>` and on other-language phrases, including the language switcher label. | https://designsystem.gov.ae/guidelines/accessibility |
| 1.3.5, 3.3.7 | AA, A | Form autocomplete; no repeated entry. See 2.2. | see 2.2 |

### 5.3 Reduced motion
- **[S]** Wrap animation in `@media (prefers-reduced-motion: no-preference)` so it runs only for users who have not opted out. Use `matchMedia` with a change listener for JavaScript animation, and give animated images a static fallback. Vestibular reactions include "dizziness, nausea, and migraine headaches." web.dev gives no prevalence figure. https://web.dev/articles/prefers-reduced-motion

---

## 6. Performance and technical UX

### 6.1 Core Web Vitals
- **[S]** A page is "good" when it meets all three thresholds at the **75th percentile**, measured separately for mobile and desktop:
  - **LCP** 2.5 s or less;
  - **INP** 200 ms or less;
  - **CLS** 0.1 or less.

  https://web.dev/articles/vitals
- **[S]** For LCP:
  - make the hero image discoverable in the initial HTML;
  - add `fetchpriority="high"` to one or two images at most;
  - "Never lazy-load your LCP image";
  - avoid client-side rendering of the LCP element.

  https://web.dev/articles/optimize-lcp
- **[S]** Fonts:
  - use WOFF2;
  - subset, with `unicode-range`;
  - choose `font-display` deliberately (`optional` for performance-first, `swap` when text must show fast);
  - use `size-adjust` to stop the fallback font shifting the layout;
  - replace icon fonts with SVG.

  Late fonts can delay LCP and cause CLS. https://web.dev/articles/font-best-practices
- **[PO/H]** Arabic web fonts are large, and the page will load two script families. Subset each language's font per locale, and test CLS on the Arabic page specifically.

### 6.2 Content must work without JavaScript (the "0 field kinds" problem, V8)
- **[S]** Build "HTML first", then CSS, then JavaScript. JavaScript can fail because of network errors, ad blockers, CDN or DNS failures, corporate firewalls and antivirus software. Core content must work with HTML alone, and a failure should break only one component. (GOV.UK Service Manual) https://www.gov.uk/service-manual/technology/using-progressive-enhancement
- **[S]** Google renders JavaScript in a separate, later queue and still says "Server-side or pre-rendering is still a great idea" because "not all bots can run JavaScript." https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics
- **[S]** Link previews read `<meta>` tags in the page `<head>` (Open Graph `og:title`, `og:type`, `og:image`, `og:url`). Anything that needs JavaScript will not show in them. https://ogp.me/
- **[S]** Exact figures are more credible ("Disclosing the exact number also increases the statement's credibility"), and numerals catch the eye when people scan. (NN/g, 2007) https://www.nngroup.com/articles/web-writing-show-numbers-as-numerals/
- **[PO/H]**
  - Render the **final value** of every statistic in the static HTML.
  - If a count-up effect is kept at all, run it only under `prefers-reduced-motion: no-preference`, and keep it under 5 s so it stays outside 2.2.2.
  - Simpler still, drop the count-up, because it adds motion without information.

### 6.3 Mobile layout
- **[S]** WCAG 1.4.10 Reflow: no horizontal scrolling at 320 CSS px. https://www.w3.org/WAI/WCAG22/Understanding/reflow.html
- **[S]** The UAE Design System's minimum body size of 16px and line-height of 1.5 apply. https://designsystem.gov.ae/guidelines/typography
- **[S]** NN/g suggests touch targets of about 1 cm × 1 cm and text of about 16pt in persistent headers. https://www.nngroup.com/articles/sticky-headers/
- **[PO/H]**
  - Test the real page on devices at 320, 360, 390 and 414px, in both Arabic and English.
  - Wide mock windows, code samples and the comparison table are the usual overflow causes. Let the table scroll inside its own container, which Reflow allows for data tables, rather than the whole page.

---

## 7. Interaction patterns

### 7.1 Auto-playing carousels and demos
- **[S]** "Accordions and carousels should **show a new panel only when users ask for it**." Auto-rotation makes content look like an ad, hurts users with motor impairments, low-literacy readers and non-native speakers, and takes control away from the user. (NN/g, *Auto-Forwarding Carousels and Accordions Annoy Users and Reduce Visibility*) https://www.nngroup.com/articles/auto-forwarding/
- **[S]** NN/g's carousel guidance (2013, last reviewed 2026):
  - consider a static hero instead;
  - duplicate important content elsewhere;
  - use 5 frames or fewer;
  - keep controls inside the carousel;
  - show the position;
  - do not rely on dots, especially on mobile;
  - do not auto-forward on mobile.

  https://www.nngroup.com/articles/designing-effective-carousels/
- **[S]** Video: "Users don't appreciate being surprised by video or audio content that begins playing without their consent." Give start, stop, restart and mute controls. Show the length, keep the video short, "start strong", and provide captions and a full transcript. (NN/g, 2014) https://www.nngroup.com/articles/video-usability/
- **[S]** WCAG 2.2.2 and 1.4.2 apply to any auto-starting motion or audio (see 5.2).
- **[PO/H]** Replace the auto-cycling "journeys" with a user-driven step control: four labelled tabs, or a scroll-linked sequence that is static under reduced motion. If a product video is used, start it by click, show its duration, and caption it in both languages.

### 7.2 Interactive product tours and demos
- **[S]** NN/g says showing the product in action is useful, and advises against gating information. https://www.nngroup.com/articles/b2b-trust-from-b2c/
- **[V]** Navattic reports that most of its top-performing demos are ungated, and that ungated demos had higher engagement and completion but slightly lower click-through than gated ones. This is vendor data from its own customers. https://www.navattic.com/report/state-of-the-interactive-product-demo-2026
- **[PO/H]**
  - A short, ungated, click-through demo of the **signer's** experience is the strongest "show the real product" asset available without customers. The steps are: consent, sign with a code, the sealed PDF, and the verification page.
  - Build it in both Arabic and English, operable by keyboard (2.1.1), with no drag-only steps (2.5.7). It must not trap focus.
  - A sender-side tour is secondary.

### 7.3 Sticky calls to action
- **[S]** Persistent headers help when they are "unobtrusive, high-contrast, minimally animated, and fit user needs."
  - Keep them small, with an opaque background.
  - A partially persistent header, which reappears when the user scrolls up, suits mobile; a 300–400 ms slide is acceptable.
  - Avoid "stalker" menus that move into place after a delay.

  (NN/g, 2021) https://www.nngroup.com/articles/sticky-headers/
- **[S]** Sticky elements must not fully hide the focused element (WCAG 2.4.11; use `scroll-padding`). https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html
- **[PO/H]** No authoritative research on sticky calls to action for B2B landing pages was found. Baymard has no located finding on it. E-commerce vendor A/B tests seen in search results report mixed outcomes; they were not fetched, are not cited, and would not transfer to B2B lead generation anyway.
- **[PO/H]**
  - Use a slim header that carries the single primary call to action. On mobile, make it partially persistent.
  - Do not add a second floating call-to-action bar on top of the "Ask us" widget, because the two compete with each other and with focus visibility.

---

## Gaps and items to validate
1. **Government procurement behaviour in the GCC.** No authoritative public source was found on whether UAE and GCC government buyers prefer a trial, a demo or a tender response. Validate with sales and trial requesters (P4).
2. **Numeral preference** among target buyers on the Arabic page (4.3).
3. **Whether the TDRA policy applies to the signing page** when a federal entity deploys Signora on-prem. Confirm against the policy text (u.ae PDF) or with TDRA.
4. **Trial-form fields.** Confirm with sales which fields are actually used to qualify a request.
5. Gartner's 2025 and March 2026 releases could not be fetched (403). Only the May 2026 release is cited.

---

## Implications for our page

| Finding | Source(s) | Current problem | Implication for the redesign |
|---|---|---|---|
| Decorative imagery is ignored; real product and real people are studied | NN/g photos; NN/g homepage principles | **V1** generic dot grid, orbs and haze; **V5** no people or place | Replace the atmospheric hero with a real Signora screen. Add real team photos and a UAE location. Drop the orbs, or keep them as background that does not move. |
| Show the product in action, with concrete examples rather than umbrella terms | NN/g B2B trust; NN/g homepage principles | **V2** skeleton mocks; **V3** "Illustration composed…" caption | Use real screenshots captured in each language (Arabic UI on the Arabic page). Without placeholders, the disclaimer is not needed. Consider an ungated signer demo (7.2). |
| Consistent scanning structure, but every section earning its place; avoid false floors | NN/g scrolling; NN/g homepage | **V4** identical eyebrow, heading, subtitle and card grid in every section | Vary each section's form to suit its content: a step sequence, a diagram, a data table, a document preview. Keep headings consistent, but not the template. |
| A single primary call to action; honest labels | NN/g B2B trust; Gartner 2026 | **V6** two call-to-action colours | One colour and one label ("Request a 30-day trial") everywhere, plus a quieter "Talk to us". |
| Avoid repetition; curate | NN/g homepage | **V7** envelope mock ×3; repeated platform line | Each screenshot and message appears once. The merged page removes the cross-page duplication. |
| Core content in HTML; not all bots run JavaScript; link previews read static HTML; exact numbers are credible | GOV.UK progressive enhancement; Google JS SEO; OGP; NN/g numerals | **V8** counters show "0" | Render final values in HTML. Remove the count-up or make it optional and short under reduced motion. Keep the test conditions next to each number (K1). |
| Reflow at 320px; 16px minimum; real-device testing | WCAG 1.4.10; UAE DS typography | **V9** overflow at 390px | Fix the overflow causes (wide mocks, tables, code). Test Arabic and English at 320–414px. |
| Clear copy builds trust; specific, plain value proposition | NN/g B2B trust; NN/g homepage | **C1** spec-like semicolon chains; **C3** formulaic headings | Rewrite in short sentences for two readers: the business chooser and the IT or security user. Use headings that state a fact or benefit, not a slogan. Write the Arabic as original copy, not a back-translation. |
| "Avoid errors of all types"; typos and mistakes degrade credibility | Stanford #10; NN/g trustworthiness | **C2** internal notes visible ("Spec 21", "Draft for the owner", "B34") | Remove every internal note before launch. Add a content checklist and a pre-publish search for such tokens. |
| Real organisation, real people, easy contact, physical location; small numbers backfire; verifiable proof | Stanford #2, #4, #5, #1; NN/g B2B trust; NN/g social proof | **T1** no logos, no team, no address or phone; company page is a placeholder | Add named people, address, phone, trade-licence number and security.txt. Lead with proof the buyer can verify (sealed sample, standards, benchmarks) instead of empty logo strips. Add attributed quotes only once real. |
| Strong scent toward missing content makes users think the site lacks it; avoid dead ends | NN/g information scent; Digital.gov | **T2** three products visitors cannot get | Signora leads. Show the other products in one compact roadmap section with status labels and no prominent links to thin pages. Supports **P1** (Signora leads). |
| Upfront disclosure; show price ranges or scenarios | NN/g trustworthiness; NN/g B2B vs B2C | Pricing marked "proposed, for the owner's review" (C2) | Once pricing is approved, show a price level or scenarios ("from AED … per user per month"). Until then, say what the trial costs (nothing) and what happens after it. |
| Short forms, explain why, single column, autocomplete, `dir=auto` | NN/g forms; NN/g B2B trust; GOV.UK; WCAG 1.3.5; W3C i18n | Trial form (not yet audited) | Five required fields, one or two optional, and a "what happens next" message. Collect deployment details later. |
| Transparency is credible: VDP, security.txt, honest limits | RFC 9116; CISA pledge; Stanford #1 | **K1** keep honest transparency | Keep the "not yet done" list and the measured numbers on the main page, in short form with links to the detail. Publish security.txt and a disclosure policy. |
| Verifiable artefacts beat claims | Stanford #1 | **K2** real sealed sample | Make "Download a sealed PDF and verify it yourself" a visible, ungated action near the top. |
| Arabic must be equal in quality and accessibility; correct `dir`/`lang`; native-name switcher; no flags; equivalent-page links; preserve form data; Arabic typography rules; numerals left to right | UAE DS accessibility and typography; W3C i18n; Apple HIG; Material; Digital.gov; GOV.UK | **K3** Arabic and RTL already exist (keep) | Audit the Arabic page against section 4: mirroring of the journey, bidi isolation of Latin terms, Western digits (validate), no letter-spacing, 1.5 line-height, Arabic screenshots, and an "العربية"/"English" text switcher in the top corner. |
| No auto-rotation; motion under user control; pause for motion over 5 s; respect reduced motion | NN/g auto-forwarding; NN/g carousels; WCAG 2.2.2; web.dev | Interactive "journeys" on the home page; animated orbit motifs (V1) | Make the journeys user-driven. Make all decorative motion conditional on `prefers-reduced-motion: no-preference` and short, or remove it. |
| Sticky elements small and opaque, not obscuring focus | NN/g sticky headers; WCAG 2.4.11 | "Ask us" widget plus nav call to action | Use a slim header with one call to action and `scroll-padding`. Do not stack a floating call-to-action bar with the "Ask us" widget. Test keyboard focus behind both. |
| UAE public-service sites need WCAG 2.1 AA minimum; government vendors' components need 2.2 AA; accessibility statement in footer | UAE DS accessibility (TDRA policy, March 2024) | No accessibility statement noted | Target WCAG 2.2 AA, publish an accessibility statement in the footer, and state the signing page's tested level once it has been tested. This is a selling point for government buyers. |
| Core Web Vitals: LCP ≤2.5 s, INP ≤200 ms, CLS ≤0.1 at p75; hero in the HTML; subset fonts | web.dev | Unknown: no analytics (A3) | Measure lab LCP, CLS and INP on both locales before and after. Subset the Arabic and Latin fonts. Do not lazy-load the hero screenshot. |
