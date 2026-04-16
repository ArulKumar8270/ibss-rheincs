import type { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Digital Solutions & Enterprise Transformation | Cloud, AI, Data & Integration Services",
  description:
    "Modernize your enterprise core with composable architecture, smarter workflows, and analytics-driven optimisation that delivers sustained business value",
};
export default function EpicorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
