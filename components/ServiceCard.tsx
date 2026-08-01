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
}: ServiceCardProps) {
  const Arrow = rtl ? ArrowLeft : ArrowRight;

  const inner: ReactNode = (
    <>
      <span className="icon-gold mb-5 !h-14 !w-14 transition-transform duration-300 group-hover:scale-105">
        <Icon weight="regular" className="h-7 w-7" />
      </span>
      <h3 className="text-base font-medium leading-snug text-tasami-purple sm:text-lg">
        {title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-tasami-gray">
        {description}
      </p>
      {(cta || meta) && (
        <div className="mt-6 flex items-center justify-between gap-3">
          {cta ? (
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-tasami-pink transition-colors group-hover:text-tasami-purple">
              {cta}
              <Arrow weight="bold" className="h-3.5 w-3.5" />
            </span>
          ) : (
            <span />
          )}
          {meta && (
            <span className="text-[10px] font-medium tracking-wide text-tasami-gold">
              {meta}
            </span>
          )}
        </div>
      )}
    </>
  );

  const className =
    "card-premium group h-full p-7 sm:p-8 text-start focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tasami-pink";

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
