URL: https://sign.sigilabs.ai/site/en/docs/install/

On-prem installation guide · Smart Orbit
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

Documentation
# On-prem installation guide
From the package's README.

docker-compose.vault.yml runs the Vault product (backend, web, Postgres, ClamAV, the extraction and conversion
services); docker-compose.sign.yml the Sign product. dev/ is the development stack (Mailpit as the mail sink on
http://localhost:8025, MinIO-compatible store, the e2e fixtures); never use it as a deployment.

## Installing the Sign package (Signora) from nothing

Tried on a clean machine (Docker Engine 29 with Compose v5, 8 GB free for the images; nothing else installed) --
Spec 21 Task 8 line 5. The Vault package follows the same shape and is not yet covered by this walk.

- Images. The package runs ${IMAGE_PREFIX}/dist-sign, sign-web, platform-admin and conversion at ${IMAGE_TAG}.
From the release's registry (docker compose pull) or built from a checkout with infra/scripts/build-images.sh
(IMAGE_PREFIX=acme IMAGE_TAG=1.0.0 ONLY="dist-sign sign-web platform-admin" infra/scripts/build-images.sh, and the
conversion image from infra/workers/conversion). Copy infra/compose/ to the server; nothing else of the repository
is needed to run it.

- Prepare the directory once: ./init-package.sh sign.acme.example admin.acme.example [--self-signed]. It writes
secrets/ (the three database passwords, the password pepper, the token-signing key pair, and
auth_oidc_config_keyset.txt -- the Tink keyset sealing the sign-in providers' configuration; the backend refuses
to start in production without it; and auth_setup_token.txt, the one-time token the first-boot wizard asks for,
so a stranger who reaches the fresh install first cannot claim it), .env from
.env.example, and with --self-signed a trial certificate in certs/. It never overwrites what exists, so it is
safe to run again after an upgrade. A production host puts its CA's fullchain.pem / privkey.pem in certs/.

- Edit .env: the image prefix and tag, BRANDING_DISPLAY_NAME, the mail relay (SPRING_MAIL_HOST / _PORT,
NOTIFICATIONS_MAIL_FROM) and SIGNING_TSA_URL, your RFC 3161 time-stamp authority. Without a time-stamp
authority nothing can be sealed (production refuses the built-in test one). The value is seeded once as the
platform setting signing.tsa.url; the wizard's Signing step (6) shows it and lets you change it. While it is
missing, platform-admin shows "Sealing not configured: set signing.tsa.url" above every page, an envelope's detail
in Signora says the same instead of "Sealed", the wait is audited (signing.seal.blocked) and the seal job waits
(it is not retried to death): the envelope seals by itself within a minute of the setting being set
(signing.seal.unconfigured-recheck). Relay credentials, if it wants
them, go in as two more secret files secrets/spring.mail.username.txt / spring.mail.password.txt mounted by
adding them to the backend's secrets: with the targets spring.mail.username / spring.mail.password.

- DNS: both host names to this machine (ports 80 and 443).

- Start: docker compose -f docker-compose.sign.yml up -d; the backend is healthy after about a minute (it
creates the schema as app_migrate and runs as app_runtime: two database roles, initdb/10-roles.sh).

- First-boot wizard: https://<admin host>/setup -- the operator's account, sign-in, the master key (reference
/var/lib/app/keys, a directory of the persistent home volume: back it up, losing it makes every tenant's
encrypted data unreadable), the platform storage (Local disk), Signing -- the time-stamp authority's URL
(prefilled from SIGNING_TSA_URL; the built-in test authority is offered only outside production, labelled as
development-only), an optional licence (skipped: the built-in trial
runs 30 days with every Signora feature; the page shows the deployment id to order a licence with) and the first
organisation.

