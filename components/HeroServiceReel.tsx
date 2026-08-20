"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Buildings, Cpu, SquaresFour } from "@phosphor-icons/react";
import { Link } from "@/navigation";
import { VISUALS } from "@/lib/visuals";

const CONFIG = [
  {
    icon: Buildings,
    visual: VISUALS.offerings.gov,
    href: "/services/government" as const,
    layout: "hero-orbit-card--a",
  },
  {
    icon: Cpu,
    visual: VISUALS.offerings.tech,
    href: "/services/tech" as const,
    layout: "hero-orbit-card--b",
  },
  {
    icon: SquaresFour,
    visual: VISUALS.offerings.sectors,
    href: "/sectors" as const,
    layout: "hero-orbit-card--c",
  },
] as const;

export type HeroReelItem = {
  title: string;
  meta: string;
};

type Props = {
  items: HeroReelItem[];
};

export default function HeroServiceReel({ items }: Props) {
  const reduce = useReducedMotion();
  const [float, setFloat] = useState(false);
  const [lite, setLite] = useState(true);

  useEffect(() => {
    const mqFloat = window.matchMedia(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)"
    );
    const syncFloat = () => setFloat(mqFloat.matches);
    syncFloat();
    mqFloat.addEventListener("change", syncFloat);

    const mqLite = window.matchMedia("(max-width: 1023px), (pointer: coarse)");
    const syncLite = () => setLite(mqLite.matches);
    syncLite();
    mqLite.addEventListener("change", syncLite);

    return () => {
      mqFloat.removeEventListener("change", syncFloat);
      mqLite.removeEventListener("change", syncLite);
    };
  }, []);

  return (
    <div className="hero-orbit">
      {items.slice(0, 3).map((item, i) => {
        const cfg = CONFIG[i];
        const Icon = cfg.icon;
        const card = (
          <Link href={cfg.href} className="hero-orbit-link group">
            <div className="hero-orbit-visual">
              <Image
                src={cfg.visual}
                alt=""
                fill
                sizes="(max-width: 1023px) 78vw, 280px"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <span className="hero-orbit-wash" />
              <span className="hero-orbit-icon">
                <Icon weight="bold" className="h-4 w-4" />
              </span>
            </div>
            <div className="hero-orbit-body">
              <p className="hero-orbit-title">{item.title}</p>
              <span className="hero-orbit-meta">{item.meta}</span>
            </div>
          </Link>
        );

        if (reduce || lite) {
          return (
            <div
              key={item.title}
              className={`hero-orbit-card hero-orbit-card--in ${cfg.layout}`}
              style={{ animationDelay: `${0.08 + i * 0.08}s` }}
            >
              {card}
            </div>
          );
        }

        return (
          <motion.div
            key={item.title}
            className={`hero-orbit-card ${cfg.layout}`}
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.08 + i * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.div
              className="hero-orbit-float"
              animate={
                float
                  ? {
                      y: [0, -14, 0],
                      rotate: [0, i === 1 ? -1.2 : 1.2, 0],
                    }
                  : undefined
              }
              transition={{
                duration: 5.5 + i * 0.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4,
              }}
            >
              {card}
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
