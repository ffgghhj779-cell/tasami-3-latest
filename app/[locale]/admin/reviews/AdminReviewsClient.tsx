"use client";

import { useEffect, useMemo, useState, useTransition } from "react";
import { useTranslations } from "next-intl";
import { Copy, LinkSimple, Star, WhatsappLogo } from "@phosphor-icons/react";
import { formatDate } from "@/components/admin/StatusBadge";
import { Link } from "@/navigation";

type State = "pending" | "approved" | "rejected";

type ReviewRow = {
  id: string;
  state: State;
  rating: number;
  text: string;
  name: string;
  city: string;
  service: string | null;
  source: "order" | "invite";
  orderNo: string | null;
  createdAt: string;
  customer: { id: string; name: string; phone: string } | null;
};

const TABS: Array<State | "all"> = ["pending", "approved", "rejected", "all"];

const STATE_TONE: Record<State, string> = {
  pending: "bg-amber-100 text-amber-900",
  approved: "bg-emerald-100 text-emerald-900",
  rejected: "bg-rose-100 text-rose-900",
};

export default function AdminReviewsClient({ locale }: { locale: string }) {
  const t = useTranslations("admin.reviews");
  const [rows, setRows] = useState<ReviewRow[]>([]);
  const [tab, setTab] = useState<State | "all">("pending");
  const [error, setError] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [, startTransition] = useTransition();
  const [invite, setInvite] = useState<{ url: string; expiresAt: string } | null>(null);
  const [inviteBusy, setInviteBusy] = useState(false);
  const [copied, setCopied] = useState(false);

  function load() {
    startTransition(async () => {
      try {
        const res = await fetch("/api/admin/reviews");
        const data = await res.json();
        if (!res.ok) {
          setError(data.error || t("error"));
          return;
        }
        const list: ReviewRow[] = data.reviews || [];
        setRows(list);
        if (!loaded && list.length > 0 && !list.some((r) => r.state === "pending")) setTab("all");
        setError(null);
      } catch {
        setError(t("error"));
      } finally {
        setLoaded(true);
      }
    });
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const counts = useMemo(() => {
    const c = { pending: 0, approved: 0, rejected: 0, all: rows.length };
    rows.forEach((r) => (c[r.state] += 1));
    return c;
  }, [rows]);

  const visible = tab === "all" ? rows : rows.filter((r) => r.state === tab);

  async function setState(id: string, state: State) {
    const res = await fetch("/api/admin/reviews", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, state }),
    });
    if (res.ok) load();
    else setError(t("error"));
  }

  async function remove(id: string) {
    if (!confirm(t("confirmDelete"))) return;
    const res = await fetch(`/api/admin/reviews?id=${encodeURIComponent(id)}`, { method: "DELETE" });
    if (res.ok) load();
    else setError(t("error"));
  }

  async function createInvite() {
    setInviteBusy(true);
    setCopied(false);
    try {
      const res = await fetch("/api/admin/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ locale: "ar" }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error();
      setInvite(data);
    } catch {
      setError(t("error"));
    } finally {
      setInviteBusy(false);
    }
  }

  async function copyInvite() {
    if (!invite) return;
    try {
      await navigator.clipboard.writeText(invite.url);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  const waShare = invite
    ? `https://wa.me/?text=${encodeURIComponent(`${t("inviteMessage")}\n${invite.url}`)}`
    : "#";

  return (
    <div className="space-y-8">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl text-tasami-dark sm:text-3xl">{t("title")}</h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-tasami-gray">{t("subtitle")}</p>
        </div>
        <button type="button" onClick={load} className="btn-secondary text-sm">
          {t("refresh")}
        </button>
      </header>

      <section className="card-soft space-y-4 p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-sm font-bold text-tasami-dark">{t("inviteTitle")}</h2>
            <p className="mt-1 text-xs leading-relaxed text-tasami-gray">{t("inviteHint")}</p>
          </div>
          <button
            type="button"
            onClick={createInvite}
            disabled={inviteBusy}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-button bg-[#0057B8] px-4 text-sm font-bold text-white disabled:opacity-60"
          >
            <LinkSimple weight="bold" className="h-4 w-4" />
            {t("inviteCreate")}
          </button>
        </div>
        {invite ? (
          <div className="space-y-3 rounded-xl bg-[#EEF7FF] p-4">
            <p dir="ltr" className="break-all font-mono text-xs text-tasami-dark">
              {invite.url}
            </p>
            <p className="text-xs text-tasami-gray">
              {t("inviteExpires", { date: formatDate(invite.expiresAt, locale) })}
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={copyInvite}
                className="inline-flex min-h-[40px] items-center gap-2 rounded-button border border-[#0057B8]/30 bg-white px-3 text-sm font-medium text-[#0057B8]"
              >
                <Copy weight="bold" className="h-4 w-4" />
                {copied ? t("copied") : t("copy")}
              </button>
              <a
                href={waShare}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[40px] items-center gap-2 rounded-button bg-[#128C7E] px-3 text-sm font-bold text-white"
              >
                <WhatsappLogo weight="fill" className="h-4 w-4" />
                {t("shareWa")}
              </a>
            </div>
          </div>
        ) : null}
      </section>

      <div className="flex flex-wrap gap-2" role="tablist">
        {TABS.map((key) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={tab === key}
            onClick={() => setTab(key)}
            className={`min-h-[40px] rounded-full px-4 text-sm font-medium transition-colors ${
              tab === key ? "bg-[#0057B8] text-white" : "bg-white text-tasami-dark hover:bg-[#dcebff]"
            }`}
          >
            {t(`tabs.${key}`)} <span className="tabular-nums opacity-75">({counts[key]})</span>
          </button>
        ))}
      </div>

      {error ? <p className="text-sm text-rose-700">{error}</p> : null}

      {loaded && visible.length === 0 ? (
        <p className="card-soft px-6 py-10 text-center text-sm text-tasami-gray">{t("empty")}</p>
      ) : (
        <ul className="grid gap-4 lg:grid-cols-2">
          {visible.map((r) => (
            <li key={r.id} className="card-soft flex flex-col gap-3 p-5">
              <div className="flex items-start justify-between gap-3">
                <div className="flex gap-0.5" role="img" aria-label={t("stars", { n: r.rating })}>
                  {[1, 2, 3, 4, 5].map((n) => (
                    <Star
                      key={n}
                      weight={n <= r.rating ? "fill" : "regular"}
                      className={`h-5 w-5 ${n <= r.rating ? "text-[#c8a84b]" : "text-tasami-gray/40"}`}
                    />
                  ))}
                </div>
                <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${STATE_TONE[r.state]}`}>
                  {t(`tabs.${r.state}`)}
                </span>
              </div>
              <p className="whitespace-pre-wrap text-sm leading-relaxed text-tasami-dark">{r.text}</p>
              <div className="text-xs leading-relaxed text-tasami-gray">
                <p>
                  <span className="font-medium text-tasami-dark">{r.name || t("anonymous")}</span>
                  {r.city ? ` · ${r.city}` : ""}
                  {r.service ? ` · ${r.service}` : ""}
                </p>
                <p>
                  {r.source === "order" ? (
                    <>
                      {t("sourceOrder")} <span dir="ltr">#{r.orderNo}</span>
                      {r.customer ? (
                        <>
                          {" · "}
                          <Link href={`/admin/customers/${r.customer.id}`} className="text-[#0057B8] hover:underline">
                            {r.customer.name}
                          </Link>
                        </>
                      ) : null}
                    </>
                  ) : (
                    t("sourceInvite")
                  )}
                  {" · "}
                  {formatDate(r.createdAt, locale)}
                </p>
              </div>
              <div className="mt-auto flex flex-wrap gap-2 border-t border-tasami-purple/5 pt-3">
                {r.state !== "approved" ? (
                  <button
                    type="button"
                    onClick={() => setState(r.id, "approved")}
                    className="min-h-[40px] rounded-button bg-emerald-700 px-3 text-sm font-bold text-white"
                  >
                    {t("approve")}
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setState(r.id, "pending")}
                    className="min-h-[40px] rounded-button border border-tasami-gray/30 bg-white px-3 text-sm font-medium text-tasami-dark"
                  >
                    {t("unpublish")}
                  </button>
                )}
                {r.state !== "rejected" ? (
                  <button
                    type="button"
                    onClick={() => setState(r.id, "rejected")}
                    className="min-h-[40px] rounded-button border border-rose-300 bg-white px-3 text-sm font-medium text-rose-800"
                  >
                    {t("reject")}
                  </button>
                ) : null}
                <button
                  type="button"
                  onClick={() => remove(r.id)}
                  className="min-h-[40px] rounded-button px-3 text-sm font-medium text-tasami-gray hover:text-rose-800"
                >
                  {t("delete")}
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
