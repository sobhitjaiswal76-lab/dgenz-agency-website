"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  Sparkles,
  ArrowRight,
  MessageSquare,
  Zap,
  CheckCircle2,
  Bookmark,
  ChevronDown,
  Phone,
  Compass,
  Send,
  Calendar,
  Layers,
  Award,
  ShieldCheck,
  TrendingUp,
  Clock,
  UserCheck,
  Star,
  Users
} from "lucide-react";
import LeadWizard from "../components/LeadWizard";
import PortfolioShowcase from "../components/PortfolioShowcase";

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Active FAQ data mapping pricing, timeline, digital capabilities (20 Optimized FAQs)
  const faqs = [
    {
      q: "What services does DGEN Z offer?",
      a: "DGEN Z offers premium services including website development, digital marketing, graphic design, social media marketing, Google Business Profile (GBP) optimization, local SEO, branding, and smart AI automation workflows."
    },
    {
      q: "Does DGEN Z build custom business websites?",
      a: "Yes, DGEN Z is a premium website development company specializing in custom, high-speed business websites, landing pages, and e-commerce storefronts built on modern tech stacks like Next.js and React."
    },
    {
      q: "Does DGEN Z provide social media marketing services in Kolkata?",
      a: "Yes, DGEN Z provides elite social media marketing and brand identity design services, building visual grid frameworks, custom captions, and daily content strategies targeting audiences in Kolkata and globally."
    },
    {
      q: "Who is the founder of DGEN Z Marketing Agency?",
      a: "DGEN Z was founded by Sobhit Jaiswal, a senior digital marketing consultant, professional website developer, and brand architect based in Kolkata, India."
    },
    {
      q: "Where is DGEN Z Digital Agency located?",
      a: "DGEN Z is headquartered at 5/1 Hari Paul Lane, Kolkata, West Bengal 700006, India, providing local SEO and digital marketing services to businesses nationwide and internationally."
    },
    {
      q: "How does DGEN Z help with Google Business Profile optimization?",
      a: "We optimize Google Business Profile (GBP) listings to rank #1 on Google Maps in Kolkata. Our local SEO services include reviews setup, geo-tagged image uploads, map citations, and local authority building."
    },
    {
      q: "Does DGEN Z build high-performance e-commerce websites?",
      a: "Absolutely. We engineer secure, fast, and responsive e-commerce storefronts with seamless user experiences, conversion-optimized checkout grids, and integrated payment pathways."
    },
    {
      q: "What is AI website development, and does DGEN Z provide it?",
      a: "AI website development involves building websites embedded with smart AI capabilities such as server-side Gemini AI models, responsive chatbot flows, and personalized user interactions. DGEN Z is a leader in this domain."
    },
    {
      q: "How can DGEN Z help grow my local business in Kolkata?",
      a: "Through targeted local SEO services, Google Maps optimization, premium branding, high-conversion web development, and local social media campaigns, we drive high-intent phone calls and store visits to your business."
    },
    {
      q: "What is your website development process?",
      a: "Our website development process consists of four main sprints: Strategy Sizing, Matte Branding Forge, Next.js/React Coding, and Speed/SEO Audits with schema integrations."
    },
    {
      q: "Does DGEN Z design custom company logos and branding kits?",
      a: "Yes, DGEN Z is a professional graphic design company. We design scalable vector logos, brand identity guides, packaging box templates, and custom presentation slides."
    },
    {
      q: "What technologies does DGEN Z Website Design Company use?",
      a: "We develop fast and secure platforms using Next.js, React, Tailwind CSS, TypeScript, and Three.js for interactive 3D elements to ensure maximum Core Web Vitals scores."
    },
    {
      q: "How does DGEN Z integrate marketing automations?",
      a: "We construct smart automated systems including automated Instagram comment responses, Facebook direct message triggers, WhatsApp leads funnels, and custom AI chat assistants."
    },
    {
      q: "Why is professional graphic design important for business growth?",
      a: "Professional graphic design raises the perceived value of your business, commands premium pricing, builds customer trust, and converts traffic into buyers far more effectively than generic templates."
    },
    {
      q: "How long does it take DGEN Z to develop a custom website?",
      a: "A standard custom-designed, high-performance landing page or business website is developed, fully optimized for SEO, and deployed in 3 to 7 business days."
    },
    {
      q: "Is DGEN Z's digital marketing suitable for international clients?",
      a: "Yes, while we are a leading digital marketing agency in Kolkata, West Bengal, we build high-ticket campaigns and code digital assets for international startups and global companies."
    },
    {
      q: "How can I contact Sobhit Jaiswal at DGEN Z?",
      a: "You can contact our founder Sobhit Jaiswal directly via instant WhatsApp or phone call at +91 96811 68381, or by sending an email to creativedgenz32@gmail.com."
    },
    {
      q: "Do you provide professional PPT and presentation pitch deck design?",
      a: "Yes, DGEN Z designs high-ticket corporate PowerPoint slides, professional PDF presentations, Google Forms formatting, and investor pitch books that raise capital and close enterprise deals."
    },
    {
      q: "What SEO services does DGEN Z offer for higher Google rankings?",
      a: "We offer complete technical and on-page SEO services, including rich schema markup injection, logical HTML layout heading hierarchies, mobile-first responsiveness, and canonical URL setups."
    },
    {
      q: "Can DGEN Z help automate customer lead generation on WhatsApp?",
      a: "Yes, we build direct click-to-chat WhatsApp communication setups, pre-filled lead capture fields, and automatic greeting funnels to convert cold traffic into hot sales calls immediately."
    }
  ];

  const services = [
    {
      title: "Graphic & Brand Design",
      items: ["Poster & Banner Design", "Visual Logo Concepts", "Flyer & Standee Creations", "Premium Packaging Layouts", "Menu Cards & Digital Assets"]
    },
    {
      title: "Digital Performance Forge",
      items: ["Website Development", "Instagram Automation Triggers", "Google Business Profile Rankings", "AI Chatbot Engineering", "Social Growth Consultations"]
    },
    {
      title: "Document Services",
      items: ["Professional PPT & PDF Design", "Professional Pitch Decks", "Google Forms & Document Formatting", "Interactive Sales Slides", "Pitch Books"]
    }
  ];

  return (
    <>
      {/* ----------------- 1. HERO SECTION ----------------- */}
      <section className="min-h-[85vh] flex flex-col justify-center py-12 relative overflow-hidden select-none" id="home">
        <div className="space-y-6 max-w-4xl text-left relative z-10">
          
          {/* Accent micro banner */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-neon-green/30 bg-neon-green/10 text-neon-green text-xs font-mono uppercase tracking-widest leading-none">
            <Sparkles className="w-3.5 h-3.5 text-neon-green animate-pulse" /> High-Performance Digital Marketing & Web Engineering
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-black tracking-tight text-white leading-[1.1] uppercase">
            PREMIUM WEBSITE DEVELOPMENT &<br />
            <span className="text-crimson font-black drop-shadow-[0_0_15px_rgba(220,20,60,0.3)]">
              DIGITAL MARKETING AGENCY KOLKATA
            </span>
          </h1>

          <p className="text-gray-300 font-sans text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed text-balance">
            Welcome to <strong className="text-white">DGEN Z</strong>, the premier digital marketing and professional website development agency headquartered in Kolkata, founded by leading brand consultant and senior web developer <strong className="text-white">Sobhit Jaiswal</strong>. We engineer high-performance Next.js websites, custom e-commerce web applications, authority-focused brand logos, packaging box graphic designs, and strategic Google Business Profile optimization maps that drive targeted organic traffic, increase local searches, and capture high-converting business inquiries automatically.
          </p>

          {/* Real CTA triggers */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#ai-blueprint"
              className="inline-flex items-center gap-2 px-8 py-4 bg-crimson hover:bg-crimson/90 text-white font-sans font-bold text-xs uppercase tracking-wider rounded-sm shadow-lg shadow-crimson/25 hover:-translate-y-0.5 active:translate-y-0 transition-all outline-none"
            >
              Configure Custom Next.js & SEO Package <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#masonry-gallery"
              className="inline-flex items-center gap-2 px-7 py-4 bg-transparent border border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-sans font-medium text-xs uppercase tracking-widest rounded-sm transition-all outline-none"
            >
              Explore Graphic Design Showcase
            </a>
            <a
              href="https://wa.me/919681168381"
              target="_blank"
              rel="no-referrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-neon-green hover:text-neon-green/90 uppercase tracking-widest hover:underline outline-none px-2 neon-glow-green"
            >
              <Phone className="w-3.5 h-3.5" /> Instant Founder WhatsApp Connect
            </a>
          </div>

          {/* Quality Stats display */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/5">
            <div>
              <div className="text-3xl font-sans font-black text-white">150+</div>
              <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Global Brand Blueprints</div>
              <p className="text-[10px] text-gray-500 font-sans mt-1">High-performance custom design platforms deployed globally.</p>
            </div>
            <div>
              <div className="text-3xl font-sans font-black text-crimson">24/7</div>
              <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Automated Leads Captured</div>
              <p className="text-[10px] text-gray-500 font-sans mt-1">AI automation triggers processing direct chat inquiries.</p>
            </div>
            <div>
              <div className="text-3xl font-sans font-black text-neon-green neon-glow-green">#1 Rank</div>
              <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Google Maps Optimization</div>
              <p className="text-[10px] text-gray-500 font-sans mt-1">Local SEO services that place Kolkata businesses on the map.</p>
            </div>
            <div>
              <div className="text-3xl font-sans font-black text-gray-400">Next.js</div>
              <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Speed & Security Engine</div>
              <p className="text-[10px] text-gray-500 font-sans mt-1">Coded with clean structured data for immediate indexing.</p>
            </div>
          </div>
        </div>
      </section>


      {/* ----------------- 2. SERVICES SECTION ----------------- */}
      <section className="space-y-12 select-none" id="services">
        <div className="text-left space-y-3">
          <div className="text-crimson font-mono text-xs uppercase tracking-widest font-bold">
            01 / BRAND & CODE CO-PILOT SERVICES
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-black p-0 uppercase leading-none tracking-tight text-white">
            HIGH-TICKET DIGITAL & DESIGN SOLUTIONS
          </h2>
          <p className="max-w-2xl text-gray-400 font-sans text-xs md:text-sm leading-relaxed text-balance">
            At <strong className="text-white">DGEN Z</strong>, every visual assets concept, responsive layout code, or local map search optimization block we design is a calculated intellectual weapon built to eliminate average market presence, establish absolute authority, and scale your sales pipelines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((group, groupIdx) => (
            <div
              key={groupIdx}
              className="p-8 rounded-xl border border-white/[0.08] bg-black/20 glass hover:border-crimson/30 transition-all flex flex-col justify-between relative overflow-hidden group shadow-lg"
            >
              {/* Corner ambient visual outline decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-crimson/5 rounded-full blur-2xl pointer-events-none group-hover:bg-crimson/15 transition-all" />

              <div className="space-y-6">
                <div className="flex items-center gap-2 border-b border-white/10 pb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-crimson" />
                  <h3 className="text-white font-sans font-black text-base uppercase tracking-wider">
                    {group.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {group.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-center gap-2.5 text-xs text-gray-400">
                      <CheckCircle2 className="w-4 h-4 text-crimson flex-shrink-0" />
                      <span className="font-sans leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <a
                  href="#ai-blueprint"
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-lg border border-white/10 hover:border-white/20 text-white font-sans text-xs uppercase tracking-widest font-bold transition-all bg-zinc-950/40"
                >
                  Configure Custom Blueprint <Zap className="w-3.5 h-3.5 text-crimson" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Service Explanation Panels (Increases Keyword Richness & Word Count) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 pt-6">
          <div className="p-6 rounded-xl border border-white/5 bg-black/40 space-y-3">
            <h4 className="text-white font-sans font-extrabold text-xs uppercase tracking-wider">
              1. Graphic Design & Visual Brand Identity
            </h4>
            <p className="text-gray-400 text-[11px] font-sans leading-relaxed">
              We design custom vector logos, brand books, typography guidelines, matte-black visual interfaces, offline marketing standees, luxury product box layouts, and digital banners that solidify your status as an elite local or national brand.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-white/5 bg-black/40 space-y-3">
            <h4 className="text-white font-sans font-extrabold text-xs uppercase tracking-wider">
              2. Custom Next.js Website Development
            </h4>
            <p className="text-gray-400 text-[11px] font-sans leading-relaxed">
              Ditch slow, bloated templates. We code ultra-responsive, highly optimized React and Next.js digital platforms. Fully integrated with customized schema layouts, semantic heading hierarchies, and automatic local SEO coordinates.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-white/5 bg-black/40 space-y-3">
            <h4 className="text-white font-sans font-extrabold text-xs uppercase tracking-wider">
              3. Google Business Profile & Local SEO
            </h4>
            <p className="text-gray-400 text-[11px] font-sans leading-relaxed">
              Dominate Google local search results in Kolkata. We optimize your Google Business Profile (GBP), coordinate geotagged media submissions, set up local citations, and design review acquisition mechanisms that rank you #1 on Google Maps.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-white/5 bg-black/40 space-y-3">
            <h4 className="text-white font-sans font-extrabold text-xs uppercase tracking-wider">
              4. Direct-Response Social Automations
            </h4>
            <p className="text-gray-400 text-[11px] font-sans leading-relaxed">
              We construct automatic social response engines. Turn cold Instagram grid impressions and direct comments into pre-vetted leads. Complete with automated pre-filled WhatsApp click-to-chat funnels that streamline direct-sales calls.
            </p>
          </div>
        </div>
      </section>


      {/* ----------------- 3. WEBSITE DEVELOPMENT BENEFITS ----------------- */}
      <section className="p-8 md:p-12 rounded-2xl border border-white/[0.08] bg-black/20 glass backdrop-blur-md relative overflow-hidden select-none" id="websites">
        {/* Subtle linear overlay */}
        <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-crimson/40 to-neon-green/30" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block text-neon-green font-mono text-xs uppercase tracking-widest font-bold neon-glow-green">
              02 / HIGH-SPEED LEAD CAPTURING FORGES
            </div>
            <h2 className="text-3xl md:text-5xl font-sans font-black text-white leading-tight uppercase">
              PROFESSIONAL WEBSITE DESIGN & PERFORMANCE SYSTEMS
            </h2>
            <p className="text-gray-300 font-sans text-xs md:text-sm leading-relaxed">
              An unoptimized, slow website acts as a financial leak for your company. At <strong className="text-white">DGEN Z Website Design Company</strong>, every responsive visual gateway we engineer is coded hand-crafted, desktop-first, with near-instant loading speeds, rich structured schema, and floating direct WhatsApp messaging setups to secure visitor trust in seconds.
            </p>
            <p className="text-gray-400 font-sans text-xs leading-relaxed">
              By utilizing the modern capabilities of the Next.js App Router, we eliminate heavy JavaScript baggage, ensuring your site achieves perfect Core Web Vitals scores. Google prioritizes lightweight, structured sites, meaning our website development solutions naturally rank higher on search engine results pages (SERPs) without bloated advertising costs.
            </p>

            <div className="pt-2">
              <a
                href="#ai-blueprint"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm bg-neon-green hover:bg-neon-green/90 text-black font-sans font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-neon-green/20 outline-none"
              >
                Assemble My Custom Website Now
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { t: "Generate Active Leads 24/7", d: "Designed with customized server-side forms that funnel hot customer prospects instantly." },
              { t: "Build Unshakable Market Trust", d: "Luxury glassmorphic layouts and corporate typography raise your brand's perceived authority 10x." },
              { t: "Desktop-First Fluid Grid Precision", d: "Say goodbye to standard generic template blocks. Enjoy hand-crafted fluid responsive CSS containers." },
              { t: "Kolkata Local Search Dominance", d: "Embedded local SEO coordinates and maps citation codes guarantee placement in target search areas." },
              { t: "WhatsApp Conversion Optimizations", d: "Interactive floating direct-chat widgets convert casual browsers into sales calls immediately." },
              { t: "Engineered For Future Scalability", d: "Clean TypeScript and modular components provide an indestructible base ready for paid ads campaigns." }
            ].map((b, i) => (
              <div key={i} className="p-5 rounded-xl border border-white/5 bg-black/40 space-y-1.5 hover:border-crimson/30 transition-all">
                <h4 className="text-white font-sans font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-green" /> {b.t}
                </h4>
                <p className="text-gray-400 text-[11px] font-sans leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ----------------- 4. NEURAL CO-PILOT SUBMISSION IN-SITE ----------------- */}
      <section className="space-y-8 select-none" id="ai-blueprint">
        <div className="text-center space-y-3">
          <div className="text-crimson font-mono text-xs uppercase tracking-widest font-bold animate-pulse">
            03 / ENTERPRISE PROPOSAL WIZARD
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-black uppercase text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 leading-none">
            ENGINEER YOUR CUSTOM REVENUE ROADMAP
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 font-sans text-xs md:text-sm leading-relaxed">
            Ready to calculate exact budget lines and visual solutions for your project? Use our customized, server-side proposal co-pilot widget below. Formulate your brand scope, select required channels, and receive a calculated scope estimate instantly.
          </p>
        </div>

        <LeadWizard />
      </section>


      {/* ----------------- 5. MASONRY PORTFOLIO GALLERY ----------------- */}
      <section className="space-y-10 select-none" id="masonry-gallery">
        <div className="text-left space-y-3">
          <div className="text-crimson font-mono text-xs uppercase tracking-widest font-bold">
            04 / EXPERIMENTAL BRAND VAULTS
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-black uppercase text-white tracking-tight leading-none">
            DGEN Z GRAPHIC DESIGN & NEXT.JS EXHIBITS
          </h2>
          <p className="max-w-2xl text-gray-400 font-sans text-xs md:text-sm leading-relaxed">
            Explore our curated masonry portfolio of successful brand redesigns, custom vector corporate logos, responsive landing page screens, luxury packaging layouts, and corporate PPT presentations developed for elite clients in Kolkata and across India.
          </p>
        </div>

        <PortfolioShowcase />
      </section>


      {/* ----------------- 6. ABOUT FOUNDER SOBHIT JAISWAL ----------------- */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center select-none" id="about">
        <div className="p-8 rounded-2xl border border-white/[0.08] bg-black/20 glass space-y-6 relative overflow-hidden">
          {/* Subtle design block background */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-crimson/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="inline-block text-crimson font-mono text-xs uppercase tracking-widest font-bold">
            05 / DIRECT DIRECTOR BRIEF
          </div>
          <h3 className="text-3xl md:text-4xl font-sans font-black text-white uppercase leading-tight tracking-tight">
            MEET THE FOUNDER: SOBHIT JAISWAL
          </h3>
          <p className="text-gray-300 font-sans text-xs md:text-sm leading-relaxed">
            {"\"I didn't forge DGEN Z to be another passive, slow agency. I engineered this brand lab because corporate companies in India and growing startups are exhausted by low-performing, generic templates that fail to convert traffic. My primary directive is to bridge high-ticket aesthetic prestige with hyper-aggressive, Google-first search intent.\""}
          </p>
          <p className="text-gray-300 font-sans text-xs md:text-sm leading-relaxed">
            {"Based at our tactical creative headquarters in Kolkata, West Bengal, we design visual assets that establish immediate elite status for your company. We believe that outstanding, responsive visual positioning paired with custom technical SEO is what allows you to command premium prices and turn every casual visitor into a lifetime client.\""}
          </p>

          <div className="pt-2 flex items-center gap-4">
            <div>
              <div className="text-white font-sans font-black text-sm uppercase leading-none">Sobhit Jaiswal</div>
              <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mt-1">Director & Chief Brand Architect</div>
            </div>
            <span className="text-zinc-800 text-lg">|</span>
            <div>
              <div className="text-neon-green font-sans font-black text-xs uppercase leading-none neon-glow-green">Direct Support Channel</div>
              <a href="tel:+919681168381" className="text-[11px] font-mono text-gray-300 tracking-wide hover:underline block mt-1">+91 96811 68381</a>
            </div>
          </div>
        </div>

        {/* Local Case Study Section block */}
        <div className="space-y-6">
          <div className="inline-block text-neon-green font-mono text-xs uppercase tracking-widest font-bold neon-glow-green">
            06 / REAL-WORLD REVENUE FIXES & LOCAL WINS
          </div>
          <h3 className="text-2xl font-sans font-black text-white uppercase leading-none tracking-tight">
            CASE STUDY: SOUTH KOLKATA RESTAURANT EXPANSION
          </h3>

          <div className="divide-y divide-white/5 space-y-4">
            <div className="pt-2">
              <span className="text-[10px] font-mono text-crimson uppercase block tracking-wider font-bold">The Strategic Bottleneck</span>
              <p className="text-gray-400 text-xs font-sans mt-1">
                An active dining restaurant in South Kolkata was struggling with standard, generic social media grid templates and a slow, non-responsive PDF menu. More than 80% of warm search traffic bounced immediately upon landing on their listings.
              </p>
            </div>
            <div className="pt-4">
              <span className="text-[10px] font-mono text-neon-green uppercase block tracking-wider font-bold neon-glow-green">The DGEN Z Integrated Fix</span>
              <p className="text-gray-400 text-xs font-sans mt-1">
                We rebuilt a fast, custom, single-page glassmorphic menu website, injected verified geo-coordinates schema into their Google Business Profile listings, and configured automated direct-message templates to trigger instant order inquiries on Instagram.
              </p>
            </div>
            <div className="pt-4">
              <span className="text-[10px] font-mono text-white uppercase block tracking-wider font-bold">Tangible Business Metric Result</span>
              <p className="text-white text-xs font-sans font-bold flex items-center gap-2 mt-1 uppercase">
                <TrendingUp className="w-4.5 h-4.5 text-neon-green" /> +160% Monthly Inquiries & Google Maps discovery placements multiplied 3x within 15 business days.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ----------------- 7. INTERACTIVE PROCESS TIMELINE ----------------- */}
      <section className="space-y-12 select-none" id="process">
        <div className="text-center space-y-3">
          <div className="text-crimson font-mono text-xs uppercase tracking-widest font-bold">
            07 / THE FORCE DEVELOPMENT SPRINT
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-black uppercase text-white">
            THE FORCE DEVELOPMENT MATRIX
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 font-sans text-xs md:text-sm leading-relaxed">
            We follow a rigorous, six-step digital delivery process to transform your standard business assets into absolute high-ticket revenue networks.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {[
            { step: "01", t: "Deep Audit", d: "1-on-1 brand positioning audit and local keyword scoping with Sobhit Jaiswal." },
            { step: "02", t: "Blueprint", d: "We construct custom layout maps, competitive analysis matrices, and SEO structures." },
            { step: "03", t: "Visual Forge", d: "We design premium matte-black vector logos, custom icons, and interactive mockups." },
            { step: "04", t: "Code Assembly", d: "We engineer lightweight responsive Next.js/React containers with perfect Core Web Vitals." },
            { step: "05", t: "SEO Mapping", d: "Injection of complete schema tags, local GBP alignments, and live page speed audits." },
            { step: "06", t: "Launch & Support", d: "Immediate deployment on secure servers, with continuous copywriting calibrations." }
          ].map((item, i) => (
            <div key={i} className="p-5 rounded-xl border border-white/5 bg-black/20 glass hover:border-crimson/30 transition-all space-y-3 shadow shadow-black">
              <span className="font-mono text-2xl font-black text-crimson/30 block leading-none">{item.step}</span>
              <h4 className="text-white text-xs font-sans font-bold uppercase tracking-wider">{item.t}</h4>
              <p className="text-gray-500 text-[11px] font-sans leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </section>


      {/* ----------------- 8. CLIENT TESTIMONIAL SLIDER ----------------- */}
      <section className="space-y-12 select-none" id="testimonials">
        <div className="text-left space-y-3">
          <div className="text-crimson font-mono text-xs uppercase tracking-widest font-bold">
            08 / ENDORSED VALUE CODES
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-black uppercase text-white">
            VERIFIED BRAND ENDORSEMENTS
          </h2>
          <p className="max-w-xl text-gray-400 font-sans text-xs md:text-sm leading-relaxed">
            Read real-world testimonials from active company founders who chose DGEN Z to optimize their digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              n: "Karan Johar",
              c: "CEO, Vektor Logistics",
              review: "Sobhit's visual quality and professional approach are spectacular. He rebuilt our entire company deck in PowerPoint and engineered a custom high-speed Next.js landing page showcase. We secured a high-value enterprise client contract the very next week!",
              rating: 5
            },
            {
              n: "Priyanka Sen",
              c: "Founder, Soma Organics",
              review: "Our previous business website was slow and failed to bring in leads. DGEN Z engineered a stunning, highly responsive portal that ranks first on Google Maps local searches in Kolkata. The WhatsApp leads integration has transformed our sales flow!",
              rating: 5
            },
            {
              n: "Anirban Roy",
              c: "Director, Roy Jewellers",
              review: "Absolute communication, lightning-fast delivery, and premium design polish. The custom matte-black corporate logo and website packaging design look extremely luxury. DGEN Z helped us stand out as a premier brand in Kolkata.",
              rating: 5
            }
          ].map((t, idx) => (
            <div key={idx} className="p-6 rounded-xl border border-white/5 bg-black/20 glass hover:border-crimson/30 flex flex-col justify-between space-y-6 shadow shadow-black relative group">
              <div className="space-y-3">
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-crimson text-crimson" />
                  ))}
                </div>
                <p className="text-xs text-gray-300 font-sans italic leading-relaxed">{"\""}{t.review}{"\""}</p>
              </div>

              <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-crimson border border-white/5 font-mono text-xs font-bold uppercase">
                  {t.n.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-sans font-bold text-xs uppercase">{t.n}</h4>
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block">{t.c}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* ----------------- 9. WHATSAPP CHANNEL BLOCK ----------------- */}
      <section className="p-8 md:p-12 rounded-2xl border border-white/[0.08] bg-black/20 glass relative overflow-hidden select-none">
        {/* Glow behind column */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-neon-green/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-2xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-neon-green/10 border border-neon-green/30 text-neon-green text-[10px] font-mono uppercase tracking-widest leading-none">
            <Compass className="w-3.5 h-3.5" /> Direct Industry Intelligence
          </div>
          <h2 className="text-3xl md:text-4xl font-sans font-black text-white uppercase tracking-tight leading-tight">
            JOIN THE EXCLUSIVE DGEN Z WHATSAPP HUB
          </h2>
          <p className="text-gray-400 font-sans text-xs md:text-sm leading-relaxed max-w-lg mx-auto text-balance">
            Never miss high-ticket marketing blueprints, graphic design guidelines, local SEO hacks, and custom automation guides published directly by our director **Sobhit Jaiswal**.
          </p>

          <div className="pt-2">
            <a
              href="https://whatsapp.com/channel/0029VbBUVsdEwEk5YBNyaZ2k"
              target="_blank"
              rel="no-referrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-sm bg-neon-green hover:bg-neon-green/90 text-black font-sans font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-neon-green/20 transition-all active:scale-95 outline-none"
            >
              Secure Free Entrance Now <ArrowRight className="w-4.5 h-4.5" />
            </a>
          </div>
        </div>
      </section>


      {/* ----------------- 10. FAQ SECTION ACCORDION ----------------- */}
      <section className="space-y-10 select-none" id="faq">
        <div className="text-left space-y-3">
          <div className="text-crimson font-mono text-xs uppercase tracking-widest font-bold">
            09 / SECTOR INTELLIGENCE SCHEMAS
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-black uppercase text-white leading-none">
            FREQUENTLY ENQUIRED SCHEMAS (20 FAQS)
          </h2>
          <p className="max-w-2xl text-gray-400 font-sans text-xs md:text-sm leading-relaxed">
            Unlock absolute transparency. Read deep structural answers to critical client inquiries regarding our graphic designs, Next.js web application structures, custom local SEO methodologies, and Direct WhatsApp business automations.
          </p>
        </div>

        <div className="max-w-3xl space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-white/[0.08] bg-black/20 glass overflow-hidden transition-all"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full px-6 py-4.5 flex items-center justify-between text-left hover:bg-zinc-900/40 outline-none"
                >
                  <span className="text-white font-sans font-extrabold text-sm uppercase tracking-wide pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform ${isOpen ? "rotate-180 text-crimson" : ""}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 font-sans text-xs md:text-sm text-gray-300 leading-relaxed border-t border-white/5 pt-3.5">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>


      {/* ----------------- 11. LEAD GENERATION CONTACT SECTION ----------------- */}
      <section className="p-8 md:p-12 rounded-2xl border border-white/[0.08] bg-black/10 glass relative overflow-hidden select-none" id="contact">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-crimson/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Columns */}
          <div className="space-y-6">
            <div className="inline-block text-crimson font-mono text-xs uppercase tracking-widest font-bold">
              10 / SECURE DIRECT CONVERSIONS
            </div>
            <h2 className="text-3xl md:text-5xl font-sans font-black text-white leading-tight uppercase">
              LET&#39;S ACCELERATE YOUR DIGITAL REVENUE
            </h2>
            <p className="text-gray-300 text-xs md:text-sm leading-relaxed font-sans">
              Ready to claim your market territory and rank for branded searches or local services in Kolkata? Schedule your completely free 1-on-1 visual brand positioning audit conducted personally by <strong className="text-white">Sobhit Jaiswal</strong>. Lock your project coordinates and fuel your strategic sales pipelines now.
            </p>

            <div className="space-y-4 pt-4 border-t border-white/5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded bg-black/40 text-crimson border border-white/5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[9px] font-mono text-gray-500 uppercase tracking-widest leading-none">Direct WhatsApp Phone Call</div>
                  <a href="tel:+919681168381" className="text-white font-sans font-black text-sm block mt-1 hover:underline">+91 96811 68381</a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded bg-black/40 text-neon-green border border-white/5">
                  <Send className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[9px] font-mono text-gray-500 uppercase tracking-widest leading-none">Electronic Inbox Address</div>
                  <a href="mailto:creativedgenz32@gmail.com" className="text-white font-sans font-black text-sm block mt-1 hover:underline">creativedgenz32@gmail.com</a>
                </div>
              </div>
            </div>

            <p className="text-[10px] font-mono text-gray-600 uppercase">
              * OFFICE HUB: 5/1 Hari Paul Lane, Kolkata – 700006, India.
            </p>
          </div>

          {/* Quick contact trigger link */}
          <div className="p-6 md:p-8 rounded-xl border border-white/5 bg-black/20 glass flex flex-col justify-center text-center space-y-6 shadow-inner shadow-black/80">
            <h4 className="text-white font-sans font-black uppercase text-xl tracking-tight leading-tight">
              LAUNCH ESTIMATE ENGINE
            </h4>
            <p className="text-gray-400 font-sans text-xs leading-relaxed max-w-md mx-auto">
              Computing direct pricing points has never been simpler. Use our interactive neural co-pilot widget to build, configure, and submit your custom project proposal instantly.
            </p>

            <div className="pt-2">
              <a
                href="#ai-blueprint"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-sm bg-crimson hover:bg-crimson/90 text-white font-sans font-extrabold text-xs uppercase tracking-wider shadow shadow-crimson/20 transition-all scale-102 hover:-translate-y-0.5"
              >
                Go To Digital Proposal Builder <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
