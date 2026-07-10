import type { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Enterprise Data Engineering & Warehousing | RheinBrücke",
  description:
    "Data Integration Services and Migration services. Convert high-volume data with real-time ETL pipelines and scalable cloud data lakes.",
};
export default function EcommerceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
