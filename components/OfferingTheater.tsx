"use client";

import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Buildings,
  Cpu,
  SquaresFour,
} from "@phosphor-icons/react";
import { Link } from "@/navigation";
import { VISUALS } from "@/lib/visuals";
import Reveal from "@/components/Reveal";
import HoverSpot from "@/components/HoverSpot";

const ICONS = {
  gov: Buildings,
  tech: Cpu,
  sectors: SquaresFour,
} as const;

const OBJECT_POS: Record<keyof typeof ICONS, string> = {
  gov: "object-center",
  tech: "object-center",
  sectors: "object-[center_28%]",
};

export type TheaterItem = {
  key: keyof typeof ICONS;
  href: string;
  title: string;
  description: string;
  cta: string;
  meta: string;
};

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  items: TheaterItem[];
  rtl?: boolean;
};

function OfferingCard({
  item,
  rtl,
  size = "compact",
}: {
  item: TheaterItem;
  rtl?: boolean;
  size?: "hero" | "compact";
}) {
  const Arrow = rtl ? ArrowLeft : ArrowRight;
  const Icon = ICONS[item.key];
  const isHero = size === "hero";

  return (
    <Link
      href={item.href}
      className={`offering-premium-card group offering-premium-card--${size} ${isHero ? "offering-premium-card--featured" : ""}`}
    >
      <div className="offering-premium-visual">
        <Image
          src={VISUALS.offerings[item.key]}
          alt=""
          fill
          sizes={
            isHero
              ? "(max-width: 1023px) 100vw, 58vw"
              : "(max-width: 1023px) 100vw, 28vw"
          }
          className={`object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06] ${OBJECT_POS[item.key]}`}
        />
        <span className="offering-premium-wash" />
        <span className="offering-premium-icon">
          <Icon weight="regular" className="h-5 w-5" />
        </span>
        <span className="offering-premium-meta">{item.meta}</span>
      </div>
      <div className="offering-premium-body">
        <h3
          className={`font-display ${isHero ? "text-2xl text-white lg:text-tasami-dark sm:text-3xl" : "text-xl text-tasami-dark sm:text-2xl"}`}
        >
          {item.title}
        </h3>
        <p
          className={`mt-2.5 flex-1 leading-relaxed ${isHero ? "text-sm text-white/90 lg:text-tasami-gray sm:text-base" : "text-sm text-tasami-gray offering-premium-desc--compact"}`}
        >
          {item.description}
        </p>
        <span className={`offering-premium-cta ${isHero ? "text-white lg:text-[var(--color-primary)]" : ""}`}>
          {item.cta}
          <Arrow
            weight="regular"
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5"
          />
        </span>
      </div>
    </Link>
  );
}

export default function OfferingTheater({
  eyebrow,
  title,
  subtitle,
  items,
  rtl,
}: Props) {
  const [featured, ...rest] = items;

  return (
    <section className="relative bg-background section-pad">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="section-heading mb-10 lg:mb-14">
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            <h2 className="mt-2">{title}</h2>
            <span className="highlight-line" />
            {subtitle ? (
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-tasami-gray sm:text-base">
                {subtitle}
              </p>
            ) : null}
          </div>
        </Reveal>

        <div className="offering-bento">
          {featured ? (
            <Reveal className="offering-bento-feature h-full">
              <HoverSpot className="h-full">
                <OfferingCard item={featured} rtl={rtl} size="hero" />
              </HoverSpot>
            </Reveal>
          ) : null}

          {rest.map((item, i) => (
            <Reveal key={item.href} index={i + 1} columns={2} className="h-full">
              <HoverSpot className="h-full">
                <OfferingCard item={item} rtl={rtl} size="compact" />
              </HoverSpot>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
