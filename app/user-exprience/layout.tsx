import type { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "UX as a Service | UI/UX Design & Consulting and Upgrades| RheinBrücke",
  description:
    "Transform digital experiences with UX Services, UX/UI designs, UX consulting, user research, and enterprise UX solutions. Create custom made and user-defined web and mobile applications.",
};
export default function UserExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
