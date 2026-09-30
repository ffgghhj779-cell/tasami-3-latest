"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { CheckCircle, Star } from "@phosphor-icons/react";

type Props = {
  order?: string;
  invite?: string;
  /** Rendered when the source was already reviewed before this visit. */
  alreadyReviewed?: boolean;
};

const MIN_TEXT = 10;
const MAX_TEXT = 600;

export default function ReviewForm({ order, invite, alreadyReviewed = false }: Props) {
  const t = useTranslations("reviews.form");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [website, setWebsite] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  if (alreadyReviewed || done) {
    return (
      <div
        id="review"
        role="status"
        className="mt-6 flex items-start gap-3 rounded-2xl border border-[#0F7A40]/20 bg-[#0F7A40]/[0.06] p-5"
      >
        <CheckCircle weight="fill" className="mt-0.5 h-6 w-6 shrink-0 text-[#0F7A40]" />
        <div>
          <p className="font-bold text-tasami-dark">{done ? t("thanksTitle") : t("alreadyTitle")}</p>
          <p className="mt-1 text-sm text-tasami-gray">{done ? t("thanksBody") : t("alreadyBody")}</p>
        </div>
      </div>
    );
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (rating < 1) return setError(t("errRating"));
    if (text.trim().length < MIN_TEXT) return setError(t("errText", { min: MIN_TEXT }));
    setSending(true);
    setError(null);
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ order, invite, rating, text, name, city, website }),
      });
      const data = await res.json().catch(() => null);
      if (res.ok) {
        setDone(true);
        return;
      }
      const code = data?.error as string | undefined;
      setError(
        code === "already"
          ? t("errAlready")
          : code === "too_many"
            ? t("errTooMany")
            : code === "expired"
              ? t("errExpired")
              : code === "not_done" || code === "not_found" || code === "invalid"
                ? t("errInvalid")
                : t("errGeneric")
      );
    } catch {
      setError(t("errGeneric"));
    } finally {
      setSending(false);
    }
  }

  const shown = hover || rating;

  return (
    <form
      id="review"
      onSubmit={submit}
      className="mt-6 rounded-2xl border border-[#c8a84b]/30 bg-gradient-to-b from-[#fffaf0] to-white p-5 sm:p-6"
      noValidate
    >
      <p className="text-lg font-bold text-tasami-dark">{t("title")}</p>
      <p className="mt-1 text-sm text-tasami-gray">{t("subtitle")}</p>

      <fieldset className="mt-4">
        <legend className="text-sm font-bold text-tasami-dark">{t("ratingLabel")}</legend>
        <div className="mt-2 flex gap-1" onMouseLeave={() => setHover(0)}>
          {[1, 2, 3, 4, 5].map((n) => (
            <label key={n} className="cursor-pointer" onMouseEnter={() => setHover(n)}>
              <input
                type="radio"
                name="rating"
                value={n}
                checked={rating === n}
                onChange={() => setRating(n)}
                className="peer sr-only"
              />
              <span className="sr-only">{t("stars", { n })}</span>
              <Star
                aria-hidden
                weight={n <= shown ? "fill" : "regular"}
                className={`h-9 w-9 rounded-md transition-transform peer-focus-visible:ring-2 peer-focus-visible:ring-[#006BDE] ${
                  n <= shown ? "text-[#c8a84b]" : "text-[#1a3550]/25"
                } hover:scale-110`}
              />
            </label>
          ))}
        </div>
        {rating > 0 ? (
          <p className="mt-1 text-sm font-medium text-[#8a6d1f]">{t(`ratingHint.${rating}`)}</p>
        ) : null}
      </fieldset>

      <label className="mt-4 block text-sm font-bold text-tasami-dark" htmlFor="review-text">
        {t("textLabel")}
      </label>
      <textarea
        id="review-text"
        value={text}
        onChange={(e) => setText(e.target.value.slice(0, MAX_TEXT))}
        rows={4}
        placeholder={t("textPlaceholder")}
        className="input-soft mt-1.5 w-full resize-y text-base"
        required
        minLength={MIN_TEXT}
        maxLength={MAX_TEXT}
      />
      <p className="mt-1 text-end text-xs text-tasami-gray" dir="ltr">
        {text.length}/{MAX_TEXT}
      </p>

      <div className="mt-2 grid gap-3 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-bold text-tasami-dark" htmlFor="review-name">
            {t("nameLabel")}
          </label>
          <input
            id="review-name"
            value={name}
            onChange={(e) => setName(e.target.value.slice(0, 40))}
            placeholder={t("namePlaceholder")}
            className="input-soft mt-1.5 min-h-[48px] w-full text-base"
            autoComplete="given-name"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-tasami-dark" htmlFor="review-city">
            {t("cityLabel")}
          </label>
          <input
            id="review-city"
            value={city}
            onChange={(e) => setCity(e.target.value.slice(0, 40))}
            placeholder={t("cityPlaceholder")}
            className="input-soft mt-1.5 min-h-[48px] w-full text-base"
            autoComplete="address-level2"
          />
        </div>
      </div>

      <div aria-hidden className="absolute -start-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input tabIndex={-1} value={website} onChange={(e) => setWebsite(e.target.value)} autoComplete="off" />
        </label>
      </div>

      {error ? (
        <p role="alert" className="mt-3 text-sm font-medium text-[#B42318]">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={sending}
        className="mt-4 inline-flex min-h-[48px] w-full items-center justify-center rounded-button bg-[#0057B8] px-6 text-base font-bold text-white transition-colors hover:bg-[#004a9c] disabled:opacity-60 sm:w-auto"
      >
        {sending ? t("sending") : t("submit")}
      </button>
      <p className="mt-3 text-xs leading-relaxed text-tasami-gray">{t("consent")}</p>
    </form>
  );
}
