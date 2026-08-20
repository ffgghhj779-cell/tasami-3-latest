import type { ReactNode } from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildPageMetadata } from "@/lib/seo";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: "nav" });

  return buildPageMetadata({
    title: t("login"),
    path: "/login",
    locale,
    index: false,
  });
}

export default function LoginLayout({ children, params }: Props) {
  setRequestLocale(params.locale);
  return children;
}
