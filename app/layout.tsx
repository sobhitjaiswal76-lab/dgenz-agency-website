import type {Metadata} from 'next';
import './globals.css'; // Global styles
import ClientWrapper from '../components/ClientWrapper';

export const metadata: Metadata = {
  metadataBase: new URL('https://dgenz-nu.vercel.app'),
  title: 'DGEN Z — ULTRA PREMIUM 3D DIGITAL AGENCY | SOBHIT JAISWAL',
  description: 'Ultra-premium futuristic 3D digital agency by Sobhit Jaiswal in Kolkata, India. Expert website designer, Google Business Profile management, Instagram branding & lead generation solutions.',
  keywords: [
    'Website Designer Kolkata',
    'Digital Marketing Agency Kolkata',
    'Social Media Marketing Kolkata',
    'Business Website Development',
    'Logo Design Services',
    'Google Business Profile Management',
    'DGEN Z',
    'Sobhit Jaiswal'
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'DGEN Z — ULTRA PREMIUM 3D DIGITAL AGENCY | SOBHIT JAISWAL',
    description: 'Ultra-premium futuristic 3D digital agency by Sobhit Jaiswal in Kolkata, India. Expert website designer, Google Business Profile management, Instagram branding & lead generation solutions.',
    url: 'https://dgenz-nu.vercel.app',
    siteName: 'DGEN Z',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DGEN Z Premium Agency',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DGEN Z — ULTRA PREMIUM 3D DIGITAL AGENCY | SOBHIT JAISWAL',
    description: 'Ultra-premium futuristic 3D digital agency by Sobhit Jaiswal in Kolkata, India.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'YegouRUe2XdV_AFJ2LY16poSaiui8vyBLAo_BoQ8nII',
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "DGEN Z",
  "image": "https://dgenz-nu.vercel.app/og-image.jpg",
  "url": "https://dgenz-nu.vercel.app",
  "telephone": "+91 96811 68381",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "5/1 Hari Paul Lane",
    "addressLocality": "Kolkata",
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
  },
  "sameAs": [
    "https://www.instagram.com/dgen_z7",
    "https://whatsapp.com/channel/0029VbBUVsdEwEk5YBNyaZ2k"
  ]
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className="bg-[#040406] text-white">
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}

