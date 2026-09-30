import type { ReactNode } from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildPageMetadata } from "@/lib/seo";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale: params.locale, namespace: "request" });
  return buildPageMetadata({
    title: t("myTitle"),
    path: "/my-requests",
    locale: params.locale,
    index: false,
  });
}

export default function MyRequestsLayout({ children, params }: Props) {
  setRequestLocale(params.locale);
  return children;
}
