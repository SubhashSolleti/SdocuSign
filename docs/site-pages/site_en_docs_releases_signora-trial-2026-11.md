URL: https://sign.sigilabs.ai/site/en/docs/releases/signora-trial-2026-11/

Signora trial release notes (November 2026) · Smart Orbit
Skip to content
Smart Orbit
Products

Products
Different doors into the same house.
- SignoraE-signature with a seal per signer
- TroveDocsDocuments and records
- DiwanCorrespondence and the register
- TameerApps, workflows and forms

Platform capabilities
Built once, shared by every product.
- ContentTypes, folders, versions, retention and holds.
- WorkflowA designer canvas, tasks, timers and decisions.
- FormsGenerated from a type or a task, or designed.
- Document AIOCR in Arabic and English, answers with quotes.
- AI gatewayYour provider, your model, your region.
- IntegrationREST API, SDKs, signed webhooks, embed.
Where it runs is your choiceA UAE data centre, a dedicated instance, or your own servers: the same product in each.

One platform
- UAE data centre
- Dedicated instance
- On-premisesSee the whole platformPlatformSecurityPricingDocumentationCompany
Dark themeالعربيةRequest a trial

Products
- SignoraE-signature with a seal per signer
- TroveDocsDocuments and records
- DiwanCorrespondence and the register
- TameerApps, workflows and forms
Platform capabilities
- Content
- Workflow
- Forms
- Document AI
- AI gateway
- Integration
- Platform
- Security
- Pricing
- Documentation
- Company
- Request a trial

# Signora trial release notes (November 2026)

Signora, from Smart Orbit.
For the IT and business leads of trial customers. Read together with the trial licence you received.

## 1. What Signora is

Signora is an electronic-signature application: a sender prepares documents, names the people who must sign, approve or
receive a copy, and sends them; each person signs on a web page or in the mobile app; the platform seals every signed
document with a PAdES-B-LT signature (an RFC 3161 time stamp and validation data embedded in the PDF), appends a
certificate of completion, and keeps an evidence trail. It runs on the same platform as the other products (documents,
workflow, notifications, audit), so permissions, retention and the audit trail are the platform's. It replaces the earlier
AcuteSign for trial customers; envelopes completed in AcuteSign can be imported (section 3). Nora is the voice and text
assistant inside the application and the mobile app.

## 2. What is in the trial

### 2.1 Compose and send

- A full-page composer: documents, recipients with a role and a signing order, field placement on the PDF, subject and
message, options (expiry, reminders, decline policy, priority). Nothing is saved on the server until you press Save as
draft or Send; unsent work is kept only in your browser and offered back for resume (Spec 21 "Decision ... no autosave").

- Recipient roles: signer, approver (no fields, not sealed), CC / viewer (receives a view link and the completed copy),
and in-person (the sender opens the signing page on the same device and hands it over) (F-1B-9, F-2-1).

- Field kinds: signature, initials, date signed, name, date, e-mail, job title, company, text, text area, radio,
dropdown, checkbox and stamp; style tokens for size, bold and ink colour; priority as a label (F-2-2, F-2-3).

- Supporting (read-only) documents beside the documents to be signed (F-FU1-2).

- Signing orders: serial, parallel, mixed groups; for a parallel order the sender may require "all", "any one" or
"N of M" to complete it (F-FU1-3).

- Saved signature and initials per person, and a company / assigned stamp library (F-FU1-1).

- Scan from the composer through the scan agent or the camera (section 2.9) (Spec 37 Task 2).

### 2.2 The signing experience

- A signer needs no account: a personal link, tied to the first device that opens it. Authentication per recipient:
none, e-mail code, SMS code, sender-set access code, or UAE PASS (the match is on name, Emirates ID or both, a tenant
setting) (F-2-8, Spec 20 Task 3, F-H2 table items 5-8).

- Codes are six digits, valid 10 minutes, five attempts then a 15-minute lock (tenant settings) (F-H2 table items 5-6).

- The signing page is available in English and Arabic with right-to-left layout, with a consent step before documents are
shown, summaries with citations when the tenant has an AI model configured, and the tenant's logo and accent colour
(F-4-5, Spec 20 Task 6, F-5-10).

- Decline (with a reason), delegate, and download of the sealed copy within a grace period after expiry (F-H2 table item 3).

- Organisation members can also sign from inside the application with re-authentication (default window 5 minutes)
(F-H2 table item 9).

### 2.3 Templates and bulk send

