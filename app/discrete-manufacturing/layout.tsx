import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Enterprise Digital Transformation & ERP Solutions | RheinBrücke",
  description: "Driving Digital Innovation with Integrated Business Platforms",
};

export default function EpicorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="discrete-manufacturing-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://www.rheincs.com/#organization",
                name: "RheinBrücke IT Consulting",
                url: "https://www.rheincs.com/",
                logo: "https://www.rheincs.com/images/rlogo.png",
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+49-231-292-95619",
                  contactType: "customer service",
                  availableLanguage: ["English", "German"],
                },
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "NL",
                },
                areaServed: ["NL", "DE", "US", "IN", "UAE", "SA"],
                sameAs: [
                  "https://www.linkedin.com/company/rheinbrucke-it-consulting",
                ],
              },
              {
                "@type": "WebPage",
                "@id":
                  "https://www.rheincs.com/discrete-manufacturing/#webpage",
                url: "https://www.rheincs.com/discrete-manufacturing/",
                name:
                  "Discrete Manufacturing ERP & Digital Solutions | RheinBrücke",
                description:
                  "RheinBrücke delivers Discrete Manufacturing ERP and digital transformation solutions covering production planning, BOM management, shop-floor control, quality traceability, and MRP.",
                inLanguage: "en",
                isPartOf: {
                  "@type": "WebSite",
                  url: "https://www.rheincs.com/",
                },
                about: {
                  "@id":
                    "https://www.rheincs.com/discrete-manufacturing/#service",
                },
                breadcrumb: {
                  "@id":
                    "https://www.rheincs.com/discrete-manufacturing/#breadcrumb",
                },
              },
              {
                "@type": "BreadcrumbList",
                "@id":
                  "https://www.rheincs.com/discrete-manufacturing/#breadcrumb",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.rheincs.com/",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Industries",
                    item: "https://www.rheincs.com/industries/",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Discrete Manufacturing",
                    item: "https://www.rheincs.com/discrete-manufacturing/",
                  },
                ],
              },
              {
                "@type": "Service",
                "@id":
                  "https://www.rheincs.com/discrete-manufacturing/#service",
                name:
                  "Discrete Manufacturing ERP & Digital Transformation Solutions",
                description:
                  "End-to-end ERP and digital solutions for discrete manufacturers including production planning, MRP, BOM management, shop-floor control, quality traceability, and MES integration.",
                url: "https://www.rheincs.com/discrete-manufacturing/",
                provider: {
                  "@id": "https://www.rheincs.com/#organization",
                },
                serviceType:
                  "ERP Implementation and Digital Transformation",
                category: "Discrete Manufacturing",
                areaServed: [
                  "Netherlands",
                  "Germany",
                  "USA",
                  "India",
                  "Bahrain",
                  "Kuwait",
                  "Qatar",
                  "Oman",
                  "UAE",
                  "Saudi Arabia",
                  "Global",
                ],
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Discrete Manufacturing Solutions",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name:
                          "Production Planning & Scheduling (MRP)",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name:
                          "BOM & Engineering Change Management",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name:
                          "Shop Floor Control & MES Integration",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name:
                          "Quality Management & Traceability",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name:
                          "Inventory & Warehouse Management",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name:
                          "Epicor ERP for Discrete Manufacturing",
                      },
                    },
                  ],
                },
              },
              {
                "@type": "FAQPage",
                "@id":
                  "https://www.rheincs.com/discrete-manufacturing/#faq",
                mainEntity: [
                  {
                    "@type": "Question",
                    name:
                      "What is RheinBrücke's expertise in discrete manufacturing?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "RheinBrücke specializes in digital transformation for MTO, MTS, and mixed-mode manufacturing environments using ERP solutions like Epicor.",
                    },
                  },
                  {
                    "@type": "Question",
                    name:
                      "How do these solutions improve production efficiency?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "They improve efficiency through advanced scheduling, shop-floor automation, and optimized inventory management.",
                    },
                  },
                  {
                    "@type": "Question",
                    name:
                      "Do you support CAD/CAM and MES integration?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Yes, ERP integrates with CAD/CAM and MES systems to enable real-time data flow and traceability.",
                    },
                  },
                  {
                    "@type": "Question",
                    name:
                      "What business outcomes can manufacturers expect?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Reduced lead times, optimized resources, improved traceability, and better operational efficiency.",
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />

      {children}
    </>
  );
}