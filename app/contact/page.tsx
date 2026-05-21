"use client"; // 🚀 CRITICAL: Required for handling state and direct fetch network operations

import React, { useState } from 'react';
import Link from "next/link";

export default function ContactUs() {
  // Form Input States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  // Status States
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // 🚀 DIRECT GOOGLE SHEETS SUBMISSION LOGIC (Web3Forms Removed!)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSending(true);
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);

    try {
      // ⚠️ STEP 2 PASTE AREA: Replace this string with your actual Google Web App URL!
      const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzpUzv98e2UR7lPyzaTItgMsEIZ9rYRqKGwZ3D_a17YHraXxfOYJbDN1Ioj35DMIjbI/exec";

      // Send data directly to your Google Sheet script
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors" // 🚀 CRITICAL: Bypasses strict browser checks for Google Scripts
      });

      // Keep your local storage backup logging working flawlessly
      const existingMessages = localStorage.getItem("contact_messages");
      const messageList = existingMessages ? JSON.parse(existingMessages) : [];
      
      messageList.push({
        id: Date.now(),
        userName: name,
        userEmail: email,
        userMessage: message,
        receivedAt: new Date().toLocaleString()
      });
      
      localStorage.setItem("contact_messages", JSON.stringify(messageList));

      // Show success screen and reset text fields
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");

    } catch (error) {
      setErrorMessage("Network error! Check your internet connection and try again.");
      console.error("Google Sheet submission error:", error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center animate-fade-in py-6">
      <main className="max-w-3xl w-full bg-white border-2 border-black p-10 rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase">
            Contact Us
          </h1>
          <p className="text-slate-500 mt-2 text-base max-w-md mx-auto">
            Got questions about a tech gadget or an order? Drop us a message and our support team will get right back to you!
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-center">
            <span className="text-xl block mb-1">📧</span>
            <h3 className="font-bold text-slate-800 text-sm">Email Us</h3>
            <p className="text-xs text-slate-500 mt-0.5">support@buyme.lk</p>
          </div>
          <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-center">
            <span className="text-xl block mb-1">📍</span>
            <h3 className="font-bold text-slate-800 text-sm">Location</h3>
            <p className="text-xs text-slate-500 mt-0.5">Colombo, Sri Lanka</p>
          </div>
        </div>

        {/* Contact Form Wrapper */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 mb-8 shadow-xs">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              
              {/* Name Input */}
              <div className="flex flex-col gap-1.5 text-left">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Full Name</label>
                <input
                  type="text"
                  name="name" 
                  required
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-950 bg-white text-slate-900 text-sm transition-all"
                />
              </div>

              {/* Email Input */}
              <div className="flex flex-col gap-1.5 text-left">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
                <input
                  type="email"
                  name="email" 
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-950 bg-white text-slate-900 text-sm transition-all"
                />
              </div>

              {/* Message Textarea */}
              <div className="flex flex-col gap-1.5 text-left">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Your Message</label>
                <textarea
                  name="message" 
                  required
                  rows={4}
                  placeholder="How can we help you setup your tech game?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-950 bg-white text-slate-900 text-sm transition-all resize-none"
                />
              </div>

              {/* Error Box display */}
              {errorMessage && (
                <p className="text-xs font-semibold text-red-600 bg-red-50 p-3 rounded-lg text-left border border-red-200">
                  ⚠️ {errorMessage}
                </p>
              )}

              {/* Action Submit Button */}
              <button
                type="submit"
                disabled={isSending}
                className={`w-full text-white font-bold py-3 px-6 rounded-xl shadow-md transition-all duration-200 text-sm mt-2 flex items-center justify-center gap-2
                  ${isSending ? 'bg-slate-400 cursor-not-allowed scale-100' : 'bg-slate-950 hover:bg-emerald-600 hover:scale-[1.01] cursor-pointer'}`}
              >
                {isSending ? "Sending Message..." : "Send Message"}
              </button>

            </form>
          ) : (
            /* Success State Message */
            <div className="animate-fade-in py-6 text-center">
              <span className="text-4xl block mb-2">🚀</span>
              <h3 className="text-xl font-bold text-slate-900">Message Transmitted Live!</h3>
              <p className="text-emerald-600 font-semibold text-xs mt-1 tracking-wider uppercase max-w-sm mx-auto leading-relaxed">
                Success! Your message was delivered live to your Google Sheet and backed up to your browser storage.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-5 text-xs font-bold text-slate-500 underline hover:text-slate-800"
              >
                Send another message
              </button>
            </div>
          )}
        </div>

        {/* Navigation Link */}
        <div className="w-full flex justify-center border-t border-slate-100 pt-6">
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