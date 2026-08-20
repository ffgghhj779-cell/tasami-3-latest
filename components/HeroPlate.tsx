"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { VISUALS } from "@/lib/visuals";

export default function HeroPlate() {
  const t = useTranslations("home");
  const reduce = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    if (reduce) {
      setPlayVideo(false);
      return;
    }
    const saveData = Boolean(
      (navigator as Navigator & { connection?: { saveData?: boolean } }).connection
        ?.saveData
    );
    setPlayVideo(!saveData);
  }, [reduce]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !playVideo) return;
    const play = () => {
      video.play().catch(() => undefined);
    };
    play();
    const onVisible = () => {
      if (document.visibilityState === "visible") play();
      else video.pause();
    };
    document.addEventListener("visibilitychange", onVisible);
    return () => document.removeEventListener("visibilitychange", onVisible);
  }, [playVideo]);

  return (
    <div className="hero-plate" aria-hidden>
      <Image
        src={VISUALS.hero}
        alt=""
        fill
        priority
        sizes="100vw"
        className="hero-plate-img"
      />

      {playVideo ? (
        <video
          ref={videoRef}
          className="hero-plate-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={VISUALS.hero}
          aria-label={t("heroVideoLabel")}
        >
          <source src={VISUALS.heroVideoWebm} type="video/webm" />
          <source src={VISUALS.heroVideo} type="video/mp4" />
        </video>
      ) : null}

      <div className="hero-plate-wash" />
      <div className="hero-plate-glow" />
    </div>
  );
}
