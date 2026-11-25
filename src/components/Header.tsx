import type { Dictionary, Locale } from "@/content";
import { otherLocale } from "@/content";
import { ThemeToggle } from "./ThemeToggle";
import { IconMenu } from "./icons";

export function Header({ t, lang, path = "" }: { t: Dictionary; lang: Locale; path?: string }) {
  const other = otherLocale(lang);
  const base = `/${lang}`;
  const links = [
    { href: `${base}#how`, label: t.nav.how },
    { href: `${base}#assistant`, label: t.nav.ai },
    { href: `${base}#verify`, label: t.nav.verify },
    { href: `${base}#teams`, label: t.nav.teams },
    { href: `${base}#trial`, label: t.nav.trial },
  ];

  return (
    <header className="site-header">
      <div className="wrap">
        <a className="brand" href={base}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/icon.svg" alt="" width={28} height={28} />
          <span>{lang === "ar" ? "سمارت أوربت" : "Smart Orbit"}</span>
        </a>

        <nav className="nav-main" aria-label={t.nav.label}>
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="lang-link" href={`/${other}${path}`} hrefLang={other} lang={other} aria-label={t.nav.langSwitchLabel}>
            {t.nav.langSwitch}
          </a>
          <ThemeToggle toDark={t.nav.themeToDark} toLight={t.nav.themeToLight} />
          <a className="btn btn-primary header-cta" href={`${base}#trial-form`}>
            {t.nav.cta}
          </a>
          <details className="mobile-nav">
            <summary className="btn btn-quiet" aria-label={t.nav.menu}>
              <IconMenu className="menu-icon" />
            </summary>
            <nav className="mobile-panel" aria-label={t.nav.label}>
              {links.map((l) => (
                <a key={l.href} href={l.href}>
                  {l.label}
                </a>
              ))}
              <a href={`${base}#trial-form`}>{t.nav.cta}</a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
