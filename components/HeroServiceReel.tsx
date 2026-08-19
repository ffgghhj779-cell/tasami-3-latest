"use client";

import { Buildings, Cpu, SquaresFour } from "@phosphor-icons/react";

const ICONS = [Buildings, Cpu, SquaresFour] as const;

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
      {items.slice(0, 3).map((item, i) => {
        const Icon = ICONS[i];
        return (
          <article key={item.title} className="hero-reel-card">
            <div className={`hero-reel-face hero-reel-card--${i}`}>
              <span className="hero-reel-icon">
                <Icon weight="bold" className="h-4 w-4 sm:h-5 sm:w-5" />
              </span>
              <p className="hero-reel-title">{item.title}</p>
              <span className="hero-reel-meta">{item.meta}</span>
            </div>
          </article>
        );
      })}
    </div>
  );
}
