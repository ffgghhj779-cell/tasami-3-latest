"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { ArrowLeft } from "@phosphor-icons/react";
import { Link } from "@/navigation";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  backHref?: string;
  backLabel?: string;
  visual?: string;
  children?: ReactNode;
};

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
  backHref,
  backLabel,
  visual,
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
        {backHref && backLabel ? (
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
