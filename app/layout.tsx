// app/layout.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/footer"; 
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
      <body className="relative  antialiased selection:bg-blue-500/30 flex flex-col overflow-x-hidden">
        
        {/* GLOBAL FULL-SCREEN BACKGROUND IMAGE */}
        {/* 2. FIXED SCROLLING: Removed h-screen/w-screen from here so it doesn't break document flow */}
        <div className="fixed inset-0 -z-50 pointer-events-none">
          <Image
            src="/bg.jpg"         
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