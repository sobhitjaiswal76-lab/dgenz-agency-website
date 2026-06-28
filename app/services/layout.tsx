import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing, Website Development & Branding Services | DGEN Z",
  description: "Browse DGEN Z's complete service menu, including custom Next.js website development, graphic design, social media marketing, local SEO, and Google Business Profile management in Kolkata.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
