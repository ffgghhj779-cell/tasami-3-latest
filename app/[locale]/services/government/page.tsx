import { getTranslations, setRequestLocale } from "next-intl/server";
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
import ServiceCard from "@/components/ServiceCard";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { GOV_KEYS, GOV_SLUGS, type GovKey } from "@/lib/content-keys";
import { VISUALS } from "@/lib/visuals";
import { offeringsByCategory } from "@/lib/gov-offerings";
import { rtlLocales, type Locale } from "@/i18n";
import { buildPageMetadata } from "@/lib/seo";

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

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params }: Props) {
  const t = await getTranslations({ locale: params.locale, namespace: "gov" });
  return buildPageMetadata({
    title: t("title"),
    description: t("subtitle"),
    path: "/services/government",
    locale: params.locale,
  });
}

export default async function GovernmentServicesPage({ params }: Props) {
  const { locale } = params;
  setRequestLocale(locale);

  const t = await getTranslations("gov");
  const isRtl = rtlLocales.includes(locale as Locale);

  return (
    <div className="min-h-screen">
      <PageHeader
        backHref="/"
        backLabel={t("back")}
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
        visual={VISUALS.offerings.gov}
      />

      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {GOV_KEYS.map((key, i) => {
            const count = offeringsByCategory(key).length;
            return (
              <Reveal key={key} index={i} className="h-full">
              <ServiceCard
                variant="gov"
                toneIndex={i}
                href={`/services/government/${GOV_SLUGS[key]}`}
                icon={GOV_ICONS[key]}
                title={t(`items.${key}.title`)}
                description={t(`items.${key}.desc`)}
                cta={t("viewServices")}
                meta={
                  count > 0 ? t("offeringCount", { count }) : undefined
                }
                rtl={isRtl}
              />
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}
