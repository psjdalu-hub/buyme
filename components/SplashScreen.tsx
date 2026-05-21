"use client";

import React, { useEffect, useState } from 'react';

export default function SplashScreen() {
  const [startSplit, setStartSplit] = useState(false);
  const [isRendered, setIsRendered] = useState(true);

  useEffect(() => {
    // ⏱️ Step 1: Display pulsed branding logo on white for 2 seconds
    const splitTimer = setTimeout(() => {
      setStartSplit(true);
    }, 2000);

    // ⏱️ Step 2: Clean up component once panels slide completely out of viewport
    const removeTimer = setTimeout(() => {
      setIsRendered(false);
    }, 3100);

    return () => {
      clearTimeout(splitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isRendered) return null;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">
      
      {/* 🏛️ TOP HALF PANEL */}
      <div 
        className={`absolute top-0 left-0 w-full h-[50vh] bg-white border-b border-neutral-100 flex items-end justify-center overflow-hidden pointer-events-auto ${
          startSplit ? "animate-curtain-top" : ""
        }`}
      >
        {/* Mirror half image container to anchor logo centering before split */}
        <div className="h-[100vh] w-full flex items-center justify-center translate-y-[25vh]">
          <h1 className={`text-4xl md:text-5xl font-light tracking-[0.4em] text-neutral-800 selection:bg-transparent ${
            startSplit ? "opacity-0 transition-opacity duration-300" : "animate-logo-pulse"
          }`}>
            BUYME.LK
          </h1>
        </div>
      </div>

      {/* 🏛️ BOTTOM HALF PANEL */}
      <div 
        className={`absolute bottom-0 left-0 w-full h-[50vh] bg-white border-t border-neutral-100 flex items-start justify-center overflow-hidden pointer-events-auto ${
          startSplit ? "animate-curtain-bottom" : ""
        }`}
      >
        {/* Secondary anchor keeping text visually locked together */}
        <div className="h-[100vh] w-full flex items-center justify-center -translate-y-[25vh]">
          <h1 className={`text-4xl md:text-5xl font-light tracking-[0.4em] text-neutral-800 selection:bg-transparent ${
            startSplit ? "opacity-0 transition-opacity duration-300" : "animate-logo-pulse"
          }`}>
            BUYME.LK
          </h1>
        </div>
      </div>

    </div>
  );
}