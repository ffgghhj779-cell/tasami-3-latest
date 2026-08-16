"use client";

import { useEffect, useRef } from "react";

type Blob = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  color: string;
};

/**
 * Living purple glow behind the hero — canvas mesh that reads like a looping video.
 */
export default function HeroAurora() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;

    let raf = 0;
    let w = 0;
    let h = 0;
    let running = true;

    const blobs: Blob[] = [
      { x: 0.32, y: 0.28, vx: 0.0016, vy: 0.0011, r: 0.52, color: "107,83,255" },
      { x: 0.78, y: 0.22, vx: -0.0013, vy: 0.0014, r: 0.46, color: "83,24,235" },
      { x: 0.55, y: 0.72, vx: 0.0011, vy: -0.0015, r: 0.55, color: "120,70,255" },
      { x: 0.16, y: 0.68, vx: 0.0015, vy: 0.0009, r: 0.4, color: "198,165,255" },
      { x: 0.88, y: 0.62, vx: -0.0012, vy: -0.0011, r: 0.38, color: "70,40,220" },
    ];

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      w = parent.clientWidth;
      h = parent.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, coarse ? 1.15 : 1.4);
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      if (!running) return;
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";

      for (const b of blobs) {
        if (!reduce) {
          b.x += b.vx;
          b.y += b.vy;
          if (b.x < 0.08 || b.x > 0.92) b.vx *= -1;
          if (b.y < 0.1 || b.y > 0.9) b.vy *= -1;
        }

        const gx = b.x * w;
        const gy = b.y * h;
        const radius = Math.max(w, h) * b.r * (coarse ? 1.08 : 1);
        const g = ctx.createRadialGradient(gx, gy, 0, gx, gy, radius);
        g.addColorStop(0, `rgba(${b.color},${coarse ? 0.78 : 0.62})`);
        g.addColorStop(0.35, `rgba(${b.color},${coarse ? 0.36 : 0.28})`);
        g.addColorStop(1, `rgba(${b.color},0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(gx, gy, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalCompositeOperation = "source-over";
      if (!reduce) raf = requestAnimationFrame(draw);
    };

    resize();
    draw();

    const ro = new ResizeObserver(resize);
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    const onVis = () => {
      if (document.visibilityState === "hidden") {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!reduce) {
        running = true;
        raf = requestAnimationFrame(draw);
      }
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <div className="hero-orbs" aria-hidden>
      <div className="hero-mesh" />
      <canvas className="hero-glow-canvas" ref={ref} />
      <div className="hero-sheen" />
    </div>
  );
}
