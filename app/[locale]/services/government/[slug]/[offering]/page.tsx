import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/navigation";
import PageHeader from "@/components/PageHeader";
import ServiceBriefPanel from "@/components/ServiceBriefPanel";
import ServiceFaq, { faqJsonLd, serviceJsonLd } from "@/components/ServiceFaq";
import { GOV_SLUGS, type GovKey } from "@/lib/content-keys";
import { VISUALS } from "@/lib/visuals";
import {
  findOffering,
  GOV_OFFERINGS,
  offeringsByCategory,
} from "@/lib/gov-offerings";
import { getServiceForm } from "@/lib/service-forms";
import { buildPageMetadata, SITE_URL, serviceDescription, serviceTitle } from "@/lib/seo";
import { getNodeById, getSeoPack } from "@/lib/search-intelligence";
import { getServiceGuide } from "@/lib/service-guides";
import { getEgyptianNote } from "@/lib/egyptian-dialect";
import EgyptianNote from "@/components/EgyptianNote";
import ServiceGuide from "@/components/ServiceGuide";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CrossSellBox from "@/components/CrossSellBox";
import ServiceRequestActions from "@/components/ServiceRequestActions";
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

const SLUG_TO_KEY = Object.fromEntries(
  (Object.entries(GOV_SLUGS) as [GovKey, string][]).map(([k, slug]) => [slug, k])
) as Record<string, GovKey>;

const PLATFORM_KEYS = [
  "absher",
  "qiwa",
  "muqeem",
  "commerce",
  "businessCenter",
  "balady",
  "zakat",
  "najiz",
  "gosi",
] as const;

type Props = {
  params: { locale: string; slug: string; offering: string };
};

export const dynamicParams = false;

