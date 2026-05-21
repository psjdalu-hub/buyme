"use client";

import React, { useEffect, useState } from 'react';

export default function SplashScreen() {
  const [isAnimating, setIsAnimating] = useState(true);
  const [isRendered, setIsRendered] = useState(true);

  useEffect(() => {
    // ⏱️ Step 1: Wait 1 second for text entry, then trigger curtain slide-up
    const slideTimer = setTimeout(() => {
      setIsAnimating(false);
    }, 1200);

    // ⏱️ Step 2: Completely remove component from HTML once slide-up finishes
    const removeTimer = setTimeout(() => {
      setIsRendered(false);
    }, 1800);

    return () => {
      clearTimeout(slideTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isRendered) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
        isAnimating ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* 🌟 Cinematic Text Effect */}
      <div className="overflow-hidden py-2">
        <h1 
          className={`text-5xl md:text-7xl font-black tracking-widest text-white transition-all duration-700 ease-out transform ${
            isAnimating ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95"
          }`}
        >
          BUYME.LK
        </h1>
      </div>
      
      {/* Sleek minimalist neon loading indicator line */}
      <div className="w-24 h-[3px] bg-emerald-400 mt-4 rounded-full overflow-hidden relative">
        <div className="absolute inset-0 bg-white/50 animate-pulse" />
      </div>
    </div>
  );
}