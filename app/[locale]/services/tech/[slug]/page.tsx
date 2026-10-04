import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import PageHeader from "@/components/PageHeader";
import ServiceBriefPanel from "@/components/ServiceBriefPanel";
import { TECH_KEYS, TECH_SLUGS, type TechKey } from "@/lib/content-keys";
import { VISUALS } from "@/lib/visuals";
import { buildPageMetadata, serviceDescription, serviceTitle } from "@/lib/seo";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CrossSellBox from "@/components/CrossSellBox";
import ServiceRequestActions, {
  MonjezHint,
} from "@/components/ServiceRequestActions";
import { Link } from "@/navigation";
import { techOfferingsByCategory } from "@/lib/tech-offerings";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

const SLUG_TO_KEY = Object.fromEntries(
  (Object.entries(TECH_SLUGS) as [TechKey, string][]).map(([k, slug]) => [
    slug,
    k,
  ])
) as Record<string, TechKey>;

type Props = { params: { locale: string; slug: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.values(TECH_SLUGS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const key = SLUG_TO_KEY[params.slug];
  if (!key) return {};
  const t = await getTranslations({ locale: params.locale, namespace: "tech" });
  return buildPageMetadata({
    title: serviceTitle(t(`items.${key}.title`), params.locale),
    description: serviceDescription(t(`items.${key}.desc`), params.locale, "tech"),
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
  const tSeo = await getTranslations("seo");
  const offerings = techOfferingsByCategory(key);
  const crumbs = [
    { label: tSeo("crumbHome"), href: "/" },
    { label: tSeo("crumbTech"), href: "/services/tech" },
    { label: title, href: `/services/tech/${slug}` },
  ];

  return (
    <div className="min-h-screen">
      <BreadcrumbSchema locale={locale} crumbs={crumbs} />
      <PageHeader
        crumbs={crumbs}
        title={title}
        subtitle={t(`items.${key}.desc`)}
        visual={VISUALS.offerings.tech}
      />

      <div className="mx-auto max-w-xl px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
        <article className="card-premium p-7 sm:p-8">
          <ServiceBriefPanel
            serviceKey={key}
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

          <ServiceRequestActions
            serviceSlug={`tech-${slug}`}
            serviceNameAr={titleAr}
            serviceNameEn={titleEn}
                serviceName={title}
            category="tech"
            subcategory={key}
          />
          <MonjezHint />
        </article>
        {offerings.length > 0 ? (
          <section className="mt-10">
            <h2 className="text-lg font-bold text-tasami-dark">{t("offeringsHeading")}</h2>
            <ul className="mt-4 space-y-3">
              {offerings.map((o) => (
                <li key={o.key}>
                  <Link
                    href={`/services/tech/${slug}/${o.slug}`}
                    className="group flex items-start justify-between gap-3 rounded-2xl border border-tasami-purple/10 bg-white p-4 shadow-soft transition-colors hover:border-[#0057B8]/40"
                  >
                    <span>
                      <span className="block font-medium text-tasami-dark group-hover:text-[#0057B8]">
                        {t(`offerings.${o.key}.title`)}
                      </span>
                      <span className="mt-1 block text-sm leading-relaxed text-tasami-gray">
                        {t(`offerings.${o.key}.desc`)}
                      </span>
                    </span>
                    <ArrowLeft className="mt-1 h-4 w-4 shrink-0 text-tasami-gray ltr:rotate-180" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
        <CrossSellBox from="tech" locale={locale} />
      </div>
    </div>
  );
}
