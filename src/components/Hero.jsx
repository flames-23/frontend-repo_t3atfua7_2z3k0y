import { motion } from "framer-motion";
import { ArrowRight, Link as LinkIcon } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-black text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.04)_40%,transparent)]" />
        <div className="absolute -inset-40 opacity-[0.03]" aria-hidden>
          <svg className="w-full h-full" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-16 sm:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 text-sm text-zinc-400 mb-6">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-300/40" />
            <span>HAVN — MLM Voucher SaaS</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-semibold leading-tight tracking-tight">
            Diciptakan untuk Komisi. Dibangun untuk Skala.
          </h1>
          <p className="mt-6 text-lg text-zinc-400 max-w-2xl">
            Platform B2B ultra-modern untuk jaringan komisi multi-level, automasi payout, dan integrasi partner SaaS yang aman—tanpa kompromi.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#cta-associate"
              className="inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-medium bg-white text-black hover:bg-zinc-100 transition-colors"
            >
              Daftar Associate
              <ArrowRight size={16} />
            </a>
            <a
              href="#cta-integrasi"
              className="inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-medium border border-zinc-700 text-white hover:border-zinc-500 transition-colors"
            >
              <LinkIcon size={16} /> Integrasi Partner SaaS
            </a>
          </div>
        </motion.div>

        <div className="relative mt-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-xl border border-zinc-800/80 bg-zinc-900/50 backdrop-blur p-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { k: "uptime", t: "99.99%", d: "Uptime SLA" },
                { k: "latency", t: "<120ms", d: "Avg API Latency" },
                { k: "security", t: "HMAC", d: "Webhook Signed" },
              ].map((m) => (
                <div key={m.k} className="rounded-lg border border-zinc-800 p-4">
                  <p className="text-zinc-400 text-xs">{m.d}</p>
                  <p className="text-2xl font-semibold mt-1">{m.t}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