- Templates with versions: recipient slots (fixed or open), fields bound to slots, merge fields in subject, message and
text fields, optional documents "supplied at use". Use a template to create an envelope in one step (F-3-1, F-3-2).

- Bulk send from a CSV sheet with a column-mapping step, a preview, a progress page and a per-row report. A bulk row
retried after a crash never creates a second envelope (F-3-2, F-3-4). Bulk send is licensed as the feature
signing.bulk-send, included in the trial (Spec 32 Task 2 table).

### 2.4 Reminders, expiry, amend, decline, reopen

- Defaults for expiry (14 days), reminder interval (none) and an expiry warning (2 days before) are tenant settings; the
sender gets a warning and the waiting signers a fresh link (F-3-5).

- Remind (a new link; earlier links keep working), resend (revokes the old link), void, delete a draft (F-1B-4, F-1B-6).

- Amend a sent envelope under AcuteSign's rule: while nobody has acted, documents, fields and recipients may change; once
someone has acted, only those still to act (F-1B-5).

- Decline policy per envelope: stop the envelope, or continue with the others; the sender is told at once (F-2-4).

- Extend the deadline, and reopen an expired envelope; a signer who opens an expired link can ask the sender to reopen
it (F-2-5).

### 2.5 Sealing, the certificate, and the verification page

- Each signer's signature is sealed into the PDF as PAdES-B-LT: an RFC 3161 time stamp and validation data (certificates
and revocation information where reachable) are embedded, so the file verifies without the platform. A final seal and the
certificate of completion follow when the envelope completes (Spec 20 Task 4, F-H5 clean-install proof).

- Seal key source, per tenant: the platform-held key pair (self-signed, or your CA-issued PKCS#12), or a key that stays in
Azure Key Vault or AWS KMS. A "Test the seal" action signs and verifies a blank page (F-4-1, F-4-2, F-4-3).
The Azure and AWS paths were proven against stand-ins, not live cloud accounts (F-4-2).

- Optional PDF/A-2b output of sealed copies (signing.seal.pdfa, off by default), checked with veraPDF; a PDF that
cannot be archived (fonts not embedded, JavaScript, embedded files) is refused at send while the setting is on (F-2-6).

- A public verification page, reached from the QR code and reference on the certificate (when signing.verify.base-url is
set) or by uploading a copy you hold. It gives a graded verdict:

- PAdES-LT: signature, chain and a valid trusted time stamp;

- legacy, no time stamp: integrity and chain valid at the signing time but no time stamp (an imported AcuteSign seal);

- invalid.
The weakest signature sets the grade of a document (F-2-7, F-7-9, F-7-10).

- No unsigned signature field is left in a sealed PDF (checked with poppler pdfsig 24.02) (F-H5-10).

### 2.6 History, audit tiers, the certificate of completion

- A History tab per envelope in plain sentences (sent, viewed with IP and device, authenticated by which method, signed,
declined, reminder, amended, extended, reopened, downloaded) written from the signing evidence, not filtered from the raw
audit (Spec 21 audit decision, F-1C).

- A downloadable audit report (PDF) for legal use, separate from the certificate of completion (owner decision on F-1C-4).

- Three audit tiers with retention per tier as tenant settings: signing evidence (floor of 10 years in code), platform
audit (7 years default), operational trail (90 days default) (F-1C, Task 1 leg C).

- Signing evidence tables are append-only for the application database role (F-H2-2).

### 2.7 Administration

- Settings pages: organisation, defaults for the composer, authentication policy, notifications and templates of e-mails
(editable per language), branding (logo and accent colour, also used in e-mails), seal, embedding, API keys, webhooks,
stamps, voice-sample consent (Task 4, F-4-5, F-4-6, F-FU1-6).

- API keys with scopes (signing:read, signing:send, signing:admin) and webhooks signed to the Standard Webhooks
convention, with per-recipient events (notified, viewed, signed, declined) beside the envelope events (F-H2 table
items 17-18, F-FU1-4).

- Embed signing mode: the signing page inside your own site in an iframe with an origin allow-list and optional white
label, through @cognivos/embed-sdk-sign; sender and placer embed modes are not included (F-4-7).

- A REST API and generated Java and TypeScript SDKs (OpenAPI Generator 7.26.0) (F-4-8).

- Import from AcuteSign (administrators): completed, declined, voided and expired envelopes with documents, sealed copies,
certificates and audit events, resumable and idempotent, with a report (F-7 section).

### 2.8 The mobile app

- Signora mobile (Android build proven on an emulator; the iOS build is not yet produced): sign as a member or open a
signer's link, native PDF viewer with zoom, tablet layouts, biometric confirmation at Finish (the level is recorded in
the evidence and the certificate), Nora with a wake word, quick phrases, on-device intents, barge-in, and an assistant
through the platform (needs an AI model configured for your organisation) (Spec 21 Task 5, F-5-9, F-5-14, F-2-8).

