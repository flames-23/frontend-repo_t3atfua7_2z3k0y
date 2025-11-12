import { motion } from "framer-motion";
import { ShieldCheck, Webhook, Lock } from "lucide-react";

function Box({ title, subtitle, icon: Icon }) {
  return (
    <div className="relative rounded-lg border border-zinc-800 bg-zinc-900/40 p-5">
      <div className="flex items-center gap-2 text-zinc-300">
        {Icon ? <Icon size={18} className="text-white/80" /> : null}
        <span className="text-sm uppercase tracking-wide text-zinc-400">{title}</span>
      </div>
      <div className="mt-2 text-white text-lg">{subtitle}</div>
    </div>
  );
}

function Arrow() {
  return <div className="h-10 w-px mx-auto bg-gradient-to-b from-zinc-700 to-transparent" />;
}

export default function Flowchart() {
  return (
    <section className="relative bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-medium">Flow Transaksi Otomatis & Aman</h2>
          <p className="text-zinc-400 mt-2 max-w-2xl">Dari event SaaS ke komisi—ditandatangani HMAC, diproses webhook, dan dicatat dengan idempoten.</p>
        </div>
        <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <Box title="Partner SaaS" subtitle="Event: purchase.created" icon={Webhook} />
            <Arrow />
            <Box title="HAVN Webhook" subtitle="Validasi HMAC-SHA256" icon={Lock} />
            <Arrow />
            <Box title="Router Komisi" subtitle="Distribusi Multi-Level" icon={ShieldCheck} />
          </div>
          <div>
            <Box title="Ledger" subtitle="Entry debit/kredit" />
            <Arrow />
            <Box title="Idempoten" subtitle="Replay-safe token" />
            <Arrow />
            <Box title="Queue" subtitle="Retry backoff" />
          </div>
          <div>
            <Box title="Payout" subtitle="Withdrawal FIFO" />
            <Arrow />
            <Box title="Notifikasi" subtitle="Webhook/Email" />
            <Arrow />
            <Box title="Audit" subtitle="Traceable" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
