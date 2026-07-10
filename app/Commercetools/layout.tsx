import type { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "commercetools Services Headless & Composable eCommerce Solutions and Consulting",
  description:
    "Expert commercetools implementation, headless integrations, and scalable cloud-native solutions for enterprise eCommerce. Migrate, replatform and maintain",
};
export default function EpicorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
