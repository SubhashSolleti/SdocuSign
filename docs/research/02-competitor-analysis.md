# 02 — Competitor analysis: e-signature landing pages and positioning

Phase 2 (UX research), desk research. Prepared 2026-11-24. Context: [../SITE_CONTEXT.md](../SITE_CONTEXT.md), [../DECISION_LOG.md](../DECISION_LOG.md).

## How to read this document

- **Verified** means the page was fetched on 2026-11-24 and the text is quoted or closely paraphrased from it. Every verified claim has a URL.
- **Unverified** means the claim comes from a search-result summary, a third-party page, or inference, and is labelled as such.
- **Interpretation** sections are my own analysis. They are not facts about the vendor.
- Page fetches were text-only (WebFetch), plus raw HTML downloads with `curl` to check `lang`/`dir`, `hreflang` alternates, fonts and colour tokens. **No screenshots were taken**, so every "visual style" line is inferred from HTML/CSS cues and is marked unverified.
- Some sites serve content by geography. The fetcher was served an **India** edition of Zoho Sign and **EUR** pricing on Adobe; this is noted where it applies.
- Quotes are exact strings from the fetched pages. Statistics are the vendors' own claims, not independently checked.

---

## 1. Global competitors

### 1.1 Docusign — https://www.docusign.com/

