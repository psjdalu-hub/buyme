import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// 1. Import your Navbar and Footer
import Navbar from "../components/Navbar"; 
import Footer from "../components/footer"; // Added this line!

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Awesome Next.js Site", 
  description: "Built with TypeScript and Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body suppressHydrationWarning className="min-h-screen flex flex-col">
        {/* 2. Place the Navbar at the top */}
        <Navbar /> 

        {/* 3. The page content grows to fill space */}
        <main className="flex-grow bg-slate-50">
          {children}
        </main>
        
        {/* 4. Use the new premium Footer component! */}
        <Footer />
      </body>
    </html>
  );
}