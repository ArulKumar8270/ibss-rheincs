import type { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Epicor Kinetic ERP for Manufacturing & Supply Chain | Cloud-Based Next-Gen ERP",
  description:
    "Automate workflows, improve supply chain visibility, and optimize production with real-time analytics, cloud access, and scalable deployment.",
};
export default function EpicorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
