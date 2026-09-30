"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { WORKING_HOURS } from "@/lib/site";

const WEEKDAY_INDEX: Record<string, number> = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
};

function isOpenNow(date: Date): boolean {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: WORKING_HOURS.timeZone,
    weekday: "short",
    hour: "numeric",
    hourCycle: "h23",
  }).formatToParts(date);
  const day = WEEKDAY_INDEX[parts.find((p) => p.type === "weekday")?.value || ""];
  const hour = Number(parts.find((p) => p.type === "hour")?.value);
  if (WORKING_HOURS.closedDays.includes(day)) return false;
  return hour >= WORKING_HOURS.openHour && hour < WORKING_HOURS.closeHour;
}

/** Live open/closed badge in Riyadh time. Renders nothing until mounted to avoid hydration drift. */
export default function OpenStatus({ className = "" }: { className?: string }) {
  const t = useTranslations("trustStats");
  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const update = () => setOpen(isOpenNow(new Date()));
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, []);

  if (open === null) return null;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold ${
        open
          ? "bg-[#e8f6ee] text-[#0f7a3d]"
          : "bg-[#f1f2f4] text-[#5f6672]"
      } ${className}`}
    >
      <span
        aria-hidden
        className={`h-2 w-2 rounded-full ${
          open ? "bg-[#16a34a] trust-live-dot" : "bg-[#9aa1ab]"
        }`}
      />
      {open ? t("openNow") : t("closedNow")}
    </span>
  );
}
