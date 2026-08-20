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
    // Only reduce motion if the user explicitly requested it in OS settings
    // Otherwise, we allow the premium 3D blur fade on mobile!
  }, []);

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

  return (
    <motion.div
      className={className}
      initial={{ 
        opacity: 0, 
        y, 
        scale: 0.95,
        filter: "blur(10px)",
        rotateX: 12,
        transformPerspective: 1000
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        scale: 1,
        filter: "blur(0px)",
        rotateX: 0
      }}
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -10% 0px" }}
      transition={{
        type: "spring",
        stiffness: 70,
        damping: 18,
        mass: 1.2,
        delay: stagger,
      }}
      style={{
        willChange: "transform, opacity, filter",
      }}
    >
      {children}
    </motion.div>
  );
}
