import Image from "next/image";

const LOCKUP = { w: 428, h: 388 };
const MARK = { w: 163, h: 163 };

const LOCKUP_WIDTH: Record<"sm" | "md" | "lg", string> = {
  sm: "w-[8.75rem] sm:w-[10.5rem]",
  md: "w-[11rem] sm:w-[13.5rem] lg:w-[15rem]",
  lg: "w-[13.5rem] sm:w-[17.5rem] lg:w-[21.5rem] xl:w-[24rem]",
};

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
  /** Lockup width on laptop/desktop */
  lockupSize?: "sm" | "md" | "lg";
  /** Preload the mark — use in the header/hero only */
  priority?: boolean;
};

/**
 * Official KHALSANA / خَلْصَانَة identity.
 * Transparent PNG lockup for hero/footer; square K-mark in compact chrome.
 */
export default function BrandLogo({
  className = "",
  size = 40,
  withWordmark = false,
  wordmark = "خَلْصَانَة",
  slogan,
  onDark = true,
  lockup = false,
  lockupSize = "md",
  priority = false,
}: BrandLogoProps) {
  const label = [wordmark, slogan].filter(Boolean).join(" — ");
  const wordColor = onDark ? "#FFFFFF" : "#0C021C";
  const sloganColor = onDark ? "rgba(198,165,255,0.95)" : "#5C5E6B";

  if (lockup) {
    return (
      <span className={`inline-flex ${className}`} aria-label={label}>
        <Image
          src="/logo.png"
          alt={wordmark}
          width={LOCKUP.w}
          height={LOCKUP.h}
          unoptimized
          quality={100}
          priority={priority}
          sizes="(min-width:1280px) 384px, (min-width:1024px) 344px, (min-width:640px) 280px, 216px"
          className={`h-auto ${LOCKUP_WIDTH[lockupSize]} max-w-full object-contain object-center`}
        />
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src="/logo-mark.png"
        alt=""
        width={MARK.w}
        height={MARK.h}
        unoptimized
        quality={100}
        priority={priority}
        sizes={`${size * 2}px`}
        className="shrink-0 object-contain object-center"
        style={{ width: size, height: size }}
        aria-hidden
      />
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
