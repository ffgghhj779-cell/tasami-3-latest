import type { ComponentType, ReactNode, SVGProps } from "react";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Link } from "@/navigation";

type PhosphorIcon = ComponentType<
  SVGProps<SVGSVGElement> & {
    weight?: "regular" | "fill" | "bold" | "light" | "thin" | "duotone";
  }
>;

type ServiceCardProps = {
  href?: string;
  icon: PhosphorIcon;
  title: string;
  description: string;
  cta?: string;
  meta?: string;
  onClick?: () => void;
  rtl?: boolean;
  asButton?: boolean;
  /** Center content (e.g. sector grid) */
  centered?: boolean;
  /** Larger home-page offering card */
  featured?: boolean;
};

const TONES = ["tone-aurora", "tone-deep", "tone-lilac"] as const;

function visualTone(seed: string) {
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash + seed.charCodeAt(i) * (i + 1)) % TONES.length;
  }
  return TONES[hash];
}

/**
 * Service catalogue card — Pitch-style 16:9 slide thumbnail + metadata.
 */
export default function ServiceCard({
  href,
  icon: Icon,
  title,
  description,
  cta,
  meta,
  onClick,
  rtl,
  asButton,
  centered = false,
  featured = false,
}: ServiceCardProps) {
  const Arrow = rtl ? ArrowLeft : ArrowRight;

  const inner: ReactNode = (
    <>
      <div className={`service-card-visual ${visualTone(title)}`} aria-hidden>
        <span className="service-card-icon">
            <Icon weight="bold" className={featured ? "h-7 w-7" : "h-6 w-6"} />
        </span>
        {meta ? (
          <span className="service-card-meta-pill">{meta}</span>
        ) : null}
      </div>

      <div
        className={`mt-4 flex flex-1 flex-col ${
          centered ? "items-center text-center" : "text-start"
        }`}
      >
        <h3
          className={`font-semibold leading-snug text-tasami-dark ${
            featured
              ? "text-xl sm:text-2xl"
              : "text-base sm:text-[1.05rem]"
          }`}
        >
          {title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-tasami-gray">
          {description}
        </p>

        {cta ? (
          <span
            className={`mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-tasami-pink transition-colors group-hover:text-tasami-purple ${
              centered ? "" : ""
            }`}
          >
            {cta}
            <Arrow weight="bold" className="h-3.5 w-3.5" />
          </span>
        ) : null}
      </div>
    </>
  );

  const className = `service-card group h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tasami-pink${
    featured ? " service-card-featured" : ""
  }`;

  if (asButton || onClick) {
    return (
      <button type="button" onClick={onClick} className={`${className} w-full`}>
        {inner}
      </button>
    );
  }

  if (href) {
    return (
      <Link href={href} className={className}>
        {inner}
      </Link>
    );
  }

  return <article className={className}>{inner}</article>;
}
