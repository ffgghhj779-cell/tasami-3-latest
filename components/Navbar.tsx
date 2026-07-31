"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import {
  List,
  X,
  WhatsappLogo,
  Buildings,
  Cpu,
  SquaresFour,
  GlobeHemisphereWest,
} from "@phosphor-icons/react";
import { Link, usePathname } from "@/navigation";
import { locales, type Locale } from "@/i18n";

const NAV_LINKS = [
  { href: "/services/government", key: "government" as const, icon: Buildings },
  { href: "/services/tech", key: "tech" as const, icon: Cpu },
  { href: "/sectors", key: "sectors" as const, icon: SquaresFour },
] as const;

const WHATSAPP_URL =
  "https://wa.me/966500000000?text=" +
  encodeURIComponent("مرحباً، أرغب بالتواصل مع سكرتير تسامي");

const springSoft = { type: "spring" as const, stiffness: 280, damping: 26 };

export default function Navbar() {
  const t = useTranslations("nav");
  const tBrand = useTranslations("brand");
  const tLang = useTranslations("languages");
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const isRtl = locale === "ar" || locale === "ur";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-tasami-purple shadow-soft">
      <nav className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="flex items-center gap-2.5 shrink-0"
          onClick={() => setMobileOpen(false)}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-button bg-tasami-gold/20">
            <span className="text-lg font-light text-tasami-gold">
              {tBrand("letter")}
            </span>
          </span>
          <span className="text-xl font-light tracking-wide text-white">
            {tBrand("name")}
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ href, key, icon: Icon }) => {
            const active = pathname.includes(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`flex items-center gap-2 rounded-button px-4 py-2.5 text-sm font-medium transition-colors duration-200 ${
                    active
                      ? "bg-white/10 text-tasami-pink"
                      : "text-white/80 hover:bg-white/10 hover:text-tasami-pink"
                  }`}
                >
                  <Icon
                    weight="regular"
                    className="h-4 w-4 text-tasami-gold"
                  />
                  {t(key)}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative">
            <button
              type="button"
              aria-label={t("changeLanguage")}
              aria-expanded={langOpen}
              onClick={() => setLangOpen((v) => !v)}
              className="touch-target flex h-11 w-11 items-center justify-center rounded-button text-white/90 transition-colors hover:bg-white/10 hover:text-tasami-pink"
            >
              <GlobeHemisphereWest weight="regular" className="h-5 w-5" />
            </button>

            <AnimatePresence>
              {langOpen && (
                <>
                  <button
                    type="button"
                    aria-label={t("closeMenu")}
                    className="fixed inset-0 z-40 cursor-default"
                    onClick={() => setLangOpen(false)}
                  />
                  <motion.div
                    initial={{ opacity: 0, y: -6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.97 }}
                    transition={springSoft}
                    className={`absolute top-full z-50 mt-3 min-w-[160px] overflow-hidden rounded-card bg-white shadow-soft ${
                      isRtl ? "left-0" : "right-0"
                    }`}
                  >
                    {locales.map((code) => (
                      <Link
                        key={code}
                        href={pathname}
                        locale={code}
                        onClick={() => setLangOpen(false)}
                        className={`flex min-h-[44px] items-center justify-between px-4 py-3 text-sm transition-colors hover:bg-tasami-offwhite ${
                          locale === code
                            ? "font-medium text-tasami-purple"
                            : "font-normal text-tasami-dark"
                        }`}
                      >
                        <span>{tLang(code)}</span>
                        <span className="text-xs text-tasami-gray">
                          {code.toUpperCase()}
                        </span>
                      </Link>
                    ))}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex min-h-[44px] items-center gap-2 rounded-button bg-tasami-pink px-4 py-2.5 text-sm font-medium text-white shadow-soft transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
          >
            <WhatsappLogo weight="fill" className="h-4 w-4" />
            <span className="hidden lg:inline">{t("whatsapp")}</span>
          </a>

          <button
            type="button"
            aria-label={mobileOpen ? t("closeMenu") : t("openMenu")}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="touch-target flex h-11 w-11 items-center justify-center rounded-button text-white md:hidden hover:bg-white/10"
          >
            {mobileOpen ? (
              <X weight="bold" className="h-5 w-5" />
            ) : (
              <List weight="bold" className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={springSoft}
            className="overflow-hidden border-t border-white/10 md:hidden"
          >
            <ul className="flex flex-col gap-1.5 px-5 py-5">
              {NAV_LINKS.map(({ href, key, icon: Icon }) => {
                const active = pathname.includes(href);
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex min-h-[48px] items-center gap-3 rounded-button px-4 py-3.5 text-sm font-medium transition-colors ${
                        active
                          ? "bg-white/10 text-tasami-pink"
                          : "text-white/90 hover:bg-white/10"
                      }`}
                    >
                      <Icon weight="regular" className="h-5 w-5 text-tasami-gold" />
                      {t(key)}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-button bg-tasami-pink px-4 py-3.5 text-sm font-medium text-white shadow-soft"
                >
                  <WhatsappLogo weight="fill" className="h-5 w-5" />
                  {t("whatsappMobile")}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
