import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  /** Mark size in pixels (square) */
  size?: number;
  /** Show locale wordmark next to the mark */
  withWordmark?: boolean;
  wordmark?: string;
  /** Short line under the brand name — always visible when set */
  slogan?: string;
  /** Prefer light wordmark for dark purple backgrounds */
  onDark?: boolean;
  /** Official stacked lockup: icon + Arabic + English + tagline */
  lockup?: boolean;
  /** Preload the mark — use in the header/hero only */
  priority?: boolean;
};

/**
 * Official KHALSANA / خَلْصَانَة identity.
 * Compact header uses the K-checkmark crop + locale wordmark.
 * lockup shows the full stacked official artwork.
 */
export default function BrandLogo({
  className = "",
  size = 40,
  withWordmark = false,
  wordmark = "خَلْصَانَة",
  slogan,
  onDark = true,
  lockup = false,
  priority = false,
}: BrandLogoProps) {
  const label = [wordmark, slogan].filter(Boolean).join(" — ");
  const wordColor = onDark ? "#FFFFFF" : "#0C021C";
  const sloganColor = onDark ? "rgba(198,165,255,0.95)" : "#5C5E6B";

  if (lockup) {
    return (
      <span className={`inline-flex ${className}`} aria-label={label}>
        <span className="overflow-hidden rounded-3xl bg-white shadow-soft">
          <Image
            src="/logo.png"
            alt={wordmark}
            width={320}
            height={400}
            className="h-auto w-[8.5rem] object-contain object-center sm:w-[10.5rem]"
            priority={priority}
          />
        </span>
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        className="relative block shrink-0 overflow-hidden rounded-[14px] bg-white"
        style={{ width: size, height: size }}
        aria-hidden
      >
        <Image
          src="/logo.png"
          alt=""
          fill
          sizes={`${size}px`}
          className="scale-[1.7] object-cover object-[50%_11%]"
          priority={priority}
        />
      </span>
      {withWordmark && (
        <span className="flex min-w-0 flex-col items-start leading-none">
          <span
            className="font-brand text-[1.35rem] font-normal sm:text-[1.45rem]"
            style={{ color: wordColor }}
          >
            {wordmark}
          </span>
          {slogan ? (
            <span
              className="font-brand-slogan mt-1.5 text-[0.65rem] leading-snug sm:text-[0.7rem]"
              style={{ color: sloganColor }}
            >
              {slogan}
            </span>
          ) : null}
        </span>
      )}
    </span>
  );
}
