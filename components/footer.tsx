import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 relative overflow-hidden">
      {/* Premium subtle gradient line at the very top of the footer */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-linear-to-r from-emerald-500 via-teal-500 to-blue-600 opacity-50"></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <span className="font-bold text-2xl tracking-tight text-white drop-shadow-md">
              DEVELO<span className="text-emerald-500">.</span>
            </span>
            <p className="text-sm leading-relaxed text-slate-500 max-w-xs">
              Building the future of web development with Next.js 15, TypeScript, and stunning premium designs.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold uppercase tracking-wider text-sm">Navigation</h3>
            <Link href="/" className="hover:text-emerald-400 transition-colors duration-300 w-fit">
              Home
            </Link>
            <Link href="/dashboard" className="hover:text-emerald-400 transition-colors duration-300 w-fit">
              Dashboard
            </Link>
            <Link href="/about" className="hover:text-emerald-400 transition-colors duration-300 w-fit">
              About Us
            </Link>
          </div>

          {/* Socials / Legal */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold uppercase tracking-wider text-sm">Connect</h3>
            <a href="#" className="hover:text-emerald-400 transition-colors duration-300 w-fit">Twitter / X</a>
            <a href="#" className="hover:text-emerald-400 transition-colors duration-300 w-fit">GitHub</a>
            <a href="#" className="hover:text-emerald-400 transition-colors duration-300 w-fit">LinkedIn</a>
          </div>

        </div>

        {/* Bottom Copyright Section */}
        <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-600">
          <p>© {new Date().getFullYear()} Develo. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}