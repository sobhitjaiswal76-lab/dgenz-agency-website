import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium 3D Website Engineering | DGEN Z Developer",
  description: "We engineer lightning fast Next.js & React 19 websites styled with pristine visual structures and packed with real-world local business SEO schema slots.",
  alternates: {
    canonical: "/websites",
  },
};

export default function WebsitesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
