"use client";

import { useCallback, useEffect, useState, useTransition, Fragment } from "react";
import { useTranslations } from "next-intl";
import {
  WhatsappLogo,
  Package,
  CalendarCheck,
  ChartLineUp,
  PauseCircle,
  PaperPlaneTilt,
  ArrowsClockwise,
  Phone,
  User,
  ChatText,
} from "@phosphor-icons/react";
import { formatDate } from "@/components/admin/StatusBadge";

type OrderRow = {
  id: number;
  phone: string;
  customer_name: string | null;
  customer_message: string | null;
  sara_reply: string | null;
  status: string;
  source: string | null;
  created_at: string;
};

type PauseRow = {
  phone: string;
  pause_until: string;
  reason: string | null;
};

type Stats = {
  ok: boolean;
  ordersToday: number;
  ordersWeek: number;
  ordersTotal: number;
  botPaused: number;
};

const ORDER_STATUSES = [
  "received",
  "processing",
  "shipped",
  "delivered",
  "cancelled",
] as const;

function formatPhone(phone: string) {
  const d = phone.replace(/\D/g, "");
  if (d.startsWith("966")) return `+${d}`;
  if (d.startsWith("0")) return `+966${d.slice(1)}`;
  if (d.startsWith("5")) return `+966${d}`;
  return `+${d}`;
}

