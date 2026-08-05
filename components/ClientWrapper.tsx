"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Canvas3D from "./Canvas3D";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Terminal, ShieldAlert, Sparkles, PhoneCall } from "lucide-react";
import Logo from "./Logo";
import VeerChatbot from "./VeerChatbot";
import { ThemeProvider } from "./ThemeContext";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingLog, setLoadingLog] = useState("INITIATING CORE BOOTLOADER...");
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smooth progress bar increment from 0 to 100% over ~1.2s
    const startTime = Date.now();
    const duration = 1200;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(interval);
        setTimeout(() => setIsLoading(false), 200);
      }
    }, 16);

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
      clearInterval(interval);
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
    <ThemeProvider>
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
          /* SCENE 00 — PRELOADER */
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)", transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] select-none text-white px-4"
          >
            <div className="flex flex-col items-center justify-center space-y-6 max-w-sm w-full">
              {/* Small Centered Wordmark */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <span className="text-3xl md:text-4xl font-black tracking-widest uppercase italic bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent font-sans">
                  DGEN <span className="text-[#D90429]">Z</span>
                </span>
                <p className="text-[10px] md:text-xs font-mono tracking-[0.3em] text-[#A7A7A7] uppercase mt-2">
                  DESIGN × TECHNOLOGY × GROWTH
                </p>
              </motion.div>

              {/* Thin Red Progress Line */}
              <div className="w-full max-w-[200px] h-[2px] bg-neutral-900 rounded-full overflow-hidden relative">
                <motion.div
                  className="h-full bg-[#D90429] shadow-[0_0_8px_#D90429]"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Percentage Indicator */}
              <span className="text-[10px] font-mono text-neutral-500 tracking-widest">
                {progress}%
              </span>
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

            {/* 4. PERSISTENT VEER.1 AI CHATBOT */}
            <VeerChatbot />

            {/* 5. PERSISTENT FLOATING WHATSAPP CHAT BULLET */}
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
    </ThemeProvider>
  );
}
