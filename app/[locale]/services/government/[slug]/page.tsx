import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowLeft, WhatsappLogo, ChatCircleDots } from "@phosphor-icons/react/dist/ssr";
import { Link } from "@/navigation";
import { GOV_KEYS, GOV_SLUGS, type GovKey } from "@/lib/content-keys";
import { buildPageMetadata } from "@/lib/seo";
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
  const Icon = GOV_ICONS[key];

  const sampleServices = [
    { id: "a", titleKey: "title", descKey: "desc" },
  ] as const;

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
            {t(`items.${key}.title`)}
          </h1>
          <span className="highlight-line" />
          <p className="mt-5 text-base leading-relaxed text-tasami-gray">
            {t(`items.${key}.desc`)}
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sampleServices.map((s) => (
            <article key={s.id} className="card-premium p-7">
              <h2 className="text-base font-medium text-tasami-purple">
                {t(`items.${key}.title`)}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-tasami-gray">
                {t(`items.${key}.desc`)}
              </p>
              <p className="mt-4 text-xs font-medium text-tasami-gold">
                {t("requiredDocs")}
              </p>
              <ul className="mt-2 list-inside list-disc text-sm text-tasami-gray">
                <li>هوية / إقامة سارية</li>
                <li>مستندات المنشأة إن وجدت</li>
              </ul>
              <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                <a
                  href="https://wa.me/966500000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex-1 text-sm"
                >
                  <WhatsappLogo weight="fill" className="h-4 w-4" />
                  {t("askService")}
                </a>
                <Link href="/" className="btn-primary flex-1 text-sm">
                  <ChatCircleDots weight="regular" className="h-4 w-4" />
                  {t("talkMonjez")}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
