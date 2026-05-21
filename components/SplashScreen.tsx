"use client";

import React, { useEffect, useState } from 'react';

export default function SplashScreen() {
  const [isAnimating, setIsAnimating] = useState(true);
  const [isRendered, setIsRendered] = useState(true);

  useEffect(() => {
    // ⏱️ Step 1: Wait 1.8 seconds for the futuristic progress loading phase
    const fadeTimer = setTimeout(() => {
      setIsAnimating(false);
    }, 1800);

    // ⏱️ Step 2: Completely remove component from HTML once scale/fade out animation finishes
    const removeTimer = setTimeout(() => {
      setIsRendered(false);
    }, 2400);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isRendered) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950/95 backdrop-blur-xl transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${
        isAnimating ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
      }`}
    >
      {/* Futuristic Cyber-Grid Glow Boundary Box */}
      <div className="relative p-12 rounded-3xl border border-white/10 bg-slate-900/40 shadow-[0_0_50px_-12px_rgba(16,185,129,0.2)] flex flex-col items-center">
        
        {/* Decorative corner crosshairs for tactical tech aesthetic */}
        <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-emerald-400/40" />
        <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-emerald-400/40" />
        <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-emerald-400/40" />
        <div className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-emerald-400/40" />

        {/* 🌟 SHIMMERING RADIAL GRADIENT TEXT */}
        <h1 className="text-5xl md:text-7xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-emerald-400 animate-text-gradient select-none pb-2">
          BUYME.LK
        </h1>

        {/* Subtitle Tech Status Marker */}
        <p className="text-[10px] tracking-[0.3em] font-bold text-slate-400/70 uppercase mt-4 animate-pulse">
          PREPARING YOUR TECH GATEWAY
        </p>

        {/* Futuristic Dynamic Glow Loading Metric Bar */}
        <div className="w-48 h-[2px] bg-slate-800 mt-6 rounded-full overflow-hidden relative border border-white/5">
          <div 
            className={`absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-emerald-400 transition-all duration-[1700ms] ease-out ${
              isAnimating ? "w-0" : "w-full"
            }`} 
          />
        </div>

      </div>
    </div>
  );
}