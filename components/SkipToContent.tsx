export default function SkipToContent({ label = "تخطي إلى المحتوى" }: { label?: string }) {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[100] focus:rounded-button focus:bg-tasami-pink focus:px-4 focus:py-2.5 focus:text-sm focus:font-medium focus:text-white focus:shadow-soft"
    >
      {label}
    </a>
  );
}
