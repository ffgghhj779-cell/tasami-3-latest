import { getTranslations, setRequestLocale } from "next-intl/server";
import PageHeader from "@/components/PageHeader";
import SearchRouter from "@/components/SearchRouter";
import { buildPageMetadata } from "@/lib/seo";
import { VISUALS } from "@/lib/visuals";

type Props = {
  params: { locale: string };
  searchParams?: { q?: string };
};

export async function generateMetadata({ params }: Props) {
  const t = await getTranslations({ locale: params.locale, namespace: "search" });
  return buildPageMetadata({
    title: t("title"),
    description: t("subtitle"),
    path: "/search",
    locale: params.locale,
    keywords: [
      "بحث خدمات تسامي",
      "نقل كفالة",
      "تجديد إقامة",
      "سجل تجاري",
      "Tasami search",
      "Saudi government services search",
    ],
  });
}

export default async function SearchPage({ params, searchParams }: Props) {
  const { locale } = params;
  setRequestLocale(locale);
  const t = await getTranslations("search");
  const initialQuery = (searchParams?.q || "").slice(0, 200);

  return (
    <div className="min-h-screen">
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
        visual={VISUALS.offerings.gov}
      />
      <div className="mx-auto max-w-3xl px-5 py-10 sm:px-8 lg:px-10 lg:py-14">
        <SearchRouter initialQuery={initialQuery} autoFocus />
      </div>
    </div>
  );
}
