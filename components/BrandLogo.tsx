import Image from "next/image";

/** Official Tasami lockup dimensions (trimmed transparent PNG). */
export const LOGO_LOCKUP = { w: 266, h: 340 } as const;
export const LOGO_MARK = { w: 259, h: 259 } as const;

const LOCKUP_WIDTH: Record<"xs" | "sm" | "md" | "lg", string> = {
  xs: "h-9 w-auto sm:h-10",
  sm: "h-10 w-auto sm:h-11",
  md: "h-12 w-auto sm:h-14",
  lg: "h-16 w-auto sm:h-[4.5rem] lg:h-20",
};

const MARK_SIZE: Record<"sm" | "md" | "lg", number> = {
  sm: 36,
  md: 44,
  lg: 52,
};

type BrandLogoProps = {
  className?: string;
  /** Icon-only mark for compact chrome (favicon-sized slots). */
  mark?: boolean;
  markSize?: keyof typeof MARK_SIZE;
  /** Full official lockup (icon + Arabic + TASAMI + tagline). */
  lockupSize?: keyof typeof LOCKUP_WIDTH;
  wordmark?: string;
  onDark?: boolean;
  priority?: boolean;
};

/**
 * Official Tasami identity — always the provided transparent PNG assets.
 */
export default function BrandLogo({
  className = "",
  mark = false,
  markSize = "md",
  lockupSize = "sm",
  wordmark = "تَسَامِي",
  priority = false,
}: BrandLogoProps) {
  if (mark) {
    const px = MARK_SIZE[markSize];
    return (
      <span className={`inline-flex shrink-0 ${className}`} aria-label={wordmark}>
        <Image
          src="/logo-mark.png"
          alt=""
          width={LOGO_MARK.w}
          height={LOGO_MARK.h}
          unoptimized
          priority={priority}
          sizes={`${px * 2}px`}
          className="h-auto w-auto bg-transparent object-contain object-center"
          style={{ width: px, height: px }}
          aria-hidden
        />
      </span>
    );
  }

  return (
    <span className={`inline-flex shrink-0 ${className}`} aria-label={wordmark}>
      <Image
        src="/logo.png"
        alt={wordmark}
        width={LOGO_LOCKUP.w}
        height={LOGO_LOCKUP.h}
        unoptimized
        quality={100}
        priority={priority}
        sizes="(min-width:1024px) 220px, (min-width:640px) 180px, 140px"
        className={`bg-transparent object-contain object-center ${LOCKUP_WIDTH[lockupSize]}`}
      />
    </span>
  );
}
