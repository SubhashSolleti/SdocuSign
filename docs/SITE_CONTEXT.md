# Smart Orbit / Signora — full site context

Source: https://sign.sigilabs.ai/site/en/ (crawled 2026-11-24, 19 English pages). The raw text of each page is in [site-pages/](site-pages/).
Company: **Smart Orbit Information Technology LLC** (UAE), domain soit.ae. Every product name is "proposed, pending trademark checks": Signora, TroveDocs, Diwan, Tameer, Soha, Nora.
Site: a static Next.js site in English and Arabic (`/site/ar/...`), with a dark-theme toggle, an "Ask us" AI assistant widget, no cookies and no analytics. The internal code namespace is `cognivos` (for example `@cognivos/embed-sdk-sign`, `com.cognivos.signing`).

---

## 1. Site map

| Page | URL | What it is |
|---|---|---|
| Home | /site/en/ | Platform overview, the 4 products, interactive journeys, AI, deployment, differentiators |
| **Signora** | /site/en/signora/ | E-signature product (the only one in the trial) |
| TroveDocs | /site/en/trovedocs/ | Documents and records (in development) |
| Diwan | /site/en/diwan/ | Correspondence register (coming) |
| Tameer | /site/en/tameer/ | Apps, workflows, forms (coming) |
| Platform | /site/en/platform/ (#content #workflow #forms #docai #ai #integration) | Shared capabilities |
| Security | /site/en/security/ | OWASP review, residency, what is not done |
| Pricing | /site/en/pricing/ | Plans, add-ons, limits (proposed) |
| Docs | /site/en/docs/ | Hub: release notes, install, API, data dictionary |
| Release notes | /site/en/docs/releases/signora-trial-2026-11/ | The detailed Signora trial spec |
| Install | /site/en/docs/install/ | On-prem compose package guide |
| API | /site/en/docs/api/ | 13 OpenAPI 3 documents |
| Trial | /site/en/trial/?product=signora | Request form |
| Company / Contact / Careers / Privacy / Terms | ... | Placeholders, mostly drafts |
| Samples | /site/samples/sealed-sample.pdf, sealed-sample.verification.json | A real sealed PDF and its verifier report |

**Product status:** Signora = *In the trial now*. TroveDocs = *In development*. Diwan = *Coming*. Tameer = *Coming*.
**Tagline:** "Your information. Your orbit." Products are "different doors into the same house."

---

## 2. Signora — e-signature with a seal per signer

Hero: **"Sign with a smile."** The sender composes and sends; signers sign on the web or the phone with a code or UAE PASS; a voice assistant guides them; each signature is sealed into the PDF with a time stamp, so anyone can verify it.

Headline numbers: **14 field kinds**, a **PAdES-B-LT** seal per signer, an **RFC 3161** time stamp on every signature, and **12 weeks** from kick-off to organisation-wide go-live.

### 2.1 The signing journey (4 steps)
1. **Compose:** documents, recipients with a role and an order, fields placed on the PDF, expiry, reminders, decline policy. Nothing is saved on the server until you press Save or Send (no autosave; unsent work stays in the browser and is offered back for resume).
2. **Sign:** a personal link with no account needed, bound to the first device that opens it. Auth per recipient: none, e-mail code, SMS code, access code, or UAE PASS. The page is in English and Arabic (RTL).
3. **Seal:** each signature is sealed as PAdES-B-LT with an RFC 3161 time stamp and validation data. A final seal and a certificate of completion follow.
4. **Verify:** a public verification page, reached from the QR code on the certificate or by uploading a copy, gives a graded verdict per signature.

### 2.2 Compose and send
- **Recipient roles:** signer; approver (no fields, not sealed); CC/viewer (gets a view link and the completed copy); in-person (the sender hands over the same device).
- **14 field kinds:** signature, initials, date signed, name, date, e-mail, job title, company, text, text area, radio, dropdown, checkbox, stamp. Style tokens set size, bold and ink colour; priority is a label.
- Supporting (read-only) documents beside the documents to be signed.
- **Signing orders:** serial, parallel, or mixed groups. A parallel group completes on **all**, **any one**, or **N of M**.
- Saved signature and initials per person; a company or assigned **stamp library**.
- Scan from the composer (scan agent or camera).
- Options: subject, message, expiry, reminders, decline policy, priority.

### 2.3 The signing experience
- Codes are 6 digits, valid 10 minutes, with 5 attempts and then a 15-minute lock (tenant settings).
- UAE PASS match on name, Emirates ID, or both (a tenant setting).
- A consent step comes before documents are shown ("I agree to sign electronically").
- **AI summaries with citations** on the signing page when the tenant has a model (e.g. "What am I agreeing to?" answered with a clause reference).
- Tenant logo and accent colour.
- Decline (with a reason), delegate, and download of the sealed copy within a grace period after expiry.
- Members can sign inside the app with re-authentication (default window 5 minutes).

### 2.4 Templates and bulk send
- Versioned templates with recipient slots (fixed or open), fields bound to slots, merge fields in subject, message and text fields, and optional documents "supplied at use". One step from template to envelope.
- **Bulk send from CSV:** column mapping, preview, progress page, per-row report. Idempotent: a retried row never creates a second envelope. Licensed as `signing.bulk-send`.

### 2.5 Control after sending
- Defaults: expiry 14 days, reminder interval none, expiry warning 2 days before.
- **Remind** (new link; old links still work), **resend** (revokes the old link), **void**, delete a draft.
- **Amend:** while nobody has acted, everything can change; afterwards, only recipients still to act.
- **Decline policy:** stop the envelope, or continue with the others.
- **Extend** the deadline; **reopen** an expired envelope; a signer on an expired link can ask the sender to reopen it.

### 2.6 Sealing, keys, verification
- PAdES-B-LT per signer, then a final seal and the certificate of completion. Verifies offline, without the vendor, for years.
- **Seal key source per tenant:** a platform-held key pair (self-signed or your CA-issued PKCS#12), **Azure Key Vault**, or **AWS KMS**. The cloud paths were proven against stand-ins.
- **"Test the seal"** signs and verifies a blank page.
- Optional **PDF/A-2b** output (`signing.seal.pdfa`, off by default), checked with veraPDF. While it is on, non-archivable PDFs are refused at send.
- **Verification grades:** *Long-term valid (PAdES-LT)*; *Legacy, no time stamp* (for imported AcuteSign seals); *Invalid*. The weakest signature sets the document's grade.
- No unsigned signature field is left in a sealed PDF (checked with poppler pdfsig).
- Platform CA: the **OpenBao PKI** engine with an EC P-384 root and intermediate, 90-day org certificates renewed 30 days before expiry, dual-control rotation, and a CRL/OCSP endpoint at `/pki/`.

### 2.7 Evidence and audit
- The **History tab** shows plain sentences (sent, viewed with IP and device, authenticated by which method, signed, declined, reminded, amended, extended, reopened, downloaded), written from the signing evidence.
- A downloadable **audit report PDF** for legal use, separate from the certificate.
- **3 audit tiers:** signing evidence (10-year floor), platform audit (7 years by default), operational trail (90 days by default).
- Evidence tables are **append-only** for the application database role.

### 2.8 Administration and integration
- Settings: organisation, composer defaults, auth policy, notifications, per-language e-mail templates, branding (logo and accent, also used in mail), seal, embedding, API keys, webhooks, stamps, voice-sample consent.
- **API key scopes:** `signing:read`, `signing:send`, `signing:admin`.
- **Webhooks** signed to the Standard Webhooks convention; envelope events plus per-recipient events (notified, viewed, signed, declined).
- **Embed SDK** `@cognivos/embed-sdk-sign`: the signing page in an iframe with an origin allow-list and optional white label. Sender and placer embed modes are not included.
- REST API with generated **Java and TypeScript SDKs** (OpenAPI Generator 7.26.0).
- **Licence and Features page:** licence limits with usage; feature switches; locked features show "Available on request" with a Request button that the operator grants or declines in platform-admin.

### 2.9 Mobile app (Android)
- Sign as a member or open a signer link; native PDF viewer with zoom; tablet layouts.
- **Biometric confirmation** at Finish (the level is recorded in the evidence and the certificate).
- **Nora**, the voice and text assistant: wake word, quick phrases, on-device intents, barge-in, plus a fuller platform assistant (needs a configured model) that reads the document and explains your commitments. Nora "becomes the platform's assistant."
- Consented voice-sample capture, with models delivered over the air.
- Built with Expo (`EXPO_PUBLIC_API_URL`); package id `com.soit.signora` (to be confirmed). No iOS build and no store release yet.

### 2.10 Web scan
- A Scan button beside Upload. A local **scan agent** exposes a loopback-only API; the page pairs with it once using a code and streams pages (duplex and feeder via eSCL network scanners; USB via macOS Image Capture and Linux SANE; Windows WIA not built). Pages can be reordered, rotated and deleted, then uploaded as one PDF.
- The camera fallback works on phones and tablets.
- The agent is distributed from platform-admin ("Scan agent releases") and updates itself with signed updates. Version 0.1.0, not code-signed.

### 2.11 Migration from AcuteSign
Imports completed, declined, voided and expired envelopes and drafts, with documents, seals, certificates and audit events. The import is resumable and idempotent and produces a report. In-flight envelopes stay in AcuteSign. Signature images and access codes are not carried (hashes only).

### 2.12 Sender's assistant
The assistant sits beside the envelopes list. Example: "Which supplier contracts expire this quarter?" It returns a grounded answer with its sources and proposes actions (Remind the owners, Start a renewal). It answers only from documents you may open and changes nothing without you.

### 2.13 Measured performance (8-core / 62 GB build server)
| Test | Result |
|---|---|
| Bulk send 10,000 envelopes (org already holding 40k) | **5 min 21 s**, 0 failed, 31/s |
| 998 concurrent signers | **0 errors**, 58 ms median |
| Seal 1,000 envelopes | **90 s** (~11/s); a single envelope seals 15–30 s after the last signature |
| History tab at 50M evidence rows | **9 ms** p95; audit PDF 31 ms |
| 100k open envelopes, reminders | 104,193 timers; 2,000 due at once processed in 8.3 s |
| AcuteSign import, 1M rows / 20,100 envelopes | 17–18 envelopes/s, resumable, ~1.4 GiB memory |

### 2.14 Trial (30 days, on-prem only, every feature including add-ons)
| Limit | Value | At the limit |
|---|---|---|
| Named users | 100 | blocks adding members |
| Envelopes per month | 1,000 | blocks sending |
| Storage | 100 GiB | blocks uploads |
| OCR pages per month | 5,000 | pages fail |
| AI credits per month | 5,000 | hosted models refused |
| API calls per day | 1,000,000 | warns only |

Administrators get warnings at 80% and 100%. No grace period after the trial ends.

**Not in the trial:** qualified signatures (a level of QUALIFIED is refused); live UAE PASS (tested against a stand-in); SMS except through your own Twilio account; iOS and store builds; a code-signed scan agent; regional SaaS (no Helm chart); a Capture station; CRM connectors; PDF permissions; and a production licence key.

### 2.15 Legal position
**Advanced** electronic signatures, **not qualified** under UAE Decree-Law 46/2021 or eIDAS. Self-signed seals show "issuer unknown" in PDF readers; use a CA-issued certificate to avoid that.

### 2.16 "Questions to ask any e-signature vendor" (comparison table on the page)
Where data and keys live (on your servers / KMS) · verifies without the vendor (yes, PAdES-B-LT) · signature level (advanced) · national ID (UAE PASS) · Arabic (yes, RTL) · what is measured (published).

---

## 3. TroveDocs — documents and records (in development)
Hero: "Every document, found and understood."
- **Organise:** cabinets, folders, typed documents and records; folder types pass their properties down.
- **Govern:** permissions with inheritance, named ACLs, retention schedules, legal holds, object lock.
- **Find:** full-text search on the database for everyone; a licensed engine adds facets, suggestions, synonyms and hybrid/semantic search, and never widens permissions.
- **Understand:** classification, field extraction with quotes, summaries and Q&A, all marked *Suggested* until a person accepts them.
- **Capture:** upload or scan; per-type processing (virus scan, text extraction, image clean-up, OCR only where needed, classification, indexing); 3 OCR tiers including Arabic and a vision model.
- **Work:** versions, renditions, viewer, sharing ("Shared with me"), document generation from Word or HTML templates (single or bulk), send for signature with Signora.
- **Keep:** lifecycle states, retention and disposition, holds, an audit trail with a verifiable daily digest chain.
- Numbers: a 4 GiB upload with memory flat on a 512 MB heap; 10,000 documents through OCR; a 20M-row audit trail.
- "Ask about this folder…" sits beside the search.

## 4. Diwan — correspondence and the register (coming)
Hero: "Every letter, in its place."
- **Register:** incoming, outgoing and internal registers per year, with a numbering scheme (e.g. `IN/2026/00419`) including Hijri years. Scanning is the first intake channel.
- **Route:** tasks go to **positions**, not people; escalation goes to the position above; business time with the Hijri calendar and the GCC weekend.
- **Reply:** generated from a bilingual letterhead, put through the approval matrix, signed by the signatory and sealed with the org e-seal (two PAdES signatures), archived as PDF/A.
- **Dispatch:** cover sheets, proof of dispatch, and threads that link replies, references and forwards.
- Configuration packs: Hijri numbering, Arabic numerals, reference schemes, classification labels, letterheads. Positions have holders and validity dates; acting assignments are dated holders. Correspondents are registered once and de-duplicated.

## 5. Tameer — apps, workflows, forms (coming)
Hero: "Build what you need, on what you have."
- **Apps:** a 12-column responsive grid with widgets (including TroveDocs, Diwan and Signora widgets) and a binding grammar over your own data sources.
- **Workflows:** BPMN-style events, gateways, tasks, timers and boundary events; a properties panel, console and run overlay.
- **Forms:** generated from a type or a task; designer; sandboxed JavaScript; data-source controls; attachments.
- **Studio:** packages types, forms, workflows, pages and roles into one versioned **pack** (e.g. "Leave requests pack 1.0.3"), with Brief, Draft and review, and Publish steps, drafted by an AI author.
- A published workflow can be called as a REST operation and as an AI-agent tool. AI steps go through the gateway.

## 6. Platform (shared by every product)
One identity, one permission model, one audit trail, one AI path, one workflow engine, one search, one licence. "Zero third-party services" in the build or at runtime.

| Capability | Status |
|---|---|
| Content (types, folders, versions, renditions, retention, holds) | Trial |
| Workflow (BPMN grammar, human tasks, timers, business calendars, escalation, decision tables) | Trial |
| Forms (generated or designed, sandboxed scripts, attachments, PDF viewer) | Trial |
| Search (DB full text plus licensed engine) | In development |
| Document AI (3 OCR tiers, classification, extraction with verified quotes) | In development |
| Scanning (agent plus camera) | Trial |
| Processing as configuration (per type; each step is also a node, an operation and an AI tool) | In development |
| AI gateway (providers, connections and models per org; routes per feature; metering, allowances, rate limits) | Trial |
| Connectors (M365 Copilot and Claude via MCP) | Planned |
| Integration (REST, Java/TS SDKs, Standard Webhooks, embed SDK) | Trial |
| Licensing (multi-product, add-ons, Features page) | Trial |
| Residency (on-prem) | Trial |

**3 ways to run AI:** a cloud provider with your keys in your region; your own open model on your network (private addresses allowed via `outbound.allowed-cidrs`); on the device.
**Deployment:** On-prem (trial now); UAE data centre and dedicated instance (planned, 99.9% target); hybrid (planned).
**Theming:** a single `content/theme.json` of design tokens with a product colour per brand (Company, Signora, TroveDocs, Diwan, Tameer) and light/dark.

**7 differentiators:** 1) one platform, not a bundle; 2) deployment and residency by choice; 3) AI by configuration; 4) processing as configuration; 5) Arabic and the GCC first; 6) open integration with no third-party services; 7) transparency (measured, not promised).

