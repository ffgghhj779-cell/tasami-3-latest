import type { ReactNode } from "react";
import { setRequestLocale } from "next-intl/server";
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
  return buildPageMetadata({
    title: "My requests",
    path: "/my-requests",
    locale: params.locale,
    index: false,
  });
}

export default function MyRequestsLayout({ children, params }: Props) {
  setRequestLocale(params.locale);
  return children;
}
