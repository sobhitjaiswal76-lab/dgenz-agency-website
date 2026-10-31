// Diwali Business Growth Offers 2026 Utilities & Constants for DGEN Z
// WhatsApp destination: https://wa.me/919681168381
// Campaign Period: 31 October – 8 November 2026, Indian Standard Time (IST)

export const WHATSAPP_PHONE = "919681168381";
export const INSTAGRAM_HANDLE = "@dgenz.studio";
export const INSTAGRAM_URL = "https://www.instagram.com/dgenz.studio/";

// Campaign Dates: Oct 31, 2026 00:00:00 IST to Nov 08, 2026 23:59:59 IST
// Asia/Kolkata is UTC +05:30
export const CAMPAIGN_START_IST = new Date("2026-10-31T00:00:00+05:30").getTime();
export const CAMPAIGN_END_IST = new Date("2026-11-08T23:59:59+05:30").getTime();

export interface CampaignTimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
  isActive: boolean;
}

export function getCampaignTimeRemaining(): CampaignTimeRemaining {
  const now = Date.now();

  if (now < CAMPAIGN_START_IST) {
    const diff = CAMPAIGN_START_IST - now;
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
      isExpired: false,
      isActive: false,
    };
  }

  if (now > CAMPAIGN_END_IST) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isExpired: true,
      isActive: false,
    };
  }

  const diff = CAMPAIGN_END_IST - now;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    isExpired: false,
    isActive: true,
  };
}

// Exactly specified WhatsApp trigger messages
export const WA_MESSAGES = {
  generalOffer:
    "Hi DGEN Z, I'd like to discuss a project for my business under the Diwali specials.",
  websiteOffer:
    "Hi DGEN Z, I'm interested in the Diwali Business Website Launch Offer. Please share the details.",
  catalogueOffer:
    "Hi DGEN Z, I'm interested in the Diwali Smart Digital Catalogue Offer. Please share the details.",
  designOffer:
    "Hi DGEN Z, I'm interested in the Diwali Design Deal. Please share the eligible services and details.",
  videoSpotlight:
    "Hi DGEN Z! I would like to book THE SPOTLIGHT video package (₹2,000 - Video Festive Rate). Please share the onboarding details and next steps.",
  videoBrand:
    "Hi DGEN Z! I would like to book THE BRAND video package (₹2,399 - Video Festive Rate - Recommended Package). Please share the onboarding details and next steps.",
};

export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

// Complete data model for all 3 Diwali 2026 Offers
export interface DiwaliOfferItem {
  id: "website" | "catalogue" | "design";
  categoryNumber: string;
  categoryLabel: string;
  title: string;
  headline: string;
  coreDiscount: string;
  coreDiscountLabel: string;
  overview: string;
  inclusions: string[];
  complimentaryExtras: string[];
  conditionalDiscount: {
    title: string;
    description: string;
    steps: string[];
    verifyUrl: string;
    verifyLabel: string;
  };
  idealFor?: string[];
  eligibleServices?: string[];
  howItWorks?: { step: string; title: string; desc: string }[];
  ctaLabel: string;
  whatsappMessage: string;
  posterUrl?: string;
}

