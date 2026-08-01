"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { Plus, Eye, ExternalLink, X, UploadCloud, Maximize2, Sparkles } from "lucide-react";
import LightboxModal, { LightboxItem } from "./LightboxModal";

interface PortfolioItem extends LightboxItem {
  id: string;
  title: string;
  category: string;
  client: string;
  description: string;
  tags: string[];
  visualColor: string; // Gradient color schema for futuristic card
  imageSeed?: string;
  imageUrl?: string;
  liveUrl?: string;
}

// Preloaded premium design items by DGEN Z
const defaultItems: PortfolioItem[] = [
  {
    id: "p0",
    title: "Digital Menu & Food Ordering Platform",
    category: "Website Projects",
    client: "THE CHOW CART",
    description: "Ultra-fast Next.js single-page digital menu platform with direct WhatsApp food order triggers, high-contrast typography, and Google local SEO optimization.",
    tags: ["Next.js 15", "Digital Menu", "WhatsApp Ordering", "Google Maps SEO"],
    visualColor: "from-crimson via-black to-neutral-900",
    imageSeed: "chowcart",
    liveUrl: "https://thechowcart.vercel.app"
  },
  {
    id: "p1",
    title: "Neon Café Ordering Hub",
    category: "Website Projects",
    client: "Park Street Coffee Co.",
    description: "High performance web application showcasing premium 3D parallax menus, live WhatsApp item ordering integration, and fully optimized Google local SEO coordinates.",
    tags: ["Next.js", "Tailwind 3D", "WhatsApp API", "Wasm Core"],
    visualColor: "from-crimson to-black",
    imageSeed: "cafe"
  },
  {
    id: "p2",
    title: "Cosmic Brand Re-engineer",
    category: "Branding",
    client: "Aether Energy Drinks",
    description: "Complete corporate overhaul strategy consisting of vector corporate logos, high contrast presentation decks, and premium aluminum can rendering concepts.",
    tags: ["Vector Grid", "Brand Strategy", "Matte Gray Vibe"],
    visualColor: "from-zinc-900 via-stone-800 to-neutral-900",
    imageSeed: "can"
  },
  {
    id: "p3",
    title: "Instagram Influence Surge Kit",
    category: "Social Media Designs",
    client: "Fitness Forge Gyms",
    description: "Twelve high conversion post grids, customized carousel automation structures, and prebuilt interactive story triggers styled directly with glowing crimson outlines.",
    tags: ["Instagram Automation", "Conversion Posters", "Grid Master"],
    visualColor: "from-neon-green/40 via-black to-neutral-500/20",
    imageSeed: "post"
  },
  {
    id: "p4",
    title: "Brand Identity & Business Gap Strategy",
    category: "Branding",
    client: "Behind The Cake",
    description: "In-depth business gap analysis and strategic consultation paired with enhanced brand identity collateral and luxury business card design for artisanal confectioneries.",
    tags: ["Business Gap Analysis", "Consultation", "Brand Identity", "Business Card Design"],
    visualColor: "from-crimson/40 to-black",
    imageSeed: "cake1"
  },
  {
    id: "p5",
    title: "Product Photoshoot & Social Profile Optimization",
    category: "Social Media Designs",
    client: "Behind The Cake",
    description: "Professional product photoshoot for custom delicacies paired with Instagram & Facebook business profile optimization and high-conversion post grid designs.",
    tags: ["Product Photoshoot", "Instagram Profile", "Facebook Profile", "Social Media"],
    visualColor: "from-crimson/40 to-[#1c1917]",
    imageSeed: "cake2"
  },
  {
    id: "p6",
    title: "Web3 Interactive Sandbox",
    category: "Website Projects",
    client: "Decentra Node Systems",
    description: "Futuristic developer documentation layout, fully responsive mobile command center tabs, integrated real-time node performance indicators without API latencies.",
    tags: ["React 19", "Framer Node", "Core Web Vitals"],
    visualColor: "from-neon-green/40 to-black",
    imageSeed: "web3"
  }
];