- The organisation's first owner. The wizard's last step asks for the owner's e-mail with the organisation: the
owner receives an invitation to set a password (https://<sign host>/invite/...), then signs in at
https://<sign host> and invites the others from Signora. When the mail relay is not configured yet the wizard
shows the one-time invitation link instead (hand it over another way; it works once). An organisation without an
owner gets the same Invite owner on platform-admin's Tenants > Members page.

- Optional: Licence file (platform-admin Licences), the scan agent's installers (Scan agent releases: upload a
file, make it current), COGNIVOS_TRUSTED_PROXIES (the compose network's subnet, so the evidence records the
signer's address).

### Upgrading

./backup-package.sh first (database dump, the home volume, secrets and certificates). Then pull or build the new images,
set IMAGE_TAG, replace the package files from the new release (compare .env.example with .env for new variables),
run ./init-package.sh <hosts> (adds any new secret), and docker compose -f docker-compose.sign.yml up -d. The backend
applies the new migrations itself at start, as app_migrate, before it serves; data and sessions stay (the token key is
persistent). Migrations only go forward: a rollback is the backup restored with the previous release's images.

### Backup

./backup-package.sh [compose file] [target directory]: app.dump (pg_dump -Fc), home.tgz (the deployment home
volume) and package-config.tgz (secrets, certificates, .env). Restore: an empty stack, pg_restore into app, the
volume's content back into home, the secrets back in place.

### Tiers (Spec 72 J1)

backend is the API tier (it runs no jobs; API_POOL_SIZE, default 20) and worker the jobs tier (the same image with
JOBS_WORKER_ENABLED=true; JOBS_POOL_SIZE, default the sum of the lanes' defaults + 2 = 9 + 2 x processors (Spec 72 J2:
the executions in flight are the sum of the jobs.lanes.* settings); no published port). WORKER_REPLICAS=2 runs two workers; a worker stopped with docker compose stop worker drains its running jobs (up to
2 x 30 s, within its 90 s grace); a killed one's jobs are revived by a peer after the heartbeat window (3-4 min). Size
Postgres' max_connections (default 100) for API + workers x (pool + 1 LISTEN connection) + the migrator.

### Known gaps of this package

- No Helm chart exists yet (infra/helm/values.yaml holds the shape of the worker components only).

- The ports 80 / 443 of the proxy are the only published ones; the backend is reachable only through the web apps. A
mobile app that talks to the platform API directly needs the proxy to publish it (not part of this package yet).

## Required settings

Variable
Meaning

BRANDING_DISPLAY_NAME
the product's display name in the UI, mails and generated documents

NOTIFICATIONS_MAIL_FROM
the From address of every mail the platform sends (Spec 09b: invitations, password resets, share notices). Unset, those routes answer 503 NOTIFICATIONS_UNCONFIGURED; the compose file refuses to start without it

SIGNING_TSA_URL
the RFC 3161 time-stamp authority every seal is time-stamped by (seeded once as signing.tsa.url; the compose file refuses to start without it). Missing in production, nothing is sealed and platform-admin says so

SPRING_MAIL_HOST / SPRING_MAIL_PORT
the SMTP relay (port default 587); credentials, if the relay wants them, go in as the configtree secrets spring.mail.username and spring.mail.password, never in the environment