- Consented voice-sample capture and over-the-air model delivery, switched on only by the member's consent (F-5-15).

- The app talks to the platform API directly; the on-prem package does not yet publish that route (section 3).

### 2.9 Web scan

- A Scan button beside Upload in the composer (and in the sibling products). A small scan agent on the user's PC exposes a
loopback-only API; the page discovers it, pairs once with a code, streams pages as they are scanned (duplex and feeder
supported through eSCL network scanners; USB scanners through macOS Image Capture and Linux SANE; the Windows WIA
module was not built or run in the findings, so Windows relies on network scanners until it is proven), lets the user reorder, rotate and delete pages,
and uploads one PDF. With no agent, phones and tablets use the camera (Spec 37 Tasks 1-2).

- The agent is installed from the organisation's own download (the operator uploads installers in platform-admin,
"Scan agent releases", then makes one current) and updates itself with signed updates (F-37-T3-1..9).

### 2.10 The Features page and the licence

- The trial runs 30 days with every Signora feature including the add-ons (the trial plan lists every add-on) and the
limits in section 4. A banner shows in the last days. Features the administrator switches off are off for the
organisation; features the licence does not include show as locked and can be requested (Spec 32 Tasks 2-3).

- Signora has its own Licence and Features page (Settings, Licence and features): the licence that applies, its limits with
usage, and the Sign product's features (bulk send, SMS, UAE PASS, e-seal) with the switch and the request (F-32-SIGN-1);
the operator manages licences in platform-admin (section 7).

### 2.11 Forms attachments and the PDF viewer (shared platform)

Task forms and generated forms gained an Attachment field (single or several files, allowed types and size, scan
button, camera on phones, files filed into the document type you choose) and a PDF viewer component that takes a document
id from any value on the form or page (Spec 26 Task 5, F-T5-9).

## 3. What is NOT in the trial

- Qualified signatures. Signatures are advanced, not qualified (section 5). A level of QUALIFIED is refused
(SIGN_LEVEL_UNAVAILABLE). UAE PASS signing with the signer's own certificate, a qualified time-stamp authority and an
EU remote-signing provider are open discussion D10, scheduled after hardening (Spec 20 decision 8, D10).

- UAE PASS against the live service. The flow is built and tested against a stand-in provider; UAE PASS's production
base URLs are marked "to confirm" in the findings, and each organisation needs its own UAE PASS registration. Plan time
for the registration (Spec 20 Task 3; F-H2 table item 8).

- SMS needs your own provider account. SMS codes and messages go through a Twilio adapter you configure with your own
account (account sid, token, sender number). A second adapter for a Gulf aggregator is a slot only. SMS is a licensed add-on
of Signora (signing.sms, F-32-SIGN-1; F-3-6). Users (as opposed to signers) have no phone number
in the directory, so SMS is never a notification channel for them.

- UAE PASS and the hosted e-seal are licensed add-ons (signing.uaepass, signing.eseal; F-32-SIGN-1); the trial
includes them. Capture is not licence-gated yet (F-32-T4-1).

- The Capture station (bulk scan station with batches and separators) is not built; only the web scan and the agent
(phase 1 of Spec 37, section 2.9) are.

- CRM connectors (Salesforce package, HubSpot card), custom-domain TLS upload, a billing screen and per-envelope
callback URLs were deliberately dropped (Q-S6).

- PDF permissions (owner-password restrictions) were dropped because they weaken a verifiable PAdES file (F-2-3).

- Tenant fonts, org units, embed sender and placer modes are later items (Q-S3, Q-S4, Q-S9).

- Template editing gaps: no "add from a document template" control in the template editor (REST only), no template
sharing screen, no due-date input on the bulk page (REST only) (Task 3 "Not done").

- Saved-signature scope: stored in the platform for the web and the app; the mobile app's personal stamp gallery
still holds device-only stamps (F-5-13 item 2, F-FU1-1 read together; check on your build).

