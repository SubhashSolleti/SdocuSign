# 02 — Target audience and market context (desk research)

Project: Smart Orbit / Signora landing-page redesign (see [../SITE_CONTEXT.md](../SITE_CONTEXT.md) and [../DECISION_LOG.md](../DECISION_LOG.md))
Date: 2026-11-24
Method: desk research only. We have no customer access (decision log P4), so nothing here comes from interviews, analytics or sales notes.

## How to read this report

| Label | Meaning |
|---|---|
| **Verified** | Stated in a source I fetched and read during this research. The URL is given inline and in the [sources list](#sources). |
| **Verified (secondary)** | The primary source blocked automated access (HTTP 403). The figure comes from a news or trade article I fetched that reports it. |
| **Hypothesis** | My inference or an assumption. It is plausible but no fetched source supports it, so it must be validated. |
| **Unverified** | Seen only in a search-result snippet. I could not open the page, so the figure is **not** used as evidence. |

**Access limits.** These sites returned HTTP 403 to automated fetching: G2, Capterra, TrustRadius product-review pages, GetApp, Software Advice, Gartner Peer Insights, Gartner.com research and newsroom pages, uaelegislation.gov.ae (the official PDF of Decree-Law 46/2021), Adobe's legal help pages, and the Tamimi & Co. articles. As a result:
- The review evidence comes from **PeerSpot**, **Trustpilot**, the **Apple App Store** and vendor **community forums**, not G2 or Capterra. Part 3 says so wherever it applies.
- The text of Decree-Law 46/2021 was read from the English text republished on legaladviceme.com, not from the official portal. The Arabic text prevails, so counsel should confirm the article wording.
- The TrustRadius buyer reports were downloaded as PDFs and read in full.

**Sample caveat (applies to all buyer-behaviour statistics).** The Gartner, Forrester and TrustRadius surveys are global and mostly North American and European. None of them breaks out GCC government buyers. Treat their numbers as directional for our audience, not as measurements of it.

---

## Executive summary

1. **Buying is done by a committee, with little vendor contact and a preference for trying first.** Forrester's 2026 study reports 13 internal stakeholders plus 9 external influencers per purchase, with procurement a decision-maker in 53% of buying cycles. When a purchase includes generative AI features, the buying group doubles in size, and Signora has AI features. Gartner (via secondary coverage) reports that 67% of B2B buyers prefer a rep-free experience. TrustRadius finds that demos, trials and prior experience are the most influential resources, and that enterprise buyers mostly wish for transparent pricing and easier ROI. **Verified.**
2. **Legal positioning has to be precise.** Under UAE Decree-Law 46/2021, only a **Qualified** e-signature is "deemed equally authentic to a handwritten signature" (Art. 18(3)). An **Advanced** signature "shall be relied upon and have legal effect" if its conditions are met (Art. 18(7), Art. 19). A **government entity may specify the form of e-signature and the security level it requires** (Art. 28(7)(c)). Signora's "advanced, not qualified" status is therefore a real objection for some government use cases, and the page has to answer it plainly. **Verified.**
3. **UAE PASS is ubiquitous, and it signs documents too.** It has 11M+ users and more than 5,000 public and private services (UAE Cabinet via Biometric Update, June 2025), and more than 12M registered users per a 2026 WEF-recognition release. UAE PASS also has its own document-signing feature (PDF, PAdES). The page must make clear that Signora uses UAE PASS for **identity at signing** and does not produce a UAE PASS digital signature. **Verified** (the facts). **Hypothesis** (that buyers will confuse the two).
4. **Data residency is a real differentiator against global vendors.** DocuSign lists its agreement-data regions as the U.S., Canada, Europe, Australia and Japan, with no GCC region. Dubai's DESC rules keep Dubai government data in the UAE. The UAE National Cloud Security Policy is mandatory for government and critical-infrastructure entities and requires them to know where their data is at all stages. **Verified.**
5. **Arabic must be built in, not added later.** TDRA's design guidance tells developers on UAE government projects that every page and service must work in Arabic and English, with mirrored RTL layout, and the UAE Design System follows WCAG 2.2. Public forum threads show Arabic and RTL field problems in Adobe Acrobat Sign, and Dropbox Sign states that Hebrew has "no right-to-left option". **Verified.**
6. **Review data on incumbents** (PeerSpot, Trustpilot) points to licensing and price complexity, slow support, template and field glitches, and weak integrations. It contains almost no GCC-specific feedback, so the regional pain points remain **hypotheses**.

---

## 1. The B2B buying committee

### 1.1 What the buyer-behaviour research says (Verified)

| Finding | Source |
|---|---|
| Typical decisions involve **13 internal stakeholders and nine external influencers**. **Procurement** is a decision-maker in **53%** of buying cycles. **More than 60%** of buyers use a trial before evaluating, rising to **78%** for purchases of $10M or more. | Forrester press release, *State of Business Buying 2026*, 21 Jan 2026 — https://www.forrester.com/press-newsroom/forrester-2026-the-state-of-business-buying/ |
| When a purchase includes **generative-AI features**, "the buying group doubles in size" compared with purchases without them. **36%** of buyers plan to convert to a paid version from the same provider after a trial. **28%** of procurement respondents felt less confident in a decision because of inaccurate AI output. | Digital Commerce 360 on Forrester 2026, 22 Jan 2026 — https://www.digitalcommerce360.com/2026/01/22/forrester-b2b-buying-ai-2026/ |
| On average **13 people** are involved, and most purchases span **two or more departments**. **81%** of buyers are dissatisfied with the provider they chose at the end of a "successful" purchase. Survey of more than 16,000 buyers. | Forrester blog, *State of Business Buying 2024* — https://www.forrester.com/blogs/state-of-business-buying-2024/ |
| **67%** of B2B buyers prefer a rep-free experience. **45%** used AI tools during a recent purchase. Survey of 646 buyers, Aug–Sep 2025. | **Verified (secondary)**: Gartner, March 2026, via Digital Commerce 360 — https://www.digitalcommerce360.com/2026/03/17/gartner-b2b-buyers-rep-free-purchasing-ai-reshapes-sales/ |
| **61%** of buyers would rather avoid sales reps altogether (Gartner, 2025). Buyers complete an average of **2.3 key activities** with supplier reps. | **Verified (secondary)**: MarTech, 11 Jul 2025 — https://martech.org/b2b-buyers-want-less-sales-contact/ |
| **78%** of shortlisting buyers chose products they had heard of before starting research, and **86%** of enterprise buyers did. Demos were the most-used resource (**54%**, **67%** for enterprise), and **71%** of demo users called demos the most influential resource. **40%** used free trials, and **74%** of them rated trials most influential. **56%** spoke to a product user before buying (**71%** for enterprise purchases). | TrustRadius *2024 B2B Buying Disconnect* (PDF, pp. 3, 14, 15, 17), 2,164 buyers — https://go.trustradius.com/rs/827-FOI-687/images/TrustRadius-2024-B2B-Buying-Disconnect-Report.pdf |
| What enterprise buyers wish was different: **51%** transparent pricing; **47%** easier ROI calculation "so I could get the budget approved"; **44%** "stop contacting me when I'm not ready"; **42%** talking to people like them; **36%** being told "about the criteria or requirements I don't know about but should". Only **19%** of enterprise buyers found approval easy, and **31%** found it difficult. | Same PDF, pp. 20–21 |
| **96%** of buying groups have five or fewer members, and **53%** include at least one C-suite member. Shortlists hold two to three products. | TrustRadius/Pavilion press release, 10 Jun 2024 — https://prnewswire.com/news-releases/trustradius-and-pavilion-reveal-2024-b2b-buying-trendsb2b-brands-are-in-crisis-mode-302166605.html |
| **66%** of buyers said a VP or C-level executive was involved. Use of analyst reports is at an all-time low of **14%**. **77%** read user reviews, and "nearly half" looked for review content on the **vendor's website**. Only **23%** spoke to a vendor-supplied reference. The top wish is **more transparent pricing**. **90%** click through to sources cited in Google AI Overviews. Average buying group: **4.8 people**. | TrustRadius *Bridging the Trust Gap: B2B Tech Buying in the Age of AI* (PDF, 2025; 2,058 buyers) — https://go.trustradius.com/rs/827-FOI-687/images/TrustRadius-Bridging-the-Trust-Gap-B2B-Tech-Buying-in-the-Age-of-AI.pdf |

**Reconciling group size.** TrustRadius reports about 5 people and Forrester 13 plus 9 external. The two count different things: TrustRadius counts the core buying group, while Forrester counts everyone who influences the decision. For a GCC government purchase that passes through IT security, legal, procurement and a tender committee, the larger figure is the safer planning assumption. **Hypothesis.**

**Unverified, not used:** Gartner's "6–10 stakeholders" figure. It appears only in search snippets of gartner.com pages that returned 403.

### 1.2 Roles, what each needs to see, and their concerns

Columns: role; what they need from a vendor website; their main concerns; evidence status.

| Role | Needs to see on the website | Main concerns | Status |
|---|---|---|---|
| **IT / security evaluator** (CISO office, infrastructure, enterprise architect) | Deployment model (on-prem now; UAE DC later), architecture diagram, where data and keys live, the key-management options (own CA, Azure Key Vault, AWS KMS), SSO/SCIM, API and webhooks, security review status *including what is not done* (no pen test, no ISO 27001 yet), install guide, sizing and measured performance | Data leaving the country; vendor lock-in; whether a small vendor can pass a security assessment; supply-chain risk ("zero third-party services" is a claim they will test) | Residency and cloud-policy pressure: **Verified** (§2.3). Specific website needs: **Hypothesis**, consistent with TrustRadius's finding that buyers want self-serve detail and "criteria I don't know about" (**Verified**). |
| **Legal / compliance officer** (legal affairs, governance, records) | The signature level in plain words (advanced, not qualified) and **what that means under Decree-Law 46/2021**, where it is enough and where it is not, a sample sealed PDF plus verification report, the audit-trail and evidence model, retention periods, the consent step | Signature-level adequacy for the use case; an entity's right to specify signature levels (Art. 28(7)); evidential weight in disputes; documents that still need wet ink or notarisation; AI features reading confidential documents | Law: **Verified** (§2.1). Specific website needs: **Hypothesis**. |
| **Procurement** (government tenders, vendor registration) | Company legal identity and address, licensing model and indicative pricing, support and SLA, references and local presence, the trial terms | Vendor viability (a new company with placeholder company pages); total cost; compliance with tender rules | Procurement as decision-maker in 53% of cycles, and the wish for transparent pricing: **Verified**. GCC tender specifics: **Hypothesis**. |
| **Business owner / sponsor** (HR director, procurement head, director of a government department) | The outcome (time to signature, fewer paper trips), how fast it goes live (12 weeks claimed), ROI, who else uses it | Disruption of existing processes; adoption; looking bad if a small vendor fails | ROI wish (47% enterprise): **Verified** (global). Everything else: **Hypothesis**. |
| **Sender / power user** (HR officer, procurement officer, contracts administrator) | How compose and send works, templates, bulk send, Arabic documents and fields, reminders, tracking | Learning curve; Arabic text and fields breaking; chasing signers | RTL field problems in other tools: **Verified** (§3). Sender workflow pains: **Hypothesis**, partly supported by reviews. |
| **Signer, internal** (manager, approver, signatory) | Nothing on the landing page. They meet the product in an email or SMS link. | Speed, mobile, trusting the link | **Hypothesis** |
| **External signer** (supplier, employee, citizen, on a phone) | Nothing on the landing page. A recognisable, bilingual signing page, UAE PASS or a code, no account | Phishing, unreadable documents, no UAE PASS (non-residents) | Mobile ubiquity: **Verified** (§3.4). UAE PASS account-recovery complaint: **Verified**. The rest: **Hypothesis**. |
| **Government correspondence officer** (Diwan persona; product not released) | Register numbering, Hijri dates, routing to positions | Not a buyer for Signora today | **Hypothesis**. Kept as a secondary persona only. |
| **External influencers** (system integrators, consultants, peers) | Partner or integration info, API docs, references | Their reputation with the client | 9 external influencers per purchase: **Verified** (Forrester 2026). Their GCC role: **Hypothesis**. |

**Implication for the page (Hypothesis).** The landing page is the shared reference that one champion forwards to the rest of the committee. Each role needs a short, clearly labelled answer it can find in one scroll: "for security", "for legal", "for procurement".

---

## 2. Regulatory and market context that affects messaging

### 2.1 UAE Federal Decree-Law No. 46 of 2021 (Electronic Transactions and Trust Services)

All points are **Verified** against the English text republished at https://legaladviceme.com/legislation/160/uae-federal-decree-law-46-2021-electronic-transactions-trust-services, which was read because the official PDF returned 403. Counsel should confirm them against the official Arabic text.

- **Tiers.** Article 1 defines an Electronic Signature, an **Advanced E-Signature** (by reference to Article 19), and a **Qualified E-Signature**, which is "an Advanced E-Signature created by a Qualified E-Signature Device".
- **Art. 18(1).** Admissibility is "not ... precluded by the mere fact that it is in Electronic form".
- **Art. 18(3).** "A Qualified E-Signature shall be deemed equally authentic to a handwritten signature and shall have the same legal effect", subject to the Decree-Law and the Executive Regulation.
- **Art. 18(7).** "An Advanced E-Signature and an Advanced E-Seal shall be relied upon and have legal effect so long as the conditions prescribed by this Decree-Law and its Executive Regulation are met."
- **Art. 19 (conditions for Advanced).** The signature must be (1) "completely and exclusively associated with Signatory and under their control"; (2) able to identify the signatory; (3) linked to the data "in such a way as to detect any modification"; (4) created to the technical requirements in the Executive Regulation; and (5) meet any other Executive Regulation requirements.
- **Art. 18(5).** A qualified date and time is validated through a **Qualified Electronic Time Stamp**.
- **Art. 28(5).** Government entities must accept persons' e-signatures, e-seals and digital IDs, subject to TDRA standards.
- **Art. 28(7)(c).** A government entity "may specify ... the form of E-Signature/E-Seal and required security level".
- **Art. 2(2).** "The Cabinet may add, delete, or exclude any transaction, document, service, or procedure."
- **Trust services framework.** TDRA licenses trust service providers, publishes the list of licensed providers, and licensed providers get a "trust mark". The Federal Authority for Identity, Citizenship, Customs and Port Security issues controls for trust services provided to the government sector (https://u.ae/en/about-the-uae/digital-uae/regulatory-framework/electronic-transactions-and-trust-services-law). The Executive Regulations are Cabinet Decision No. 28 of 2023, enforceable from 29 June 2023 (Pinsent Masons: https://www.pinsentmasons.com/out-law/news/uae-sets-new-rules-for-digital-signatures-and-trust-services).
- **Exclusions.** The CMS expert guide (last updated 31 March 2021) lists onshore exceptions that need wet ink: civil-status matters, title deeds, negotiable instruments, real-estate sales and long leases, and notarised documents. It also notes that "some government departments and other organisations may adopt processes" requiring written documents (https://cms.law/en/int/expert-guides/cms-expert-guide-to-e-signatures-in-commercial-contracts/uae). That guide **reflects the earlier law**. Decree-Law 46/2021 instead lets the Cabinet set exclusions (Art. 2(2)). **Whether the old exclusions survive in other legislation is an open question for counsel.**
- **A practitioner view (Jan 2026).** Charles Russell Speechlys advises checking that a provider is TDRA-licensed and on the UAE Trusted List, and considering reliable or qualified options and qualified time stamps for higher-stakes documents (https://www.charlesrussellspeechlys.com/en/insights/expert-insights/corporate/2026/an-overview-of-electronic-signatures-in-the-uae/). The same article cites a "216% increase" in digital-signature usage since 2023 **without a source**, so it should not be reused.

**Messaging implications**
- Never imply "as valid as handwritten". Under Art. 18(3) that is the language for **qualified** signatures. Say instead: "Advanced electronic signatures with legal effect under UAE Decree-Law 46/2021 (Art. 18(7)), sealed so anyone can detect a change." **Verified basis.**
- Pre-empt the question "Is advanced enough for us?" Point to Art. 28(7): each government entity decides, so the page should invite a legal review and list the use cases where advanced is typically used and where qualified or wet ink may be required. **Hypothesis**: this needs counsel sign-off.
- **Open legal question (Hypothesis, high priority).** Art. 19(1) requires the signature to be "exclusively associated with Signatory and under their control". Signora applies a PAdES seal per signer using a **tenant or platform key**, with signer identity in the evidence. Counsel should confirm whether this is best described as an Advanced E-Signature of the signer or an Advanced E-Seal of the organisation, and phrase the page to match. The current site's "seal per signer" wording may draw this question from legal reviewers.
- The RFC 3161 time stamp is a strength. A *qualified* time stamp needs a qualified TSP (Art. 18(5)), so the page should name which TSA is used, or say "your TSA". **Verified basis; implication is a Hypothesis.**

### 2.2 UAE PASS: adoption and its own signature

- **Users and services.** More than 11 million people use it, more than 5,000 public and private services include "signing and validating documents", more than 322 service providers have integrated it, and there have been more than 600 million logins (UAE Cabinet, reported by Biometric Update, 23 Jun 2025: https://www.biometricupdate.com/202506/uae-pass-streamlines-access-to-over-5k-digital-services-as-transactions-surge). A later release says UAE PASS "has exceeded 12 million registered users" (Zawya, WEF recognition, 2026, exact date not shown: https://www.zawya.com/en/press-release/government-news/world-economic-forum-recognizes-the-uae-pass-as-a-global-model-for-integrated-government-digital-infrastructure-402678). For context, the UAE had 11.1 million internet users and 99.0% online penetration in early 2025 (DataReportal: https://datareportal.com/reports/digital-2025-united-arab-emirates). **Verified.**
- **It signs documents itself.** "The UAE Pass has a feature to sign documents digitally", and signed documents can be verified in the app or on the website (https://u.ae/en/about-the-uae/digital-uae/digital-transformation/platforms-and-apps/the-uae-pass-app). Signing needs a signing password set after face verification, and "your digital signature will expire after three years" (Gulf News, updated 6 Oct 2025: https://gulfnews.com/living-in-uae/ask-us/how-to-sign-government-documents-online-through-uae-pass-1.1697813484468). Signing uses "PAdES for PDF documents", and private organisations integrate under a service-provider agreement (https://docs.uaepass.ae/faq). **Verified.**
- **Not found.** No fetched source states whether the UAE PASS signature is "qualified" under Decree-Law 46/2021, and no source gives a count of documents signed.
- **App sentiment.** The App Store (UAE) shows 3.5/5 from 4.2k ratings. One review describes an attacker repeatedly logging in through account recovery "without any biometric or facial verification" (https://apps.apple.com/ae/app/uae-pass/id1377158818). **Verified**, but it is an anecdote.

**Messaging implications (Hypothesis)**
1. "UAE PASS" on the page will be read by many as "UAE PASS digital signature". Be explicit, for example: "Signers prove who they are with UAE PASS (name and Emirates ID match); Signora then seals their signature into the PDF."
2. Integrating a UAE PASS–based signature could be a route to a higher signature level. That is a product and partnership decision, not a page claim.
3. UAE PASS is only for people with a UAE identity. Foreign counterparties need the code options, so show both.
4. Live UAE PASS is **not** in the trial (it was tested against a stand-in, per SITE_CONTEXT §2.14). The page must not imply that it works in production today.

### 2.3 Data residency and sovereignty

- **The UAE National Cloud Security Policy** comes from the Cyber Security Council. UAE government and critical-infrastructure entities "must adhere to the policy when buying and using cloud services", customers must know where their data is "at all stages", and providers must "operate within acceptable legal jurisdiction(s)" (Pinsent Masons, 28 Nov 2023: https://pinsentmasons.com/out-law/news/security-policy-supports-shift-cloud-uae). The u.ae page (updated 18 Jun 2026) links to **V2.0**. It requires consumers to be aware of "the location at which data is stored, processed, and managed from" and providers to give "on-site technical support for Sovereign Cloud environments" (https://u.ae/en/about-the-uae/strategies-initiatives-and-awards/policies/cyber-activities/National-Cloud-Security-Policy). **Verified.** The tier definitions in V2.0 (described in search snippets as baseline, partial-sovereign and sovereign) were **not** read, so they are **Unverified**.
- **Dubai.** DESC "imposes strict data sovereignty on the data of Dubai government and semi-government organisations", which reflects "a wider, consistent approach by government entities across the UAE who expect sensitive data to be localised" (Hadef & Partners, 12 Mar 2026: https://hadefpartners.com/news-insights/insights/crisis-management-understanding-data-localisation-rules-in-the-uae/). **Verified.**
- **Health data.** Federal Law No. 2 of 2019 (ICT in health) prohibits storing or transferring health data outside the UAE unless an exception applies, and Abu Dhabi's ADHICS has a similar rule (same Hadef source). **Verified.**
- **Government IoT data.** Data classed as secret, sensitive or confidential and relating to government "must remain in the UAE at all times" (Clifford Chance, 10 Mar 2025: https://www.cliffordchance.com/insights/resources/blogs/talking-tech/en/articles/2025/03/doing-business-in-the-middle-east--data-transfers-in-the-uae-and-ksa.html). **Verified.**
- **Incumbent gap.** DocuSign stores agreement data in the "U.S., Canada, Europe, Australia, or Japan" (https://www.docusign.com/trust/privacy/data-mgmt-privacy). No GCC region is listed. **Verified.**

**Messaging implication (Hypothesis).** "Runs in your data centre; documents, evidence and signing keys never leave it" is likely the strongest single message for government IT and security. It is also a credible point of difference against DocuSign. The planned UAE data centre must be labelled "planned".

### 2.4 Saudi Arabia in brief

- **The Electronic Transactions Law.** WIPO gives it as Royal Decree M/8 of 26 March 2007 (https://www.wipo.int/wipolex/en/text/197970). A MISA-hosted translation cites M/18 (https://misa.gov.sa/app/uploads/2025/08/Electronic-Transactions-Law.pdf), so the decree number should be confirmed before it is cited. The law covers the following points. **Verified.**
  - **Article 3** excludes transactions pertaining to **personal status** and the **issuance of deeds pertaining to real property**.
  - **Article 14(1):** a signature requirement is satisfied by an electronic signature generated under the law.
  - **Article 4(1):** no one is compelled to transact electronically without consent.
  - The **National Center for Digital Certification** oversees the issuance of digital certificates.
- **DocuSign's Saudi legality guide** (updated 15 Jan 2026) notes Implementing Regulations from 2024 and the Law of Evidence from 2022. It says digital certification is "not required to form a contract" but makes signatures harder to challenge (https://www.docusign.com/how-it-works/legality/global/saudi-arabia). **Verified.**
- **Hosting.**
  - The NCA's Cloud Cybersecurity Controls (CCC-2:2024) apply to cloud providers and to government organisations as cloud tenants (https://cdn.nca.gov.sa/api/files/public/upload/6d5408a3-d8e6-4e96-963b-2c7198e5b7c2_CCC-2-2024-EN-.pdf). **Seen in search only, not read: Unverified.**
  - Clifford Chance (March 2025) says ECC-2 (2024) removed "the requirements for governmental entities" to store data within KSA, though some localisation requirements remain. It also says the Cloud Computing Services Provisioning Regulations require data "classified as data of Saudi government agencies" to use providers "registered with the Communications & Information Technology Commission". **Verified.**
- **Design standard.** The Digital Government Authority launched the **Platform Code**, "a national framework for designing and developing government platform interfaces", on 18 Nov 2024 (https://www.arabnews.com/node/2579757). **Verified.** Whether it is mandatory, and its Arabic-default rule, are **Unverified**.
- **National identity.** Nafath is the Saudi counterpart to UAE PASS. User figures seen in search (about 23.5M users, Nov 2024) come only from snippets and could not be opened, so they are **Unverified**.
- **Hijri dates.** A SAMA rulebook circular adopts the Hijri date in correspondence and financial documents (https://rulebook.sama.gov.sa/en/node/9824). **Seen in search only: Unverified.**

**Implication (Hypothesis).** For KSA, the page needs "Nafath" as the equivalent of UAE PASS, which Signora does not support today, plus an in-Kingdom hosting answer (on-prem satisfies it). Until those exist, the page should be UAE-first and say "GCC-ready" only where that is true.

### 2.5 Arabic-first expectations in government digital services

- The UAE Cabinet decided in March 2008 "to use Arabic as the official language in all federal authorities and establishments" (Gulf News, 10 Mar 2008: https://gulfnews.com/uae/government/uae-makes-arabic-official-language-1.90822). **Verified.**
- TDRA's coding guidance for UAE government projects says developers "must ensure all website pages and services work seamlessly in both Arabic and English". It asks for `dir="rtl"` for Arabic, mirrored layout and navigation, fonts that support both Latin and Arabic glyphs, keyboard access, visible focus, and touch targets of at least 44×44 px (https://designsystem.gov.ae/guidelines/technical-coding). **Verified.**
- The UAE Design System 4.0 is maintained by TDRA, "the official design system for UAE federal government entities", and follows **WCAG 2.2** (https://designsystem.gov.ae/docs/getting-started). **Verified.**
- The UAE government guidelines portal lists the *Web Content Guidelines for UAE Government*, a *Style guide for Arabic writing*, a *Style guide for English writing* (all 7 Dec 2022) and the *National Information Assurance Framework* (3 May 2023) (https://u.ae/en/resources/guidelines). **Verified** (titles only; the documents were not read).
- The UAE is drafting its first Arabic-language law, reported on 1 Jun 2026; the reported scope is customer-facing businesses and conferences (https://www.semafor.com/article/06/01/2026/uae-drafts-first-arabic-language-law). **Verified**, but it is a draft and its digital scope is unknown.

**Implication (Hypothesis).** Government evaluators will judge the Arabic site as a product in its own right. A page whose Arabic reads like a translation, or whose RTL layout breaks, will undercut the "Arabic and the GCC first" claim. Following the UAE Design System conventions for RTL and accessibility signals that the product already meets government UI expectations.

---

## 3. Problems users have today, and how they solve them now

### 3.1 Verified problems (from public review data and reports)

Review sources actually read are PeerSpot, Trustpilot, the App Store and Adobe Community. G2, Capterra and TrustRadius review pages returned 403. None of the reviews below is identifiably from the GCC.

| # | Problem | Evidence (verbatim, with source) |
|---|---|---|
| P1 | **Licensing, permissions and pricing complexity** in DocuSign | "the different permission sets are not the easiest to understand"; "sometimes it feels like the licensing model is just there to penny pinch the organization" (Operations Associate Director, IT outsourcing, 51–200). "it is very overkill for a small team" (Senior DevOps Engineer). PeerSpot — https://www.peerspot.com/products/docusign-reviews |
| P2 | **Price and value for e-signature** (Adobe Acrobat Sign; DocuSign) | "We can always get a better price." (Business Technology Manager, **government**, 10,001+), PeerSpot Adobe Sign — https://www.peerspot.com/products/adobe-sign-reviews. "there are a lot of other, cheaper, options now" (Trustpilot DocuSign, 22 Nov 2026) — https://www.trustpilot.com/review/docusign.com |
| P3 | **Support is slow or varies by region** | "Customer support is great WHEN you finally get through." (Trustpilot DocuSign, 12 Nov 2026). "The support quality can vary depending on the region you live in." (Presales Manager, PeerSpot Adobe Sign). Trustpilot score for DocuSign: 2.9/5 from 1,446 reviews, 68% 1-star (as fetched 2026-11-24). |
| P4 | **Templates and fields not behaving as configured** | "the templates do not require initials or checkmarks, even though they are directed to" (Trustpilot DocuSign, 7 Nov 2026). "the preview looks different from what I see during editing" (PeerSpot DocuSign). |
| P5 | **Integration gaps** (Microsoft, procurement suites, AI) | "DocuSign could be improved with more native integration with Microsoft products." (Microsoft CoE Head, healthcare, 10,001+). "DocuSign still needs to offer more built-in integration tools such as the Coupa connector." (PeerSpot DocuSign) |
| P6 | **Weak signer verification** (a security engineer's view) | "I would implement MFA or some kind of verification mechanism while signing documents" (Security Engineer, PeerSpot DocuSign) |
| P7 | **Arabic and RTL handling in fields and signatures** | Adobe Acrobat Sign: "I'm having an issue to set the signature box aligned to the right side or if possible set it as Right-To-Left" (Oct 2020). A community expert replied that Arabic is not well supported and that the workaround still produced a distorted signature placement — https://community.adobe.com/t5/adobe-acrobat-sign-discussions/adobe-sign-tag-aligned-to-right-or-rtl/td-p/11503292. Dropbox Sign lists "Hebrew (currently with no right-to-left option)" and does not list Arabic for text fields — https://help.dropbox.com/view-edit/supported-languages-text-fields-dropbox-sign |
| P8 | **No in-region data hosting from the market leader** | DocuSign regions: U.S., Canada, Europe, Australia, Japan (§2.3) |
| P9 | **Paper burden at scale before digitisation** (the problem Dubai addressed) | Dubai's paperless strategy cut "more than 336 million papers", saved "more than AED1.3 billion" and "over 14 million man hours" across "all 45 government entities", with "more than 1,800 digital services" (Dubai Media Office, 11 Dec 2021: https://www.mediaoffice.ae/en/news/2021/December/11-12/Hamdan-bin-Mohammed-Dubai-has-become-the-worlds-first-paperless-government). These are government-claimed figures, not an independent audit. |
| P10 | **Some documents and departments still need wet ink or paper** | The CMS guide lists the onshore exceptions and notes that departments may require written documents (§2.1). Its 2021 date predates Decree-Law 46/2021. |
| P11 | **National ID app friction or security worries** | UAE PASS App Store: 3.5/5 (4.2k ratings), with an account-recovery abuse complaint and an email-OTP failure complaint (Oct 2024) (§2.2) |

### 3.2 Hypothesised problems (plausible but not evidenced in fetched sources)

| # | Hypothesis | Why plausible | How to validate (desk-feasible first) |
|---|---|---|---|
| H1 | Government entities cannot use SaaS e-signature for sensitive documents, so they fall back on paper plus scanning, or on UAE PASS signing one document at a time | Residency rules (§2.3) and the absence of in-region incumbents | Read UAE and KSA government tender documents for e-signature or ECM (tender portals); ask sales for lost-deal reasons |
| H2 | Approval chains (approver → signatory → stamp) do not map well onto Western "signer" models | The stamp and approver roles exist in Signora's design and in Diwan, which suggests the team has seen this | Tender requirements; sales notes; AcuteSign usage data (if it exists) |
| H3 | The **company stamp (khatm)** is still expected next to a signature on many documents | Free-zone and law-firm commentary (search only) says a stamp is "normally applied alongside" a signature | Read a law-firm source in full; check government form templates |
| H4 | Mixed Arabic and English documents break field placement and fonts in global tools | Supported by P7 for Adobe and Dropbox Sign. Not evidenced for DocuSign. | Test DocuSign and Adobe with a bilingual PDF (desk test) |
| H5 | External signers outside the UAE (suppliers, foreign parties) cannot use UAE PASS and need a fallback | UAE PASS ties to a UAE identity (§2.2) | Product analytics after launch; sales |
| H6 | Legal teams worry about AI summarising confidential contracts | Forrester: AI features double the buying group, and 28% of procurement respondents lost confidence because of AI errors (Verified, global) | Interviews later; RFP clauses on AI |
| H7 | Buyers distrust a young vendor with no references, no pen test and placeholder company pages | TrustRadius: enterprise buyers lean on known brands (86%) and peers (Verified, global). Gaps T1 and C2 in the decision log. | Sales objections log; trial-form drop-off |
| H8 | Signers on phones struggle with long PDFs in a second language | Mobile ubiquity (21.9M mobile connections, DataReportal 2025) | Usability test of the signing page (outside landing-page scope) |

### 3.3 How they solve it today (status per item)

| Current approach | Status |
|---|---|
| **UAE PASS signing** for individuals submitting documents to government | **Verified** (Gulf News; u.ae) |
| **Global SaaS e-signature** (DocuSign, Adobe Acrobat Sign) | **Verified** that they are used and reviewed (PeerSpot). GCC market share: **unknown** |
| **Government e-correspondence and paperless programmes** (Dubai paperless strategy; Saudi institution-level e-correspondence rollouts) | Dubai: **Verified**. Saudi SFDA and NGHA rollouts and Qatar's "Morasalat": **search snippets only (Unverified)** |
| **Print, wet-sign, stamp, scan, email** | **Hypothesis**, supported indirectly by the CMS note on scanned documents and the exceptions above |
| **AcuteSign** (Smart Orbit's previous or adjacent product; Signora imports from it) | Internal fact from SITE_CONTEXT §2.11. Who these users are is an open question (decision log P4). |

### 3.4 Mobile context (Verified)

The UAE had 21.9 million cellular connections against 11.1 million internet users in early 2025 (https://datareportal.com/reports/digital-2025-united-arab-emirates). Signers are very likely to open links on a phone. The share of signing done on mobile is **not** measured here.

---

## 4. Personas (drafts)

Key: **[V]** = Verified, with the source in brackets. **[H]** = Hypothesis to validate. Names are illustrative.

### Persona A — "Khalid", IT and security evaluator (primary gatekeeper)

| Attribute | Content | Status |
|---|---|---|
| Role | Head of infrastructure or information security at a federal or emirate-level government entity, or at a regulated enterprise (bank, utility) | [H] |
| Context | His entity must follow the National Cloud Security Policy and know where its data lives at all stages | [V] Pinsent Masons 2023; u.ae NCSP page |
| Context | Dubai government data must stay in the UAE | [V] Hadef 2026 |
| Goal | Approve a signing tool that keeps documents, evidence and keys inside the entity's own perimeter | [H] Follows from the two rows above |
| Behaviour | Researches alone before talking to sales; prefers docs and a trial to calls | [V] 67% rep-free (Gartner via DC360); >60% trial (Forrester 2026); global samples |
| Needs | Architecture, deployment, key options, SSO/SCIM, security-review status and gaps, install guide, performance under load | [H] |
| Fears | A small vendor that fails a security assessment; hidden cloud calls; no pen test | [H]. "No pen test, no ISO 27001" are facts from SITE_CONTEXT §8. |
| Language | Reads English technical docs comfortably, but the entity expects Arabic-first UI | [H]. Arabic UI obligations: [V] TDRA |
| Quote to test | "Show me where the keys live and what calls out of my network." | [H] (invented prompt, not a real quote) |

### Persona B — "Mariam", legal and compliance officer

| Attribute | Content | Status |
|---|---|---|
| Role | Legal counsel or compliance manager in government legal affairs or enterprise legal | [H] |
| Knowledge | Knows that qualified signatures equal handwritten (Art. 18(3)) and that advanced signatures have legal effect if conditions are met (Art. 18(7)) | Law: [V]. Her familiarity with it: [H] |
| Authority | Her entity may specify the required signature level (Art. 28(7)(c)) | [V] |
| Goal | Map document types to an acceptable signature level and evidence standard | [H] |
| Needs | A plain statement of the signature level, a sample sealed PDF and verification report, the audit-trail contents, retention tiers, the consent wording, and how verification works years later without the vendor | [H]. These assets exist (SITE_CONTEXT §2.6–2.7). |
| Fears | Over-claiming ("as valid as wet ink"); signature vs. seal ambiguity (Art. 19(1)); AI reading confidential documents | Law: [V]. Fears: [H] |
| Behaviour | Validates claims with peers or outside counsel rather than the vendor | [V] in general: buyers seek "validation of what the vendor told them" (49%, TrustRadius 2024); global sample |

### Persona C — "Noura", business sender (HR or procurement officer)

| Attribute | Content | Status |
|---|---|---|
| Role | HR officer sending offer letters and contracts, or a procurement officer sending supplier agreements | [H] |
| Volume | Dozens to thousands of envelopes a month, with bulk-send peaks (onboarding, renewals) | [H] |
| Pain | Chasing signatures; templates that don't enforce required fields; Arabic fields breaking | Templates and RTL: [V] (P4, P7) for other tools. Her experience: [H] |
| Goal | Send from a template in minutes, track who has signed, remind automatically | [H] |
| Influence | Often the champion who brings the tool to IT; not the final approver | [H]. Forrester's multi-department buying: [V] |
| Needs on the page | A real screenshot of composing an envelope in Arabic and English, templates, bulk send, tracking | [H] |
| Language | Arabic or English working language; documents are often bilingual | [H] |

### Persona D — "Rahul", external signer on a phone

| Attribute | Content | Status |
|---|---|---|
| Role | A supplier's signatory, a new employee, or a citizen. May be a UAE resident (has UAE PASS) or abroad (no UAE PASS). | [H] |
| Device | Opens the link on a smartphone | UAE mobile ubiquity: [V] DataReportal. Share signing on mobile: [H] |
| Identity | If resident, uses UAE PASS daily for government services | [V] 11M+ users, 5,000+ services |
| Fears | Phishing ("Is this link real?"); signing something he cannot read | [H]. A security engineer asking for stronger signer verification: [V] (P6, a single PeerSpot reviewer) |
| Needs | A recognisable sender brand, his language, a short "what am I signing" summary, a quick finish | [H] |
| Landing-page relevance | **Low.** He rarely visits the marketing page. His experience appears in the page only as proof to senders ("this is what your signers see"). | [H] |

### Persona E — "Abdullah", procurement and tender committee member (buying-committee persona)

| Attribute | Content | Status |
|---|---|---|
| Role | Procurement specialist running vendor registration and tender evaluation | [H] |
| Power | Procurement is a decision-maker in 53% of buying cycles | [V] Forrester 2026 (global) |
| Needs | Legal entity, address, trade licence, licensing model, indicative pricing, SLA, support, references, local presence | [H]. Transparent pricing as the top wish: [V] TrustRadius 2024/2025 |
| Fears | Vendor viability; cost overrun; non-compliant bids | [H] |
| Red flags on the current site | Placeholder company, contact and terms pages; "proposed" pricing; internal notes visible | [V] decision log C2, T1 (internal audit) |

### Secondary persona — "Fatima", government correspondence officer (Diwan; not released)

She is kept for the platform story, but **is not a Signora landing-page target**. Her needs (register numbering with Hijri years, routing to positions, bilingual letterhead) come from the Diwan design (SITE_CONTEXT §4). Whether these reflect real practice in UAE federal entities is **[H]**. The Saudi Hijri-date circular was seen only in search and is unverified.

---

## 5. What each persona needs on the landing page

The time budgets themselves are a **Hypothesis**. They follow the task brief, not measured data. Every "needs" item is a hypothesis grounded in the evidence above.

### 5.1 First 10 seconds (above the fold)

| Persona | Must be able to answer | Supporting evidence |
|---|---|---|
| All | **What it is**: e-signature for UAE government and enterprise, in Arabic and English | 78–86% shortlist known names [V], so a newcomer must make its category and fit obvious immediately |
| A (IT/security) | **Where it runs**: "On your servers. Documents, evidence and keys stay in your data centre." | Residency rules [V]; DocuSign regions [V] |
| B (Legal) | **What level**: "Advanced electronic signatures under UAE Decree-Law 46/2021, verifiable for years without us." | Art. 18(7), Art. 19 [V] |
| C (Sender) | **That it is real and easy**: a real product screenshot (Arabic and English), not a mock | Decision-log V2/V3 [V internal]. Demos are the most influential resource [V]. |
| D (Signer) | **UAE PASS** recognisable as the identity step | 11M+ users [V] |
| E (Procurement) | **Who is behind it**: Smart Orbit, UAE company, a primary call to action ("Request a 30-day on-prem trial") | Trials are the most trusted resource [V]; vendor-viability gap [V internal] |

Hero content checklist (Hypothesis):
- One headline.
- A sub-line naming *on-prem · UAE PASS · Arabic/English · advanced (PAdES-B-LT)*.
- A real screenshot.
- One call to action: the trial request.
- A secondary link to the sample sealed PDF.
- No platform tour in the hero. TroveDocs, Diwan and Tameer are not available (decision log T2).

### 5.2 First 2 minutes (scrolling and skimming)

| Persona | Needs to find | Format suggestion (Hypothesis) |
|---|---|---|
| A | Deployment diagram (what runs where); key-source options; SSO/SCIM/API/webhooks; the honest "not done yet" list (pen test, ISO 27001); install time; measured performance with conditions | A "For security teams" block with links to Security, Install and API |
| B | One plain-language paragraph on advanced vs. qualified, citing Art. 18(3), 18(7) and 28(7); where advanced typically suffices and where qualified or wet ink may be required (after counsel review); a **downloadable sealed sample plus verifier report**; audit-trail tiers and retention; consent step | A "For legal and compliance" block; the sample PDF as the proof object |
| C | The 4-step journey shown with real screens (compose → sign → seal → verify); templates and bulk send; Arabic RTL document example; reminders and tracking | A short real video or interactive demo (demos: 54% use, 71% most influential [V]) |
| D | "What your signers see": a phone frame with the Arabic signing page and the UAE PASS and code options | A single visual, kept small |
| E | Company facts (legal entity, Dubai or Abu Dhabi address, contacts); licensing model and indicative pricing or a range; support and SLA; trial terms (30 days, limits); references once available | A "For procurement" block; no visible "proposed" or internal notes |
| All | Social proof from relatable peers (GCC entity names, if permitted) | Peers and reviews outweigh analysts (14% use analyst reports) [V]. **Gap: no customers to cite yet.** |

### 5.3 Things the page should not do (from the evidence)

- **Do not claim handwritten equivalence or "qualified" status.** Art. 18(3) is the language for qualified signatures. [V]
- **Do not let "UAE PASS" read as "UAE PASS digital signature"**, and do not imply that live UAE PASS is in the trial. [V] facts; [H] confusion risk
- **Do not lead with AI.** AI features double the buying group and add legal and procurement scrutiny [V Forrester 2026]. Present AI as optional and configurable, inside the tenant.
- **Do not gate the basics** (sample PDF, docs, pricing range). Buyers' top wishes are transparency and not being contacted before they are ready. [V TrustRadius]

---

## 6. Open questions and how to validate them (desk-feasible first)

1. **Counsel review.** Is Signora's per-signer seal an Advanced E-Signature (Art. 19) or an Advanced E-Seal? What wording is safe on the page? Which document types still need qualified signatures or wet ink after Decree-Law 46/2021?
2. **Read the full National Cloud Security Policy V2.0 PDF** for its tier definitions and mapping to data classification. (Not read here.)
3. **Tender mining.** Collect 10–20 public UAE and KSA government tenders for e-signature, ECM or correspondence systems and code their mandatory requirements: hosting, signature level, UAE PASS or Nafath, Arabic, certifications. This is the best available substitute for interviews.
4. **Sales and AcuteSign data.** Find out who the existing AcuteSign customers are and whether any would act as a reference (decision log P4).
5. **Review-site access.** Read G2, Capterra and TrustRadius manually in a browser to add GCC-tagged reviews. Automated fetching was blocked.
6. **Competitive scan.** Check whether regional e-signature vendors offer UAE hosting, UAE PASS signing or qualified status. Not covered here.

---

## Sources

All of the following were fetched and read on 2026-11-24 unless marked otherwise.

**Buyer behaviour**
- Forrester, *State of Business Buying 2026* press release — https://www.forrester.com/press-newsroom/forrester-2026-the-state-of-business-buying/
- Digital Commerce 360 on Forrester 2026 — https://www.digitalcommerce360.com/2026/01/22/forrester-b2b-buying-ai-2026/
- Forrester blog, *State of Business Buying 2024* — https://www.forrester.com/blogs/state-of-business-buying-2024/
- Digital Commerce 360 on Gartner (67% rep-free, March 2026) — https://www.digitalcommerce360.com/2026/03/17/gartner-b2b-buyers-rep-free-purchasing-ai-reshapes-sales/
- MarTech on Gartner (61% rep-free, July 2025) — https://martech.org/b2b-buyers-want-less-sales-contact/
- TrustRadius, *2024 B2B Buying Disconnect* (PDF) — https://go.trustradius.com/rs/827-FOI-687/images/TrustRadius-2024-B2B-Buying-Disconnect-Report.pdf
- TrustRadius, *Bridging the Trust Gap: B2B Tech Buying in the Age of AI* (PDF, 2025) — https://go.trustradius.com/rs/827-FOI-687/images/TrustRadius-Bridging-the-Trust-Gap-B2B-Tech-Buying-in-the-Age-of-AI.pdf
- TrustRadius/Pavilion press release, 10 Jun 2024 — https://prnewswire.com/news-releases/trustradius-and-pavilion-reveal-2024-b2b-buying-trendsb2b-brands-are-in-crisis-mode-302166605.html
- *Blocked (403), not used directly:* Gartner newsroom releases of 25 Jun 2025 and 9 Mar 2026; gartner.com buyer-enablement pages.

**UAE law and trust services**
- Federal Decree-Law 46/2021, English text — https://legaladviceme.com/legislation/160/uae-federal-decree-law-46-2021-electronic-transactions-trust-services
- u.ae, Electronic Transactions and Trust Services law — https://u.ae/en/about-the-uae/digital-uae/regulatory-framework/electronic-transactions-and-trust-services-law
- Pinsent Masons, UAE rules for digital signatures and trust services (May 2023) — https://www.pinsentmasons.com/out-law/news/uae-sets-new-rules-for-digital-signatures-and-trust-services
- DWF, UAE electronic transactions regulations — https://dwfgroup.com/en/news-and-insights/insights/2022/1/uae-electronic-transactions-regulations
- CMS expert guide, e-signatures in the UAE (2021) — https://cms.law/en/int/expert-guides/cms-expert-guide-to-e-signatures-in-commercial-contracts/uae
- Charles Russell Speechlys, overview of e-signatures in the UAE (Jan 2026) — https://www.charlesrussellspeechlys.com/en/insights/expert-insights/corporate/2026/an-overview-of-electronic-signatures-in-the-uae/
- *Blocked (403):* the official PDF at uaelegislation.gov.ae; Tamimi & Co. articles; Adobe UAE legality page.

**UAE PASS and digital context**
- Biometric Update, UAE PASS statistics (23 Jun 2025) — https://www.biometricupdate.com/202506/uae-pass-streamlines-access-to-over-5k-digital-services-as-transactions-surge
- Zawya, WEF recognises UAE PASS — https://www.zawya.com/en/press-release/government-news/world-economic-forum-recognizes-the-uae-pass-as-a-global-model-for-integrated-government-digital-infrastructure-402678
- u.ae, the UAE PASS app — https://u.ae/en/about-the-uae/digital-uae/digital-transformation/platforms-and-apps/the-uae-pass-app
- Gulf News, how to sign documents with UAE PASS — https://gulfnews.com/living-in-uae/ask-us/how-to-sign-government-documents-online-through-uae-pass-1.1697813484468
- UAE PASS docs FAQ — https://docs.uaepass.ae/faq
- App Store, UAE PASS — https://apps.apple.com/ae/app/uae-pass/id1377158818
- DataReportal, *Digital 2025: UAE* — https://datareportal.com/reports/digital-2025-united-arab-emirates

**Residency and sovereignty**
- Pinsent Masons, UAE cloud security policy (Nov 2023) — https://pinsentmasons.com/out-law/news/security-policy-supports-shift-cloud-uae
- u.ae, National Cloud Security Policy — https://u.ae/en/about-the-uae/strategies-initiatives-and-awards/policies/cyber-activities/National-Cloud-Security-Policy
- Hadef & Partners, data localisation rules in the UAE (Mar 2026) — https://hadefpartners.com/news-insights/insights/crisis-management-understanding-data-localisation-rules-in-the-uae/
- Clifford Chance, data transfers in the UAE and KSA (Mar 2025) — https://www.cliffordchance.com/insights/resources/blogs/talking-tech/en/articles/2025/03/doing-business-in-the-middle-east--data-transfers-in-the-uae-and-ksa.html
- DocuSign, data management and privacy — https://www.docusign.com/trust/privacy/data-mgmt-privacy

**Saudi Arabia**
- WIPO Lex, KSA Electronic Transactions Law — https://www.wipo.int/wipolex/en/text/197970
- MISA, Electronic Transactions Law (PDF) — https://misa.gov.sa/app/uploads/2025/08/Electronic-Transactions-Law.pdf
- DocuSign, Saudi Arabia legality guide — https://www.docusign.com/how-it-works/legality/global/saudi-arabia
- Arab News, DGA Platform Code (Nov 2024) — https://www.arabnews.com/node/2579757

**Arabic and government web standards**
- Gulf News, Arabic made official language in federal offices (2008) — https://gulfnews.com/uae/government/uae-makes-arabic-official-language-1.90822
- UAE Design System, technical coding practices — https://designsystem.gov.ae/guidelines/technical-coding
- UAE Design System, getting started — https://designsystem.gov.ae/docs/getting-started
- u.ae guidelines list — https://u.ae/en/resources/guidelines
- Semafor, UAE drafts Arabic language law (Jun 2026) — https://www.semafor.com/article/06/01/2026/uae-drafts-first-arabic-language-law

**Problems and reviews**
- PeerSpot, DocuSign reviews — https://www.peerspot.com/products/docusign-reviews
- PeerSpot, Adobe Acrobat Sign reviews — https://www.peerspot.com/products/adobe-sign-reviews
- Trustpilot, DocuSign — https://www.trustpilot.com/review/docusign.com
- Adobe Community, Acrobat Sign RTL thread — https://community.adobe.com/t5/adobe-acrobat-sign-discussions/adobe-sign-tag-aligned-to-right-or-rtl/td-p/11503292
- Dropbox Sign supported languages — https://help.dropbox.com/view-edit/supported-languages-text-fields-dropbox-sign
- Dubai Media Office, Dubai becomes the world's first paperless government (Dec 2021) — https://www.mediaoffice.ae/en/news/2021/December/11-12/Hamdan-bin-Mohammed-Dubai-has-become-the-worlds-first-paperless-government
- *Blocked (403):* G2, Capterra, TrustRadius reviews, GetApp, Software Advice, Gartner Peer Insights.

**Internal**
- [../SITE_CONTEXT.md](../SITE_CONTEXT.md); [../DECISION_LOG.md](../DECISION_LOG.md)
