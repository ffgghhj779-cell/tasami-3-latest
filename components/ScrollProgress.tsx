"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocale } from "next-intl";

function ScrollProgressBar({ isRtl }: { isRtl: boolean }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

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

export default function ScrollProgress() {
  const locale = useLocale();
  const isRtl = locale === "ar" || locale === "ur";
  const reduce = useReducedMotion();
  const [lite, setLite] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px), (pointer: coarse)");
    const sync = () => setLite(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  if (reduce || lite) return null;

  return <ScrollProgressBar isRtl={isRtl} />;
}
