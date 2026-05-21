"use client"; // 🚀 CRITICAL: Required for tracking the mobile menu open/close toggle state

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  // 🚀 STATE: Tracks whether the mobile hamburger dropdown is open or closed
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-slate-900 border-b border-slate-800 fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="text-xl font-black tracking-tight text-white hover:text-emerald-400 transition-colors">
          BUYME.lk
        </Link>

        {/* 💻 DESKTOP MENU (Hidden on screens smaller than md: 768px) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-300">
          <Link href="/" className="hover:text-emerald-400 transition-colors">
            Home
          </Link>
          <Link href="/products" className="hover:text-emerald-400 transition-colors">
            Products
          </Link>
          <Link href="/about" className="hover:text-emerald-400 transition-colors">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-emerald-400 transition-colors">
            Contact Us
          </Link>
        </div>

        {/* 📱 MOBILE HAMBURGER BUTTON (Visible ONLY on mobile/tablets) */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-slate-300 hover:text-white focus:outline-none cursor-pointer p-1"
            aria-label="Toggle Navigation Menu"
          >
            {/* Dynamic CSS Hamburger Icon Lines */}
            <div className="w-6 h-5 flex flex-col justify-between relative">
              <span className={`w-full h-0.5 bg-current rounded-sm transition-all duration-300 origin-left 
                ${isOpen ? 'rotate-45 translate-x-1' : ''}`} 
              />
              <span className={`w-full h-0.5 bg-current rounded-sm transition-all duration-300 
                ${isOpen ? 'opacity-0 scale-0' : ''}`} 
              />
              <span className={`w-full h-0.5 bg-current rounded-sm transition-all duration-300 origin-left 
                ${isOpen ? '-rotate-45 translate-x-1 -translate-y-0.5' : ''}`} 
              />
            </div>
          </button>
        </div>

      </div>

      {/* 📱 MOBILE NAVIGATION DROPDOWN DRAWER */}
      {/* Animates down instantly when 'isOpen' is toggled true */}
      <div className={`md:hidden bg-slate-900 border-t border-slate-800 transition-all duration-300 ease-in-out overflow-hidden
        ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
      >
        <div className="px-6 py-4 flex flex-col gap-4 text-base font-bold text-slate-300">
          <Link       
            href="/"
            onClick={() => setIsOpen(false)} // Closes menu automatically when a link is clicked
            className="hover:text-emerald-400 transition-colors py-1"
          >
            Home
          </Link>
          <Link 
            href="/products" 
            onClick={() => setIsOpen(false)}
            className="hover:text-emerald-400 transition-colors py-1"
          >
            Products
          </Link>
          <Link 
            href="/about" 
            onClick={() => setIsOpen(false)}
            className="hover:text-emerald-400 transition-colors py-1"
          >
            About Us
          </Link>
          <Link 
            href="/contact" 
            onClick={() => setIsOpen(false)}
            className="hover:text-emerald-400 transition-colors py-1"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}