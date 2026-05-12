import React from 'react';
import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="py-20 px-6 lg:px-8 max-w-6xl mx-auto animate-fade-in   bg-white flex flex-col items-center justify-center ">
      <main className="max-w-3xl w-full border-2 border-black p-10 rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
       
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-slate-900 tracking-tight">
          About <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-500 via-teal-500 to-blue-600">Develo.</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          We are a team of passionate developers building the future of the web with modern technologies, premium designs, and relentless innovation.
        </p>
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