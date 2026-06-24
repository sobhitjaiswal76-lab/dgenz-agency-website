import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Graphic Design Services & Logo Design Kolkata | DGEN Z For Designing",
  description: "DGEN Z offers professional graphic design services in Kolkata. From sleek custom vector logos, high-ticket packaging design, to branding guidelines by Sobhit Jaiswal.",
  alternates: {
    canonical: "/services/graphic-design",
  },
};

export default function GraphicDesignLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
