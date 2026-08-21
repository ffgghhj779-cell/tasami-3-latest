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
} from "@phosphor-icons/react/dist/ssr";
import ServiceCard from "@/components/ServiceCard";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { TECH_KEYS, TECH_SLUGS, type TechKey } from "@/lib/content-keys";
import { VISUALS } from "@/lib/visuals";
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
    <div className="min-h-screen">
      <PageHeader
        backHref="/"
        backLabel={t("back")}
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
        visual={VISUALS.offerings.tech}
      />

      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {TECH_KEYS.map((key, i) => (
            <Reveal key={key} index={i} className="h-full">
            <ServiceCard
              variant="tech"
              toneIndex={i}
              href={`/services/tech/${TECH_SLUGS[key]}`}
              icon={TECH_ICONS[key]}
              title={t(`items.${key}.title`)}
              description={t(`items.${key}.desc`)}
              cta={t("viewServices")}
              rtl={isRtl}
            />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
