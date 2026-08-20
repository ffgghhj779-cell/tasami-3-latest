"use client";

import BrandLogo from "@/components/BrandLogo";

export default function LocaleError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center px-5 py-20 text-center">
      <BrandLogo lockupSize="md" wordmark="تَسَامِي" className="mb-8" />
      <p className="text-sm font-medium text-tasami-pink">خطأ</p>
      <h1 className="font-display mt-3 text-2xl text-tasami-dark sm:text-3xl">
        حدث خطأ غير متوقع
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-tasami-gray">
        Something went wrong. Please try again.
      </p>
      <button
        type="button"
        onClick={reset}
        className="btn-primary mt-8 min-w-[160px]"
      >
        إعادة المحاولة / Retry
      </button>
    </div>
  );
}