export default function AdminWhatsAppClient({ locale }: { locale: string }) {
  const t = useTranslations("admin.whatsapp");
  const [stats, setStats] = useState<Stats | null>(null);
  const [orders, setOrders] = useState<OrderRow[]>([]);
  const [pauses, setPauses] = useState<PauseRow[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  const [sendPhone, setSendPhone] = useState("");
  const [sendMessage, setSendMessage] = useState("");
  const [sendStatus, setSendStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [sendError, setSendError] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const load = useCallback(() => {
    startTransition(async () => {
      try {
        const [statsRes, ordersRes] = await Promise.all([
          fetch("/api/admin/whatsapp/stats"),
          fetch("/api/admin/whatsapp/orders"),
        ]);
        const statsData = await statsRes.json();
        const ordersData = await ordersRes.json();
        if (!statsRes.ok || !ordersRes.ok) {
          setError(t("dbError"));
        } else {
          setError(null);
        }
        setStats(statsData);
        setOrders(ordersData.orders || []);
        setPauses(ordersData.pauses || []);
      } catch {
        setError(t("dbError"));
      }
    });
  }, [t]);

  useEffect(() => {
    load();
  }, [load]);

  async function updateStatus(id: number, status: string) {
    const res = await fetch("/api/admin/whatsapp/orders", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
    if (res.ok) load();
  }

  async function handleSend(e: React.FormEvent) {
    e.preventDefault();
    const phone = sendPhone.replace(/\D/g, "").trim();
    const message = sendMessage.trim();
    if (!phone || !message) return;

    setSendStatus("sending");
    setSendError(null);
    try {
      const res = await fetch("/api/admin/whatsapp/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, message }),
      });
      const data = await res.json();
      if (!res.ok) {
        setSendStatus("err");
        setSendError(data.error || t("sendError"));
        return;
      }
      setSendStatus("ok");
      setSendMessage("");
      setTimeout(() => setSendStatus("idle"), 3000);
    } catch {
      setSendStatus("err");
      setSendError(t("sendError"));
    }
  }

  function fillPhoneFromOrder(phone: string) {
    setSendPhone(formatPhone(phone));
  }

  const statCards = [
    {
      key: "ordersToday",
      value: stats?.ordersToday ?? "—",
      icon: Package,
      color: "from-[#25D366]/15 to-[#25D366]/5",
      iconColor: "text-[#128C7E]",
    },
    {
      key: "ordersWeek",
      value: stats?.ordersWeek ?? "—",
      icon: CalendarCheck,
      color: "from-tasami-pink/15 to-tasami-pink/5",
      iconColor: "text-tasami-pink",
    },
    {
      key: "ordersTotal",
      value: stats?.ordersTotal ?? "—",
      icon: ChartLineUp,
      color: "from-primary/15 to-primary/5",
      iconColor: "text-primary",
    },
    {
      key: "botPaused",
      value: stats?.botPaused ?? "—",
      icon: PauseCircle,
      color: "from-tasami-gold/25 to-tasami-gold/5",
      iconColor: "text-tasami-purple",
    },
  ] as const;

  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#075E54] via-[#128C7E] to-[#25D366] p-6 text-white shadow-lg sm:p-8">
        <div className="absolute -end-8 -top-8 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -bottom-12 -start-8 h-48 w-48 rounded-full bg-white/5 blur-3xl" />
        <div className="relative flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
              <WhatsappLogo weight="fill" className="h-8 w-8 text-white" />
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="font-display text-2xl sm:text-3xl">{t("title")}</h1>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-2.5 py-0.5 text-[11px] font-medium backdrop-blur">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#7FFFAB]" />
                  {t("live")}
                </span>
              </div>
              <p className="mt-2 max-w-xl text-sm text-white/80">{t("subtitle")}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={load}
            disabled={pending}
            className="flex min-h-[44px] items-center gap-2 rounded-full bg-white/15 px-4 py-2.5 text-sm font-medium backdrop-blur transition hover:bg-white/25 disabled:opacity-50"
          >
            <ArrowsClockwise
              weight="bold"
              className={`h-4 w-4 ${pending ? "animate-spin" : ""}`}
            />
            {t("refresh")}
          </button>
        </div>
      </div>

      {error && (
        <p className="rounded-card bg-tasami-gold/20 px-4 py-3 text-sm text-tasami-purple">
          {error}
        </p>
      )}

      {/* KPI cards */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {statCards.map(({ key, value, icon: Icon, color, iconColor }) => (
          <div
            key={key}
            className={`card-soft relative overflow-hidden bg-gradient-to-br ${color} p-5`}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-medium text-tasami-gray">{t(key)}</p>
                <p className="mt-1 text-3xl font-semibold tabular-nums text-tasami-purple">
                  {value}
                </p>
              </div>
              <span className={`rounded-xl bg-white/70 p-2.5 shadow-soft ${iconColor}`}>
                <Icon weight="duotone" className="h-5 w-5" />
              </span>
            </div>
          </div>
        ))}
      </section>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        {/* Orders table */}
        <div className="card-soft overflow-hidden xl:col-span-2">
          <div className="flex items-center justify-between border-b border-tasami-purple/5 px-5 py-4 sm:px-6">
            <h2 className="text-sm font-semibold text-tasami-purple">{t("ordersTitle")}</h2>
            <span className="rounded-full bg-tasami-purple/5 px-2.5 py-0.5 text-[11px] text-tasami-gray">
              {orders.length} {t("ordersCount")}
            </span>
          </div>

          {orders.length === 0 ? (
            <p className="px-6 py-14 text-center text-sm text-tasami-gray">{t("emptyOrders")}</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-start text-sm">
                <thead>
                  <tr className="border-b border-tasami-purple/5 bg-tasami-purple/[0.02] text-[11px] uppercase tracking-wide text-tasami-gray">
                    <th className="px-4 py-3 font-medium sm:px-6">{t("colCustomer")}</th>
                    <th className="px-4 py-3 font-medium">{t("colPhone")}</th>
                    <th className="px-4 py-3 font-medium">{t("colStatus")}</th>
                    <th className="px-4 py-3 font-medium">{t("colDate")}</th>
                    <th className="px-4 py-3 font-medium">{t("colActions")}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-tasami-purple/5">
                  {orders.map((order) => (
                    <Fragment key={order.id}>
                      <tr className="transition-colors hover:bg-tasami-purple/[0.02]">
                        <td className="px-4 py-3.5 sm:px-6">
                          <div className="flex items-center gap-2">
                            <User weight="duotone" className="h-4 w-4 shrink-0 text-tasami-gray" />
                            <span className="font-medium text-tasami-purple">
                              {order.customer_name || t("unknownCustomer")}
                            </span>
                          </div>
                          {order.customer_message && (
                            <p className="mt-0.5 line-clamp-1 text-xs text-tasami-gray">
                              {order.customer_message}
                            </p>
                          )}
                        </td>
                        <td className="px-4 py-3.5 font-mono text-xs text-tasami-gray">
                          {formatPhone(order.phone)}
                        </td>
                        <td className="px-4 py-3.5">
                          <select
                            value={order.status}
                            onChange={(e) => updateStatus(order.id, e.target.value)}
                            className="rounded-lg border border-tasami-purple/10 bg-white px-2 py-1.5 text-xs text-tasami-purple outline-none focus:border-tasami-pink"
                          >
                            {ORDER_STATUSES.map((s) => (
                              <option key={s} value={s}>
                                {t(`orderStatus.${s}`)}
                              </option>
                            ))}
                          </select>
                        </td>
                        <td className="px-4 py-3.5 text-xs text-tasami-gray">
                          {formatDate(order.created_at, locale)}
                        </td>
                        <td className="px-4 py-3.5">
                          <div className="flex gap-1">
                            <button
                              type="button"
                              onClick={() =>
                                setExpandedId(expandedId === order.id ? null : order.id)
                              }
                              className="rounded-lg px-2 py-1 text-xs text-tasami-pink hover:bg-tasami-pink/10"
                            >
                              {expandedId === order.id ? t("hide") : t("details")}
                            </button>
                            <button
                              type="button"
                              onClick={() => fillPhoneFromOrder(order.phone)}
                              className="rounded-lg px-2 py-1 text-xs text-primary hover:bg-primary/10"
                            >
                              {t("reply")}
                            </button>
                          </div>
                        </td>
                      </tr>
                      {expandedId === order.id && (
                        <tr className="bg-tasami-purple/[0.02]">
                          <td colSpan={5} className="px-4 py-4 sm:px-6">
                            <div className="grid gap-3 sm:grid-cols-2">
                              <div className="rounded-xl bg-white p-4 shadow-soft">
                                <p className="mb-2 flex items-center gap-1.5 text-xs font-medium text-tasami-purple">
                                  <ChatText className="h-3.5 w-3.5" />
                                  {t("customerMessage")}
                                </p>
                                <p className="text-sm leading-relaxed text-tasami-gray">
                                  {order.customer_message || "—"}
                                </p>
                              </div>
                              <div className="rounded-xl bg-white p-4 shadow-soft">
                                <p className="mb-2 flex items-center gap-1.5 text-xs font-medium text-[#128C7E]">
                                  <WhatsappLogo className="h-3.5 w-3.5" />
                                  {t("saraReply")}
                                </p>
                                <p className="text-sm leading-relaxed text-tasami-gray">
                                  {order.sara_reply || "—"}
                                </p>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Sidebar: send + pauses */}
        <div className="space-y-6">
          <form onSubmit={handleSend} className="card-soft p-5 sm:p-6">
            <h2 className="flex items-center gap-2 text-sm font-semibold text-tasami-purple">
              <PaperPlaneTilt weight="duotone" className="h-4 w-4 text-tasami-pink" />
              {t("sendTitle")}
            </h2>
            <p className="mt-1 text-xs text-tasami-gray">{t("sendSubtitle")}</p>

            <label className="mt-4 block text-xs font-medium text-tasami-purple">
              {t("sendPhone")}
            </label>
            <div className="relative mt-1.5">
              <Phone className="absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-tasami-gray" />
              <input
                type="tel"
                value={sendPhone}
                onChange={(e) => setSendPhone(e.target.value)}
                placeholder={t("sendPhonePh")}
                className="w-full rounded-xl border border-tasami-purple/10 bg-white py-2.5 ps-9 pe-3 text-sm outline-none focus:border-tasami-pink"
              />
            </div>

            <label className="mt-3 block text-xs font-medium text-tasami-purple">
              {t("sendMessage")}
            </label>
            <textarea
              value={sendMessage}
              onChange={(e) => setSendMessage(e.target.value)}
              rows={4}
              placeholder={t("sendMessagePh")}
              className="mt-1.5 w-full resize-none rounded-xl border border-tasami-purple/10 bg-white px-3 py-2.5 text-sm outline-none focus:border-tasami-pink"
            />

            {sendError && (
              <p className="mt-2 text-xs text-red-600">{sendError}</p>
            )}
            {sendStatus === "ok" && (
              <p className="mt-2 text-xs text-[#128C7E]">{t("sendSuccess")}</p>
            )}

            <button
              type="submit"
              disabled={sendStatus === "sending" || !sendPhone.trim() || !sendMessage.trim()}
              className="mt-4 flex w-full min-h-[44px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#128C7E] to-[#25D366] text-sm font-medium text-white shadow-soft disabled:opacity-50"
            >
              <PaperPlaneTilt weight="bold" className="h-4 w-4" />
              {sendStatus === "sending" ? t("sending") : t("sendBtn")}
            </button>
          </form>

          <div className="card-soft overflow-hidden">
            <div className="border-b border-tasami-purple/5 px-5 py-4">
              <h2 className="flex items-center gap-2 text-sm font-semibold text-tasami-purple">
                <PauseCircle weight="duotone" className="h-4 w-4 text-tasami-gold" />
                {t("pausesTitle")}
              </h2>
              <p className="mt-0.5 text-xs text-tasami-gray">{t("pausesSubtitle")}</p>
            </div>
            {pauses.length === 0 ? (
              <p className="px-5 py-8 text-center text-xs text-tasami-gray">{t("emptyPauses")}</p>
            ) : (
              <ul className="divide-y divide-tasami-purple/5">
                {pauses.map((p) => (
                  <li key={p.phone} className="px-5 py-3.5">
                    <p className="font-mono text-xs text-tasami-purple">
                      {formatPhone(p.phone)}
                    </p>
                    <p className="mt-0.5 text-[11px] text-tasami-gray">
                      {t("pauseUntil")} {formatDate(p.pause_until, locale)}
                    </p>
                    {p.reason && (
                      <p className="mt-0.5 text-[11px] text-tasami-gray">{p.reason}</p>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
