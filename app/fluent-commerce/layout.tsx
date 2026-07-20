import type { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Fluent Commerce Implementation Partner | RheinBrücke",
  description:
    "RheinBrücke is a Fluent Commerce implementation partner helping retail and distribution businesses achieve real-time inventory visibility and order orchestration.",
};
export default function EpicorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
