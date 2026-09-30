"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Check, MagnifyingGlass } from "@phosphor-icons/react";
import { TRACK_STEPS, type TrackStep } from "@/lib/orders";
import ReviewForm from "@/components/ReviewForm";

type Result = {
  orderNo: string;
  step: TrackStep;
  createdAt: string;
  updatedAt: string;
  service: { name_ar: string; name_en: string } | null;
  reviewed?: boolean;
};

export default function OrderTracker() {
  const t = useTranslations("tracker");
  const locale = useLocale();
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Result | null>(null);

  async function lookup(raw: string) {
    const order = raw.replace(/[^a-z0-9]/gi, "");
    if (!order) return;
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await fetch(`/api/track?order=${encodeURIComponent(order)}`);
      const data = await res.json().catch(() => null);
      if (!res.ok) {
        setError(
          data?.error === "not_found" || data?.error === "invalid"
            ? t("notFound")
            : data?.error === "too_many"
              ? t("tooMany")
              : t("error")
        );
        return;
      }
      setResult(data as Result);
      if (window.location.hash === "#review" && (data as Result).step === "done") {
        window.setTimeout(
          () => document.getElementById("review")?.scrollIntoView({ behavior: "smooth", block: "start" }),
          150
        );
      }
    } catch {
      setError(t("error"));
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get("order");
    const initial = fromUrl || localStorage.getItem("tasami_last_order") || "";
    if (initial) {
      setCode(initial.toUpperCase());
      if (fromUrl) void lookup(fromUrl);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const activeIndex =
    result && result.step !== "cancelled" ? TRACK_STEPS.indexOf(result.step) : -1;
  const dateFmt = new Intl.DateTimeFormat(locale === "ar" ? "ar-SA-u-ca-gregory" : locale, {
    dateStyle: "medium",
  });

  return (
    <section className="rounded-2xl border border-[rgba(26,53,80,0.1)] bg-white p-5 sm:p-7">
      <h2 className="text-lg font-bold text-tasami-dark">{t("title")}</h2>
      <p className="mt-1 text-tasami-gray">{t("subtitle")}</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          void lookup(code);
        }}
        className="mt-4 flex gap-2"
      >
        <label className="sr-only" htmlFor="order-no">
          {t("label")}
        </label>
        <input
          id="order-no"
          dir="ltr"
          value={code}
          onChange={(e) => setCode(e.target.value.toUpperCase())}
          placeholder="#A1B2C3D4"
          className="input-soft min-h-[48px] flex-1 text-base tracking-widest"
          autoComplete="off"
        />
        <button
          type="submit"
          disabled={loading}
          className="inline-flex min-h-[48px] items-center gap-2 rounded-button bg-[#006BDE] px-5 text-base font-bold text-white disabled:opacity-50"
        >
          <MagnifyingGlass weight="bold" className="h-5 w-5" />
          {t("submit")}
        </button>
      </form>

      {error ? (
        <p role="alert" className="mt-4 text-tasami-dark">
          {error}
        </p>
      ) : null}

      {result ? (
        <div className="mt-6" aria-live="polite">
          <p className="font-bold text-tasami-dark">
            {locale === "ar"
              ? result.service?.name_ar
              : result.service?.name_en || result.service?.name_ar}
          </p>
          <p className="text-sm text-tasami-gray">
            <span dir="ltr">#{result.orderNo}</span> · {dateFmt.format(new Date(result.createdAt))}
          </p>

          {result.step === "cancelled" ? (
            <p className="mt-4 rounded-xl bg-tasami-offwhite px-4 py-3 text-tasami-dark">
              {t("cancelled")}
            </p>
          ) : (
            <ol className="mt-5 space-y-0">
              {TRACK_STEPS.map((step, i) => {
                const done = i < activeIndex || (step === "done" && activeIndex === i);
                const current = i === activeIndex;
                return (
                  <li key={step} className="relative flex gap-3 pb-5 last:pb-0">
                    {i < TRACK_STEPS.length - 1 ? (
                      <span
                        aria-hidden
                        className={`absolute start-[15px] top-8 h-[calc(100%-2rem)] w-0.5 ${
                          i < activeIndex ? "bg-[#0F7A40]" : "bg-[rgba(26,53,80,0.12)]"
                        }`}
                      />
                    ) : null}
                    <span
                      className={`relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 ${
                        done
                          ? "border-[#0F7A40] bg-[#0F7A40] text-white"
                          : current
                            ? "border-[#006BDE] bg-white text-[#006BDE]"
                            : "border-[rgba(26,53,80,0.18)] bg-white text-tasami-gray"
                      }`}
                    >
                      {done ? <Check weight="bold" className="h-4 w-4" /> : <span className="text-sm font-bold">{i + 1}</span>}
                    </span>
                    <div className="pt-0.5">
                      <p className={`font-bold ${current || done ? "text-tasami-dark" : "text-tasami-gray"}`}>
                        {t(`steps.${step}`)}
                      </p>
                      {current ? (
                        <p className="text-sm text-tasami-gray">{t(`stepHints.${step}`)}</p>
                      ) : null}
                    </div>
                  </li>
                );
              })}
            </ol>
          )}

          {result.step === "done" ? (
            <ReviewForm
              key={result.orderNo}
              order={result.orderNo}
              alreadyReviewed={result.reviewed}
            />
          ) : null}
        </div>
      ) : null}
    </section>
  );
}
