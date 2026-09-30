import { getTranslations, setRequestLocale } from "next-intl/server";
import QuickRequestForm, { type QuickOption } from "@/components/QuickRequestForm";
import { buildPageMetadata } from "@/lib/seo";
import {
  GOV_REQUEST_OPTIONS,
  TECH_REQUEST_OPTIONS,
  type RequestLine,
} from "@/lib/orders";

type Props = {
  params: { locale: string };
  searchParams: { kind?: string; service?: string };
};

export async function generateMetadata({ params }: Props) {
  const t = await getTranslations({ locale: params.locale, namespace: "requestForm" });
  return buildPageMetadata({
    title: t("title"),
    description: t("subtitle"),
    path: "/request",
    locale: params.locale,
  });
}

export default async function RequestPage({ params, searchParams }: Props) {
  const { locale } = params;
  setRequestLocale(locale);

  const t = await getTranslations("requestForm");
  const tLocal = await getTranslations();
  const tAr = await getTranslations({ locale: "ar" });
  const tEn = await getTranslations({ locale: "en" });

  const options: QuickOption[] = [...GOV_REQUEST_OPTIONS, ...TECH_REQUEST_OPTIONS].map(
    (o) => ({
      id: o.id,
      line: o.line,
      serviceSlug: o.serviceSlug,
      label: tLocal(o.labelKey),
      labelAr: tAr(o.labelKey),
      labelEn: tEn(o.labelKey),
    })
  );

  const initialLine: RequestLine = searchParams.kind === "tech" ? "tech" : "gov";

  return (
    <div className="bg-tasami-offwhite">
      <div className="mx-auto max-w-xl px-5 py-12 sm:py-16">
        <h1 className="text-2xl font-bold leading-[1.3] text-tasami-dark sm:text-3xl">
          {t("title")}
        </h1>
        <p className="mt-3 leading-[1.8] text-tasami-gray">{t("subtitle")}</p>
        <div className="mt-8">
          <QuickRequestForm
            options={options}
            initialLine={initialLine}
            initialService={searchParams.service}
          />
        </div>
      </div>
    </div>
  );
}
