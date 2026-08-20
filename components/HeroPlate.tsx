"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { VISUALS } from "@/lib/visuals";

export default function HeroPlate() {
  const t = useTranslations("home");
  const reduce = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playVideo, setPlayVideo] = useState(false);
  const [mobile, setMobile] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px), (pointer: coarse)");
    const sync = () => setMobile(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

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
  }, [playVideo, mobile]);

  const src = mobile ? VISUALS.heroVideoMobile : VISUALS.heroVideo;

  return (
    <div className="hero-plate" aria-hidden>
      {playVideo ? (
        <video
          ref={videoRef}
          key={src}
          className="hero-plate-video hero-plate-video--live"
          autoPlay
          muted
          loop
          playsInline
          preload={mobile ? "metadata" : "auto"}
          poster={VISUALS.hero}
          aria-label={t("heroVideoLabel")}
        >
          {!mobile ? (
            <source src={VISUALS.heroVideoWebm} type="video/webm" />
          ) : null}
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={VISUALS.hero}
          alt=""
          className="hero-plate-img hero-plate-img--poster"
          decoding="async"
          fetchPriority="high"
        />
      )}

      <div className="hero-plate-wash" />
      <div className="hero-plate-glow" />
    </div>
  );
}
