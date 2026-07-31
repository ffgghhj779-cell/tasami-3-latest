"use client";

import type { ReactNode } from "react";
import { usePathname } from "@/navigation";
import Navbar from "@/components/Navbar";
import TrustBar from "@/components/TrustBar";
import FloatingWidgets from "@/components/FloatingWidgets";

/** Hides public chrome on /admin routes so the secretary panel is full-bleed. */
export default function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.includes("/admin");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      <TrustBar />
      <main className="min-h-[60vh]">{children}</main>
      <FloatingWidgets />
    </>
  );
}
