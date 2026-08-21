import { achievements } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const accents = ["var(--color-gold)", "var(--color-teal)", "var(--color-violet)"];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 sm:py-32 border-t border-ink-line">
      <div className="container-page">
        <Reveal>
          <SectionHeading eyebrow="Achievements" title="Outside the day job." />
        </Reveal>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((a, i) => {
            const accent = accents[i % accents.length];
            return (
              <Reveal
                as="li"
                key={a.name}
                delay={(i % 3) * 0.06}
                className="rounded-2xl border border-ink-line bg-ink-raised p-6 transition-all duration-300 hover:-translate-y-1 accent-hover-border"
                style={{ "--accent-color": accent }}
              >
                <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: accent }}>
                  {a.result}
                </p>
                <p className="text-paper leading-snug">{a.name}</p>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
