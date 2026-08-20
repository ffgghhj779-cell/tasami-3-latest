import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import PageHeader from "@/components/PageHeader";
import { GOV_KEYS, GOV_SLUGS, type GovKey } from "@/lib/content-keys";
import { VISUALS } from "@/lib/visuals";
import { offeringsByCategory } from "@/lib/gov-offerings";
import { getOfferingIcon } from "@/lib/gov-offering-icons";
import { GOV_PRICE_FROM, formatOfferingPrice } from "@/lib/service-pricing";
import { buildPageMetadata } from "@/lib/seo";
import { rtlLocales, type Locale } from "@/i18n";
import ServiceCard from "@/components/ServiceCard";
import Reveal from "@/components/Reveal";
import ServiceRequestActions, {
  MonjezHint,
} from "@/components/ServiceRequestActions";

const SLUG_TO_KEY = Object.fromEntries(
  (Object.entries(GOV_SLUGS) as [GovKey, string][]).map(([k, slug]) => [slug, k])
) as Record<string, GovKey>;

type Props = { params: { locale: string; slug: string } };

export function generateStaticParams() {
  return Object.values(GOV_SLUGS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const key = SLUG_TO_KEY[params.slug];
  if (!key) return {};
  const t = await getTranslations({ locale: params.locale, namespace: "gov" });
  return buildPageMetadata({
    title: t(`items.${key}.title`),
    description: t(`items.${key}.desc`),
    path: `/services/government/${params.slug}`,
    locale: params.locale,
  });
}

export default async function GovernmentCategoryPage({ params }: Props) {
  const { locale, slug } = params;
  setRequestLocale(locale);

  const key = SLUG_TO_KEY[slug];
  if (!key || !GOV_KEYS.includes(key)) notFound();

  const t = await getTranslations("gov");
  const tAr = await getTranslations({ locale: "ar", namespace: "gov" });
  const tEn = await getTranslations({ locale: "en", namespace: "gov" });
  const isRtl = rtlLocales.includes(locale as Locale);
  const title = t(`items.${key}.title`);
  const titleAr = tAr(`items.${key}.title`);
  const titleEn = tEn(`items.${key}.title`);
  const offerings = offeringsByCategory(key);

  return (
    <div className="min-h-screen">
      <PageHeader
        backHref="/services/government"
        backLabel={t("back")}
        eyebrow={
          offerings.length > 0
            ? t("offeringCount", { count: offerings.length })
            : t("eyebrow")
        }
        title={title}
        subtitle={t(`items.${key}.desc`)}
        visual={VISUALS.offerings.gov}
      />

      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
        {offerings.length > 0 ? (
          <section className="mb-16">
            <div className="mb-8 max-w-2xl">
              <h2 className="text-lg font-medium text-tasami-dark sm:text-xl">
                {t("offeringsTitle")}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-tasami-gray">
                {t("offeringsSubtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
              {offerings.map((offering, i) => (
                <Reveal key={offering.key} index={i} className="h-full">
                <ServiceCard
                  toneIndex={i}
                  href={`/services/government/${slug}/${offering.slug}`}
                  icon={getOfferingIcon(offering.key)}
                  title={t(`offerings.${offering.key}.title`)}
                  description={t(`offerings.${offering.key}.desc`)}
                  cta={t("askService")}
                  meta={formatOfferingPrice(
                    offering.priceFrom,
                    offering.priceTo,
                    locale
                  )}
                  rtl={isRtl}
                />
                </Reveal>
              ))}
            </div>
          </section>
        ) : null}

        <section className="mx-auto max-w-xl">
          <article className="card-premium p-7 sm:p-8">
            <h2 className="text-base font-medium text-tasami-dark sm:text-lg">
              {t("generalRequest")}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-tasami-gray">
              {t("generalRequestHint")}
            </p>

            <ServiceRequestActions
              serviceSlug={`gov-${slug}`}
              serviceNameAr={titleAr}
              serviceNameEn={titleEn}
              category="government"
              subcategory={key}
              priceFrom={
                offerings.length > 0
                  ? Math.min(...offerings.map((o) => o.priceFrom))
                  : GOV_PRICE_FROM[key]
              }
            />
            <MonjezHint />
          </article>
        </section>
      </div>
    </div>
  );
}
