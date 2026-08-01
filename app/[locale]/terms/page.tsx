import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { Link } from "@/navigation";
import { buildPageMetadata } from "@/lib/seo";
import { getContactEmail, getWhatsAppUrl } from "@/lib/site";

const SECTION_KEYS = ["s1", "s2", "s3", "s4", "s5"] as const;

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props) {
  const t = await getTranslations({ locale: params.locale, namespace: "legal.terms" });
  return buildPageMetadata({
    title: t("title"),
    description: t("subtitle"),
    path: "/terms",
    locale: params.locale,
  });
}

export default async function TermsPage({ params }: Props) {
  const { locale } = params;
  setRequestLocale(locale);

  const t = await getTranslations("legal");
  const tt = await getTranslations("legal.terms");
  const contactEmail = getContactEmail();
  const waUrl = getWhatsAppUrl();
  const updated = t("updated", {
    date: new Date().toLocaleDateString(locale, {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  });

  return (
    <div className="surface-dotted min-h-screen">
      <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-18 lg:px-10 lg:py-20">
        <Link
          href="/"
          className="mb-10 inline-flex min-h-[44px] items-center gap-1.5 text-sm font-medium text-tasami-gray transition-colors hover:text-tasami-pink"
        >
          <ArrowLeft weight="bold" className="h-4 w-4 rtl:rotate-180" />
          {t("back")}
        </Link>

        <header className="mb-12">
          <p className="text-sm font-medium text-tasami-pink">{tt("eyebrow")}</p>
          <h1 className="font-display mt-3 text-2xl text-tasami-purple sm:text-4xl">
            {tt("title")}
          </h1>
          <span className="highlight-line" />
          <p className="mt-5 text-base leading-relaxed text-tasami-gray">
            {tt("subtitle")}
          </p>
          <p className="mt-4 text-xs text-tasami-gray/80">{updated}</p>
        </header>

        <div className="card-premium space-y-10 p-7 sm:p-10">
          <p className="text-sm leading-[1.9] text-tasami-dark">{tt("intro")}</p>

          {SECTION_KEYS.map((key) => (
            <section key={key}>
              <h2 className="text-base font-medium text-tasami-purple sm:text-lg">
                {tt(`sections.${key}.title`)}
              </h2>
              <p className="mt-3 text-sm leading-[1.9] text-tasami-gray">
                {tt(`sections.${key}.body`)}
              </p>
            </section>
          ))}

          <div className="border-t border-tasami-purple/8 pt-6 text-sm text-tasami-gray">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-tasami-pink hover:underline"
            >
              WhatsApp
            </a>
            {" · "}
            <a
              href={`mailto:${contactEmail}`}
              className="font-medium text-tasami-pink hover:underline"
            >
              {contactEmail}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
