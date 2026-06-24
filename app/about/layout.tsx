import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About DGEN Z Digital Agency & Sobhit Jaiswal | Kolkata",
  description: "Learn about the vision behind DGEN Z, a leading digital marketing, graphic design, and website development agency in Kolkata founded by Sobhit Jaiswal.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
