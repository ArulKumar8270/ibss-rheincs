/// <reference types="deno" />

// @ts-ignore - Deno requires .ts extension for local imports
import { corsHeaders, corsHeadersForRequest } from '../_shared/cors.ts';
// @ts-ignore - Deno npm specifier
import { createClient } from 'npm:@supabase/supabase-js@2';

const BASE_URL = "https://www.rheincs.com";

const staticPages = [
  "", "about-us", "about-us/overview", "about-us/leadership", "about-us/customer-speak",
  "about-us/success-stories", "AI-ML", "AM-S", "Architecture", "Automotive", "blogs",
  "Brand-owners-and-vertical-retail", "Cable-manufacturing", "Casestudy", "Commercetools",
  "contact-us", "Corporate-vedio", "corporate-videos", "careers", "collaterals",
  "digital-services", "digital-solutions", "discrete-manufacturing",
  "Distribution-and-supply-chain", "ERP-customer-excellence", "Ecommerce",
  "Engineering-Procurement-Construction", "Epicor-companion", "Epicor-epicpay",
  "Epicor-iscala", "Epicor-kinetic",
  "establishing-our-saudi-presence-and-launch-of-aims-partnership", "events", "Faq",
  "fluent-commerce", "grand-opening-of-india-development-centre", "impressum",
  "industries-retail", "interior-design", "ms-technology", "news-events",
  "MeRLIN-strategic-sourcing-software", "our-solution", "privacy",
  "Private-Equity-Funding-Backed-Ventures", "process-manufacturing",
  "rheinbrucke-a-microsoft-partner", "solutions", "solutions/CorusHR",
  "solutions/digital-services-and-solutions", "solutions/erp-enterprise-solutions-and-services",
  "solutions/erp-enterprise-solutions-and-services/erp",
  "solutions/erp-enterprise-solutions-and-services/epicor",
  "solutions/erp-enterprise-solutions-and-services/ms-dynamics",
  "solutions/erp-enterprise-solutions-and-services/sap",
  "solutions/erp-enterprise-solutions-and-services/sap/sap-analytics",
  "solutions/erp-enterprise-solutions-and-services/sap/sap-application-management-services",
  "solutions/erp-enterprise-solutions-and-services/sap/sap-btp",
  "solutions/erp-enterprise-solutions-and-services/sap/sap-cloud-applications",
  "solutions/erp-enterprise-solutions-and-services/sap/sap-s4hana-transformation",
  "solutions/sugar-crm", "terms", "thanks", "user-exprience", "webinars",
  "aerospace-defence-manufacturing", "business-intelligence",
  "data-engineering-warehousing", "deftech-bharat-2026",
];

function formatDate(dateString: string | Date | null): string {
  try {
    const date = dateString ? new Date(dateString) : new Date();
    if (isNaN(date.getTime())) {
      return new Date().toISOString().split('T')[0];
    }
    return date.toISOString().split('T')[0];
  } catch {
    return new Date().toISOString().split('T')[0];
  }
}

Deno.serve(async (req) => {
  const cors = corsHeadersForRequest(req);
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: cors });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

    const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
      auth: { autoRefreshToken: false, persistSession: false },
    });

    const [blogsResult, caseStudiesResult, ebooksResult] = await Promise.all([
      supabase.from("blogs").select("slug, updated_at, created_at").eq("published", true),
      supabase.from("case_studies").select("slug, updated_at, created_at").eq("published", true),
      supabase.from("ebook_landing_pages").select("slug, updated_at, created_at"),
    ]);

    if (blogsResult.error) {
      console.error("Error fetching blogs:", blogsResult.error);
    }
    if (caseStudiesResult.error) {
      console.error("Error fetching case studies:", caseStudiesResult.error);
    }
    if (ebooksResult.error) {
      console.error("Error fetching ebooks:", ebooksResult.error);
    }

    const staticUrls = staticPages.map((page) =>
      `<url><loc>${BASE_URL}/${page}</loc><lastmod>${formatDate(new Date())}</lastmod><changefreq>monthly</changefreq><priority>${page === "" ? "1.0" : "0.8"}</priority></url>`
    );

    const blogUrls = (blogsResult.data || []).map((blog: any) =>
      `<url><loc>${BASE_URL}/blogs/${blog.slug}</loc><lastmod>${formatDate(blog.updated_at || blog.created_at)}</lastmod><changefreq>weekly</changefreq><priority>0.7</priority></url>`
    );

    const caseStudyUrls = (caseStudiesResult.data || []).map((item: any) =>
      `<url><loc>${BASE_URL}/Casestudy/${item.slug}</loc><lastmod>${formatDate(item.updated_at || item.created_at)}</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>`
    );

    const ebookUrls = (ebooksResult.data || []).map((item: any) =>
      `<url><loc>${BASE_URL}/LP/${item.slug}</loc><lastmod>${formatDate(item.updated_at || item.created_at)}</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>`
    );

    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticUrls, ...blogUrls, ...caseStudyUrls, ...ebookUrls].join("\n")}
</urlset>`;

    return new Response(sitemapXml, {
      headers: {
        ...cors,
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=3600", // Cache for 1 hour
      },
    });
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return new Response("Error generating sitemap", {
      status: 500,
      headers: cors,
    });
  }
});
