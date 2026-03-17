import type { Metadata } from "next";
import Script from "next/script";


const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does RheinBrücke support EPC companies with digital transformation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We implement Enterprise Resource Planning (ERP) systems that unify core EPC processes: project management, sophisticated procurement, real-time cost control, and financial billing. This integration drives process efficiency for complex construction projects and infrastructure development."
      }
    },
    {
      "@type": "Question",
      name: "Which industry-leading ERP platforms are customized for EPC project management?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We strategically deploy and customize Epicor Kinetic and SAP S/4HANA solutions. These are enhanced with project-based modules, including Work Breakdown Structure (WBS) management, to provide robust, real-time reporting and granular control over project financials."
      }
    },
    {
      "@type": "Question",
      name: "Can these ERP solutions handle complex, multi-location EPC projects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Our solutions provide centralized project control and financial governance for multi-site and international projects. They deliver precise site-level visibility into resource utilization, equipment tracking, and budget adherence across all project locations."
      }
    },
    {
      "@type": "Question",
      name: "What measurable business results can EPC firms expect from these ERP solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EPC clients gain three critical outcomes: Improved Project Profitability via early cost overrun detection; Optimized Material Utilization through better inventory and logistics management; and Enhanced Stakeholder Transparency via real-time financial and progress dashboards."
      }
    },
    {
      "@type": "Question",
      name: "Why do EPC companies need digital transformation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EPC companies need digital transformation because project delivery has become increasingly complex, capital-intensive, and data-driven. Without integrated digital systems, engineering and construction firms face persistent budget overruns, delayed approvals, poor subcontractor coordination, and limited real-time financial visibility."
      }
    },
    {
      "@type": "Question",
      name: "Which ERP solutions fit EPC project operations most effectively?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The ERP systems best suited for EPC operations include Epicor Kinetic, SAP S/4HANA for Construction, and Microsoft Dynamics 365 Project Operations. The right choice depends on project complexity, company size, multi-country requirements, and integration needs."
      }
    },
    {
      "@type": "Question",
      name: "How does ERP improve project cost control in construction?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ERP helps control project costs in construction. It shows committed costs in real time. It also shows actual spending. It provides cost-to-complete forecasts at every level of the work breakdown structure (WBS). This helps project managers and finance teams identify budget gaps early and take action before costs rise. It also provides clear, audit-ready cost reports during the project lifecycle."
      }
    },
    {
      "@type": "Question",
      name: "What is the difference between ERP and project management software for EPC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Project management software, like Primavera or MS Project, focuses on schedule and resource planning. ERP for EPC integrates finance, procurement, contract management, and supply chain processes, linking them with project schedule data for a complete business view."
      }
    },
    {
      "@type": "Question",
      name: "Can an ERP support EPC operations worldwide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Modern cloud ERP platforms like Epicor Kinetic and SAP S/4HANA support multi-country and multi-entity EPC operations. Features include multi-currency accounting, local compliance, consolidated reporting, and intercompany project billing."
      }
    },
    {
      "@type": "Question",
      name: "What is enterprise budgeting software and how does it differ from standard budget tracking tools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Enterprise budgeting software is a company-wide platform for financial planning and control. It enables coordinated budgeting across projects, cost centres, and entities while supporting real-time tracking, approvals, and forecasting beyond traditional spreadsheet tools."
      }
    },
    {
      "@type": "Question",
      name: "How does ERP help with project risk management in EPC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ERP helps EPC firms manage project risk through real-time visibility into cost, schedule, and procurement data. It provides early warnings, supports better decision-making, and enables faster action to protect project budgets and timelines."
      }
    }
  ]
};

// ✅ Metadata (SEO)
export const metadata: Metadata = {
  title:
    "Enterprise Digital Transformation & ERP Solutions | RheinBrücke",
  description:
    "Driving Digital Innovation with Integrated Business Platforms",

  alternates: {
    canonical:
      "https://www.rheincs.com/Engineering-Procurement-Construction/",
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* ✅ FAQ Schema */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* ✅ Service Schema */}
      <Script
        id="service-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "ERP for Engineering Procurement & Construction",
            provider: {
              "@type": "Organization",
              name: "RheinBrücke IT Consulting",
              url: "https://www.rheincs.com",
            },
            serviceType: "ERP Implementation and Digital Transformation",
            description:
              "ERP and digital transformation solutions for EPC companies.",
            areaServed: ["Worldwide"],
          }),
        }}
      />

      {/* ✅ Breadcrumb Schema */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
                name: "Engineering Procurement & Construction",
                item:
                  "https://www.rheincs.com/Engineering-Procurement-Construction/",
              },
            ],
          }),
        }}
      />

      {children}
    </>
  );
}