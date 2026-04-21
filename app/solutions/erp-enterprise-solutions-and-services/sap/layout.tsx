import type { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "SAP S/4HANA Implementation & Migration Partner | RheinCS",
  description:
    "S/4HANA, RISE with SAP, AMS, BTP, Analytics Cloud & Signavio services for modern enterprises",
};
export default function EpicorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
