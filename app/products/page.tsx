"use client"; // 🚀 CRITICAL: Required for tracking state when typing in the search bar

import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';

interface ProductItem {
  id: number;
  name: string;
  price: string;
  imageSrc: string; 
}

const products: ProductItem[] = [
  { id: 1, name: "Premium Headset", price: "$129.99", imageSrc: "/item1.jpg" },
  { id: 2, name: "Mechanical Keyboard", price: "$89.50", imageSrc: "/item2.jpg" },
  { id: 3, name: "Smart Fitness Watch", price: "$199.00", imageSrc: "/item3.jpg" },
  { id: 4, name: "Wireless Ergonomic Mouse", price: "$59.99", imageSrc: "/item4.jpg" },
  { id: 5, name: "UltraWide 4K Monitor", price: "$449.00", imageSrc: "/item5.jpg" },
  { id: 6, name: "Noise-Cancelling Earbuds", price: "$159.50", imageSrc: "/item6.jpg" },
  { id: 7, name: "RGB Gaming Microphone", price: "$79.99", imageSrc: "/item7.jpg" },
  { id: 8, name: "HD Streaming Webcam", price: "$99.00", imageSrc: "/item8.jpg" },
  { id: 9, name: "MagSafe Wireless Charger", price: "$39.99", imageSrc: "/item9.jpg" },
  { id: 10, name: "Aluminum Laptop Stand", price: "$45.00", imageSrc: "/item10.jpg" },
  { id: 11, name: "Portable 2TB SSD Drive", price: "$124.99", imageSrc: "/item11.jpg" },
  { id: 12, name: "Smart Ambient Desk Lamp", price: "$69.50", imageSrc: "/item12.jpg" },
  { id: 13, name: "Leather Desk Writing Pad", price: "$34.99", imageSrc: "/item13.jpg" },
  { id: 14, name: "Ergonomic Office Chair", price: "$299.00", imageSrc: "/item14.jpg" },
  { id: 15, name: "4K Ultra HD TV", price: "$799.00", imageSrc: "/item15.jpg" },
  { id: 16, name: "Smart Home Speaker", price: "$129.99", imageSrc: "/item16.jpg" },
  { id: 17, name: "Wireless Charging Pad", price: "$49.99", imageSrc: "/item17.jpg" },
  { id: 18, name: "Gaming Laptop Backpack", price: "$89.50", imageSrc: "/item18.jpg" },
  { id: 19, name: "USB-C Hub with HDMI", price: "$39.99", imageSrc: "/item19.jpg" },
  { id: 20, name: "Smart Thermostat", price: "$199.00", imageSrc: "/item20.jpg" },
  { id: 21, name: "Wireless Noise-Cancelling Headphones", price: "$199.99", imageSrc: "/item21.jpg" },
];

export default function Products() {
  // 🚀 STATE: Tracks whatever string text the user types
  const [searchQuery, setSearchQuery] = useState("");

  // 🚀 FILTER LOGIC: Updates live as the user types
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full flex flex-col items-center justify-center animate-fade-in">
      <main className="max-w-5xl w-full bg-white border-2 border-black p-10 rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            10% Sale on All Products
          </h1>
          <p className="text-slate-500 mt-2 text-lg max-w-2xl">
            Don't miss out on our exclusive deals on the latest tech gadgets. Upgrade your setup with our premium products and enjoy unbeatable discounts. Shop now and elevate your tech game!
          </p>

          {/* 🔍 SEARCH BAR INPUT FIELD */}
          <div className="relative w-full max-w-md mt-6">
            <input
              type="text"
              placeholder="Search through 21 tech products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-5 py-3 pl-11 rounded-xl border-2 border-slate-200 focus:outline-none focus:border-slate-950 text-sm transition-all text-slate-900 placeholder-slate-400 bg-slate-50 shadow-inner"
            />
            {/* Minimal Emoji Search Icon */}
            <span className="absolute left-4 top-3.5 text-slate-400 select-none pointer-events-none text-sm">
              🔍
            </span>
          </div>
        </div>

        {/* 🚀 PRODUCT CATALOG GRID */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="flex flex-col justify-between p-3 bg-slate-50 border border-slate-200 rounded-xl shadow-xs hover:shadow-md transition-all group"
              >
                <div className="relative w-full h-40 rounded-lg overflow-hidden bg-white border border-slate-100">
                  <Image 
                    src={product.imageSrc} 
                    alt={product.name}
                    fill
                    sizes="(max-w-768px) 100vw, 33vw"
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex flex-col pt-3">
                  <span className="text-xs font-bold text-slate-700 truncate">{product.name}</span>
                  <span className="text-sm font-black text-emerald-600 mt-0.5">{product.price}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* 🚫 EMPTY STATE: Renders if search yields 0 matches */
          <div className="text-center py-16 bg-slate-50 border border-dashed border-slate-200 rounded-2xl mb-10">
            <span className="text-4xl block mb-2">📦</span>
            <h3 className="text-lg font-bold text-slate-700">No tech items match your search</h3>
            <p className="text-slate-400 text-sm mt-1">Try checking your spelling or search for another item.</p>
          </div>
        )}

        {/* Action Button Navigation */}
        <div className="w-full flex justify-center border-t border-slate-100 pt-6">
          <Link
            href="/"
            className="inline-block bg-slate-900 text-white font-bold py-3 px-6 rounded-lg hover:bg-emerald-600 transition-colors shadow-md"
          >
            Go Back Home
          </Link>
        </div>

      </main>
    </div>
  );
}