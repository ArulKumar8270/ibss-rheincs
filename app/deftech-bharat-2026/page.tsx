import type { Metadata } from "next";
import DeftechBharat2026Client from "./DeftechBharat2026Client";

export const metadata: Metadata = {
  title: "DefTech Bharat 2026 | RheinBrücke",
  description:
    "Meet RheinBrücke at DefTech Bharat 2026 to discuss your Digital Transformation and Enterprise IT needs.",
};

export default function DeftechBharat2026Page() {
  return <DeftechBharat2026Client />;
}
