"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Core SEO page navigational array
  const links = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Web Dev", href: "/websites" },
    { name: "Marketing", href: "/marketing" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About Space", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 inset-x-0 z-40 px-4 md:px-8 py-4 select-none">
        <div className="max-w-7xl mx-auto rounded-full border border-white/[0.08] bg-black/60 backdrop-blur-xl px-5 md:px-8 py-3 flex items-center justify-between relative shadow-lg shadow-black/40">
          
          {/* Subtle neon glowing horizontal trace */}
          <div className="absolute inset-x-12 bottom-0 h-[1.3px] bg-gradient-to-r from-transparent via-crimson/50 to-transparent" />

          {/* Business Logo */}
          <Link href="/" className="inline-flex items-center gap-1.5 font-sans font-black tracking-widest text-lg md:text-xl text-white group outline-none">
            <span className="relative">
              DGEN
              <span className="text-crimson font-extrabold group-hover:text-neon-green transition-colors"> Z</span>
              <span className="absolute -top-1 -right-3.5 w-1.5 h-1.5 rounded-full bg-crimson animate-ping" />
            </span>
            <span className="text-[10px] font-mono text-gray-500 tracking-normal hover:text-white transition-colors pl-1 uppercase border-l border-zinc-700 hidden sm:inline ml-1">
              SOBHIT JAISWAL
            </span>
          </Link>

          {/* Desktop Nav Actions */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-xs font-sans tracking-wide uppercase transition-all relative outline-none ${
                    isActive
                      ? "text-crimson font-bold drop-shadow-[0_0_8px_rgba(220,20,60,0.5)]"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  {isActive && (
                    <motion.span
                      layoutId="navTab"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className="absolute inset-0 rounded-full bg-white/[0.04] border border-white/10"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-crimson/40 bg-crimson/10 text-crimson text-xs font-sans font-bold uppercase tracking-wider hover:border-crimson hover:bg-crimson/20 transition-all shadow shadow-crimson/10 outline-none"
            >
              Get Free Consultation <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 rounded-full bg-zinc-900 border border-white/5 text-gray-400 hover:text-white transition-all outline-none"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Slide Out */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 pt-24 pb-8 px-4 bg-black/95 backdrop-blur-2xl lg:hidden flex flex-col justify-between"
          >
            {/* Backdrop digital grid line */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />

            <div className="space-y-3 relative z-10">
              <span className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest pl-4 mb-4">
                NAVIGATIONAL GATEWAY
              </span>
              <div className="flex flex-col gap-1.5">
                {links.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-3.5 rounded-xl text-sm font-sans font-bold tracking-wider uppercase transition-all flex items-center justify-between border ${
                        isActive
                          ? "bg-crimson/10 border-crimson/40 text-crimson"
                          : "border-transparent text-gray-400 hover:text-white hover:bg-zinc-900/40"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight className={`w-4 h-4 text-gray-600 ${isActive ? "text-crimson" : ""}`} />
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="space-y-4 px-4 relative z-10">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm bg-crimson hover:bg-crimson/90 text-white font-sans font-bold uppercase text-xs tracking-wider shadow-lg shadow-crimson/20 active:scale-98"
              >
                Start Project <Sparkles className="w-4 h-4 text-rose-300" />
              </Link>

              <div className="text-center font-mono text-[9px] text-gray-500 uppercase tracking-widest">
                DGEN Z • PREMIUM DIGITAL MATRIX
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
