import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Creative Work Portfolio & Design Showcase | DGEN Z",
  description: "Discover the portfolio of DGEN Z, including premium Next.js website design, custom vector logos, branding assets, and automated marketing campaigns by Sobhit Jaiswal in Kolkata.",
  alternates: {
    canonical: "/portfolio",
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
