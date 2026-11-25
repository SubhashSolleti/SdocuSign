URL: https://sign.sigilabs.ai/site/en/signora/

Signora: e-signature with a seal per signer · Smart Orbit
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

SignoraIn the trial now
# Sign with a smile.
A sender prepares documents, recipients and fields and sends; each signer signs from anywhere, on the web or the phone, with a code or UAE PASS, and the voice assistant guides them in the app. Every signature is sealed into the PDF with its time stamp, so anyone holding the file can verify it, and the smile is at both ends because nothing is left in doubt.
Request a trialRead the release notes

New envelope

Supply agreement 2026.pdf

SignatureDate

Finance directorSigner 1
SupplierSigner 2
LegalCopySend

Sign here
Verified with UAE PASS

I agree to sign electronicallyFinish

Sealed into the PDF
PAdES-B-LT
- 
RFC 3161 time stamp
- 
Validation data embedded
- 
One seal per signer, then the final seal
- 
Certificate of completion

Public verification
supply-agreement-2026.pdf

Long-term valid (PAdES-LT)
Signature, chain and a trusted time stamp are valid.
Finance directorUAE PASSPAdES-LT
SupplierE-mail codePAdES-LT
Compose
Play the journeyPrevious step
- Compose
- Sign
- Seal
- VerifyNext stepIllustration composed from the product's design system, with sample data.

14 field kinds14 field kinds
stamps, dropdowns, checkboxes and attachments among them

PAdES-B-LT
a long-term-valid seal per signer, verifiable offline for years

RFC 3161
a trusted time stamp on every signature

12 weeks12 weeks
from kick-off to organisation-wide go-live in the roll-out plan

## The signing journey
Four steps, each recorded in the envelope's evidence.

- 1
### Compose
Documents, recipients with a role and an order, fields placed on the PDF, expiry, reminders and a decline policy. Nothing is saved on the server until you save or send.
- 2
### Sign
A personal link, no account needed. Authentication per recipient: none, e-mail code, SMS code, an access code or UAE PASS. The page is in English and Arabic.
- 3
### Seal
Each signature is sealed as PAdES-B-LT, with an RFC 3161 time stamp and validation data embedded. A final seal and a certificate of completion follow.
- 4
### Verify
A public verification page, from the QR code on the certificate or by uploading a copy, gives a graded verdict for every signature.

EnvelopesSearch envelopesNew envelope
SubjectRecipientsProgressState
Supply agreement 2026Finance, Legal, Supplier3 of 3Completed
Lease renewal, Building 4Landlord, Facilities1 of 2Waiting for others
Non-disclosure agreementPartner0 of 1Sent
Employment offerCandidate, HRDraftDraftThe sender's envelopes: each with its signers, their order and its state. Illustration composed from the product's design system, with sample data.

## Signora in use
The signing page on the phone, with the assistant answering before the signature; the sender's assistant beside the envelopes.

SigningPage 2 of 6

Supply agreement 2026

Sign here

What am I agreeing to?
A two-year supply agreement; quarterly deliveries; a renewal option. (clause 3.1)
Verified with UAE PASSAgree and sign
The signing page on a phone: the signer asks what they are agreeing to and signs after UAE PASS. Illustration composed from the product's design system, with sample data.

Assistant

You: Which supplier contracts expire this quarter?

Three contracts expire before the end of the quarter. The earliest is the supply agreement with Gulf Supplies LLC.
- Supply agreement 2026.pdf, page 2
- Delivery schedule.xlsx
Remind the ownersStart a renewal
Answers come from documents you may open; nothing is changed without you.The sender's assistant: a question about the envelopes, a grounded answer with its sources, and the actions it proposes. Illustration composed from the product's design system, with sample data.

## What is in the trial

### Compose and send
- Signer, approver, copy and in-person roles
- Fourteen field kinds, including stamp, dropdown and checkbox
- Serial, parallel and mixed signing orders, with all, any one or N of M
- Supporting documents beside those to be signed
- Saved signatures and a company stamp library

### Templates and bulk send
- Versioned templates with recipient slots and merge fields
- Bulk send from a CSV sheet with a mapping step, a preview and a per-row report
- A retried bulk row never creates a second envelope

### Control after sending
- Remind, resend, void, extend and reopen
- Amend while nobody has acted; afterwards, only for those still to act
- Decline with a reason, or delegate

### Sealing and keys
- A platform-held key pair, your CA-issued certificate, or a key that stays in Azure Key Vault or AWS KMS
- A Test the seal action that signs and verifies a blank page
- Optional PDF/A-2b output, checked with veraPDF

### Evidence and audit
- A History tab in plain sentences, written from the signing evidence
- An audit report PDF for legal use
- Signing evidence kept at least 10 years and append-only

### Administration and integration
- Branding, e-mail templates per language, authentication policy
- API keys with scopes and webhooks signed to the Standard Webhooks convention
- Signing inside your own site through the embed SDK
- Generated Java and TypeScript SDKs

