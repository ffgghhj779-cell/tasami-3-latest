"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { formatDate } from "@/components/admin/StatusBadge";
import { Link } from "@/navigation";

type ConversationRow = {
  id: string;
  message: string;
  channel: string;
  sender: string;
  created_at: string;
  customer: { id: string; name: string; phone: string };
};

type CustomerOption = { id: string; name: string; phone: string };

type Props = {
  locale: string;
  initialRows: ConversationRow[];
  customers: CustomerOption[];
  dbOk: boolean;
  dbHint: string;
};

export default function AdminConversationsClient({
  locale,
  initialRows,
  customers,
  dbOk,
  dbHint,
}: Props) {
  const t = useTranslations("admin");
  const router = useRouter();
  const [customerId, setCustomerId] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function sendReply(e: React.FormEvent) {
    e.preventDefault();
    if (!customerId || !message.trim()) {
      setError(t("conversations.replyRequired"));
      return;
    }
    setSending(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/conversations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ customerId, message: message.trim() }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || t("conversations.replyError"));
        return;
      }
      setMessage("");
      router.refresh();
    } catch {
      setError(t("conversations.replyError"));
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="space-y-8">
      <header>
        <h1 className="font-display text-2xl text-tasami-purple sm:text-3xl">
          {t("conversations.title")}
        </h1>
        <p className="mt-2 text-sm text-tasami-gray">
          {t("conversations.subtitle")}
        </p>
        {!dbOk && (
          <p className="mt-4 rounded-card bg-tasami-gold/20 px-4 py-3 text-sm text-tasami-purple shadow-soft">
            {dbHint}
          </p>
        )}
      </header>

      <form
        onSubmit={sendReply}
        className="card-soft grid grid-cols-1 gap-4 p-6 sm:grid-cols-[1fr,2fr,auto] sm:items-end sm:p-8"
      >
        <h2 className="col-span-full text-sm font-medium text-tasami-purple">
          {t("conversations.replyTitle")}
        </h2>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-tasami-gray">
            {t("conversations.replyCustomer")}
          </label>
          <select
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
            className="rounded-button border-0 bg-tasami-offwhite px-3 py-2.5 text-sm text-tasami-dark shadow-soft"
          >
            <option value="">{t("conversations.replySelect")}</option>
            {customers.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name} — {c.phone}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-tasami-gray">
            {t("conversations.replyMessage")}
          </label>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="rounded-button border-0 bg-tasami-offwhite px-3 py-2.5 text-sm text-tasami-dark shadow-soft focus:outline-none focus:ring-2 focus:ring-tasami-pink/40"
            placeholder={t("conversations.replyMessagePh")}
          />
        </div>

        <button
          type="submit"
          disabled={sending}
          className="rounded-full bg-tasami-pink px-5 py-2.5 text-sm font-medium text-white shadow-soft disabled:opacity-50"
        >
          {sending ? t("conversations.replySending") : t("conversations.replySend")}
        </button>

        {error && (
          <p className="col-span-full text-sm text-tasami-pink">{error}</p>
        )}
      </form>

      <div className="card-soft overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-start text-sm">
            <thead>
              <tr className="border-b border-tasami-purple/5 text-[11px] uppercase tracking-wide text-tasami-gray">
                <th className="px-5 py-3.5 font-medium">
                  {t("conversations.customer")}
                </th>
                <th className="px-5 py-3.5 font-medium">
                  {t("conversations.channel")}
                </th>
                <th className="px-5 py-3.5 font-medium">
                  {t("conversations.sender")}
                </th>
                <th className="px-5 py-3.5 font-medium">
                  {t("conversations.message")}
                </th>
                <th className="px-5 py-3.5 font-medium">
                  {t("conversations.time")}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-tasami-purple/5">
              {initialRows.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-5 py-14 text-center text-tasami-gray"
                  >
                    {t("conversations.empty")}
                  </td>
                </tr>
              ) : (
                initialRows.map((row) => (
                  <tr key={row.id} className="hover:bg-white">
                    <td className="px-5 py-4">
                      <button
                        type="button"
                        onClick={() => setCustomerId(row.customer.id)}
                        className="font-medium text-tasami-purple hover:text-tasami-pink"
                      >
                        {row.customer.name}
                      </button>
                      <Link
                        href={`/admin/customers/${row.customer.id}`}
                        className="ms-2 text-[11px] text-tasami-gray hover:text-tasami-pink"
                      >
                        {t("conversations.viewProfile")}
                      </Link>
                    </td>
                    <td className="px-5 py-4 text-xs text-tasami-gray">
                      {row.channel}
                    </td>
                    <td className="px-5 py-4 text-xs text-tasami-gray">
                      {t(`sender.${row.sender}`)}
                    </td>
                    <td className="max-w-md px-5 py-4">
                      <p className="line-clamp-2 text-tasami-dark">{row.message}</p>
                    </td>
                    <td className="whitespace-nowrap px-5 py-4 text-xs text-tasami-gray">
                      {formatDate(row.created_at, locale)}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
