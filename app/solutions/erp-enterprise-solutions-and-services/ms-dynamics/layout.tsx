import type { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Microsoft Dynamics ERP & CRM Solutions | Scalable Business Transformation",
  description:
    "Streamline operations with Microsoft Dynamics ERP & CRM. Enable integration, automation, and real-time insights for scalable growth.",
};
export default function EpicorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