The links in those mails are absolute when notifications.base-url (an https:// URL of the web application) is set
as a platform setting; set it before inviting anyone.

## The sign-in providers' keyset

auth.oidc-config-keyset is a Tink JSON keyset (one AES256_GCM key) that seals every external sign-in provider's
configuration (an OIDC client secret among it). init-package.sh writes it once to secrets/auth_oidc_config_keyset.txt
(both composes mount it as the config-tree file auth.oidc-config-keyset); keep it in the backup with the other
secrets and never replace it -- a new keyset cannot read the stored providers. With DEPLOYMENT_PROFILE=production
the backend refuses to start without it (the message names the setting); in development it warns and uses a keyset
for that boot only.

## JWT signing key

The backend signs tokens with auth.jwt-private-key-pem / auth.jwt-public-key-pem (env AUTH_JWT_PRIVATE_KEY_PEM /
AUTH_JWT_PUBLIC_KEY_PEM, PKCS#8 private and X.509 public key, PEM or header-less base64). Unset, it generates an
ephemeral key per boot and every restart invalidates every session. Development: run dev/generate-jwt-keys.sh once;
it writes dev/secrets/jwt.env (git-ignored) which the dev compose backend reads. The Sign package supplies the pair as the secrets
auth_jwt_private_key / auth_jwt_public_key (init-package.sh generates them); the Vault package mounts the
same files since F-H5-11 (run init-package.sh <vault host> <admin host> in its directory); the Helm charts do not set
the keys yet (gap, Spec 01 F-O).

## The certificate authority (Spec 42)

Signora's organisation certificates are issued by the platform's own CA: OpenBao's PKI engine (MPL-2.0), an EC P-384
root, an EC P-384 issuing intermediate and the organisation-signing role (90-day certificates, renewed 30 days before
they end). It runs with the ca profile: docker compose --profile ca up -d.

The seal (control a). Write openbao/seal.hcl before the first start, naming the customer's KMS or HSM as OpenBao's
auto-unseal: seal "awskms" {...}, seal "azurekeyvault" {...}, seal "gcpckms" {...}, seal "transit" {...} (an
existing Vault / OpenBao) or the pkcs11 KMS plugin for an on-prem HSM (OpenBao 2.7 ships the cloud seals and PKCS#11
as KMS plugins: see openbao.org, "seal stanza"). Without it OpenBao starts sealed (Shamir) and the operator unseals it
by hand after every restart. Never use the development stack's static seal in a customer's deployment: its key sits
beside the data.

After the first boot. openbao-init writes init.json (the root token and the recovery key) and root-1.json (the
root CA's private key) to the openbao_init volume. Copy both to cold storage (two custodians), then
docker compose exec openbao bao token revoke <root token> and delete both files from the volume.

Root offline (control b). The root signs only the issuing intermediate. Once root-1.json is in cold storage, remove
the root's key from OpenBao: bao delete pki-root/key/root-1 (the issuer, its certificate and its last CRL stay; set
bao write pki-root/config/crl expiry=8760h and bao read pki-root/crl/rotate first, so the root's CRL outlives the
year). A CA rotation (platform-admin, dual control) then needs the root back for one signature:
bao write pki-root/issuers/import/bundle pem_bundle=@root-bundle.pem, approve the rotation, delete the key again.

Revocation data (control d). The certificates name http://<SIGN_HOST>/pki/issuing/... for their CRL, OCSP responder
and CA certificate; nginx serves /pki/ through the backend's read-only route (/api/v1/sign/pki/...), which forwards
only those paths to OpenBao. GET /pki/health answers 200 while the CA answers and its CRL is current, 503 otherwise:
add it to the customer's monitoring. The Vault package (F-42-11) carries the same ca profile, secrets and settings;
it has no reverse proxy of its own, so set PKI_PUBLIC_BASE in its .env to the address relying parties reach and route
/pki/ there to the backend's /api/v1/sign/pki/.

Directory sync (SCIM 2.0, Spec 55). The organisation's identity provider (Entra ID, Okta, ...) is a server, not a browser:
route /scim/v2/ straight to the backend (proxy_pass http://backend:8080;, client_max_body_size 4m, with Host,
X-Forwarded-For, X-Forwarded-Proto and X-Forwarded-Host set so the resources' meta.location is the public address).
The Sign package's nginx.sign.conf.template carries the block; the Vault package has no proxy of its own, so the
customer's proxy needs the same location. The backend accepts only the organisation's SCIM token there (a Directory
setting, platform-admin / Vault admin). The dev stack publishes the backend on 127.0.0.1:8088, so the IdP's test
calls reach http://localhost:8088/scim/v2/ directly.

Dual control (control e). Rotating the issuing CA and bulk revocation are asked by one platform operator and approved
by another (platform-admin, Certificate authority; signing.ca.dual-control, on by default). Every issuance, renewal,
revocation and CA change is in the audit trail with who and why (control c).

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