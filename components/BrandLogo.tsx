type BrandLogoProps = {
  className?: string;
  /** Mark size in pixels (square) */
  size?: number;
  /** Show wordmark next to mark */
  withWordmark?: boolean;
  wordmark?: string;
  /** Prefer light mark for dark purple backgrounds */
  onDark?: boolean;
};

/**
 * Tasami brand mark — ascending geometric monogram (excellence / elevation)
 * Colors: purple #2E1A47 · gold #E9C46A · pink #F4A261
 */
export default function BrandLogo({
  className = "",
  size = 40,
  withWordmark = false,
  wordmark = "تسامي",
  onDark = true,
}: BrandLogoProps) {
  const gold = "#E9C46A";
  const pink = "#F4A261";
  const purple = "#2E1A47";
  const fill = onDark ? "rgba(233,196,106,0.16)" : "rgba(46,26,71,0.08)";
  const wordColor = onDark ? "#FFFFFF" : purple;

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
        className="shrink-0"
      >
        <rect width="64" height="64" rx="14" fill={fill} />
        {/* Ascending twin arcs — elevation */}
        <path
          d="M14 44 C22 44 26 28 32 18 C38 28 42 44 50 44"
          stroke={gold}
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M20 44 C25 44 28 34 32 26 C36 34 39 44 44 44"
          stroke={pink}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.9"
        />
        {/* Refined ت baseline + dots */}
        <path
          d="M18 48 H46"
          stroke={gold}
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <circle cx="28" cy="52.5" r="1.6" fill={gold} />
        <circle cx="36" cy="52.5" r="1.6" fill={gold} />
      </svg>
      {withWordmark && (
        <span
          className="text-xl font-light tracking-wide"
          style={{ color: wordColor }}
        >
          {wordmark}
        </span>
      )}
    </span>
  );
}
