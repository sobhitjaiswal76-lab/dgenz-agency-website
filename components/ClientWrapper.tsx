"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Canvas3D from "./Canvas3D";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Terminal, ShieldAlert, Sparkles, PhoneCall } from "lucide-react";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingLog, setLoadingLog] = useState("INITIATING CORE BOOTLOADER...");
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    // Phase loadings to complete inside 2 seconds
    const phase1 = setTimeout(() => setLoadingLog("CALIBRATING CORE HYPERFIELDS..."), 500);
    const phase2 = setTimeout(() => setLoadingLog("FORGING GLASS VISUALS..."), 1100);
    const phase3 = setTimeout(() => setLoadingLog("ESTABLISHING HIGH-PERFORMANCE CHASSIS OK."), 1600);
    const stopLoading = setTimeout(() => setIsLoading(false), 2000);

    // Desktop Custom Cursor Trackers
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseUp = () => setIsClicking(false);
    const handleMouseDown = () => setIsClicking(true);

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("cursor-pointer")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseover", handleHoverStart);

    return () => {
      clearTimeout(phase1);
      clearTimeout(phase2);
      clearTimeout(phase3);
      clearTimeout(stopLoading);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseover", handleHoverStart);
    };
  }, []);

  // Launch pre-filled floating WhatsApp link
  const defaultWhatsAppText = "Hello DGEN Z, I want to know more about your services.";
  const floatingWhatsAppLink = `https://wa.me/919681168381?text=${encodeURIComponent(defaultWhatsAppText)}`;

  return (
    <div className="min-h-screen bg-[#040406] text-white selection:bg-rose-600 selection:text-white flex flex-col relative antialiased overflow-x-hidden">
      
      {/* 1. Custom LUXURY LIQUID TRAILING CURSOR (Desktop only) */}
      <div className="hidden md:block pointer-events-none fixed inset-0 z-50">
        <div
          className={`w-4 h-4 rounded-full bg-red-500 border border-white/20 fixed -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out ${
            isHovering ? "scale-[3.0] bg-transparent border-red-500 shadow-[0_0_12px_rgba(239,68,68,0.4)]" : ""
          } ${isClicking ? "scale-[1.8] bg-rose-600" : ""}`}
          style={{
            left: `${cursorPos.x}px`,
            top: `${cursorPos.y}px`,
          }}
        />
        {/* Trailing secondary sub-orbit dot */}
        <div
          className="w-1.5 h-1.5 rounded-full bg-green-500 fixed -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out opacity-80"
          style={{
            left: `${cursorPos.x}px`,
            top: `${cursorPos.y}px`,
          }}
        />
      </div>

      <AnimatePresence mode="wait">
        {isLoading ? (
          /* 2. SOUNDLESS LOADING SCREEN (Max 2 seconds transition) */
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.45, ease: "easeInOut" } }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#040406] select-none"
          >
            {/* Pulsing Cyber Rings */}
            <div className="absolute w-[200px] h-[200px] md:w-[320px] md:h-[320px] rounded-full border border-red-500/10 animate-pulse" />
            <div className="absolute w-[280px] h-[280px] md:w-[450px] md:h-[450px] rounded-full border border-red-500/5 animate-ping" />

            <div className="relative text-center space-y-5">
              {/* Pulsing Glowing Logo */}
              <motion.h1
                initial={{ scale: 0.94 }}
                animate={{ scale: [0.94, 1.02, 0.94] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                className="text-4xl md:text-6xl font-sans font-black tracking-[0.2em] text-white"
              >
                DGEN<span className="text-red-500 text-shadow-red font-black"> Z</span>
              </motion.h1>

              {/* Glowing Ambient light source below logo */}
              <div className="w-16 h-1 bg-red-600 mx-auto rounded-full blur-[4px] animate-pulse" />

              {/* Loading Status line for high tech agency perception */}
              <div className="pt-8">
                <div className="flex items-center justify-center gap-1.5 font-mono text-[9px] md:text-[10px] text-gray-400 tracking-widest uppercase">
                  <Terminal className="w-3.5 h-3.5 text-red-500 animate-spin" /> {loadingLog}
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          /* 3. TRANSITIONED MAIN AGENCY EXPERIENCES */
          <motion.div
            key="app-main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-1 flex flex-col pt-24"
          >
            {/* Fully immersive background elements */}
            <Canvas3D />

            {/* Glowing Neon ambient dust indicators */}
            <div className="absolute top-[15vh] left-[10vw] w-72 h-72 bg-rose-600/5 rounded-full blur-[110px] pointer-events-none -z-20" />
            <div className="absolute top-[65vh] right-[12vw] w-96 h-96 bg-green-500/2 rounded-full blur-[130px] pointer-events-none -z-20" />

            <Navbar />
            
            <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pb-16 relative z-10 flex flex-col gap-24">
              {children}
            </main>

            <Footer />

            {/* 4. PERSISTENT FLOATING WHATSAPP CHAT BULLET */}
            <a
              href={floatingWhatsAppLink}
              target="_blank"
              rel="no-referrer"
              className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-green-600 text-white flex items-center justify-center shadow-lg shadow-green-600/30 hover:bg-green-500 border border-white/10 hover:scale-110 active:scale-95 transition-all group outline-none"
              title="Speak with Sobhit Jaiswal"
            >
              <PhoneCall className="w-6 h-6 animate-bounce" />
              <span className="absolute right-16 scale-0 group-hover:scale-100 bg-black/90 text-white text-[10px] font-mono tracking-wider px-3 py-1.5 rounded-lg border border-white/5 uppercase whitespace-nowrap transition-all duration-150">
                WHATSAPP CHAT
              </span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
