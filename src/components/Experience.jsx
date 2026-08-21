import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experience } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function ExperienceRow({ item, index }) {
  const [expanded, setExpanded] = useState(false);
  const panelId = `experience-panel-${index}`;

  return (
    <Reveal as="li" delay={index * 0.04} className="border-t border-ink-line first:border-t-0">
      <div className="py-8 sm:py-10 grid sm:grid-cols-[9rem_1fr] gap-3 sm:gap-8">
        <p className="font-mono text-xs uppercase tracking-widest text-paper-faint pt-1">
          {item.period}
          {item.current && <span className="ml-2 text-gold">· current</span>}
        </p>

        <div>
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <h3 className="font-display font-semibold text-xl sm:text-2xl text-paper">
              {item.org}
            </h3>
            <p className="text-sm text-paper-dim">{item.role}</p>
          </div>

          <p className="mt-3 text-paper-dim leading-relaxed max-w-2xl">{item.summary}</p>

          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            aria-controls={panelId}
            className="mt-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-gold hover:text-paper transition-colors"
          >
            {expanded ? "Hide details" : "Show details"}
            <span
              className={`inline-block transition-transform duration-300 ${expanded ? "rotate-45" : ""}`}
              aria-hidden="true"
            >
              +
            </span>
          </button>

          <AnimatePresence initial={false}>
            {expanded && (
              <motion.ul
                id={panelId}
                key="panel"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="pt-5 space-y-3">
                  {item.details.map((d, i) => (
                    <li
                      key={i}
                      className="text-paper-dim leading-relaxed pl-5 relative max-w-2xl before:content-[''] before:absolute before:left-0 before:top-[0.65em] before:w-2 before:h-px before:bg-gold"
                    >
                      {d}
                    </li>
                  ))}
                </div>
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Reveal>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 border-t border-ink-line">
      <div className="container-page">
        <Reveal>
          <SectionHeading eyebrow="Experience" title="Where the work happened." />
        </Reveal>

        <ul>
          {experience.map((item, i) => (
            <ExperienceRow key={item.org} item={item} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}
