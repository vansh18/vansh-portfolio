import { projects } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const accents = ["var(--color-gold)", "var(--color-teal)"];

function StackTags({ stack }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {stack.map((s) => (
        <li
          key={s}
          className="font-mono text-[0.68rem] uppercase tracking-widest text-paper-dim border border-ink-line rounded-full px-3 py-1"
        >
          {s}
        </li>
      ))}
    </ul>
  );
}

function ProjectCard({ project, index }) {
  const accent = accents[index % accents.length];

  return (
    <Reveal
      delay={index * 0.08}
      className="group relative flex flex-col justify-between rounded-2xl border border-ink-line bg-ink-raised p-8 sm:p-10 transition-colors duration-300 accent-hover-border"
      style={{ "--accent-color": accent }}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(480px circle at 50% 0%, color-mix(in oklab, ${accent} 10%, transparent), transparent 60%)`,
        }}
        aria-hidden="true"
      />

      <div className="relative">
        <div className="flex items-center justify-between gap-4">
          <p className="eyebrow" style={{ color: accent }}>
            {project.featured ? "Featured build" : "Project"} · {project.date}
          </p>
        </div>

        <h3 className="mt-4 font-display font-bold text-3xl sm:text-4xl text-paper tracking-tight">
          {project.name}
        </h3>
        <p className="mt-2 text-paper-dim">{project.subtitle}</p>

        <p className="mt-6 text-paper-dim leading-relaxed max-w-xl">{project.description}</p>

        <ul className="mt-6 space-y-2.5">
          {project.points.slice(0, project.featured ? 4 : 3).map((p, i) => (
            <li key={i} className="text-paper-dim leading-relaxed pl-5 relative max-w-xl">
              <span
                className="absolute left-0 top-[0.65em] w-2 h-px"
                style={{ backgroundColor: accent }}
              />
              {p}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative mt-8 pt-6 border-t border-ink-line flex flex-wrap items-center justify-between gap-4">
        <StackTags stack={project.stack} />

        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-2 font-mono text-xs uppercase tracking-widest transition-colors hover:text-paper"
            style={{ color: accent }}
          >
            Go to project
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        )}
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-24 sm:py-32 border-t border-ink-line">
      <div className="container-page">
        <Reveal>
          <SectionHeading eyebrow="Selected work" title="Projects." />
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