export const DIWALI_CAMPAIGN_OFFERS: DiwaliOfferItem[] = [
  {
    id: "website",
    categoryNumber: "01",
    categoryLabel: "DIGITAL PRESENCE",
    title: "BUSINESS WEBSITE LAUNCH",
    headline: "Establish Real Authority With A Custom Digital Flagship.",
    coreDiscount: "30% OFF",
    coreDiscountLabel: "Core Campaign Discount",
    overview:
      "A custom, high-speed business website engineered to turn visitors into qualified leads. Complete with full on-page SEO, Google Search indexing, and responsive architecture.",
    inclusions: [
      "5 Standard Pages (Home, About, Services, Portfolio, Contact)",
      "Fully responsive, mobile-first performance architecture",
      "Direct WhatsApp and inquiry form lead triggers",
      "Full on-page SEO optimization & metadata schema",
      "Google Search Console & indexing configuration",
    ],
    complimentaryExtras: [
      "1 FREE AI Cinematic Promotional Reel (10–18s)",
      "3 FREE Instagram Creative Posts",
      "6 Months FREE Website Maintenance & Technical Support",
    ],
    conditionalDiscount: {
      title: "UNLOCK AN EXTRA 10% OFF",
      description: "Stack an extra 10% savings by completing two quick social actions:",
      steps: [
        "Follow DGEN Z on Instagram (@dgenz.studio)",
        "Post a Reel featuring your new website or experience with DGEN Z, tagging our account",
      ],
      verifyUrl: INSTAGRAM_URL,
      verifyLabel: "Verify on Instagram (@dgenz.studio)",
    },
    ctaLabel: "CLAIM WEBSITE OFFER",
    whatsappMessage: WA_MESSAGES.websiteOffer,
    posterUrl: "https://cdn.imagetourls.com/uploads/tyImg/13nlRP2oZ.png",
  },
  {
    id: "catalogue",
    categoryNumber: "02",
    categoryLabel: "DIGITAL CATALOGUE",
    title: "SMART DIGITAL CATALOGUE",
    headline: "Frictionless Product Browsing & Instant WhatsApp Ordering.",
    coreDiscount: "10% OFF",
    coreDiscountLabel: "Core Campaign Discount",
    overview:
      "An interactive, shareable digital catalogue designed for seamless product showcases on mobile devices. No bulky PDF downloads—just fast, intuitive customer ordering.",
    inclusions: [
      "Easily shareable web link format (zero PDF downloads)",
      "Complete product specs, high-resolution imagery & pricing",
      "Categorized collections & fast product filtering",
      "Fluid, mobile-optimized touch browsing experience",
      "Direct WhatsApp / Call one-click ordering integration",
    ],
    complimentaryExtras: [
      "1 FREE AI Cinematic Promotional Reel",
      "1 FREE Instagram Creative Post",
    ],
    conditionalDiscount: {
      title: "FOLLOW & SAVE AN EXTRA 5%",
      description: "Get an immediate extra 5% reduction on your catalogue setup:",
      steps: [
        "Follow DGEN Z on Instagram (@dgenz.studio) prior to invoice sign-off",
      ],
      verifyUrl: INSTAGRAM_URL,
      verifyLabel: "Follow @dgenz.studio on Instagram",
    },
    idealFor: [
      "Bakeries",
      "Sweet Shops",
      "Boutiques",
      "Jewellery Brands",
      "Retailers",
      "Wholesalers",
      "Gift Hamper Businesses",
    ],
    ctaLabel: "CLAIM CATALOGUE OFFER",
    whatsappMessage: WA_MESSAGES.catalogueOffer,
    posterUrl: "https://cdn.imagetourls.com/uploads/tyImg/CAssaPKe.jpg",
  },
  {
    id: "design",
    categoryNumber: "03",
    categoryLabel: "CREATIVE DESIGN",
    title: "DIWALI DESIGN DEAL",
    headline: "Editorial Visual Assets & Commercial Print Collateral.",
    coreDiscount: "7% OFF",
    coreDiscountLabel: "On Every Campaign Order",
    overview:
      "High-impact graphic design tailored for brands demanding an editorial edge. Available across key festive marketing touchpoints with future re-order incentives.",
    inclusions: [
      "Bespoke creative design tailored to your brand identity",
      "High-resolution print-ready files (CMYK, 300 DPI)",
      "Digital web/social optimized exports (RGB)",
      "Full commercial usage rights included",
      "Two standard revision rounds per asset",
    ],
    complimentaryExtras: [
      "7% OFF on every eligible design order placed during campaign",
      "EXTRA 5% OFF on your NEXT eligible design order",
    ],
    eligibleServices: [
      "Poster Design",
      "Business Card Design",
      "Invitation Card Design",
      "Logo Design",
      "Banner Design",
      "Standee Design",
      "Menu Design",
    ],
    howItWorks: [
      {
        step: "01",
        title: "Choose Your Service",
        desc: "Select any eligible design format from the list above.",
      },
      {
        step: "02",
        title: "Share Requirements",
        desc: "Connect on WhatsApp with your brief, brand colours, and copy.",
      },
      {
        step: "03",
        title: "Receive With Savings",
        desc: "Get your custom design with festive discounts applied.",
      },
    ],
    conditionalDiscount: {
      title: "RE-ORDER PERK: EXTRA 5% OFF NEXT ORDER",
      description: "Every eligible design project completed during Diwali earns you an extra 5% off your next design engagement.",
      steps: [
        "7% discount applied immediately on current order",
        "5% coupon code issued for your subsequent design order",
      ],
      verifyUrl: buildWhatsAppLink(WA_MESSAGES.designOffer),
      verifyLabel: "Claim via WhatsApp",
    },
    ctaLabel: "CLAIM DESIGN OFFER",
    whatsappMessage: WA_MESSAGES.designOffer,
  },
];

