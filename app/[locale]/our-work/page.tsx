import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SealCheck } from "@phosphor-icons/react/dist/ssr";
import SimpleHeader from "@/components/SimpleHeader";
import {
  COMPANY_LEGAL,
  getCompanyInfo,
  getWhatsAppDirectDisplay,
  getWhatsAppDisplay,
} from "@/lib/site";
import { WORK_SAMPLES } from "@/lib/work-samples";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

type Props = { params: { locale: string } };

export async function generateMetadata({ params }: Props) {
  const t = await getTranslations({ locale: params.locale, namespace: "ourWork" });
  return buildPageMetadata({
    title: t("title"),
    description: t("subtitle"),
    path: "/our-work",
    locale: params.locale,
  });
}

export default async function OurWorkPage({ params }: Props) {
  const { locale } = params;
  setRequestLocale(locale);
  const t = await getTranslations("ourWork");
  const tTrust = await getTranslations("trustStats");
  const tFooter = await getTranslations("footer");
  const tBrand = await getTranslations("brand");
  const company = getCompanyInfo();

  const about: { label: string; value: string; ltr?: boolean }[] = [
    { label: t("cr"), value: company.cr || COMPANY_LEGAL.cr, ltr: true },
    { label: t("vat"), value: company.vat || COMPANY_LEGAL.vat, ltr: true },
    { label: t("founded"), value: String(COMPANY_LEGAL.foundedYear), ltr: true },
    { label: t("address"), value: tFooter("company.city") },
    { label: t("taqeeb"), value: getWhatsAppDirectDisplay(), ltr: true },
    { label: t("tech"), value: getWhatsAppDisplay(), ltr: true },
    { label: t("hours"), value: `${tTrust("hoursValue")} · ${tTrust("hoursDays")}` },
  ];

  const breadcrumb = breadcrumbJsonLd(locale, [
    { name: tBrand("name"), path: "" },
    { name: t("title"), path: "/our-work" },
  ]);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <SimpleHeader title={t("title")} subtitle={t("subtitle")} />

      <div className="mx-auto max-w-3xl space-y-8 px-5 py-12 sm:px-8 sm:py-16">
        {WORK_SAMPLES.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2">
            {WORK_SAMPLES.map((s) => (
              <article key={s.id} className="overflow-hidden rounded-2xl border border-[rgba(26,53,80,0.1)] bg-white">
                {s.image ? (
                  <Image src={s.image} alt={s.service} width={640} height={400} className="h-auto w-full bg-tasami-offwhite" />
                ) : null}
                <dl className="space-y-2 p-5">
                  <div>
                    <dt className="text-sm text-tasami-gray">{t("service")}</dt>
                    <dd className="font-bold text-tasami-dark">{s.service}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-tasami-gray">{t("duration")}</dt>
                    <dd className="text-tasami-dark">{s.duration}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-tasami-gray">{t("result")}</dt>
                    <dd className="text-tasami-dark">{s.result}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        ) : (
          <section className="rounded-2xl bg-tasami-offwhite p-5 sm:p-6">
            <h2 className="text-lg font-bold text-tasami-dark">{t("emptyTitle")}</h2>
            <p className="mt-2 leading-[1.8] text-tasami-gray">{t("emptyBody")}</p>
          </section>
        )}

        <section className="rounded-2xl border border-[rgba(26,53,80,0.1)] bg-white p-5 sm:p-6">
          <h2 className="flex items-center gap-2 text-lg font-bold text-tasami-dark">
            <SealCheck weight="regular" className="h-6 w-6 text-[#006BDE]" />
            {t("aboutTitle")}
          </h2>
          <p className="mt-1 text-tasami-gray">
            {locale === "ar" ? COMPANY_LEGAL.nameAr : COMPANY_LEGAL.nameEn}
          </p>
          <dl className="mt-4 divide-y divide-[rgba(26,53,80,0.08)]">
            {about.map((row) => (
              <div key={row.label} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-3">
                <dt className="text-tasami-gray">{row.label}</dt>
                <dd className="font-bold text-tasami-dark">
                  {row.ltr ? <span dir="ltr">{row.value}</span> : row.value}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </div>
  );
}
