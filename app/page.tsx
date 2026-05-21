// app/page.tsx
import React from 'react';
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full py-12 px-6 lg:px-8 max-w-6xl mx-auto flex flex-col items-center justify-center animate-fade-in">
      <div className="w-full max-w-5xl flex flex-col items-center">
        
        {/* Main Heading Text */}
        <h1 className="text-4xl font-black mb-4 uppercase tracking-tight text-slate-900 text-center">
          10% Sale on everything
        </h1>
        
        <p className="text-gray-700 mb-12 text-lg text-center max-w-3xl">
          only for today! Don't miss out on our exclusive deals on the latest tech gadgets. Upgrade your setup with our premium products and enjoy unbeatable discounts. Shop now and elevate your tech game!
        </p>

        {/* 🚀 FIXED: THE GIANT CLICKABLE LINK BOW */}
        <div className="flex flex-col items-center mb-16">
          <Link 
            href="/products" 
            className="relative transform transition-all duration-300 animate-bounce hover:scale-115 cursor-pointer focus:outline-none block"
            aria-label="View All Products"
          >
            {/* 🚀 Changed text size utility to text-9xl to make the bow massive */}
            <div className="relative text-9xl select-none flex items-center justify-center drop-shadow-[0_20px_20px_rgba(0,0,0,0.9)]">
              🎀
              
              {/* Floating 10% Offer Badge pinned to the giant bow */}
              <div className="absolute top-2 -right-6 bg-red-600 text-white font-black text-xs px-3 py-1 rounded-full uppercase tracking-widest shadow-lg transform rotate-12 animate-pulse">
                Claim 10% Off
              </div>
            </div>
          </Link>

          {/* Interactive Hint Subtext */}
          <p className="text-sm font-black text-red-600 mt-6 tracking-widest uppercase animate-pulse">
            🎁 Click the Bow to Reveal All Products! 🎁
          </p>
        </div>

        {/* Navigation Action Buttons */}
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          
          <Link 
            href="/about"
            className="inline-block bg-slate-900 text-white font-bold py-3 px-6 rounded-lg hover:bg-emerald-600 transition-all hover:scale-105 shadow-md"
          >
            About Us
          </Link>
        </div>
        
      </div>
    </div>
  );
}