**Verified (fetched 2026-11-24)**
- **Hero:** "AI-powered agreement management". Subhead: "Analyze agreements with AI, sign documents electronically, and automate workflows" with the Intelligent Agreement Management (IAM) platform. [docusign.com](https://www.docusign.com/)
- **Navigation:** Products, Solutions, Resources, Enterprise, Plans & Pricing. A utility bar has sales phone, Support, Search, Access Documents.
- **CTAs:** hero "Explore Docusign IAM"; closing section "Start for Free" + "Explore Docusign IAM"; also "View Plans and Pricing".
- **Lead features:** the IAM platform, CLM, Iris (AI), Agreement Preparation, Agreement Manager, eSignature, Agents, Electronic Notarization, Workflow Builder, Web Forms, App Center, MCP Connectors, APIs. eSignature is one item among many.
- **Trust signals:** "1 billion people and 1.9 million customers use Docusign"; "95% of Fortune 500 companies use Docusign."; "44 languages available for signers, plus 14 for senders"; Newsweek "No. 1 most trustworthy software company in America"; "Leader in 2026 IDC MarketScape for Signing Workflows". Badges: ISO 27001, FedRAMP, APEC PPP, CSA STAR, PCI DSS, SSAE 18. Logo wall (United, Santander, Unilever, Canva, Apple, Kroger, Domino's and others). Four customer stories with metrics (for example Unilever: 50% less contract completion time).
- **Arabic:** the marketing site has **no Arabic edition**. Its `hreflang` alternates cover de, en (9 variants), es, fr, it, ja, nl and pt; none is Arabic and none is Middle East. Arabic is a **signer** language (one of 44) but not a **sender** language (one of 14). [docusign.com/en-gb/how-it-works/global](https://www.docusign.com/en-gb/how-it-works/global)
- **UAE/KSA:** the UAE and Saudi legality pages describe the laws (UAE Decree-Law 46/2021, TDRA-approved QTSPs) but **do not say which signature types Docusign offers there, and do not mention UAE PASS or Nafath**. [UAE](https://www.docusign.com/how-it-works/legality/global/the-united-arab-emirates), [KSA](https://www.docusign.com/how-it-works/legality/global/saudi-arabia)
- **UAE PASS:** a 2025 Docusign Community thread asks how to enforce UAE PASS signing; the reply does not confirm a native integration. [community.docusign.com](https://community.docusign.com/general-discussion-145/how-to-enforce-uae-pass-signature-in-docusign-envelopes-25069). *(Absence of evidence, not proof of absence.)*

**Pricing (unverified):** the official pricing page (ecom.docusign.com) **could not be fetched** (the request aborted twice). A search summary cites the US store at Business Pro $45/user/month on an annual commitment, and third-party sites put Personal at about $10–15 and Standard at about $25–45. [search source: ecom.docusign.com](https://ecom.docusign.com/plans-and-pricing/esignature). Treat as unverified.

**Visual style (unverified, from HTML):** a proprietary typeface ("DSIndigo"), white theme colour, a Next.js site. The page is heavy with logo walls and customer-metric cards.

**Interpretation**
- *Strengths:* overwhelming scale proof, a deep compliance badge set, a mature self-serve funnel.
- *Weaknesses for GCC buyers:* no Arabic marketing site, nothing on its homepage or UAE page about UAE PASS, data residency in the region, or on-prem. It now positions itself as an "agreement management" AI platform, so pure signing is a sub-feature.
- *Opportunity for Signora:* "Docusign-class signing, but on your servers, in Arabic, with UAE PASS" is a concrete contrast. Do not compete on scale numbers; compete on control and locality.

### 1.2 Adobe Acrobat Sign — https://www.adobe.com/acrobat/business/sign.html

**Verified (fetched 2026-11-24; served with EUR pricing)**
- **Hero:** "Do business faster with eSign features from Acrobat." Subhead: "With Adobe Acrobat Pro and AI Assistant, everyone in your small business has trusted tools to edit and sign PDFs…" [adobe.com](https://www.adobe.com/acrobat/business/sign.html)
- **Navigation:** Acrobat for business, Products, Solutions, Resources, For admins, Compare plans, Contact Sales, Buy now, Sign in.
- **CTAs:** primary "Free trial" / "Buy now"; secondary "See plans and pricing".
- **Lead features:** collect signatures, PDF tools, AI productivity, track and manage, fill and sign, forms, custom branding, admin console. Signing is sold **bundled into Acrobat** and aimed at small businesses on this page.
- **Trust signals:** "More than 320 billion PDFs were opened or created with Acrobat in the last 12 months"; "more than 8 billion documents have been signed"; "trusted by Fortune 500 companies and small businesses". No logos, testimonials or compliance badges in the page text.
- **Pricing:** fully transparent: €29.02/mo hero offer; Acrobat Pro for teams €23.99/mo per licence; Acrobat Studio for teams €30.24/mo per licence (excl. VAT, annual billed monthly).
- **Arabic:** an **Arabic marketing page exists** at [adobe.com/ara/acrobat/business/sign.html](https://www.adobe.com/ara/acrobat/business/sign.html), headline "توقيع المستندات رقميًا وإدارة كل مستندات PDF لديك من مكان واحد". It does not mention the UAE, KSA or UAE PASS. (Note: `curl` received a short redirect body for both URLs, so RTL layout was not confirmed from the HTML.)
- **Regional history:** a 2019 Adobe blog post says the UAE TRA certified Acrobat DC and Adobe Sign for electronic and digital signatures. [blog.adobe.com (2019)](https://blog.adobe.com/en/publish/2019/08/14/adobe-becomes-broadest-certified-signature-service-provider-in-the-uae)

**Unverified:** the Acrobat Sign multilanguage help page returned HTTP 403. A search summary says recipients choose from 34 languages, and an Adobe community reply (Sep 2025) says Arabic is not among the recipient email languages. [helpx.adobe.com](https://helpx.adobe.com/sign/using/multilanguage-sending-signing.html), [community.adobe.com](https://community.adobe.com/t5/adobe-acrobat-sign-discussions/how-to-change-the-language-of-adobe-sign-emails-sent-to-customers-to-arabic/m-p/15522309)

**Visual style:** not assessed (the HTML was a redirect stub).

**Interpretation**
- *Strengths:* the PDF brand, price transparency, an Arabic marketing page.
- *Weaknesses:* the page sells Acrobat, not a signing workflow; the hero targets SMBs; no national-ID or residency story.
- *Opportunity:* Signora's seal-per-signer and offline verification are "PDF-native trust" claims that Adobe owns by default. Signora should show the sealed PDF opening in Acrobat with a valid signature panel (using a CA-issued key) as proof.

### 1.3 Dropbox Sign — https://sign.dropbox.com/

**Verified (fetched 2026-11-24)**
- **Hero:** "Simplify eSignatures for every team". Subhead: "Dropbox Sign makes it easy to send, sign, and manage agreements without the extra complexity—so work can move faster from request to signature." [sign.dropbox.com](https://sign.dropbox.com/)
- **Navigation:** Why Dropbox Sign?, What you can do, Use cases, Products, Resources, Developers, Pricing, Contact sales, Sign up, Sign in, Free trial.
- **CTAs:** primary "Start a 30-day free trial"; secondary "Get a demo".
- **Lead features:** "Fits into existing workflows", "Start in minutes", "Work across departments", "Secure by design"; templates, fill and sign PDFs.
- **Trust signals:** "4.7/5 G2 rating"; badges by alt text: CPA, HIPAA, "Sky High Enterprise Ready", ISO 9001. No customer logos or testimonials in the text. Promo: "Switch to Dropbox Sign and save up to $25,000".
- **Pricing (on homepage):** "Starts at $15 / user / month (billed yearly)"; API "Starts at $75 / 50 requests / month". Pricing page: Essentials $15/mo monthly or $10.05/mo yearly; Standard $25/user/mo or $17.50 yearly; Premium "Contact sales"; 30-day trials. [pricing](https://sign.dropbox.com/products/dropbox-sign/pricing)
- **Arabic:** the marketing site has 23 `hreflang` alternates (da, de, es, fr, id, it, ja, ko, ms, nb, nl, pl, pt, ru, sv, th, uk, zh and others) and **none is Arabic**. Help docs list Hebrew but not Arabic for text fields. [help.dropbox.com](https://help.dropbox.com/view-edit/supported-languages-text-fields-dropbox-sign)

**Visual style (unverified):** a Webflow-built site with light, simple sections.

**Interpretation:** a simplicity and price play for SMB teams. It is not a direct threat in GCC government, but it sets the expectation that **price and trial length are on the homepage**.

### 1.4 Zoho Sign — https://www.zoho.com/sign/

**Verified (fetched 2026-11-24)**
- **Global hero** (fetched with `?zredirect=f`): "Sign, Paperless." Subhead: "A complete electronic signature digital signature solution for fast-growing businesses." [zoho.com/sign](https://www.zoho.com/sign/?zredirect=f)
- The default URL was geo-served the **India edition**: "Secure document signing for Indian businesses" (Aadhaar, eMudhra, IT Act 2000). [zoho.com/sign](https://www.zoho.com/sign/)
- **Saudi edition:** "A secure and robust digital signing solution for Saudi Arabian businesses", citing Vision 2030, partner **emdha** (a CST-licensed, DGA-regulated TSP) and **Nafath** signer verification. Stats are localised: "SAR 120+ saved per envelope". [zoho.com/en-sa/sign](https://www.zoho.com/en-sa/sign/)
- **Arabic edition:** [zoho.com/ar/sign/](https://www.zoho.com/ar/sign/) is served `lang="ar" dir="rtl"`, with headline "وقِّع دون أوراق." (an Arabic version of "Sign, Paperless.").
- **Saudi data centre:** an Arabic Zoho article says Zoho Sign launched through a new Zoho data centre in Saudi Arabia, with emdha and Nafath. [zoho.com/ar-mea](https://www.zoho.com/ar-mea/techbizz/saudi-arabia-zoho-sign-integration.html)
- **CTAs:** "Get Started Now" (primary), "Contact Sales" (secondary), "Watch overview", "Start my free 14-day trial", "Request Demo".
- **Lead features:** sign, configure workflows, track status; branding, bulk send, templates; premium QES, SignForms, blockchain timestamping, payments.
- **Trust signals:** "80% faster document turnaround time", "$30 saved per envelope", "50 hours saved on average per employee"; named individual testimonials; no logo wall identified.
- **Pricing:** tiers Free / Standard / Professional / Enterprise are listed, but **amounts are rendered client-side and did not appear in the fetch**. Free = 1 user, 5 envelopes/month; trial 14 days, no card. [pricing](https://www.zoho.com/sign/pricing.html)
- **UAE:** the UAE legality page names timestamp partners "GlobalSign and Seiko" and Decree-Law 46/2021, but **does not mention UAE PASS or UAE hosting**. A `/en-ae/sign/` page returned 404. [zoho.com UAE legality](https://www.zoho.com/sign/electronic-signatures/legality/united-arab-emirates.html)

**Visual style:** not assessed beyond the Zoho site template.

**Interpretation**
- *Strengths:* the clearest example of **country-localised landing pages** (India, KSA, AU), each with the national ID scheme, the local TSP and local-currency savings. It has Arabic RTL and a KSA data centre.
- *Weaknesses:* no UAE PASS story found; a generic SMB tone; mass-market testimonials from unrelated countries appear on the Saudi page.
- *Opportunity:* Zoho shows the template ("national ID + local TSP + local data") works. Signora can own the **UAE** version of it, where Zoho has nothing.

### 1.5 PandaDoc — https://www.pandadoc.com/

**Verified (fetched 2026-11-24)**
- **Hero:** "Growing your business starts with your agreements". Subhead: "From creation to e-sign and beyond, PandaDoc gives your team the tools to stay ahead of every stage of the deal." [pandadoc.com](https://www.pandadoc.com/)
- **Navigation:** Product, Solutions, Integrations, Resources, API, Pricing.
- **CTAs:** primary "Request a demo"; secondary "Start a trial".
- **Lead features:** Create, Collaborate, Automate, Sign, Analyze, Get paid; CPQ, Rooms, Smart content.
- **Trust signals:** logos (Autodesk, Bosch, HP, Rakuten, Tata Steel, Sysco, U-Haul and others); metric case studies (Nomad "92%" less proposal time; WizeHire "46x faster to get a signature compared to Docusign"); badges HIPAA, AICPA SOC, GDPR, AWS, eIDAS; "E-SIGN, UETA, HIPAA compliant, and SOC 2 certified."
- **Pricing:** Free $0 (5 docs/month); Starter $25/seat/mo annual ($45 monthly); Business $49 annual ($65 monthly); Enterprise "Let's talk". Trial 14 days. [pricing](https://www.pandadoc.com/pricing/)
- **Arabic:** `/ar/` returns "Not Found". `curl` was blocked by a Vercel security checkpoint, so `hreflang` could not be checked. **No Arabic site found** (unverified beyond that).

**Interpretation:** sales-document and revenue positioning, aimed at sales teams. It shows the "named competitor comparison" pattern (it names Docusign in a stat). It is low overlap with government buyers.

### 1.6 Yousign → now **Youtrust** (EU sovereignty angle) — https://youtrust.com/

**Verified (fetched 2026-11-24)**
- **Rebrand:** yousign.com returns 301 to youtrust.com; the banner reads "New Yousign becomes Youtrust"; the page title is "Youtrust (Yousign) • eSignature & Identity Verification". [youtrust.com](https://youtrust.com/)
- **Hero:** "One platform to verify and sign your documents". Subhead: "European, certified, and fully adaptable to your business needs, to verify, protect, and sign your documents."
- **Navigation:** Solutions, Products, API, Resources, Pricing, Contact us; Help Center, Login.
- **CTAs:** primary "Contact us"; secondary "Discover eSignature / Verify / the electronic seal"; closing "Start your free 14-day trial".
- **Lead features:** e-signature, identity and document **verification** (AI fraud detection, risk scoring), **electronic seal**, end-to-end journeys with a "Trust Score", "progressive integration of European digital identities", and interaction with AI assistants (ChatGPT, Claude, Mistral).
- **Trust signals:** "More than 30,000 beloved customers in Europe"; logos (Allianz, Betclic, Fnac-Darty, Payfit, Qonto and others); 283k users in 2024; 83 countries; "75% of documents signed within an hour"; G2 4.5/5 with Leader/High Performer badges; ANSSI, eIDAS, "Certification authority", "Trusted Third party"; data hosted in Europe, headquartered in France, "Made in Europe", B Corp.
- **Pricing:** App "From €9 excl. VAT / month per user"; API "From €106 excl. tax / month".
- **Languages:** en, de, es, fr, it (`hreflang`). No Arabic.

**Interpretation**
- This is the closest analogue to Signora's positioning: **sovereignty + certification + seal** as the hero, not "easy signing". It names its origin ("European", "Made in Europe") and its regulator (ANSSI).
- The move from "sign" to "verify and sign" (identity) mirrors the market trend.
- *Opportunity:* Signora could use the same structure with regional terms, for example "Emirati-built, on your servers", as long as the claims are accurate (see §5 on the advanced vs qualified wording).

---

## 2. Regional competitors (GCC/MENA)

Selection: vendors that verifiably exist and sell e-signature in the UAE or KSA. The UAE has fewer pure-play local vendors with live marketing sites than KSA does.

### 2.1 Signit (Saudi Arabia) — https://signit.sa/en/

**Verified (fetched 2026-11-24)**
- **Hero:** "The platform for contract management & eSignatures". Subhead: "Licensed by DGA. Trusted by 700+ organizations. Powered by AI". Title tag: "Saudi Arabia's Leading E-Signature & Contract Management Platform". [signit.sa/en](https://signit.sa/en/)
- **Arabic hero:** "الحل الشامل لإدارة عقودك وتوقيعك رقمياً." Served `lang="ar" dir="rtl"`; a full Arabic site with an "عربي/EN" toggle in the nav. [signit.sa/ar](https://signit.sa/ar/)
- **Navigation:** Product, Solutions, Pricing, Resources, Company, عربي, Sign in, Request Demo, Get Started.
- **CTAs:** primary "Request Demo"; also "Start Free Trial", "Talk to our experts".
- **Trust signals:** a government and enterprise logo wall (PIF, Roshn, NUPCO, Humain, Mawani, Ministry of Investment, GOSI, Royal Commission for Riyadh City, General Authority for Statistics and others); partner badges Nafath, Absher, Wathq; "Licensed by DGA"; ISO 27001, ISO 22301, PDPL, NCA ECC; stats "10x faster contract completion", "60%" less time, ">400%" ROI; named testimonials (ARX, Alraedah Finance, Lendo, Mithaq Law). Footer: "Made in Saudi 🇸🇦".
- **Lead features (e-signature page):** "The Saudi Digital Signature Platform"; Nafath produces "a certificate issued in the signer's own name"; other methods (email/SMS/WhatsApp OTP/Absher) are sealed with "Signit eSeal"; "Arabic-first interface with full bilingual support"; "data hosted locally"; API-first, embeddable. **Time stamping, on-prem and the signature level (advanced vs qualified) are not stated.** [signit.sa/en/esignature](https://signit.sa/en/esignature)
- **Pricing:** plan names only (eSignature, CLM); **no prices** on the page; it states "Data hosted in Saudi Arabia, fully PDPL compliant". [signit.sa/en/pricing](https://signit.sa/en/pricing)
- **Company:** a $15M Series A on 22 Apr 2026, led by Raed Ventures (with STV and others); founded 2021; "more than 700 customers across government and enterprise"; moving into AI CLM; licensed as a TSP by DGA. [wamda.com](https://www.wamda.com/2026/04/signit-raises-15-million-series-a-led-raed-ventures). DGA licence also reported at [signit.sa](https://signit.sa/en/signit-secures-dga-trust-license/) and [securitymea.com](https://securitymea.com/2024/12/20/signit-secures-comprehensive-digital-trust-provider-license-in-ksa/).

**Visual style (unverified, from HTML):** Inter typeface, indigo theme colour `#6366f1`, zinc/near-black neutrals (`#18181b`), dashboard screenshots, a grid background, a logo carousel. It is a modern SaaS template, close to the generic look the Signora redesign wants to leave (DECISION_LOG D4).

**Interpretation:** the strongest regional landing page found. It combines a licence, a government logo wall, national ID partners (Nafath/Absher/Wathq), a local-hosting statement and a native Arabic site. It is Saudi-only for now (the Wamda article mentions no UAE expansion). It is the benchmark for what a GCC buyer will expect to see.

### 2.2 Sadq / صادق (Saudi Arabia) — https://sadq.sa/

**Verified (fetched 2026-11-24)**
- **Default language is Arabic:** served `lang="ar" dir="rtl"`; H1 "صادق - منصة التصديق الإلكتروني | Sadq E-Signature Platform"; meta "…وقّع العقود والوثائق قانونياً، تحقق من الهوية عبر نفاذ (KYC)…". [sadq.sa](https://sadq.sa/)
- **English hero:** "Sign and manage any document. Legally. In seconds." [sadq.sa/en](https://sadq.sa/en)
- **Navigation:** Solutions (Sadq CLM, Sadq Lens, Sadq Room, Sadeed Sadq AI, API), Features, Pricing, Why Us, Blog, Contact Us, Login, Get Started, EN/ع toggle.
- **CTAs:** "Find Your Plan" + "Book a demo" (hero); "Try it free, takes 60 seconds"; "Create Your Free Account"; for developers, "Read the API docs" / "Talk to an engineer".
- **Trust signals:** "Built in Saudi Arabia · Licensed by the DGA"; "Hosted in Saudi Arabia on Oracle Cloud"; badges "Court-admissible", "DGA-licensed", ISO 27001, NCA; Nafath, Wathq, Absher logos; 27 client logos including Ministry of Culture, Ministry of Education, Ministry of Sport, Saudi Red Crescent Authority, Alinma, Foodics. **The stat counters rendered as "0M+ Documents signed", "0K+ Clients", "0min"** in the fetched text (JavaScript counters, the same defect as Signora's V8 in the decision log).
- **Developer:** REST API, webhooks, sandbox, SDKs for Node, Python, PHP.
- **Pricing (transparent):** Essential SAR 1,200/user/year; Professional SAR 2,000/user/year ("Most Popular"; includes Nafath); Advanced custom. Includes a 3-question plan-finder quiz.
- **Partnership:** Tamkeen Technologies (a DGA-licensed comprehensive TSP) announced a strategic partnership with Sadq (Aug 2026). [tamkeentech.sa](https://tamkeentech.sa/media-center/tamkeen-technologies-becomes-a-strategic-partner-with-sadq-to-advance-digital-trust)

**Visual style (unverified, from HTML):** IBM Plex Sans Arabic, green theme `#027b29`, Bootstrap components. The site says it is "best on desktop", with a mobile version in progress.

**Interpretation:** Arabic-first by default, with price transparency and a developer track. Shows that a regional player can publish prices in local currency.

### 2.3 emdha (Saudi trust service provider) — https://emdha.sa/

**Verified (fetched 2026-11-24)**
- **Hero:** "Your documents, signed in seconds." Supporting line: "Discover the most secure, efficient and legal way to sign your documents." [emdha.sa](https://emdha.sa/)
- **Navigation:** Why Digital Signature?, Services, Repository, Partners, About, Resources, Contact.
- **CTAs:** "Buy eSign", "Get Started" (per service).
- **Trust signals:** "the first company in Saudi Arabia licensed by CST…, regulated by DGA… and certified by WebTrust for Certification Authorities"; ISO 9001/20000/22301/27001/27701; Asia PKI, FIDO Alliance, Cloud Signature Consortium memberships; "48813084 +" certificates issued; "184 +" clients; logos (Al Rajhi Bank, SNB, ANB, SAIB, Mobily, Saudi Electricity Company, Thiqah, PwC and others).
- **Services:** Digital Signature, eSign Authenticator, Workflow Based Signing; Nafath identity step; remote signing; REST API. [emdha.sa/emdha-digital-signature](https://emdha.sa/emdha-digital-signature)
- **Arabic:** no Arabic switcher or Arabic links were found in the homepage text or HTML (`lang="en"`). *Unverified whether an Arabic site exists elsewhere.*
- **Pricing:** none on the homepage ("Buy eSign" links to plans).
- **Partner of Zoho Sign** for KSA (verified on Zoho's KSA page above).

**Interpretation:** a PKI-first TSP whose landing page leads with **licences and certificate counts**, not user experience. It is a channel and infrastructure player (it powers Zoho in KSA) rather than a UX competitor. The lesson for Signora: in this market, **accreditation is the hero content**.

### 2.4 eMudhra emSigner (India-headquartered, UAE-hosted edition) — https://emudhra.com/en-ae/emsigner/

**Verified (fetched 2026-11-24)**
- **UAE edition hero:** "From Paper to Paperless—In Minutes". Subhead: "Sign, seal, and send documents faster than ever—with emSigner's secure digital workflows." [emudhra.com/en-ae/emsigner](https://emudhra.com/en-ae/emsigner/). (The India edition headline is "From Paper to Paperless—with full legal validity".)
- **Navigation:** Features, Use Cases, Platform, API & Integration, Pricing, Knowledge Hub, Partners, Contact Us, All Products, Login. Region selector: Global/India; `hreflang` includes en-ae, en-ke, en-my, en-ph, en-us.
- **CTAs:** "See Pricing", "Get Started", "Visit Developer's Portal", "Contact Us".
- **Trust signals:** "1 billion+ docs signed securely"; "10,000+ customers"; "15+ years"; Gartner 4.4 (94 reviews), G2 4.7 (65); "the only Indian vendor recognized by Gartner as a 'Global, Full-Service, Enterprise' workflow platform"; CMMI, ISO 27001/27018/37001/14001, HIPAA, SOC 2, GDPR.
- **UAE page gaps:** the UAE landing page **does not mention UAE PASS, UAE hosting, Arabic or TDRA**. Pricing is shown in USD ("from $10/user per month").
- **UAE PASS (elsewhere):** a blog post dated 23 Feb 2026 says "emSigner (UAE) operates on infrastructure fully hosted within the UAE" and uses UAE PASS for login and signing. [emudhra.com blog](https://emudhra.com/en/blog/uae-pass-emsigner-digital-signatures-uae). The docs describe enabling a "UAE PASS" signature type per user and per participant, with UAE PASS audit details embedded in the document; no signature level is stated. [docs.emsigner.com](https://docs.emsigner.com/types-of-esignatures/united-arab-emirates)

**Visual style (unverified):** DM Sans typeface; a corporate enterprise-software template.

**Interpretation:** this is the most direct UAE PASS signing competitor with a UAE-hosted claim, but **its UAE landing page buries it**: the UAE PASS and residency story lives in a blog and in docs. That gap is exactly what Signora's landing page can fill.

### 2.5 DigitalTrust — DTSigner (Abu Dhabi) — digitaltrust.ae (status unclear)

**Verified**
- A press release describes DTSigner as an enterprise digital signature and document-workflow application from Abu Dhabi's DigitalTrust: "The platform provides integration to the UAE PASS national digital identity"; cloud or on-premise; "the only digital signature solution provided as a service that is compliant for UAE data-sovereignty purposes" (a vendor claim). The release is undated in the fetched text. [zawya.com](https://www.zawya.com/en/press-release/abu-dhabis-digitaltrust-launches-uaes-first-home-grown-enterprise-digital-signature-platform-sgpp9rjq)
- **Website could not be verified:** on 2026-11-24, `https://www.digitaltrust.ae/` returned a 301 redirect to an **unrelated personal domain**. The redirect was not followed. The App Store listing (publisher shown in search results as KATIM LLC) returned 404. The Gulf Business article returned 403.

**Unverified:** the corporate relationship between DigitalTrust and KATIM, and whether DTSigner is still sold. Search summaries say DigitalTrust described itself as a TRA-appointed operator of the UAE National PKI. [gulfbusiness.com](https://gulfbusiness.com/?p=170560)

**Interpretation:** it was historically the closest UAE analogue to Signora (home-grown, UAE PASS, on-prem option, sovereignty). Its marketing presence now appears inactive, which leaves the "UAE-built, on-prem, UAE PASS" position **open in public**. Validate with sales before claiming "the only".

### 2.6 Cygnature (Cygnet Infotech; India-based, sells in UAE) — https://www.cygnature.io/

**Verified (fetched 2026-11-24)**
- **Hero:** "The e-Signing Solution with Blockchain Security". Subhead: "Stand out with the top-rated solution for creating, managing, tracking, and eSigning every important document you handle." [cygnature.io](https://www.cygnature.io/)
- **Navigation:** Product (including "National ID E-Sign": UAE PASS, Aadhaar), Solutions, Integrations, Resources, About Us, "Select & Subscribe Plan".
- **CTAs:** "Book a demo", "Free Trial", "Buy from AWS".
- **UAE PASS page:** "Signing documents with UAE PASS"; "The UAE PASS signature is legally binding and is equally valid to a written signature."; requires a Cygnature subscription. No hosting, Arabic or signature level stated. [cygnature.io/uae-pass](https://www.cygnature.io/uae-pass/)
- **Arabic:** none found (`lang="en-US" dir="ltr"`, no Arabic alternates).

**Visual style (unverified):** Poppins and Open Sans, WordPress.

**Interpretation:** it treats UAE PASS as one national-ID option among several. It is a weak landing page for GCC enterprise (blockchain-led, no Arabic, no residency).

### Also noted (not profiled)
- **Tamkeen Technologies (KSA):** a DGA-licensed comprehensive digital trust provider (Dec 2024), with a signing hub; a seal product is marked "Soon" (unverified). [tamkeentech.sa](https://tamkeentech.sa/en/news/127)
- **Digital Dubai "Digital Sign":** a platform for Dubai government entities, not a commercial competitor (search summary only, unverified).
- **UAE PASS itself:** offers signing and eSeal to service providers through an API, with PAdES for PDF. [docs.uaepass.ae/faq](https://docs.uaepass.ae/faq)

---

## 3. Comparison matrix

Legend: ✔ = verified on the vendor's own site; ✖ = checked and not found; ? = not verifiable; *u* = unverified (third-party or search summary).

| Vendor | Hero headline (verified) | Primary CTA | Secondary CTA | Prices on site | Arabic marketing site | National ID on landing page | Residency / on-prem on landing page | Lead trust signal |
|---|---|---|---|---|---|---|---|---|
| Docusign | "AI-powered agreement management" | Explore Docusign IAM | Start for Free | ? (page failed; *u* $10–65) | ✖ (Arabic signer only) | ✖ | ✖ | Scale: 1.9M customers, 95% of Fortune 500 |
| Adobe Acrobat Sign | "Do business faster with eSign features from Acrobat." | Free trial / Buy now | See plans and pricing | ✔ (EUR) | ✔ /ara/ page | ✖ | ✖ | 8B docs signed; PDF brand |
| Dropbox Sign | "Simplify eSignatures for every team" | Start a 30-day free trial | Get a demo | ✔ ($15) | ✖ | ✖ | ✖ | G2 4.7/5 |
| Zoho Sign | "Sign, Paperless." (KSA: "…for Saudi Arabian businesses") | Get Started Now | Contact Sales | Tiers only (amounts not rendered) | ✔ /ar/ RTL | ✔ KSA page (Nafath via emdha); ✖ UAE PASS | KSA data centre (Arabic article) | Savings stats per country |
| PandaDoc | "Growing your business starts with your agreements" | Request a demo | Start a trial | ✔ ($25–49) | ✖ | ✖ | ✖ | Logos + metric case studies |
| Youtrust (ex-Yousign) | "One platform to verify and sign your documents" | Contact us | Discover… / 14-day trial | ✔ (€9) | ✖ | "European digital identities" (progressive) | ✔ EU hosting, sovereignty | ANSSI, eIDAS, "Made in Europe" |
| Signit (KSA) | "The platform for contract management & eSignatures" | Request Demo | Start Free Trial | ✖ (plans, no prices) | ✔ /ar/ RTL | ✔ Nafath, Absher, Wathq | ✔ hosted in KSA; on-prem ✖ | DGA licence + government logos |
| Sadq (KSA) | "Sign and manage any document. Legally. In seconds." | Find Your Plan | Book a demo | ✔ (SAR 1,200–2,000/user/yr) | ✔ Arabic is the default | ✔ Nafath | ✔ KSA, Oracle Cloud | DGA licence + ministries' logos |
| emdha (KSA TSP) | "Your documents, signed in seconds." | Buy eSign | Get Started | ✖ | ✖ (not found) | ✔ Nafath (service page) | ? | CST/DGA/WebTrust; 48.8M certs |
| emSigner UAE (eMudhra) | "From Paper to Paperless—In Minutes" | Get Started | See Pricing / Contact Us | ✔ (USD) | ✖ | ✖ on landing (✔ in blog/docs) | ✖ on landing (✔ blog: UAE-hosted) | 1B+ docs; Gartner/G2 |
| DTSigner (DigitalTrust) | ? (site redirects elsewhere) | ? | ? | ? | ? | *u* UAE PASS (press release) | *u* cloud or on-prem | ? |
| Cygnature | "The e-Signing Solution with Blockchain Security" | Book a demo | Free Trial | ✖ | ✖ | ✔ UAE PASS page | ✖ | Blockchain |
| **Signora (current)** | "Sign with a smile." | Request a trial | — | ✔ proposed AED | ✔ /ar/ RTL | ✔ UAE PASS (sign-in) | ✔ on-prem, keys in your KMS | Measured benchmarks; sample sealed PDF |

**Feature claims visible on the landing or product pages (verified only):**

| Claim | Docusign | Adobe | Dropbox | Zoho | PandaDoc | Youtrust | Signit | Sadq | emdha | emSigner | Signora |
|---|---|---|---|---|---|---|---|---|---|---|---|
| On-prem or customer-held keys stated | ✖ ("public, hybrid or private cloud" on the global page) | ✖ | ✖ | ✖ | ✖ | ✖ | ✖ | ✖ | ? | testimonial only | ✔ |
| Named signature standard (PAdES/LTV) on page | ✖ | ✖ | ✖ | ✖ | ✖ | ✖ | ✖ | ✖ | ✖ | ✖ | ✔ PAdES-B-LT |
| Offline / vendor-independent verification promised | ✖ | ✖ | ✖ | ✖ | ✖ | ✖ | ✖ | ✖ | ✖ | ✖ | ✔ |
| Published performance numbers | ✖ | ✖ | ✖ | ✖ | ✖ | ✖ | ✖ | ✖ | ✖ | ✖ | ✔ |
| Electronic seal | ✖ | ✖ | ✖ | ✖ | ✖ | ✔ | ✔ | "tamper-proof certificate" | stamp | "sign, seal" | ✔ |
| Customer logos | ✔ | ✖ | ✖ | ✖ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✖ |
| Price on site | ? | ✔ | ✔ | partial | ✔ | ✔ | ✖ | ✔ | ✖ | ✔ | ✔ |

"✖" here means "not found in the fetched homepage or product page text"; it does not mean the vendor lacks the capability.

---

## 4. Common patterns across competitors (interpretation, grounded in §1–§3)

1. **The category has moved past "e-signature".** Docusign ("agreement management"), PandaDoc ("agreements"), Signit and Sadq (CLM + AI), and Youtrust ("verify and sign") all frame signing as one step in a larger workflow. Only Dropbox Sign, emdha and Cygnature still lead with signing itself.
2. **The regional formula is: licence + national ID + local hosting + Arabic.** Signit, Sadq and Zoho KSA all put the regulator's name (DGA/CST), the national-ID logos (Nafath, Absher, Wathq) and "hosted in the Kingdom" above the fold or in the first section. This is now table stakes in KSA.
3. **Government logo walls are the strongest regional proof.** Signit and Sadq show ministries and authorities; emdha shows banks. Global vendors show Fortune 500 brands. Signora shows none (DECISION_LOG T1).
4. **A dual CTA is standard:** a sales CTA ("Request Demo", "Contact us", "Book a demo") plus a self-serve CTA ("Start Free Trial", "Get Started"). Enterprise- or regulated-focused vendors (Docusign, PandaDoc, Youtrust, Signit) make the **sales** CTA primary.
5. **Trial length is visible:** 14 days (Zoho, PandaDoc, Youtrust), 30 days (Dropbox Sign). Signora's 30-day on-prem trial is comparable but has a different shape, because it needs an install.
6. **Pricing transparency is split.** Global SMB tools and Sadq publish prices; licensed TSPs and enterprise vendors (Signit, emdha, Docusign Premium/Enterprise tiers) hide them.
7. **Nobody names the cryptography on the landing page.** Not one competitor homepage mentions PAdES, LTV, RFC 3161 time stamping, or long-term offline verification. They use outcome words instead: "legally binding", "court-admissible", "tamper-proof", "certified".
8. **Arabic is a differentiator for global vendors and a given for regional ones.** Among the global vendors, only Adobe (/ara/) and Zoho (/ar/, RTL) have Arabic marketing pages. Docusign, Dropbox Sign, PandaDoc and Youtrust do not.
9. **JavaScript counters fail.** Sadq's stats rendered as "0M+ / 0K+ / 0min" in the fetched text, the same defect logged for Signora (V8). Static numbers are safer.
10. **The visual default is the generic SaaS template:** Inter/DM Sans/Poppins, indigo or blue accents, dashboard screenshots, grid backgrounds, logo carousels (Signit, emSigner, Cygnature; unverified, from HTML). Sadq's IBM Plex Sans Arabic + green is the only regional site with a distinctly local typographic choice.

---

## 5. Gaps and differentiation opportunities for Signora (interpretation)

### Positions no competitor claims on its landing page
1. **"Runs on your servers; keys stay in your KMS."** No fetched competitor landing page claims on-prem with customer-held keys. Signit and Sadq claim in-country hosting, which is a weaker form of sovereignty than on-prem. DTSigner once claimed on-prem, but its site is not live. → Make **control** the hero idea for government buyers, for example "Signatures that never leave your data centre", rather than "Sign with a smile".
2. **"Verifiable without us, for years."** No competitor promises vendor-independent, offline, long-term verification. Signora can show it rather than claim it: a downloadable sealed sample PDF plus a public verify page (both already exist; DECISION_LOG K2). → Make "Verify a sealed document" a secondary CTA.
3. **Measured, not promised.** No competitor publishes performance tests with conditions. Signora's benchmarks (10,000 envelopes in 5 min 21 s; 998 concurrent signers with 0 errors) are unique. Translate them into buyer outcomes and keep them as static text.
4. **UAE-specific landing content.** Zoho's UAE coverage has no UAE PASS. emSigner's UAE page omits UAE PASS and residency. Docusign's and Adobe's UAE pages describe the law only. → A UAE-first page (UAE PASS, Decree-Law 46/2021, AED pricing, Arabic RTL, Hijri/GCC details from the platform) is open ground.
5. **Arabic-first parity.** Signora already has /ar/ with RTL. Make the language toggle prominent and make sure the Arabic hero is written natively, not translated (Sadq defaults to Arabic; Signit's Arabic hero is its own copy).
6. **Voice-guided signing on Android (Nora)** has no equivalent in any fetched competitor page. It is relevant to accessibility and to signers who are less used to digital forms. Show it as a signer benefit, not as an AI feature.

### Gaps where Signora is behind (risks to address on the page)
1. **Proof.** Every regional competitor shows a licence badge and customer logos. Signora has neither (T1). Interim substitutes: the AcuteSign migration path (implying an existing customer base, *if* sales confirms it can be referenced), named partners, a named team and office, and the security review (OWASP ASVS) with its "not done" list.
2. **Licence / accreditation.** KSA competitors lead with DGA/CST licences. Signora is **advanced, not qualified**, and is not a licensed TSP. Do not imitate their licence-led hero. Instead explain plainly which level Signora provides and when it is enough, and offer "use your CA-issued certificate" as the path to "issuer known".
3. **UAE PASS wording.** Competitors (emSigner, Cygnature, DTSigner) describe **signing with UAE PASS**. Signora's context describes UAE PASS as **signer sign-in / identity match**, with Signora's own PAdES seal, and the trial tested against a stand-in. The landing page must not imply UAE PASS signing. Suggested wording: "Signers prove who they are with UAE PASS." Confirm with product before publishing.
4. **No KSA story.** Signora has no Nafath integration and no KSA hosting. GCC-wide claims should be careful: "UAE first" is credible today; "GCC" needs a qualifier.
5. **CTA friction.** Signora's only conversion is an on-prem trial request. Competitors offer a low-effort sales CTA (demo or talk to an expert) next to the trial. Consider "Book a walkthrough" (primary for government) plus "Request the 30-day trial" plus "Verify a sample" (proof).
6. **Category framing.** Competitors are moving to CLM and agreement management. Signora's platform (TroveDocs, Diwan, Tameer) is a credible "beyond signing" story, but those products are unreleased. Mention them as roadmap, below the fold (DECISION_LOG D5).

### Suggested message hierarchy to test (hypothesis, not a decision)
- **Hero:** sovereignty and verifiability for UAE government and enterprise. For example: "E-signatures that stay in your data centre and verify without us." Sub: PAdES-B-LT seal per signer, UAE PASS, Arabic and English.
- **Proof strip:** sealed sample + verify link; measured numbers; security review; (logos when available).
- **"Questions to ask any e-signature vendor" table:** keep it, because it maps directly onto the competitor gaps above (where keys live, offline verification, signature level, national ID, Arabic, published measurements). Rewrite it so it never names a competitor or makes a claim about one that cannot be backed by a citation.

---

## 6. Sources

All accessed 2026-11-24.

**Global**
- Docusign home — https://www.docusign.com/
- Docusign global languages — https://www.docusign.com/en-gb/how-it-works/global
- Docusign UAE legality — https://www.docusign.com/how-it-works/legality/global/the-united-arab-emirates
- Docusign KSA legality — https://www.docusign.com/how-it-works/legality/global/saudi-arabia
- Docusign Community (UAE PASS thread) — https://community.docusign.com/general-discussion-145/how-to-enforce-uae-pass-signature-in-docusign-envelopes-25069
- Docusign pricing (fetch failed; search summary only) — https://ecom.docusign.com/plans-and-pricing/esignature
- Adobe Acrobat Sign — https://www.adobe.com/acrobat/business/sign.html
- Adobe Acrobat Sign (Arabic) — https://www.adobe.com/ara/acrobat/business/sign.html
- Adobe UAE certification blog (2019) — https://blog.adobe.com/en/publish/2019/08/14/adobe-becomes-broadest-certified-signature-service-provider-in-the-uae
- Adobe multilanguage help (403; search summary only) — https://helpx.adobe.com/sign/using/multilanguage-sending-signing.html
- Adobe community, Arabic emails — https://community.adobe.com/t5/adobe-acrobat-sign-discussions/how-to-change-the-language-of-adobe-sign-emails-sent-to-customers-to-arabic/m-p/15522309
- Dropbox Sign home — https://sign.dropbox.com/
- Dropbox Sign pricing — https://sign.dropbox.com/products/dropbox-sign/pricing
- Dropbox Sign text-field languages — https://help.dropbox.com/view-edit/supported-languages-text-fields-dropbox-sign
- Zoho Sign global — https://www.zoho.com/sign/?zredirect=f
- Zoho Sign (geo-served India edition) — https://www.zoho.com/sign/
- Zoho Sign KSA — https://www.zoho.com/en-sa/sign/
- Zoho Sign Arabic — https://www.zoho.com/ar/sign/
- Zoho KSA data centre article (Arabic) — https://www.zoho.com/ar-mea/techbizz/saudi-arabia-zoho-sign-integration.html
- Zoho Sign UAE legality — https://www.zoho.com/sign/electronic-signatures/legality/united-arab-emirates.html
- Zoho Sign pricing — https://www.zoho.com/sign/pricing.html
- PandaDoc home — https://www.pandadoc.com/
- PandaDoc pricing — https://www.pandadoc.com/pricing/
- Youtrust (formerly Yousign) — https://youtrust.com/ (redirected from https://yousign.com/)

**Regional**
- Signit (EN) — https://signit.sa/en/
- Signit (AR) — https://signit.sa/ar/
- Signit e-signature — https://signit.sa/en/esignature
- Signit pricing — https://signit.sa/en/pricing
- Signit DGA licence — https://signit.sa/en/signit-secures-dga-trust-license/
- Signit DGA licence (press) — https://securitymea.com/2024/12/20/signit-secures-comprehensive-digital-trust-provider-license-in-ksa/
- Signit Series A (Wamda) — https://www.wamda.com/2026/04/signit-raises-15-million-series-a-led-raed-ventures
- Sadq (AR) — https://sadq.sa/
- Sadq (EN) — https://sadq.sa/en
- Tamkeen × Sadq partnership — https://tamkeentech.sa/media-center/tamkeen-technologies-becomes-a-strategic-partner-with-sadq-to-advance-digital-trust
- Tamkeen DGA licence — https://tamkeentech.sa/en/news/127
- emdha home — https://emdha.sa/
- emdha Digital Signature — https://emdha.sa/emdha-digital-signature
- emSigner UAE — https://emudhra.com/en-ae/emsigner/
- emSigner India — https://emudhra.com/en-in/emsigner/
- emSigner + UAE PASS blog (23 Feb 2026) — https://emudhra.com/en/blog/uae-pass-emsigner-digital-signatures-uae
- emSigner UAE docs — https://docs.emsigner.com/types-of-esignatures/united-arab-emirates
- DigitalTrust DTSigner press release — https://www.zawya.com/en/press-release/abu-dhabis-digitaltrust-launches-uaes-first-home-grown-enterprise-digital-signature-platform-sgpp9rjq
- DigitalTrust (Gulf Business; 403, search summary only) — https://gulfbusiness.com/?p=170560
- digitaltrust.ae (redirects to an unrelated domain; not followed) — https://www.digitaltrust.ae/
- Cygnature home — https://www.cygnature.io/
- Cygnature UAE PASS — https://www.cygnature.io/uae-pass/
- UAE PASS developer FAQ — https://docs.uaepass.ae/faq

**Internal**
- Signora context — ../SITE_CONTEXT.md
- Decision log (visual and trust audit) — ../DECISION_LOG.md
