"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Bot, X, ExternalLink, HelpCircle } from "lucide-react";

export default function VeerChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Keyboard accessibility: ESC closes modal, focus trapping
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      // Focus trapping: focus the close button or the modal content
      modalRef.current?.focus();
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const chatbotUrl = "https://chatbot.getmindpal.com/veer-dgen-z-sales-manager-qz0";

  return (
    <>
      {/* 1. FLOATING CHAT TRIGGER BUTTON */}
      <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end">
        {/* Tooltip / Hover Label */}
        <div className="relative group flex items-center">
          <span className="absolute right-16 scale-0 group-hover:scale-100 bg-[#08080c]/95 text-white text-[11px] font-mono tracking-widest px-3 py-2 rounded-lg border border-[#D90429]/30 uppercase whitespace-nowrap shadow-xl shadow-black/50 transition-all duration-200 pointer-events-none">
            VEER.1 AI Consultant
          </span>

          <motion.button
            ref={triggerRef}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Open VEER.1 AI Consultant"
            aria-haspopup="dialog"
            aria-expanded={isOpen}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              boxShadow: [
                "0 0 0 0 rgba(217, 4, 41, 0.4)",
                "0 0 0 12px rgba(217, 4, 41, 0)",
                "0 0 0 0 rgba(217, 4, 41, 0.4)"
              ]
            }}
            transition={{
              opacity: { duration: 0.5 },
              scale: { duration: 0.5 },
              boxShadow: {
                repeat: Infinity,
                duration: 8, // Pulse every 8 seconds
                ease: "easeInOut"
              }
            }}
            whileHover={{ 
              scale: 1.08,
              borderColor: "rgba(217, 4, 41, 0.8)",
              boxShadow: "0 0 20px rgba(217, 4, 41, 0.6)"
            }}
            whileTap={{ scale: 0.95 }}
            className={`w-14 h-14 rounded-full flex items-center justify-center border transition-all duration-300 relative outline-none cursor-pointer ${
              isOpen 
                ? "bg-[#0c0c10] border-[#D90429] text-[#D90429]" 
                : "bg-black border-white/10 text-white"
            }`}
            id="veer-chat-trigger"
          >
            {/* Robot Icon */}
            <Bot className="w-6 h-6" />

            {/* Neon Green Online Indicator */}
            <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-[#39ff14] border-2 border-black rounded-full shadow-[0_0_8px_#39ff14]" />
          </motion.button>
        </div>
      </div>

      {/* 2. CHAT MODAL / DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center md:items-end md:justify-end p-0 md:p-6 pointer-events-none"
            role="dialog"
            aria-modal="true"
            aria-labelledby="veer-modal-title"
          >
            {/* Backdrop for mobile to focus attention, dismiss on click */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto md:hidden"
            />

            {/* Modal Container */}
            <motion.div
              ref={modalRef}
              tabIndex={-1}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="w-full h-full md:w-[420px] md:h-[640px] md:max-h-[85vh] bg-[#08080c] border border-white/10 md:rounded-2xl shadow-2xl flex flex-col overflow-hidden glass pointer-events-auto relative z-10"
              id="veer-chat-modal"
            >
              {/* Sleek minimal header for the frame with brand elements */}
              <div className="px-4 py-3 bg-black border-b border-white/5 flex items-center justify-between relative shrink-0">
                {/* Glowing aesthetic indicator line */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D90429] to-transparent animate-pulse" />
                
                <div className="flex items-center gap-2.5">
                  <div className="relative w-8 h-8 rounded-full bg-[#D90429]/10 border border-[#D90429]/35 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-[#D90429]" />
                    <span className="absolute bottom-0 right-0 w-2 h-2 bg-[#39ff14] border border-black rounded-full" />
                  </div>
                  <div>
                    <h3 id="veer-modal-title" className="text-xs font-mono tracking-widest uppercase text-white font-bold flex items-center gap-1.5">
                      VEER.1 <span className="text-[9px] bg-[#D90429]/15 border border-[#D90429]/30 text-[#D90429] px-1 rounded-sm uppercase tracking-wider font-extrabold">MindPal</span>
                    </h3>
                    <p className="text-[9px] text-gray-500 font-sans tracking-wide">Business Growth Consultant</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a 
                    href={chatbotUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Open in new tab"
                    className="p-1.5 text-gray-500 hover:text-white hover:bg-white/5 rounded-lg transition-all outline-none"
                    aria-label="Open chatbot in a new browser tab"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => setIsOpen(false)}
                    aria-label="Close VEER.1 Consultant"
                    className="p-1.5 text-gray-500 hover:text-white hover:bg-white/5 rounded-lg transition-all outline-none cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Seamless mindpal chatbot iframe */}
              <div className="flex-1 bg-black relative">
                <iframe
                  src={chatbotUrl}
                  title="VEER.1 AI Chatbot"
                  className="w-full h-full border-0"
                  allow="microphone; clipboard-write"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
