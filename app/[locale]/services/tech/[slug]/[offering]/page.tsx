import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/navigation";
import PageHeader from "@/components/PageHeader";
import ServiceBriefPanel from "@/components/ServiceBriefPanel";
import ServiceFaq, { faqJsonLd, serviceJsonLd } from "@/components/ServiceFaq";
import { TECH_SLUGS, type TechKey } from "@/lib/content-keys";
import { VISUALS } from "@/lib/visuals";
import {
  findTechOffering,
  TECH_OFFERINGS,
  techOfferingsByCategory,
} from "@/lib/tech-offerings";
import { buildPageMetadata, SITE_URL, serviceDescription, serviceTitle } from "@/lib/seo";
import { getServiceGuide } from "@/lib/service-guides";
import ServiceGuide from "@/components/ServiceGuide";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CrossSellBox from "@/components/CrossSellBox";
import ServiceRequestActions, { MonjezHint } from "@/components/ServiceRequestActions";

const SLUG_TO_KEY = Object.fromEntries(
  (Object.entries(TECH_SLUGS) as [TechKey, string][]).map(([k, slug]) => [slug, k])
) as Record<string, TechKey>;

type Props = {
  params: { locale: string; slug: string; offering: string };
};

export const dynamicParams = false;

export function generateStaticParams() {
  return TECH_OFFERINGS.map((o) => ({
    slug: TECH_SLUGS[o.category],
    offering: o.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const categoryKey = SLUG_TO_KEY[params.slug];
  if (!categoryKey) return {};
  const offering = findTechOffering(categoryKey, params.offering);
  if (!offering) return {};
  const t = await getTranslations({ locale: params.locale, namespace: "tech" });
  const title = t(`offerings.${offering.key}.title`);
  const desc = t(`offerings.${offering.key}.desc`);
  const guide = getServiceGuide(offering.key, params.locale);
  return buildPageMetadata({
    title: serviceTitle(title, params.locale),
    description: guide?.metaDescription ?? serviceDescription(desc, params.locale, "tech"),
    path: `/services/tech/${params.slug}/${params.offering}`,
    locale: params.locale,
  });
}

export default async function TechOfferingPage({ params }: Props) {
  const { locale, slug, offering: offeringSlug } = params;
  setRequestLocale(locale);

  const categoryKey = SLUG_TO_KEY[slug];
  if (!categoryKey) notFound();

  const offering = findTechOffering(categoryKey, offeringSlug);
  if (!offering) notFound();

  const t = await getTranslations("tech");
  const tSearch = await getTranslations("search");
  const tSeo = await getTranslations("seo");
  const tAr = await getTranslations({ locale: "ar", namespace: "tech" });
  const tEn = await getTranslations({ locale: "en", namespace: "tech" });

  const title = t(`offerings.${offering.key}.title`);
  const titleAr = tAr(`offerings.${offering.key}.title`);
  const titleEn = tEn(`offerings.${offering.key}.title`);
  const desc = t(`offerings.${offering.key}.desc`);
  const categoryTitle = t(`items.${categoryKey}.title`);
  const siblings = techOfferingsByCategory(categoryKey).filter((o) => o.key !== offering.key);

  const guide = getServiceGuide(offering.key, locale);
  const faqs = guide?.faqs ?? [];
  const crumbs = [
    { label: tSeo("crumbHome"), href: "/" },
    { label: tSeo("crumbTech"), href: "/services/tech" },
    { label: categoryTitle, href: `/services/tech/${slug}` },
    { label: title, href: `/services/tech/${slug}/${offering.slug}` },
  ];

  const pageUrl = `${SITE_URL}/${locale}/services/tech/${slug}/${offering.slug}`;
  const structured = [
    serviceJsonLd({ name: title, description: guide?.intro ?? desc, url: pageUrl }),
    ...(faqs.length ? [faqJsonLd(faqs)] : []),
  ];

  return (
    <div className="min-h-screen">
      {structured.map((data, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
      <BreadcrumbSchema locale={locale} crumbs={crumbs} />

      <PageHeader
        crumbs={crumbs}
        eyebrow={categoryTitle}
        title={title}
        subtitle={desc}
        visual={VISUALS.offerings.tech}
      />

      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
        {guide ? (
          <p className="mb-10 max-w-4xl rounded-2xl border-s-4 border-[#0057B8] bg-white p-5 text-[1.05rem] leading-[1.9] text-tasami-dark shadow-soft sm:p-6">
            {guide.intro}
          </p>
        ) : null}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <ServiceBriefPanel
              serviceKey={offering.category}
              locale={locale}
              kind="tech"
              labels={{
                whatTitle: t("briefWhat"),
                platformTitle: t("briefPlatform"),
                needsTitle: t("briefNeeds"),
                durationTitle: t("briefDuration"),
                disclaimer: t("briefDisclaimer"),
              }}
            />

            {siblings.length > 0 ? (
              <div className="mt-8">
                <p className="text-xs font-medium text-tasami-dark">{t("offeringsTitle")}</p>
                <ul className="mt-3 space-y-2">
                  {siblings.map((sib) => (
                    <li key={sib.key}>
                      <Link
                        href={`/services/tech/${slug}/${sib.slug}`}
                        className="text-sm text-tasami-gray transition-colors hover:text-tasami-pink"
                      >
                        {t(`offerings.${sib.key}.title`)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {faqs.length ? <ServiceFaq title={tSearch("faqTitle")} items={faqs} /> : null}
          </div>

          <div className="lg:col-span-7">
            <article className="card-premium p-6 sm:p-8">
              <h2 className="text-base font-medium text-tasami-dark sm:text-lg">
                {t("askService")}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-tasami-gray">
                {t("askServiceSubtitle")}
              </p>

              <ServiceRequestActions
                serviceSlug={`tech-${slug}-${offering.slug}`}
                serviceNameAr={titleAr}
                serviceNameEn={titleEn}
                serviceName={title}
                category="tech"
                subcategory={offering.form}
              />
              <MonjezHint />
            </article>
            {guide ? <ServiceGuide guide={guide} service={title} kind="tech" /> : null}
            <CrossSellBox from="tech" locale={locale} />
          </div>
        </div>
      </div>
    </div>
  );
}
