import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "ERP for Cable Manufacturing | ERP & Digital Transformation for Cable Manufacturing Operations for Industry Experts",
  description:
    "Modernize your cable manufacturing operations with ERP and AI-driven Digital Transformation. Solve commodity price volatility, batch traceability and compliance.",
};

export default function cableLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
