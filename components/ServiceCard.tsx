import type { ComponentType, ReactNode, SVGProps } from "react";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Link } from "@/navigation";

type PhosphorIcon = ComponentType<
  SVGProps<SVGSVGElement> & {
    weight?: "regular" | "fill" | "bold" | "light" | "thin" | "duotone";
  }
>;

const CARD_TONES = ["gold", "teal", "coral", "sky", "violet"] as const;
export type CardTone = (typeof CARD_TONES)[number];

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
  centered?: boolean;
  featured?: boolean;
  tone?: CardTone;
  toneIndex?: number;
};

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
  tone,
  toneIndex,
}: ServiceCardProps) {
  const Arrow = rtl ? ArrowLeft : ArrowRight;
  const resolvedTone =
    tone ??
    (typeof toneIndex === "number"
      ? CARD_TONES[((toneIndex % CARD_TONES.length) + CARD_TONES.length) % CARD_TONES.length]
      : CARD_TONES[title.length % CARD_TONES.length]);

  const inner: ReactNode = (
    <>
      <div
        className={`flex items-start justify-between gap-3 ${
          centered ? "flex-col items-center" : ""
        }`}
      >
        <span className="service-card-icon">
          <Icon weight="regular" className={featured ? "h-6 w-6" : "h-5 w-5"} />
        </span>
        {meta ? <span className="service-card-meta-pill">{meta}</span> : null}
      </div>

      <div
        className={`mt-5 flex flex-1 flex-col ${
          centered ? "items-center text-center" : "text-start"
        }`}
      >
        <h3
          className={`font-semibold leading-snug text-tasami-dark ${
            featured ? "text-xl sm:text-2xl" : "text-base sm:text-[1.05rem]"
          }`}
        >
          {title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-tasami-gray">
          {description}
        </p>

        {cta ? (
          <span className="service-card-cta">
            {cta}
            <Arrow weight="regular" className="h-3.5 w-3.5" />
          </span>
        ) : null}
      </div>
    </>
  );

  const className = `service-card tone-${resolvedTone} group h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tasami-gold${
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
