import { skillGroups } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const accents = ["var(--color-gold)", "var(--color-teal)", "var(--color-violet)", "var(--color-gold)"];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 py-24 sm:py-32 border-t border-ink-line">
      <div className="container-page">
        <Reveal>
          <SectionHeading eyebrow="Skills" title="Tools of the trade." />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillGroups.map((group, i) => {
            const accent = accents[i % accents.length];
            return (
              <Reveal
                key={group.label}
                delay={i * 0.07}
                className="rounded-2xl border border-ink-line bg-ink-raised p-6 transition-colors duration-300 accent-hover-border"
                style={{ "--accent-color": accent }}
              >
                <div className="flex items-center gap-2.5 mb-5">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: accent }} />
                  <h3 className="font-mono text-xs uppercase tracking-widest text-paper">
                    {group.label}
                  </h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((s) => (
                    <li
                      key={s}
                      className="text-sm text-paper-dim border border-ink-line rounded-full px-3 py-1.5"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
