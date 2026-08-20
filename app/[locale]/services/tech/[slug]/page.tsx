import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import PageHeader from "@/components/PageHeader";
import { TECH_KEYS, TECH_SLUGS, type TechKey } from "@/lib/content-keys";
import { VISUALS } from "@/lib/visuals";
import { TECH_PRICE_FROM } from "@/lib/service-pricing";
import { buildPageMetadata } from "@/lib/seo";
import ServiceRequestActions, {
  MonjezHint,
} from "@/components/ServiceRequestActions";

const SLUG_TO_KEY = Object.fromEntries(
  (Object.entries(TECH_SLUGS) as [TechKey, string][]).map(([k, slug]) => [
    slug,
    k,
  ])
) as Record<string, TechKey>;

type Props = { params: { locale: string; slug: string } };

export function generateStaticParams() {
  return Object.values(TECH_SLUGS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const key = SLUG_TO_KEY[params.slug];
  if (!key) return {};
  const t = await getTranslations({ locale: params.locale, namespace: "tech" });
  return buildPageMetadata({
    title: t(`items.${key}.title`),
    description: t(`items.${key}.desc`),
    path: `/services/tech/${params.slug}`,
    locale: params.locale,
  });
}

export default async function TechServicePage({ params }: Props) {
  const { locale, slug } = params;
  setRequestLocale(locale);

  const key = SLUG_TO_KEY[slug];
  if (!key || !TECH_KEYS.includes(key)) notFound();

  const t = await getTranslations("tech");
  const tAr = await getTranslations({ locale: "ar", namespace: "tech" });
  const tEn = await getTranslations({ locale: "en", namespace: "tech" });
  const title = t(`items.${key}.title`);
  const titleAr = tAr(`items.${key}.title`);
  const titleEn = tEn(`items.${key}.title`);

  return (
    <div className="min-h-screen">
      <PageHeader
        backHref="/services/tech"
        backLabel={t("back")}
        title={title}
        subtitle={t(`items.${key}.desc`)}
        visual={VISUALS.offerings.tech}
      />

      <div className="mx-auto max-w-xl px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
          <article className="card-premium p-7 sm:p-8">
            <h2 className="text-base font-medium text-tasami-dark sm:text-lg">
              {title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-tasami-gray">
              {t(`items.${key}.desc`)}
            </p>

            <ServiceRequestActions
              serviceSlug={`tech-${slug}`}
              serviceNameAr={titleAr}
              serviceNameEn={titleEn}
              category="tech"
              subcategory={key}
              priceFrom={TECH_PRICE_FROM[key]}
            />
            <MonjezHint />
          </article>
      </div>
    </div>
  );
}
