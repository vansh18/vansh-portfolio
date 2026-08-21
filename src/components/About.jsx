import { about } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 border-t border-ink-line">
      <div className="container-page">
        <Reveal>
          <SectionHeading eyebrow="About" title="Systems, end to end." />
        </Reveal>

        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20">
          <Reveal delay={0.05}>
            <div className="space-y-6 text-lg sm:text-xl text-paper-dim leading-relaxed max-w-2xl">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="border-t border-ink-line pt-6">
              <p className="eyebrow mb-5">Focus areas</p>
              <ul className="space-y-3">
                {about.focus.map((f) => (
                  <li
                    key={f}
                    className="text-paper text-base border-b border-ink-line pb-3 last:border-b-0"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
