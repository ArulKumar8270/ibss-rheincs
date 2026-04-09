import type { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Enterprise Digital Services | Azure, Analytical Data, AI & App Modernisation ",
  description:
    "Transform legacy systems, unify data, and deploy AI-driven solutions to improve performance, agility, and business outcomes.",
};
export default function EpicorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
