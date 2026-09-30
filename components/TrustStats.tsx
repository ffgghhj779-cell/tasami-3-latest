import { getLocale, getTranslations } from "next-intl/server";
import {
  CheckCircle,
  IdentificationCard,
  Receipt,
  Clock,
} from "@phosphor-icons/react/dist/ssr";
import CountUp from "@/components/CountUp";
import OpenStatus from "@/components/OpenStatus";
import { COMPANY_LEGAL, getCompanyInfo } from "@/lib/site";
import { getCompletedStats } from "@/lib/stats";

export default async function TrustStats() {
  const t = await getTranslations("trustStats");
  const locale = await getLocale();
  const company = getCompanyInfo();
  const stats = await getCompletedStats();
  const showCounter = stats.total > 0;

  const updated = new Intl.DateTimeFormat(locale, {
    timeZone: "Asia/Riyadh",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(stats.updatedAt));

  return (
    <section aria-labelledby="trust-stats-heading" className="trust-stats">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <h2 id="trust-stats-heading" className="sr-only">
          {t("heading")}
        </h2>

        <div
          className={`trust-stats-grid ${showCounter ? "trust-stats-grid--4" : "trust-stats-grid--3"}`}
        >
          {showCounter ? (
            <div className="trust-cell trust-cell--primary">
              <p className="trust-label">
                <CheckCircle weight="regular" aria-hidden className="h-5 w-5 text-[#006BDE]" />
                {t("completedLabel")}
              </p>
              <p className="trust-value trust-value--xl">
                <CountUp value={stats.total} />
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                {stats.thisMonth > 0 ? (
                  <span className="trust-pill" dir="auto">
                    {t("thisMonth", { count: stats.thisMonth })}
                  </span>
                ) : null}
              </div>
              <p className="trust-note">
                <span aria-hidden className="trust-live-dot h-1.5 w-1.5 rounded-full bg-[#16a34a]" />
                {t("completedNote", { date: updated })}
              </p>
            </div>
          ) : null}

          <div className="trust-cell">
            <p className="trust-label">
              <IdentificationCard weight="regular" aria-hidden className="h-5 w-5 text-[#006BDE]" />
              {t("crLabel")}
            </p>
            <p className="trust-value">
              <span dir="ltr">{company.cr}</span>
            </p>
            <p className="trust-note">
              {t("crNote", {
                name: locale === "ar" ? COMPANY_LEGAL.nameAr : COMPANY_LEGAL.nameEn,
              })}
            </p>
          </div>

          <div className="trust-cell">
            <p className="trust-label">
              <Receipt weight="regular" aria-hidden className="h-5 w-5 text-[#006BDE]" />
              {t("vatLabel")}
            </p>
            <p className="trust-value">
              <span dir="ltr">{company.vat}</span>
            </p>
            <p className="trust-note">{t("vatNote")}</p>
          </div>

          <div className="trust-cell">
            <p className="trust-label">
              <Clock weight="regular" aria-hidden className="h-5 w-5 text-[#006BDE]" />
              {t("hoursLabel")}
            </p>
            <p className="trust-value">{t("hoursValue")}</p>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <span className="trust-note !mt-0">{t("hoursDays")}</span>
              <OpenStatus />
            </div>
            <p className="trust-note">{t("quoteNote")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
