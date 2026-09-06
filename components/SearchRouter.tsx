"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { MagnifyingGlass, ArrowRight, WhatsappLogo, WarningCircle } from "@phosphor-icons/react";
import { Link } from "@/navigation";
import { whatsappForService } from "@/lib/site";
import { whatsappPrefillFor } from "@/lib/whatsapp-templates";

type Hit = {
  id: string;
  kind: string;
  i18nKey: string;
  href: string;
  hubs: string[];
  platforms: string[];
  tier: string | null;
  score: number;
  strength: string;
  matchedOn: string[];
};

type SearchPayload = {
  query: string;
  ambiguityScore: number;
  needsClarification: boolean;
  clarifyingQuestion?: string;
  detectedHubs: string[];
  intents: string[];
  disambiguation?: { labelKey: string; hint: string; hubs: string[] }[];
  primary: Hit[];
  related: Hit[];
};

type Props = {
  initialQuery?: string;
  compact?: boolean;
  autoFocus?: boolean;
};

function labelForHit(
  hit: Hit,
  tGov: ReturnType<typeof useTranslations>,
  tTech: ReturnType<typeof useTranslations>,
  tHome: ReturnType<typeof useTranslations>
): string {
  try {
    if (hit.kind === "offering") return tGov(`offerings.${hit.i18nKey}.title`);
    if (hit.kind === "category") return tGov(`items.${hit.i18nKey}.title`);
    if (hit.kind === "tech") return tTech(`items.${hit.i18nKey}.title`);
    if (hit.kind === "pillar") return tHome(`core.${hit.i18nKey}.title`);
  } catch {
    /* fall through */
  }
  return hit.i18nKey;
}

function descForHit(
  hit: Hit,
  tGov: ReturnType<typeof useTranslations>,
  tTech: ReturnType<typeof useTranslations>,
  tHome: ReturnType<typeof useTranslations>
): string {
  try {
    if (hit.kind === "offering") return tGov(`offerings.${hit.i18nKey}.desc`);
    if (hit.kind === "category") return tGov(`items.${hit.i18nKey}.desc`);
    if (hit.kind === "tech") return tTech(`items.${hit.i18nKey}.desc`);
    if (hit.kind === "pillar") return tHome(`core.${hit.i18nKey}.desc`);
  } catch {
    /* fall through */
  }
  return "";
}

