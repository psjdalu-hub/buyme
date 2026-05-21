"use client";

import React, { useEffect, useState } from 'react';

export default function SplashScreen() {
  const [startSplit, setStartSplit] = useState(false);
  const [isRendered, setIsRendered] = useState(true);

  useEffect(() => {
    // ⏱️ Step 1: Run the fast video shading pulse look on white canvas for 3 seconds
    const splitTimer = setTimeout(() => {
      setStartSplit(true);
    }, 3000);

    // ⏱️ Step 2: Clear layout node from the background DOM when panels slide away completely
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
    <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">
      
      {/* 🏛️ TOP HALF PANEL SHUTTER */}
      <div 
        className={`absolute top-0 left-0 w-full h-[50vh] bg-white flex items-end justify-center overflow-hidden pointer-events-auto ${
          startSplit ? "animate-curtain-top" : ""
        }`}
      >
        {/* Anchors brand name dead center between panels */}
        <div className="h-[100vh] w-full flex flex-col items-center justify-center translate-y-[25vh]">
          
          {/* Tactical Central Glass Tech Frame HUD */}
          <div className="relative p-14 rounded-2xl border border-neutral-200/50 bg-white/40 backdrop-blur-md shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] flex flex-col items-center max-w-sm w-full mx-4">
            
            {/* Corner crosshair brackets */}
            <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-cyan-400" />
            <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-fuchsia-400" />
            <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-purple-500" />
            <div className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-cyan-400" />

            {/* Glowing Neon Gradient Text Element (No Drop Shadow) */}
            <h1 className={`text-4xl md:text-5xl font-black tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 via-purple-500 to-emerald-400 select-none pb-2 text-center transition-opacity duration-200 ${
              startSplit ? "opacity-0" : "animate-shading-text"
            }`}>
              BUYME.LK
            </h1>

            {/* Technical Subtext Status Indicator */}
            <p className={`text-[9px] tracking-[0.35em] font-black text-neutral-400 uppercase mt-5 text-center transition-opacity duration-200 ${
              startSplit ? "opacity-0" : "animate-pulse"
            }`}>
              PREPARING YOUR TECH GATEWAY
            </p>

            {/* Custom Modern "BUY NOW" Status Node */}
            <div className={`mt-6 px-6 py-2 rounded-xl border border-neutral-300 bg-neutral-50 text-xs font-black tracking-widest text-neutral-800 transition-opacity duration-200 ${
              startSplit ? "opacity-0" : ""
            }`}>
              BUY NOW
            </div>

          </div>
        </div>
      </div>

      {/* 🏛️ BOTTOM HALF PANEL SHUTTER */}
      <div 
        className={`absolute bottom-0 left-0 w-full h-[50vh] bg-white flex items-start justify-center overflow-hidden pointer-events-auto ${
          startSplit ? "animate-curtain-bottom" : ""
        }`}
      >
        {/* Mirror copy alignment frame to keep interface unified before split */}
        <div className="h-[100vh] w-full flex flex-col items-center justify-center -translate-y-[25vh]">
          
          <div className="relative p-14 rounded-2xl border border-neutral-200/50 bg-white/40 backdrop-blur-md shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] flex flex-col items-center max-w-sm w-full mx-4">
            
            <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-cyan-400" />
            <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-fuchsia-400" />
            <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-purple-500" />
            <div className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-cyan-400" />

            <h1 className={`text-4xl md:text-5xl font-black tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 via-purple-500 to-emerald-400 select-none pb-2 text-center transition-opacity duration-200 ${
              startSplit ? "opacity-0" : "animate-shading-text"
            }`}>
              BUYME.LK
            </h1>

            <p className={`text-[9px] tracking-[0.35em] font-black text-neutral-400 uppercase mt-5 text-center transition-opacity duration-200 ${
              startSplit ? "opacity-0" : "animate-pulse"
            }`}>
              PREPARING YOUR TECH GATEWAY
            </p>

            <div className={`mt-6 px-6 py-2 rounded-xl border border-neutral-300 bg-neutral-50 text-xs font-black tracking-widest text-neutral-800 transition-opacity duration-200 ${
              startSplit ? "opacity-0" : ""
            }`}>
              BUY NOW
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}