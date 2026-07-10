import type { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "ERP Consulting & Digital Transformation Services | RheinBrücke",
  description:
    "Upgrade legacy ERP to cloud-native systems on SAP, Epicor, and Microsoft Dynamics 365. RheinBrücke helps enterprises unify operations and scale faster.",
};
export default function EpicorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
