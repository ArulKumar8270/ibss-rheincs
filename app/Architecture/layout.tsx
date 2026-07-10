import type { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Application Modernization Services | Cloud Architecture & Legacy Migration",
  description:
    "Modernize legacy applications into serverless environments. Seamlessly integrate modern tools like Algolia and Amplience for high-availability performance.",
};
export default function EcommerceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
