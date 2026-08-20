"use client";

import { useEffect, useState, useTransition } from "react";
import { useTranslations } from "next-intl";
import type { TaskStatus } from "@prisma/client";
import {
  StatusBadge,
  taskStatusClass,
  formatDate,
} from "@/components/admin/StatusBadge";
import { Link } from "@/navigation";

type RequestRow = {
  id: string;
  status: TaskStatus;
  notes: string | null;
  assigned_to: string | null;
  created_at: string;
  customer: { id: string; name: string; phone: string; language: string };
  service: {
    name_ar: string;
    name_en: string;
    slug: string;
    category: string;
  } | null;
};

const STATUSES: TaskStatus[] = [
  "PENDING",
  "IN_PROGRESS",
  "WAITING",
  "COMPLETED",
  "DONE",
  "CANCELLED",
];

export default function AdminRequestsClient({ locale }: { locale: string }) {
  const t = useTranslations("admin");
  const tr = useTranslations("request");
  const [rows, setRows] = useState<RequestRow[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  function load() {
    startTransition(async () => {
      try {
        const res = await fetch("/api/requests?admin=1");
        const data = await res.json();
        if (!res.ok) {
          setError(data.error || "Error");
          return;
        }
        setRows(data.requests || []);
        setError(null);
      } catch {
        setError(tr("error"));
      }
    });
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function updateStatus(id: string, status: TaskStatus) {
    const res = await fetch("/api/requests", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ requestId: id, status }),
    });
    if (res.ok) load();
  }

  return (
    <div className="space-y-8">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl text-tasami-dark sm:text-3xl">
            {t("requests.title")}
          </h1>
          <p className="mt-2 text-sm text-tasami-gray">{t("requests.subtitle")}</p>
        </div>
        <button
          type="button"
          onClick={load}
          disabled={pending}
          className="rounded-full bg-tasami-pink px-4 py-2.5 text-sm font-medium text-white shadow-soft disabled:opacity-50"
        >
          {t("requests.refresh")}
        </button>
      </header>

      {error && (
        <p className="rounded-card bg-tasami-gold/20 px-4 py-3 text-sm text-tasami-purple">
          {error}
        </p>
      )}

      <div className="card-soft overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] text-start text-sm">
            <thead>
              <tr className="border-b border-tasami-purple/5 text-[11px] uppercase tracking-wide text-tasami-gray">
                <th className="px-5 py-3.5 font-medium">{t("requests.service")}</th>
                <th className="px-5 py-3.5 font-medium">{t("requests.customer")}</th>
                <th className="px-5 py-3.5 font-medium">{t("requests.phone")}</th>
                <th className="px-5 py-3.5 font-medium">{t("requests.status")}</th>
                <th className="px-5 py-3.5 font-medium">{t("requests.date")}</th>
                <th className="px-5 py-3.5 font-medium">{t("requests.notes")}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-tasami-purple/5">
              {rows.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-5 py-14 text-center text-tasami-gray">
                    {t("requests.empty")}
                  </td>
                </tr>
              ) : (
                rows.map((row) => (
                  <tr key={row.id} className="hover:bg-white">
                    <td className="px-5 py-4 font-medium text-tasami-purple">
                      {locale === "ar"
                        ? row.service?.name_ar
                        : row.service?.name_en || row.service?.name_ar}
                    </td>
                    <td className="px-5 py-4">
                      <Link
                        href={`/admin/customers/${row.customer.id}`}
                        className="text-tasami-purple hover:text-tasami-pink"
                      >
                        {row.customer.name}
                      </Link>
                    </td>
                    <td className="px-5 py-4 tabular-nums text-tasami-dark" dir="ltr">
                      {row.customer.phone}
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex flex-col gap-2">
                        <StatusBadge
                          label={t(`status.${row.status}`)}
                          tone={taskStatusClass(row.status)}
                        />
                        <select
                          className="rounded-button border-0 bg-tasami-offwhite px-2 py-1.5 text-xs text-tasami-purple shadow-soft"
                          value={row.status}
                          onChange={(e) =>
                            updateStatus(row.id, e.target.value as TaskStatus)
                          }
                        >
                          {STATUSES.map((s) => (
                            <option key={s} value={s}>
                              {t(`status.${s}`)}
                            </option>
                          ))}
                        </select>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-5 py-4 text-xs text-tasami-gray">
                      {formatDate(row.created_at, locale)}
                    </td>
                    <td className="max-w-xs px-5 py-4">
                      <p className="line-clamp-3 whitespace-pre-wrap text-xs text-tasami-gray">
                        {row.notes || "—"}
                      </p>
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
