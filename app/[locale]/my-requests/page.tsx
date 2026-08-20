"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import type { TaskStatus } from "@prisma/client";
import {
  StatusBadge,
  taskStatusClass,
  formatDate,
} from "@/components/admin/StatusBadge";
import { Link, useRouter } from "@/navigation";

type RequestRow = {
  id: string;
  status: TaskStatus;
  notes: string | null;
  created_at: string;
  service: { name_ar: string; name_en: string; slug: string } | null;
};

type MeUser = {
  id: string;
  name: string;
  phone: string;
  role?: string;
} | null;

export default function MyRequestsPage() {
  const t = useTranslations("request");
  const ta = useTranslations("admin");
  const tAuth = useTranslations("auth");
  const locale = useLocale();
  const router = useRouter();
  const [user, setUser] = useState<MeUser>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [rows, setRows] = useState<RequestRow[]>([]);
  const [name, setName] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function loadMine() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/requests");
      const data = await res.json();
      if (res.status === 401) {
        setUser(null);
        return;
      }
      if (!res.ok) {
        setError(data.error || t("error"));
        setRows([]);
        return;
      }
      setName(data.customer?.name || null);
      setRows(data.requests || []);
    } catch {
      setError(t("error"));
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetch("/api/auth/me")
      .then((r) => r.json())
      .then((data) => {
        setUser(data?.user || null);
        setAuthChecked(true);
        if (data?.user) loadMine();
      })
      .catch(() => {
        setUser(null);
        setAuthChecked(true);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    setUser(null);
    setRows([]);
    router.push("/login");
    router.refresh();
  }

  if (!authChecked) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-sm text-tasami-gray">{tAuth("loading")}</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen">
        <div className="mx-auto max-w-md px-5 py-20 text-center">
          <h1 className="font-display text-2xl text-tasami-dark">
            {t("myTitle")}
          </h1>
          <span className="highlight-line mx-auto" />
          <p className="mt-4 text-sm text-tasami-gray">{t("loginRequired")}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link href="/login" className="btn-secondary text-sm">
              {tAuth("loginCta")}
            </Link>
            <Link href="/register" className="btn-primary text-sm">
              {tAuth("registerCta")}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 lg:py-20">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/"
            className="inline-flex text-sm font-medium text-tasami-gray hover:text-tasami-pink"
          >
            ← {t("backHome")}
          </Link>
          <button
            type="button"
            onClick={logout}
            className="text-sm font-medium text-tasami-gray hover:text-tasami-pink"
          >
            {tAuth("logout")}
          </button>
        </div>

        <header className="mb-10">
          <h1 className="font-display text-2xl text-tasami-dark sm:text-3xl">
            {t("myTitle")}
          </h1>
          <span className="highlight-line" />
          <p className="mt-4 text-sm leading-relaxed text-tasami-gray">
            {t("mySubtitleLoggedIn")}
          </p>
        </header>

        {loading && (
          <p className="mb-4 text-sm text-tasami-gray">{tAuth("loading")}</p>
        )}
        {error && (
          <p className="mb-4 text-sm text-tasami-dark/80">{error}</p>
        )}

        {!loading && !error && (
          <div className="space-y-4">
            {(name || user) && (
              <p className="text-sm text-tasami-gray">
                {t("hello")}{" "}
                <span className="font-medium text-tasami-dark">
                  {name || user.name}
                </span>
              </p>
            )}
            {rows.length === 0 ? (
              <p className="card-soft px-5 py-10 text-center text-sm text-tasami-gray">
                {t("emptyMy")}
              </p>
            ) : (
              rows.map((row) => (
                <article key={row.id} className="card-premium p-5">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h2 className="text-sm font-medium text-tasami-dark">
                        {locale === "ar"
                          ? row.service?.name_ar
                          : row.service?.name_en || row.service?.name_ar}
                      </h2>
                      <p className="mt-1 font-mono text-[11px] text-tasami-gray">
                        {t("refLabel")}: {row.id.slice(0, 10).toUpperCase()}
                      </p>
                    </div>
                    <StatusBadge
                      label={ta(`status.${row.status}`)}
                      tone={taskStatusClass(row.status)}
                    />
                  </div>
                  <p className="mt-3 text-xs text-tasami-gray">
                    {formatDate(row.created_at, locale)}
                  </p>
                  {row.notes && (
                    <p className="mt-2 whitespace-pre-wrap text-sm text-tasami-dark">
                      {row.notes}
                    </p>
                  )}
                </article>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
