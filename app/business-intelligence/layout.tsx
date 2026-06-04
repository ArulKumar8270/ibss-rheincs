import type { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Business Intelligence (BI) services – Implementation, Upgrade and Operations. Get Data, Analyse and Transform.",
  description:
    "Explore BI, Microsoft Fabric, SAP BO, Databricks, Qlik, Data studio, Tableau and Snowflake. Unlock insights, Analytics, Intelligence and more.",
};
export default function EpicorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
