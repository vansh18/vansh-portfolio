import { education } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="py-24 sm:py-32 border-t border-ink-line">
      <div className="container-page">
        <Reveal>
          <SectionHeading eyebrow="Education" title="Foundation." />
        </Reveal>

        <Reveal delay={0.05} className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 max-w-3xl">
          <div>
            <h3 className="font-display font-semibold text-xl sm:text-2xl text-paper">
              {education.school}
            </h3>
            <p className="mt-1 text-paper-dim">
              {education.program} · {education.location}
            </p>
          </div>
          <p className="font-mono text-xs uppercase tracking-widest text-paper-faint">
            {education.period}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
