"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useLocale } from "next-intl";

export default function ScrollProgress() {
  const locale = useLocale();
  const isRtl = locale === "ar" || locale === "ur";
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

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
