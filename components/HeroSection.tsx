"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, AnimatePresence } from "motion/react";
import { ArrowRight, Play, X, Sparkles, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import BackgroundVideo from "./BackgroundVideo";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);

  // Mouse Parallax State (Desktop only)
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  // Scroll Progress for Hero Section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.8], [0.85, 0.3]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  // Track mouse movement for subtle depth parallax
  useEffect(() => {
    if (typeof window === "undefined") return;
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (e.clientY - innerHeight / 2) / (innerHeight / 2);
      setMouseOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[100svh] flex flex-col justify-between pt-28 md:pt-32 pb-8 overflow-hidden select-none"
      id="home"
    >
      {/* 1. CINEMATIC BACKGROUND VIDEO & ATMOSPHERIC GRAIN */}
      <div className="absolute inset-0 -z-20 w-full h-full pointer-events-none">
        <motion.div style={{ scale: videoScale, opacity: videoOpacity }} className="w-full h-full">
          <BackgroundVideo
            webmSrc="/videos/hero-dgenz.webm"
            mp4Src="/videos/hero-cgi.mp4"
            poster="https://picsum.photos/seed/dgenz-hero/1920/1080"
            className="w-full h-full opacity-60"
          />
        </motion.div>
      </div>

      {/* Atmospheric Ambient Gradients */}
      <div className="absolute top-1/4 -left-20 w-[450px] h-[450px] bg-[#D90429]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* 2. MAIN HERO GRID (TYPOGRAPHY LEFT + 3D DEVICE SHOWCASE RIGHT) */}
      <motion.div
        style={{ y: textY }}
        className="max-w-7xl mx-auto w-full px-6 md:px-10 my-auto z-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-6"
      >
        
        {/* LEFT COLUMN: EDITORIAL STATEMENT */}
        <div className="lg:col-span-7 space-y-6 md:space-y-8">
          
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.28em] text-neutral-400 font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D90429] animate-pulse" />
              IDEAS × AI × CREATIVITY × EXECUTION
            </span>
          </motion.div>

          {/* Monumental Headline */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="space-y-1"
          >
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[5.5rem] xl:text-[6.2rem] font-black tracking-tight text-white uppercase font-sans leading-[0.92]">
              BRANDS
            </h1>
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[5.5rem] xl:text-[6.2rem] font-black tracking-tight text-white uppercase font-sans leading-[0.92]">
              BUILT FOR A
            </h1>
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[5.5rem] xl:text-[6.2rem] font-black tracking-tight uppercase font-sans leading-[0.92] text-[#D90429] drop-shadow-[0_0_40px_rgba(217,4,41,0.45)]">
              BOLDER <span className="text-white">TOMORROW.</span>
            </h1>
          </motion.div>

          {/* Subheading Statement */}
          <motion.p
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base sm:text-lg md:text-xl text-neutral-300 font-sans leading-relaxed max-w-xl font-normal"
          >
            We&apos;re DGEN Z — an AI Marketing Studio helping businesses grow with strategy, creativity and technology.
          </motion.p>

          {/* Action CTAs: Start Project (Crimson Pill) + Watch Showreel */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            {/* Primary Crimson Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#D90429] hover:bg-[#b50322] text-white font-sans font-bold text-sm md:text-base tracking-wide shadow-xl shadow-[#D90429]/30 hover:shadow-2xl hover:shadow-[#D90429]/45 hover:-translate-y-0.5 transition-all duration-200 outline-none cursor-pointer"
            >
              Start Your Project <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            {/* Watch Showreel Circle Button */}
            <button
              onClick={() => setIsShowreelOpen(true)}
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full border border-white/20 bg-black/40 hover:bg-black/70 hover:border-white/40 text-white font-sans font-medium text-sm md:text-base transition-all duration-200 backdrop-blur-md cursor-pointer outline-none group"
            >
              <span className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#D90429] text-white flex items-center justify-center transition-colors">
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              </span>
              <span>Watch Showreel</span>
            </button>
          </motion.div>

          {/* Social Proof Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center gap-4 pt-4 border-t border-white/10 max-w-lg"
          >
            {/* Avatar Stack */}
            <div className="flex -space-x-2.5 overflow-hidden">
              <div className="inline-block h-8 w-8 rounded-full ring-2 ring-black bg-neutral-800 relative overflow-hidden">
                <Image src="https://picsum.photos/seed/avatar1/100/100" alt="Client" fill unoptimized className="object-cover" />
              </div>
              <div className="inline-block h-8 w-8 rounded-full ring-2 ring-black bg-neutral-800 relative overflow-hidden">
                <Image src="https://picsum.photos/seed/avatar2/100/100" alt="Client" fill unoptimized className="object-cover" />
              </div>
              <div className="inline-block h-8 w-8 rounded-full ring-2 ring-black bg-neutral-800 relative overflow-hidden">
                <Image src="https://picsum.photos/seed/avatar3/100/100" alt="Client" fill unoptimized className="object-cover" />
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 font-sans">
              <span className="text-white font-semibold">Trusted by growing businesses,</span> creators and brands.
            </p>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: 3D DEVICE & CYBERNETIC SCULPTURE SHOWCASE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            x: mouseOffset.x * 12,
            y: mouseOffset.y * 12,
          }}
          className="lg:col-span-5 relative flex justify-center items-center"
        >
          {/* Outer Frame Container */}
          <div className="relative w-full max-w-[500px] aspect-[4/3] sm:aspect-[16/11] rounded-2xl p-2 bg-gradient-to-b from-white/20 via-white/5 to-black/60 border border-white/20 shadow-2xl shadow-black/90 backdrop-blur-xl group overflow-hidden">
            
            {/* Inner Laptop/Tablet Screen Screen Canvas */}
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#0a0a0c] border border-white/10 flex flex-col justify-between p-5 md:p-6 select-none">
              
              {/* Screen Top Bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 z-10">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D90429]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
                </div>
                <span className="text-[10px] font-mono tracking-widest text-neutral-400 font-bold uppercase">
                  DGEN Z CORE STUDIO
                </span>
                <span className="text-[9px] font-mono text-[#D90429] bg-[#D90429]/10 px-2 py-0.5 rounded border border-[#D90429]/20 font-bold">
                  AI LIVE
                </span>
              </div>

              {/* Central Visual: Classical Sculpture with Cybernetic Visor Glow */}
              <div className="absolute inset-0 z-0 flex items-center justify-center opacity-85 group-hover:scale-105 transition-transform duration-700">
                <div className="relative w-full h-full">
                  <Image
                    src="https://picsum.photos/seed/dgenz-sculpture/800/600"
                    alt="DGEN Z AI Sculpture"
                    fill
                    unoptimized
                    className="object-cover object-center grayscale contrast-125 mix-blend-screen"
                  />
                  {/* Cyber Laser Visor Overlay */}
                  <div className="absolute top-[42%] left-1/2 -translate-x-1/2 w-36 h-2 bg-[#D90429] shadow-[0_0_20px_#D90429] rounded-full blur-[1px] animate-pulse" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-black/60" />
                </div>
              </div>

              {/* Calligraphic Handwritten Script Overlay */}
              <div className="absolute top-12 right-6 z-10 rotate-[-8deg] pointer-events-none">
                <span className="font-serif italic text-xl md:text-2xl text-[#D90429] font-bold drop-shadow-[0_2px_10px_rgba(217,4,41,0.5)]">
                  &ldquo;More Than Marketing.&rdquo;
                </span>
              </div>

              {/* Screen Foreground Copy & Taglines */}
              <div className="z-10 mt-auto space-y-2 pt-16">
                <span className="text-[10px] font-mono text-neutral-400 tracking-[0.2em] uppercase font-bold block">
                  AI-POWERED CREATIVE ENGINEERING
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white font-sans uppercase tracking-tight leading-tight">
                  TURN IDEAS INTO <span className="text-[#D90429] drop-shadow-[0_0_15px_rgba(217,4,41,0.6)]">IMPACT.</span>
                </h3>
                <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[11px] font-mono text-neutral-300">
                  <span>Strategy • Creativity • Automation</span>
                  <span className="text-[#D90429] font-bold">GROWTH ↗</span>
                </div>
              </div>

            </div>

            {/* Glowing Corner Accents */}
            <div className="absolute -top-1 -right-1 w-8 h-8 bg-[#D90429]/30 rounded-full blur-lg pointer-events-none" />
            <div className="absolute -bottom-1 -left-1 w-8 h-8 bg-[#D90429]/30 rounded-full blur-lg pointer-events-none" />
          </div>
        </motion.div>
      </motion.div>

      {/* 3. BOTTOM SCROLL INDICATOR & METADATA BAR */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-10 pt-4 flex items-center justify-between text-[11px] font-mono text-neutral-400 uppercase tracking-widest z-20">
        <div className="flex items-center gap-2">
          <span className="text-white font-bold">DGEN Z</span>
          <span className="text-neutral-600">/</span>
          <span>KOLKATA, INDIA</span>
        </div>

        {/* Minimal Scroll Indicator */}
        <a
          href="#services"
          className="flex items-center gap-2 group cursor-pointer hover:text-white transition-colors"
        >
          <span className="tracking-[0.2em]">SCROLL TO EXPLORE</span>
          <div className="w-4 h-4 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#D90429] transition-colors">
            <span className="w-1 h-1 rounded-full bg-[#D90429] animate-bounce" />
          </div>
        </a>
      </div>

      {/* SHOWREEL MODAL OVERLAY */}
      <AnimatePresence>
        {isShowreelOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl bg-neutral-950 border border-white/20 rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsShowreelOpen(false)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/80 hover:bg-[#D90429] text-white transition-colors cursor-pointer border border-white/10"
                aria-label="Close showreel"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Showreel Video / Interactive Player */}
              <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
                <video
                  autoPlay
                  controls
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/hero-dgenz.webm" type="video/webm" />
                  <source src="/videos/hero-cgi.mp4" type="video/mp4" />
                </video>
              </div>

              {/* Video Footer Info */}
              <div className="p-6 bg-neutral-900 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-white font-bold font-sans text-lg">
                    DGEN Z — 2026 AI STUDIO SHOWREEL
                  </h4>
                  <p className="text-neutral-400 text-xs font-sans mt-0.5">
                    Cinematic 3D branding, web engineering, and AI automation for market-leading brands.
                  </p>
                </div>
                <a
                  href="#contact"
                  onClick={() => setIsShowreelOpen(false)}
                  className="px-6 py-2.5 rounded-full bg-[#D90429] hover:bg-[#b50322] text-white font-bold text-xs uppercase tracking-wider transition-all"
                >
                  Work With Us →
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
