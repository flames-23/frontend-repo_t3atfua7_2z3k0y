export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-900/60 py-10 text-zinc-500">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} HAVN. Semua hak dilindungi.</p>
        <div className="flex items-center gap-6 text-sm">
          <a href="#" className="hover:text-white">Kebijakan</a>
          <a href="#" className="hover:text-white">Keamanan</a>
          <a href="#" className="hover:text-white">Kontak</a>
        </div>
      </div>
    </footer>
  );
}
