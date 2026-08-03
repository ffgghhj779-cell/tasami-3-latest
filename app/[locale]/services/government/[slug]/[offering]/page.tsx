import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { Link } from "@/navigation";
import { GOV_SLUGS, type GovKey } from "@/lib/content-keys";
import {
  findOffering,
  GOV_OFFERINGS,
  offeringsByCategory,
} from "@/lib/gov-offerings";
import { getOfferingIcon } from "@/lib/gov-offering-icons";
import { formatOfferingPrice } from "@/lib/service-pricing";
import { getServiceForm } from "@/lib/service-forms";
import { buildPageMetadata } from "@/lib/seo";
import ServiceRequestActions, {
  MonjezHint,
} from "@/components/ServiceRequestActions";
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

type Props = {
  params: { locale: string; slug: string; offering: string };
};

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
  return buildPageMetadata({
    title: t(`offerings.${offering.key}.title`),
    description: t(`offerings.${offering.key}.desc`),
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
  const tAr = await getTranslations({ locale: "ar", namespace: "gov" });
  const tEn = await getTranslations({ locale: "en", namespace: "gov" });

  const Icon = getOfferingIcon(offering.key);
  const title = t(`offerings.${offering.key}.title`);
  const titleAr = tAr(`offerings.${offering.key}.title`);
  const titleEn = tEn(`offerings.${offering.key}.title`);
  const form = getServiceForm(offering.key);
  const siblings = offeringsByCategory(categoryKey).filter(
    (o) => o.key !== offering.key
  );
  const CategoryIcon = GOV_ICONS[categoryKey];

  return (
    <div className="surface-dotted min-h-screen">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <Link
          href={`/services/government/${slug}`}
          className="mb-10 inline-flex min-h-[44px] items-center gap-1.5 text-sm font-medium text-tasami-gray hover:text-tasami-pink"
        >
          <ArrowLeft weight="bold" className="h-4 w-4 rtl:rotate-180" />
          {t("backToCategory")}
        </Link>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <span className="icon-gold-lg mb-5">
              <Icon weight="regular" className="h-7 w-7" />
            </span>
            <p className="inline-flex items-center gap-2 text-sm font-medium text-tasami-pink">
              <CategoryIcon weight="regular" className="h-4 w-4" />
              {t(`items.${categoryKey}.title`)}
            </p>
            <h1 className="font-display mt-2 text-2xl text-tasami-purple sm:text-4xl">
              {title}
            </h1>
            <span className="highlight-line" />
            <p className="mt-5 text-base leading-relaxed text-tasami-gray">
              {t(`offerings.${offering.key}.desc`)}
            </p>
            <p className="mt-4 text-base font-medium text-tasami-gold">
              {formatOfferingPrice(
                offering.priceFrom,
                offering.priceTo,
                locale
              )}
            </p>
            <p className="mt-1.5 text-[11px] leading-relaxed text-tasami-gray">
              {t("priceNote")}
            </p>

            {form.docs.length > 0 ? (
              <div className="mt-8 rounded-card border border-tasami-purple/8 bg-white/80 p-5">
                <p className="text-xs font-medium text-tasami-gold">
                  {tReq("requiredDocs")}
                </p>
                <ul className="mt-3 space-y-2 text-sm text-tasami-gray">
                  {form.docs.map((doc) => (
                    <li key={doc} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-tasami-pink" />
                      <span>{tReq(`docs.${doc}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {siblings.length > 0 ? (
              <div className="mt-8">
                <p className="text-xs font-medium text-tasami-purple">
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
          </div>

          <div className="lg:col-span-7">
            <article className="card-premium p-6 sm:p-8">
              <h2 className="text-base font-medium text-tasami-purple sm:text-lg">
                {t("askService")}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-tasami-gray">
                {t("offeringsSubtitle")}
              </p>

              <ServiceRequestActions
                serviceSlug={`gov-${slug}-${offering.slug}`}
                serviceNameAr={titleAr}
                serviceNameEn={titleEn}
                category="government"
                subcategory={offering.key}
                priceFrom={offering.priceFrom}
              />
              <MonjezHint />
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
