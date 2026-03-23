import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title:
    "Epicor ERP Solutions & Services | ERP Implementation, Support & Consulting",
  description:
    "Premium Epicor ERP partner delivering implementation, upgrades, cloud migration, and ongoing support for enterprises worldwide.",
};

export default function EpicorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="epicor-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://www.rheincs.com/#organization",
                name: "RheinBrucke IT Consulting",
                url: "https://www.rheincs.com/",
                logo: "https://www.rheincs.com/images/rlogo.png",
                description:
                  "RheinBrucke is an Epicor Premium Partner delivering ERP implementations across 45+ countries.",
                sameAs: [
                  "https://www.linkedin.com/company/rheinbrucke-it-consulting",
                  "https://www.epicor.com/en-us/partners/channel-partners/find-a-partner/rheinbrucke-it-consulting-pvt.-ltd",
                ],
              },
              {
                "@type": "WebPage",
                "@id":
                  "https://www.rheincs.com/solutions/erp-enterprise-solutions-and-services/epicor/#webpage",
                url: "https://www.rheincs.com/solutions/erp-enterprise-solutions-and-services/epicor/",
                name: "Epicor ERP Solutions & Services",
                isPartOf: {
                  "@type": "WebSite",
                  url: "https://www.rheincs.com/",
                },
                about: {
                  "@id":
                    "https://www.rheincs.com/solutions/erp-enterprise-solutions-and-services/epicor/#service",
                },
                breadcrumb: {
                  "@id":
                    "https://www.rheincs.com/solutions/erp-enterprise-solutions-and-services/epicor/#breadcrumb",
                },
              },
              {
                "@type": "BreadcrumbList",
                "@id":
                  "https://www.rheincs.com/solutions/erp-enterprise-solutions-and-services/epicor/#breadcrumb",
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
                    name: "Solutions & Services",
                    item: "https://www.rheincs.com/solutions/erp-enterprise-solutions-and-services/erp/",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Epicor ERP Solutions",
                    item: "https://www.rheincs.com/solutions/erp-enterprise-solutions-and-services/epicor/",
                  },
                ],
              },
              {
                "@type": "Service",
                "@id":
                  "https://www.rheincs.com/solutions/erp-enterprise-solutions-and-services/epicor/#service",
                name: "Epicor ERP Solutions & Services",
                description:
                  "End-to-end Epicor ERP services including implementation, cloud migration, upgrades, rollouts, and managed support.",
                url: "https://www.rheincs.com/solutions/erp-enterprise-solutions-and-services/epicor/",
                provider: {
                  "@id": "https://www.rheincs.com/#organization",
                },
                areaServed: [
                  "Netherlands",
                  "Germany",
                  "USA",
                  "India",
                  "UAE",
                  "Saudi Arabia",
                  "Bahrain",
                  "Qatar",
                  "Oman",
                  "Global",
                ],
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Epicor ERP Service Offerings",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Epicor Kinetic ERP Implementation",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Epicor Cloud Migration",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Epicor Version Upgrades",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Epicor Global Rollouts",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Epicor Managed Services",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Epicor iScala ERP",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Epicor Companion Products",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Epicor ERP Consulting",
                      },
                    },
                  ],
                },
              },
            ],
          }),
        }}
      />

      {children}
    </>
  );
}