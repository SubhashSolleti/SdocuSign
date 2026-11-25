import { notFound } from "next/navigation";
import { getDictionary, isLocale } from "@/content";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default async function NotSent({ params }: PageProps<"/[lang]/not-sent">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);
  return (
    <>
      <Header t={t} lang={lang} path="/not-sent" />
      <main id="main" className="wrap message">
        <h1>{t.error.title}</h1>
        <p>{t.error.text}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={`/${lang}#trial-form`}>
            {t.error.back}
          </a>
        </div>
      </main>
      <Footer t={t} lang={lang} />
    </>
  );
}
