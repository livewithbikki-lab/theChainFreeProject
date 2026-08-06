import { SITE } from "@/lib/content";

type LogoProps = {
  size?: number;
  className?: string;
  showWordmark?: boolean;
  variant?: "default" | "on-dark";
};

/** Elephant + open chain — freedom from chains, gentle care */
export default function Logo({
  size = 44,
  className,
  showWordmark = true,
  variant = "default",
}: LogoProps) {
  const onDark = variant === "on-dark";
  const ink = onDark ? "#f7f4ef" : "#1e3d1a";
  const accent = onDark ? "#c5e0c0" : "#2d5a27";
  const badge = onDark ? "rgba(255,255,255,0.12)" : "#e8f0e6";
  const ring = onDark ? "rgba(255,255,255,0.35)" : "rgba(45,90,39,0.28)";
  const eye = onDark ? "#1e3d1a" : "#f7f4ef";
  const eyeDot = onDark ? "#f7f4ef" : "#1e3d1a";
  const tusk = onDark ? "rgba(255,255,255,0.88)" : "#f7f4ef";

  return (
    <span className={`brand-logo${className ? ` ${className}` : ""}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        className="brand-logo-mark"
        aria-hidden={showWordmark ? true : undefined}
        role={showWordmark ? undefined : "img"}
      >
        {!showWordmark ? <title>{SITE.name}</title> : null}

        <circle cx="32" cy="32" r="30" fill={badge} />
        <circle cx="32" cy="32" r="30" stroke={ring} strokeWidth="1.75" />

        {/* Elephant — calm side profile, facing right */}
        <g fill={ink}>
          {/* body */}
          <ellipse cx="28.5" cy="34" rx="11.5" ry="9.5" />
          {/* head */}
          <circle cx="39" cy="28.5" r="8.2" />
          {/* ear */}
          <path d="M31.2 22.5c-4.2.2-7.4 3.2-8.2 7.2-.2 1.2.2 2.4.9 3.4 1.8-3.8 5-6.4 8.9-7.6.2-1.2-.4-2.8-1.6-3z" />
          {/* trunk — relaxed curve down */}
          <path d="M45.8 30.2c2.2.4 3.8 1.8 4.2 3.6.4 1.8-.4 3.6-2 4.6-1.2.8-2.6.8-3.8.2.3-1.2.4-2.4.3-3.6-.1-1.4-.5-2.7-1.1-3.9 0 0 1.2-.8 2.4-.9z" />
          <path d="M47.6 38.2c1 .6 1.6 1.6 1.6 2.8 0 1.4-.8 2.6-2 3.2-1.2.6-2.6.4-3.6-.4.5-1.1.8-2.3.9-3.5.1-.8 0-1.5-.1-2.2.4.1.8.1 1.2.1.7 0 1.4 0 2-.1z" />
          {/* front leg hint */}
          <path d="M24 41.5c.2 2.4.4 4.2.4 5.6 0 .8-.4 1.4-1.2 1.4-.8 0-1.3-.6-1.4-1.4-.2-1.6-.2-3.4 0-5.4.8-.2 1.6-.3 2.2-.2z" />
          <path d="M31.5 42c.3 2.2.5 4 .5 5.2 0 .8-.4 1.3-1.1 1.3s-1.2-.5-1.3-1.3c-.2-1.4-.2-3.2 0-5.2.6 0 1.3 0 1.9 0z" />
          {/* eye */}
          <circle cx="41.2" cy="26.8" r="1.45" fill={eye} />
          <circle cx="41.45" cy="26.9" r="0.72" fill={eyeDot} />
          {/* tusk */}
          <path
            d="M45.2 31.4c1.4.3 2.4 1 2.8 1.8.2.4 0 .75-.35.85-.7.2-1.6-.15-2.5-.85-.5-.4-.75-.85-.7-1.25.05-.3.3-.55.75-.55z"
            fill={tusk}
          />
        </g>

        {/* Open chain link underfoot — “chain free” */}
        <g
          stroke={accent}
          strokeWidth="2.35"
          strokeLinecap="round"
          fill="none"
        >
          <path d="M20.5 51c-2.6 0-4.7-1.7-4.7-3.75S17.9 43.5 20.5 43.5c1.3 0 2.45.4 3.25 1.1" />
          <path d="M26.2 44.6c.8-.7 1.95-1.1 3.25-1.1 2.6 0 4.7 1.7 4.7 3.75S32.05 51 29.45 51c-1.3 0-2.45-.4-3.25-1.1" />
          {/* open gap */}
          <path d="M23.75 45.7v1.45" />
          <path d="M23.75 49.1v1.15" />
        </g>

        {/* Small leaf — nature / care */}
        <path
          d="M47.8 46.2c2.6-1.1 4.3-3.1 4.7-5.3-2.4.55-4.4 2.2-5.3 4.6-.2.55.2.9.6.7z"
          fill={accent}
          opacity="0.75"
        />
      </svg>

      {showWordmark ? (
        <span className="brand-logo-text">
          <span className="brand-logo-name">{SITE.name}</span>
          <span className="brand-logo-loc">{SITE.location}</span>
        </span>
      ) : null}
    </span>
  );
}
