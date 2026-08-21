import { motion, useReducedMotion } from "framer-motion";
import { profile } from "../data/portfolio";
import SystemTrace from "./SystemTrace";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 sm:pt-44 sm:pb-32">
      {/* Decorative background: soft grid + subtle trace graphic (page-level color glow lives in AmbientBackground) */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(243,240,234,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(243,240,234,0.06) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "linear-gradient(to bottom, black, transparent 78%)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent 78%)",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.14]">
          <div className="w-[130%] max-w-4xl">
            <SystemTrace subtle />
          </div>
        </div>
      </div>

      <div className="relative z-10 container-page">
        <div className="grid lg:grid-cols-[1fr_auto] gap-14 lg:gap-12 items-center">
          <motion.div
            variants={reduce ? undefined : container}
            initial={reduce ? "show" : "hidden"}
            animate="show"
          >
            <motion.div
              variants={item}
              className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-ink-line bg-ink-raised px-4 py-1.5"
            >
              <span className="relative flex h-2 w-2">
                <span
                  className={`absolute inline-flex h-full w-full rounded-full bg-gold ${
                    reduce ? "" : "animate-ping"
                  } opacity-60`}
                />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
              </span>
              <span className="font-mono text-[0.68rem] uppercase tracking-widest text-paper-dim">
                {profile.status}
              </span>
            </motion.div>

            <motion.p variants={item} className="eyebrow mb-6">
              {profile.role}
            </motion.p>

            <motion.h1
              variants={item}
              className="font-display font-extrabold text-paper leading-[0.98] tracking-tight text-[15vw] xs:text-6xl sm:text-7xl lg:text-[5.4rem]"
            >
              Vansh Gupta
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-8 max-w-xl text-lg sm:text-xl text-paper-dim leading-relaxed"
            >
              {profile.tagline}
            </motion.p>

            <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={profile.resumeUrl}
                className="inline-flex items-center justify-center px-6 py-3.5 bg-paper text-ink font-medium text-sm rounded-full hover:bg-gold transition-colors duration-300"
              >
                View Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3.5 border border-ink-line text-paper font-medium text-sm rounded-full hover:border-gold hover:text-gold transition-colors duration-300"
              >
                Get in Touch
              </a>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-12 flex items-center gap-6 font-mono text-xs uppercase tracking-widest text-paper-faint"
            >
              <a href={profile.github} target="_blank" rel="noreferrer" className="link-underline hover:text-paper transition-colors">
                GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="link-underline hover:text-paper transition-colors">
                LinkedIn
              </a>
              <a href={`mailto:${profile.email}`} className="link-underline hover:text-paper transition-colors">
                Email
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="hidden sm:flex justify-center lg:justify-end"
          >
            <div className="w-48 lg:w-56 aspect-[4/5] rounded-2xl overflow-hidden border border-ink-line bg-ink-raised shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
              <img
                src="/portrait.jpeg"
                alt="Vansh Gupta"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
