import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Graphic Design Services | DGEN Z",
  description: "DGEN Z offers professional graphic design services, custom vector logo design, branding packages, and presentation decks. Book a free design audit with Sobhit Jaiswal.",
  alternates: {
    canonical: "/services/graphic-design",
  },
};

export default function GraphicDesignLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
