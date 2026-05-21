"use client";

import React, { useEffect, useState } from 'react';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // ⏱️ Keeps the splash screen visible for 2 seconds, then handles fade out
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-slate-50 animate-fade-out [animation-delay:1.5s]">
      {/* 🚀 Neubrutalist Styled Text Pop Block */}
      <div className="bg-emerald-400 border-4 border-black px-8 py-4 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] animate-pop-in">
        <h1 className="text-5xl md:text-7xl font-black text-black tracking-wider selection:bg-transparent">
          BUYME.LK
        </h1>
      </div>
    </div>
  );
}