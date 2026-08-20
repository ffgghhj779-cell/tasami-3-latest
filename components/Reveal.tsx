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
  const [lite, setLite] = useState(true);
  const stagger =
    typeof index === "number" ? (index % columns) * 0.08 : delay;

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px), (pointer: coarse)");
    const sync = () => setLite(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  if (reduce || lite) {
    return (
      <div
        className={`reveal-lite ${className}`}
        style={{ animationDelay: `${stagger}s` }}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -10% 0px" }}
      transition={{
        duration: 0.65,
        delay: stagger,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
