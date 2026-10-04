import { getTranslations } from "next-intl/server";
import { CheckCircle, Lightbulb, MapPin, UsersThree } from "@phosphor-icons/react/dist/ssr";
import type { ServiceGuide as Guide } from "@/lib/service-guides";

/** Long-form service content: who it is for, steps, tips and service area. */
export default async function ServiceGuide({
  guide,
  service,
  kind = "government",
}: {
  guide: Guide;
  service: string;
  kind?: "government" | "tech";
}) {
  const t = await getTranslations("serviceGuide");

  return (
    <div className="mt-8 space-y-8">
      <section aria-labelledby="guide-who">
        <h2 id="guide-who" className="flex items-center gap-2 text-lg font-bold text-tasami-dark">
          <UsersThree weight="duotone" className="h-5 w-5 text-[#0057B8]" />
          {t("whoTitle", { service })}
        </h2>
        <ul className="mt-3 space-y-2 leading-[1.85] text-tasami-gray">
          {guide.who.map((item) => (
            <li key={item} className="flex gap-2">
              <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0057B8]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="guide-steps">
        <h2 id="guide-steps" className="text-lg font-bold text-tasami-dark">
          {t("stepsTitle", { service })}
        </h2>
        <ol className="mt-4 space-y-4">
          {guide.steps.map((step, i) => (
            <li key={step} className="flex gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0b1a2a] text-sm font-bold text-white">
                {i + 1}
              </span>
              <p className="pt-1 leading-[1.85] text-tasami-dark">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="guide-tips" className="rounded-2xl border border-[#c8a84b]/30 bg-[#fffaf0] p-5 sm:p-6">
        <h2 id="guide-tips" className="flex items-center gap-2 text-lg font-bold text-tasami-dark">
          <Lightbulb weight="duotone" className="h-5 w-5 text-[#8a6d1f]" />
          {t(kind === "tech" ? "tipsTitleTech" : "tipsTitle", { service })}
        </h2>
        <ul className="mt-3 space-y-2.5 leading-[1.85] text-tasami-dark">
          {guide.tips.map((tip) => (
            <li key={tip} className="flex gap-2">
              <CheckCircle weight="fill" className="mt-1.5 h-4 w-4 shrink-0 text-[#0F7A40]" />
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="guide-local">
        <h2 id="guide-local" className="flex items-center gap-2 text-lg font-bold text-tasami-dark">
          <MapPin weight="duotone" className="h-5 w-5 text-[#0057B8]" />
          {t("localTitle")}
        </h2>
        <p className="mt-2 leading-[1.85] text-tasami-gray">{guide.local}</p>
      </section>
    </div>
  );
}
