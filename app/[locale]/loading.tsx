"use client";

export default function LocaleLoading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center px-5">
      <div className="flex flex-col items-center gap-4">
        <div
          className="h-10 w-10 animate-pulse rounded-button bg-tasami-purple/15"
          aria-hidden
        />
        <div className="h-2 w-32 animate-pulse rounded-full bg-tasami-purple/10" />
        <p className="sr-only">Loading…</p>
      </div>
    </div>
  );
}
