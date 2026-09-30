import { getTranslations } from "next-intl/server";
import { PLATFORMS } from "@/lib/platforms";

/** Small grey strip of official platforms — names/logos only, no endorsement cards. */
export default async function PlatformsShowcase() {
  const t = await getTranslations("platformsShowcase");

  return (
    <section
      id="platforms"
      aria-labelledby="platforms-heading"
      className="platform-strip scroll-mt-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <h2 id="platforms-heading" className="platform-strip-title">
          {t("title")}
        </h2>

        <ul className="platform-strip-list">
          {PLATFORMS.map((platform) => {
            const name = t(`items.${platform.key}.title`);
            return (
              <li key={platform.key} className="platform-strip-item">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={platform.logo}
                  alt=""
                  width={28}
                  height={28}
                  loading="lazy"
                  decoding="async"
                  className="platform-strip-logo"
                />
                <span>{name}</span>
              </li>
            );
          })}
        </ul>

        <p className="platform-strip-disclaimer">{t("disclaimer")}</p>
      </div>
    </section>
  );
}
