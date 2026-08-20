"use client";

import Image from "next/image";
import {
  Lightning,
  ShieldCheck,
  Headset,
  Eye,
  Translate,
  ShareNetwork,
} from "@phosphor-icons/react";
import { VISUALS } from "@/lib/visuals";
import Reveal from "@/components/Reveal";
import HoverSpot from "@/components/HoverSpot";

const ICONS = {
  speed: Lightning,
  trust: ShieldCheck,
  support: Headset,
  clarity: Eye,
  multilang: Translate,
  endtoend: ShareNetwork,
} as const;

const PLATES = [
  VISUALS.offerings.gov,
  VISUALS.process.one,
  VISUALS.offerings.tech,
  VISUALS.process.two,
  VISUALS.offerings.sectors,
  VISUALS.process.three,
] as const;

const TONES = ["gold", "teal", "coral", "sky", "violet", "gold"] as const;

export type WhyItem = {
  key: keyof typeof ICONS;
  title: string;
  description: string;
};

type Props = {
  title: string;
  subtitle?: string;
  items: WhyItem[];
};

export default function WhyScene({ title, subtitle, items }: Props) {
  return (
    <section className="why-scene section-pad">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="section-heading mb-10 lg:mb-16">
            <h2>{title}</h2>
            <span className="highlight-line" />
            {subtitle ? (
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-tasami-gray sm:text-base">
                {subtitle}
              </p>
            ) : null}
          </div>
        </Reveal>

        <div className="why-mosaic">
          {items.map((item, i) => {
            const StepIcon = ICONS[item.key];
            const tone = TONES[i] ?? "gold";
            const lead = i === 0;
            return (
              <Reveal
                key={item.key}
                index={i}
                columns={2}
                y={18}
                className={`h-full ${lead ? "why-mosaic-lead" : ""}`}
              >
                <HoverSpot>
                  <article
                    className={`why-premium-card group tone-${tone} h-full ${lead ? "why-premium-card--lead" : "why-premium-card--tile"}`}
                  >
                    {lead ? (
                      <div className="why-premium-shot">
                        <Image
                          src={PLATES[i]}
                          alt=""
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <span className="why-premium-shot-wash" />
                        <span className={`why-premium-num why-num--${tone}`}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                    ) : (
                      <div className="why-premium-shot why-premium-shot--desk">
                        <Image
                          src={PLATES[i]}
                          alt=""
                          fill
                          sizes="(max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <span className="why-premium-shot-wash" />
                        <span className={`why-premium-num why-num--${tone}`}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                    )}
                    <div className="why-premium-body">
                      <span className={`icon-tone icon-tone-${tone}`}>
                        <StepIcon weight="regular" className="h-5 w-5" />
                      </span>
                      <span className={`why-tile-index why-num--${tone}`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display mt-3 text-base text-tasami-dark sm:mt-4 sm:text-xl">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-tasami-gray">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </HoverSpot>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
