import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Agency | SEO, Google Business Profile & Lead Generation | DGEN Z",
  description: "Boost your search engine rankings and lead generation. DGEN Z provides expert local SEO, social media marketing, and Google Business Profile management in Kolkata.",
  alternates: {
    canonical: "/marketing",
  },
};

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
