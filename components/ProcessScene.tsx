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
            <div
              key={item.key}
              className="process-premium-card-wrapper"
              style={{ top: `calc(7rem + ${i * 1.5}rem)` }}
            >
              <Reveal delay={0.1} y={40}>
                <HoverSpot>
                  <article className="process-premium-card group">
                    <div className="process-premium-frame">
                      <Image
                        src={PLATES[i]}
                        alt=""
                        fill
                        sizes="(max-width: 767px) 100vw, 45vw"
                        className="object-cover object-center"
                      />
                      <span className={`process-premium-step process-num-${i}`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="process-premium-body">
                      <h3 className="font-display text-lg text-tasami-dark sm:text-xl md:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-tasami-gray md:text-base">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </HoverSpot>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
