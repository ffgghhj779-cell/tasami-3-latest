"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  index?: number;
  columns?: number;
  y?: number;
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  index,
  columns = 3,
  y = 28,
}: RevealProps) {
  const reduce = useReducedMotion();
  // true = mobile/coarse → lightweight animation
  // false = desktop/fine pointer → full premium 3D blur animation
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse), (max-width: 1023px)");
    const sync = () => setIsMobile(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const stagger =
    typeof index === "number" ? (index % columns) * 0.06 : delay;

  // Accessibility: respect OS-level reduced motion
  if (reduce) {
    return (
      <div
        className={`reveal-lite ${className}`}
        style={{ animationDelay: `${stagger}s` }}
      >
        {children}
      </div>
    );
  }

  // ─── Mobile: GPU-safe premium animation — scale + opacity + y ───────────
  // scale & translateY are free GPU composite layers — zero lag on mobile
  // blur() & rotateX are expensive (causes repaint) → kept desktop-only
  if (isMobile) {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0, y: y * 0.7, scale: 0.88 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.12, margin: "0px 0px -8% 0px" }}
        transition={{
          type: "spring",
          stiffness: 90,
          damping: 20,
          mass: 0.9,
          delay: stagger,
        }}
        style={{ willChange: "transform, opacity", transformOrigin: "center bottom" }}
      >
        {children}
      </motion.div>
    );
  }

  // ─── Desktop: full premium 3D blur-fade with spring physics ──────────────
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y,
        scale: 0.95,
        filter: "blur(10px)",
        rotateX: 12,
        transformPerspective: 1000,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        rotateX: 0,
      }}
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -10% 0px" }}
      transition={{
        type: "spring",
        stiffness: 70,
        damping: 18,
        mass: 1.2,
        delay: stagger,
      }}
      style={{ willChange: "transform, opacity, filter" }}
    >
      {children}
    </motion.div>
  );
}
