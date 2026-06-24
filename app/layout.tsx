import type {Metadata} from 'next';
import './globals.css'; // Global styles
import ClientWrapper from '../components/ClientWrapper';

export const metadata: Metadata = {
  metadataBase: new URL('https://dgenz-nu.vercel.app'),
  title: 'DGEN Z | Digital Marketing, Graphic Design & Website Development Agency',
  description: 'DGEN Z helps businesses grow through premium website development, graphic design, social media marketing, branding, SEO and AI-powered digital solutions. Based in Kolkata, serving clients worldwide.',
  keywords: [
    'DGEN Z',
    'DGEN Z Agency',
    'DGEN Z Marketing Agency',
    'DGEN Z Digital Agency',
    'DGEN Z Kolkata',
    'DGEN Z Website Development',
    'DGEN Z Graphic Design',
    'DGEN Z Social Media Marketing',
    'DGEN Z Web Design Agency',
    'Sobhit Jaiswal',
    'DGEN Z For Designing',
    'Digital Marketing Agency Kolkata',
    'Website Development Kolkata',
    'Website Design Company Kolkata',
    'Graphic Design Services Kolkata',
    'Social Media Marketing Kolkata',
    'Branding Agency Kolkata',
    'AI Website Development',
    'Business Website Development',
    'Logo Design Services',
    'Professional Website Design',
    'SEO Services Kolkata',
    'Marketing Agency India',
    'Web Development Agency India'
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'DGEN Z | Digital Marketing, Graphic Design & Website Development Agency',
    description: 'DGEN Z helps businesses grow through premium website development, graphic design, social media marketing, branding, SEO and AI-powered digital solutions. Based in Kolkata, serving clients worldwide.',
    url: 'https://dgenz-nu.vercel.app',
    siteName: 'DGEN Z',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DGEN Z Digital Marketing & Website Development Agency',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DGEN Z | Digital Marketing, Graphic Design & Website Development Agency',
    description: 'DGEN Z helps businesses grow through premium website development, graphic design, social media marketing, branding, SEO and AI-powered digital solutions. Based in Kolkata, serving clients worldwide.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'YegouRUe2XdV_AFJ2LY16poSaiui8vyBLAo_BoQ8nII',
  }
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://dgenz-nu.vercel.app/#organization",
    "name": "DGEN Z",
    "alternateName": [
      "DGEN Z Agency",
      "DGEN Z Marketing Agency",
      "DGEN Z Digital Agency",
      "DGEN Z For Designing"
    ],
    "url": "https://dgenz-nu.vercel.app",
    "logo": {
      "@type": "ImageObject",
      "url": "https://dgenz-nu.vercel.app/og-image.jpg"
    },
    "founder": {
      "@type": "Person",
      "name": "Sobhit Jaiswal"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9681168381",
      "contactType": "sales",
      "areaServed": "Worldwide",
      "availableLanguage": ["en", "hi"]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://dgenz-nu.vercel.app/#service",
    "name": "DGEN Z Digital Agency",
    "image": "https://dgenz-nu.vercel.app/og-image.jpg",
    "url": "https://dgenz-nu.vercel.app",
    "telephone": "+91-9681168381",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "5/1 Hari Paul Lane",
      "addressLocality": "Kolkata",
      "addressRegion": "West Bengal",
      "postalCode": "700006",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 22.5855,
      "longitude": 88.3687
    },
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.instagram.com/dgen_z7",
      "https://whatsapp.com/channel/0029VbBUVsdEwEk5YBNyaZ2k"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does DGEN Z offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "DGEN Z offers premium graphic design (scalable vector logos, luxury structured box packaging, and offline branding assets), high-performance website development (custom responsive Next.js engines, lead generation storefronts), result-driven social media marketing (Instagram growth kits, maps search optimizations), branding, SEO, and smart AI automation workflows."
        }
      },
      {
        "@type": "Question",
        "name": "Does DGEN Z build business websites?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, DGEN Z Digital Agency specializes in professional business website development. We construct desktop-first, highly responsive, lightning-fast landing pages, full e-commerce storefronts, and parallax creative portfolios designed to maximize inquiries and customer acquisitions."
        }
      },
      {
        "@type": "Question",
        "name": "Does DGEN Z provide social media marketing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, DGEN Z provides elite Social Media Marketing. We build targeted visual grid structures, high-ticket organic brand funnels, daily story graphics, and automated Instagram/Facebook direct response flows to turn traffic into clients."
        }
      },
      {
        "@type": "Question",
        "name": "Is DGEN Z available outside Kolkata?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. While DGEN Z is proudly headquartered in Kolkata, West Bengal, India, we build digital assets and coordinate growth campaigns for elite brands, active startups, and local business partners across India and globally."
        }
      },
      {
        "@type": "Question",
        "name": "How can I contact DGEN Z?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can connect directly with our chief strategist Sobhit Jaiswal via instant WhatsApp phone call at +91 96811 68381, or send an electronic mail inquiry to creativedgenz32@gmail.com to request a tailored quote."
        }
      },
      {
        "@type": "Question",
        "name": "Does DGEN Z provide branding solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, DGEN Z is a complete branding agency. We design sleek custom vector logos, craft full visual brand identity systems, corporate typography kits, and premium tactile packaging mockups that establish absolute market authority."
        }
      }
    ]
  }
];

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head />
      <body suppressHydrationWarning className="bg-[#040406] text-white">
        <script
          id="json-ld-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          suppressHydrationWarning
        />
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}