export default function PortfolioShowcase() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [items, setItems] = useState<PortfolioItem[]>([]);
  
  // Lightbox Modal state
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  
  // Dynamic add state
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newCategory, setNewCategory] = useState("Website Projects");
  const [newClient, setNewClient] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [newTags, setNewTags] = useState("");
  const [newColor, setNewColor] = useState("from-crimson to-neutral-900");

  const categories = [
    { value: "all", label: "All Creations" },
    { value: "Website Projects", label: "Website Projects" },
    { value: "Social Media Designs", label: "Social Media Designs" },
    { value: "Branding", label: "Corporate Branding" },
    { value: "Packaging", label: "Premium Packaging & Logos" },
    { value: "Business Presentations", label: "Professional PPT & Decks" }
  ];

  useEffect(() => {
    const saved = localStorage.getItem("dgenz_portfolio");
    if (saved) {
      const parsed = JSON.parse(saved);
      const timer = setTimeout(() => {
        setItems(parsed);
      }, 0);
      return () => clearTimeout(timer);
    } else {
      localStorage.setItem("dgenz_portfolio", JSON.stringify(defaultItems));
      const timer = setTimeout(() => {
        setItems(defaultItems);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newClient || !newDesc) {
      alert("Please fill in core elements to register design catalog!");
      return;
    }

    const newItem: PortfolioItem = {
      id: "custom_" + Math.random().toString(36).slice(2, 9),
      title: newTitle,
      category: newCategory,
      client: newClient,
      description: newDesc,
      tags: newTags ? newTags.split(",").map(t => t.trim()) : ["Core Design"],
      visualColor: newColor,
    };

    const updated = [newItem, ...items];
    localStorage.setItem("dgenz_portfolio", JSON.stringify(updated));
    setItems(updated);

    // Reset Form
    setNewTitle("");
    setNewClient("");
    setNewDesc("");
    setNewTags("");
    setIsAddOpen(false);
  };

  const handlePurge = () => {
    if (confirm("Reset layout showcase back to original curated standards?")) {
      localStorage.setItem("dgenz_portfolio", JSON.stringify(defaultItems));
      setItems(defaultItems);
    }
  };

  const filteredItems = activeFilter === "all"
    ? items
    : items.filter(item => item.category === activeFilter);

  return (
    <div className="space-y-10 bg-transparent" id="masonry-gallery">
      
      {/* Filters Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/5 pb-6">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveFilter(cat.value)}
              className={`px-4 py-2 rounded-full text-xs font-sans uppercase tracking-wider transition-all border outline-none ${
                activeFilter === cat.value
                  ? "bg-crimson/10 border-crimson text-crimson font-bold"
                  : "bg-black/40 border-white/10 text-gray-400 hover:text-white hover:border-crimson/20"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic creation button */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsAddOpen(true)}
            className="inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-sm bg-black/40 border border-white/10 hover:border-crimson/30 text-white font-sans text-xs uppercase tracking-widest transition-all cursor-pointer"
          >
            <Plus className="w-4 h-4 text-crimson" /> Upload Project
          </button>
          <button
            onClick={handlePurge}
            className="text-[10px] font-mono text-gray-500 hover:text-white uppercase transition-colors cursor-pointer"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Grid Showcase */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-20 border border-dashed border-white/10 rounded-2xl text-gray-500 text-sm glass">
          No works in this category registered yet. Add any design using the upload console!
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => {
            const imgSrc = item.imageUrl || `https://picsum.photos/seed/${item.imageSeed || item.id}/800/500`;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="group relative rounded-xl border border-white/[0.08] bg-black/40 glass hover:border-crimson/30 shadow-lg overflow-hidden flex flex-col justify-between transition-all duration-300"
              >
                {/* Image Thumbnail Container with Hover Zoom & Click to Lightbox */}
                <div
                  className="relative h-48 w-full overflow-hidden bg-black/60 cursor-pointer"
                  onClick={() => {
                    setLightboxIndex(idx);
                    setIsLightboxOpen(true);
                  }}
                >
                  <Image
                    src={imgSrc}
                    alt={item.title}
                    fill
                    unoptimized
                    referrerPolicy="no-referrer"
                    className="object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                  />

                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${item.visualColor} opacity-40 group-hover:opacity-20 transition-opacity`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                  {/* Top Category Badge & Maximize Button */}
                  <div className="absolute top-3 left-3 right-3 flex justify-between items-center z-10">
                    <span className="text-[10px] font-mono text-white/90 uppercase tracking-widest bg-black/70 backdrop-blur-md px-2.5 py-1 rounded border border-white/10 font-bold">
                      {item.category}
                    </span>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setLightboxIndex(idx);
                        setIsLightboxOpen(true);
                      }}
                      className="p-2 rounded-full bg-black/80 text-white hover:bg-crimson hover:text-white transition-all shadow-lg border border-white/20"
                      title="View Fullscreen Lightbox"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Click to Zoom Overlay Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 backdrop-blur-[2px]">
                    <span className="px-3 py-1.5 rounded-full bg-crimson text-white text-[10px] font-mono font-bold uppercase tracking-widest shadow-xl flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5" /> Fullscreen Lightbox
                    </span>
                  </div>
                </div>

                {/* Card Content Details */}
                <div
                  className="p-5 flex-1 flex flex-col justify-between space-y-4 cursor-pointer"
                  onClick={() => {
                    setLightboxIndex(idx);
                    setIsLightboxOpen(true);
                  }}
                >
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono text-crimson uppercase tracking-widest block font-bold">
                      {item.client}
                    </span>
                    <h4 className="text-white font-sans font-black text-lg group-hover:text-crimson transition-colors uppercase leading-snug tracking-wide">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-xs line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Footer & Live Website Trigger */}
                  <div className="pt-3 border-t border-white/5 space-y-3">
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="px-2 py-0.5 rounded-full bg-black/60 border border-white/10 text-[9px] font-mono text-neutral-300">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Live Website Link if available */}
                    {item.liveUrl && (
                      <div className="pt-1">
                        <a
                          href={item.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-sm bg-crimson hover:bg-crimson/90 text-white font-mono text-[11px] font-bold uppercase tracking-widest transition-all shadow-md shadow-crimson/20"
                        >
                          <Sparkles className="w-3 h-3" /> VISIT LIVE DIGITAL MENU <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Full-screen Lightbox Modal */}
      <LightboxModal
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        items={filteredItems}
        currentIndex={lightboxIndex}
        onNavigate={(newIndex) => setLightboxIndex(newIndex)}
      />

      {/* Upload Project Dialog overlay */}
      <AnimatePresence>
        {isAddOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-md bg-black/85 border border-white/10 rounded-2xl relative overflow-hidden glass"
            >
              <div className="absolute top-0 inset-x-0 h-[2px] bg-crimson" />
              <div className="flex justify-between items-center p-5 border-b border-white/5">
                <h5 className="text-white font-sans font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                  <UploadCloud className="w-5 h-5 text-crimson" /> Upload Premium Spec
                </h5>
                <button
                  onClick={() => setIsAddOpen(false)}
                  className="p-1 rounded bg-black border border-white/5 text-gray-400 hover:text-white transition-colors outline-none cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <form onSubmit={handleCreate} className="p-5 space-y-4">
                <div>
                  <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1 font-bold">
                    Creations Title *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Matte Cosmetics Jar"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="w-full px-4.5 py-2.5 bg-black border border-white/10 rounded-sm text-white placeholder-gray-650 text-xs focus:border-crimson transition-all outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1 font-bold">
                      Visual Category *
                    </label>
                    <select
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value)}
                      className="w-full px-4.5 py-2.5 bg-black border border-white/10 rounded-sm text-white text-xs focus:border-crimson transition-all outline-none cursor-pointer"
                    >
                      <option>Website Projects</option>
                      <option>Social Media Designs</option>
                      <option>Branding</option>
                      <option>Packaging</option>
                      <option>Business Presentations</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1 font-bold">
                      Client Business Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Zen Organics"
                      value={newClient}
                      onChange={(e) => setNewClient(e.target.value)}
                      className="w-full px-4.5 py-2.5 bg-black border border-white/10 rounded-sm text-white placeholder-gray-650 text-xs focus:border-crimson transition-all outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1 font-bold">
                    Tag Stack (Comma separated)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 3D Model, Figma Frame, PDF Blueprint"
                    value={newTags}
                    onChange={(e) => setNewTags(e.target.value)}
                    className="w-full px-4.5 py-2.5 bg-black border border-white/10 rounded-sm text-white placeholder-gray-650 text-xs focus:border-crimson transition-all outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1 font-bold">
                    Visual Background Glimmer
                  </label>
                  <select
                    value={newColor}
                    onChange={(e) => setNewColor(e.target.value)}
                    className="w-full px-4.5 py-2.5 bg-black border border-white/10 rounded-sm text-white text-xs focus:border-crimson transition-all outline-none cursor-pointer"
                  >
                    <option value="from-crimson to-black">Crimson Neon Pulse</option>
                    <option value="from-neon-green/40 to-neutral-900">Green Glow Matrix</option>
                    <option value="from-zinc-900 to-stone-850">Matte Silver Gray</option>
                    <option value="from-crimson/30 to-black">High Luxury Violet</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1 font-bold">
                    Description Specification *
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Provide depth spec information, layout formatting guidelines, etc."
                    value={newDesc}
                    onChange={(e) => setNewDesc(e.target.value)}
                    className="w-full px-4.5 py-2.5 bg-black border border-white/10 rounded-sm text-white placeholder-gray-650 text-xs focus:border-crimson transition-all outline-none resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-sm bg-crimson hover:bg-crimson/90 text-white font-sans font-bold text-xs uppercase tracking-widest transition-all cursor-pointer shadow-lg shadow-crimson/25"
                  >
                    Deploy Design to Gallery
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