## 7. Pricing (proposed, AED, VAT excluded; annual billing saves 17%)
| Plan | Price | Includes |
|---|---|---|
| Team | 95 per user per month, minimum 10 | TroveDocs and Signora (web and mobile), UAE hosting, AI metered, standard support |
| Business | 150 per user per month, minimum 25 | + AI allowance, workflow and forms, Studio packs, SSO and API |
| Platform Enterprise (recommended) | 600,000 per year flat | Unlimited users, docs and envelopes; dedicated UAE instance; 99.9% SLA; UAE PASS, PAdES-B-LT, e-seal |
| Enterprise + Nora | 900,000 per year flat | + all AI, voice-guided signing, Studio AI author, your own models and region |

Premium 24/7 support costs AED 120k per year. A perpetual licence with AMC is available on request.
**Base:** core flows, keyword search, renditions, basic OCR, workflow and forms, web scan. **Add-ons:** all AI, advanced OCR, Signora bulk send, SMS, UAE PASS, hosted e-seal, Copilot and Claude connectors, standalone search.
**Licence limits:** named users, envelopes per month, storage, AI credits, OCR pages, API calls per day, sites. On-prem licences have a 30-day read-only grace period after expiry.

## 8. Security (summary)
- The signing path was reviewed against **OWASP ASVS 5.0.0**: 22 items; 16 passed, 4 were found and fixed (resend reset the code-attempt count, two tables were not append-only, an unbounded inflate in the import, an unbounded verification upload).
- Fixes: trusted-proxy list, per-address rate limits, an authenticated UAE PASS state, and an outbound-URL policy (https only, no private or metadata IPs).
- Rate limits: 30 requests per minute per link, 300 per address, 20 verify calls; 100 MB verification uploads; 20 GB import packages.
- **Not done:** pen test, ISO 27001, the Maven dependency scan, the TSA fetch behind the URL policy, and some Linux-only test races.
- Report findings to security@soit.ae.

