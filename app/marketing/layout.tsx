import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media Marketing & Digital Agency Kolkata | DGEN Z",
  description: "Boost your local search authority and Instagram growth. DGEN Z provides elite digital marketing, local SEO, and social media marketing in Kolkata, India.",
  alternates: {
    canonical: "/marketing",
  },
};

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
