"use client";

import React, { useEffect, useState } from 'react';

export default function SplashScreen() {
  const [startSplit, setStartSplit] = useState(false);
  const [isRendered, setIsRendered] = useState(true);

  useEffect(() => {
    // ⏱️ Step 1: Run the fast video shading pulse loop for 3 seconds
    const splitTimer = setTimeout(() => {
      setStartSplit(true);
    }, 3000);

    // ⏱️ Step 2: Clear layout node from background DOM once curtain animation fully exits
    const removeTimer = setTimeout(() => {
      setIsRendered(false);
    }, 4000);

    return () => {
      clearTimeout(splitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isRendered) return null;

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden bg-transparent select-none pointer-events-none">
      
      {/* 🏛️ PANEL 1: SOLID WHITE TOP REVEAL SHUTTER */}
      <div 
        className={`absolute top-0 left-0 w-full h-[50vh] bg-white border-b border-neutral-100 transition-transform duration-900 ease-[cubic-bezier(0.85,0,0.15,1)] pointer-events-auto ${
          startSplit ? "-translate-y-full" : "translate-y-0"
        }`}
      />

      {/* 🏛️ PANEL 2: SOLID WHITE BOTTOM REVEAL SHUTTER */}
      <div 
        className={`absolute bottom-0 left-0 w-full h-[50vh] bg-white border-t border-neutral-100 transition-transform duration-900 ease-[cubic-bezier(0.85,0,0.15,1)] pointer-events-auto ${
          startSplit ? "translate-y-full" : "translate-y-0"
        }`}
      />

      {/* 🌟 UNIFIED CENTRAL BRAND HERO BOX (ONE SINGLE CARD STANDS HERE) */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div 
          className={`relative px-12 py-16 md:px-20 md:py-24 rounded-3xl border border-neutral-200/60 bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.06)] flex flex-col items-center max-w-lg w-full transition-all duration-500 ease-in-out ${
            startSplit ? "opacity-0 scale-95 pointer-events-none" : "animate-shading-text pointer-events-auto"
          }`}
        >
          {/* Neon Minimal Crosshair Corner Targets */}
          <div className="absolute top-6 left-6 w-4 h-4 border-t-2 border-l-2 border-cyan-400" />
          <div className="absolute top-6 right-6 w-4 h-4 border-t-2 border-r-2 border-fuchsia-400" />
          <div className="absolute bottom-6 left-6 w-4 h-4 border-b-2 border-l-2 border-purple-500" />
          <div className="absolute bottom-6 right-6 w-4 h-4 border-b-2 border-r-2 border-emerald-400" />

          {/* Core Shimmering Gradient Typography */}
          <h1 className="text-5xl md:text-7xl font-black tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 via-purple-500 to-emerald-400 text-center select-none pb-3">
            BUYME.LK
          </h1>

          {/* Telemetry Secondary Header */}
          <p className="text-[10px] md:text-xs tracking-[0.4em] font-black text-neutral-400 uppercase mt-6 text-center animate-pulse">
            PREPARING YOUR TECH GATEWAY
          </p>

          {/* Premium "BUY NOW" Status Badge */}
          <div className="mt-10 px-8 py-3 rounded-xl border border-neutral-300 bg-neutral-50 text-xs md:text-sm font-black tracking-widest text-neutral-800 transition-transform duration-200 hover:scale-105 shadow-sm">
            BUY NOW
          </div>

        </div>
      </div>

    </div>
  );
}