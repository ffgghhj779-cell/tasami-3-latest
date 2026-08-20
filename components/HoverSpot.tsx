"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";

export default function HoverSpot({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const coarseRef = useRef(
    typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches
  );

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (coarseRef.current) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${e.clientX - r.left}px`);
    el.style.setProperty("--spot-y", `${e.clientY - r.top}px`);
  };

  return (
    <div ref={ref} onMouseMove={onMove} className={`hover-spot h-full ${className}`}>
      {children}
    </div>
  );
}