- Mobile app gaps: no store release yet; the package identifier com.soit.signora is to be confirmed before a first
store upload; iOS needs a Mac with Xcode to build; speech transcription is on the device only; the agent's navigation
commands stay on-device; second-step TOTP, SSO and UAE PASS inside the app are not built (the web page handles them);
signer-side AI (summary, clause cards, questions) on the link path is not in the app; in-person hosting is not in the
app; the app needs the backend route that the on-prem package does not yet publish (F-5G-1..8, F-5-13, F-5-16, package
README "Known gaps").

- The scan agent is not code-signed. macOS builds are ad-hoc signed only (Gatekeeper asks you to use Privacy and
Security, Open Anyway); Windows builds have no Authenticode signature (SmartScreen shows "Windows protected your PC";
an MSI pushed by Intune or group policy installs without the prompt). The Windows and Linux builds were written but not
run in the build jobs, and a live self-update (install one version, publish the next) was not exercised (F-37-T3-6,
F-37-T3-11, owner item B28). The agent is version 0.1.0.

- Import of envelopes still in flight. Only finished envelopes (completed, declined, voided, expired) and drafts are
imported; sent and in-progress AcuteSign envelopes stay in AcuteSign (Q-S11, F-7 mapping). Signature images and typed
values, access codes and signing tokens are not carried (hashes only) (F-7-8). The audit trail cannot be back-dated: the
original times are kept in the evidence rows (F-7-4). Looking up an imported file that has no embedded reference by its
hash is not built (F-7-12). The export side lives on a separate, unmerged AcuteSign branch (Task 7 "Built").

- SaaS packaging. There is no Helm chart yet, so the SaaS deployment path is not available in this trial; the on-prem
package is (section 6) (F-H5 Helm paragraph, owner item B35).

- The Vault package was not walked through the clean-install procedure (package README).

- Wake-word model and feature-model licence: commercial builds need the licence verdict applied
(docs/design/wake-word-licence-2026-10.md, Spec 21 Task 0 addendum); ask before distributing the app beyond the trial.

- A production licence key: the licensing module trusts no production issuer key yet; your trial runs on the built-in
30-day trial (on-prem) and no paid licence can be issued until the company's key pair is generated (owner item B34,
Spec 32 "Release gate").

## 4. Known limits and numbers

Measured on build server A (8 cores, 62 GB RAM, Postgres 18), the Signora on-prem stack, backend limited to 8 GiB and
6 CPUs, in the development deployment profile (the sealer used an in-process time-stamp authority; a real remote
authority adds one round trip per signature). "Before" means before the fixes recorded in the same section (Spec 21
Task 8 line 3).

What
Result

One bulk send of 10,000 envelopes in one organisation
Before the fixes: all 10,000 sent in 19 min 34 s (8.5 per second) at the default workflow limit of 600 new runs per minute, none failed; without the limit 14 to 18 per second on a small tenant, falling to under 6 per second as the tenant passed 60,000 envelopes (F-H3-2, F-H3-8, F-H3-9). After the fixes, measured on the build server in an organisation already holding 40,000 envelopes, sender an administrator, limit raised: all 10,000 sent in 5 min 21 s (31 per second, none failed, 265 ms per envelope at the 95th percentile); the signers' tasks and invitations follow at about 80 per second once the sending stops, so every invitation is out about 7 minutes after the start. At the default limit of 600 per minute the limit, not the platform, sets the pace (17 minutes or more).

1,000 signers in the signing page at once, e-mail code
Before the fix to code delivery: all 1,000 finished, slowest 45 s, but half the calls waited 12 s because every code mail held a database connection. After the fix (998 signers): 0 errors, the platform's own calls 58 ms median and 1.7 s at the 95th percentile, the 95th percentile of finish 183 ms (F-H3-1 and its re-measure). Waiting for the e-mailed code was the test mail server's; real relays differ.

Sealing after signing
1,000 envelopes sealed (a seal per signer, the final seal and the certificate) in 90 s, about 11 envelopes per second. A single envelope seals in about 15 to 30 seconds after the last signature in the browser walk (F-H3 target 2, line 5).

History and audit
50 million signing evidence rows and 50 million audit rows in the database: the History tab 95th percentile 9 ms, the audit report PDF 31 ms, a page of the administrator's trail a year back 18 ms. No partitioning is needed for reads at this size (F-H3-4 is about retention).

Reminders and expiry at 100,000 open envelopes
104,193 timers scheduled; the scheduler's idle poll 0.1 ms; 1,000 reminders plus 1,000 expiry warnings due at once were processed in 8.3 seconds.

