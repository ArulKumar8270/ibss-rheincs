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
        
        // Skip if already animated or currently animating
        if (htmlElement.hasAttribute('data-counted') || htmlElement.hasAttribute('data-animating')) {
          console.log('🔢 [CounterInit] Counter already animated or animating, skipping');
          return;
        }

        // IMPORTANT: Get target value BEFORE modifying textContent
        // First try data-target attribute, then try textContent, but preserve original
        const dataTarget = htmlElement.getAttribute('data-target');
        const originalText = htmlElement.textContent || '';
        
        // Get target value - prefer data-target, fallback to parsing textContent
        let targetStr = dataTarget || originalText || '0';
        
        // If we're using textContent and it might have been modified, try to get from data attribute
        if (!dataTarget && originalText === '0') {
          // Element might have been reset, try to get from a data attribute or parent
          const parentElement = htmlElement.parentElement;
          if (parentElement) {
            const parentDataTarget = parentElement.getAttribute('data-counter-target');
            if (parentDataTarget) {
              targetStr = parentDataTarget;
            }
          }
        }
        
        // Remove all non-numeric characters except digits
        const target = parseInt(targetStr.replace(/[^0-9]/g, ''), 10);
        
        if (isNaN(target) || target === 0) {
          console.warn('⚠️ [CounterInit] Invalid counter value:', {
            dataTarget,
            originalText,
            targetStr,
            parsed: target
          });
          return;
        }

        console.log(`🔢 [CounterInit] Starting animation for counter, target: ${target}`, {
          dataTarget,
          originalText,
          targetStr
        });

        // Mark as being animated to prevent multiple animations
        htmlElement.setAttribute('data-animating', 'true');
        
        // Store original target in data attribute for future reference
        htmlElement.setAttribute('data-original-target', target.toString());
        
        // Get suffix from parent element (since "+" might be outside the span)
        const parentElement = htmlElement.parentElement;
        const parentText = parentElement ? parentElement.textContent || '' : '';
        
        // Extract suffix - check if there's a "+" after the number in parent
        let suffix = '';
        if (parentText.includes('+')) {
          suffix = '+';
        } else {
          // Fallback: extract from original text
          suffix = originalText.replace(/[0-9]/g, '');
        }
        
        // Animation parameters - smoother animation
        const duration = 2000; // 2 seconds
        const startTime = Date.now();
        
        // Start from 0 - but only if we haven't already started
        if (htmlElement.textContent !== '0') {
          htmlElement.textContent = '0';
        }

        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          // Easing function for smooth animation (ease-out)
          const easeOut = 1 - Math.pow(1 - progress, 3);
          const currentValue = Math.floor(easeOut * target);
          
          htmlElement.textContent = currentValue.toString();
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            // Animation complete
            htmlElement.textContent = target.toString();
            htmlElement.setAttribute('data-counted', 'true');
            htmlElement.removeAttribute('data-animating');
            console.log(`✅ [CounterInit] Counter animated to ${target}${suffix}`);
          }
        };
        
        // Start animation
        requestAnimationFrame(animate);
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
          const htmlCounter = counter;
          
          // Store original value if not already stored
          if (!htmlCounter.getAttribute('data-original-target')) {
            const dataTarget = htmlCounter.getAttribute('data-target');
            const originalText = htmlCounter.textContent || '';
            const targetStr = dataTarget || originalText || '0';
            const target = parseInt(targetStr.replace(/[^0-9]/g, ''), 10);
            if (!isNaN(target) && target > 0) {
              htmlCounter.setAttribute('data-original-target', target.toString());
              // Restore original text if it was modified
              if (originalText && originalText !== '0' && !dataTarget) {
                htmlCounter.textContent = originalText;
              }
            }
          }
          
          // Reset animation flags (but keep original target)
          htmlCounter.removeAttribute('data-counted');
          htmlCounter.removeAttribute('data-animating');
          
          observer.observe(counter);
        });

        // Also observe the counter section if it exists (as a backup trigger)
        // But only if individual counters weren't found or animated
        if (counterSection && counters.length > 0) {
          const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                console.log('🔢 [CounterInit] Counter section entered viewport');
                // Animate all counters that haven't been animated yet
                counters.forEach((counter) => {
                  const htmlCounter = counter;
                  if (!htmlCounter.hasAttribute('data-counted') && !htmlCounter.hasAttribute('data-animating')) {
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
        
        // Fallback: Also trigger animation after a delay if Intersection Observer hasn't fired
        // This ensures counters animate even if they're already in viewport
        setTimeout(() => {
          counters.forEach((counter) => {
            const htmlCounter = counter;
            if (!htmlCounter.hasAttribute('data-counted') && !htmlCounter.hasAttribute('data-animating')) {
              // Check if element is visible (simple check)
              const rect = htmlCounter.getBoundingClientRect();
              const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
              if (isVisible) {
                console.log('🔢 [CounterInit] Counter is visible, triggering animation as fallback');
                animateCounter(counter);
              }
            }
          });
        }, 1000);
      } else {
        // Fallback: animate immediately if no Intersection Observer support
        console.log('🔢 [CounterInit] No Intersection Observer, animating immediately');
        counters.forEach((counter) => {
          animateCounter(counter);
        });
      }
    };

    // Wait for DOM to be ready
    const initializeWhenReady = () => {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCounters);
      } else {
        // DOM is already ready
        setTimeout(initCounters, 100);
      }
    };

    initializeWhenReady();

    // Also try after a delay to catch dynamically loaded content (reduced attempts)
    const timeouts = [
      setTimeout(initCounters, 500),
      setTimeout(initCounters, 1500)
    ];

      // Cleanup function
      return () => {
        console.log('🔢 [CounterInit] Cleaning up...');
        timeouts.forEach(timeout => clearTimeout(timeout));
        
        // Reset all counters but preserve original target
        const counters = document.querySelectorAll('.counter');
        counters.forEach((counter) => {
          const htmlCounter = counter;
          const originalTarget = htmlCounter.getAttribute('data-original-target');
          
          // Reset animation flags
          htmlCounter.removeAttribute('data-counted');
          htmlCounter.removeAttribute('data-animating');
          
          // Restore original text if we have the target stored
          if (originalTarget) {
            const dataTarget = htmlCounter.getAttribute('data-target');
            if (dataTarget) {
              htmlCounter.textContent = dataTarget;
            } else {
              // Try to restore from parent or use original target
              htmlCounter.textContent = originalTarget;
            }
          }
        });
      };
  }, [pathname]); // Re-run when pathname changes

  return null; // This component doesn't render anything
}
