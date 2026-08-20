"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import {
  List,
  X,
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

const NAV_LINKS = [
  { href: "/services/government", key: "government" as const, icon: Buildings },
  { href: "/services/tech", key: "tech" as const, icon: Cpu },
  { href: "/sectors", key: "sectors" as const, icon: SquaresFour },
] as const;

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
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";
  const onHero = isHome && !scrolled && !mobileOpen;
  const ink = onHero
    ? "text-white/80 hover:text-white"
    : "text-tasami-dark/75 hover:text-tasami-dark";
  const inkActive = onHero ? "text-white" : "text-tasami-dark";

  useBodyScrollLock(mobileOpen);

  useEffect(() => {
    fetch("/api/auth/me")
      .then((r) => r.json())
      .then((d) => setLoggedIn(Boolean(d?.user)))
      .catch(() => setLoggedIn(false));
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 isolate border-b pt-[env(safe-area-inset-top)] transition-colors duration-300 ${
        mobileOpen
          ? "border-[rgba(26,53,80,0.08)] bg-white"
          : onHero
            ? "border-white/20 bg-[#1A3550]/40 backdrop-blur-md"
            : "border-[rgba(26,53,80,0.08)] bg-white/95 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-2 px-4 sm:h-[4.75rem] sm:gap-4 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="flex min-w-0 shrink items-center gap-2 overflow-visible"
          onClick={() => setMobileOpen(false)}
        >
          <BrandLogo
            lockupSize="xs"
            priority
            wordmark={tBrand("name")}
          />
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map(({ href, key }) => {
            const active = pathname.includes(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`relative flex items-center px-3.5 py-2 text-sm font-medium transition-colors duration-200 ${
                    active ? inkActive : ink
                  }`}
                >
                  {t(key)}
                  {active ? (
                    <span className="absolute inset-x-3.5 -bottom-0.5 h-px bg-tasami-purple" />
                  ) : null}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="relative">
            <button
              type="button"
              aria-label={t("changeLanguage")}
              aria-expanded={langOpen}
              onClick={() => setLangOpen((v) => !v)}
              className={`touch-target flex h-11 w-11 items-center justify-center rounded-button transition-colors ${
                onHero && !mobileOpen
                  ? "text-white/85 hover:bg-white/10 hover:text-white"
                  : "text-tasami-dark hover:bg-tasami-offwhite"
              }`}
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
                    className={`absolute top-full z-50 mt-3 min-w-[160px] overflow-hidden rounded-card border border-[rgba(0,122,255,0.14)] bg-white shadow-soft ${
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
                            ? "font-medium text-tasami-dark"
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
            className={`hidden min-h-[40px] items-center gap-1.5 rounded-button border px-3.5 py-2 text-sm font-medium transition-colors sm:inline-flex ${
              onHero
                ? "border-white/35 text-white hover:border-white hover:text-white"
                : "border-[rgba(26,53,80,0.18)] text-tasami-dark hover:border-tasami-purple hover:text-tasami-purple"
            }`}
          >
            <UserCircle weight="regular" className="h-5 w-5" />
            <span className="hidden lg:inline">
              {loggedIn ? t("account") : t("login")}
            </span>
          </Link>

          <button
            type="button"
            aria-label={mobileOpen ? t("closeMenu") : t("openMenu")}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className={`touch-target flex h-11 w-11 items-center justify-center rounded-button md:hidden ${
              onHero && !mobileOpen
                ? "text-white hover:bg-white/10"
                : "text-tasami-dark hover:bg-tasami-offwhite"
            }`}
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
            className="overflow-hidden border-t border-[rgba(26,53,80,0.08)] bg-white md:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {NAV_LINKS.map(({ href, key, icon: Icon }) => {
                const active = pathname.includes(href);
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex min-h-[48px] items-center gap-3 rounded-button px-3 py-3 text-sm font-medium ${
                        active
                          ? "bg-tasami-offwhite text-tasami-dark"
                          : "text-tasami-dark/80"
                      }`}
                    >
                      <Icon weight="regular" className="h-5 w-5 text-[#007AFF]" />
                      {t(key)}
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link
                  href={loggedIn ? "/my-requests" : "/login"}
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-[48px] items-center gap-3 rounded-button px-3 py-3 text-sm font-medium text-tasami-dark"
                >
                  <UserCircle weight="regular" className="h-5 w-5 text-[#007AFF]" />
                  {loggedIn ? t("account") : t("login")}
                </Link>
              </li>
              {!loggedIn && (
                <li>
                  <Link
                    href="/register"
                    onClick={() => setMobileOpen(false)}
                    className="mt-1 flex min-h-[48px] items-center justify-center rounded-button bg-[#007AFF] px-3 py-3 text-sm font-semibold text-white"
                  >
                    {t("register")}
                  </Link>
                </li>
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
