import BrandLogo from "@/components/BrandLogo";

type BrandHeaderProps = {
  name: string;
  slogan: string;
  onDark?: boolean;
  priority?: boolean;
  className?: string;
};

export default function BrandHeader({
  name,
  slogan,
  onDark = false,
  priority = false,
  className = "",
}: BrandHeaderProps) {
  return (
    <span
      className={`brand-header inline-flex min-w-0 max-w-[min(100%,11.5rem)] items-center gap-2.5 sm:max-w-none sm:gap-3 ${className}`}
    >
      <BrandLogo mark markSize="sm" wordmark={name} priority={priority} />
      <span className="brand-header-copy flex min-w-0 flex-col justify-center">
        <span
          className={`brand-header-name font-display truncate ${
            onDark ? "text-white" : "text-[#1A3550]"
          }`}
        >
          {name}
        </span>
        <span
          className={`brand-header-slogan truncate ${
            onDark ? "text-white/78" : "text-[#007AFF]"
          }`}
        >
          {slogan}
        </span>
      </span>
    </span>
  );
}
