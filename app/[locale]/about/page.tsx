import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  Buildings,
  ChatsCircle,
  Cpu,
  IdentificationCard,
  Info,
  ShieldCheck,
} from "@phosphor-icons/react/dist/ssr";
import { Link } from "@/navigation";
import SimpleHeader from "@/components/SimpleHeader";
import { COMPANY_LEGAL } from "@/lib/site";
import { breadcrumbJsonLd, buildPageMetadata, SITE_URL } from "@/lib/seo";

type Props = { params: { locale: string } };

export async function generateMetadata({ params }: Props) {
  const t = await getTranslations({ locale: params.locale, namespace: "aboutPage" });
  return buildPageMetadata({
    title: t("metaTitle"),
    absoluteTitle: t("metaTitle"),
    description: t("metaDescription"),
    path: "/about",
    locale: params.locale,
  });
}

export default async function AboutPage({ params }: Props) {
  const { locale } = params;
  setRequestLocale(locale);
  const t = await getTranslations("aboutPage");
  const tSeo = await getTranslations("seo");
  const tFooter = await getTranslations("footer");
  const tTrust = await getTranslations("trustStats");

  const structured = [
    breadcrumbJsonLd(locale, [
      { name: tSeo("crumbHome"), path: "" },
      { name: t("title"), path: "/about" },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      url: `${SITE_URL}/${locale}/about`,
      name: t("title"),
      inLanguage: locale,
      about: { "@id": `${SITE_URL}/#organization` },
    },
  ];

  const departments = [
    { icon: Buildings, title: t("govTitle"), body: t("govBody"), href: "/services/government" },
    { icon: Cpu, title: t("techTitle"), body: t("techBody"), href: "/services/tech" },
  ];

  const facts = [
    { label: t("legalName"), value: locale === "ar" ? COMPANY_LEGAL.nameAr : COMPANY_LEGAL.nameEn },
    { label: t("cr"), value: COMPANY_LEGAL.cr, ltr: true },
    { label: t("vat"), value: COMPANY_LEGAL.vat, ltr: true },
    { label: t("founded"), value: String(COMPANY_LEGAL.foundedYear), ltr: true },
    { label: t("address"), value: tFooter("company.city") },
    { label: t("hours"), value: `${tTrust("hoursValue")} · ${tTrust("hoursDays")}` },
  ];

  return (
    <div>
      {structured.map((data, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
      <SimpleHeader title={t("title")} subtitle={t("subtitle")} />

      <div className="mx-auto max-w-3xl space-y-6 px-5 py-12 sm:px-8 sm:py-16">
        <section className="space-y-4 text-[1.05rem] leading-[1.9] text-tasami-dark">
          <p>{t("intro1")}</p>
          <p>{t("intro2")}</p>
        </section>

        <div className="grid gap-4 sm:grid-cols-2">
          {departments.map(({ icon: Icon, title, body, href }) => (
            <section
              key={href}
              className="flex flex-col rounded-2xl border border-[rgba(26,53,80,0.1)] bg-white p-5 sm:p-6"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#006BDE]/10 text-[#006BDE]">
                  <Icon weight="regular" className="h-6 w-6" />
                </span>
                <h2 className="text-lg font-bold text-tasami-dark">{title}</h2>
              </div>
              <p className="mt-3 flex-1 leading-[1.8] text-tasami-gray">{body}</p>
              <Link href={href} className="mt-4 inline-flex min-h-[44px] items-center font-bold text-[#006BDE]">
                {t("browse")}
              </Link>
            </section>
          ))}
        </div>

        <section className="rounded-2xl border border-[rgba(26,53,80,0.1)] bg-white p-5 sm:p-6">
          <h2 className="flex items-center gap-2 text-lg font-bold text-tasami-dark">
            <ChatsCircle weight="regular" className="h-5 w-5 text-[#006BDE]" />
            {t("howTitle")}
          </h2>
          <p className="mt-2 leading-[1.85] text-tasami-gray">{t("howBody")}</p>
        </section>

        <section className="rounded-2xl border border-[rgba(26,53,80,0.1)] bg-white p-5 sm:p-6">
          <h2 className="flex items-center gap-2 text-lg font-bold text-tasami-dark">
            <IdentificationCard weight="regular" className="h-5 w-5 text-[#006BDE]" />
            {t("legalTitle")}
          </h2>
          <dl className="mt-4 divide-y divide-[rgba(26,53,80,0.08)]">
            {facts.map(({ label, value, ltr }) => (
              <div key={label} className="flex flex-wrap justify-between gap-2 py-2.5">
                <dt className="text-tasami-gray">{label}</dt>
                <dd className="font-bold text-tasami-dark" dir={ltr ? "ltr" : undefined}>
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="flex gap-3 rounded-2xl bg-tasami-offwhite p-5 sm:p-6">
          <Info weight="regular" className="mt-1 h-5 w-5 shrink-0 text-[#8a6d1f]" />
          <p className="leading-[1.85] text-tasami-dark">{t("disclaimer")}</p>
        </section>

        <section className="rounded-2xl bg-[#0b1a2a] p-6 text-white sm:p-8">
          <h2 className="flex items-center gap-2 text-xl font-bold">
            <ShieldCheck weight="duotone" className="h-6 w-6 text-[#c8a84b]" />
            {t("ctaTitle")}
          </h2>
          <p className="mt-2 leading-[1.85] text-white/80">{t("ctaBody")}</p>
          <Link
            href="/contact"
            className="mt-5 inline-flex min-h-[48px] items-center rounded-button bg-[#0F7A40] px-6 text-base font-bold text-white"
          >
            {t("ctaButton")}
          </Link>
        </section>
      </div>
    </div>
  );
}
