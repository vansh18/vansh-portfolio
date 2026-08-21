import { motion, useReducedMotion } from "framer-motion";

// Abstract signature graphic: a small trace of nodes and edges standing in
// for a retrieval → agent → response pipeline, kept deliberately unlabeled
// and geometric rather than a literal diagram.
const nodes = [
  { id: "a", x: 40, y: 60 },
  { id: "b", x: 40, y: 200 },
  { id: "c", x: 40, y: 340 },
  { id: "d", x: 220, y: 130 },
  { id: "e", x: 220, y: 270 },
  { id: "f", x: 400, y: 200 },
];

const edges = [
  ["a", "d"],
  ["b", "d"],
  ["b", "e"],
  ["c", "e"],
  ["d", "f"],
  ["e", "f"],
];

const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));

export default function SystemTrace({ subtle = false }) {
  const reduce = useReducedMotion();

  return (
    <svg
      viewBox="0 0 440 400"
      className={subtle ? "w-full h-auto" : "w-full h-auto max-w-md mx-auto lg:max-w-none"}
      role="img"
      aria-hidden={subtle ? "true" : undefined}
      aria-label={
        subtle
          ? undefined
          : "Abstract diagram of nodes connected by traced paths, representing a retrieval and reasoning pipeline"
      }
    >
      {edges.map(([from, to], i) => {
        const a = nodeMap[from];
        const b = nodeMap[to];
        const midX = (a.x + b.x) / 2;
        const d = `M ${a.x} ${a.y} C ${midX} ${a.y}, ${midX} ${b.y}, ${b.x} ${b.y}`;
        return (
          <motion.path
            key={i}
            d={d}
            fill="none"
            stroke={subtle ? "var(--color-paper-faint)" : "var(--color-ink-line)"}
            strokeWidth="1"
            initial={reduce ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.15 + i * 0.09, ease: "easeInOut" }}
          />
        );
      })}

      {edges.map(([from, to], i) => {
        const a = nodeMap[from];
        const b = nodeMap[to];
        const midX = (a.x + b.x) / 2;
        const d = `M ${a.x} ${a.y} C ${midX} ${a.y}, ${midX} ${b.y}, ${b.x} ${b.y}`;
        return (
          <motion.path
            key={`pulse-${i}`}
            d={d}
            fill="none"
            stroke="var(--color-gold)"
            strokeWidth={subtle ? "1" : "1.4"}
            strokeLinecap="round"
            strokeDasharray="6 220"
            initial={{ opacity: 0 }}
            animate={
              reduce
                ? { opacity: 0 }
                : { strokeDashoffset: [220, -220], opacity: [0, subtle ? 0.6 : 0.9, 0] }
            }
            transition={{
              duration: 2.6,
              delay: 1.1 + i * 0.35,
              repeat: Infinity,
              repeatDelay: 3.4,
              ease: "easeInOut",
            }}
          />
        );
      })}

      {nodes.map((n, i) => (
        <motion.g
          key={n.id}
          initial={reduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
        >
          <circle
            cx={n.x}
            cy={n.y}
            r={n.id === "f" && !subtle ? 7 : 5}
            fill={n.id === "f" && !subtle ? "var(--color-gold)" : "var(--color-ink)"}
            stroke={n.id === "f" ? "var(--color-gold)" : "var(--color-paper-faint)"}
            strokeWidth={subtle ? "1.6" : "1.2"}
          />
        </motion.g>
      ))}
    </svg>
  );
}