export function generateStaticParams() {
  return GOV_OFFERINGS.map((o) => ({
    slug: GOV_SLUGS[o.category],
    offering: o.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const categoryKey = SLUG_TO_KEY[params.slug];
  if (!categoryKey) return {};
  const offering = findOffering(params.slug, params.offering, categoryKey);
  if (!offering) return {};
  const t = await getTranslations({ locale: params.locale, namespace: "gov" });
  const title = t(`offerings.${offering.key}.title`);
  const desc = t(`offerings.${offering.key}.desc`);
  const guide = getServiceGuide(offering.key, params.locale);
  return buildPageMetadata({
    title: serviceTitle(title, params.locale),
    description: guide?.metaDescription ?? serviceDescription(desc, params.locale),
    path: `/services/government/${params.slug}/${params.offering}`,
    locale: params.locale,
  });
}

export default async function GovernmentOfferingPage({ params }: Props) {
  const { locale, slug, offering: offeringSlug } = params;
  setRequestLocale(locale);

  const categoryKey = SLUG_TO_KEY[slug];
  if (!categoryKey) notFound();

  const offering = findOffering(slug, offeringSlug, categoryKey);
  if (!offering) notFound();

  const t = await getTranslations("gov");
  const tReq = await getTranslations("request");
  const tSearch = await getTranslations("search");
  const tTrust = await getTranslations("trust");
  const tAr = await getTranslations({ locale: "ar", namespace: "gov" });
  const tEn = await getTranslations({ locale: "en", namespace: "gov" });

  const title = t(`offerings.${offering.key}.title`);
  const titleAr = tAr(`offerings.${offering.key}.title`);
  const titleEn = tEn(`offerings.${offering.key}.title`);
  const desc = t(`offerings.${offering.key}.desc`);
  const form = getServiceForm(offering.key);
  const siblings = offeringsByCategory(categoryKey).filter(
    (o) => o.key !== offering.key
  );
  const CategoryIcon = GOV_ICONS[categoryKey];
  const seoPack = getSeoPack(offering.key);
  const catalogNode = getNodeById(`offering-${offering.key}`);
  const crossRelated = (catalogNode?.related || [])
    .map((r) => getNodeById(r.id))
    .filter((n): n is NonNullable<typeof n> => Boolean(n && n.kind === "offering"))
    .filter((n) => n.i18nKey !== offering.key)
    .slice(0, 4);

  const guide = getServiceGuide(offering.key, locale);
  const egyptian = getEgyptianNote(offering.key, locale);
  // seo-packs FAQs are Arabic-only; other locales get FAQs only from a localized guide.
  const faqs = [
    ...(guide?.faqs ?? (locale === "ar" ? seoPack?.faqs : undefined) ?? []),
    ...(egyptian?.faqs ?? []),
  ];
  const tSeo = await getTranslations("seo");
  const categoryTitle = t(`items.${categoryKey}.title`);
  const crumbs = [
    { label: tSeo("crumbHome"), href: "/" },
    { label: tSeo("crumbGov"), href: "/services/government" },
    { label: categoryTitle, href: `/services/government/${slug}` },
    { label: title, href: `/services/government/${slug}/${offering.slug}` },
  ];

  const pageUrl = `${SITE_URL}/${locale}/services/government/${slug}/${offering.slug}`;
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
        eyebrow={t(`items.${categoryKey}.title`)}
        title={title}
        subtitle={desc}
        visual={VISUALS.offerings.gov}
      />

      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
        {guide ? (
          <p className="mb-10 max-w-4xl rounded-2xl border-s-4 border-[#0057B8] bg-white p-5 text-[1.05rem] leading-[1.9] text-tasami-dark shadow-soft sm:p-6">
            {guide.intro}
          </p>
        ) : null}
        {egyptian ? <EgyptianNote text={egyptian.text} className="mb-10" /> : null}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="inline-flex items-center gap-2 text-sm font-medium text-tasami-dark">
              <CategoryIcon weight="regular" className="h-4 w-4" />
              {t(`items.${categoryKey}.title`)}
            </p>

            <ServiceBriefPanel
              serviceKey={offering.key}
              locale={locale}
              kind="government"
              labels={{
                whatTitle: t("briefWhat"),
                platformTitle: t("briefPlatform"),
                needsTitle: t("briefNeeds"),
                durationTitle: t("briefDuration"),
                disclaimer: t("briefDisclaimer"),
              }}
              platformNames={Object.fromEntries(
                PLATFORM_KEYS.map((k) => [k, tTrust(`platforms.${k}`)])
              )}
            />

            {siblings.length > 0 ? (
              <div className="mt-8">
                <p className="text-xs font-medium text-tasami-dark">
                  {t("offeringsTitle")}
                </p>
                <ul className="mt-3 space-y-2">
                  {siblings.slice(0, 6).map((sib) => (
                    <li key={sib.key}>
                      <Link
                        href={`/services/government/${slug}/${sib.slug}`}
                        className="text-sm text-tasami-gray transition-colors hover:text-tasami-pink"
                      >
                        {t(`offerings.${sib.key}.title`)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {crossRelated.length > 0 ? (
              <div className="mt-8">
                <p className="text-xs font-medium text-tasami-dark">
                  {tSearch("relatedServices")}
                </p>
                <ul className="mt-3 space-y-2">
                  {crossRelated.map((rel) => (
                    <li key={rel.id}>
                      <Link
                        href={rel.href as "/"}
                        className="text-sm text-tasami-gray transition-colors hover:text-tasami-pink"
                      >
                        {t(`offerings.${rel.i18nKey}.title`)}
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
                {t("offeringsSubtitle")}
              </p>

              <ServiceRequestActions
                serviceSlug={`gov-${slug}-${offering.slug}`}
                serviceNameAr={titleAr}
                serviceNameEn={titleEn}
                serviceName={title}
                category="government"
                subcategory={offering.key}
              />
            </article>
            {guide ? <ServiceGuide guide={guide} service={title} /> : null}
            <CrossSellBox from="gov" locale={locale} />
          </div>
        </div>
      </div>
    </div>
  );
}
