"use client";

import { useEffect, useState } from "react";
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
  UserCircle,
} from "@phosphor-icons/react";
import { Link, usePathname } from "@/navigation";
import { locales, type Locale } from "@/i18n";
import BrandLogo from "@/components/BrandLogo";
import { useBodyScrollLock } from "@/lib/useBodyScrollLock";
import { whatsappUrl } from "@/lib/site";

const NAV_LINKS = [
  { href: "/services/government", key: "government" as const, icon: Buildings },
  { href: "/services/tech", key: "tech" as const, icon: Cpu },
  { href: "/sectors", key: "sectors" as const, icon: SquaresFour },
] as const;

const WHATSAPP_URL = whatsappUrl("مرحباً، أرغب بالتواصل مع سكرتير خلصانة");

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
  const [loggedIn, setLoggedIn] = useState(false);

  useBodyScrollLock(mobileOpen);

  useEffect(() => {
    fetch("/api/auth/me")
      .then((r) => r.json())
      .then((d) => setLoggedIn(Boolean(d?.user)))
      .catch(() => setLoggedIn(false));
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 isolate border-b border-white/10 bg-[#3520C4] pt-[env(safe-area-inset-top)] shadow-[0_10px_28px_rgba(53,32,196,0.28)]">
      <nav className="mx-auto flex h-[5rem] max-w-7xl items-center justify-between gap-2 px-4 sm:h-[5.25rem] sm:gap-4 sm:px-8 lg:h-[5.5rem] lg:px-10">
        <Link
          href="/"
          className="flex min-w-0 shrink items-center gap-2"
          onClick={() => setMobileOpen(false)}
        >
          <BrandLogo
            size={44}
            withWordmark
            priority
            wordmark={tBrand("name")}
            slogan={tBrand("slogan")}
            onDark
            className="max-[360px]:[&_.font-brand]:text-[1.15rem] sm:[&_img]:!h-12 sm:[&_img]:!w-12 lg:[&_img]:!h-[52px] lg:[&_img]:!w-[52px]"
          />
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map(({ href, key, icon: Icon }) => {
            const active = pathname.includes(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
                    active
                      ? "bg-white/12 text-tasami-gold"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  <Icon weight="regular" className="h-4 w-4 text-tasami-lilac" />
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
              className="touch-target flex h-11 w-11 items-center justify-center rounded-button text-white transition-colors hover:bg-white/10"
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

          <Link
            href={loggedIn ? "/my-requests" : "/login"}
            className="hidden min-h-[44px] items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-tasami-dark shadow-soft transition-opacity hover:opacity-90 sm:inline-flex"
          >
            <UserCircle weight="regular" className="h-5 w-5 text-tasami-pink" />
            <span className="hidden lg:inline">
              {loggedIn ? t("account") : t("login")}
            </span>
          </Link>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-[44px] items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white shadow-soft transition-all duration-200 hover:opacity-90 active:scale-[0.98] sm:inline-flex"
          >
            <WhatsappLogo weight="fill" className="h-4 w-4" />
            <span className="hidden lg:inline">{t("whatsapp")}</span>
          </a>

          <button
            type="button"
            aria-label={mobileOpen ? t("closeMenu") : t("openMenu")}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="touch-target flex h-11 w-11 items-center justify-center rounded-button text-white hover:bg-white/10 md:hidden"
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
                      className={`flex min-h-[48px] items-center gap-3 rounded-full px-4 py-3.5 text-sm font-semibold transition-colors ${
                        active
                          ? "bg-white/12 text-tasami-gold"
                          : "text-white/90 hover:bg-white/10"
                      }`}
                    >
                      <Icon weight="regular" className="h-5 w-5 text-tasami-lilac" />
                      {t(key)}
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link
                  href={loggedIn ? "/my-requests" : "/login"}
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-[48px] items-center gap-3 rounded-full px-4 py-3.5 text-sm font-semibold text-white/90 hover:bg-white/10"
                >
                  <UserCircle weight="regular" className="h-5 w-5 text-tasami-gold" />
                  {loggedIn ? t("account") : t("login")}
                </Link>
              </li>
              {!loggedIn && (
                <li>
                  <Link
                    href="/register"
                    onClick={() => setMobileOpen(false)}
                    className="flex min-h-[48px] items-center gap-3 rounded-button px-4 py-3.5 text-sm font-medium text-white/90 hover:bg-white/10"
                  >
                    {t("register")}
                  </Link>
                </li>
              )}
              <li className="pt-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3.5 text-sm font-semibold text-white shadow-soft"
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
