// A generated stand-in for a project screenshot: browser-style chrome over a
// diagonal-hatch pattern. Swap for real screenshots by replacing this
// component's usage with an <img> once assets are available (see README).
export default function PlaceholderShot({ label, accent = "var(--color-gold)", className = "" }) {
  const patternId = `hatch-${label.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div
      className={`relative flex flex-col overflow-hidden rounded-lg border border-ink-line bg-ink ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-ink-line px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-ink-line" />
        <span className="h-2 w-2 rounded-full bg-ink-line" />
        <span className="h-2 w-2 rounded-full bg-ink-line" />
      </div>
      <svg className="flex-1 w-full h-full" viewBox="0 0 320 200" preserveAspectRatio="none">
        <defs>
          <pattern id={patternId} width="14" height="14" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="14" stroke={accent} strokeOpacity="0.14" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="320" height="200" fill={`url(#${patternId})`} />
        <text
          x="160"
          y="105"
          textAnchor="middle"
          fill="var(--color-paper-faint)"
          fontFamily="IBM Plex Mono, monospace"
          fontSize="10"
          letterSpacing="1.5"
        >
          {label.toUpperCase()}
        </text>
      </svg>
    </div>
  );
}
