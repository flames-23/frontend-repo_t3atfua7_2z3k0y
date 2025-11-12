import { useMemo } from "react";
import { motion } from "framer-motion";

function Node({ x, y, level }) {
  const size = 7 - level;
  return (
    <g transform={`translate(${x}, ${y})`}>
      <circle r={size} className="fill-white/80" />
    </g>
  );
}

function Connector({ x1, y1, x2, y2 }) {
  return (
    <line x1={x1} y1={y1} x2={x2} y2={y2} className="stroke-white/10" strokeWidth={1} />
  );
}

export default function MLMNetwork() {
  const { nodes, links } = useMemo(() => {
    const levels = 5;
    const width = 900;
    const height = 360;
    const nodes = [];
    const links = [];
    let id = 0;

    const centerX = width / 2;
    const startY = 30;

    // Generate a pyramid hierarchy (binary-ish branching)
    const positions = [[{ id: id++, x: centerX, y: startY, level: 1 }]];
    for (let l = 2; l <= levels; l++) {
      const prev = positions[l - 2];
      const current = [];
      const count = l + 1; // wider each level
      for (let i = 0; i < count; i++) {
        const x = ((i + 1) / (count + 1)) * 900;
        const y = startY + (l - 1) * 70;
        current.push({ id: id++, x, y, level: l });
      }
      positions.push(current);
      // Connect each child to nearest two parents
      current.forEach((c, i) => {
        const pIndex = Math.max(0, Math.min(prev.length - 1, Math.round((i / count) * (prev.length - 1))));
        const parents = [prev[pIndex], prev[Math.min(prev.length - 1, pIndex + 1)]].filter(Boolean);
        parents.forEach((p) => links.push({ source: p, target: c }));
      });
    }

    positions.forEach((arr) => nodes.push(...arr));

    return { nodes, links, width, height };
  }, []);

  return (
    <section className="relative bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-medium">Jaringan Hierarki MLM</h2>
          <p className="text-zinc-400 mt-2 max-w-2xl">Visualisasi struktur kompleks yang memetakan relasi sponsor–downline dengan densitas tinggi.</p>
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4">
          <svg viewBox="0 0 900 380" className="w-full h-[380px]">
            {links.map((l, idx) => (
              <Connector key={idx} x1={l.source.x} y1={l.source.y} x2={l.target.x} y2={l.target.y} />
            ))}
            {nodes.map((n) => (
              <Node key={n.id} x={n.x} y={n.y} level={n.level} />
            ))}
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
