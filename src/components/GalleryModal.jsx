import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function GalleryModal({ project, accent, onClose }) {
  const [zoomed, setZoomed] = useState(null);

  useEffect(() => {
    if (!project) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        if (zoomed !== null) setZoomed(null);
        else onClose();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, zoomed, onClose]);

  const handleClose = () => {
    setZoomed(null);
    onClose();
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/90 backdrop-blur-sm p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${project.name} project images`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) handleClose();
          }}
        >
          <motion.div
            className="relative flex w-full max-w-3xl max-h-[85vh] flex-col rounded-2xl border border-ink-line bg-ink-raised p-6 sm:p-8"
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="flex items-start justify-between gap-6 mb-6 shrink-0">
              <div>
                <p className="eyebrow" style={{ color: accent }}>
                  Project images
                </p>
                <h3 className="mt-2 font-display font-semibold text-2xl text-paper">
                  {project.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close gallery"
                className="shrink-0 flex h-9 w-9 items-center justify-center rounded-full border border-ink-line text-paper-dim hover:text-paper hover:border-gold/50 transition-colors"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="grid sm:grid-cols-2 gap-5 overflow-y-auto pr-1">
              {Array.from({ length: project.imageCount }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setZoomed(i + 1)}
                  className="group aspect-video overflow-hidden rounded-lg border border-ink-line bg-ink"
                >
                  <img
                    src={`/work/${project.id}/${i + 1}.${project.imageExt}`}
                    alt={`${project.name} screenshot ${i + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          <AnimatePresence>
            {zoomed !== null && (
              <motion.div
                className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 sm:p-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => {
                  if (e.target === e.currentTarget) setZoomed(null);
                }}
              >
                <motion.img
                  src={`/work/${project.id}/${zoomed}.${project.imageExt}`}
                  alt={`${project.name} screenshot ${zoomed}, enlarged`}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="max-h-full max-w-full rounded-lg border border-ink-line object-contain"
                />
                <button
                  type="button"
                  onClick={() => setZoomed(null)}
                  aria-label="Close enlarged image"
                  className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full border border-ink-line bg-ink-raised text-paper-dim hover:text-paper hover:border-gold/50 transition-colors"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
