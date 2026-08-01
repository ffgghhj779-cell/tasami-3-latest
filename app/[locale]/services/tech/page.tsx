import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  Globe,
  DeviceMobile,
  MapPin,
  Megaphone,
  GearSix,
  Headset,
  Brain,
  ChartBar,
  Cloud,
  ArrowLeft,
} from "@phosphor-icons/react/dist/ssr";
import { Link } from "@/navigation";
import ServiceCard from "@/components/ServiceCard";
import { TECH_KEYS, TECH_SLUGS, type TechKey } from "@/lib/content-keys";
import { TECH_PRICE_FROM, formatPriceFrom } from "@/lib/service-pricing";
import { rtlLocales, type Locale } from "@/i18n";
import { buildPageMetadata } from "@/lib/seo";

const TECH_ICONS: Record<TechKey, typeof Globe> = {
  websites: Globe,
  mobile: DeviceMobile,
  maps: MapPin,
  marketing: Megaphone,
  automation: GearSix,
  support: Headset,
  ai: Brain,
  data: ChartBar,
  cloud: Cloud,
};

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props) {
  const t = await getTranslations({ locale: params.locale, namespace: "tech" });
  return buildPageMetadata({
    title: t("title"),
    description: t("subtitle"),
    path: "/services/tech",
    locale: params.locale,
  });
}

export default async function TechServicesPage({ params }: Props) {
  const { locale } = params;
  setRequestLocale(locale);

  const t = await getTranslations("tech");
  const isRtl = rtlLocales.includes(locale as Locale);

  return (
    <div className="surface-dotted min-h-screen">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-18 lg:px-10 lg:py-20">
        <Link
          href="/"
          className="mb-10 inline-flex min-h-[44px] items-center gap-1.5 text-sm font-medium text-tasami-gray transition-colors hover:text-tasami-pink"
        >
          <ArrowLeft weight="bold" className="h-4 w-4 rtl:rotate-180" />
          {t("back")}
        </Link>

        <header className="mb-14 max-w-2xl">
          <p className="text-sm font-medium text-tasami-pink">{t("eyebrow")}</p>
          <h1 className="font-display mt-3 text-2xl text-tasami-purple sm:text-4xl">
            {t("title")}
          </h1>
          <span className="highlight-line" />
          <p className="mt-5 text-base leading-relaxed text-tasami-gray">
            {t("subtitle")}
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {TECH_KEYS.map((key) => (
            <ServiceCard
              key={key}
              href={`/services/tech/${TECH_SLUGS[key]}`}
              icon={TECH_ICONS[key]}
              title={t(`items.${key}.title`)}
              description={t(`items.${key}.desc`)}
              cta={t("viewServices")}
              meta={formatPriceFrom(TECH_PRICE_FROM[key], locale)}
              rtl={isRtl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
