import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Services | DGEN Z",
  description: "DGEN Z provides high-impact digital marketing, social media marketing, local SEO, and lead generation services. Partner with Sobhit Jaiswal in Kolkata.",
  alternates: {
    canonical: "/marketing",
  },
};

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
