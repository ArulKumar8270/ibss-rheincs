import type { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Microsoft Technology Services & Solutions | RheinBrücke",
  description:
    "Overcome operational inefficiencies and legacy bottlenecks with secure, scalable Microsoft Azure, Power Platform and Copilot solutions. Consult our experts.",
};
export default function EpicorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
