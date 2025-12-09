"use client";

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import CommomLayout from '../Components/CommomLayout'

const page = () => {
    const router = useRouter();
    
    useEffect(() => {
        // Redirect to news-events page since events are now part of news-events
        router.push('/news-events');
    }, [router]);

    return (
        <CommomLayout>
            <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                minHeight: '400px' 
            }}>
                <div>Redirecting to news and events...</div>
            </div>
        </CommomLayout>
    )
}

export default page
