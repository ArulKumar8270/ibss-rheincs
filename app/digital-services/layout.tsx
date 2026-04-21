import type { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Enterprise Digital Services | Azure, Analytical Data, AI & App Modernisation",
  description:
    "Transform legacy systems, unify data, and deploy AI-driven solutions to improve performance, agility, and business outcomes.",
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
            "@id": "https://www.rheincs.com/digital-services/#webpage",
            "url": "https://www.rheincs.com/digital-services/",
            "name": "Enterprise Digital Services | Azure, AI & App Modernisation | RheinBrücke",
            "description": "RheinBrücke Digital Services: MACH architecture, data engineering, Azure AI/ML, UX/UI, mobile apps, and managed security services for scalable enterprise transformation.",
            "inLanguage": "en",
            "isPartOf": {
              "@type": "WebSite",
              "@id": "https://www.rheincs.com/#website",
              "url": "https://www.rheincs.com/",
              "name": "RheinBrücke IT Consulting"
            },
            "about": {
              "@type": "Service",
              "name": "Enterprise Digital Services",
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
                  "name": "Digital Services",
                  "item": "https://www.rheincs.com/digital-services/"
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
            "@type": "Service",
            "@id": "https://www.rheincs.com/digital-services/#service",
            "name": "Enterprise Digital Services",
            "alternateName": "MACH Architecture & Azure Digital Services",
            "url": "https://www.rheincs.com/digital-services/",
            "description": "Comprehensive digital services delivering MACH architecture, data intelligence, AI/ML, UX/UI design, mobile applications, managed services, and identity security solutions for enterprise businesses.",
            "provider": {
              "@type": "Organization",
              "@id": "https://www.rheincs.com/#organization",
              "name": "RheinBrücke IT Consulting"
            },
            "serviceType": "Enterprise Digital Services",
            "category": "IT Consulting & Digital Transformation",
            "areaServed": [
              "Netherlands", "Germany", "USA", "India", "UAE", "Saudi Arabia"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Digital Services Catalogue",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Architecture Services – MACH on Azure",
                    "description": "Design and implementation of MACH architecture on Microsoft Azure using Microservices, API-first, Cloud-Native, and Headless principles with event-driven systems.",
                    "additionalProperty": {
                      "@type": "PropertyValue",
                      "name": "Technologies",
                      "value": "MACH, SOA, Microsoft Azure, Event-driven Frameworks"
                    }
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "App Modernisation",
                    "description": "Transform legacy systems into cloud-native applications using composable architectures. Tools include Algolia, Amplience, and Metapack.",
                    "additionalProperty": {
                      "@type": "PropertyValue",
                      "name": "Technologies",
                      "value": "Microservices, Serverless Computing, Emarsys"
                    }
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Application Development",
                    "description": "Enterprise-grade custom application development from development to deployment, integration-ready and lifecycle-optimised.",
                    "additionalProperty": {
                      "@type": "PropertyValue",
                      "name": "Technologies",
                      "value": ".NET, C#, VB.NET, Angular, React, Blazor, Azure DevOps"
                    }
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Integration & Data Services",
                    "description": "Microservices and API-led integration and real-time data connectivity using Azure Logic Apps, API Management, and Cosmos DB.",
                    "additionalProperty": {
                      "@type": "PropertyValue",
                      "name": "Technologies",
                      "value": "SQL, Azure, Data Factory, Real-time Data Services"
                    }
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Data Engineering & Warehousing",
                    "description": "Scalable data pipelines and modern cloud warehouses using Azure Data Lake, Synapse Analytics, and Delta Lake.",
                    "additionalProperty": {
                      "@type": "PropertyValue",
                      "name": "Technologies",
                      "value": "Azure Data Lake, Synapse Analytics, Delta Lake, Azure Data Factory"
                    }
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI & Analytics",
                    "description": "Azure Machine Learning solutions for predictive analytics, intelligent automation, and business insights. Power BI and Tableau for real-time dashboards.",
                    "additionalProperty": {
                      "@type": "PropertyValue",
                      "name": "Technologies",
                      "value": "Azure Machine Learning, Power BI, Tableau"
                    }
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "UX/UI Design Services",
                    "description": "Intuitive, user-centric interfaces using Figma, Webflow, and Adobe XD. AR/VR and inclusive design for responsive digital journeys.",
                    "additionalProperty": {
                      "@type": "PropertyValue",
                      "name": "Technologies",
                      "value": "Figma, Webflow, Anima, AR/VR Design, Adobe XD"
                    }
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Mobile Application Development",
                    "description": "High-performance iOS and Android mobile applications using React Native, Flutter, and native SDKs. Integrated with Azure.",
                    "additionalProperty": {
                      "@type": "PropertyValue",
                      "name": "Technologies",
                      "value": "React Native, Flutter, iOS SDK, Android SDK, Microsoft Azure"
                    }
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Managed Services & Security Governance",
                    "description": "24/7 monitoring, proactive support, and security optimisation using Azure Sentinel and Defender.",
                    "additionalProperty": {
                      "@type": "PropertyValue",
                      "name": "Technologies",
                      "value": "Azure Sentinel, Azure Defender, Proactive Security Management"
                    }
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Identity & Zero Trust Security Solutions",
                    "description": "Zero Trust security architectures and Microsoft Entra for identity management and MFA, ensuring protected, compliant operations.",
                    "additionalProperty": {
                      "@type": "PropertyValue",
                      "name": "Technologies",
                      "value": "Microsoft Entra, Zero Trust, MFA"
                    }
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
                "name": "What digital services does RheinBrücke provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "RheinBrücke offers ERP implementation, upgrades, global rollouts, application support and maintenance, digital transformation consulting, custom software development, MACH architecture, data engineering, Azure AI/ML, UX/UI design, mobile apps, managed services, and Zero Trust identity security."
                }
              },
              {
                "@type": "Question",
                "name": "Is consulting provided prior to digital services implementation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. RheinBrücke consultants conduct detailed readiness assessments and develop customised roadmaps to align digital projects with organisational goals, ensuring smooth transitions and successful outcomes."
                }
              },
              {
                "@type": "Question",
                "name": "Does RheinBrücke offer 24x7 support for digital services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. RheinBrücke provides 24x7 global support across multiple time zones with continuous system monitoring, issue resolution, and proactive maintenance to keep systems running optimally."
                }
              },
              {
                "@type": "Question",
                "name": "How does RheinBrücke implement MACH architecture?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Systems are broken down into microservices, exposed through API-first layers, and deployed on cloud-native infrastructure, primarily Microsoft Azure. Headless components are introduced where flexibility across web, mobile, and commerce platforms is required."
                }
              },
              {
                "@type": "Question",
                "name": "What tools and technologies does RheinBrücke support in digital services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Microsoft Azure services, .NET and modern frontend frameworks (Angular, React, Blazor), API management and integration services, data platforms like Azure Data Lake and Synapse Analytics, analytics tools (Power BI, Tableau), mobile frameworks (React Native, Flutter), and security tools (Azure Sentinel, Microsoft Entra)."
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
