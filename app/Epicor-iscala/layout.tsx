import type { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Epicor iScala ERP Solutions | Finance & Operations ERP for Global Businesses",
  description:
    "Explore Epicor iScala ERP for finance, supply chain, and operations. Enable real-time visibility, compliance, and efficient global business management.",
};
export default function EpicorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
