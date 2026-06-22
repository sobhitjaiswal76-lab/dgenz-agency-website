import type {Metadata} from 'next';
import './globals.css'; // Global styles
import ClientWrapper from '../components/ClientWrapper';

export const metadata: Metadata = {
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
  verification: {
    google: 'YegouRUe2XdV_AFJ2LY16poSaiui8vyBLAo_BoQ8nII',
  }
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