Import of a 1,000,980-row AcuteSign package (20,100 envelopes)
Completed with no duplicates, resumable: the backend was killed at 50 % and resumed on its own. 17 to 18 envelopes per second, memory flat at about 1.4 GiB. After a crash the interrupted chunk waited about 30 minutes; the heartbeat has since been shortened so a restarted node recovers its own work at start (F-H3-5).

Dashboard counts
Counted at 2.8 seconds (median) with 100,000 envelopes before the fix; now read from counters (0.6 ms in a 50,000-envelope test on a developer machine; not re-measured on the server) (F-H3-3).

Mutation testing of the signing engine, the verifier and the sealer (PIT): engine classes 79 % of mutants caught, the
verifier 91 %, quorum and parallel rules in the workflow engine 51 % and 67 % (the lower scores are paths Signora does
not use or visual drawing code covered by end-to-end walks) (Spec 21 Task 8 line 4).

End-to-end browser suites for the five web applications passed three runs in a row on a rebuilt stack (Task 8 line 1,
closed).

Trial licence limits (the trial plan; Spec 32 Task 2 and LicensingSettings.DEFAULT_PLANS):

Limit
Trial value
Behaviour at the limit

Duration
30 days from first boot (on-prem) or from signup
Grace 0: after the end, creation is blocked and features stop

Named users
100
Blocks adding members (hard)

Envelopes per month
1,000
Blocks sending (hard)

Storage
100 GiB
Blocks uploads (hard)

OCR pages per month
5,000
Refused pages are marked failed (hard)

AI credits per month
5,000
Refuses hosted models (hard)

API calls per day
1,000,000
Warns only

Support level
STANDARD
Named in the licence, not enforced in code

A notice goes to administrators at 80 % and at 100 % of a limit (licensing.limits.warn-percent). A bulk send above the
remaining envelope allowance does not fail cleanly in the bulk job: it retries until the allowance renews (found during the
re-measure, F-5 harness note); plan bulk sends within the month's allowance.

Other limits to know: an e-mail code is six digits with five attempts; the signer routes accept 30 requests per minute
per link and address, 300 per address across links, and 20 verification calls per address (signing.rate-limit.*,
platform settings); a verification upload is limited to 100 MB; an import package to 20 GB; a template or bulk sheet to the
tenant's signing.bulk.max-rows (F-H2-7, F-H2-10, F-H2 table items 14-15, 19).

## 5. Security and compliance

What was reviewed. The signing path was read against OWASP ASVS 5.0.0 (fetched from the OWASP repository at tag
v5.0.0): 22 items covering signer link entropy, expiry, device binding and download grace; one-time and access codes;
UAE PASS; the member re-authentication window; seal keys and their absence from logs; evidence immutability; the public
verification page; rate limits; embed origin allow-list; API-key scopes; webhook signatures and replay; the import
endpoint; response headers; the brand-token rule on seals and certificates. Result: 16 pass, 4 found and fixed
(code-attempt count reset by a resend; two evidence tables that were not append-only; an unbounded inflate in the import;
an unbounded verification upload), the rest recorded as follow-ups (F-H2 table, F-H2-1..3, F-H2-7).

