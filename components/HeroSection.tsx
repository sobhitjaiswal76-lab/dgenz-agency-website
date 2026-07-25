"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, Variants } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import BackgroundVideo from "./BackgroundVideo";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  // Mouse Parallax State (Desktop only)
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Scroll Progress for Hero Section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax transform effects on scroll
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // Track mouse movement for subtle 3D depth parallax
  useEffect(() => {
    if (typeof window === "undefined") return;

    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / (innerWidth / 2); // -1 to 1
      const y = (e.clientY - innerHeight / 2) / (innerHeight / 2); // -1 to 1
      setMouseOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Parallax pixel calculations
  const bgParallaxX = isTouchDevice ? 0 : mouseOffset.x * 3;
  const bgParallaxY = isTouchDevice ? 0 : mouseOffset.y * 3;

  const textParallaxX = isTouchDevice ? 0 : mouseOffset.x * 6;
  const textParallaxY = isTouchDevice ? 0 : mouseOffset.y * 6;

  const uiParallaxX = isTouchDevice ? 0 : mouseOffset.x * 9;
  const uiParallaxY = isTouchDevice ? 0 : mouseOffset.y * 9;

  // Staggered Entrance Motion Variants
  const eyebrowVariant: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } },
  };

  const line1Variant: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 35, clipPath: "inset(0 0 100% 0)" },
    visible: { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)", transition: { duration: 0.7, delay: 0.6, ease: "easeOut" } },
  };

  const line2Variant: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 35, clipPath: "inset(0 0 100% 0)" },
    visible: { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)", transition: { duration: 0.7, delay: 0.85, ease: "easeOut" } },
  };

  const line3Variant: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 35, clipPath: "inset(0 0 100% 0)" },
    visible: { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)", transition: { duration: 0.7, delay: 1.1, ease: "easeOut" } },
  };

  const supportingVariant: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 1.4 } },
  };

  const ctaVariant: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 1.65 } },
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[100svh] flex flex-col justify-between pt-28 md:pt-36 pb-12 overflow-hidden select-none"
      id="scene-01"
    >
      {/* 1. FULL BLEED CGI VIDEO BACKGROUND LAYER */}
      <motion.div
        style={{
          x: bgParallaxX,
          y: bgParallaxY,
        }}
        className="absolute inset-0 -z-10 w-full h-full"
      >
        <motion.div style={{ scale: videoScale, opacity: videoOpacity }} className="w-full h-full">
          <BackgroundVideo
            webmSrc="/videos/hero-dgenz.webm"
            mp4Src="/videos/hero-cgi.mp4"
            poster="https://picsum.photos/seed/dgenz-hero/1920/1080"
            className="w-full h-full"
          />
        </motion.div>
      </motion.div>

      {/* 2. TOP CORNER CINEMATIC METADATA LABELS */}
      <motion.div
        style={{ x: uiParallaxX, y: uiParallaxY }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="max-w-7xl mx-auto w-full px-6 md:px-10 flex items-center justify-between text-[10px] font-mono tracking-[0.25em] text-neutral-400 uppercase pointer-events-none z-20"
      >
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D90429] animate-pulse" />
          01 / HOME
        </span>
        <span className="hidden sm:inline-block">KOLKATA — INDIA</span>
        <span className="hidden md:inline-block text-[#D90429] font-bold">
          DIGITAL / AI / CREATIVE
        </span>
      </motion.div>

      {/* 3. HERO EDITORIAL TYPOGRAPHY & COMPOSITION */}
      <motion.div
        style={{
          y: textY,
          opacity: textOpacity,
          x: textParallaxX,
        }}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto w-full px-6 md:px-10 my-auto z-20 space-y-6 pt-6 pb-10"
      >
        {/* Eyebrow */}
        <motion.div variants={eyebrowVariant} className="inline-block">
          <span className="px-3.5 py-1.5 rounded-full border border-white/10 bg-black/60 backdrop-blur-md text-neutral-300 text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D90429] animate-pulse" />
            DGEN Z / DIGITAL GROWTH STUDIO
          </span>
        </motion.div>

        {/* Monumental Editorial Headline */}
        <div className="space-y-1 md:space-y-2 max-w-4xl">
          <motion.h1
            variants={line1Variant}
            className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter text-[#F7F7F7] uppercase leading-[0.88] font-sans"
          >
            DIGITAL
          </motion.h1>

          <motion.h1
            variants={line2Variant}
            className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter text-[#F7F7F7] uppercase leading-[0.88] font-sans"
          >
            WITHOUT
          </motion.h1>

          <motion.h1
            variants={line3Variant}
            className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter text-[#D90429] uppercase leading-[0.88] font-sans drop-shadow-[0_0_35px_rgba(217,4,41,0.4)]"
          >
            LIMITS.
          </motion.h1>
        </div>

        {/* Supporting Line & Copy */}
        <motion.div variants={supportingVariant} className="space-y-3 max-w-2xl pt-2">
          <p className="text-xs sm:text-sm md:text-base font-mono text-neutral-300 tracking-[0.2em] uppercase font-bold">
            DESIGN × TECHNOLOGY × MARKETING × AI
          </p>

          <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed max-w-xl">
            DGEN Z builds websites, brands, marketing systems and AI-powered digital experiences for ambitious businesses. Engineered in Kolkata, India.
          </p>
        </motion.div>

        {/* Action CTAs */}
        <motion.div variants={ctaVariant} className="flex flex-wrap items-center gap-4 pt-4">
          {/* Primary CTA */}
          <a
            href="#selected-work"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-[#D90429] hover:bg-[#D90429]/90 text-white font-sans font-bold text-xs uppercase tracking-[0.2em] rounded-sm shadow-xl shadow-[#D90429]/25 hover:-translate-y-0.5 transition-all duration-300 outline-none overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              EXPLORE OUR WORK
              <ArrowDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>

          {/* Secondary CTA */}
          <a
            href="#proposal"
            className="group inline-flex items-center gap-2 px-7 py-4 bg-black/60 hover:bg-black/90 border border-white/20 hover:border-[#D90429] text-[#F7F7F7] font-sans font-bold text-xs uppercase tracking-[0.2em] rounded-sm transition-all duration-300 outline-none backdrop-blur-md"
          >
            START A PROJECT
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#D90429]" />
          </a>

          {/* Direct WhatsApp Consultation */}
          <a
            href="https://wa.me/919681168381?text=Hello%20Sobhit%2C%20I%20want%20to%20discuss%20a%20project%20with%20DGEN%20Z."
            target="_blank"
            rel="no-referrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-4 text-xs font-mono font-bold text-[#39ff14] hover:text-[#39ff14]/80 uppercase tracking-widest hover:underline transition-all"
          >
            WhatsApp Founder ↗
          </a>
        </motion.div>
      </motion.div>

      {/* 4. SCROLL INDICATOR & FOOTER BAR */}
      <motion.div
        style={{ x: uiParallaxX, y: uiParallaxY }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="max-w-7xl mx-auto w-full px-6 md:px-10 pt-6 flex items-end justify-between border-t border-white/10 text-[10px] font-mono text-neutral-400 uppercase tracking-[0.25em] z-20"
      >
        <span className="hidden sm:inline">FOUNDER: SOBHIT JAISWAL</span>

        {/* Minimal Animated Scroll Indicator */}
        <a
          href="#scene-02"
          className="flex flex-col items-center gap-2 group cursor-pointer mx-auto sm:mx-0 outline-none"
        >
          <span className="text-[9px] text-neutral-400 group-hover:text-[#D90429] transition-colors">
            SCROLL TO EXPLORE
          </span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-[#D90429] via-[#D90429]/50 to-transparent group-hover:h-10 transition-all duration-300" />
        </a>

        <span className="hidden sm:inline">DGEN Z SYSTEM V3.5</span>
      </motion.div>

      {/* 5. SMOOTH TRANSITION GRADIENT FADE TO NEXT SECTION */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#030303] via-[#030303]/60 to-transparent pointer-events-none z-10" />
    </section>
  );
}
