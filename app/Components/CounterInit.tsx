'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function CounterInit() {
  const pathname = usePathname();

  useEffect(() => {
    console.log('🔢 [CounterInit] Component mounted, pathname:', pathname);

    const initCounters = () => {
      // Try to find counter section first
      const counterSection = document.getElementById('counter-section');
      const counters = document.querySelectorAll('.counter');
      
      console.log(`🔢 [CounterInit] Found ${counters.length} counter elements`);
      console.log(`🔢 [CounterInit] Counter section found:`, !!counterSection);
      
      if (counters.length === 0) {
        console.log('ℹ️ [CounterInit] No counter elements found on this page');
        return;
      }

      // Animation function for each counter
      const animateCounter = (element) => {
        const htmlElement = element;
        
        // Skip if already animated
        if (htmlElement.hasAttribute('data-counted')) {
          console.log('🔢 [CounterInit] Counter already animated, skipping');
          return;
        }

        // Get target value from data-target or text content
        const targetStr = htmlElement.getAttribute('data-target') || htmlElement.textContent || '0';
        // Remove all non-numeric characters except digits
        const target = parseInt(targetStr.replace(/[^0-9]/g, ''), 10);
        
        if (isNaN(target) || target === 0) {
          console.warn('⚠️ [CounterInit] Invalid counter value:', targetStr, 'parsed as:', target);
          return;
        }

        console.log(`🔢 [CounterInit] Starting animation for counter, target: ${target}`);

        // Mark as being animated
        htmlElement.setAttribute('data-counted', 'true');
        
        // Store original text to preserve "+" or other suffixes
        const originalText = htmlElement.textContent || '';
        const suffix = originalText.replace(/[0-9]/g, '');
        
        // Animation parameters
        const duration = 2000; // 2 seconds
        const steps = 60; // 60 frames
        const stepValue = target / steps;
        const stepTime = duration / steps;
        
        let currentValue = 0;
        htmlElement.textContent = '0' + suffix;

        const timer = setInterval(() => {
          currentValue += stepValue;
          
          if (currentValue >= target) {
            htmlElement.textContent = target.toString() + suffix;
            clearInterval(timer);
            console.log(`✅ [CounterInit] Counter animated to ${target}${suffix}`);
          } else {
            htmlElement.textContent = Math.floor(currentValue).toString() + suffix;
          }
        }, stepTime);
      };

      // Use Intersection Observer to trigger animation when visible
      if ('IntersectionObserver' in window) {
        console.log('🔢 [CounterInit] Using Intersection Observer');
        
        const observerOptions = {
          threshold: 0.1, // Trigger when 10% visible (more sensitive)
          rootMargin: '100px' // Start animation 100px before element enters viewport
        };

        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              console.log('🔢 [CounterInit] Counter entered viewport, animating...');
              animateCounter(entry.target);
              observer.unobserve(entry.target); // Stop observing after animation
            }
          });
        }, observerOptions);

        // Observe all counter elements
        counters.forEach((counter) => {
          // Reset counter if it was previously animated (for route changes)
          const htmlCounter = counter;
          htmlCounter.removeAttribute('data-counted');
          
          observer.observe(counter);
        });

        // Also observe the counter section if it exists (as a backup trigger)
        if (counterSection) {
          const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                console.log('🔢 [CounterInit] Counter section entered viewport');
                // Animate all counters that haven't been animated yet
                counters.forEach((counter) => {
                  const htmlCounter = counter;
                  if (!htmlCounter.hasAttribute('data-counted')) {
                    animateCounter(counter);
                  }
                });
                sectionObserver.unobserve(entry.target);
              }
            });
          }, { threshold: 0.1, rootMargin: '100px' });
          
          sectionObserver.observe(counterSection);
          console.log('✅ [CounterInit] Also observing counter section');
        }

        console.log('✅ [CounterInit] Intersection Observer initialized for', counters.length, 'counters');
      } else {
        // Fallback: animate immediately if no Intersection Observer support
        console.log('🔢 [CounterInit] No Intersection Observer, animating immediately');
        counters.forEach((counter) => {
          animateCounter(counter);
        });
      }
    };

    // Try to initialize immediately
    initCounters();

    // Also try after delays to catch dynamically loaded content
    const timeouts = [
      setTimeout(initCounters, 200),
      setTimeout(initCounters, 500),
      setTimeout(initCounters, 1000),
      setTimeout(initCounters, 2000)
    ];

    // Cleanup function
    return () => {
      console.log('🔢 [CounterInit] Cleaning up...');
      timeouts.forEach(timeout => clearTimeout(timeout));
      
      // Reset all counters
      const counters = document.querySelectorAll('.counter');
      counters.forEach((counter) => {
        const htmlCounter = counter;
        htmlCounter.removeAttribute('data-counted');
      });
    };
  }, [pathname]); // Re-run when pathname changes

  return null; // This component doesn't render anything
}
