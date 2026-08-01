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
};

/**
 * Service catalogue card — purple visual band + body + clear CTA
 * (inspired by premium media templates, adapted to Tasami identity)
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
}: ServiceCardProps) {
  const Arrow = rtl ? ArrowLeft : ArrowRight;

  const inner: ReactNode = (
    <>
      <div className="service-card-visual" aria-hidden>
        <span className="service-card-icon">
          <Icon weight="regular" className="h-7 w-7" />
        </span>
        {meta ? (
          <span className="service-card-meta-pill">{meta}</span>
        ) : null}
      </div>

      <div
        className={`flex flex-1 flex-col p-5 sm:p-6 ${
          centered ? "items-center text-center" : "text-start"
        }`}
      >
        <h3 className="text-base font-medium leading-snug text-tasami-purple sm:text-lg">
          {title}
        </h3>
        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-tasami-gray">
          {description}
        </p>

        {cta ? (
          <div
            className={`mt-5 flex w-full items-center gap-3 border-t border-tasami-purple/8 pt-4 ${
              centered ? "justify-center" : "justify-between"
            }`}
          >
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-tasami-pink transition-colors group-hover:text-tasami-purple">
              {cta}
              <Arrow weight="bold" className="h-3.5 w-3.5" />
            </span>
          </div>
        ) : null}
      </div>
    </>
  );

  const className =
    "service-card group h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tasami-pink";

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
