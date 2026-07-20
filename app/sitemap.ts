import { MetadataRoute } from "next";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-static";

const BASE_URL = "https://www.rheincs.com";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const staticPages = [
  "",
  "about-us",
  "about-us/overview",
  "about-us/leadership",
  "about-us/customer-speak",
  "about-us/success-stories",
  "AI-ML",
  "AM-S",
  "Architecture",
  "Automotive",
  "blogs",
  "Brand-owners-and-vertical-retail",
  "Cable-manufacturing",
  "Case-study",
  "Commercetools",
  "contact-us",
  "Corporate-vedio",
  "corporate-videos",
  "careers",
  "collaterals",
  "digital-services",
  "digital-solutions",
  "discrete-manufacturing",
  "Distribution-and-supply-chain",
  "ERP-customer-excellence",
  "Ecommerce",
  "Engineering-Procurement-Construction",
  "Epicor-companion",
  "Epicor-epicpay",
  "Epicor-iscala",
  "Epicor-kinetic",
  "establishing-our-saudi-presence-and-launch-of-aims-partnership",
  "events",
  "Faq",
  "fluent-commerce",
  "grand-opening-of-india-development-centre",
  "impressum",
  "industries-retail",
  "interior-design",
  "ms-technology",
  "news-events",
  "MeRLIN-strategic-sourcing-software",
  "our-solution",
  "privacy",
  "Private-Equity-Funding-Backed-Ventures",
  "process-manufacturing",
  "rheinbrucke-a-microsoft-partner",
  "solutions",
  "solutions/CorusHR",
  "solutions/digital-services-and-solutions",
  "solutions/erp-enterprise-solutions-and-services",
  "solutions/erp-enterprise-solutions-and-services/erp",
  "solutions/erp-enterprise-solutions-and-services/epicor",
  "solutions/erp-enterprise-solutions-and-services/ms-dynamics",
  "solutions/erp-enterprise-solutions-and-services/sap",
  "solutions/erp-enterprise-solutions-and-services/sap/sap-analytics",
  "solutions/erp-enterprise-solutions-and-services/sap/sap-application-management-services",
  "solutions/erp-enterprise-solutions-and-services/sap/sap-btp",
  "solutions/erp-enterprise-solutions-and-services/sap/sap-cloud-applications",
  "solutions/erp-enterprise-solutions-and-services/sap/sap-s4hana-transformation",
  "solutions/sugar-crm",
  "terms",
  "thanks",
  "user-exprience",
  "webinars",
  "aerospace-defence-manufacturing",
  "business-intelligence",
  "data-engineering-warehousing",
  "deftech-bharat-2026",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticUrls: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${BASE_URL}/${page}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: page === "" ? 1 : 0.8,
  }));

  try {
    const [blogsResult, caseStudiesResult, ebooksResult] = await Promise.all([
      supabase
        .from("blogs")
        .select("slug, updated_at, created_at")
        .eq("published", true),

      supabase
        .from("case_studies")
        .select("slug, updated_at, created_at")
        .eq("published", true),

      supabase
        .from("ebook_landing_pages")
        .select("slug, updated_at, created_at"),
    ]);

    const blogUrls =
      blogsResult.data?.map((blog) => ({
        url: `${BASE_URL}/blogs/${blog.slug}`,
        lastModified: new Date(blog.updated_at || blog.created_at),
        changeFrequency: "weekly" as const,
        priority: 0.7,
      })) ?? [];

    const caseStudyUrls =
      caseStudiesResult.data?.map((item) => ({
        url: `${BASE_URL}/Case-study/${item.slug}`,
        lastModified: new Date(item.updated_at || item.created_at),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      })) ?? [];

    const ebookUrls =
      ebooksResult.data?.map((item) => ({
        url: `${BASE_URL}/LP/${item.slug}`,
        lastModified: new Date(item.updated_at || item.created_at),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      })) ?? [];

    return [...staticUrls, ...blogUrls, ...caseStudyUrls, ...ebookUrls];
  } catch (error) {
    console.error("Sitemap Error:", error);
    return staticUrls;
  }
}