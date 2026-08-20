"use client";

import Image from "next/image";
import { VISUALS } from "@/lib/visuals";
import Reveal from "@/components/Reveal";
import HoverSpot from "@/components/HoverSpot";

const PLATES = [
  VISUALS.process.one,
  VISUALS.process.two,
  VISUALS.process.three,
] as const;

export type ProcessStep = {
  key: string;
  title: string;
  description: string;
};

type Props = {
  title: string;
  subtitle?: string;
  steps: ProcessStep[];
};

export default function ProcessScene({ title, subtitle, steps }: Props) {
  return (
    <section className="surface-cream section-pad">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="section-heading mb-10 lg:mb-16">
            <h2>{title}</h2>
            <span className="highlight-line" />
            {subtitle ? (
              <p className="mt-5 max-w-xl text-sm text-tasami-gray sm:text-base">
                {subtitle}
              </p>
            ) : null}
          </div>
        </Reveal>

        <div className="process-rail">
          {steps.map((item, i) => (
            <Reveal key={item.key} index={i} columns={3} className="h-full" y={18}>
              <HoverSpot>
                <article className="process-premium-card group h-full">
                  <div className="process-premium-frame">
                    <Image
                      src={PLATES[i]}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 96px, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <span className={`process-premium-step process-num-${i}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="process-premium-body">
                    <h3 className="font-display text-lg text-tasami-dark sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-tasami-gray">
                      {item.description}
                    </p>
                  </div>
                </article>
              </HoverSpot>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
