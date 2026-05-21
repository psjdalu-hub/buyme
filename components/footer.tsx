// components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    /* 🚀 FIXED: Added mt-auto to push it to the bottom, z-10 for layering, and w-full */
    <footer className="w-full bg-slate-950 text-slate-400 py-12 relative z-10 overflow-hidden mt-auto ">
      {/* Premium subtle gradient line at the very top of the footer */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-emerald-500 via-teal-500 to-blue-600 opacity-50"></div>

      {/* 🚀 FIXED: Wrapped the contents inside an explicit container that centers everything perfectly */}
      <div className="max-w-8xl w-full mx-auto px-6 lg:px-8 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center">
          
          {/* Brand Section */}
          <div className="flex flex-col gap-5 ">
            <span className="font-bold text-2xl tracking-tight text-white drop-shadow-md">
              BUYME.lk<span className="text-emerald-500">.</span>
            </span>

            <p className="tracking-tight  align-center leading-relaxed text-slate-500 w-full px-28">
              Your one-stop shop for the latest tech gadgets, unbeatable deals, and a seamless shopping experience. Elevate your tech game with us!
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-5 items-center">
            <h3 className="text-white font-semibold uppercase tracking-wider text-sm">Navigation</h3>
            <Link href="/" className="hover:text-emerald-400 transition-colors duration-300 w-fit">
              Home
            </Link>
            <Link href="/products" className="hover:text-emerald-400 transition-colors duration-300 w-fit">
              Products
            </Link>
            <Link href="/about" className="hover:text-emerald-400 transition-colors duration-300 w-fit">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-emerald-500 transition-colors">
  Contact Us
</Link>
          </div>

          {/* Socials / Legal */}
          <div className="flex flex-col gap-5">
            <h3 className="text-white font-semibold uppercase tracking-wider text-sm">Connect</h3>
            <div className="flex flex-col gap-5 items-center">
            <a href="#" className="hover:text-emerald-400 transition-colors duration-300 w-fit">Twitter / X</a>
            <a href="#" className="hover:text-emerald-400 transition-colors duration-300 w-fit">GitHub</a>
            <a href="#" className="hover:text-emerald-400 transition-colors duration-300 w-fit">LinkedIn</a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Section */} 
        <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-center  items-center gap-4 text-xs font-medium text-slate-600">
          <p>© {new Date().getFullYear()} BUYME.lk. All rights reserved. BY DN</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}