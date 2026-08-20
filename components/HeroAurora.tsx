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
 * Mobile: lower backing-store, capped FPS, ignore URL-bar resize jitter, pause off-screen.
 */
export default function HeroAurora() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", {
      alpha: true,
      desynchronized: true,
    });
    if (!ctx) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;

    let raf = 0;
    let w = 0;
    let h = 0;
    let running = true;
    let pageVisible = true;
    let inView = true;
    let lastFrame = 0;
    const frameMs = coarse ? 1000 / 24 : 1000 / 30;
    const canRun = () => running && pageVisible && inView;

    const blobs: Blob[] = [
      { x: 0.32, y: 0.28, vx: 0.0022, vy: 0.0015, r: 0.56, color: "0,122,255" },
      { x: 0.78, y: 0.22, vx: -0.0018, vy: 0.002, r: 0.5, color: "43,154,239" },
      { x: 0.55, y: 0.72, vx: 0.0016, vy: -0.0021, r: 0.58, color: "0,122,255" },
      { x: 0.16, y: 0.68, vx: 0.002, vy: 0.0013, r: 0.44, color: "90,200,250" },
      { x: 0.88, y: 0.62, vx: -0.0017, vy: -0.0016, r: 0.46, color: "43,184,179" },
      { x: 0.62, y: 0.18, vx: 0.0014, vy: 0.0018, r: 0.34, color: "255,139,115" },
    ];

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const nextW = parent.clientWidth;
      const nextH = parent.clientHeight;
      // Mobile chrome show/hide changes height ~40–80px and reallocating the
      // canvas every frame is a major hitch. Keep the buffer until width or
      // a real orientation/layout change.
      if (
        coarse &&
        w > 0 &&
        Math.abs(nextW - w) < 2 &&
        Math.abs(nextH - h) < 96
      ) {
        return;
      }
      w = nextW;
      h = nextH;
      const quality = coarse ? 0.48 : 0.82;
      const dpr = Math.min(window.devicePixelRatio || 1, coarse ? 1 : 1.25);
      const scale = dpr * quality;
      canvas.width = Math.max(1, Math.floor(w * scale));
      canvas.height = Math.max(1, Math.floor(h * scale));
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(scale, 0, 0, scale, 0, 0);
    };

    const draw = () => {
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
        g.addColorStop(0, `rgba(${b.color},${coarse ? 0.88 : 0.72})`);
        g.addColorStop(0.35, `rgba(${b.color},${coarse ? 0.42 : 0.34})`);
        g.addColorStop(1, `rgba(${b.color},0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(gx, gy, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalCompositeOperation = "source-over";
    };

    const loop = (now: number) => {
      if (!canRun()) return;
      raf = requestAnimationFrame(loop);
      if (reduce) {
        draw();
        running = false;
        cancelAnimationFrame(raf);
        return;
      }
      if (now - lastFrame < frameMs) return;
      lastFrame = now;
      draw();
    };

    const startLoop = () => {
      if (!canRun()) return;
      if (reduce) {
        draw();
        return;
      }
      cancelAnimationFrame(raf);
      lastFrame = 0;
      raf = requestAnimationFrame(loop);
    };

    resize();
    draw();

    const kickoff = () => {
      if (!running) return;
      startLoop();
    };
    const useIdle = "requestIdleCallback" in window;
    const idle = useIdle
      ? window.requestIdleCallback(kickoff, { timeout: 280 })
      : window.setTimeout(kickoff, 1);

    const ro = new ResizeObserver(resize);
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    const io = new IntersectionObserver(
      ([entry]) => {
        inView = Boolean(entry?.isIntersecting && entry.intersectionRatio > 0.08);
        if (!inView) {
          cancelAnimationFrame(raf);
        } else {
          startLoop();
        }
      },
      { threshold: [0, 0.08, 0.2] }
    );
    io.observe(canvas);

    const onVis = () => {
      pageVisible = document.visibilityState !== "hidden";
      if (!pageVisible) {
        cancelAnimationFrame(raf);
      } else {
        startLoop();
      }
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      if (useIdle) window.cancelIdleCallback(idle);
      else window.clearTimeout(idle);
      ro.disconnect();
      io.disconnect();
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
