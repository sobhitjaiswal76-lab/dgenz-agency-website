import type {Metadata} from 'next';
import './globals.css'; // Global styles
import ClientWrapper from '../components/ClientWrapper';

export const metadata: Metadata = {
  metadataBase: new URL('https://dgenz-nu.vercel.app'),
  title: 'DGEN Z | Digital Marketing & Website Development | Kolkata',
  description: 'DGEN Z by Sobhit Jaiswal delivers expert Digital Marketing, custom Website Development, Graphic Design, and Google Business Profile SEO. Get your free proposal now!',
  keywords: [
    'DGEN Z',
    'DGENZ',
    'DGEN Z Agency',
    'DGEN Z Marketing Agency',
    'DGEN Z Digital Marketing',
    'Digital Marketing Agency',
    'Marketing Agency',
    'Website Development',
    'Website Development Company',
    'Website Designer',
    'Website Developer',
    'Graphic Design Services',
    'Logo Design',
    'Google Business Profile',
    'Google Business Profile Management',
    'Local SEO',
    'SEO Agency',
    'AI Automation',
    'Business Branding',
    'Business Growth',
    'Marketing Company',
    'Website Development Kolkata',
    'Digital Marketing Kolkata',
    'Marketing Agency Kolkata',
    'Graphic Designer Kolkata',
    'Sobhit Jaiswal'
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'DGEN Z | Digital Marketing & Website Development | Kolkata',
    description: 'DGEN Z by Sobhit Jaiswal delivers expert Digital Marketing, custom Website Development, Graphic Design, and Google Business Profile SEO. Get your free proposal now!',
    url: 'https://dgenz-nu.vercel.app',
    siteName: 'DGEN Z',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DGEN Z | Digital Marketing Agency, Website Development & Branding Kolkata',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DGEN Z | Digital Marketing & Website Development | Kolkata',
    description: 'DGEN Z by Sobhit Jaiswal delivers expert Digital Marketing, custom Website Development, Graphic Design, and Google Business Profile SEO. Get your free proposal now!',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'YegouRUe2XdV_AFJ2LY16poSaiui8vyBLAo_BoQ8nII',
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://dgenz-nu.vercel.app/#organization",
      "name": "DGEN Z",
      "alternateName": [
        "DGEN Z Agency",
        "DGEN Z Marketing Agency",
        "DGEN Z Digital Marketing",
        "DGENZ",
        "DGEN Z For Designing"
      ],
      "url": "https://dgenz-nu.vercel.app",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://dgenz-nu.vercel.app/#logo",
        "url": "https://dgenz-nu.vercel.app/og-image.jpg",
        "caption": "DGEN Z | Digital Marketing Agency, Website Development & Branding Kolkata"
      },
      "founder": {
        "@type": "Person",
        "@id": "https://dgenz-nu.vercel.app/#founder",
        "name": "Sobhit Jaiswal",
        "jobTitle": "Founder, Digital Marketing Expert & Website Developer",
        "image": "https://dgenz-nu.vercel.app/og-image.jpg"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9681168381",
        "contactType": "sales",
        "areaServed": "Worldwide",
        "availableLanguage": ["en", "hi"]
      },
      "sameAs": [
        "https://www.instagram.com/dgen_z7",
        "https://whatsapp.com/channel/0029VbBUVsdEwEk5YBNyaZ2k"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://dgenz-nu.vercel.app/#website",
      "url": "https://dgenz-nu.vercel.app",
      "name": "DGEN Z",
      "description": "DGEN Z by Sobhit Jaiswal delivers expert Digital Marketing, custom Website Development, Graphic Design, and Google Business Profile SEO. Get your free proposal now!",
      "publisher": {
        "@id": "https://dgenz-nu.vercel.app/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://dgenz-nu.vercel.app/?s={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://dgenz-nu.vercel.app/#service",
      "name": "DGEN Z | Digital Marketing Agency & Website Development Kolkata",
      "image": "https://dgenz-nu.vercel.app/og-image.jpg",
      "url": "https://dgenz-nu.vercel.app",
      "telephone": "+91-9681168381",
      "priceRange": "$$",
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
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://dgenz-nu.vercel.app/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://dgenz-nu.vercel.app"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://dgenz-nu.vercel.app/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Websites",
          "item": "https://dgenz-nu.vercel.app/websites"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Marketing",
          "item": "https://dgenz-nu.vercel.app/marketing"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Portfolio",
          "item": "https://dgenz-nu.vercel.app/portfolio"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "About",
          "item": "https://dgenz-nu.vercel.app/about"
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "Contact",
          "item": "https://dgenz-nu.vercel.app/contact"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://dgenz-nu.vercel.app/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What services does DGEN Z offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "DGEN Z offers premium services including website development, digital marketing, graphic design, social media marketing, Google Business Profile (GBP) optimization, local SEO, branding, and smart AI automation workflows."
          }
        },
        {
          "@type": "Question",
          "name": "Does DGEN Z build custom business websites?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, DGEN Z is a premium website development company specializing in custom, high-speed business websites, landing pages, and e-commerce storefronts built on modern tech stacks like Next.js and React."
          }
        },
        {
          "@type": "Question",
          "name": "Does DGEN Z provide social media marketing services in Kolkata?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, DGEN Z provides elite social media marketing and brand identity design services, building visual grid frameworks, custom captions, and daily content strategies targeting audiences in Kolkata and globally."
          }
        },
        {
          "@type": "Question",
          "name": "Who is the founder of DGEN Z Marketing Agency?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "DGEN Z was founded by Sobhit Jaiswal, a senior digital marketing consultant, professional website developer, and brand architect based in Kolkata, India."
          }
        },
        {
          "@type": "Question",
          "name": "Where is DGEN Z Digital Agency located?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "DGEN Z is headquartered at 5/1 Hari Paul Lane, Kolkata, West Bengal 700006, India, providing local SEO and digital marketing services to businesses nationwide and internationally."
          }
        },
        {
          "@type": "Question",
          "name": "How does DGEN Z help with Google Business Profile optimization?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We optimize Google Business Profile (GBP) listings to rank #1 on Google Maps in Kolkata. Our local SEO services include reviews setup, geo-tagged image uploads, map citations, and local authority building."
          }
        },
        {
          "@type": "Question",
          "name": "Does DGEN Z build high-performance e-commerce websites?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. We engineer secure, fast, and responsive e-commerce storefronts with seamless user experiences, conversion-optimized checkout grids, and integrated payment pathways."
          }
        },
        {
          "@type": "Question",
          "name": "What is AI website development, and does DGEN Z provide it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AI website development involves building websites embedded with smart AI capabilities such as server-side Gemini AI models, responsive chatbot flows, and personalized user interactions. DGEN Z is a leader in this domain."
          }
        },
        {
          "@type": "Question",
          "name": "How can DGEN Z help grow my local business in Kolkata?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Through targeted local SEO services, Google Maps optimization, premium branding, high-conversion web development, and local social media campaigns, we drive high-intent phone calls and store visits to your business."
          }
        },
        {
          "@type": "Question",
          "name": "What is your website development process?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our website development process consists of four main sprints: Strategy Sizing, Matte Branding Forge, Next.js/React Coding, and Speed/SEO Audits with schema integrations."
          }
        },
        {
          "@type": "Question",
          "name": "Does DGEN Z design custom company logos and branding kits?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, DGEN Z is a professional graphic design company. We design scalable vector logos, brand identity guides, packaging box templates, and custom presentation slides."
          }
        },
        {
          "@type": "Question",
          "name": "What technologies does DGEN Z Website Design Company use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We develop fast and secure platforms using Next.js, React, Tailwind CSS, TypeScript, and Three.js for interactive 3D elements to ensure maximum Core Web Vitals scores."
          }
        },
        {
          "@type": "Question",
          "name": "How does DGEN Z integrate marketing automations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We construct smart automated systems including automated Instagram comment responses, Facebook direct message triggers, WhatsApp leads funnels, and custom AI chat assistants."
          }
        },
        {
          "@type": "Question",
          "name": "Why is professional graphic design important for business growth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Professional graphic design raises the perceived value of your business, commands premium pricing, builds customer trust, and converts traffic into buyers far more effectively than generic templates."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take DGEN Z to develop a custom website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A standard custom-designed, high-performance landing page or business website is developed, fully optimized for SEO, and deployed in 3 to 7 business days."
          }
        },
        {
          "@type": "Question",
          "name": "Is DGEN Z's digital marketing suitable for international clients?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, while we are a leading digital marketing agency in Kolkata, West Bengal, we build high-ticket campaigns and code digital assets for international startups and global companies."
          }
        },
        {
          "@type": "Question",
          "name": "How can I contact Sobhit Jaiswal at DGEN Z?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can contact our founder Sobhit Jaiswal directly via instant WhatsApp or phone call at +91 96811 68381, or by sending an email to creativedgenz32@gmail.com."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide professional PPT and presentation pitch deck design?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, DGEN Z designs high-ticket corporate PowerPoint slides, professional PDF presentations, Google Forms formatting, and investor pitch books that raise capital and close enterprise deals."
          }
        },
        {
          "@type": "Question",
          "name": "What SEO services does DGEN Z offer for higher Google rankings?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer complete technical and on-page SEO services, including rich schema markup injection, logical HTML layout heading hierarchies, mobile-first responsiveness, and canonical URL setups."
          }
        },
        {
          "@type": "Question",
          "name": "Can DGEN Z help automate customer lead generation on WhatsApp?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we build direct click-to-chat WhatsApp communication setups, pre-filled lead capture fields, and automatic greeting funnels to convert cold traffic into hot sales calls immediately."
          }
        }
      ]
    }
  ]
};

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

