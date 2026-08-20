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
    title: "Reset password",
    path: "/reset-password",
    locale: params.locale,
    index: false,
  });
}

export default function ResetPasswordLayout({ children, params }: Props) {
  setRequestLocale(params.locale);
  return children;
}
