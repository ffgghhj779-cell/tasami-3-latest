"use client";

import BrandLogo from "@/components/BrandLogo";

export default function LocaleLoading() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-background px-5">
      <BrandLogo lockupSize="md" priority wordmark="تَسَامِي" />
      <p className="sr-only">Loading…</p>
    </div>
  );
}
