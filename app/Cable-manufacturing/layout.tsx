import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ERP for Cable Manufacturing | RheinBrücke IT Consulting",
  description:
    "AI-ready ERP solutions tailored for cable and wire rope manufacturing. Automate production planning, inventory, traceability, forecasting and financial workflows.",
  alternates: {
    canonical: "https://www.rheincs.com/Cable-manufacturing/",
  },
  openGraph: {
    title: "ERP for Cable Manufacturing | RheinBrücke",
    description:
      "AI-ready ERP for cable and wire rope manufacturers. Production planning, traceability & financial automation.",
    url: "https://www.rheincs.com/Cable-manufacturing/",
    type: "website",
    images: ["https://www.rheincs.com/new/cm-09.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "ERP for Cable Manufacturing | RheinBrücke",
    description:
      "AI-ready ERP for cable and wire rope manufacturers. Production planning, traceability & financial automation.",
    images: ["https://www.rheincs.com/new/cm-09.jpeg"],
  },
};

export default function cableLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "RheinBrücke IT Consulting",
    alternateName: "RheinCS",
    url: "https://www.rheincs.com",
    logo: "https://www.rheincs.com/images/rlogo.png",
    description:
      "RheinBrücke IT Consulting is a global ERP and digital transformation company specializing in cable manufacturing, discrete manufacturing, and process industries.",
    email: "info@rheincs.com",
    telephone: "+49-231-292-95619",
    foundingLocation: {
      "@type": "Place",
      name: "Netherlands",
    },
    areaServed: ["Netherlands", "Germany", "USA", "India", "UAE", "Saudi Arabia"],
    sameAs: [
      "https://www.linkedin.com/company/rheinbrucke",
      "https://twitter.com/rheinbrucke",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "info@rheincs.com",
      areaServed: "Worldwide",
      availableLanguage: "English",
    },
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "ERP for Cable Manufacturing | RheinBrücke IT Consulting",
    url: "https://www.rheincs.com/Cable-manufacturing/",
    description:
      "AI-ready ERP solutions tailored for cable and wire rope manufacturing. Automate production planning, inventory, traceability, forecasting and financial workflows.",
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      name: "RheinBrücke IT Consulting",
      url: "https://www.rheincs.com",
    },
    about: {
      "@type": "Service",
      name: "ERP for Cable Manufacturing",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.rheincs.com",
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
          name: "Cable Manufacturing",
          item: "https://www.rheincs.com/Cable-manufacturing/",
        },
      ],
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "ERP Implementation for Cable Manufacturing",
    name: "AI-Ready ERP for Cable Manufacturing Operations",
    description:
      "End-to-end ERP digital transformation for cable and wire rope manufacturers. Covers production planning, inventory management, batch traceability, demand forecasting, supply chain, and financial workflows.",
    url: "https://www.rheincs.com/Cable-manufacturing/",
    provider: {
      "@type": "Organization",
      name: "RheinBrücke IT Consulting",
      url: "https://www.rheincs.com",
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Cable and Wire Rope Manufacturers",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cable Manufacturing ERP Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Epicor Kinetic ERP for Cable Manufacturing",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Production Planning Automation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Barcode-Driven Batch Traceability",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Demand Forecasting and Cash Flow Management",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Legacy System Migration",
          },
        },
      ],
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
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
        name: "Cable Manufacturing ERP",
        item: "https://www.rheincs.com/Cable-manufacturing/",
      },
    ],
  };

  const reviewAggregateSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "RheinBrücke IT Consulting",
    url: "https://www.rheincs.com",
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Darius Jonason",
        },
        reviewBody:
          "RheinBrücke IT Consulting's technical expertise makes me feel invincible. Working with RB has taken a lot of weight off our shoulders; both the sheer volume of what we can handle together as well as the high level of technical expertise they bring to the table have greatly advanced CCT's abilities.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Craig Stephens",
        },
        reviewBody:
          "I have really come to appreciate their depth of technical and functional knowledge of the product and their commitment to our end customers needs. They react quickly to new challenges and are always there for me to rely on.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "9",
      bestRating: "5",
      worstRating: "1",
    },
  };

  const websiteSitelinksSearchSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "RheinBrücke IT Consulting",
    url: "https://www.rheincs.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.rheincs.com/?s={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Modernise Cable Manufacturing Operations with ERP",
    description:
      "A step-by-step guide to implementing ERP in a cable manufacturing business to improve production efficiency, traceability, and profitability.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Assess Current Operational Challenges",
        text: "Identify pain points including production bottlenecks, manual reporting, inventory inaccuracies, and disconnected legacy systems.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Select the Right ERP Platform",
        text: "Choose an ERP solution like Epicor Kinetic that is purpose-built for cable and wire rope manufacturing workflows.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Plan Data Migration",
        text: "Use structured migration templates to migrate historical operational and financial data from legacy systems.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Implement Production Planning Automation",
        text: "Automate multi-level job orders, sub-assemblies, and material issues for streamlined production control.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Enable Barcode-Driven Traceability",
        text: "Deploy batch tracking with barcodes for end-to-end traceability across supply chain and production.",
      },
      {
        "@type": "HowToStep",
        position: 6,
        name: "Activate Real-Time Dashboards",
        text: "Set up centralised dashboards providing real-time operational, financial, and production insights.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewAggregateSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSitelinksSearchSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      {children}
    </>
  );
}
