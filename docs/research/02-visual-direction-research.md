# 02 — Visual direction research: from "AI-generated" to a credible, human identity

Phase: 2 (UX research), visual-direction track. **This is research only.** Under decision D7 in [DECISION_LOG.md](../DECISION_LOG.md), no visual decision is made until Phase 6. The three directions in §6 are hypotheses to discuss.
Date: 2026-11-24. Desk research only (D6).

**How to read this document**
- **Fact** = stated by a cited source, or measured here. Contrast ratios were computed with the WCAG 2.x relative-luminance formula. The UAE Design System colour tokens were read from its live CSS.
- **Opinion** = my judgement. It is always labelled *(Opinion)*.
- **Site descriptions** in §2 come from headless Chrome screenshots at 1440×900, taken 2026-11-24, plus the cited sources. Sites change; re-check before quoting them.
- **Working default W4** applies: free or open-source fonts by default. Commercial fonts are listed for comparison only.

---

## 0. Summary

1. **The current site matches almost every published "AI slop" tell.** These are a dark navy hero with glow and haze; a sans in the Inter/Geist family; the same eyebrow → heading → grey subtitle → identical-card rhythm in every section; status pills; fake app windows; a sparkle "AI" icon; and no people. Anthropic's own write-up names "Inter fonts, purple gradients on white backgrounds" as what an LLM produces with no guidance. Critics list identical card grids, glow, gradient haze, kicker labels and status-chip soup as tells (§1).
2. **The most useful counter-move is to be specific, not to adopt a different trendy style.** The common thread in Harvey, Stripe Press, GOV.UK, Thmanyah, Tabby and Foodics is content that could only belong to them: their own product, their own people, their own script and their own objects (§2). The "warm beige + italic serif" look that many teams swing to is itself now catalogued as an AI tell ("AI beige", "italic serif" in Paul Bakaus's Impeccable).
3. **Typography: drop the Inter look; choose a type system that is Arabic-led.** The strongest free option is IBM Plex Sans Arabic + IBM Plex Sans (OFL, one superfamily, designed as a pair). An editorial alternative pairs Markazi Text (an OFL Naskh with its own Latin) for display with Plex for UI. The commercial benchmarks are Commercial Type's Lyon Arabic and Graphik Arabic, and 29LT Zarid (§3).
4. **Colour: light-first fits this audience better.** The evidence is NN/g, studies of older adults, the UAE Design System's white default, and the fact that documents are paper. Avoid the indigo/cobalt that Docusign owns. The UAE national palette (gold, green, red, black) is available and has published contrast rules. AE Gold #B68A35 fails body-text contrast on white; the system's own component gold #90702A passes (§4).
5. **Imagery: show the real product and the real sealed PDF; photograph real people and places in the region; use the seal as the brand's motif, not as clip art.** Baymard found abstract UI graphics performed worse than screenshots. NN/g found users ignore generic stock people (§5).
6. **Three hypotheses to discuss:** "Ink & Seal" (documentary, paper), "Civic Standard" (utility, compatible with the UAE Design System) and "Majlis Daylight" (human, photographic, regional) (§6).

---

## 1. The anatomy of the "AI-generated" or generic SaaS look

### 1.1 What published critics and practitioners say (2025–2026)

| Source | Date | What it names |
|---|---|---|
| Anthropic Applied AI team, ["Improving frontend design through Skills"](https://claude.com/blog/improving-frontend-design-through-skills) | 12 Nov 2025 | Without guidance an LLM "will almost always conform to Inter fonts, purple gradients on white backgrounds, and minimal animations". It warns against "Clichéd color schemes", "Predictable layouts and component patterns" and "Cookie-cutter design that lacks context-specific character". It also notes that models drift to Space Grotesk once Inter is banned. |
| Alan West, ["Why every AI-built website looks the same: blame Tailwind's indigo-500"](https://dev.to/alanwest/why-every-ai-built-website-looks-the-same-blame-tailwinds-indigo-500-3h2p) (DEV) | 2025 | Tailwind UI's `bg-indigo-500` spread through templates into training data: "the defaults were purple and most people never changed them". It follows Adam Wathan's joking apology on X on 7 Aug 2025 ([AIbase report](https://news.aibase.com/news/20365)). |
| Pragnesh Gajjar, ["Why your AI keeps building the same purple gradient website"](https://prg.sh/ramblings/Why-Your-AI-Keeps-Building-the-Same-Purple-Gradient-Website) | 26 Oct 2025 | Purple/indigo gradients; Inter/Roboto/Arial (and Space Grotesk); three boxes with icons; "timid, evenly distributed" palettes; a centred hero with one CTA; rounded corners and soft shadows on everything; generic fade-ins. |
| Daniel Schwarz, ["Linear design"](https://blog.logrocket.com/ux-design/linear-design) (LogRocket) | 7 Jun 2025 | The Linear-inspired look: dark mode, bold type, complex gradients, glassmorphism. Notes "almost every SaaS website looks the same". |
| Tom May, ["10 trends creatives are so over in 2026"](https://creativeboom.com/insight/10-trends-creatives-are-so-over-in-2026/) (Creative Boom) | 21 Apr 2026 | Survey of creatives. The list includes AI slop, glassmorphism, gradients ("Four-pointed star for AI logos and gradients for everything. Give it a rest."), lazy minimalism, bento grids and motion for its own sake. |
| Vanessa Porter, ["Everything looks the same. Now what?"](https://www.creativebloq.com/ai/everything-looks-the-same-now-what) (Creative Bloq) | 6 Jun 2026 | AI is a "high-speed photocopier" of an existing sameness. For security brands specifically: "dark navy backgrounds, electric blue accents", a shield or padlock, "abstract network diagrams". |
| Tanya Donska, ["AI makes bad design look good enough"](https://builtin.com/articles/ai-design-slop-era) (Built In) | 11 Jun 2026 | Gradient blobs that are "soft, orbital, vaguely optimistic"; "floating torsos" hero illustrations; AI output as "the average of all design that has ever been fed into a model"; design that "points at nothing in particular and says, 'This is professional.'" |
| Kosta Canatselis, ["Spot the slop"](https://world.hey.com/kostac/spot-the-slop-a-ui-designer-s-guide-to-fixing-ai-defaults-4c448c9c) | 23 Jul 2026 | Slop is "design with no author". Its signs include "Inter paired with a system fallback and nothing else"; gradients as "decoration standing in for a colour system"; generic headlines; "uniform everything" (same padding, radius and card height); missing states; the same fade-in on everything. |
| Paul Bakaus, [Impeccable](https://impeccable.style/) (an anti-pattern detector for AI agents, 62 checks) | 2026 | Hero eyebrow chip; "AI kicker" label above headings; icon-tile stacks; status-chip soup; "everything equal"; pulsing dot; "AI is thinking" motion; numbered 01/02/03 labels; GPT-style card (thin border + wide soft shadow). **It also lists "Italic serif" display type and "AI beige" palettes as tells**, so the obvious escape route is already a cliché. |
| [UX-skill wiki: "How to detect AI slop"](https://github.com/Laith0003/ux-skill/wiki/How-to-detect-AI-slop-in-your-design) (GitHub, community) | 2026 | Inter/Plus Jakarta/Geist as display face; purple-to-blue and radial "blob in the hero"; exactly three equal feature cards; every section the same height; shadow + border + tint on one card; the same large radius on every container; an icon in a coloured circle; default Lucide/Heroicons; dark mode made by inverting light mode; round-number stats; filler verbs ("streamline", "unlock"). |
| Baymard Institute (Edward Scott), ["Highlight SaaS UI"](https://baymard.com/blog/highlight-saas-ui) | 23 Jun 2022 (still current) | Not about AI, but directly relevant to fake windows: "abstractions or graphical representations of the interface, rather than screenshots… performed more poorly during testing". |

**Shared diagnosis.** The tells are not caused by AI as such. They are *defaults left unchanged*: Tailwind/shadcn/Lucide/Inter, Linear-style dark mode, and stock layouts. A page reads as "AI" when nothing on it could only belong to that one company.

### 1.2 Checklist of patterns to avoid, mapped to the current site

Evidence for the current site: `research/current-site/hero_home.png` and `hero_signora.png`, plus audit items V1–V9 in the decision log.

| # | Pattern | Source(s) | Current site |
|---|---|---|---|
| 1 | Dark navy background by default, especially for a security or trust product | Creative Bloq; LogRocket; Impeccable | **Yes.** Navy throughout. |
| 2 | Glow, orbs, radial haze, "blob in the hero" | UX-skill wiki; Built In ("soft, orbital") | **Yes.** Glowing orbs, orbit lines, orange/blue haze. |
| 3 | Dot-grid or grid-paper background texture | Common in Linear-style kits (Opinion: it is the most common texture in these templates) | **Yes.** |
| 4 | Purple/indigo/periwinkle accent, gradient text | Anthropic; DEV (indigo-500); prg.sh | **Partly.** Periwinkle nav CTA, purple "Ask" button. |
| 5 | Inter / Geist / Space Grotesk / Plus Jakarta as the only typeface | Anthropic; Canatselis; UX-skill wiki | **Yes.** Inter/Geist-style sans everywhere. |
| 6 | Eyebrow or kicker label → big heading → grey subtitle in every section | Impeccable ("AI kicker", "hero eyebrow chip") | **Yes** (V4). |
| 7 | Identical rounded card grids; three equal cards; icon tile at top left | prg.sh; UX-skill wiki; Impeccable | **Yes** (V4). |
| 8 | Status-chip soup, pulsing dots, checkmark lists | Impeccable | **Yes.** "In the trial now" pill with a dot; checkmark cards. |
| 9 | Fake app windows (traffic-light dots, grey skeleton lines) instead of real UI | Baymard (abstractions perform worse) | **Yes** (V2, V3). |
| 10 | Four-pointed sparkle star as the "AI" symbol | Creative Boom survey | **Yes.** "Ask us" button. |
| 11 | No people, no place, no real objects; or "floating torsos" stock | Built In; NN/g (§5) | **Yes** (V5). |
| 12 | Generic headlines and filler verbs | Canatselis; Impeccable; UX-skill wiki | Partly (C3: "AI, your way"). |
| 13 | Uniform radius, padding and section height: "everything equal" | Canatselis; Impeccable | **Yes.** |
| 14 | Motion for its own sake, the same fade on everything, count-up numbers | Creative Boom; Canatselis | **Yes.** Count-up stats showed "0 field kinds" and "0 weeks" (V8). |
| 15 | Dark mode built by inverting light mode | UX-skill wiki | Unknown; check in Phase 6. |
| 16 | **New cliché:** warm beige + italic serif accent word | Impeccable ("AI beige", "Italic serif") | Not present. **Avoid it in the redesign.** Ironclad's hero (ironcladapp.com, seen 2026-11-24) is an example of the italic-serif accent. |

*(Opinion)* Items 1–3, 9 and 11 do the most damage for a trust product sold to GCC governments. They make the page look like a template, and they hide the thing buyers most want to see: what signing and verifying actually looks like.

---

## 2. Counter-trends and reference sites

All sites below were loaded on 2026-11-24 (HTTP 200 and a screenshot). They are references for *one quality each*, not wholesale templates.

### 2.1 Global references (legal, fintech, government, publishing)

| # | Site | What makes it distinctive | Take-away for Smart Orbit |
|---|---|---|---|
| 1 | **Harvey**: https://www.harvey.ai | Light, near-white page. A large serif wordmark and headline (the brand serif; sources disagree on the exact face: [Fonts In Use](https://fontsinuse.com/uses/77027/harvey), [Harvey design blog](https://www.harvey.ai/blog/how-we-approach-design-at-harvey)). Black rectangular buttons, no gradients. The hero is a **real, dense product screenshot** set on a rough, painterly grey-green texture. Their stated principle: "The best design feels invisible." | For a legal product, confidence comes from restraint plus a real UI. The texture gives a material, human feel without stock photos. |
| 2 | **Legora**: https://legora.com | A full-bleed cinematic photograph of a person working (silhouette at an airport window, warm light). A centred wordmark with spaced capitals. One deep-green pill CTA. | Human presence with a mood, not "smiling team" stock. |
| 3 | **Stripe Press**: https://press.stripe.com (redirects to stripe.press) | Book-publisher identity: a tall condensed serif for titles; monospaced bracketed UI labels ("[ CART 0 ]"); paper texture and soft print-like colour; hairline rules. | Proof that a technology company can borrow the language of print and paper credibly. Relevant to documents and seals. *(Opinion: borrow the hairlines, the mono metadata and the paper sense, not the pastel gradient.)* |
| 4 | **GOV.UK** and the **GOV.UK Design System**: https://www.gov.uk, https://design-system.service.gov.uk | Pure utility: one typeface (GDS Transport), a heavy bold headline, high contrast, solid blue band, a large search box. No decoration at all. | The benchmark for "serious and trustworthy" in government. Plain language and large type do the work. |
| 5 | **Wise**: https://wise.com | A **proprietary colour** (bright lime green with forest-green text), an ultra-heavy condensed display face in capitals, and **photography of a real product in a real setting** (phone and card in a bicycle basket). | Owning one colour no competitor uses is very effective. Product shown in life, not in a fake window. |
| 6 | **Docusign** (a direct competitor, for contrast): https://www.docusign.com | 2024 rebrand: custom typeface "Docusign Indigo", core colour **Cobalt** with a **Poppy** red accent ([Docusign brand blog](https://docusign.com/blog/next-brand-chapter)). The site is saturated indigo-violet. | **Avoid indigo, cobalt and violet.** It is both the AI default and the market leader's colour. |

**Cautionary references (seen 2026-11-24).** These are close to where Smart Orbit is now.
- **Documenso**, https://documenso.com: dark background, Inter-like sans, a fake app window with grey skeleton lines and a dot pattern. An e-signature competitor that looks almost the same as the current Smart Orbit hero.
- **Lean Technologies**, https://www.leantech.me/uae/en: dark charcoal, a centred grey headline, an announcement pill with a rocket emoji, and floating isometric skeleton cards. A UAE fintech in the same generic idiom.
- **Mercury**, https://mercury.com: a custom typeface (Arcadia, per [third-party analyses](https://blakecrosley.com/guides/design/mercury)), but the current hero is a surreal composite of a desk on a misty mountain. *(Opinion: it shows how quickly "cinematic" turns into "AI-image".)*

### 2.2 MENA and GCC references with strong bilingual identities

| # | Site | What makes it distinctive | Take-away |
|---|---|---|---|
| 7 | **Thmanyah** (Saudi media): https://thmanyah.com | Arabic-first editorial layout on a warm off-white. Its own Arabic typeface ("Thmanyah Font", now free to use but not open source: [licence FAQ](https://ask.thmanyah.com/hc/en-001/articles/45993930027281-Thmanyah-Font-for-Everyone)). Real photography, a magazine hierarchy and a confident Arabic wordmark. | The best regional proof that an Arabic-led typographic identity reads as premium and serious. |
| 8 | **Tabby** (UAE/KSA fintech): https://tabby.ai | 2025 identity by Ragged Edge: a **bespoke typeface built to carry equal weight in Arabic and Latin**; hand-drawn "Monions" characters; **photography of real regional customers and merchants, not stock-style models**. CMO: "We didn't want to look expensive, we wanted to be on your side" ([Communicate](https://communicateonline.me/brands/tabby-shows-money-whos-boss-with-a-bold-new-identity-from-ragged-edge/)). Flat mint green, black type. | Bilingual parity designed in from the start; an ownable colour; real regional people. |
| 9 | **Tamara** (KSA fintech): https://tamara.co | Very large, heavy Arabic display headline. A bilingual wordmark redrawn by 29LT: the Arabic Ta' and Meem are redrawn "based on the pen flow structure" (Naskh), and both scripts "share the same width" ([29LT blog](https://blog.29lt.com/2025/09/12/tamara-bilingual-wordmark/)). | A good model of Arabic-Latin logotype matching. *(Opinion: its sparkle-star decorations show tell #10 creeping into regional brands.)* |
| 10 | **Museum of the Future** (Dubai): https://museumofthefuture.ae | Arabic calligraphy is the identity: the building's façade is inscribed, and the hero is a macro photograph of a calligraphy-engraved object. Large, light Arabic headline, centred, in a warm photographic tone. (As of 2026-11-24 the site says the museum is temporarily closed.) | Script as material: Arabic letterforms used as texture and object, not as decoration. |
| 11 | **Foodics** (KSA restaurant software): https://www.foodics.com | A grid of **real-looking regional photography**: Saudi staff and customers using the actual POS hardware and screens, in real venues. | This is what "people + product, in the region" looks like for B2B software. |
| 12 | **UAE Design System** (TDRA): https://designsystem.gov.ae, and **TAMM** (Abu Dhabi government services): https://www.tamm.abudhabi | The UAE DS is light, white and gold, with Arabic and English. TAMM is light, with a deep-teal hero and photography of Emirati people on its category cards. | The visual vernacular that UAE government buyers live in every day: light, warm metallic or teal accent, bilingual. (§4.2 covers the DS palette and rules.) |

*(Opinion)* What the credible references share:
- **One ownable colour**, used flatly.
- **Real things**: product UI, objects, places and people from the region.
- **Typography with a point of view** in *both* scripts.
- **Varied rhythm.** Not every section is a card grid.

None of them uses glow, a dot grid or fake windows.

---

## 3. Typography

### 3.1 Principles for Arabic + Latin in an enterprise or government context

- **Naskh for running text; Kufi for display and short labels.** Practice and the available research point the same way: Naskh is the default text style, and Kufi styles are mostly used for headlines and short pieces of text. There is no controlled study of Naskh vs Kufi for on-screen UI body text. Nadine Chahine's Leiden PhD, [*Reading Arabic: legibility studies for the Arabic script*](https://scholarlypublications.universiteitleiden.nl/handle/1887/20022) (2012, eye-tracking, 72 participants), found that **more complex word formation lowers legibility**. *(Opinion: so for body text, favour a simplified, low-contrast Naskh structure, or a "Naskh-structured sans", over either an ornate Naskh or a geometric Kufi. Keep Kufi for headings.)*
- **The UAE Design System prescribes Noto Kufi Arabic for Arabic body text and Alexandria for headings.** For English it uses Roboto for body and Inter for headings ([DS typography](https://designsystem.gov.ae/guidelines/typography)). It also says: don't letter-space Arabic, "especially in Arabic, where letters connect"; right-align Arabic; minimum 16px; body line-height ≥ 1.5. *(Opinion: these are a useful floor. But using Inter + Kufi would make a vendor site look like a federal template and re-introduce tell #5. The DS also applies the same size scale to both scripts.)*
- **No italics in Arabic.** "Traditionally, Arabic has no italics" (Pooja Saxena, [TypeTogether multiscript guide](https://www.typetogether.com/multiscript-typography-guide), 2020). Use weight or colour for emphasis. This is one more reason to avoid the italic-serif accent trend: it cannot be mirrored in Arabic.
- **Matching size across scripts.** There is no agreed "x-height" for Arabic. W3C CSS discussions note that `font-size-adjust`'s ex-height is "Latin-centric" ([W3C thread, John Hudson](https://lists.w3.org/Archives/Public/www-style/2012Mar/0126.html); [Chris Lilley](https://lists.w3.org/Archives/Public/public-css-archive/2021Feb/0400.html)). TypeTogether: "Being equal mathematically does not in itself translate into having harmonious proportions"; test pairs "at incrementally higher and lower sizes and weights". Practical method *(Opinion, based on these sources)*:
  1. Set one paragraph in each script side by side at 16, 18 and 24px.
  2. Match by **eye**, using the Arabic tooth/medial height against the Latin x-height and the overall "colour" (darkness).
  3. Apply the correction with `@font-face { size-adjust: … }` on the Arabic face, or with a `:lang(ar)` size and line-height token. Arabic often needs a slightly larger size and more leading than the Latin at the same nominal px. Measure this per font pair rather than using a universal ratio.
  4. Match **weights** by stroke colour, not by number. An Arabic 500 may need to sit next to a Latin 400.
- **Designed-as-a-pair beats bolted together.** Mohamed Gaber's stated aim for Cairo was "an Arabic typeface that matches the Latin without bending the Arabic letters or 'Latinizing' them" ([Google Design](https://design.google/library/modernizing-arabic-typography-type-design)). Prefer families whose Arabic and Latin were drawn together.

### 3.2 Candidate fonts (verified 2026-11-24)

Licence and designers come from Google Fonts metadata (`fonts.google.com/metadata/fonts`) and the `google/fonts` repo directory (`ofl/` = SIL Open Font License). All Google Fonts entries below are **free, OFL 1.1, self-hostable**.

| Font | Scripts | Style | Designers | Licence / availability | Assessment *(Opinion)* |
|---|---|---|---|---|---|
| **IBM Plex Sans Arabic** | Arabic + Latin | Low-contrast humanist sans, 7 weights (100–700), static | Mike Abbink, Bold Monday, Khajag Apelian, Wael Morcos | OFL, Google Fonts | **Top free pick.** Designed as a pair with IBM Plex Sans/Serif/Mono (all OFL). Won a D&AD Pencil ([Print](https://www.printmag.com/design-news/wael-morcos-and-khajag-apelians-beautiful-plex-arabic-wins-a-pencil/)). Calm, "engineered + humanist", not the default AI choice. Plex Mono suits hashes, certificate IDs and timestamps. |
| **Noto Naskh Arabic** | Arabic (+ basic Latin) | Modulated Naskh, wght 400–700 | Google | OFL, Google Fonts | The most readable free Naskh for long Arabic text (terms, policy, docs). Pair with a serif or humanist Latin. |
| **Noto Sans Arabic** | Arabic | Unmodulated, wdth 62.5–100, wght 100–900 | Google | OFL, Google Fonts | Neutral, very complete; safe for UI. Feels generic. |
| **Noto Kufi Arabic** | Arabic + Latin | Kufi, wght 100–900 | Google | OFL, Google Fonts | The UAE DS body font. Good for headings and labels; it is a Kufi, so less ideal for long body text (see §3.1). |
| **Markazi Text** | Arabic + Latin | Naskh with moderate contrast, wght 400–700 | Borna Izadpanah (Arabic), Florian Runge (Latin), dir. Fiona Ross; Univ. of Reading + Google | OFL, Google Fonts | **Best free "editorial/document" voice.** A real Naskh with a matched Latin serif. Ideal for headings in a paper/seal direction. Max weight 700. |
| **Readex Pro** | Arabic + Latin | Geometric-humanist sans, wght 160–700 + HEXP axis | Thomas Jockin, Nadine Chahine, Bonnie Shaver-Troup, et al. | OFL, Google Fonts | The Arabic expansion of Lexend, built on Shaver-Troup's readability research ([repo](https://github.com/ThomasJockin/readexpro)). Friendly and clear; a little soft for "legal seriousness". |
| **Alexandria** | Arabic + Latin | Geometric Kufi-like, wght 100–900 | Mohamed Gaber, Julieta Ulanovsky | OFL, Google Fonts | Arabic companion to **Montserrat**. Strong for display, and it is the UAE DS heading font. The Latin is very common. |
| **Rubik** | Arabic, Hebrew, Latin, Cyrillic | Rounded geometric, wght 300–900 | Hubert & Fischer, Meir Sadan, Daniel Grumer, Omaima Dajani, et al. | OFL, Google Fonts | Soft rounded corners; reads as consumer or playful. Not recommended for this audience. |
| **Tajawal** | Arabic + Latin | Low-contrast geometric, 7 static weights | Boutros Fonts (Mourad Boutros, Soulaf Khalifeh) | OFL, Google Fonts | Clean, but **among the most common Arabic web fonts**, the regional equivalent of Inter. |
| **Cairo** | Arabic + Latin | Contemporary Kufi, wght 200–1000 | Mohamed Gaber | OFL, Google Fonts | Google Design calls Gaber's Cairo among the most widely used Arabic typefaces on Google Fonts. That is exactly why it reads as default. |
| **Almarai**, **Zain** | Arabic + Latin | Sans (Boutros Fonts) | Boutros Fonts | OFL, Google Fonts | Almarai is also very common. Zain (2024) is newer and less seen. |
| **Thmanyah Font** | Arabic (+ Latin) | Thmanyah's house face | Thmanyah | **Free to use, including commercially, but not open source**: no modification, no redistribution except from the official source, OTF only ([licence FAQ](https://ask.thmanyah.com/hc/en-001/articles/45993930027281-Thmanyah-Font-for-Everyone)) | Distinctive, but it is strongly tied to Thmanyah's own brand. *(Opinion: avoid; it would read as borrowed.)* |
| **Dubai Font** | Arabic + Latin | Sans | Dubai Executive Council with Monotype/Microsoft | Free under its own EULA ([Font Squirrel EULA](https://www.fontsquirrel.com/license/dubai)), proprietary per [Wikipedia](https://www.wikipedia.org/wiki/Dubai_Font) | Read the full EULA before using it. Strong Dubai-government association; *(Opinion)* that may help or hurt depending on federal vs emirate clients. |

**Commercial options, for comparison only (W4). Prices were seen on 2026-11-24 and are list prices that can change.**

| Font | Foundry / designers | What it is | Price seen |
|---|---|---|---|
| **Lyon Arabic** (Text + Display, with Slanted) | Commercial Type; Waël Morcos & Khajag Apelian, with Kai Bernau (Lyon Latin) | A Naskh-based text face with optically matched Latin; the Slanted version is modelled on Nastaliq | Collection **$650**; families $250; styles from $60 (perpetual, desktop; web licence via the cart or by contacting them) ([catalog](https://commercialtype.com/catalog/lyon_arabic)) |
| **Graphik Arabic** | Commercial Type; Apelian & Morcos with Christian Schwartz | A grotesque Arabic companion to Graphik, 9 styles | Full family **$360**; styles from $60; web pricing by enquiry ([catalog](https://commercialtype.com/catalog/graphik_arabic)) |
| **29LT Zarid Sans (AL)** (also Zarid Serif, Text and Display) | 29LT (Pascal Zoghbi) | A bi-script Arabic-Latin superfamily, Thin–Black + variable | Single style **€50**; variable €150; full 16-style bundle **€385** (discounted from €1,100); licence types: desktop, web app, corporate ([29LT store](https://www.29lt.com/product/29lt-zarid-sans/)) |
| **Frutiger Arabic** | Linotype; Adrian Frutiger & Nadine Chahine (2014) | A humanist sans, 8 styles | From **$149 per style** ([MyFonts](https://www.myfonts.com/fonts/linotype/frutiger-arabic)). Neue Frutiger Arabic is listed at $79/style and $314.99 for the family in a non-English MyFonts listing; check before relying on it. |
| **Avenir Arabic** | Linotype; Nadine Chahine | Geometric-humanist | $149/style; $419.99 for the 6-font family ([MyFonts](https://www.myfonts.com/fonts/linotype/avenir-arabic)) |

### 3.3 Pairings to test

| Pairing | Licence | Role | Notes *(Opinion)* |
|---|---|---|---|
| **A. IBM Plex Sans Arabic + IBM Plex Sans (+ Plex Mono)** | All OFL | Whole system: UI, body, headings | Most coherent free option; one design team drew both scripts. Distinctive without being loud. Use Plex Mono for technical proof (hashes, RFC 3161 timestamps, PAdES level). |
| **B. Markazi Text (display) + IBM Plex Sans Arabic / Plex Sans (UI & body)** | All OFL | Editorial headings, utilitarian body | A real Naskh for headlines gives a "document" voice in Arabic first. Its matched Latin avoids the italic-serif cliché. Check the weight match: Markazi tops out at 700. |
| **C. Noto Naskh Arabic (body) + Noto Kufi Arabic (headings) + Plex Sans or Source Serif 4 (Latin)** | All OFL | Close to the UAE DS spirit, but Naskh for body | Best long-form Arabic readability. Less character. |
| **D. Readex Pro (both scripts)** | OFL | Friendly, readability-first | Good if accessibility and plain language become the brand idea. Softer tone. |
| **Commercial benchmark: Lyon Arabic + Graphik Arabic** (or **29LT Zarid Serif + Zarid Sans**) | Paid | Editorial + UI | Approximately $1,000 for both Commercial Type collections (desktop); 29LT bundles from about €385 each. Worth it only if the brand is committed long term. |

---

## 4. Colour

### 4.1 Cultural associations in the UAE and GCC

- **The national colours are the pan-Arab four: red, green, white, black.** Common readings are green for growth and prosperity, white for peace and purity, black for strength (or oil wealth) and red for courage and sacrifice. Sources vary on the details ([Wikipedia](https://en.wikipedia.org/wiki/Flag_of_the_United_Arab_Emirates); [Khaleej Times](https://www.khaleejtimes.com/uae/government/know-what-the-uae-flag-means); [Dubai protocol](https://protocol.dubai.ae/en/protocols-listing/protocols/the-united-arab-emirates-flag/)).
- **The UAE Design System adds gold** as the primary colour of federal digital services. Its own article ties UAE Gold to prosperity, UAE Green to calm and healing, and UAE Red to urgency. It also argues that **blue's link with trust is a learned convention, not universal**, in a country of 200+ nationalities ([DS insight, 26 Sep 2025](https://designsystem.gov.ae/insights/the-color-psychology-of-government-trust)).
- **White** is the most common colour of Emirati men's dress. **Black** can carry mourning connotations in some contexts ([The National, "Ask Ali"](https://www.thenational.ae/ask-ali-on-the-meaning-of-colours-in-the-uae-1.383566)).
- **Green** is widely associated with Islam. Agency commentary advises using it with care ([Carril Agency](https://www.carrilagency.com/en/blog/how-do-cultural-values-influence-branding-in-the-middle-east); secondary source).
- **Gold** signals luxury and success but can look gaudy if overused (same source).
- **Caution.** Most colour-meaning claims are blog or agency content. The UAE DS is the most authoritative regional source. *(Opinion: treat associations as risks to avoid, such as gaudy gold or careless green, rather than as levers.)*

### 4.2 The UAE Design System (TDRA)

- **What it is.** https://designsystem.gov.ae is built by the Telecommunications and Digital Government Regulatory Authority for federal entities. It is at **v4.0.4** (a framework-agnostic web-components rebuild), with source at [github.com/TDRA-ae/aegov-designsystem](https://github.com/TDRA-ae/aegov-designsystem). It claims **WCAG 2.2 AA** compliance and covers Arabic/RTL and English/LTR.
- **Palette.** Default primary is **AE Gold**; secondary is **Camel**; support colours are Camel and Desert. Neutrals are "Whitely" (the default environment colour) and Slate. Tokens also exist for **AE Black, AE Green, AE Red** and Fuchsia, each from 50 to 950 in OKLCH (read from the live CSS 2026-11-24) ([colour guideline](https://designsystem.gov.ae/guidelines/colour)).
  - AE Gold brand hex: **#B68A35**. Component-safe primary: **#90702A**.
  - Note that the DS insight article lists UAE Gold as **#CA9A2C**, Green **#006B48**, Red **#C8102E** and Black **#232528**. The CSS token `aegold-500` resolves to about #A6853B. The published values are inconsistent, so take hex values from the CSS tokens.
- **Rules worth knowing:**
  - Ministries must use the core palette; authorities may adapt their primary colour.
  - The brand gold "is not to be used as the background colour for components" (it fails contrast).
  - Body text should default to AE Black.
  - No background pattern on the homepage, except just above the footer.
  - Patterns on inner pages must keep text contrast > 4.5 and be ≤ 8% darker than the background.
  - Gradients only within one tonality; **no gradients between UAE Green and UAE Gold**.
  - No dark-mode guidance, although the insight article calls dark and high-contrast themes useful accommodations.
- **Measured here:**

| Colour pair | Contrast | Result |
|---|---|---|
| #B68A35 on white | **3.15:1** | Fails AA for body text; passes large text and UI |
| #90702A on white | **4.63:1** | Passes AA |
| #CA9A2C on white | **2.57:1** | Fails |

- *(Opinion)* Smart Orbit is a vendor, not a federal entity, so it is **not bound** by the DS. Echoing its conventions (light page, AE Black text, a warm metallic accent, Arabic and English parity, UAE PASS button rules) would feel familiar to government buyers. Copying its gold outright could look like impersonating a government site. Signing flows that use UAE PASS **must** follow the UAE PASS button guidelines ("Sign with UAE PASS", no custom button styles) ([UAE PASS docs](https://docs.uaepass.ae/guidelines/design-guidelines/button-guidelines/sign-with-uae-pass)).

### 4.3 Signalling trust and legal seriousness without corporate blue

*(Opinion, informed by the references above)*
- **Let ink and paper do the work.** A near-black ink on a near-white paper is the most "legal" colour pair there is. Add **one** ownable accent, used flatly and sparingly.
- **Accents that fit the seal idea and avoid the AI and competitor zones** (indigo/violet: AI default and Docusign; electric blue: security cliché per Creative Bloq):
  - **Carnelian / sealing-wax red.** Carnelian was the favoured stone for Islamic seal rings ([Met Museum](https://artistproject.metmuseum.org/art/collection/search/449312)).
  - **Deep archive green or teal.** Verified, calm; TAMM uses teal.
  - **Warm metallic** (an ochre or bronze, kept distinct from AE Gold).
- **Status colours** (verified, invalid, legacy) are functional. Keep them separate from the brand accent so "red = seal brand" never collides with "red = invalid signature". This needs a deliberate decision in Phase 6.
- **Avoid:** gradients as a colour system, glow, two different CTA colours (V6), and gold-on-white body text.

### 4.4 Light-first vs dark-first

- **Evidence:**
  - NN/g: "in users with normal vision, light mode leads to better performance most of the time", and the advantage grows as text gets smaller. Recommendation: don't make dark mode the default for the general population; offer a toggle ([Raluca Budiu, NN/g, 2020](https://www.nngroup.com/articles/dark-mode/)).
  - A 2024 study (135 participants, 66 aged 60+) found older adults preferred positive polarity (dark on light) to reduce mental fatigue, while younger adults preferred dark mode for aesthetics ([arXiv 2409.10841](https://arxiv.org/html/2409.10841v1)).
  - The UAE DS defaults to a white environment, and the UAE government portals seen (u.ae, TAMM, the DS) are light.
- *(Opinion)* For senior government and enterprise approvers, legal readers and anyone reading contracts, **light-first is the better default**. Documents are paper, and the product's subject is paper. Keep the existing dark toggle (K3) and design dark mode as its own palette, not an inversion. Dark-first is a big part of why the site reads "AI / developer tool".

### 4.5 Contrast requirements (WCAG 2.2, W3C Recommendation; current version dated 12 Dec 2024)

| Requirement | Level | Threshold | Source |
|---|---|---|---|
| 1.4.3 Contrast (Minimum), normal text | AA | **4.5:1** | [WCAG 2.2](https://www.w3.org/TR/WCAG22/) |
| 1.4.3 Contrast (Minimum), large text: ≥ 18pt (24px), or ≥ 14pt (about 18.66px) bold | AA | **3:1** | same |
| 1.4.6 Contrast (Enhanced) | AAA | 7:1 (large text 4.5:1) | same |
| 1.4.11 Non-text Contrast (UI components, focus rings, field borders, icons that carry meaning, seal graphics that carry state) | AA | **3:1** | same |
| 2.4.11 Focus Not Obscured (Minimum) | AA | The focused component is not entirely hidden (watch the sticky "Ask us" widget) | same |
| 2.4.13 Focus Appearance | AAA | 2px perimeter equivalent, 3:1 change | same |
| 2.5.8 Target Size (Minimum) | AA | 24×24 CSS px (with spacing exceptions) | [Understanding 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html) |

*(Opinion)* Aim for AA everywhere and **AAA (7:1) for body text**. Readers include older officials and people reading contracts. Check Arabic at the same thresholds: thin Arabic weights lose contrast faster than Latin because their strokes are finer.

---

## 5. Imagery and illustration

### 5.1 Real product screenshots vs illustrations

- Baymard: abstract or graphical stand-ins for the interface "performed more poorly during testing". One participant: "I wouldn't ever buy anything without seeing it." Baymard recommends at least three real UI screenshots on the homepage ([Baymard](https://baymard.com/blog/highlight-saas-ui)).
- A vendor case study reports enterprise buyers disliking hand-drawn illustrations for an enterprise app ([Conversion Rate Experts](https://conversion-rate-experts.com/statuscake-landing-page-win-report/); a vendor claim, treat with caution).
- *(Opinion)*
  - Replace every fake window (V2, V3) with **real, cropped, annotated screenshots** of Signora: the composer with fields on a real PDF, the signer page in Arabic RTL, the UAE PASS step, the certificate of completion and the verification verdict.
  - Use **sample but realistic data**, in Arabic and English.
  - Show the **real sealed sample PDF** and its **verifier report** (K2). In this product category they are the most persuasive visuals there are.
  - Drop the "Illustration composed from…" disclaimer once the images are real.

### 5.2 Photography of the region and of people

- **What users look at.** NN/g eyetracking: users ignore "big feel-good images that are purely decorative" and "stock photos of generic people", but look closely at real people (staff portraits) and information-carrying images ([NN/g](https://www.nngroup.com/articles/photos-as-web-content/)).
- **The UAE DS imagery guideline:**
  - Prefers **real, relevant images from a dedicated shoot** that "reflect reality" and the diversity of people in the UAE.
  - Natural editing; no HDR or filters.
  - Imagery must respect national values.
  - AI or CGI imagery "kept to a minimum", hero only. No unrealistic scenes, no identifiable real people, nothing that could pass as a real event ([DS imagery](https://designsystem.gov.ae/guidelines/imagery)).
- **AI images and trust.** NN/g (Aug 2026, 77 participants) found no penalty for *undisclosed* AI images vs stock. But participants who **suspected** AI rated sites lower, and disclosure of AI use lowers trust in other research ([NN/g](https://www.nngroup.com/articles/ai-generated-images/)). *(Opinion: for a trust and verification product, never use AI-generated "photos". Being caught would contradict the brand's promise.)*
- *(Opinion)* **A small commissioned shoot** (one or two days, Abu Dhabi/Dubai) beats any library:
  - Real roles: a records officer, a legal counsel, an HR administrator, a field inspector on a phone.
  - Real places: a ministry corridor, a free-zone office, a majlis-style meeting room, a site office.
  - Hands and devices at work: a phone showing UAE PASS, a pen next to a printed contract, a physical company stamp beside a laptop.
  - Diverse nationalities, as the UAE DS asks.
  - Model releases and cultural review are needed.
  - **Since there are no named customers (W1), say so honestly:** "photographed with staff and partners" rather than implying they are clients.
- **Regional clichés to avoid** *(Opinion)*: the Burj Khalifa skyline, sand dunes, camels, falcons, gold calligraphy swirls, mashrabiya patterns used as wallpaper, kandura handshake stock, and "futuristic" blue-hologram cities. Careem's glowing night-map hero shows how quickly "futuristic Dubai" becomes generic.

### 5.3 Paper, seal and stamp: the native metaphor

- **History.** The seal is native to the region's culture of documents. The personal seal served in the Near East "long before the advent of Islam as an individual official signature". It was inked and pressed onto paper. Carnelian rings were favoured ([Met Museum](https://artistproject.metmuseum.org/art/collection/search/449312)). Tradition holds that the Prophet's letters to rulers were sealed with a signet ring (*khatam*) ([Wikipedia, Seal of Muhammad](https://en.wikipedia.org/wiki/Seal_of_Muhammad); tradition, not verified fact). Company stamps remain part of everyday business paperwork in the Gulf, and Signora already has a **stamp** field and a **stamp library**.
- *(Opinion)* How "a seal per signer" could become the visual system:
  - **A generated seal mark per signer.** A small circular or square seal derived from real cryptographic facts (signer name in both scripts, a short hash, the RFC 3161 time) and drawn with fine engraved lines, like a modern khatam. It appears in the hero, on the certificate, in the verification view and as the favicon motif. It is ownable, true to the product, and **not** clip-art.
  - **Paper as surface.** A real photograph (macro) of a printed contract with an ink stamp and a pen signature, set next to the same document as a sealed PDF on screen. The physical and the digital twin side by side.
  - **Typography as seal.** Bilingual Arabic and Latin set in a ring, using the brand fonts.
  - **Avoid** wax-seal emoji, a padlock or shield, a cartoon quill, gold foil effects, and the "floating document with a glowing checkmark".
- **Illustration**, if any: restrained line drawing in the engraving and guilloche register of certificates and banknotes, used only to explain the seal-and-verify mechanism (a diagram of what is inside a PAdES-B-LT seal). No mascots or blobs.

---

## 6. Three visual-direction hypotheses (for discussion, not decisions)

Contrast values below were computed here (WCAG relative luminance). All fonts listed are OFL unless marked.

### Direction 1: "Ink & Seal" (documentary, paper, typographic)

- **Mood:** A well-made legal document or a private-press book. Calm, exact, tactile. The product *is* the hero.
- **Type:** Markazi Text for display (Arabic and Latin headings, a Naskh voice) with IBM Plex Sans Arabic / Plex Sans for UI and body, and Plex Mono for proof data (hashes, timestamps, "PAdES-B-LT"). *Commercial alternative:* Lyon Arabic + Lyon Text, or 29LT Zarid Serif + Zarid Sans. **No italic accents.**
- **Palette (light-first):**

| Role | Colour | Contrast |
|---|---|---|
| Paper | #FAF9F6 (near-white, *not* beige) | — |
| Ink | #16181D | 16.9:1 |
| Secondary ink | #5B5F68 | 6.1:1 |
| **Carnelian seal** (the single accent; CTAs, seal marks) | #9C2F25 | 7.0:1 on paper; white on it 7.4:1 |
| Archive blue-black (links) | #1E3A5F | 10.9:1 |

  Dark mode: #131417 background, #ECEAE4 text (15.3:1), seal #E38677 (7.0:1).
- **Imagery:**
  - Macro photographs of real paper, stamps and signatures.
  - The real sealed PDF and verifier report as hero artefacts.
  - A generated "seal per signer" mark as the motif.
  - Hairline rules and margin notes instead of cards.
- **Layout:** An editorial grid with asymmetric columns, footnote-style proof ("RFC 3161 ↗"), and varied section rhythm. No card grids.
- **References:** Stripe Press (print language), Harvey (restraint + real UI + material texture), Thmanyah (Arabic-led editorial), Museum of the Future (script as material).
- **Risks:**
  - Drifting into "AI beige + serif". Mitigate with bright paper, no italics, no beige, and real screenshots everywhere.
  - Red accent vs "invalid" status red. Needs a separate status palette.

### Direction 2: "Civic Standard" (utility, government-native, proof-forward)

- **Mood:** GOV.UK-level clarity in a UAE government accent. Looks like it already belongs in a ministry's procurement folder. Plain language, big type, real tables.
- **Type:** IBM Plex Sans Arabic + IBM Plex Sans throughout, with Plex Mono for technical values. *Variant:* Noto Naskh Arabic body + Noto Kufi Arabic headings for maximum Arabic readability.
- **Palette (light-first, compatible with the UAE DS, not a copy of it):**

| Role | Colour | Contrast |
|---|---|---|
| Background | #FFFFFF | — |
| Text (AE Black token) | #1A1C20 | 17.1:1 |
| Secondary text | #565B64 | 6.8:1 |
| Accent: deep bronze, darker than AE Gold to stay distinct | #7C5A22 (= the DS `aegold-700` token) | 6.3:1 |
| "Verified" state only | #296C39 (`aegreen-700`) | 6.4:1 |

  Dark mode: #14161A background, #F2F2F2 text, #D4B26A accent (9.0:1).
- **Imagery:**
  - Large, annotated real screenshots.
  - The verification verdict, shown big ("Long-term valid") with the grading explained.
  - A UAE PASS step that follows its button guidelines.
  - Light, documentary photography of real workplaces.
- **Layout:** A single strong column with an anchored side index. Spec-sheet tables ("What we do / what we don't yet do", K1). A "how to verify this yourself" section with the sample PDF.
- **References:** GOV.UK and its design system, the UAE Design System, TAMM, Harvey's product-first hero.
- **Risks:**
  - Can feel institutional rather than like a company with a point of view.
  - Gold or bronze too close to the federal palette may look like impersonation. Keep the accent distinct and the Smart Orbit logo prominent (W3).

### Direction 3: "Majlis Daylight" (human, photographic, regional warmth)

- **Mood:** Real people in the Gulf doing real paperwork, made easier. Warm daylight, hospitality, confidence: "on your side" (Tabby's phrase) rather than "expensive".
- **Type:** Readex Pro (both scripts; readability-first, OFL), or IBM Plex Sans Arabic + Plex Sans, with a heavier display weight. *Commercial alternative:* 29LT Zarid Sans AL (a bi-script superfamily; full bundle about €385 as listed 2026-11-24).
- **Palette:**

| Role | Colour | Contrast |
|---|---|---|
| Sand paper | #F3EEE4 | — |
| Deep teal-ink (text and dark sections) | #12302F | 12.2:1 |
| Secondary text | #545A58 | 6.1:1 |
| Terracotta accent | #A23B25 | 5.7:1 on sand |
| Date-gold, **on dark sections only** | #E8B86A on #12302F | 7.7:1 |

- **Imagery:**
  - A commissioned photo shoot in Abu Dhabi and Dubai: officers, counsel and HR staff signing on phones (UAE PASS), with stamps and printed contracts beside laptops.
  - Arabic-first captions.
  - Product screenshots set *in* scenes, as Wise and Foodics do.
- **Layout:** Large photography with generous Arabic display type, alternating full-bleed image and text bands. Testimonial slots stay empty until real quotes exist (W1).
- **References:** Foodics (real regional photography with the product), Tabby (real regional people, bilingual parity), Legora (cinematic human photography), Wise (product in life), Thmanyah.
- **Risks:**
  - Depends on a real shoot (budget and time). Falling back to stock would be worse than no photos.
  - Sand plus terracotta can drift toward "AI beige" if the photography is weak.

### How to choose (suggested evaluation, Phase 6)

*(Opinion)* Score each direction from 1 to 5 against these criteria:
1. Does it look like *only* Smart Orbit/Signora could have made it?
2. Does it work **Arabic-first**, with the Arabic version designed and not mirrored?
3. Does it show the real product and the real seal within the first viewport?
4. Does it meet AA, and AAA for body text, in both light and dark?
5. Can the team produce it with free fonts and the assets available (W4)?
6. Would a GCC government approver find it familiar but not imitative?

Do a quick test: put each direction's hero in **both languages** next to Docusign, Documenso and the current site, and ask five people "which company is this?"

---

## 7. Sources

Every URL cited inline above. The key ones:

**AI aesthetic**
- https://claude.com/blog/improving-frontend-design-through-skills
- https://dev.to/alanwest/why-every-ai-built-website-looks-the-same-blame-tailwinds-indigo-500-3h2p
- https://news.aibase.com/news/20365
- https://prg.sh/ramblings/Why-Your-AI-Keeps-Building-the-Same-Purple-Gradient-Website
- https://blog.logrocket.com/ux-design/linear-design
- https://creativeboom.com/insight/10-trends-creatives-are-so-over-in-2026/
- https://www.creativebloq.com/ai/everything-looks-the-same-now-what
- https://builtin.com/articles/ai-design-slop-era
- https://world.hey.com/kostac/spot-the-slop-a-ui-designer-s-guide-to-fixing-ai-defaults-4c448c9c
- https://impeccable.style/
- https://github.com/Laith0003/ux-skill/wiki/How-to-detect-AI-slop-in-your-design

**References**
- https://www.harvey.ai
- https://legora.com
- https://press.stripe.com
- https://www.gov.uk
- https://design-system.service.gov.uk
- https://wise.com
- https://www.docusign.com and https://docusign.com/blog/next-brand-chapter
- https://documenso.com
- https://www.leantech.me/uae/en
- https://mercury.com
- https://thmanyah.com
- https://tabby.ai and https://communicateonline.me/brands/tabby-shows-money-whos-boss-with-a-bold-new-identity-from-ragged-edge/
- https://tamara.co and https://blog.29lt.com/2025/09/12/tamara-bilingual-wordmark/
- https://museumofthefuture.ae
- https://www.foodics.com
- https://www.tamm.abudhabi
- https://ironcladapp.com
- https://www.careem.com

**Typography**
- https://fonts.google.com/metadata/fonts and https://github.com/google/fonts (ofl/)
- https://github.com/ThomasJockin/readexpro
- https://www.printmag.com/design-news/wael-morcos-and-khajag-apelians-beautiful-plex-arabic-wins-a-pencil/
- https://commercialtype.com/catalog/lyon_arabic
- https://commercialtype.com/catalog/graphik_arabic
- https://www.29lt.com/product/29lt-zarid-sans/
- https://www.myfonts.com/fonts/linotype/frutiger-arabic
- https://www.myfonts.com/fonts/linotype/avenir-arabic
- https://ask.thmanyah.com/hc/en-001/articles/45993930027281-Thmanyah-Font-for-Everyone
- https://www.fontsquirrel.com/license/dubai
- https://www.typetogether.com/multiscript-typography-guide
- https://design.google/library/modernizing-arabic-typography-type-design
- https://scholarlypublications.universiteitleiden.nl/handle/1887/20022
- https://lists.w3.org/Archives/Public/www-style/2012Mar/0126.html
- https://www.w3.org/TR/alreq/

**Colour and accessibility**
- https://designsystem.gov.ae/guidelines/colour
- https://designsystem.gov.ae/guidelines/typography
- https://designsystem.gov.ae/guidelines/imagery
- https://designsystem.gov.ae/insights/the-color-psychology-of-government-trust
- https://github.com/TDRA-ae/aegov-designsystem
- https://docs.uaepass.ae/guidelines/design-guidelines/button-guidelines/sign-with-uae-pass
- https://en.wikipedia.org/wiki/Flag_of_the_United_Arab_Emirates
- https://www.khaleejtimes.com/uae/government/know-what-the-uae-flag-means
- https://www.thenational.ae/ask-ali-on-the-meaning-of-colours-in-the-uae-1.383566
- https://www.nngroup.com/articles/dark-mode/
- https://arxiv.org/html/2409.10841v1
- https://www.w3.org/TR/WCAG22/
- https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html

**Imagery**
- https://baymard.com/blog/highlight-saas-ui
- https://www.nngroup.com/articles/photos-as-web-content/
- https://www.nngroup.com/articles/ai-generated-images/
- https://artistproject.metmuseum.org/art/collection/search/449312
- https://en.wikipedia.org/wiki/Seal_of_Muhammad

**Not verified, so not relied on:** exact typefaces used by Harvey and Mercury (third-party sources conflict); the price of Neue Frutiger Arabic (seen only in a non-English listing); the full Dubai Font EULA terms; any controlled study comparing Naskh and Kufi for UI body text (none found).
