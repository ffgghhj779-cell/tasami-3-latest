"use client";

import {
  Buildings,
  Cpu,
  SquaresFour,
  Lightning,
  ShieldCheck,
  Headset,
} from "@phosphor-icons/react";

const ICONS = [
  Buildings,
  Cpu,
  SquaresFour,
  Lightning,
  ShieldCheck,
  Headset,
] as const;

export type HeroReelItem = {
  title: string;
  meta: string;
};

export default function HeroServiceReel({
  items,
}: {
  items: HeroReelItem[];
}) {
  return (
    <div className="hero-reel" aria-hidden>
      {items.slice(0, 6).map((item, i) => {
        const Icon = ICONS[i];
        return (
          <article
            key={`${item.title}-${i}`}
            className={`hero-reel-card hero-reel-card--${i % 3}`}
          >
            <span className="hero-reel-icon">
              <Icon weight="bold" className="h-4 w-4 sm:h-5 sm:w-5" />
            </span>
            <p className="hero-reel-title">{item.title}</p>
            <span className="hero-reel-meta">{item.meta}</span>
          </article>
        );
      })}
    </div>
  );
}
