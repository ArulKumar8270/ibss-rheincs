"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import CommomLayout from "../Components/CommomLayout";

export default function CaseStudyDetailsRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to case studies listing page
    router.push('/Case-study');
  }, [router]);

  return (
    <CommomLayout>
      <div style={{
        minHeight: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '20px'
      }}>
        <p style={{ color: '#666', fontSize: '18px' }}>Redirecting to case studies...</p>
      </div>
    </CommomLayout>
  );
}
