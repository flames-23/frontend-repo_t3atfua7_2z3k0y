import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 border-b border-zinc-900/60 bg-black/60 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-6 rounded-sm bg-white" />
          <span className="text-white font-medium tracking-wide">HAVN</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-zinc-400 text-sm">
          <a href="#network" className="hover:text-white transition-colors">Jaringan</a>
          <a href="#flow" className="hover:text-white transition-colors">Flow</a>
          <a href="#finance" className="hover:text-white transition-colors">Keuangan</a>
        </nav>
        <button className="md:hidden text-zinc-400" aria-label="Menu">
          <Menu size={20} />
        </button>
      </div>
    </header>
  );
}
