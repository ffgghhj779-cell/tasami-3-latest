import { getLocale, getTranslations } from "next-intl/server";
import { Quotes, SealCheck, Star } from "@phosphor-icons/react/dist/ssr";
import Reveal from "@/components/Reveal";
import { getApprovedReviews } from "@/lib/reviews";

/** Approved customer reviews. Renders nothing until at least one review is approved. */
export default async function CustomerReviews({ limit = 6 }: { limit?: number }) {
  const all = await getApprovedReviews();
  if (all.length === 0) return null;

  const t = await getTranslations("reviews.section");
  const locale = await getLocale();
  const reviews = all.slice(0, limit);
  const average = all.reduce((sum, r) => sum + r.rating, 0) / all.length;
  const dateFmt = new Intl.DateTimeFormat(locale === "ar" ? "ar-SA-u-ca-gregory" : locale, {
    month: "long",
    year: "numeric",
  });

  return (
    <section className="lux-section bg-white" aria-labelledby="reviews-title">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <h2 id="reviews-title" className="lux-title">
              {t("title")}
            </h2>
            <p className="lux-lead mt-3 max-w-2xl">{t("subtitle")}</p>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-[#c8a84b]/30 bg-[#fffaf0] px-4 py-3">
            <span className="text-3xl font-extrabold tabular-nums text-tasami-dark">
              {average.toLocaleString("en-US", { minimumFractionDigits: 1, maximumFractionDigits: 1 })}
            </span>
            <div>
              <div className="flex gap-0.5" aria-hidden>
                {[1, 2, 3, 4, 5].map((n) => (
                  <Star
                    key={n}
                    weight={n <= Math.round(average) ? "fill" : "regular"}
                    className="h-4 w-4 text-[#c8a84b]"
                  />
                ))}
              </div>
              <p className="mt-0.5 text-xs font-medium text-tasami-gray">
                {t("summary", { count: all.length })}
              </p>
            </div>
          </div>
        </div>

        <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <li key={r.id}>
              <Reveal index={i} className="h-full">
                <figure className="lux-card relative flex h-full flex-col p-6">
                  <Quotes
                    aria-hidden
                    weight="fill"
                    className="absolute end-5 top-5 h-8 w-8 text-[#0057B8]/10"
                  />
                  <div className="flex gap-0.5" role="img" aria-label={t("stars", { n: r.rating })}>
                    {[1, 2, 3, 4, 5].map((n) => (
                      <Star
                        key={n}
                        weight={n <= r.rating ? "fill" : "regular"}
                        className={`h-5 w-5 ${n <= r.rating ? "text-[#c8a84b]" : "text-[#1a3550]/20"}`}
                      />
                    ))}
                  </div>
                  <blockquote className="mt-4 flex-1 leading-[1.9] text-tasami-dark">
                    <p dir="auto">{r.text}</p>
                  </blockquote>
                  <figcaption className="mt-5 flex items-center gap-3 border-t border-[rgba(26,53,80,0.08)] pt-4">
                    <span
                      aria-hidden
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#0f2a47] to-[#0057B8] font-bold text-white"
                    >
                      {(r.name || t("anonymous")).trim().charAt(0)}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate font-bold text-tasami-dark" dir="auto">
                        {r.name || t("anonymous")}
                        {r.city ? <span className="font-normal text-tasami-gray"> · {r.city}</span> : null}
                      </p>
                      <p className="flex items-center gap-1 text-xs text-[#0F7A40]">
                        <SealCheck weight="fill" className="h-3.5 w-3.5" />
                        {t("verified")}
                        <span className="text-tasami-gray"> · {dateFmt.format(new Date(r.createdAt))}</span>
                      </p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
