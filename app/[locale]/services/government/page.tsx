import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  IdentificationCard,
  Briefcase,
  Storefront,
  Scales,
  Buildings,
  Fire,
  SealCheck,
  UsersThree,
  Gavel,
  Car,
  Heartbeat,
  House,
  ChartLineUp,
} from "@phosphor-icons/react/dist/ssr";
import ServiceCard from "@/components/ServiceCard";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { GOV_KEYS, GOV_SLUGS, type GovKey } from "@/lib/content-keys";
import { VISUALS } from "@/lib/visuals";
import { offeringsByCategory } from "@/lib/gov-offerings";
import { rtlLocales, type Locale } from "@/i18n";
import { buildPageMetadata, serviceDescription, SITE_URL } from "@/lib/seo";
import { getServiceGuide } from "@/lib/service-guides";
import ServiceGuide from "@/components/ServiceGuide";
import ServiceFaq, { faqJsonLd, serviceJsonLd } from "@/components/ServiceFaq";
import EgyptianNote from "@/components/EgyptianNote";
import { getEgyptianNote } from "@/lib/egyptian-dialect";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const GOV_ICONS: Record<GovKey, typeof IdentificationCard> = {
  passports: IdentificationCard,
  labor: Briefcase,
  commerce: Storefront,
  zakat: Scales,
  municipal: Buildings,
  civilDefense: Fire,
  gosi: SealCheck,
  civilStatus: UsersThree,
  najiz: Gavel,
  traffic: Car,
  health: Heartbeat,
  ejar: House,
  investment: ChartLineUp,
};

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props) {
  const t = await getTranslations({ locale: params.locale, namespace: "gov" });
  const tSeo = await getTranslations({ locale: params.locale, namespace: "seo" });
  const guide = getServiceGuide("proServices", params.locale);
  return buildPageMetadata({
    title: tSeo("govHubTitle"),
    description: guide?.metaDescription ?? serviceDescription(t("subtitle"), params.locale),
    path: "/services/government",
    locale: params.locale,
  });
}

export default async function GovernmentServicesPage({ params }: Props) {
  const { locale } = params;
  setRequestLocale(locale);

  const t = await getTranslations("gov");
  const tSeo = await getTranslations("seo");
  const tSearch = await getTranslations("search");
  const isRtl = rtlLocales.includes(locale as Locale);
  const guide = getServiceGuide("proServices", locale);
  const egyptian = getEgyptianNote("proServices", locale);
  const hubFaqs = [...(guide?.faqs ?? []), ...(egyptian?.faqs ?? [])];
  const hubTitle = tSeo("govHubTitle");
  const crumbs = [
    { label: tSeo("crumbHome"), href: "/" },
    { label: tSeo("crumbGov"), href: "/services/government" },
  ];
  const structured = guide
    ? [
        serviceJsonLd({ name: hubTitle, description: guide.intro, url: `${SITE_URL}/${locale}/services/government` }),
        faqJsonLd(hubFaqs),
      ]
    : [];

  return (
    <div className="min-h-screen">
      {structured.map((data, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
      <BreadcrumbSchema locale={locale} crumbs={crumbs} />
      <PageHeader
        crumbs={crumbs}
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
        visual={VISUALS.offerings.gov}
      />

      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
        {guide ? (
          <section className="mb-10 max-w-4xl">
            <h2 className="text-2xl font-bold text-tasami-dark">{hubTitle}</h2>
            <p className="mt-3 rounded-2xl border-s-4 border-[#0057B8] bg-white p-5 text-[1.05rem] leading-[1.9] text-tasami-dark shadow-soft sm:p-6">
              {guide.intro}
            </p>
            {egyptian ? <EgyptianNote text={egyptian.text} className="mt-5" /> : null}
          </section>
        ) : null}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {GOV_KEYS.map((key, i) => {
            const count = offeringsByCategory(key).length;
            return (
              <Reveal key={key} index={i} className="h-full">
              <ServiceCard
                variant="gov"
                toneIndex={i}
                href={`/services/government/${GOV_SLUGS[key]}`}
                icon={GOV_ICONS[key]}
                title={t(`items.${key}.title`)}
                description={t(`items.${key}.desc`)}
                cta={t("viewServices")}
                meta={
                  count > 0 ? t("offeringCount", { count }) : undefined
                }
                rtl={isRtl}
              />
              </Reveal>
            );
          })}
        </div>
        {guide ? (
          <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <ServiceGuide guide={guide} service={tSeo("govHubService")} />
            </div>
            <div className="lg:col-span-5 lg:pt-8">
              <ServiceFaq title={tSearch("faqTitle")} items={hubFaqs} />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
