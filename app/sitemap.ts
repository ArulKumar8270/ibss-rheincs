import { MetadataRoute } from "next";
import { createClient } from "@supabase/supabase-js";

// For static export, we need to set dynamic to force-static or revalidate
export const dynamic = "force-static";

const BASE_URL = "https://www.rheincs.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitemap: MetadataRoute.Sitemap = [];

  // Static Pages
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

  staticPages.forEach((page) => {
    sitemap.push({
      url: `${BASE_URL}/${page}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: page === "" ? 1 : 0.8,
    });
  });

  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    // Blogs
    const { data: blogs } = await supabase
      .from("blogs")
      .select("slug, updated_at")
      .eq("published", true);

    blogs?.forEach((blog) => {
      sitemap.push({
        url: `${BASE_URL}/blogs/${blog.slug}`,
        lastModified: blog.updated_at
          ? new Date(blog.updated_at)
          : new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
      });
    });

    // Case Studies
    const { data: caseStudies } = await supabase
      .from("case_studies")
      .select("slug, updated_at")
      .eq("published", true);

    caseStudies?.forEach((item) => {
      sitemap.push({
        url: `${BASE_URL}/Casestudy/${item.slug}`,
        lastModified: item.updated_at
          ? new Date(item.updated_at)
          : new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    });

    // Landing Pages
    const { data: ebooks } = await supabase
      .from("ebook_landing_pages")
      .select("slug, updated_at");

    ebooks?.forEach((item) => {
      sitemap.push({
        url: `${BASE_URL}/LP/${item.slug}`,
        lastModified: item.updated_at
          ? new Date(item.updated_at)
          : new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    });
  } catch (error) {
    console.error("Sitemap Error:", error);
  }
  return sitemap;
}