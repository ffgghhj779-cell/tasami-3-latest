"use client";

import {
  Buildings,
  Cpu,
  SquaresFour,
} from "@phosphor-icons/react";

const ICONS = [Buildings, Cpu, SquaresFour] as const;
const TONES = ["tone-aurora", "tone-deep", "tone-lilac"] as const;

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
    <div className="hero-reel md:hidden" aria-hidden>
      {items.slice(0, 3).map((item, i) => {
        const Icon = ICONS[i];
        return (
          <article
            key={item.title}
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
