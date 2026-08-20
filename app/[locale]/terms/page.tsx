import { getTranslations, setRequestLocale } from "next-intl/server";
import PageHeader from "@/components/PageHeader";
import { buildPageMetadata } from "@/lib/seo";
import { getPublicContactEmail, getPhoneDisplay, getWhatsAppUrl, telUrl } from "@/lib/site";

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
  const contactEmail = getPublicContactEmail();
  const waUrl = getWhatsAppUrl();
  const phoneDisplay = getPhoneDisplay();
  const updated = t("updated", {
    date: new Date().toLocaleDateString(locale, {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  });

  return (
    <div className="min-h-screen">
      <PageHeader
        backHref="/"
        backLabel={t("back")}
        eyebrow={tt("eyebrow")}
        title={tt("title")}
        subtitle={tt("subtitle")}
      >
        <p className="mt-4 text-xs text-white/40">{updated}</p>
      </PageHeader>

      <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
        <div className="card-premium space-y-10 p-7 sm:p-10">
          <p className="text-sm leading-[1.9] text-tasami-dark">{tt("intro")}</p>

          {SECTION_KEYS.map((key) => (
            <section key={key}>
              <h2 className="text-base font-medium text-tasami-dark sm:text-lg">
                {tt(`sections.${key}.title`)}
              </h2>
              <p className="mt-3 text-sm leading-[1.9] text-tasami-gray">
                {tt(`sections.${key}.body`)}
              </p>
            </section>
          ))}

          <div className="border-t border-[rgba(0,122,255,0.12)] pt-6 text-sm text-tasami-gray">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-tasami-purple hover:underline"
            >
              WhatsApp
            </a>
            {" · "}
            <a
              href={telUrl()}
              dir="ltr"
              className="font-medium text-tasami-purple hover:underline"
            >
              {phoneDisplay}
            </a>
            {contactEmail ? (
              <>
                {" · "}
                <a
                  href={`mailto:${contactEmail}`}
                  className="font-medium text-tasami-purple hover:underline"
                >
                  {contactEmail}
                </a>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
