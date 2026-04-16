import type { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "SAP, Epicor & Microsoft Dynamics 365 ERP Partner | Enterprise Modernization | RheinBrücke",
  description:
    "Modern Cloud ERP Solutions, Digital transformation, Enterprise integration & Business Process Automation for Manufacturing, EPC, Automotive, Distribution, Oil & Gas, Interior design & Retail",
};
export default function EpicorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
