import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | DGEN Z — Premium 3D Digital Agency",
  description: "Learn about the vision behind DGEN Z. We merge elite brand visual layouts, lightning fast page execution, and Google Business Profile local search dominance.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