// Comparison Table Specifications (6 Rows)
export interface ComparisonRow {
  feature: string;
  offer1: string;
  offer2: string;
  offer3: string;
  highlight1?: boolean;
}

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    feature: "Core Discount",
    offer1: "30% OFF",
    offer2: "10% OFF",
    offer3: "7% OFF",
    highlight1: true,
  },
  {
    feature: "Additional Discount Potential",
    offer1: "+10% via Reel & IG Follow",
    offer2: "+5% via IG Follow",
    offer3: "+5% on Next Eligible Order",
  },
  {
    feature: "Free AI Cinematic Reel",
    offer1: "1 Included (10–18s)",
    offer2: "1 Included",
    offer3: "Available as Add-on",
    highlight1: true,
  },
  {
    feature: "Free Social Media Posts",
    offer1: "3 Posts Included",
    offer2: "1 Post Included",
    offer3: "Add-on Available",
  },
  {
    feature: "Free Maintenance / Support",
    offer1: "6 Months Free Support",
    offer2: "Standard Handover",
    offer3: "2 Revision Rounds",
    highlight1: true,
  },
  {
    feature: "Best Suited For",
    offer1: "Established & growing businesses needing a full web flagship",
    offer2: "Bakeries, sweet shops, boutiques, retail & gift hampers",
    offer3: "Brands needing promotional posters, cards, menus & print collateral",
  },
];

// 6 Verbatim Campaign Terms & Conditions
export interface CampaignTerm {
  number: string;
  title: string;
  clause: string;
}

export const CAMPAIGN_TERMS: CampaignTerm[] = [
  {
    number: "01",
    title: "Campaign Validity Period",
    clause:
      "All Diwali campaign offers are valid exclusively from 31 October to 8 November 2026, Indian Standard Time (IST). Enquiries placed after this window will be quoted at standard studio rates.",
  },
  {
    number: "02",
    title: "Scope of Work & Deliverables",
    clause:
      "Deliverables for each package are strictly as specified in the agreed project proposal. Any additional pages, advanced features, custom animations, or third-party integrations outside the package scope will be billed separately.",
  },
  {
    number: "03",
    title: "Conditional Social Discounts",
    clause:
      "Social media discounts (e.g., Instagram follow, reel tag) are applied upon verification of the required action by our team before final invoice adjustment.",
  },
  {
    number: "04",
    title: "Content & Asset Provision",
    clause:
      "The client is responsible for providing necessary brand assets, product details, text content, and high-resolution images in a timely manner. Delays in asset provision may extend project delivery timelines.",
  },
  {
    number: "05",
    title: "Revisions & Approvals",
    clause:
      "Each deliverable includes two rounds of standard revisions. Subsequent revisions or scope revisions requested after final sign-off will incur standard design/development fees.",
  },
  {
    number: "06",
    title: "Payment Terms",
    clause:
      "A 50% advance deposit is required to initiate work and lock in the festive discount. The remaining 50% balance is due upon project completion and prior to final asset handover or domain deployment.",
  },
];
