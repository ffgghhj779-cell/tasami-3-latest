import type { ReactNode } from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildPageMetadata } from "@/lib/seo";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: "sectors" });

  return buildPageMetadata({
    title: t("title"),
    description: t("subtitle"),
    path: "/sectors",
    locale,
  });
}

export default function SectorsLayout({ children, params }: Props) {
  setRequestLocale(params.locale);
  return children;
}
