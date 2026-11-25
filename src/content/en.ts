// English copy for the combined landing page.
// Rules (see docs/03-product-strategy.md): plain sentences, no internal notes,
// no "AI-powered/magic" wording, no claim the release notes do not support.
// Legal wording (legal.*) awaits counsel review (DECISION_LOG P6).

const en = {
  meta: {
    title: "Signora by Smart Orbit: e-signatures that stay on your servers",
    description:
      "Electronic signatures for UAE government and enterprise. Runs on your own servers, seals every signature into the PDF, and verifies without us for years, in Arabic and English.",
  },
  skip: "Skip to content",
  nav: {
    label: "Main",
    how: "How it works",
    ai: "Assistant",
    verify: "Verify a file",
    teams: "For your teams",
    trial: "Trial",
    docs: "Documentation",
    menu: "Menu",
    langSwitch: "العربية",
    langSwitchLabel: "اقرأ هذه الصفحة بالعربية",
    themeToDark: "Switch to dark appearance",
    themeToLight: "Switch to light appearance",
    cta: "Request a trial",
  },
  hero: {
    product: "Signora",
    by: "by Smart Orbit",
    title: "E-signatures that stay on your servers, and verify without us for years.",
    lead:
      "Send documents for signature in Arabic or English. Signers confirm who they are with UAE PASS or a one-time code. Every signature is sealed into the PDF itself, so anyone holding the file can check it, offline, long after the contract is signed.",
    primary: "Request a 30-day trial",
    secondary: "Download a sealed sample",
    secondaryNote: "PDF, 2 signers, no sign-up",
    figureCaption:
      "The real sample file, sealed by Signora for two signers, and the verifier's report on it.",
  },
  facts: [
    { term: "Where it runs", value: "On your own servers. Documents, evidence and keys stay with you." },
    { term: "How it is sealed", value: "One PAdES-B-LT seal per signer, with an RFC 3161 time stamp." },
    { term: "Who signs", value: "Signers confirm their identity with UAE PASS, an e-mail or SMS code, or an access code." },
    { term: "Languages", value: "Arabic and English, right to left where it should be." },
  ],
  explode: {
    title: "What is inside a sealed PDF",
    lead: "Scroll to take one apart. Everything needed to check a signature travels inside the file itself.",
    hint: "Scroll",
    layers: [
      { name: "The document", text: "The pages that were signed, unchanged. Any change made after sealing is detected." },
      { name: "The signature", text: "One seal per signer, made with your organisation's key, to the PAdES-B-LT standard." },
      { name: "The time stamp", text: "An RFC 3161 time stamp from the authority you choose proves when each seal was made." },
      { name: "The validation data", text: "Certificates and revocation information are embedded, so the file verifies offline, for years." },
    ],
    planes: {
      tsa: "RFC 3161 time stamp",
      chain: "Certificate chain",
      chainPath: "Seal certificate → Issuing CA → Root",
      revocation: "Revocation data embedded",
    },
  },
  ask: {
    label: "Ask about this document",
    typing: "Writing an answer",
    items: [
      { q: "What am I agreeing to?", a: "A two-year supply agreement with quarterly deliveries and an option to renew.", cite: "Clause 3.1, page 2" },
      { q: "When does it end?", a: "Twenty-four months after the effective date, unless both parties renew it.", cite: "Clause 3.1, page 2" },
      { q: "Can either side cancel?", a: "Yes, with 90 days' written notice after the first year.", cite: "Clause 9.2, page 5" },
    ],
  },
  verifyDemo: {
    replay: "Replay the check",
    checking: "Checking",
    checks: ["Integrity", "Certificate chain", "Time stamp"],
    live: "Verification finished: every signature is long-term valid.",
  },
  how: {
    title: "From draft to proof in four steps",
    lead: "Every step is written into the envelope's evidence, so you can show later exactly what happened and when.",
    steps: [
      {
        name: "Compose",
        text: "Add documents and recipients, give each a role and an order, and place the fields on the PDF. Nothing is stored on the server until you save or send.",
        detail: "14 field kinds, including stamp, dropdown and checkbox. Serial, parallel or mixed signing orders.",
      },
      {
        name: "Sign",
        text: "Each signer gets a personal link and needs no account. They read the document, confirm who they are, and sign on the web or on their phone.",
        detail: "Identity per signer: UAE PASS, e-mail code, SMS code or an access code.",
      },
      {
        name: "Seal",
        text: "Each signature is sealed into the PDF with a trusted time stamp and the data needed to validate it later. A final seal and a certificate of completion follow.",
        detail: "Your own certificate, or a key that never leaves your Azure Key Vault or AWS KMS.",
      },
      {
        name: "Verify",
        text: "Anyone can check the file: scan the QR code on the certificate, or upload a copy. Each signature gets a clear grade.",
        detail: "Long-term valid, valid without a time stamp, or invalid. The weakest signature sets the grade.",
      },
    ],
    sample: "Sample data",
  },
  panels: {
    compose: {
      head: "New envelope",
      draft: "Draft",
      file: "Supply agreement 2026.pdf",
      pages: "6 pages",
      recipients: [
        { name: "Finance director", role: "Signer", auth: "UAE PASS" },
        { name: "Gulf Supplies LLC", role: "Signer", auth: "E-mail code" },
        { name: "Legal counsel", role: "Copy", auth: "" },
      ],
      send: "Send",
    },
    sign: {
      head: "Supply agreement 2026",
      page: "Page 2 of 6",
      lines: ["3.1 Term. This agreement runs for twenty-four (24) months from the effective date.", "3.2 Deliveries are made each quarter."],
      box: "Sign here",
      verified: "Identity confirmed with UAE PASS",
      finish: "Finish",
    },
    seal: {
      head: "Sealing",
      status: "Complete",
      events: [
        { what: "Finance director · PAdES-B-LT", when: "09:13:41 UTC" },
        { what: "Gulf Supplies LLC · PAdES-B-LT", when: "09:13:41 UTC" },
        { what: "Final seal", when: "09:13:42 UTC" },
        { what: "Certificate of completion", when: "09:13:42 UTC" },
      ],
    },
    verify: {
      head: "Verification",
      file: "supply-agreement-2026.pdf",
      verdict: "Long-term valid",
      verdictSub: "Signature, chain and a trusted time stamp are valid.",
      rows: [
        { who: "Finance director", how: "UAE PASS" },
        { who: "Gulf Supplies LLC", how: "E-mail code" },
      ],
    },
  },
  ai: {
    title: "An assistant that shows where its answers come from",
    lead:
      "Signora can explain a document before someone signs it, and answer questions about your envelopes. Every answer points to the clause or file it came from, and nothing changes without a person.",
    signer: {
      title: "For signers: understand before you sign",
      text: "On the signing page, a signer can ask what they are agreeing to. The answer quotes the clause it relies on.",
      q: "What am I agreeing to?",
      a: "A two-year supply agreement with quarterly deliveries and an option to renew.",
      cite: "Clause 3.1, page 2",
      verified: "Identity confirmed with UAE PASS",
      action: "Agree and sign",
    },
    sender: {
      title: "For senders: ask about your envelopes",
      text: "The assistant answers from the documents you are allowed to open, lists its sources, and proposes actions for you to confirm.",
      q: "Which supplier contracts expire this quarter?",
      a: "Three contracts expire before the end of the quarter. The earliest is the supply agreement with Gulf Supplies LLC.",
      sources: ["Supply agreement 2026.pdf, page 2", "Delivery schedule.xlsx"],
      actions: ["Remind the owners", "Start a renewal"],
      note: "Proposed actions run only when you confirm them.",
    },
    voice: {
      title: "On the phone: guided by voice",
      text: "In the Signora app for Android, a signer can talk to the assistant, Nora. Wake word, quick phrases and common requests are understood on the phone itself.",
    },
    controlsTitle: "You stay in control of the AI",
    controls: [
      { k: "Which model", v: "The one your administrator configures: a cloud provider with your own keys, a model on your own network, or on the device." },
      { k: "Where data goes", v: "Only to the model connection you configure. Nothing else." },
      { k: "When it is on", v: "Off until a model is configured for your organisation. Every other feature works without it." },
      { k: "Who decides", v: "A person. Summaries are marked as suggestions, and actions wait for confirmation." },
    ],
  },
  verify: {
    title: "Check a sealed file yourself",
    lead:
      "This is a real file, sealed by Signora for two signers and checked by the same verifier the public verification page uses. Open it in any PDF reader or upload it to a verification page.",
    steps: [
      "Download the sealed sample.",
      "Open it in a PDF reader and look at the signature panel, or upload it to a verification page.",
      "Compare the result with the verifier's report below.",
    ],
    reportTitle: "The verifier's report on this file",
    fingerprint: "Document fingerprint (SHA-256)",
    signer: "Signature",
    sealedAt: "Sealed at",
    result: "Integrity, chain and time stamp",
    lt: "Long-term valid",
    downloadPdf: "Download the sealed sample (PDF)",
    downloadJson: "Download the verifier's report (JSON)",
    note:
      "Sealed with a test key, so a PDF reader names the issuer as unknown. With your organisation's own certificate, it names your organisation. This is a sample: not a contract, and it binds no one.",
  },
  teams: {
    title: "Answers for everyone who has to approve it",
    lead: "Choosing a signing platform involves several teams. Each will want to check something different.",
    groups: [
      {
        id: "security",
        name: "Security and IT",
        items: [
          "Installs on your own servers with a Docker Compose package. Data, keys and files stay with you.",
          "The only outbound calls are the ones you configure: time-stamp authority, mail relay, UAE PASS, SMS, AI model, key vault.",
          "Seal keys can stay in Azure Key Vault or AWS KMS.",
          "Single sign-on, SCIM directory sync, scoped API keys and signed webhooks.",
          "The signing path was reviewed against OWASP ASVS 5.0.0: 22 items, 16 passed, 4 found and fixed.",
          "Not yet done: an independent penetration test and ISO 27001 certification.",
        ],
        links: [
          { label: "Security and compliance", href: "https://sign.sigilabs.ai/site/en/security/" },
          { label: "On-prem installation guide", href: "https://sign.sigilabs.ai/site/en/docs/install/" },
        ],
      },
      {
        id: "legal",
        name: "Legal and compliance",
        items: [
          "Signora produces advanced electronic signatures under UAE Federal Decree-Law No. 46 of 2021. It does not produce qualified signatures.",
          "Each signature is bound to the evidence of how the signer confirmed their identity, and time-stamped by the authority you choose.",
          "A history of every envelope in plain sentences, and an audit report PDF for legal use.",
          "Signing evidence is kept for at least 10 years and cannot be edited.",
          "Whether a document needs a qualified signature is a question for your counsel.",
        ],
        links: [{ label: "Release notes: what is and is not included", href: "https://sign.sigilabs.ai/site/en/docs/releases/signora-trial-2026-11/" }],
      },
      {
        id: "procurement",
        name: "Procurement",
        items: [
          "Smart Orbit Information Technology LLC, registered in the United Arab Emirates.",
          "A 30-day trial with every Signora feature, installed on your servers. Data is kept when you convert.",
          "Licensed per user for teams, or as one flat enterprise licence with no counting.",
          "On-prem licences keep everything readable for 30 days after expiry.",
          "Standard support included; premium 24/7 UAE support available.",
        ],
        links: [{ label: "Pricing", href: "https://sign.sigilabs.ai/site/en/pricing/" }],
      },
    ],
  },
  measured: {
    title: "Measured, not promised",
    lead: "Numbers from our own test runs, published with the conditions they were measured under.",
    items: [
      { value: "5 min 21 s", label: "to bulk send 10,000 envelopes in an organisation already holding 40,000. None failed." },
      { value: "0 errors", label: "with 998 signers on the signing page at once. Median response 58 ms." },
      { value: "90 s", label: "to seal 1,000 envelopes: a seal per signer, the final seal and the certificate." },
      { value: "9 ms", label: "to open an envelope's history (95th percentile) with 50 million evidence rows." },
    ],
    conditions:
      "Measured on our build server (8 cores, 62 GB RAM) with the on-prem stack in the development profile and an in-process time-stamp authority. A remote time-stamp authority adds one round trip per signature.",
    source: "Read the release notes",
  },
  questions: {
    title: "Questions to ask any e-signature vendor",
    lead: "Our answers, each from our release notes. Use the same questions to compare.",
    head: ["Question", "Signora"],
    rows: [
      ["Where do documents, keys and evidence live?", "On your servers. The seal key can stay in your Key Vault or KMS."],
      ["Does a signed PDF verify without the vendor?", "Yes. Certificates, time stamp and revocation data travel inside the PDF."],
      ["Which signature level is it?", "Advanced electronic signatures. Not qualified."],
      ["Can signers use the national identity?", "Yes, UAE PASS. Each organisation registers with UAE PASS."],
      ["Is the signing page in Arabic?", "Yes, Arabic and English, with right-to-left layout."],
      ["What has been measured?", "Bulk send, concurrent signers, sealing, history and reminders at scale, with conditions."],
    ],
  },
  platform: {
    title: "Part of one platform",
    lead:
      "Signora shares its permissions, workflow, retention and audit trail with the products we are building next. A document signed in Signora will be a document in TroveDocs, routed by the same workflow.",
    items: [
      { name: "TroveDocs", what: "Documents and records, with Arabic OCR and search.", status: "In development" },
      { name: "Diwan", what: "The correspondence register, with Hijri numbering and routing to positions.", status: "Coming" },
      { name: "Tameer", what: "Apps, workflows and forms on your own databases.", status: "Coming" },
    ],
    interest: "Register interest",
    more: "See the whole platform",
  },
  trial: {
    title: "Try Signora on your own servers",
    lead: "A 30-day trial with every Signora feature, installed with the on-prem package. Tell us about your organisation and we will reply by e-mail.",
    includedTitle: "Included in the trial",
    included: [
      ["Duration", "30 days"],
      ["Named users", "100"],
      ["Envelopes per month", "1,000"],
      ["Storage", "100 GiB"],
      ["AI credits per month", "5,000"],
    ],
    notTitle: "Not in the trial",
    not: [
      "Qualified signatures.",
      "UAE PASS against the live service: your organisation needs its own registration.",
      "An iOS app and store releases of the mobile app.",
      "A hosted (SaaS) version: the trial runs on your servers.",
    ],
    needTitle: "What you will need",
    need: "A server with Docker, a mail relay, and an RFC 3161 time-stamp authority.",
    form: {
      title: "Request a trial",
      org: "Organisation",
      orgHint: "So we can prepare the right licence.",
      name: "Your name",
      email: "Work e-mail",
      emailHint: "We reply here. We do not add you to a mailing list.",
      role: "Your role",
      roleOptional: "optional",
      roles: ["IT or security", "Legal or compliance", "Procurement", "Business team", "Other"],
      rolePlaceholder: "Choose one",
      message: "Anything we should know",
      messageHint: "For example: expected volume, or documents you plan to sign.",
      required: "required",
      submit: "Send the request",
      privacy: "We use these details only to answer your request.",
      privacyLink: "Privacy notice",
    },
  },
  thanks: {
    title: "Thank you. Your request has reached us.",
    text: "We will reply by e-mail, usually within two working days. While you wait, you can read the installation guide or check the sealed sample.",
    back: "Back to the page",
    install: "Read the installation guide",
  },
  error: {
    title: "We could not send your request",
    text: "Please check that the organisation, your name and a valid work e-mail are filled in, then try again.",
    back: "Back to the form",
  },
  footer: {
    company: "Smart Orbit Information Technology LLC",
    country: "United Arab Emirates",
    contactTitle: "Contact",
    contacts: [
      { label: "Sales and trials", email: "sales@soit.ae" },
      { label: "General", email: "info@soit.ae" },
      { label: "Report a security finding", email: "security@soit.ae" },
    ],
    resourcesTitle: "Resources",
    resources: [
      { label: "Release notes", href: "https://sign.sigilabs.ai/site/en/docs/releases/" },
      { label: "On-prem installation", href: "https://sign.sigilabs.ai/site/en/docs/install/" },
      { label: "API documents", href: "https://sign.sigilabs.ai/site/en/docs/api/" },
      { label: "Security and compliance", href: "https://sign.sigilabs.ai/site/en/security/" },
    ],
    legalTitle: "Legal",
    legal: [
      { label: "Privacy", href: "https://sign.sigilabs.ai/site/en/privacy/" },
      { label: "Terms", href: "https://sign.sigilabs.ai/site/en/terms/" },
    ],
    noCookies: "This site sets no cookies and runs no analytics.",
    names: "Product names are proposed and pending trademark checks.",
  },
};

export type Dictionary = typeof en;
export default en;