## 9. Install (on-prem compose)
- `infra/compose/docker-compose.sign.yml` runs the backend, sign-web, platform-admin, Postgres, a cache, ClamAV, the conversion service and nginx (2 host names: sign and admin).
- Steps: `./init-package.sh <sign host> <admin host> [--self-signed]`; edit `.env` (`BRANDING_DISPLAY_NAME`, `SPRING_MAIL_HOST/PORT`, `NOTIFICATIONS_MAIL_FROM`, `SIGNING_TSA_URL`); point DNS at the machine; `docker compose up -d`; then run the first-boot wizard at `https://<admin>/setup`. The wizard sets the operator, sign-in, master key, storage, TSA, licence and first organisation, then invites the owner.
- **A TSA is required**: without one, envelopes are signed but never sealed.
- Tiers: API (`backend`) and jobs (`worker`, `WORKER_REPLICAS`). Two DB roles (`app_migrate`, `app_runtime`). Backup with `backup-package.sh`. SCIM 2.0 directory sync at `/scim/v2/`. JWT keys and a Tink keyset for OIDC configuration.

## 10. API documents (OpenAPI 3)
Admin (591 KB, trial) · AI (303 KB) · Apps (187 KB) · Auth (13 KB, trial) · Content (791 KB) · Correspondence (92 KB) · Generation (28 KB) · Present (31 KB, a decks product) · Search (19 KB) · **Sign** (57 KB, trial: external signer page) · **Signing** (195 KB, trial: sender envelopes) · Vault (72 KB) · Workflow (303 KB).
Example from the site: `POST /api/v1/envelopes {"template":"nda-v3","signers":[…]}` returns `202 Accepted`; webhook `envelope.completed` with `webhook-signature: v1,…`.
Docs also mention a **data dictionary**: each org's types and properties exported as JSON or CSV.

## 11. Contacts
sales@soit.ae · info@soit.ae · security@soit.ae · careers@soit.ae. Company, contact, careers, privacy and terms pages are all marked as drafts or placeholders.
