"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { ArrowLeft, CaretLeft } from "@phosphor-icons/react";
import { Link } from "@/navigation";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  backHref?: string;
  backLabel?: string;
  visual?: string;
  /** Breadcrumb trail; the last item is the current page. Replaces the back link. */
  crumbs?: { label: string; href?: string }[];
  children?: ReactNode;
};

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
  backHref,
  backLabel,
  visual,
  crumbs,
  children,
}: PageHeaderProps) {
  return (
    <header className="page-mast">
      {visual ? (
        <div className="page-mast-visual" aria-hidden>
          <Image
            src={visual}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ) : null}
      <div className="relative z-10 mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        {crumbs?.length ? (
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm text-white/75">
              {crumbs.map((c, i) => {
                const last = i === crumbs.length - 1;
                return (
                  <li key={`${c.label}-${i}`} className="inline-flex items-center gap-1.5">
                    {c.href && !last ? (
                      <Link
                        href={c.href as "/"}
                        className="inline-flex min-h-[44px] items-center font-medium text-white/85 transition-colors hover:text-white"
                      >
                        {c.label}
                      </Link>
                    ) : (
                      <span aria-current={last ? "page" : undefined} className="text-white/70">
                        {c.label}
                      </span>
                    )}
                    {!last ? (
                      <CaretLeft aria-hidden weight="bold" className="h-3 w-3 text-white/50 ltr:rotate-180" />
                    ) : null}
                  </li>
                );
              })}
            </ol>
          </nav>
        ) : backHref && backLabel ? (
          <Link
            href={backHref as "/"}
            className="mb-8 inline-flex min-h-[44px] items-center gap-1.5 text-sm font-medium text-white/85 transition-colors hover:text-white"
          >
            <ArrowLeft weight="regular" className="h-4 w-4 rtl:rotate-180" />
            {backLabel}
          </Link>
        ) : null}
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1 className="font-display mt-3 max-w-3xl text-3xl leading-snug text-white sm:text-5xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/90">
            {subtitle}
          </p>
        ) : null}
        {children}
      </div>
    </header>
  );
}
