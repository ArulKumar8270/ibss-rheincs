import type { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Distribution ERP and Supply Chain Solutions & Services | RheinBrücke",
  description:
    "ERP and Supply Chain solutions for Distribution businesses. Improve inventory visibility, demand forecasting, and order fulfilment with RheinBrücke.",
};
export default function EpicorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
