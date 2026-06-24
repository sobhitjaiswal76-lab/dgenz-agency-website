import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Website Development, Graphic Design & Marketing Services | DGEN Z",
  description: "DGEN Z offers high-performance digital marketing, custom Next.js website development, graphic design, and local SEO services in Kolkata. Contact Sobhit Jaiswal for premium brand building.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
