import type { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import TrustBar from "@/components/TrustBar";
import FloatingWidgets from "@/components/FloatingWidgets";
import { LocaleHtmlAttrs } from "@/components/LocaleHtmlAttrs";
import { isLocale, locales, rtlLocales, type Locale } from "@/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const locale = params.locale;

  if (!isLocale(locale)) notFound();

  setRequestLocale(locale);

  const messages = await getMessages();
  const dir = rtlLocales.includes(locale as Locale) ? "rtl" : "ltr";

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <LocaleHtmlAttrs locale={locale} dir={dir} />
      <Navbar />
      <TrustBar />
      <main className="min-h-[60vh]">{children}</main>
      <FloatingWidgets />
    </NextIntlClientProvider>
  );
}
