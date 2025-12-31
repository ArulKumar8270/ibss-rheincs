"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import BlogDetailsClient from "./blog-details/[slug]/BlogDetailsClient";
import CaseStudyDetailsClient from "./Case-study-details/[id]/CaseStudyDetailsClient";
import NewsEventDetailsClient from "./news-events/[slug]/NewsEventDetailsClient";
import JobDetailClient from "./openings/[id]/JobDetailClient";

export default function NotFound() {
  const pathname = usePathname();
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState<string>('');

  // Get the actual URL from the browser (works even when server returns 404)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlPath = window.location.pathname;
      setCurrentPath(urlPath);
      console.log(`[NotFound] Current URL path: "${urlPath}"`);
    }
  }, []);

  // Use browser pathname if Next.js pathname is not available (404 case)
  const actualPath = currentPath || pathname || (typeof window !== 'undefined' ? window.location.pathname : '');

  // Extract slug/id from pathname for different detail pages
  // Handle both with and without trailing slash
  const blogMatch = actualPath?.match(/^\/blog-details\/(.+?)\/?$/);
  const caseStudyMatch = actualPath?.match(/^\/Case-study-details\/(.+?)\/?$/);
  const newsEventMatch = actualPath?.match(/^\/news-events\/(.+?)\/?$/);
  const jobMatch = actualPath?.match(/^\/openings\/(.+?)\/?$/);

  // If this is a detail page route, render the appropriate client component
  if (blogMatch && blogMatch[1]) {
    const slug = blogMatch[1].replace(/\/$/, '');
    console.log(`[NotFound] Rendering blog details for slug: "${slug}"`);
    return (
      <BlogDetailsClient 
        initialBlog={null}
        initialRelatedBlogs={[]}
        slug={slug}
      />
    );
  }

  if (caseStudyMatch && caseStudyMatch[1]) {
    const id = caseStudyMatch[1].replace(/\/$/, '');
    console.log(`[NotFound] Rendering case study details for ID: "${id}"`);
    return (
      <CaseStudyDetailsClient 
        initialCaseStudy={null}
        initialRelatedCaseStudies={[]}
        caseStudyId={id}
      />
    );
  }

  if (newsEventMatch && newsEventMatch[1]) {
    const slug = newsEventMatch[1].replace(/\/$/, '');
    console.log(`[NotFound] Rendering news/event details for slug: "${slug}"`);
    return (
      <NewsEventDetailsClient 
        initialItem={null}
        slug={slug}
      />
    );
  }

  if (jobMatch && jobMatch[1]) {
    const id = jobMatch[1].replace(/\/$/, '');
    console.log(`[NotFound] Rendering job details for ID: "${id}"`);
    return (
      <JobDetailClient 
        jobId={id}
        initialJob={null}
      />
    );
  }

  // Default 404 page for other routes
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>404</h1>
      <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Page Not Found</h2>
      <p style={{ marginBottom: '30px' }}>The page you are looking for does not exist.</p>
      <button
        onClick={() => router.push('/')}
        style={{
          padding: '12px 24px',
          backgroundColor: '#499A9A',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        Go to Homepage
      </button>
    </div>
  );
}

