"use client";

import type { ReactNode } from "react";
import { useWaChooser } from "@/components/WaChooser";

export default function WaChooserButton({
  location,
  className,
  children,
}: {
  location: string;
  className?: string;
  children: ReactNode;
}) {
  const { openWhatsApp } = useWaChooser();
  return (
    <button type="button" onClick={() => openWhatsApp(location)} className={className}>
      {children}
    </button>
  );
}
