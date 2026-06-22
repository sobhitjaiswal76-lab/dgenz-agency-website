"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Eye, ExternalLink, X, UploadCloud } from "lucide-react";

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  client: string;
  description: string;
  tags: string[];
  visualColor: string; // Gradient color schema for futuristic card
  imageSeed?: string;
}

// Preloaded premium design items by DGEN Z
const defaultItems: PortfolioItem[] = [
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
    title: "Series A Pitch Presentation",
    category: "Business Presentations",
    client: "Vektor AgriTech Startup",
    description: "High ticket PowerPoint template crafted strictly with editorial typeface styling, responsive SVG infographics, and dynamic statistics charts aimed at raising $2M seed round.",
    tags: ["Professional Deck", "Infographic PDF", "PowerPoint"],
    visualColor: "from-crimson/40 to-black",
    imageSeed: "deck"
  },
  {
    id: "p5",
    title: "Glassmorphic E-Commerce Box",
    category: "Packaging",
    client: "Soma Luxury Oils",
    description: "Geometric structural design, custom matte gold logo hot stamp layout, and 3D textured packaging box assets mapped with dynamic local Indian artisan themes.",
    tags: ["Hot Stamp Foil", "Creative Box", "Illustrator Grid"],
    visualColor: "from-crimson/40 to-[#1c1917]",
    imageSeed: "gold"
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
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [items, setItems] = useState<PortfolioItem[]>([]);
  
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
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="group relative rounded-xl border border-white/[0.08] bg-black/20 glass hover:border-crimson/25 shadow-lg cursor-pointer overflow-hidden p-6 aspect-video flex flex-col justify-between"
              onClick={() => setSelectedItem(item)}
            >
              {/* Card glowing visual color base */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.visualColor} opacity-[0.05] group-hover:opacity-[0.14] transition-opacity`} />
              <div className="absolute inset-0 border border-white/5 group-hover:border-crimson/15 rounded-xl pointer-events-none transition-colors" />

              {/* Glowing Ambient Spotlight */}
              <div className="absolute -top-12 -right-12 w-28 h-28 rounded-full bg-crimson blur-[35px] opacity-10 group-hover:opacity-30 transition-all pointer-events-none" />

              <div className="relative flex justify-between items-start">
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest bg-black/60 px-2.5 py-1 rounded border border-white/5">
                  {item.category}
                </span>
                <div className="p-1.5 rounded-full bg-black/60 text-gray-400 group-hover:text-crimson group-hover:bg-crimson/10 transition-all">
                  <Eye className="w-4 h-4" />
                </div>
              </div>

              <div className="relative mt-8 space-y-2">
                <span className="text-[10px] font-mono text-crimson uppercase tracking-widest block font-bold">{item.client}</span>
                <h4 className="text-white font-sans font-black text-lg group-hover:text-crimson transition-colors uppercase leading-tight tracking-wide">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-xs line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="relative flex flex-wrap gap-1.5 pt-4 border-t border-white/5 z-10">
                {item.tags.slice(0, 3).map((tag, i) => (
                  <span key={i} className="px-2 py-0.5 rounded-full bg-black/60 border border-white/5 text-[9px] font-sans text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Lightbox Modal (Details full view) */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              className="w-full max-w-2xl bg-black/80 backdrop-blur-2xl border border-white/10 rounded-2xl relative overflow-hidden glass"
            >
              {/* Outer top highlight border */}
              <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-crimson via-crimson/70 to-neon-green" />
              
              {/* Centered Glowing backdrop preview element */}
              <div className={`absolute top-0 inset-x-0 h-[220px] bg-gradient-to-b ${selectedItem.visualColor} opacity-[0.14] filter blur-xl`} />

              <div className="p-6 md:p-8 relative">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-xs font-mono text-crimson uppercase tracking-widest block font-bold">
                      {selectedItem.client}
                    </span>
                    <h5 className="text-2xl font-sans font-black text-white uppercase tracking-tight leading-tight mt-1">
                      {selectedItem.title}
                    </h5>
                  </div>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="p-1.5 rounded-full bg-black border border-white/10 text-gray-400 hover:text-white transition-all outline-none"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 border-t border-white/5">
                  <div className="col-span-1 md:col-span-2 space-y-4">
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed font-sans">
                      {selectedItem.description}
                    </p>

                    <div>
                      <span className="text-[10px] font-mono text-gray-500 uppercase block mb-1.5">Tech Matrix Stack</span>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedItem.tags.map((tag, i) => (
                          <span key={i} className="px-3 py-1 rounded-full bg-black border border-white/10 text-xs text-crimson">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Visual card metrics */}
                  <div className="p-4 rounded-xl border border-white/5 bg-black/40 space-y-4 self-start">
                    <div>
                      <span className="text-[10px] font-mono text-gray-500 uppercase block leading-none">Category slot</span>
                      <span className="text-white text-xs font-sans font-bold uppercase mt-1 block">{selectedItem.category}</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-gray-500 uppercase block leading-none">Turnaround timeline</span>
                      <span className="text-neon-green text-xs font-sans font-bold uppercase mt-1 block neon-glow-green">3 TO 5 BUSINESS DAYS</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-gray-500 uppercase block leading-none">Visual Identity Vibe</span>
                      <span className="text-crimson text-xs font-mono font-bold uppercase mt-1 block">MATTE PRO OUTLINE</span>
                    </div>

                    <a
                      href={`https://wa.me/919681168381?text=Hello%20DGEN%20Z%2C%20I%20saw%20your%20design%20creation%20%22${encodeURIComponent(selectedItem.title)}%22%20on%20your%20Showcase%20and%20want%20to%20know%20more!`}
                      target="_blank"
                      rel="no-referrer"
                      className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-sm bg-crimson hover:bg-crimson/90 text-white font-sans text-xs uppercase tracking-wider font-extrabold transition-all shadow-lg shadow-crimson/20"
                    >
                      Enquire on WhatsApp <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

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
