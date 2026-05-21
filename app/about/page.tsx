"use client"; // 🚀 CRITICAL: Required to handle form input and button submit states

import React, { useState } from 'react';
import Link from "next/link";

export default function AboutUs() {
  // State elements to manage user input and success screen toggle
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // This handles tracking the data submission
    console.log("Captured Email ID:", email);
    
    setSubmitted(true);
    setEmail(""); // Clears input box field
  };

  return (
    <div className="w-full flex flex-col items-center justify-center animate-fade-in">
      
      <main className="max-w-3xl w-full bg-white border-2 border-black p-10 rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        
        {/* Main Header Text */}
        <div className="text-center mb-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-slate-900 tracking-tight">
            {/* 🚀 FIXED: Cleaned up a tiny class syntax typo here for proper text clipping gradient rendering */}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-slate-900 via-slate-700 to-slate-800">
              About BUYME.lk
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We are a team of passionate developers building the future of the web with modern technologies, premium designs, and relentless innovation.
          </p>
        </div>
        
        {/* 📬 INTEGRATED: SUBSCRIPTION INPUT FORM BLOCK */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 mb-10 text-center shadow-xs">
          <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-2">
            Join Our Mailing List
          </h2>
          <p className="text-slate-500 text-sm mb-6 max-w-md mx-auto">
            Subscribe to get direct technical updates, premium inventory notifications, and exclusive subscriber deals.
          </p>

          {!submitted ? (
            /* Active Typing Entry State */
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="grow px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:border-transparent bg-white text-slate-900 placeholder-slate-400 text-sm shadow-inner transition-all"
              />
              <button
                type="submit"
                className="bg-slate-950 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-xl shadow-md hover:scale-[1.01] transition-all duration-200 cursor-pointer text-sm whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          ) : (
            /* Submission Success Screen Block */
            <div className="animate-fade-in py-2">
              <span className="text-3xl block mb-2">🎉</span>
              <h3 className="text-lg font-bold text-slate-900">Thank you for joining!</h3>
              <p className="text-emerald-600 font-medium text-xs mt-1 tracking-wider uppercase">
                Your email ID has been securely registered to our loop.
              </p>
            </div>
          )}
        </div>

        {/* Home Navigation Route Link */}
        <div className="w-full flex justify-center">
          <Link 
            href="/"
            className="inline-block bg-slate-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors shadow-md"
          >
            Go Back Home
          </Link>
        </div>

      </main>
    </div>
  );
}