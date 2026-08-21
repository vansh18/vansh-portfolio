// A single, page-level ambient wash rendered once behind all content.
// Using one fixed layer (rather than a glow per section) avoids the hard
// seams that show up when each section clips its own blob at its own
// boundary — colors here blend continuously as the page scrolls past them.
export default function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute -top-32 right-[-8%] h-[34rem] w-[34rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--color-gold) 16%, transparent), transparent 70%)",
        }}
      />
      <div
        className="absolute top-[38%] left-[-10%] h-[30rem] w-[30rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--color-teal) 14%, transparent), transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-[6%] right-[-6%] h-[28rem] w-[28rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--color-violet) 14%, transparent), transparent 70%)",
        }}
      />
    </div>
  );
}
