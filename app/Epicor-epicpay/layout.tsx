import type { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Epicor Payroll MEA | EpicPay Integrated Payroll Solution",
  description:
    "Streamline payroll with EpicPay, the fully integrated Epicor ERP payroll solution for MEA. Ensure compliance with regional labor laws. Book a demo.",
};
export default function EpicorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
