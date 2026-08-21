"use client";

import { useTranslations } from "next-intl";
import {
  Buildings,
  Cpu,
  EnvelopeSimple,
  Phone,
  WhatsappLogo,
} from "@phosphor-icons/react";
import { Link } from "@/navigation";
import BrandLogo from "@/components/BrandLogo";
import {
  getCompanyInfo,
  getPublicContactEmail,
  getPhoneDisplay,
  getTikTokUrl,
  getWhatsAppDisplay,
  telUrl,
  whatsappUrl,
} from "@/lib/site";
import { GOV_SLUGS, TECH_SLUGS } from "@/lib/content-keys";

const GOV_LINKS = ["passports", "commerce", "zakat", "najiz"] as const;
const TECH_LINKS = ["websites", "mobile", "ai", "cloud"] as const;

export default function Footer() {
  const t = useTranslations("footer");
  const tBrand = useTranslations("brand");
  const tGov = useTranslations("gov.items");
  const tTech = useTranslations("tech.items");
  const year = new Date().getFullYear();
  const company = getCompanyInfo();
  const contactEmail = getPublicContactEmail();

  return (
    <footer className="relative overflow-hidden border-t border-white/20 bg-[#007AFF] text-white">
      <div className="relative mx-auto max-w-7xl px-5 py-14 pb-[calc(5.75rem+env(safe-area-inset-bottom,0px))] sm:px-8 sm:pb-16 lg:px-10 lg:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div>
            <BrandLogo lockupSize="md" wordmark={tBrand("name")} />
            <p className="mt-5 text-sm leading-relaxed text-white/90">
              {t("about")}
            </p>
            <p className="mt-4 border border-white/10 bg-white/[0.03] p-3.5 text-sm font-medium leading-relaxed text-white/80">
              {t("affiliation")}
            </p>
            <div className="mt-6 flex flex-col gap-2.5 text-sm text-white/90">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-white"
              >
                <WhatsappLogo weight="regular" className="h-4 w-4 text-tasami-lilac" />
                <span>
                  {t("whatsapp")}
                  <span className="ms-1.5" dir="ltr">
                    {getWhatsAppDisplay()}
                  </span>
                </span>
              </a>
              <a
                href={getTikTokUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-white"
              >
                <TikTokMark className="h-4 w-4 text-tasami-lilac" />
                {t("tiktok")}
              </a>
              <a
                href={telUrl()}
                dir="ltr"
                className="inline-flex items-center gap-2 hover:text-white"
              >
                <Phone weight="regular" className="h-4 w-4 text-tasami-lilac" />
                {getPhoneDisplay()}
              </a>
              {contactEmail ? (
                <a
                  href={`mailto:${contactEmail}`}
                  className="inline-flex items-center gap-2 hover:text-white"
                >
                  <EnvelopeSimple weight="regular" className="h-4 w-4 text-tasami-lilac" />
                  {contactEmail}
                </a>
              ) : null}
              <span>{t("hours")}</span>
            </div>

            <div className="mt-6 space-y-1.5 border-t border-white/10 pt-5 text-xs text-white/40">
              {company.cr ? (
                <p>
                  {t("company.cr")} · {t("company.parent")}: {company.cr}
                </p>
              ) : null}
              {company.vat ? (
                <p>
                  {t("company.vat")}: {company.vat}
                </p>
              ) : null}
              <p>{company.address || t("company.city")}</p>
            </div>
          </div>

          <div>
            <div className="mb-5 flex items-center gap-2">
              <Buildings weight="regular" className="h-4 w-4 text-tasami-lilac" />
              <h3 className="text-sm font-medium text-white">{t("govTitle")}</h3>
            </div>
            <ul className="space-y-3">
              {GOV_LINKS.map((key) => (
                <li key={key}>
                  <Link
                    href={`/services/government/${GOV_SLUGS[key]}`}
                    className="text-sm text-white/90 transition-colors hover:text-white"
                  >
                    {tGov(`${key}.title`)}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services/government"
                  className="text-sm font-medium text-tasami-lilac hover:text-white"
                >
                  {t("viewAll")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="mb-5 flex items-center gap-2">
              <Cpu weight="regular" className="h-4 w-4 text-tasami-teal" />
              <h3 className="text-sm font-medium text-white">{t("techTitle")}</h3>
            </div>
            <ul className="space-y-3">
              {TECH_LINKS.map((key) => (
                <li key={key}>
                  <Link
                    href={`/services/tech/${TECH_SLUGS[key]}`}
                    className="text-sm text-white/90 transition-colors hover:text-white"
                  >
                    {tTech(`${key}.title`)}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services/tech"
                  className="text-sm font-medium text-tasami-teal hover:text-white"
                >
                  {t("viewAll")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-medium text-white">{t("legalTitle")}</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/sectors"
                  className="text-sm text-white/90 transition-colors hover:text-white"
                >
                  {t("sectors")}
                </Link>
              </li>
              <li>
                <Link
                  href="/my-requests"
                  className="text-sm text-white/90 transition-colors hover:text-white"
                >
                  {t("myRequests")}
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-white/90 transition-colors hover:text-white"
                >
                  {t("privacy")}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-white/90 transition-colors hover:text-white"
                >
                  {t("terms")}
                </Link>
              </li>
              <li className="pt-2">
                <a
                  href={whatsappUrl()}
                  className="inline-flex min-h-[44px] items-center rounded-button border border-white/50 bg-white px-4 py-2.5 text-sm font-semibold text-tasami-purple transition-colors hover:bg-tasami-lilac hover:text-tasami-purple"
                >
                  {t("contactCta")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center sm:flex-row sm:text-start">
          <p className="text-xs text-white/40">
            © {year} {t("brand")}. {t("rights")}
          </p>
          <p className="max-w-md text-[10px] leading-relaxed text-white/35 sm:text-end">
            {t("legalDisclaimer")}
          </p>
        </div>
        <p className="mt-4 text-center text-xs text-white/30">{t("built")}</p>
      </div>
    </footer>
  );
}

function TikTokMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.28 0 .54.04.79.13V9.4a6.33 6.33 0 0 0-.79-.05A6.34 6.34 0 0 0 3.42 15.7a6.34 6.34 0 0 0 10.76 4.55v-7.11a8.18 8.18 0 0 0 4.86 1.57V11.4a4.87 4.87 0 0 1 .55-.02z" />
    </svg>
  );
}
