import React from 'react';
import Link from "next/link";

// Defining a simple TypeScript interface for our data
interface TechItem {
  name: string;
  status: string;
}

const stack: TechItem[] = [
  { name: "Next.js 15", status: "Active" },
  { name: "TypeScript", status: "Strict" },
  { name: "Tailwind CSS", status: "Styled" },
];

export default function Home() {
  return (
    <div className="relative min-h-screen py-20 px-6 lg:px-8 max-w-6xl mx-auto flex flex-col items-center justify-center overflow-hidden animate-fade-in  w-full animate-fade-in   bg-white">
      
      {/* THE BACKGROUND IMAGE LAYER 
        Make sure you have an image named exactly "bg.jpg" in your "public" folder! 
      */}
      <div className="absolute inset-0 -z-10 background-image: url('bg.jpg'); background-cover background-center blur-md opacity-40"></div>

      {/* Glassmorphism Main Card */}
      <main className="relative z-10 max-w-3xl w-full bg-gray-200/80 backdrop-blur-lg border border-white/40 p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        
        <h1 className="text-4xl font-black mb-4 uppercase tracking-tight text-slate-900">
          Project: My Awesome Site
        </h1>
        
        <p className="text-gray-600 mb-8 text-lg">
          Successfully initialized in <code>C:\Projects</code>. 
          Ready for development.
        </p>

        {/* Tech Stack List */}
        <div className="space-y-4">
          {stack.map((item) => (
            <div key={item.name} className="flex justify-between border-b border-gray-200 pb-2">
              <span className="font-bold text-slate-800">{item.name}</span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase shadow-sm">
                {item.status}
              </span>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap gap-4">
          <Link 
            href="/dashboard"
            className="inline-block bg-slate-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-all hover:scale-105 shadow-md"
          >
            Explore Dashboard
          </Link>

          <Link 
            href="/about"
            className="inline-block bg-slate-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-all hover:scale-105 shadow-md"
          >
            About Us
          </Link>
        </div>

      </main>
    </div>
  );
}