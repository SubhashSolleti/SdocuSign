import type { Dictionary, Locale } from "@/content";

export function Footer({ t, lang }: { t: Dictionary; lang: Locale }) {
  const f = t.footer;
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-company">
            <a className="brand" href={`/${lang}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand/icon.svg" alt="" width={28} height={28} />
              <span>{lang === "ar" ? "سمارت أوربت" : "Smart Orbit"}</span>
            </a>
            <p>{f.company}</p>
            <p>{f.country}</p>
          </div>
          <div className="footer-contact">
            <h2>{f.contactTitle}</h2>
            <ul>
              {f.contacts.map((c) => (
                <li key={c.email}>
                  <small>{c.label}</small>
                  <a href={`mailto:${c.email}`} className="ltr">
                    {c.email}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>{f.resourcesTitle}</h2>
            <ul>
              {f.resources.map((r) => (
                <li key={r.href}>
                  <a href={r.href}>{r.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>{f.legalTitle}</h2>
            <ul>
              {f.legal.map((r) => (
                <li key={r.href}>
                  <a href={r.href}>{r.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-base">
          <span>© 2026 {f.company}</span>
          <span>{f.noCookies}</span>
          <span>{f.names}</span>
        </div>
      </div>
    </footer>
  );
}
