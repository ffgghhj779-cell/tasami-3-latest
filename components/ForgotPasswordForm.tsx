"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/navigation";

export default function ForgotPasswordForm() {
  const t = useTranslations("auth");
  const locale = useLocale();
  const [identifier, setIdentifier] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const value = identifier.trim();
    const isEmail = value.includes("@");

    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          [isEmail ? "email" : "phone"]: value,
          locale,
        }),
      });
      if (!res.ok) {
        setError(t("error"));
        return;
      }
      setDone(true);
    } catch {
      setError(t("error"));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="surface-dotted min-h-screen">
      <div className="mx-auto flex max-w-md flex-col px-5 py-14 sm:px-8 lg:py-20">
        <Link
          href="/login"
          className="mb-8 text-sm font-medium text-tasami-gray hover:text-tasami-pink"
        >
          ← {t("loginLink")}
        </Link>

        <header className="mb-8">
          <h1 className="font-display text-2xl text-tasami-purple sm:text-3xl">
            {t("forgotTitle")}
          </h1>
          <span className="highlight-line" />
          <p className="mt-4 text-sm leading-relaxed text-tasami-gray">
            {t("forgotSubtitle")}
          </p>
        </header>

        {done ? (
          <div className="card-premium space-y-4 p-6 text-center">
            <p className="text-sm leading-relaxed text-tasami-gray">
              {t("forgotSent")}
            </p>
            <Link href="/login" className="btn-secondary inline-flex text-sm">
              {t("loginCta")}
            </Link>
          </div>
        ) : (
          <form onSubmit={submit} className="card-premium space-y-3.5 p-6">
            <label className="block text-xs font-medium text-tasami-purple">
              {t("forgotIdentifier")}
              <input
                required
                dir="ltr"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                className="input-soft mt-1.5"
                placeholder={t("forgotIdentifierPh")}
              />
            </label>

            {error && <p className="text-sm text-tasami-purple">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="btn-secondary w-full text-sm disabled:opacity-50"
            >
              {loading ? t("loading") : t("forgotCta")}
            </button>
          </form>
        )}

        <p className="mt-6 text-center text-sm text-tasami-gray">
          {t("hasAccount")}{" "}
          <Link
            href="/login"
            className="font-medium text-tasami-pink hover:text-tasami-purple"
          >
            {t("loginLink")}
          </Link>
        </p>
      </div>
    </div>
  );
}
