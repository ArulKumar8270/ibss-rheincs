import type { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Epicor Companion ERP Extensions | Payroll, MES, WMS & Analytics",
  description:
    "Extend Epicor ERP with integrated solutions for payroll, MES, ECM, FP&A, IP&O, WMS, and analytics. Enable unified ERP workflows, automation, and real-time insights.",
};
export default function EpicorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
