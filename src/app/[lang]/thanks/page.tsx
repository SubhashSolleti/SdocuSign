import { notFound } from "next/navigation";
import { getDictionary, isLocale } from "@/content";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default async function Thanks({ params }: PageProps<"/[lang]/thanks">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);
  return (
    <>
      <Header t={t} lang={lang} path="/thanks" />
      <main id="main" className="wrap message">
        <h1>{t.thanks.title}</h1>
        <p>{t.thanks.text}</p>
        <div className="hero-actions">
          <a className="btn btn-secondary" href={`/${lang}`}>
            {t.thanks.back}
          </a>
          <a href={`https://sign.sigilabs.ai/site/${lang}/docs/install/`}>{t.thanks.install}</a>
        </div>
      </main>
      <Footer t={t} lang={lang} />
    </>
  );
}