Fixed after the review. The signer's address is now the signer's own (it had been the proxy's) through a trusted-proxy
list you set at installation; a per-address rate window; timeouts as declared settings; the UAE PASS state value is now an
authenticated, tenant-keyed, expiring value; an outbound-URL policy (https only, no private, link-local or metadata
addresses after name resolution, an allow-list for on-prem) for UAE PASS, the Key Vault URL, webhooks and tenant-configured
AI connections; and next was raised to 16.4.3 with zod and basic-ftp for published advisories (F-H2-4, -6, -8,
-9, -10, -11 and their resolutions).

What this means for self-hosted models. A model on a private network address is refused until the operator lists its
network in the platform setting outbound.allowed-cidrs (owner item B33).

Assurance level. Signora's signatures are advanced electronic signatures: each is sealed with a certificate held by
your organisation (or in your Key Vault or KMS), time-stamped by the authority you configure, and bound to the evidence of
the signer's authentication (a code, an access code or UAE PASS). They are not qualified signatures under the UAE
Decree-Law 46/2021 or eIDAS; whether your documents require a qualified signature is a legal question for your counsel
(Spec 20 decision 8, D10). Self-signed seal certificates verify as "issuer unknown" in PDF viewers; use a certificate from
your CA to avoid that (F-H5 pdfsig result).

Data residency. On-prem: all data, keys and files stay on your servers; the only outbound calls are the ones you
configure (time-stamp authority, mail relay, UAE PASS, SMS provider, AI model, Key Vault or KMS). The AI gateway sends
data to the model connection your administrator configures per organisation, and nothing else; there is no third-party
service in the build or at runtime (owner rule, 2026-10-22). Regional SaaS is not available in this trial (no Helm chart).

Not yet done. An independent penetration test and an ISO 27001 certification have not been done; both are in the
pre-release hardening plan. The Maven dependency scan (OWASP dependency-check) did not run because it needs a National
Vulnerability Database key (owner item B32); the npm dependency scan ran and its high and critical findings were fixed. The
TSA and revocation fetches are not yet behind the outbound-URL policy (their addresses are operator-set, not tenant-set).
The Linux-only test races listed in the line 5 gate (a deadlock between an amendment and content's binary job) are open
(Spec 21 Task 8 lines 2 and 5).

## 6. Installation

On-prem (compose package). infra/compose/docker-compose.sign.yml runs the backend, Signora web, platform-admin,
Postgres, a cache, ClamAV virus scanning, the document conversion service and an nginx proxy with two host names. Tried
from nothing on a clean machine with Docker Engine 29 and Compose v5, 8 GB free for the images. The steps (full text in
infra/compose/README.md):

- Pull or build the images, copy the infra/compose directory to the server.

- Run ./init-package.sh <sign host> <admin host> once (random secrets, token-signing key pair, the key set that seals
sign-in provider configuration; --self-signed makes a trial certificate).

- Edit .env: image prefix and tag, display name, mail relay and From address, and SIGNING_TSA_URL.

- Point both host names at the machine (ports 80 and 443).

- docker compose -f docker-compose.sign.yml up -d; the backend is healthy in about a minute.

- Open https://<admin host>/setup, the first-boot wizard: the operator account, sign-in, the master key (stored on the
persistent volume; back it up: losing it makes every organisation's encrypted data unreadable), the platform
storage, the Signing step (the time-stamp authority), an optional licence (skip it for the built-in 30-day trial; the
page shows the deployment id for ordering a licence) and the first organisation with its owner's e-mail.

- The owner receives an invitation, sets a password and signs in at https://<sign host>.

- Set notifications.base-url (an https URL) before inviting anyone, so mail links are absolute; set the
trusted-proxy list COGNIVOS_TRUSTED_PROXIES to your proxy's subnet so evidence records the signer's address.

The time-stamp authority is required. A production deployment refuses the built-in test authority. Without
signing.tsa.url, envelopes can be signed but not sealed: the sender's page says "Sealing not configured", platform-admin
shows a banner, and the seal completes by itself within a minute after you set the URL (F-H5-6). Use a real RFC 3161
authority (the clean install used a public one).

Upgrade, backup and restore are scripts in the same directory (backup-package.sh); an upgrade from the previous
release's package was exercised with data kept and every counted table identical. The first-boot trial clock is
recorded at the platform's first migration, so an upgrade does not restart a trial (F-H5-9).

SaaS. Not available in this trial: the Helm chart is not written (owner item B35).

Scan agent download. The operator uploads the installers in platform-admin, Scan agent releases, and makes one current;
organisation members then download it from the Scan dialog, which picks the installer for their computer and shows the
unsigned-build note (section 3). The administrator's guide is docs/guides/scan-agent-deployment.md.

Mobile app. An Android release build is made on a developer machine with the server address
(EXPO_PUBLIC_API_URL); it is not in a store yet (Spec 21 Task 5).

## 7. Reporting findings and requesting features

- Defects and questions: send them to your Smart Orbit contact with the
envelope reference (the History tab shows it), the time, and what you expected. Do not send signer links or codes.

- Features you do not have or want: a locked feature shows "Available on request". The organisation administrator
presses Request on the Features page (Signora, Settings, Licence and features); the request appears for the operator
in platform-admin, Licences, Feature requests, where it is granted or declined (Spec 32 Task 3 and "What to try").
The Signora application shows the locked state, the licence banner and its own Features page.

- Findings from your own testing of security: report them privately to your Smart Orbit contact first; the review
above does not replace your own.

Smart Orbit
This site sets no cookies and runs no analytics.
## Products
- Signora
- TroveDocs
- Diwan
- Tameer
## Platform
- Platform
- Security and compliance
- Pricing
- Request a trial
## Resources
- Release notes
- On-prem installation
- API documents
## Company
- About us
- Contact
- Careers
## Legal
- Privacy
- Terms

© 2026 Smart Orbit Information Technology LLC. Product names are proposed and pending trademark checks.
Request a trial
Ask us