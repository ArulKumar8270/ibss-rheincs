import type { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "ERP Software for Interior Design & Fit-out Firms | RheinBrücke",
  description:
    "ERP & digital solutions built for interior design and fit-out companies automate procurement, milestone tracking and project accounting.",
};
export default function EpicorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