### Mobile and scanning
- The Signora app for Android, with biometric confirmation and Nora, the voice assistant (it becomes the platform's assistant)
- Scan from the composer through the scan agent, or with the camera on phones

### Moving from AcuteSign
- Completed, declined, voided and expired envelopes imported with their documents, seals, certificates and audit events
- Resumable and idempotent, with a report

## Measured, not promised

to bulk send 10,000 envelopes in an organisation already holding 40,000, none failed
5 min 21 s5 min 21 s
Source: Release notes 4: bulk send, the re-measure after the fixes (F-H3-2)

with 998 signers in the signing page at once; the platform's calls 58 ms at the median
0 errors0 errors
Source: Release notes 4: the signing page, 998 signers (F-H3-1 re-measure)

to seal 1,000 envelopes, a seal per signer, the final seal and the certificate
90 s90 s
Source: Release notes 4: sealing after signing (F-H3, target 2)

for the History tab at the 95th percentile, with 50 million evidence rows
9 ms9 ms
Source: Release notes 4: history and audit at 50 million rows (F-H3-4)
Measured on our build server (8 cores, 62 GB RAM) with the on-prem stack in the development profile and an in-process time-stamp authority; a real remote authority adds one round trip per signature. Read the release notes

## Check a sealed file yourself
A real file, sealed by the platform's sealer for two signers and checked by the same verifier the public verification page uses. Download it and open it in any PDF tool, or upload it to a verification page.

- 1
### Open the file
Each signature is a PAdES-B-LT seal: the signature, an RFC 3161 time stamp and the validation data inside the PDF.
- 2
### Verify it
The verification page, reached by the QR code on the certificate or by uploading a copy, grades every signature: long-term valid, legacy without a time stamp, or invalid.
- 3
### Read the verdict
The weakest signature sets the document's grade. Below is the verifier's report on this file, as produced.
The platform's verifier on this file
Long-term valid (PAdES-LT)
Document fingerprint (SHA-256)
6044e0116c472209df9938ea9b370b724c3c17574951688e88f5a8e54f34e247

SignatureSealed atIntegrity, chain and time stamp
Sample Signer One26 Oct 2026, 09:13 UTCLong-term valid (PAdES-LT)
Sample Signer Two26 Oct 2026, 09:13 UTCLong-term valid (PAdES-LT)
Download the sealed sample (PDF)The verifier's report (JSON)
How it was made: a one-page sample sealed twice by the platform's PAdES provider in the development profile, with its built-in time-stamp authority and a self-signed test key, then verified by the platform's verifier (a test in the signing module, run with -Dsite.sample.out). Because the key is a test key, a PDF reader shows the signatures as valid and the issuer as unknown; with your own CA-issued certificate it names your organisation.
A sample: not a contract, and it binds no one.

## What is different about Signora
Not a signature pad: a signing assistant. Agreements people understand before they sign, and evidence that holds.

- 
### A seal per signer, verifiable anywhere
Every signature carries its own PAdES-B-LT seal and time stamp, and the public page grades each one: long-term valid, legacy without a time stamp, or invalid.
- 
### The voice assistant guides the signer. Just say it.
Sign here, read later is how a signature pad works. In the Signora app, a signer talks to the voice assistant (Nora in this trial; it becomes the platform's assistant) by voice or text: a wake word, quick phrases and intents understood on the phone itself, and a fuller assistant through the platform, which reads the document and says what you commit to, when your organisation has a model configured.
- 
### UAE PASS for signers
Signers can authenticate with UAE PASS, matched on name, Emirates ID or both, as your organisation sets.
- 
### Your keys stay yours
The seal key can stay in your own Azure Key Vault or AWS KMS; on-prem, data, keys and files stay on your servers.
- 
### Part of one platform
Permissions, retention, workflow and the audit trail are the platform's, shared with TroveDocs and Diwan.

Verificationsupply-agreement-2026.pdf

Long-term valid (PAdES-LT)
Every signature, its chain and a trusted time stamp are valid.
- Finance directorUAE PASSPAdES-LT
- Legal counselE-mail codePAdES-LT
- SupplierAccess codePAdES-LTThe verification page's verdict for an uploaded copy. Illustration composed from the product's design system, with sample data.

## Questions to ask any e-signature vendor

Our answers, each from the release notes. Use the same questions to compare.
QuestionSignora
Where do documents, keys and evidence live?On your servers with the on-prem package; the seal key can stay in your Key Vault or KMS.
Does a signed PDF verify without the vendor?Yes. The certificates, the time stamp and the revocation data travel inside the PDF (PAdES-B-LT), so it verifies without us, offline, for years.
Which signature level is it?Advanced electronic signatures. Not qualified; a qualified level is refused.
Can signers use the national identity?UAE PASS is built and tested against a stand-in; each organisation registers with UAE PASS.
Is the signing page in Arabic?Yes, English and Arabic with right-to-left layout.
What has been measured?Bulk send, concurrent signers, sealing, history and reminders at scale, published with the conditions.

## The trial
30 days with every Signora feature, including the add-ons.

Named users
100

Envelopes per month
1,000

Storage
100 GiB

OCR pages per month
5,000

AI credits per month
5,000

### Not in the trial
- Qualified signatures, a qualified time-stamp authority and remote signing with the signer's own certificate.
- UAE PASS against the live service: tested against a stand-in; your organisation needs its own UAE PASS registration.
- SMS through your own provider account only (Twilio adapter).
- An iOS build and a store release of the mobile app.
- A code-signed scan agent; macOS and Windows show a prompt on install.
- Regional SaaS: the trial is on-prem.

## Questions

### Are the signatures legally valid?+
Signora's signatures are advanced electronic signatures, bound to the signer's authentication and time-stamped. They are not qualified signatures under UAE Decree-Law 46/2021 or eIDAS. Whether your documents need a qualified signature is a question for your counsel.

### Do signers need an account?+
No. A signer receives a personal link, tied to the first device that opens it.

### Can we run it on our own servers?+
Yes. The trial installs with the on-prem compose package. Regional SaaS is not available in the trial.

### What do we need to configure?+
A mail relay and an RFC 3161 time-stamp authority. Without a time-stamp authority envelopes can be signed but not sealed.

### Can we bring our AcuteSign history?+
Finished envelopes and drafts can be imported with their documents, seals and audit events. Envelopes still in progress stay in AcuteSign.

## Try Signora on your own servers
A 30-day trial with every Signora feature, installed on-prem with the compose package. Tell us about your organisation and we will be in touch.
Request a trialTalk to us

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