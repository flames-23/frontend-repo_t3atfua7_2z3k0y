import { useMemo } from "react";
import { motion } from "framer-motion";

function LineChart({ points, label }) {
  const d = useMemo(() => {
    if (!points.length) return "";
    const [first, ...rest] = points;
    let path = `M ${first[0]} ${first[1]}`;
    rest.forEach(([x, y]) => (path += ` L ${x} ${y}`));
    return path;
  }, [points]);

  return (
    <svg viewBox="0 0 400 160" className="w-full h-40">
      <defs>
        <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0.5" />
          <stop offset="100%" stopColor="white" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="none" />
      <path d={d} className="stroke-white/80" strokeWidth="2" fill="none" />
      <polyline
        points={points.map((p) => p.join(",")).join(" ")}
        className="fill-[url(#grad)] stroke-none opacity-20"
      />
      <text x="10" y="18" className="fill-white/60 text-xs">{label}</text>
    </svg>
  );
}

function BarChart({ data, label }) {
  const max = Math.max(...data.map((d) => d.value), 1);
  const w = 400;
  const h = 160;
  const bw = w / data.length - 8;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-40">
      {data.map((d, i) => {
        const x = i * (bw + 8) + 8;
        const barH = (d.value / max) * (h - 30);
        return (
          <g key={i}>
            <rect x={x} y={h - barH - 10} width={bw} height={barH} className="fill-white/70" />
          </g>
        );
      })}
      <text x="10" y="18" className="fill-white/60 text-xs">{label}</text>
    </svg>
  );
}

export default function FinanceCharts() {
  const linePoints = useMemo(() => {
    const pts = [];
    for (let i = 0; i < 20; i++) {
      const x = 20 + i * 18;
      const y = 120 - Math.sin(i / 2) * 20 - i * 2;
      pts.push([x, Math.max(30, Math.min(130, y))]);
    }
    return pts;
  }, []);

  const commissionBars = useMemo(() => {
    return Array.from({ length: 10 }).map((_, i) => ({ level: i + 1, value: Math.max(2, 14 - i) * (1 + (i % 2) * 0.2) }));
  }, []);

  return (
    <section className="relative bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-medium">Grafik Keuangan</h2>
          <p className="text-zinc-400 mt-2 max-w-2xl">Komisi multi-level dan penarikan FIFO divisualisasikan untuk transparansi penuh.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4">
            <LineChart points={linePoints} label="Akumulasi Komisi (Projected)" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4">
            <BarChart data={commissionBars} label="Distribusi Komisi per Level" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 md:col-span-2">
            <div className="flex items-start justify-between gap-6 flex-col sm:flex-row">
              <div className="min-w-0">
                <p className="text-sm text-zinc-400">Withdrawal Strategy</p>
                <h3 className="text-xl">FIFO Queue</h3>
                <p className="text-zinc-400 mt-2 max-w-xl">Penarikan dieksekusi berdasarkan antrian pertama-masuk-pertama-keluar untuk menjaga fairness dan auditability.</p>
              </div>
              <div className="flex-1 grid grid-cols-5 gap-2 w-full sm:w-auto">
                {Array.from({ length: 15 }).map((_, i) => (
                  <div key={i} className={`h-10 rounded border border-zinc-800 flex items-center justify-center text-xs ${i < 5 ? "bg-white/10" : "bg-transparent"}`}>
                    {i + 1}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
