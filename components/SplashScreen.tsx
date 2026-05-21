"use client";

import React, { useEffect, useState } from 'react';

export default function SplashScreen() {
  const [isAnimating, setIsAnimating] = useState(true);
  const [isRendered, setIsRendered] = useState(true);

  useEffect(() => {
    // ⏱️ REDUCED TIME: Wait only 700ms (less than a second) before starting the fade-out
    const fadeTimer = setTimeout(() => {
      setIsAnimating(false);
    }, 700);

    // ⏱️ REDUCED TIME: Completely unmount from HTML at 1.1 seconds total
    const removeTimer = setTimeout(() => {
      setIsRendered(false);
    }, 1100);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isRendered) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030712] overflow-hidden transition-all duration-400 ease-out ${
        isAnimating ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
      }`}
    >
      {/* Ambient Holographic Floating Energy Clouds */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20 mix-blend-screen">
        <div className="absolute -top-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-[100px] animate-mesh" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[500px] h-[500px] rounded-full bg-fuchsia-500/20 blur-[100px] animate-mesh [animation-delay:-4s]" />
      </div>

      {/* Cyber Scanline Monitor Filter overlay */}
      <div className="absolute inset-0 cyber-scanlines pointer-events-none opacity-30 mix-blend-overlay" />

      {/* Main Central UI Interface Node */}
      <div className="relative z-10 p-10 rounded-3xl border border-white/[0.06] bg-slate-950/40 backdrop-blur-2xl shadow-[0_0_80px_-20px_rgba(192,38,211,0.15)] flex flex-col items-center max-w-xs w-full mx-4">
        
        {/* Corner alignment crosshairs */}
        <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-cyan-400/40" />
        <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-fuchsia-400/40" />
        <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-emerald-400/40" />
        <div className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-cyan-400/40" />

        {/* 🌟 SHIMMERING NEON GRADIENT TEXT */}
        <div className="relative group drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]">
          <h1 className="text-4xl font-black tracking-[0.12em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 via-purple-500 to-emerald-400 animate-text-gradient select-none pb-1 text-center">
            BUYME.LK
          </h1>
        </div>

        {/* Rapid Laser Sync Loading Bar */}
        <div className="w-full h-[2px] bg-slate-900 mt-4 rounded-full overflow-hidden relative border border-white/[0.03]">
          <div 
            className={`absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-emerald-400 transition-all duration-[650ms] ease-out ${
              isAnimating ? "w-0" : "w-full"
            }`} 
          />
        </div>

      </div>
    </div>
  );
}