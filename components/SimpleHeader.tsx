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
    <header className="border-b border-[rgba(26,53,80,0.08)] bg-tasami-offwhite">
      <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
        <h1 className="text-[1.75rem] font-bold leading-[1.3] text-tasami-dark sm:text-4xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-4 max-w-[65ch] leading-[1.8] text-tasami-gray">{subtitle}</p>
        ) : null}
        {children}
      </div>
    </header>
  );
}
