URL: https://sign.sigilabs.ai/site/en/security/

Security and compliance · Smart Orbit
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

Security and compliance
# What we reviewed, what we fixed and what is not done yet
This page repeats section 5 of the Signora trial release notes. When a finding changes, both change.

## What was reviewed
The signing path was read against OWASP ASVS 5.0.0: 22 items covering signer link entropy, expiry, device binding and download grace; one-time and access codes; UAE PASS; the member re-authentication window; seal keys and their absence from logs; evidence immutability; the public verification page; rate limits; the embed origin allow-list; API-key scopes; webhook signatures and replay; the import endpoint; response headers. Result: 16 passed, 4 found and fixed, the rest recorded as follow-ups.

## Fixed after the review
The signer's address is now the signer's own, through a trusted-proxy list set at installation; a per-address rate window; timeouts as declared settings; the UAE PASS state value is authenticated, keyed to the organisation and expiring; an outbound-address policy (https only, no private, link-local or metadata addresses) for UAE PASS, the Key Vault address, webhooks and AI connections; dependencies raised for published advisories.

## Assurance level
Signora's signatures are advanced electronic signatures: each is sealed with a certificate held by your organisation (or in your Key Vault or KMS), time-stamped by the authority you configure, and bound to the evidence of the signer's authentication. They are not qualified signatures under UAE Decree-Law 46/2021 or eIDAS; whether your documents require a qualified signature is a legal question for your counsel. Self-signed seal certificates verify as issuer unknown in PDF viewers; use a certificate from your CA.

## Data residency
On-prem, all data, keys and files stay on your servers; the only outbound calls are the ones you configure: the time-stamp authority, the mail relay, UAE PASS, the SMS provider, the AI model, Key Vault or KMS. There is no third-party service in the build or at runtime.

## Evidence and keys
Signing evidence is append-only for the application's database role and kept at least 10 years. The first-boot wizard creates the master key on your persistent volume; back it up, because losing it makes every organisation's encrypted data unreadable.Read the release notes

### Not yet done
- An independent penetration test and an ISO 27001 certification have not been done; both are in the pre-release hardening plan.
- The Java dependency scan has not run (it needs a vulnerability database key); the JavaScript dependency scan ran and its high and critical findings were fixed.
- The time-stamp and revocation fetches are not yet behind the outbound-address policy (their addresses are set by the operator).
- Some test races seen only on Linux are open.

## This website
This site is static. It sets no cookies, runs no analytics and loads nothing from another service. The trial form sends what you type to our own server only.

## Reporting a security finding
Report it privately to security@soit.ae first. Do not send signer links or codes.

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