import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  Buildings,
  ClipboardText,
  Clock,
  Cpu,
  EnvelopeSimple,
  MapPin,
  NavigationArrow,
  Phone,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import { Link } from "@/navigation";
import SimpleHeader from "@/components/SimpleHeader";
import OpenStatus from "@/components/OpenStatus";
import WaLink from "@/components/WaLink";
import {
  getOfficeDirectionsUrl,
  getPublicContactEmail,
  getWhatsAppDirectDisplay,
  getWhatsAppDirectNumber,
  getWhatsAppDisplay,
  getWhatsAppNumber,
} from "@/lib/site";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

type Props = { params: { locale: string } };

export async function generateMetadata({ params }: Props) {
  const t = await getTranslations({ locale: params.locale, namespace: "contactPage" });
  return buildPageMetadata({
    title: t("title"),
    description: t("subtitle"),
    path: "/contact",
    locale: params.locale,
  });
}

export default async function ContactPage({ params }: Props) {
  const { locale } = params;
  setRequestLocale(locale);
  const t = await getTranslations("contactPage");
  const tChooser = await getTranslations("waChooser");
  const tTrust = await getTranslations("trustStats");
  const tLoc = await getTranslations("location");
  const tFooter = await getTranslations("footer");
  const tBrand = await getTranslations("brand");
  const email = getPublicContactEmail();

  const departments = [
    {
      line: "taqeeb" as const,
      icon: Buildings,
      title: tChooser("taqeeb"),
      desc: t("taqeebDesc"),
      display: getWhatsAppDirectDisplay(),
      tel: `tel:+${getWhatsAppDirectNumber()}`,
    },
    {
      line: "tech" as const,
      icon: Cpu,
      title: tChooser("tech"),
      desc: t("techDesc"),
      display: getWhatsAppDisplay(),
      tel: `tel:+${getWhatsAppNumber()}`,
    },
  ];

  const breadcrumb = breadcrumbJsonLd(locale, [
    { name: tBrand("name"), path: "" },
    { name: t("title"), path: "/contact" },
  ]);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <SimpleHeader title={t("title")} subtitle={t("subtitle")} />

      <div className="mx-auto max-w-3xl space-y-6 px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-4 sm:grid-cols-2">
          {departments.map(({ line, icon: Icon, title, desc, display, tel }) => (
            <section
              key={line}
              className="flex flex-col rounded-2xl border border-[rgba(26,53,80,0.1)] bg-white p-5 sm:p-6"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#006BDE]/10 text-[#006BDE]">
                  <Icon weight="regular" className="h-6 w-6" />
                </span>
                <h2 className="text-lg font-bold text-tasami-dark">{title}</h2>
              </div>
              <p className="mt-3 flex-1 leading-[1.8] text-tasami-gray">{desc}</p>
              <p className="mt-3 font-bold text-tasami-dark" dir="ltr">
                {display}
              </p>
              <WaLink
                line={line}
                location="contact_page"
                className="mt-4 flex min-h-[48px] items-center justify-center gap-2 rounded-button bg-[#0F7A40] px-4 text-base font-bold text-white active:opacity-90"
              >
                <WhatsappLogo weight="fill" className="h-5 w-5" />
                {t("whatsapp")}
              </WaLink>
              <a
                href={tel}
                className="mt-2 flex min-h-[48px] items-center justify-center gap-2 rounded-button border border-[rgba(26,53,80,0.18)] px-4 text-base font-bold text-tasami-dark"
              >
                <Phone weight="regular" className="h-5 w-5" />
                {t("call")}
              </a>
            </section>
          ))}
        </div>

        <section className="rounded-2xl border border-[rgba(26,53,80,0.1)] bg-white p-5 sm:p-6">
          <h2 className="flex items-center gap-2 text-lg font-bold text-tasami-dark">
            <Clock weight="regular" className="h-5 w-5 text-[#006BDE]" />
            {t("hoursTitle")}
          </h2>
          <p className="mt-2 text-tasami-dark">
            {tTrust("hoursValue")} · {tTrust("hoursDays")}
          </p>
          <OpenStatus className="mt-3" />
        </section>

        <section className="rounded-2xl border border-[rgba(26,53,80,0.1)] bg-white p-5 sm:p-6">
          <h2 className="flex items-center gap-2 text-lg font-bold text-tasami-dark">
            <MapPin weight="regular" className="h-5 w-5 text-[#006BDE]" />
            {t("addressTitle")}
          </h2>
          <p className="mt-2 text-tasami-dark">{tFooter("company.city")}</p>
          <p className="mt-1 text-sm text-tasami-gray">{tLoc("servingNote")}</p>
          <a
            href={getOfficeDirectionsUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-[48px] items-center gap-2 rounded-button bg-[#006BDE] px-5 text-base font-bold text-white"
          >
            <NavigationArrow weight="fill" className="h-5 w-5" />
            {t("directions")}
          </a>
        </section>

        {email ? (
          <section className="rounded-2xl border border-[rgba(26,53,80,0.1)] bg-white p-5 sm:p-6">
            <h2 className="flex items-center gap-2 text-lg font-bold text-tasami-dark">
              <EnvelopeSimple weight="regular" className="h-5 w-5 text-[#006BDE]" />
              {t("emailTitle")}
            </h2>
            <a href={`mailto:${email}`} className="mt-2 inline-block font-bold text-[#006BDE]" dir="ltr">
              {email}
            </a>
          </section>
        ) : null}

        <section className="rounded-2xl bg-tasami-offwhite p-5 sm:p-6">
          <h2 className="text-lg font-bold text-tasami-dark">{t("formTitle")}</h2>
          <p className="mt-2 leading-[1.8] text-tasami-gray">{t("formBody")}</p>
          <Link
            href="/request"
            className="mt-4 inline-flex min-h-[48px] items-center gap-2 font-bold text-[#006BDE]"
          >
            <ClipboardText weight="regular" className="h-5 w-5" />
            {t("formCta")}
          </Link>
        </section>
      </div>
    </div>
  );
}
