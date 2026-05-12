import Link from 'next/link';
import React from 'react';

export default function Dashboard() {
  return (
    <div className="py-12 px-6 lg:px-8 max-w-6xl mx-auto w-full animate-fade-in   bg-white flex flex-col items-center justify-center ">
      <main className="max-w-3xl w-full border-2 border-black p-10 rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      {/* Header Section */}
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
          User Dashboard
        </h1>
        <p className="text-slate-500 mt-2 text-lg">Welcome back, Developer.</p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Card 1: Pending Tasks */}
        <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col justify-between hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow">
          <div>
            <h2 className="text-xl font-bold text-slate-800 mb-2">Pending Tasks</h2>
            {/* Gradient Number */}
            <p className="text-6xl font-black text-transparent bg-clip-text bg-linear-to-r from-emerald-500 to-blue-600 mb-6 drop-shadow-sm">
              5
            </p>
          </div>
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg hover:-translate-y-0.5 duration-200">
              + Add Task
            </button>
            <button className="bg-slate-100 text-slate-700 font-semibold py-2 px-6 rounded-full hover:bg-slate-200 transition-colors">
              Complete
            </button>
          </div>
        </div>

        {/* Card 2: System Status */}
        <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow">
          <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
            {/* Pulsing Green Status Dot */}
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            System Status
          </h2>
          
          <p className="text-slate-600 leading-relaxed mb-6">
            Your Next.js app is currently running in <strong className="text-slate-800">Development Mode</strong>. All changes are being hot-reloaded instantly.
          </p>
          
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Framework</span>
              <span className="text-sm font-bold text-slate-800">Next.js 15</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Environment</span>
              <span className="text-sm font-bold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-md">Local</span>
            </div>
          </div>
        </div>

      </div>
      <Link
          href="/"
          className="ml-4 inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Go Back Home
        </Link>
      </main>
    </div>
  );
}