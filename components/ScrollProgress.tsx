"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocale } from "next-intl";

export default function ScrollProgress() {
  const locale = useLocale();
  const isRtl = locale === "ar" || locale === "ur";
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const [lite, setLite] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px), (pointer: coarse)");
    const sync = () => setLite(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  if (reduce) return null;

  if (lite) {
    return (
      <motion.div
        className="scroll-progress scroll-progress--lite"
        style={{
          scaleX,
          transformOrigin: isRtl ? "100% 50%" : "0% 50%",
        }}
        aria-hidden
      />
    );
  }

  return (
    <motion.div
      className="scroll-progress"
      style={{
        scaleX,
        transformOrigin: isRtl ? "100% 50%" : "0% 50%",
      }}
      aria-hidden
    />
  );
}
