"use client";

import React, { useEffect, useState } from 'react';

export default function SplashScreen() {
  const [isAnimating, setIsAnimating] = useState(true);
  const [isRendered, setIsRendered] = useState(true);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setIsAnimating(false);
    }, 2200);

    const removeTimer = setTimeout(() => {
      setIsRendered(false);
    }, 2900);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isRendered) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030712] overflow-hidden transition-all duration-1000 cubic-bezier(0.25, 1, 0.5, 1) ${
        isAnimating ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
      }`}
    >
      {/* 🌌 LAYER 1: Ambient Holographic Floating Energy Clouds */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30 mix-blend-screen">
        <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-cyan-500/20 blur-[120px] animate-mesh" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-fuchsia-500/20 blur-[120px] animate-mesh [animation-delay:-4s]" />
      </div>

      {/* 📺 LAYER 2: Cyber Scanline Monitor Filter overlay */}
      <div className="absolute inset-0 cyber-scanlines pointer-events-none opacity-40 mix-blend-overlay" />

      {/* 🔮 LAYER 3: Main Central UI Interface Node */}
      <div className="relative z-10 p-16 rounded-3xl border border-white/[0.06] bg-slate-950/40 backdrop-blur-2xl shadow-[0_0_80px_-20px_rgba(192,38,211,0.15)] flex flex-col items-center max-w-md w-full mx-4">
        
        {/* Corner alignment crosshairs */}
        <div className="absolute top-5 left-5 w-4 h-4 border-t-2 border-l-2 border-cyan-400/40" />
        <div className="absolute top-5 right-5 w-4 h-4 border-t-2 border-r-2 border-fuchsia-400/40" />
        <div className="absolute bottom-5 left-5 w-4 h-4 border-b-2 border-l-2 border-emerald-400/40" />
        <div className="absolute bottom-5 right-5 w-4 h-4 border-b-2 border-r-2 border-cyan-400/40" />

        {/* Top Minimal System Node Badge */}
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-[9px] tracking-[0.25em] text-cyan-400 font-black uppercase mb-6 animate-pulse">
          <span className="w-1 h-1 rounded-full bg-cyan-400 block" /> SYS_INIT_OK
        </div>

        {/* 🌟 SHIMMERING NEON GRADIENT TEXT WITH DROP GLOW */}
        <div className="relative group drop-shadow-[0_0_25px_rgba(168,85,247,0.4)]">
          <h1 className="text-5xl md:text-6xl font-black tracking-[0.15em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 via-purple-500 to-emerald-400 animate-text-gradient select-none pb-2 text-center">
            BUYME.LK
          </h1>
        </div>

        {/* Subtitle Telemetry Frame */}
        <p className="text-[9px] tracking-[0.35em] font-black text-slate-400/60 uppercase mt-6 text-center select-none">
          Establishing Secure Tech Feed
        </p>

        {/* Neon Laser Sync Loading Bar */}
        <div className="w-full h-[3px] bg-slate-900 mt-6 rounded-full overflow-hidden relative border border-white/[0.03]">
          <div 
            className={`absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-emerald-400 transition-all duration-[2100ms] cubic-bezier(0.65, 0, 0.35, 1) ${
              isAnimating ? "w-0" : "w-full"
            }`} 
          />
        </div>

      </div>
    </div>
  );
}