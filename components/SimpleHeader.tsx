import type { ReactNode } from "react";

export default function SimpleHeader({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <header className="lux-dark">
      <div className="relative mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <h1 className="lux-title lux-title--light text-[1.9rem] sm:text-5xl">{title}</h1>
        {subtitle ? (
          <p className="mt-4 max-w-[60ch] text-lg leading-[1.85] text-white/85">{subtitle}</p>
        ) : null}
        {children}
      </div>
    </header>
  );
}
