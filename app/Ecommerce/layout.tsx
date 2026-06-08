import type { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Enterprise Headless Ecommerce Solutions & MACH Architecture",
  description:
    "Modernize legacy infrastructure with cloud-native, headless ecommerce platforms. Implementation partners for commercetools, Fluent Commerce, and Algolia.",
};
export default function EcommerceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
