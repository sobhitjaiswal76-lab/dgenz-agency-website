"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  ExternalLink,
  Maximize2,
  Minimize2,
  Sparkles
} from "lucide-react";

export interface LightboxItem {
  id: string;
  title: string;
  client: string;
  category?: string;
  description?: string;
  imageUrl?: string;
  imageSeed?: string;
  liveUrl?: string;
  tags?: string[];
  visualColor?: string;
}

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: LightboxItem[];
  currentIndex: number;
  onNavigate?: (newIndex: number) => void;
}

export default function LightboxModal({
  isOpen,
  onClose,
  items,
  currentIndex,
  onNavigate,
}: LightboxModalProps) {
  const [zoom, setZoom] = useState(1);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const currentItem = items[currentIndex] || items[0];

  // Helper to format item image URL
  const getImageSrc = useCallback((item: LightboxItem) => {
    if (item.imageUrl) return item.imageUrl;
    const seed = item.imageSeed || item.id || "dgenz";
    return `https://picsum.photos/seed/${seed}/1600/1000`;
  }, []);

  // Navigation logic
  const handlePrev = useCallback(() => {
    setZoom(1);
    if (onNavigate && items.length > 0) {
      const prevIndex = (currentIndex - 1 + items.length) % items.length;
      onNavigate(prevIndex);
    }
  }, [currentIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    setZoom(1);
    if (onNavigate && items.length > 0) {
      const nextIndex = (currentIndex + 1) % items.length;
      onNavigate(nextIndex);
    }
  }, [currentIndex, items.length, onNavigate]);

  // Keyboard Navigation & Esc listeners
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "+" || e.key === "=") {
        setZoom((z) => Math.min(z + 0.25, 2.5));
      } else if (e.key === "-") {
        setZoom((z) => Math.max(z - 0.25, 0.75));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    // Lock background scroll when open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !currentItem) return null;

  const currentSrc = getImageSrc(currentItem);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 bg-[#030303]/98 backdrop-blur-2xl flex flex-col justify-between p-4 md:p-8 select-none overflow-hidden"
          onClick={(e) => {
            // Close if clicked backdrop outside main content
            if (e.target === e.currentTarget) onClose();
          }}
        >
          {/* Top Control Header Bar */}
          <div className="flex items-center justify-between gap-4 z-20 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-sm bg-[#D90429]/20 border border-[#D90429]/40 text-[#D90429] text-xs font-mono font-bold tracking-widest uppercase">
                {String(currentIndex + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-white text-sm md:text-base font-sans font-bold uppercase tracking-wider">
                  {currentItem.title}
                </h3>
                <span className="text-neutral-400 text-xs font-mono uppercase tracking-widest block">
                  {currentItem.client} {currentItem.category ? `• ${currentItem.category}` : ""}
                </span>
              </div>
            </div>

            {/* Action Tools */}
            <div className="flex items-center gap-2">
              {/* Zoom Out */}
              <button
                onClick={() => setZoom((z) => Math.max(z - 0.25, 0.75))}
                disabled={zoom <= 0.75}
                className="p-2 rounded-sm bg-black/60 border border-white/10 text-neutral-300 hover:text-white hover:border-[#D90429]/50 transition-all disabled:opacity-30 disabled:cursor-not-allowed outline-none"
                title="Zoom Out (-)"
              >
                <ZoomOut className="w-4 h-4" />
              </button>

              {/* Reset Zoom */}
              <button
                onClick={() => setZoom(1)}
                className="p-2 rounded-sm bg-black/60 border border-white/10 text-neutral-300 hover:text-white hover:border-[#D90429]/50 transition-all outline-none"
                title="Reset Zoom"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              {/* Zoom In */}
              <button
                onClick={() => setZoom((z) => Math.min(z + 0.25, 2.5))}
                disabled={zoom >= 2.5}
                className="p-2 rounded-sm bg-black/60 border border-white/10 text-neutral-300 hover:text-white hover:border-[#D90429]/50 transition-all disabled:opacity-30 disabled:cursor-not-allowed outline-none"
                title="Zoom In (+)"
              >
                <ZoomIn className="w-4 h-4" />
              </button>

              {/* Toggle Fullscreen */}
              <button
                onClick={() => {
                  if (!document.fullscreenElement) {
                    document.documentElement.requestFullscreen().catch(() => {});
                    setIsFullScreen(true);
                  } else {
                    document.exitFullscreen().catch(() => {});
                    setIsFullScreen(false);
                  }
                }}
                className="hidden sm:inline-flex p-2 rounded-sm bg-black/60 border border-white/10 text-neutral-300 hover:text-white hover:border-[#D90429]/50 transition-all outline-none"
                title="Toggle Fullscreen"
              >
                {isFullScreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-2 rounded-sm bg-[#D90429] hover:bg-[#D90429]/90 text-white font-bold transition-all shadow-lg shadow-[#D90429]/20 outline-none ml-2"
                title="Close Lightbox (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Interactive Stage with Navigation */}
          <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden z-10 group">
            {/* Previous Arrow */}
            {items.length > 1 && (
              <button
                onClick={handlePrev}
                className="absolute left-2 md:left-6 z-30 p-3 rounded-full bg-black/70 border border-white/20 text-white hover:bg-[#D90429] hover:border-[#D90429] transition-all shadow-2xl backdrop-blur-md outline-none"
                aria-label="Previous Project Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Next Arrow */}
            {items.length > 1 && (
              <button
                onClick={handleNext}
                className="absolute right-2 md:right-6 z-30 p-3 rounded-full bg-black/70 border border-white/20 text-white hover:bg-[#D90429] hover:border-[#D90429] transition-all shadow-2xl backdrop-blur-md outline-none"
                aria-label="Next Project Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {/* Lightbox Main Image Canvas */}
            <motion.div
              key={currentItem.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: zoom }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[72vh] w-full h-full flex items-center justify-center rounded-xl overflow-hidden border border-white/10 bg-black/60 shadow-2xl"
            >
              <Image
                src={currentSrc}
                alt={currentItem.title}
                fill
                unoptimized
                priority
                referrerPolicy="no-referrer"
                className="object-contain p-2 md:p-4 transition-transform duration-300"
              />

              {/* Subtle watermark / glow line */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#D90429] via-neutral-500 to-[#39ff14] opacity-50 pointer-events-none" />
            </motion.div>
          </div>

          {/* Bottom Project Details & Direct Links */}
          <div className="z-20 border-t border-white/10 pt-4 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-black/40 backdrop-blur-md p-4 rounded-sm">
            <div className="space-y-1 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-mono text-[#D90429] font-bold uppercase tracking-widest">
                  {currentItem.client}
                </span>
                {currentItem.tags && (
                  <div className="flex flex-wrap gap-1">
                    {currentItem.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded-full bg-white/5 text-[9px] font-mono text-neutral-300 border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <p className="text-xs text-neutral-300 font-sans leading-relaxed line-clamp-2">
                {currentItem.description}
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              {currentItem.liveUrl && (
                <a
                  href={currentItem.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-sm bg-[#D90429] hover:bg-[#D90429]/90 text-white text-xs font-mono font-bold uppercase tracking-widest transition-all shadow-lg shadow-[#D90429]/25 outline-none"
                >
                  <Sparkles className="w-3.5 h-3.5" /> VISIT LIVE WEBSITE <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                </a>
              )}

              <a
                href={`https://wa.me/919681168381?text=Hello%20DGEN%20Z%2C%20I%20saw%20your%20project%20%22${encodeURIComponent(currentItem.title)}%22%20in%20fullscreen%20mode%20and%20want%20to%20discuss.`}
                target="_blank"
                rel="no-referrer"
                className="inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-sm bg-black border border-white/20 hover:border-[#D90429] text-white text-xs font-mono font-bold uppercase tracking-widest transition-all outline-none"
              >
                ENQUIRE ON WHATSAPP ↗
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
