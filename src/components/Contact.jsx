import { profile } from "../data/portfolio";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-24 sm:py-32 border-t border-ink-line">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow mb-6">Contact</p>
          <h2 className="font-display font-bold text-paper text-4xl sm:text-5xl lg:text-6xl tracking-tight max-w-3xl leading-[1.05]">
            Let&rsquo;s build something useful.
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-paper-dim max-w-xl leading-relaxed">
            I&rsquo;m always interested in interesting problems, ambitious products, and
            opportunities to build meaningful software.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14 grid gap-5 max-w-3xl sm:grid-cols-[1.6fr_1fr_1fr]">
          <a
            href={`mailto:${profile.email}`}
            className="group rounded-2xl border border-ink-line bg-ink-raised p-6 transition-colors duration-300 hover:border-gold/50"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-paper-faint mb-2">
              Email
            </p>
            <p className="text-paper group-hover:text-gold transition-colors whitespace-nowrap">
              {profile.email}
            </p>
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-ink-line bg-ink-raised p-6 transition-colors duration-300 hover:border-gold/50"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-paper-faint mb-2">
              LinkedIn
            </p>
            <p className="text-paper group-hover:text-gold transition-colors">vansh-gupta</p>
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-ink-line bg-ink-raised p-6 transition-colors duration-300 hover:border-gold/50"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-paper-faint mb-2">
              GitHub
            </p>
            <p className="text-paper group-hover:text-gold transition-colors">vansh18</p>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
