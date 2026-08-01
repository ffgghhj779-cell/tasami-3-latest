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

const GOV_LINKS = [
  "passports",
  "commerce",
  "zakat",
  "najiz",
] as const;

const TECH_LINKS = [
  "websites",
  "mobile",
  "ai",
  "cloud",
] as const;

export default function Footer() {
  const t = useTranslations("footer");
  const tGov = useTranslations("gov.items");
  const tTech = useTranslations("tech.items");
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-tasami-purple/8 bg-tasami-purple text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-hero-glow opacity-40"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* About */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-button bg-tasami-gold/20 text-lg font-light text-tasami-gold">
                ت
              </span>
              <span className="text-xl font-light tracking-wide">{t("brand")}</span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/65">
              {t("about")}
            </p>
            <div className="mt-6 flex flex-col gap-2.5 text-sm text-white/70">
              <a
                href="https://wa.me/966500000000"
                className="inline-flex items-center gap-2 hover:text-tasami-pink"
              >
                <WhatsappLogo weight="fill" className="h-4 w-4 text-tasami-gold" />
                {t("whatsapp")}
              </a>
              <a
                href="mailto:hello@tasami.sa"
                className="inline-flex items-center gap-2 hover:text-tasami-pink"
              >
                <EnvelopeSimple weight="regular" className="h-4 w-4 text-tasami-gold" />
                hello@tasami.sa
              </a>
              <span className="inline-flex items-center gap-2">
                <Phone weight="regular" className="h-4 w-4 text-tasami-gold" />
                {t("hours")}
              </span>
            </div>
          </div>

          {/* Government */}
          <div>
            <div className="mb-5 flex items-center gap-2">
              <Buildings weight="regular" className="h-4 w-4 text-tasami-gold" />
              <h3 className="text-sm font-medium text-white">{t("govTitle")}</h3>
            </div>
            <ul className="space-y-3">
              {GOV_LINKS.map((key) => (
                <li key={key}>
                  <Link
                    href="/services/government"
                    className="text-sm text-white/60 transition-colors hover:text-tasami-pink"
                  >
                    {tGov(`${key}.title`)}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services/government"
                  className="text-sm font-medium text-tasami-gold hover:text-tasami-pink"
                >
                  {t("viewAll")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Tech */}
          <div>
            <div className="mb-5 flex items-center gap-2">
              <Cpu weight="regular" className="h-4 w-4 text-tasami-gold" />
              <h3 className="text-sm font-medium text-white">{t("techTitle")}</h3>
            </div>
            <ul className="space-y-3">
              {TECH_LINKS.map((key) => (
                <li key={key}>
                  <Link
                    href="/services/tech"
                    className="text-sm text-white/60 transition-colors hover:text-tasami-pink"
                  >
                    {tTech(`${key}.title`)}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services/tech"
                  className="text-sm font-medium text-tasami-gold hover:text-tasami-pink"
                >
                  {t("viewAll")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal / Contact */}
          <div>
            <h3 className="mb-5 text-sm font-medium text-white">
              {t("legalTitle")}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/sectors"
                  className="text-sm text-white/60 transition-colors hover:text-tasami-pink"
                >
                  {t("sectors")}
                </Link>
              </li>
              <li>
                <Link
                  href="/my-requests"
                  className="text-sm text-white/60 transition-colors hover:text-tasami-pink"
                >
                  {t("myRequests")}
                </Link>
              </li>
              <li>
                <span className="text-sm text-white/60">{t("privacy")}</span>
              </li>
              <li>
                <span className="text-sm text-white/60">{t("terms")}</span>
              </li>
              <li>
                <a
                  href="https://wa.me/966500000000"
                  className="inline-flex min-h-[44px] items-center rounded-button bg-tasami-pink px-4 py-2.5 text-sm font-medium text-white shadow-soft transition-opacity hover:opacity-90"
                >
                  {t("contactCta")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center sm:flex-row sm:text-start">
          <p className="text-xs text-white/45">
            © {year} {t("brand")}. {t("rights")}
          </p>
          <p className="max-w-md text-[10px] leading-relaxed text-white/40 sm:text-end">
            {t("legalDisclaimer")}
          </p>
        </div>
        <p className="mt-4 text-center text-xs text-white/35">{t("built")}</p>
      </div>
    </footer>
  );
}
