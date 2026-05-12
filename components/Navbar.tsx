import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-linear-to-r from-emerald-500 via-teal-500 to-blue-600 backdrop-blur-md border-b border-white/20 sticky top-0 z-50 shadow-md">
      <div className="flex items-center gap-2">
        <span className="font-bold text-xl tracking-tight text-white drop-shadow-md">DEVELO</span>
      </div>
      
      <div className="flex gap-8 text-sm font-semibold text-white/90 items-center">
        <Link href="/" className="hover:text-emerald-200 transition-colors">Home</Link>
        <Link href="/dashboard" className="hover:text-emerald-200 transition-colors">Dashboard</Link>
        {/* Added the About Us link here! */}
        <Link href="/about" className="hover:text-emerald-200 transition-colors">About Us</Link>
      </div>
    </nav>
  );
}