export default function SearchRouter({
  initialQuery = "",
  compact = false,
  autoFocus = false,
}: Props) {
  const t = useTranslations("search");
  const tGov = useTranslations("gov");
  const tTech = useTranslations("tech");
  const tHome = useTranslations("home");

  const [q, setQ] = useState(initialQuery);
  const [loading, setLoading] = useState(false);
  const [payload, setPayload] = useState<SearchPayload | null>(null);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const runSearch = useCallback(async (query: string) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(query)}&limit=8`);
      const data = await res.json();
      setSuggestions(data.suggestions || []);
      setPayload(data.result || null);
    } catch {
      setPayload(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (initialQuery.trim()) {
      void runSearch(initialQuery);
    } else {
      void fetch("/api/search")
        .then((r) => r.json())
        .then((d) => setSuggestions(d.suggestions || []))
        .catch(() => undefined);
    }
  }, [initialQuery, runSearch]);

  useEffect(() => {
    if (!q.trim()) {
      setPayload(null);
      return;
    }
    const id = window.setTimeout(() => void runSearch(q), 280);
    return () => window.clearTimeout(id);
  }, [q, runSearch]);

  const primary = payload?.primary || [];
  const related = payload?.related || [];

  const form = useMemo(
    () => (
      <form
        className={`flex w-full flex-col gap-3 sm:flex-row sm:items-stretch ${
          compact ? "" : ""
        }`}
        onSubmit={(e) => {
          e.preventDefault();
          void runSearch(q);
        }}
      >
        <label className="relative min-w-0 flex-1">
          <span className="sr-only">{t("title")}</span>
          <MagnifyingGlass
            weight="regular"
            className="pointer-events-none absolute top-1/2 start-3.5 h-5 w-5 -translate-y-1/2 text-tasami-gray"
          />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={t("placeholder")}
            autoFocus={autoFocus}
            className="w-full rounded-button border border-tasami-purple/10 bg-white py-3.5 pe-4 ps-11 text-sm text-tasami-dark shadow-soft outline-none ring-[#007AFF]/20 placeholder:text-tasami-gray/80 focus:ring-2"
          />
        </label>
        <button
          type="submit"
          className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-button bg-[#007AFF] px-6 text-sm font-semibold text-white active:opacity-90"
        >
          {t("submit")}
          <ArrowRight weight="bold" className="h-4 w-4 rtl:rotate-180" />
        </button>
      </form>
    ),
    [autoFocus, compact, q, runSearch, t]
  );

  return (
    <div className={compact ? "" : "space-y-8"}>
      {form}

      {!q.trim() && suggestions.length > 0 ? (
        <div className={compact ? "mt-4" : ""}>
          <p className="text-xs font-medium text-tasami-gray">{t("suggestions")}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {suggestions.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setQ(s)}
                className="rounded-full border border-tasami-purple/10 bg-white px-3 py-1.5 text-xs text-tasami-dark transition hover:border-[#007AFF]/40 hover:text-[#007AFF]"
              >
                {s}
              </button>
            ))}
          </div>
          {compact ? null : (
            <p className="mt-3 text-sm text-tasami-gray">{t("emptyHint")}</p>
          )}
        </div>
      ) : null}

      {loading ? (
        <p className="mt-4 text-sm text-tasami-gray">…</p>
      ) : null}

      {payload?.needsClarification && payload.clarifyingQuestion ? (
        <div className="mt-4 flex gap-3 rounded-card border border-amber-200/80 bg-amber-50/80 p-4">
          <WarningCircle weight="fill" className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
          <div>
            <p className="text-xs font-medium text-amber-800">{t("clarify")}</p>
            <p className="mt-1 text-sm text-tasami-dark">{payload.clarifyingQuestion}</p>
            {payload.disambiguation?.length ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {payload.disambiguation.map((d) => (
                  <button
                    key={d.labelKey}
                    type="button"
                    onClick={() => setQ(d.hint)}
                    className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-tasami-dark shadow-sm"
                  >
                    {t(d.labelKey as "disambiguate.transferSponsorship")}
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      ) : null}

      {q.trim() && !loading && primary.length === 0 ? (
        <p className="mt-4 text-sm text-tasami-gray">{t("noResults")}</p>
      ) : null}

      {primary.length > 0 ? (
        <section className={compact ? "mt-5" : ""}>
          <h2 className="text-sm font-medium text-tasami-dark">{t("results")}</h2>
          <ul className="mt-3 space-y-3">
            {primary.map((hit) => {
              const title = labelForHit(hit, tGov, tTech, tHome);
              const desc = descForHit(hit, tGov, tTech, tHome);
              const channel =
                hit.kind === "tech" || hit.id.startsWith("tech-") || hit.id === "pillar-tech"
                  ? ("tech" as const)
                  : ("government" as const);
              const wa = whatsappForService(
                channel,
                whatsappPrefillFor(channel, title)
              );
              return (
                <li
                  key={hit.id}
                  className="rounded-card border border-tasami-purple/8 bg-white/90 p-4 shadow-soft sm:p-5"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-[#007AFF]/10 px-2 py-0.5 text-[11px] font-medium text-[#007AFF]">
                          {t(`kind.${hit.kind}` as "kind.offering")}
                        </span>
                        <span className="rounded-full bg-tasami-offwhite px-2 py-0.5 text-[11px] text-tasami-gray">
                          {t(`strength.${hit.strength}` as "strength.direct")} ·{" "}
                          {t("matchScore")} {Math.round(hit.score)}%
                        </span>
                      </div>
                      <h3 className="mt-2 text-base font-semibold text-tasami-dark">
                        {title}
                      </h3>
                      {desc ? (
                        <p className="mt-1 text-sm leading-relaxed text-tasami-gray">
                          {desc}
                        </p>
                      ) : null}
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Link
                      href={hit.href as "/"}
                      className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-button bg-[#007AFF] px-4 text-sm font-semibold text-white"
                    >
                      {t("openService")}
                      <ArrowRight weight="bold" className="h-4 w-4 rtl:rotate-180" />
                    </Link>
                    <a
                      href={wa}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-button border border-[#128C4A]/25 bg-[#128C4A]/8 px-4 text-sm font-semibold text-[#0B6B38]"
                    >
                      <WhatsappLogo weight="fill" className="h-4 w-4" />
                      {t("whatsappCta")}
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}

      {related.length > 0 ? (
        <section className="mt-6">
          <h2 className="text-sm font-medium text-tasami-dark">{t("related")}</h2>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {related.map((hit) => (
              <li key={hit.id}>
                <Link
                  href={hit.href as "/"}
                  className="flex min-h-[48px] items-center justify-between gap-2 rounded-button border border-tasami-purple/8 bg-white px-4 py-3 text-sm text-tasami-dark transition hover:border-[#007AFF]/30"
                >
                  <span>{labelForHit(hit, tGov, tTech, tHome)}</span>
                  <ArrowRight weight="regular" className="h-4 w-4 shrink-0 text-tasami-gray rtl:rotate-180" />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
