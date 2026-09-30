import { getTranslations, setRequestLocale } from "next-intl/server";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import SimpleHeader from "@/components/SimpleHeader";
import FaqList, { type FaqEntry } from "@/components/FaqList";
import WaLink from "@/components/WaLink";
import { faqJsonLd } from "@/components/ServiceFaq";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

type Props = { params: { locale: string } };

export async function generateMetadata({ params }: Props) {
  const t = await getTranslations({ locale: params.locale, namespace: "faq" });
  return buildPageMetadata({
    title: t("title"),
    description: t("subtitle"),
    path: "/faq",
    locale: params.locale,
  });
}

export default async function FaqPage({ params }: Props) {
  const { locale } = params;
  setRequestLocale(locale);
  const t = await getTranslations("faq");
  const tBrand = await getTranslations("brand");
  const items = t.raw("items") as FaqEntry[];

  const structured = [
    faqJsonLd(items),
    breadcrumbJsonLd(locale, [
      { name: tBrand("name"), path: "" },
      { name: t("title"), path: "/faq" },
    ]),
  ];

  return (
    <div>
      {structured.map((data, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
      <SimpleHeader title={t("title")} subtitle={t("subtitle")} />
      <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
        <FaqList items={items} />
        <WaLink
          line="taqeeb"
          location="faq_page"
          className="mt-8 flex min-h-[48px] w-full items-center justify-center gap-2 rounded-button bg-[#0F7A40] px-5 text-base font-bold text-white sm:w-auto sm:inline-flex"
        >
          <WhatsappLogo weight="fill" className="h-5 w-5" />
          {t("ask")}
        </WaLink>
      </div>
    </div>
  );
}
