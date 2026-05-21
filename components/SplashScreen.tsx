"use client";

import React, { useEffect, useState } from 'react';

export default function SplashScreen() {
  const [startSplit, setStartSplit] = useState(false);
  const [isRendered, setIsRendered] = useState(true);

  useEffect(() => {
    // ⏱️ Step 1: Run the shading/flashing loop animation for 3 seconds
    const splitTimer = setTimeout(() => {
      setStartSplit(true);
    }, 3000);

    // ⏱️ Step 2: Unmount component completely from DOM after shutter exits screen
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
      
      {/* 🏛️ TOP SHUTTER PANEL */}
      <div 
        className={`absolute top-0 left-0 w-full h-[50vh] bg-white flex items-end justify-center overflow-hidden pointer-events-auto ${
          startSplit ? "animate-curtain-top" : ""
        }`}
      >
        {/* Keeps logo absolute centered across separating panels */}
        <div className="h-[100vh] w-full flex items-center justify-center translate-y-[25vh]">
          <h1 className={`text-4xl md:text-6xl font-black tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-purple-600 select-none pb-2 transition-opacity duration-200 ${
            startSplit ? "opacity-0" : "animate-shading-text"
          }`}>
            BUYME.LK
          </h1>
        </div>
      </div>

      {/* 🏛️ BOTTOM SHUTTER PANEL */}
      <div 
        className={`absolute bottom-0 left-0 w-full h-[50vh] bg-white flex items-start justify-center overflow-hidden pointer-events-auto ${
          startSplit ? "animate-curtain-bottom" : ""
        }`}
      >
        {/* Mirror copy to make it seamless before separation */}
        <div className="h-[100vh] w-full flex items-center justify-center -translate-y-[25vh]">
          <h1 className={`text-4xl md:text-6xl font-black tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-purple-600 select-none pb-2 transition-opacity duration-200 ${
            startSplit ? "opacity-0" : "animate-shading-text"
          }`}>
            BUYME.LK
          </h1>
        </div>
      </div>

    </div>
  );
}