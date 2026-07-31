"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  X,
  ForkKnife,
  Heartbeat,
  Factory,
  Storefront,
  Scissors,
  HardHat,
  Buildings,
  GraduationCap,
  Scales,
  Bed,
  BookOpen,
  Truck,
  Plant,
  HandsPraying,
  RocketLaunch,
} from "@phosphor-icons/react";
import type { ComponentType, SVGProps } from "react";
import { Link } from "@/navigation";
import { SECTOR_KEYS, type SectorKey } from "@/lib/content-keys";

type PhosphorIcon = ComponentType<
  SVGProps<SVGSVGElement> & {
    weight?: "regular" | "fill" | "bold" | "light" | "thin" | "duotone";
  }
>;

const SECTOR_ICONS: Record<SectorKey, PhosphorIcon> = {
  restaurants: ForkKnife,
  clinics: Heartbeat,
  factories: Factory,
  shops: Storefront,
  salons: Scissors,
  contracting: HardHat,
  realEstate: Buildings,
  institutes: GraduationCap,
  law: Scales,
  hotels: Bed,
  education: BookOpen,
  logistics: Truck,
  agriculture: Plant,
  nonprofit: HandsPraying,
  startups: RocketLaunch,
};

const spring = { type: "spring" as const, stiffness: 260, damping: 24, mass: 0.8 };

export default function SectorsPage() {
  const t = useTranslations("sectors");
  const [active, setActive] = useState<SectorKey | null>(null);

  return (
    <div className="surface-dotted min-h-screen">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-18 lg:px-10 lg:py-20">
      <Link
        href="/"
        className="mb-10 inline-flex min-h-[44px] items-center gap-1.5 text-sm font-medium text-tasami-gray transition-colors hover:text-tasami-pink"
      >
        <ArrowLeft weight="bold" className="h-4 w-4 rtl:rotate-180" />
        {t("back")}
      </Link>

      <header className="mb-14 max-w-2xl">
        <p className="text-sm font-medium text-tasami-pink">{t("eyebrow")}</p>
        <h1 className="font-display mt-3 text-2xl text-tasami-purple sm:text-4xl">
          {t("title")}
        </h1>
        <span className="highlight-line" />
        <p className="mt-5 text-base leading-relaxed text-tasami-gray">
          {t("subtitle")}
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
        {SECTOR_KEYS.map((key) => {
          const Icon = SECTOR_ICONS[key];
          return (
            <button
              key={key}
              type="button"
              onClick={() => setActive(key)}
              className="card-premium group flex min-h-[48px] flex-col items-center gap-4 p-8 text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tasami-pink"
            >
              <span className="icon-gold !h-14 !w-14 transition-transform duration-300 group-hover:scale-105">
                <Icon weight="regular" className="h-7 w-7" />
              </span>
              <span className="text-sm font-medium text-tasami-purple">
                {t(`items.${key}.title`)}
              </span>
            </button>
          );
        })}
      </div>

      <AnimatePresence>
        {active && (
          <SectorModal sectorKey={active} onClose={() => setActive(null)} />
        )}
      </AnimatePresence>
      </div>
    </div>
  );
}

function SectorModal({
  sectorKey,
  onClose,
}: {
  sectorKey: SectorKey;
  onClose: () => void;
}) {
  const t = useTranslations("sectors");
  const ActiveIcon = SECTOR_ICONS[sectorKey];

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-end justify-center p-5 sm:items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
    >
      <button
        type="button"
        aria-label={t("close")}
        className="absolute inset-0 bg-tasami-purple/40 backdrop-blur-[2px]"
        onClick={onClose}
      />

      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="sector-modal-title"
        initial={{ opacity: 0, y: 36, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={spring}
        className="relative z-10 w-full max-w-md overflow-hidden rounded-card bg-white shadow-soft"
      >
        <div className="flex items-start justify-between gap-4 bg-tasami-purple px-6 py-5">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-button bg-tasami-gold/20">
              <ActiveIcon
                weight="regular"
                className="h-6 w-6 text-tasami-gold"
              />
            </span>
            <h2
              id="sector-modal-title"
              className="text-lg font-light text-white"
            >
              {t(`items.${sectorKey}.title`)}
            </h2>
          </div>
          <button
            type="button"
            aria-label={t("close")}
            onClick={onClose}
            className="touch-target flex items-center justify-center rounded-button p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
          >
            <X weight="bold" className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-6 p-6">
          <p className="text-sm leading-relaxed text-tasami-gray">
            {t(`items.${sectorKey}.desc`)}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/services/government"
              className="btn-primary flex-1 text-sm"
              onClick={onClose}
            >
              {t("ctaGov")}
            </Link>
            <Link
              href="/services/tech"
              className="btn-secondary flex-1 text-sm"
              onClick={onClose}
            >
              {t("ctaTech")}
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
