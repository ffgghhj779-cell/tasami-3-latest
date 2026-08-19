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

const TONES = [
  "tone-aurora",
  "tone-deep",
  "tone-lilac",
  "tone-volt",
  "tone-aurora",
  "tone-lilac",
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
            className={`hero-reel-card service-card-visual ${TONES[i]}`}
          >
            <span className="service-card-icon">
              <Icon weight="bold" className="h-5 w-5" />
            </span>
            <p className="hero-reel-title">{item.title}</p>
            <span className="hero-reel-meta">{item.meta}</span>
          </article>
        );
      })}
    </div>
  );
}
