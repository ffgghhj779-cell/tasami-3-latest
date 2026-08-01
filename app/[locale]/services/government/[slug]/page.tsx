import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { Link } from "@/navigation";
import { GOV_KEYS, GOV_SLUGS, type GovKey } from "@/lib/content-keys";
import { GOV_PRICE_FROM } from "@/lib/service-pricing";
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
  const Icon = GOV_ICONS[key];
  const title = t(`items.${key}.title`);
  const titleAr = tAr(`items.${key}.title`);
  const titleEn = tEn(`items.${key}.title`);

  return (
    <div className="surface-dotted min-h-screen">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <Link
          href="/services/government"
          className="mb-10 inline-flex min-h-[44px] items-center gap-1.5 text-sm font-medium text-tasami-gray hover:text-tasami-pink"
        >
          <ArrowLeft weight="bold" className="h-4 w-4 rtl:rotate-180" />
          {t("back")}
        </Link>

        <header className="mb-12 max-w-2xl">
          <span className="icon-gold-lg mb-5">
            <Icon weight="regular" className="h-7 w-7" />
          </span>
          <h1 className="font-display text-2xl text-tasami-purple sm:text-4xl">
            {title}
          </h1>
          <span className="highlight-line" />
          <p className="mt-5 text-base leading-relaxed text-tasami-gray">
            {t(`items.${key}.desc`)}
          </p>
        </header>

        <div className="mx-auto max-w-xl">
          <article className="card-premium p-7 sm:p-8">
            <h2 className="text-base font-medium text-tasami-purple sm:text-lg">
              {title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-tasami-gray">
              {t(`items.${key}.desc`)}
            </p>

            <ServiceRequestActions
              serviceSlug={`gov-${slug}`}
              serviceNameAr={titleAr}
              serviceNameEn={titleEn}
              category="government"
              subcategory={key}
              priceFrom={GOV_PRICE_FROM[key]}
            />
            <MonjezHint />
          </article>
        </div>
      </div>
    </div>
  );
}
