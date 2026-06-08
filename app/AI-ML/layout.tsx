import type { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "AI, Machine Learning & Data Analytics Solutions | RheinBrücke",
  description:
    "Transform enterprise data into actionable intelligence with AI, Machine Learning, and advanced analytics solutions that improve decision-making and business performance.",
};
export default function AIMLLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
