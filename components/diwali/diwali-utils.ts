// Diwali Campaign 2026 Utilities & Constants for DGEN Z
// WhatsApp destination: https://wa.me/919681168381

export interface CampaignTimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
  isActive: boolean;
}

// Campaign Dates: Oct 30, 2026 00:00:00 IST to Nov 8, 2026 23:59:59 IST
// Asia/Kolkata is UTC +05:30
export const CAMPAIGN_START_IST = new Date("2026-10-30T00:00:00+05:30").getTime();
export const CAMPAIGN_END_IST = new Date("2026-11-08T23:59:59+05:30").getTime();

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

export const WHATSAPP_PHONE = "919681168381";

// Exactly specified WhatsApp trigger messages
export const WA_MESSAGES = {
  generalOffer:
    "Hi DGEN Z! I saw your Diwali 2026 Campaign on your website. I want to know more about your festive specials for my business.",
  videoOffer:
    "Hi DGEN Z! I'm interested in your Diwali AI Cinematic Video Ads offer. Please share the details and next steps. I would like to know more about The Spotlight and The Brand packages.",
  videoSpotlight:
    "Hi DGEN Z! I would like to book THE SPOTLIGHT video package (₹2,000 - Video Festive Rate). Please share the onboarding details and next steps.",
  videoBrand:
    "Hi DGEN Z! I would like to book THE BRAND video package (₹2,399 - Video Festive Rate - Recommended Package). Please share the onboarding details and next steps.",
  websiteOffer:
    "Hi DGEN Z! I'm interested in your Diwali Website Development Offer for ₹10,999. Please explain the website package, included benefits, hosting details, and next steps.",
};

export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export interface DiwaliOfferData {
  id: "video-ads" | "website-dev";
  badge: string;
  tagline: string;
  headline: string;
  description: string;
  regularPrice?: string;
  festivePrice: string;
  savePercentage?: string;
  turnaround: string;
  whatsappMessage: string;
  highlights: string[];
}

export const DIWALI_OFFERS: DiwaliOfferData[] = [
  {
    id: "video-ads",
    badge: "OFFER 01 · AI MOTION SUITE",
    tagline: "STOP THE SCROLL THIS FESTIVE SEASON",
    headline: "TURN PRODUCT PHOTOS INTO CINEMATIC VIDEO ADS",
    description:
      "Why post plain product photos when you can stop the scroll with hyper-realistic AI cinematic motion? Engineered for brands, bakeries, fashion, hospitality, and luxury retail.",
    festivePrice: "Starts at ₹2,000",
    turnaround: "24–48 Hours",
    whatsappMessage: WA_MESSAGES.videoOffer,
    highlights: [
      "Ultra-realistic 3D camera pan, tilt & dolly moves from still images",
      "Studio dynamic lighting, gold rim highlights & particle atmosphere",
      "Commercial sound design, hook audio & trending audio curation",
      "Optimized for 9:16 Instagram Reels, YouTube Shorts & Meta Ad campaigns",
    ],
  },
  {
    id: "website-dev",
    badge: "OFFER 02 · DIGITAL FLAGSHIP",
    tagline: "BUILD REAL AUTHORITY FOR YOUR BRAND",
    headline: "YOUR BUSINESS DESERVES MORE THAN JUST AN INSTAGRAM PAGE",
    description:
      "A custom, ultra-fast, high-converting digital storefront designed to turn casual visitors into paying customers. Complete with 1 year cloud hosting, Google SEO indexing, and complimentary creative assets.",
    regularPrice: "₹29,999",
    festivePrice: "₹10,999",
    savePercentage: "Save 63% (₹19,000 OFF)",
    turnaround: "5–7 Business Days",
    whatsappMessage: WA_MESSAGES.websiteOffer,
    highlights: [
      "Up to 5 Custom High-End Responsive Pages (Home, Services, Portfolio, About, Contact)",
      "1 Year High-Speed Cloud Hosting & SSL Certificate Included",
      "Google Search Console & Google Business Local SEO Indexing",
      "Direct Click-to-WhatsApp & Click-to-Call Conversion Triggers",
      "FESTIVE BONUS: 1 Free AI Cinematic Reel + 2 Custom Instagram Creative Posts",
    ],
  },
];
