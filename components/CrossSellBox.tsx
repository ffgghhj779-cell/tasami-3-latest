import { getTranslations } from "next-intl/server";
import { ArrowLeft, ArrowRight, Buildings, Cpu } from "@phosphor-icons/react/dist/ssr";
import { Link } from "@/navigation";
import { rtlLocales, type Locale } from "@/i18n";

type Props = { from: "gov" | "tech"; locale: string };

export default async function CrossSellBox({ from, locale }: Props) {
  const t = await getTranslations({ locale, namespace: "crossSell" });
  const Arrow = rtlLocales.includes(locale as Locale) ? ArrowLeft : ArrowRight;
  const Icon = from === "gov" ? Cpu : Buildings;
  const href = from === "gov" ? "/services/tech" : "/services/government";

  return (
    <aside className="mt-6 flex items-start gap-4 rounded-2xl border border-[rgba(0,122,255,0.18)] bg-[#006BDE]/[0.04] p-5">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#006BDE]">
        <Icon weight="regular" className="h-6 w-6" />
      </span>
      <div className="min-w-0">
        <p className="font-bold text-tasami-dark">{t(`${from}.title`)}</p>
        <p className="mt-1 text-sm leading-relaxed text-tasami-gray">{t(`${from}.body`)}</p>
        <Link
          href={href}
          className="mt-2 inline-flex min-h-[44px] items-center gap-1.5 font-bold text-[#0057B8]"
        >
          {t(`${from}.cta`)}
          <Arrow weight="bold" className="h-4 w-4" />
        </Link>
      </div>
    </aside>
  );
}
