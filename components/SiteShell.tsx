"use client";

import type { ReactNode } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "@/navigation";
import Navbar from "@/components/Navbar";
import TrustBar from "@/components/TrustBar";
import Footer from "@/components/Footer";

/** Defer chat/WhatsApp widgets — keeps first paint lighter on mobile */
const FloatingWidgets = dynamic(() => import("@/components/FloatingWidgets"), {
  ssr: false,
});

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
      <main className="min-h-[50vh] min-h-[50dvh]">{children}</main>
      <Footer />
      <FloatingWidgets />
    </>
  );
}
