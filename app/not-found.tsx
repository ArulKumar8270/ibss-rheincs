"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import BlogDetailsClient from "./Blogs/[slug]/BlogDetailsClient";
import CaseStudyDetailsClient from "./Casestudy/[id]/CaseStudyDetailsClient";
import NewsEventDetailsClient from "./news-events/[slug]/NewsEventDetailsClient";
import JobDetailClient from "./openings/[id]/JobDetailClient";
import EbookLandingClient from "./LP/[slug]/EbookLandingClient";

export default function NotFound() {
  const pathname = usePathname();
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState<string>('');

  // Get the actual URL from the browser (works even when server returns 404)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlPath = window.location.pathname;
      setCurrentPath(urlPath);
    }
  }, []);

  // Use browser pathname once set (from effect); else pathname (e.g. /404)
  const actualPath = currentPath || pathname || (typeof window !== 'undefined' ? window.location.pathname : '') || '';

  // Extract slug/id from pathname for different detail pages (greedy capture for full segment)
  const blogMatch = actualPath?.match(/^\/(?:blog-details|Blogs)\/(.+)\/?$/i);
  const caseStudyMatch = actualPath?.match(/^\/(?:Case-study-details|Casestudy)\/(.+)\/?$/i);
  const newsEventMatch = actualPath?.match(/^\/news-events\/(.+)\/?$/);
  const jobMatch = actualPath?.match(/^\/openings\/(.+)\/?$/);
  const ebookLandingMatch = actualPath?.match(/^\/(?:LP|EbookLanding)\/(.+)\/?$/i);

  // Decode slug/id (URL may have %20, %2B, etc.)
  const decode = (s: string) => {
    try { return decodeURIComponent(s.replace(/\/$/, '').trim()); } catch { return s.replace(/\/$/, '').trim(); }
  };

  // If this is a detail page route, render the appropriate client (new content added after build)
  if (blogMatch && blogMatch[1]) {
    const slug = decode(blogMatch[1]);
    return (
      <BlogDetailsClient
        initialBlog={null}
        initialRelatedBlogs={[]}
        slug={slug}
      />
    );
  }

  if (caseStudyMatch && caseStudyMatch[1]) {
    const id = decode(caseStudyMatch[1]);
    return (
      <CaseStudyDetailsClient
        initialCaseStudy={null}
        initialRelatedCaseStudies={[]}
        caseStudyId={id}
      />
    );
  }

  if (newsEventMatch && newsEventMatch[1]) {
    const slug = decode(newsEventMatch[1]);
    return (
      <NewsEventDetailsClient
        initialItem={null}
        slug={slug}
      />
    );
  }

  if (jobMatch && jobMatch[1]) {
    const id = decode(jobMatch[1]);
    return (
      <JobDetailClient
        jobId={id}
        initialJob={null}
      />
    );
  }

  if (ebookLandingMatch && ebookLandingMatch[1]) {
    const slug = decode(ebookLandingMatch[1]);
    return (
      <EbookLandingClient
        initialData={null}
        slug={slug}
      />
    );
  }

  // On client, wait for effect to set currentPath so /Blogs/new-slug etc. resolve correctly (avoid wrong 404 flash)
  if (typeof window !== 'undefined' && currentPath === '') {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
        <p style={{ color: '#666' }}>Loading...</p>
      </div>
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

