// app/layout.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/footer"; 
import SplashScreen from "@/components/SplashScreen"; // 🌟 Step 1: Import the new preloader component
import "./globals.css";

export const metadata: Metadata = {
  title: "My Awesome Site",
  description: "E-commerce store setup",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 1. Added overflow-x-hidden to prevent weird layout shaking */}
      <body className="relative antialiased selection:bg-blue-500/30 flex flex-col overflow-x-hidden">
        
        {/* 🌟 Step 2: Render Splash Screen directly at the root of the body */}
        <SplashScreen />

        {/* GLOBAL FULL-SCREEN BACKGROUND IMAGE */}
        {/* 🚀 CRITICAL FIX: Changed src path to /buyme/bg.jpg for GitHub Pages support */}
        <div className="fixed inset-0 -z-50 pointer-events-none">
          <Image
            src="/buyme/bg.jpg"         
            alt="Site Background"
            fill                 
            priority             
            className="object-cover object-center blur-md opacity-40" 
          />
        </div>

        {/* Navbar */}
        <Navbar />

        {/* 3. FIXED ALIGNMENT: Centers content on ALL pages (/dashboard, /about, etc.) */}
        <main className="grow w-full max-w-8xl mx-auto px-6 lg:px-8 flex flex-col items-center justify-center py-20">
          {children}
        </main>

        {/* Footer */}
        <Footer />

      </body>
    </html>
  );
}