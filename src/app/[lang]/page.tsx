import { notFound } from "next/navigation";
import { getDictionary, isLocale } from "@/content";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SealMark } from "@/components/Seal";
import { ComposePanel, SealPanel, SignPanel, VerifyPanel } from "@/components/Panels";
import { IconCheckSeal, IconDoc, IconDownload } from "@/components/icons";
import { Motion } from "@/components/Motion";
import { AskDemo } from "@/components/AskDemo";
import { VerifyDemo } from "@/components/VerifyDemo";
import report from "../../../public/samples/sealed-sample.verification.json";

const SITE = "https://sign.sigilabs.ai/site";
const SEAL_LABEL = "SEALED · PAdES-B-LT · RFC 3161 · ";

// Evidence timestamps are shown the way the verifier reports them: ISO-style, UTC,
// identical in both languages (no bidi reordering of mixed Arabic/Latin dates).
function sealedAt(iso: string) {
  return iso.replace("T", " ").replace(/:\d\dZ$/, " UTC").replace(/Z$/, " UTC");
}

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);
  const panels = t.panels;
  const stepPanels = [
    <ComposePanel key="c" p={panels.compose} sample={t.how.sample} />,
    <SignPanel key="s" p={panels.sign} sample={t.how.sample} />,
    <SealPanel key="l" p={panels.seal} sample={t.how.sample} />,
    <VerifyPanel key="v" p={panels.verify} sample={t.how.sample} />,
  ];
  const firstSig = report.signatures[0];

  return (
    <>
      <a className="skip" href="#main">
        {t.skip}
      </a>
      <Header t={t} lang={lang} />
      <Motion />

      <main id="main">
        {/* ---------- Hero: the real sealed document in 3D ---------- */}
        <section className="hero" aria-labelledby="hero-title" data-scene="hero">
          <div className="wrap hero-stack">
            <div className="hero-copy">
              <p className="product-line hero-in" style={{ ["--d" as string]: "0ms" }}>
                <strong>{t.hero.product}</strong>
                <span>{t.hero.by}</span>
              </p>
              <h1 id="hero-title" className="hero-in" style={{ ["--d" as string]: "80ms" }}>
                {t.hero.title}
              </h1>
              <p className="lead hero-in" style={{ ["--d" as string]: "160ms" }}>
                {t.hero.lead}
              </p>
              <div className="hero-actions hero-in" style={{ ["--d" as string]: "240ms" }}>
                <a className="btn btn-primary" href="#trial-form">
                  {t.hero.primary}
                </a>
                <a className="btn btn-secondary" href="/samples/sealed-sample.pdf" download>
                  {t.hero.secondary}
                </a>
              </div>
              <p className="hero-note hero-in" style={{ ["--d" as string]: "300ms" }}>
                {t.hero.secondaryNote}
              </p>
            </div>

            <figure className="doc-figure" data-tilt="7">
              <div className="doc-intro">
                <div className="doc-3d">
                  <div className="doc-sheet back-2" aria-hidden="true" />
                  <div className="doc-sheet back-1" aria-hidden="true" />
                  <div className="doc-page">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/samples/sealed-sample-page.png" alt="" width={989} height={1400} fetchPriority="high" />
                    <SealMark uid="1" className="seal-mark one" label={SEAL_LABEL} />
                    <SealMark uid="2" className="seal-mark two" label={SEAL_LABEL} />
                    <span className="doc-sheen" aria-hidden="true" />
                  </div>
                  <div className="verdict-slip" role="group" aria-label={t.verify.reportTitle}>
                    <div className="verdict-head">
                      <IconCheckSeal />
                      <span>
                        {t.verify.lt} <span className="nowrap ltr">(PAdES-LT)</span>
                      </span>
                    </div>
                    <p className="verdict-file mono ltr">sealed-sample.pdf</p>
                    <dl className="verdict-rows">
                      {report.signatures.map((s) => (
                        <div key={s.name}>
                          <dt>{s.name}</dt>
                          <dd className="mono ltr">{sealedAt(s.signedAt)}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </div>
              <figcaption>{t.hero.figureCaption}</figcaption>
            </figure>
          </div>
        </section>

        {/* ---------- Facts ---------- */}
        <section className="facts-section" aria-label={t.hero.product}>
          <div className="wrap facts">
            <dl>
              {t.facts.map((f, i) => (
                <div key={f.term} data-reveal style={{ ["--d" as string]: `${i * 90}ms` }}>
                  <dt>{f.term}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ---------- Exploded view: what is inside a sealed PDF (scroll-driven 3D) ---------- */}
        <section className="explode" id="inside" aria-labelledby="inside-title" data-scene="explode" data-active="-1">
          <div className="explode-sticky">
            <div className="wrap explode-grid">
              <div className="explode-copy">
                <h2 id="inside-title" data-reveal>
                  {t.explode.title}
                </h2>
                <p className="explode-lead" data-reveal>
                  {t.explode.lead}
                </p>
                <ol className="layer-list">
                  {t.explode.layers.map((l, i) => (
                    <li key={l.name} className="layer-item" data-layer={i}>
                      <span className="layer-num">{i + 1}</span>
                      <div>
                        <h3>{l.name}</h3>
                        <p>{l.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="explode-stage" aria-hidden="true">
                <div className="layers">
                  <div className="plane plane-doc" style={{ ["--i" as string]: 0 }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/samples/sealed-sample-page.png" alt="" width={989} height={1400} loading="lazy" />
                  </div>
                  <div className="plane plane-sig" style={{ ["--i" as string]: 1 }}>
                    <SealMark uid="3" className="plane-seal one" label={SEAL_LABEL} />
                    <SealMark uid="4" className="plane-seal two" label={SEAL_LABEL} />
                    <span className="plane-tag">PAdES-B-LT</span>
                  </div>
                  <div className="plane plane-tsa" style={{ ["--i" as string]: 2 }}>
                    <div className="plane-card">
                      <strong>{t.explode.planes.tsa}</strong>
                      <span className="mono ltr">{firstSig.signedAt.replace("T", " ").replace("Z", " UTC")}</span>
                    </div>
                  </div>
                  <div className="plane plane-val" style={{ ["--i" as string]: 3 }}>
                    <div className="plane-card">
                      <strong>{t.explode.planes.chain}</strong>
                      <span>{t.explode.planes.chainPath}</span>
                      <span className="plane-ok">
                        <IconCheckSeal /> {t.explode.planes.revocation}
                      </span>
                    </div>
                  </div>
                </div>
                <span className="scroll-hint">{t.explode.hint}</span>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- How it works: pinned 3D cube on large screens, tiles elsewhere ---------- */}
        <section className="section section-alt how" id="how" aria-labelledby="how-title">
          <div className="wrap">
            <div className="section-head" data-reveal>
              <h2 id="how-title">{t.how.title}</h2>
              <p>{t.how.lead}</p>
            </div>
            <ol className="steps">
              {t.how.steps.map((s, i) => (
                <li className="step" key={s.name} data-reveal data-tilt="4" style={{ ["--d" as string]: `${(i % 2) * 120}ms` }}>
                  <div className="step-index">
                    <b>{i + 1}</b>
                  </div>
                  {stepPanels[i]}
                  <h3>{s.name}</h3>
                  <p>{s.text}</p>
                  <p className="detail">{s.detail}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="cube-scene" data-scene="cube" data-active="0">
            <div className="cube-sticky">
              <div className="wrap cube-grid">
                <ol className="cube-steps">
                  {t.how.steps.map((s, i) => (
                    <li key={s.name} className="cube-step" data-step={i}>
                      <span className="layer-num">{i + 1}</span>
                      <div>
                        <h3>{s.name}</h3>
                        <p>{s.text}</p>
                        <p className="detail">{s.detail}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <div className="cube-stage" aria-hidden="true" data-tilt="5">
                  <div className="cube">
                    {stepPanels.map((p, i) => (
                      <div className="face" key={i} style={{ ["--f" as string]: i }}>
                        {p}
                      </div>
                    ))}
                  </div>
                  <div className="cube-shadow" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Assistant ---------- */}
        <section className="section" id="assistant" aria-labelledby="ai-title">
          <div className="wrap">
            <div className="section-head" data-reveal>
              <h2 id="ai-title">{t.ai.title}</h2>
              <p>{t.ai.lead}</p>
            </div>

            <div className="ai-grid">
              <div className="ai-block" data-reveal>
                <h3>{t.ai.signer.title}</h3>
                <p>{t.ai.signer.text}</p>
                <div className="phone-wrap" data-tilt="8">
                  <div className="phone">
                    <div className="phone-screen">
                      <div className="phone-bar">
                        <span>{panels.sign.head}</span>
                        <span>{panels.sign.page}</span>
                      </div>
                      <div className="phone-body">
                        <div className="sign-box">{panels.sign.box}</div>
                        <AskDemo items={t.ask.items} label={t.ask.label} typing={t.ask.typing} />
                        <span className="check">
                          <IconCheckSeal />
                          {t.ai.signer.verified}
                        </span>
                        <span className="mini-btn">{t.ai.signer.action}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ai-side">
                <div className="ai-block" data-reveal style={{ ["--d" as string]: "120ms" }}>
                  <h3>{t.ai.sender.title}</h3>
                  <p>{t.ai.sender.text}</p>
                  <div className="assistant">
                    <div className="panel">
                      <div className="panel-body">
                        <p className="qa-q">{t.ai.sender.q}</p>
                        <div className="qa-a">
                          <p>{t.ai.sender.a}</p>
                        </div>
                        <ul className="sources">
                          {t.ai.sender.sources.map((s) => (
                            <li key={s}>
                              <IconDoc />
                              {s}
                            </li>
                          ))}
                        </ul>
                        <div className="actions">
                          {t.ai.sender.actions.map((a) => (
                            <span key={a}>{a}</span>
                          ))}
                        </div>
                      </div>
                      <div className="panel-foot">
                        {t.ai.sender.note} · {t.how.sample}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="voice" data-reveal style={{ ["--d" as string]: "200ms" }}>
                  <div className="voice-wave" aria-hidden="true">
                    {Array.from({ length: 14 }, (_, i) => (
                      <span key={i} style={{ ["--b" as string]: i }} />
                    ))}
                  </div>
                  <h3>{t.ai.voice.title}</h3>
                  <p>{t.ai.voice.text}</p>
                </div>
              </div>
            </div>

            <div className="controls" data-reveal>
              <h3>{t.ai.controlsTitle}</h3>
              <dl>
                {t.ai.controls.map((c) => (
                  <div key={c.k}>
                    <dt>{c.k}</dt>
                    <dd>{c.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* ---------- Verify it yourself: the black band, with a live replay of the real report ---------- */}
        <section className="section band" id="verify" aria-labelledby="verify-title">
          <div className="wrap">
            <div className="section-head" data-reveal>
              <h2 id="verify-title">{t.verify.title}</h2>
              <p>{t.verify.lead}</p>
            </div>
            <div className="verify-grid">
              <div data-reveal>
                <ol className="verify-steps">
                  {t.verify.steps.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ol>
                <div className="verify-downloads">
                  <a className="btn btn-primary" href="/samples/sealed-sample.pdf" download>
                    <IconDownload />
                    {t.verify.downloadPdf}
                  </a>
                  <a className="btn btn-secondary" href="/samples/sealed-sample.verification.json" download>
                    {t.verify.downloadJson}
                  </a>
                </div>
              </div>

              <div data-reveal style={{ ["--d" as string]: "120ms" }}>
                <div className="report">
                  <div className="report-head">
                    <h3>{t.verify.reportTitle}</h3>
                    <span className="lt-badge">
                      <IconCheckSeal />
                      PAdES-LT
                    </span>
                  </div>
                  <div className="fingerprint">
                    <span>{t.verify.fingerprint}</span>
                    <code className="ltr">{report.sha256}</code>
                  </div>
                  <VerifyDemo
                    sigs={report.signatures.map((s) => ({ name: s.name, at: sealedAt(s.signedAt) }))}
                    t={{
                      ...t.verifyDemo,
                      lt: t.verify.lt,
                      signer: t.verify.signer,
                      sealedAt: t.verify.sealedAt,
                      result: t.verify.result,
                    }}
                  />
                </div>
                <p className="verify-note">{t.verify.note}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- For your teams ---------- */}
        <section className="section section-alt" id="teams" aria-labelledby="teams-title">
          <div className="wrap">
            <div className="section-head" data-reveal>
              <h2 id="teams-title">{t.teams.title}</h2>
              <p>{t.teams.lead}</p>
            </div>
            <div className="teams">
              {t.teams.groups.map((g, i) => (
                <section
                  className="team"
                  key={g.id}
                  id={g.id}
                  aria-labelledby={`${g.id}-title`}
                  data-reveal
                  data-tilt="4"
                  style={{ ["--d" as string]: `${i * 110}ms` }}
                >
                  <h3 id={`${g.id}-title`}>{g.name}</h3>
                  <ul>
                    {g.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                  <div className="team-links">
                    {g.links.map((l) => (
                      <a className="more" key={l.href} href={l.href}>
                        {l.label}
                      </a>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Measured ---------- */}
        <section className="section" id="measured" aria-labelledby="measured-title">
          <div className="wrap">
            <div className="section-head" data-reveal>
              <h2 id="measured-title">{t.measured.title}</h2>
              <p>{t.measured.lead}</p>
            </div>
            <ul className="measures">
              {t.measured.items.map((m, i) => (
                <li key={m.value} data-reveal data-tilt="6" style={{ ["--d" as string]: `${i * 90}ms` }}>
                  <strong>{m.value}</strong>
                  <p>{m.label}</p>
                </li>
              ))}
            </ul>
            <p className="conditions" data-reveal>
              <span>{t.measured.conditions}</span>
              <a className="more" href={`${SITE}/${lang}/docs/releases/signora-trial-2026-11/`}>
                {t.measured.source}
              </a>
            </p>
          </div>
        </section>

        {/* ---------- Vendor questions ---------- */}
        <section className="section section-alt" id="questions" aria-labelledby="questions-title">
          <div className="wrap">
            <div className="section-head" data-reveal>
              <h2 id="questions-title">{t.questions.title}</h2>
              <p>{t.questions.lead}</p>
            </div>
            <table className="qtable" data-reveal>
              <thead>
                <tr>
                  <th scope="col">{t.questions.head[0]}</th>
                  <th scope="col">{t.questions.head[1]}</th>
                </tr>
              </thead>
              <tbody>
                {t.questions.rows.map(([q, a]) => (
                  <tr key={q}>
                    <th scope="row">{q}</th>
                    <td>{a}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ---------- Platform roadmap ---------- */}
        <section className="section" id="platform" aria-labelledby="platform-title">
          <div className="wrap">
            <div className="section-head" data-reveal>
              <h2 id="platform-title">{t.platform.title}</h2>
              <p>{t.platform.lead}</p>
            </div>
            <ul className="roadmap">
              {t.platform.items.map((p, i) => (
                <li key={p.name} data-reveal data-tilt="5" style={{ ["--d" as string]: `${i * 110}ms` }}>
                  <h3>{p.name}</h3>
                  <p>{p.what}</p>
                  <span className="status">{p.status}</span>
                  <a className="more" href={`mailto:sales@soit.ae?subject=${encodeURIComponent(p.name)}`}>
                    {t.platform.interest}
                  </a>
                </li>
              ))}
            </ul>
            <p className="platform-more">
              <a className="more" href={`${SITE}/${lang}/platform/`}>
                {t.platform.more}
              </a>
            </p>
          </div>
        </section>

        {/* ---------- Trial ---------- */}
        <section className="section section-alt" id="trial" aria-labelledby="trial-title">
          <div className="wrap">
            <div className="section-head" data-reveal>
              <h2 id="trial-title">{t.trial.title}</h2>
              <p>{t.trial.lead}</p>
            </div>
            <div className="trial-grid">
              <div className="trial-info" data-reveal>
                <h3>{t.trial.includedTitle}</h3>
                <dl className="limits">
                  {t.trial.included.map(([k, v]) => (
                    <div key={k}>
                      <dt>{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
                <h3>{t.trial.notTitle}</h3>
                <ul className="not-list">
                  {t.trial.not.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
                <h3>{t.trial.needTitle}</h3>
                <p className="need">{t.trial.need}</p>
              </div>

              <form
                className="form"
                id="trial-form"
                method="post"
                action="/api/trial"
                aria-labelledby="form-title"
                data-reveal
                style={{ ["--d" as string]: "120ms" }}
              >
                <h3 id="form-title">{t.trial.form.title}</h3>
                <input type="hidden" name="lang" value={lang} />
                <div className="field">
                  <label htmlFor="org">
                    {t.trial.form.org} <small>({t.trial.form.required})</small>
                  </label>
                  <input id="org" name="organisation" required autoComplete="organization" aria-describedby="org-hint" maxLength={200} />
                  <span className="hint" id="org-hint">
                    {t.trial.form.orgHint}
                  </span>
                </div>
                <div className="field">
                  <label htmlFor="name">
                    {t.trial.form.name} <small>({t.trial.form.required})</small>
                  </label>
                  <input id="name" name="name" required autoComplete="name" maxLength={200} />
                </div>
                <div className="field">
                  <label htmlFor="email">
                    {t.trial.form.email} <small>({t.trial.form.required})</small>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    dir="ltr"
                    aria-describedby="email-hint"
                    maxLength={254}
                  />
                  <span className="hint" id="email-hint">
                    {t.trial.form.emailHint}
                  </span>
                </div>
                <div className="field">
                  <label htmlFor="role">
                    {t.trial.form.role} <small>({t.trial.form.roleOptional})</small>
                  </label>
                  <select id="role" name="role" defaultValue="">
                    <option value="">{t.trial.form.rolePlaceholder}</option>
                    {t.trial.form.roles.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="message">
                    {t.trial.form.message} <small>({t.trial.form.roleOptional})</small>
                  </label>
                  <textarea id="message" name="message" dir="auto" aria-describedby="message-hint" maxLength={4000} />
                  <span className="hint" id="message-hint">
                    {t.trial.form.messageHint}
                  </span>
                </div>
                <div className="hp" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input id="website" name="website" tabIndex={-1} autoComplete="off" />
                </div>
                <div className="form-foot">
                  <button className="btn btn-primary" type="submit">
                    {t.trial.form.submit}
                  </button>
                  <p>
                    {t.trial.form.privacy}{" "}
                    <a href={`${SITE}/${lang}/privacy/`}>{t.trial.form.privacyLink}</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer t={t} lang={lang} />
    </>
  );
}
