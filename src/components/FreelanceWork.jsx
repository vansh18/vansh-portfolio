import { useState } from "react";
import { additionalWork } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import GalleryModal from "./GalleryModal";

const accents = ["var(--color-teal)", "var(--color-violet)", "var(--color-gold)"];

export default function FreelanceWork() {
  const [active, setActive] = useState(null);

  return (
    <section id="work" className="scroll-mt-20 py-24 sm:py-32 border-t border-ink-line">
      <div className="container-page">
        <Reveal>
          <SectionHeading eyebrow="Additional work" title="Paid client projects." />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalWork.map((project, i) => {
            const accent = accents[i % accents.length];
            return (
              <Reveal
                key={project.id}
                delay={i * 0.07}
                className="group flex flex-col rounded-2xl border border-ink-line bg-ink-raised overflow-hidden transition-all duration-300 hover:-translate-y-1 accent-hover-border"
                style={{ "--accent-color": accent }}
              >
                <div className="p-4 pb-0">
                  <div className="aspect-[16/10] overflow-hidden rounded-lg border border-ink-line bg-ink">
                    <img
                      src={`/work/${project.id}/1.${project.imageExt}`}
                      alt={`${project.name} screenshot`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex items-center justify-between gap-3">
                    <p className="eyebrow" style={{ color: accent }}>
                      {project.tagline}
                    </p>
                    {project.paid && (
                      <span className="font-mono text-[0.62rem] uppercase tracking-widest text-paper-faint border border-ink-line rounded-full px-2.5 py-1">
                        Paid project
                      </span>
                    )}
                  </div>

                  <h3 className="mt-3 font-display font-semibold text-xl text-paper leading-snug">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-sm text-paper-dim leading-relaxed">
                    {project.description}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((t) => (
                      <li
                        key={t}
                        className="font-mono text-[0.62rem] uppercase tracking-widest text-paper-faint border border-ink-line rounded-full px-2.5 py-1"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={() => setActive(project.id)}
                    className="mt-6 inline-flex cursor-pointer items-center gap-2 font-mono text-xs uppercase tracking-widest transition-colors self-start"
                    style={{ color: accent }}
                  >
                    View project images
                    <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      <GalleryModal
        project={additionalWork.find((p) => p.id === active) ?? null}
        accent={accents[additionalWork.findIndex((p) => p.id === active) % accents.length] ?? "var(--color-gold)"}
        onClose={() => setActive(null)}
      />
    </section>
  );
}
