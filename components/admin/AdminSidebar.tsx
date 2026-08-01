"use client";

import { useTranslations } from "next-intl";
import {
  ChartPieSlice,
  Users,
  ChatCircleDots,
  CheckSquare,
  ClipboardText,
  ArrowLeft,
} from "@phosphor-icons/react";
import { Link, usePathname } from "@/navigation";
import BrandLogo from "@/components/BrandLogo";

const NAV = [
  { href: "/admin", key: "dashboard" as const, icon: ChartPieSlice, exact: true },
  { href: "/admin/requests", key: "requests" as const, icon: ClipboardText, exact: false },
  { href: "/admin/customers", key: "customers" as const, icon: Users, exact: false },
  { href: "/admin/conversations", key: "conversations" as const, icon: ChatCircleDots, exact: false },
  { href: "/admin/tasks", key: "tasks" as const, icon: CheckSquare, exact: false },
] as const;

export default function AdminSidebar() {
  const t = useTranslations("admin");
  const pathname = usePathname();

  return (
    <aside className="flex w-full shrink-0 flex-col bg-tasami-purple text-white md:sticky md:top-0 md:h-screen md:w-64">
      <div className="flex items-center gap-3 border-b border-white/10 px-6 py-6">
        <BrandLogo size={40} onDark />
        <div>
          <p className="text-sm font-medium tracking-wide">{t("brand")}</p>
          <p className="text-[11px] text-white/55">{t("secretary")}</p>
        </div>
      </div>

      <nav className="flex flex-1 flex-col gap-1 px-3 py-5">
        {NAV.map(({ href, key, icon: Icon, exact }) => {
          const active = exact
            ? pathname === "/admin"
            : pathname === href || pathname.startsWith(`${href}/`);
          return (
            <Link
              key={href}
              href={href}
              className={`flex min-h-[44px] items-center gap-3 rounded-button px-3.5 py-2.5 text-sm transition-colors ${
                active
                  ? "bg-white/12 text-tasami-pink"
                  : "text-white/75 hover:bg-white/8 hover:text-white"
              }`}
            >
              <Icon
                weight="regular"
                className={`h-5 w-5 ${active ? "text-tasami-gold" : "text-tasami-gold/70"}`}
              />
              {t(`nav.${key}`)}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-white/10 px-4 py-4">
        <div className="mb-3 rounded-button bg-white/8 px-3 py-2 text-[11px] text-white/60">
          {t("mockAuth")}
        </div>
        <Link
          href="/"
          className="flex min-h-[40px] items-center gap-2 rounded-button px-3 py-2 text-xs text-white/70 transition-colors hover:bg-white/8 hover:text-white"
        >
          <ArrowLeft weight="bold" className="h-3.5 w-3.5 rtl:rotate-180" />
          {t("backSite")}
        </Link>
      </div>
    </aside>
  );
}
