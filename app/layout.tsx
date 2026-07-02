import type {Metadata} from 'next';
import './globals.css'; // Global styles
import ClientWrapper from '../components/ClientWrapper';

export const metadata: Metadata = {
  title: "DGEN Z | Digital Marketing Agency & Website Development Company",
  description: "DGEN Z is a Digital Marketing Agency in Kolkata founded by Sobhit Jaiswal. We provide Website Development,Digital Marketing,Graphic Design,Branding,SEO,Google Business Profile Optimization and AI Automation services.",
,
  keywords: [
    "DGEN Z",
    "DGENZ",
    "Digital Marketing Agency",
    "Website Development Company",
    "Website Design",
    "Website Development Kolkata",
    "Website Designer Kolkata",
    "Graphic Design Services",
    "Logo Design",
    "Branding Agency",
    "SEO Services",
    "Google Business Profile",
    "Google Business Profile Optimization",
    "AI Automation",
    "Marketing Agency Kolkata",
    "Business Website Development",
    "Sobhit Jaiswal"
  ]
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body suppressHydrationWarning className="bg-[#040406] text-white">
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}

