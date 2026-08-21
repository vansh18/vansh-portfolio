export default function SectionHeading({ eyebrow, title, className = "" }) {
  return (
    <div className={`mb-12 sm:mb-16 ${className}`}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="font-display font-bold text-paper text-3xl sm:text-4xl tracking-tight">
        {title}
      </h2>
    </div>
  );
}
