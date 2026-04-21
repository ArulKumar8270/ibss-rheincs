import type { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Digital Solutions & Enterprise Transformation | Cloud, AI, Data & Integration Services",
  description:
    "Modernize your enterprise core with composable architecture, smarter workflows, and analytics-driven optimisation that delivers sustained business value",
};
export default function EpicorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://www.rheincs.com/digital-solutions/#webpage",
            "url": "https://www.rheincs.com/digital-solutions/",
            "name": "Digital Solutions & Enterprise Transformation Services | RheinBrücke",
            "description": "Outcome-driven digital solutions combining AI, cloud-native architecture, data intelligence, and enterprise integration. RheinBrücke delivers measurable business transformation.",
            "inLanguage": "en",
            "isPartOf": {
              "@type": "WebSite",
              "@id": "https://www.rheincs.com/#website",
              "url": "https://www.rheincs.com/",
              "name": "RheinBrücke IT Consulting"
            },
            "about": {
              "@type": "Service",
              "name": "Digital Solutions & Enterprise Transformation",
              "provider": {
                "@type": "Organization",
                "@id": "https://www.rheincs.com/#organization"
              }
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.rheincs.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Solutions & Services",
                  "item": "https://www.rheincs.com/solutions/digital-services-and-solutions/"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Digital Solutions",
                  "item": "https://www.rheincs.com/digital-solutions/"
                }
              ]
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://www.rheincs.com/#organization",
            "name": "RheinBrücke IT Consulting",
            "url": "https://www.rheincs.com/",
            "logo": "https://www.rheincs.com/images/rlogo.png",
            "email": "info@rheincs.com",
            "telephone": "+49 231 292 95619",
            "areaServed": ["NL", "DE", "US", "IN", "UAE", "SA"],
            "sameAs": [],
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "NL"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://www.rheincs.com/digital-solutions/#service",
            "name": "Digital Solutions & Enterprise Transformation",
            "alternateName": "Enterprise Digital Transformation Services",
            "url": "https://www.rheincs.com/digital-solutions/",
            "description": "RheinBrücke delivers outcome-driven digital solutions using the Analyse-Integrate-Transform framework. Services span cloud-native architecture, AI/ML, BI & Analytics, eCommerce, ERP-CRM integrations, and enterprise application development.",
            "provider": {
              "@type": "Organization",
              "@id": "https://www.rheincs.com/#organization",
              "name": "RheinBrücke IT Consulting"
            },
            "serviceType": "Digital Transformation",
            "category": "Enterprise Technology Consulting",
            "areaServed": [
              "Netherlands", "Germany", "USA", "India", "UAE", "Saudi Arabia"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Digital Solutions Portfolio",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Enterprise Architecture Platform as a Service",
                    "description": "API-first, composable architectures with scalable infrastructure, integration frameworks, and governance controls."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Enterprise Software Implementation",
                    "description": "End-to-end ERP and CRM implementation using agile methodologies for faster time-to-value."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "ERP-CRM Integrations & Cloud-Native Solutions",
                    "description": "Unify business processes with cloud-native enterprise applications integrating ERP and CRM with embedded analytics."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Data Pipelining, Consolidation and Warehousing",
                    "description": "Real-time and batch data pipelines, data warehouses, data lakes, and scalable AI/ML operationalisation."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI/ML Solutions & Advanced Analytics",
                    "description": "Azure Machine Learning and LEM-powered predictive maintenance, anomaly detection, and intelligent automation."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Business Intelligence & Data Visualisation",
                    "description": "Executive dashboards and self-service analytics using Tableau, Power BI for decision-making at speed."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Composable eCommerce Architecture",
                    "description": "MACH-principles eCommerce with omnichannel experiences, microservices, and operational KPI dashboards."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "UI/UX User-Centric Design",
                    "description": "Intuitive, enterprise-grade interfaces that drive user adoption and deliver measurable business value."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Managed Services & Security Governance",
                    "description": "Microsoft Entra, Defender, and Azure Sentinel-powered managed security with continuous optimisation."
                  }
                }
              ]
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What types of business solutions does RheinBrücke provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "RheinBrücke offers a comprehensive suite of end-to-end business solutions across ERP, CRM, Human Resource Management, and Digital Transformation domains. Each solution is tailored to industry-specific requirements, helping organizations enhance operational efficiency, data visibility, and customer engagement."
                }
              },
              {
                "@type": "Question",
                "name": "How are RheinBrücke's digital solutions differentiated?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "RheinBrücke solutions stand out through deep domain expertise, technology excellence, and proven implementation methodologies. The Analyse-Integrate-Transform framework combines industry best practices with agile delivery for faster time-to-value and measurable business outcomes."
                }
              },
              {
                "@type": "Question",
                "name": "Does RheinBrücke offer custom digital solution development?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. RheinBrücke provides custom software development services for unique business processes, integration requirements, or specialised functionalities not covered by standard ERP or CRM systems."
                }
              },
              {
                "@type": "Question",
                "name": "Are RheinBrücke digital solutions cloud-ready?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. All RheinBrücke solutions can be deployed on-premises, in the cloud, or in hybrid environments depending on your IT strategy. We work with major cloud platforms including Microsoft Azure."
                }
              }
            ]
          })
        }}
      />
      {children}
    </>
  );
}
