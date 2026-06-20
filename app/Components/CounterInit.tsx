'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function CounterInit() {
  const pathname = usePathname();

  useEffect(() => {

    const initCounters = () => {
      // Try to find counter section first
      const counterSection = document.getElementById('counter-section');
      const counters = document.querySelectorAll('.counter');
      
      
      if (counters.length === 0) {
        return;
      }

      // Animation function for each counter
      const animateCounter = (element: Element) => {
        const htmlElement = element as HTMLElement;
        
        // Skip if already animated or currently animating
        if (htmlElement.hasAttribute('data-counted') || htmlElement.hasAttribute('data-animating')) {
          return;
        }

        // IMPORTANT: Get target value BEFORE modifying textContent
        // Priority: data-target > data-original-target > textContent
        const dataTarget = htmlElement.getAttribute('data-target');
        const originalTarget = htmlElement.getAttribute('data-original-target');
        const originalText = htmlElement.textContent || '';
        
        // Get target value - prefer data-target, then data-original-target, then textContent
        // If textContent is "0", we should rely on data-target or data-original-target
        let targetStr = dataTarget || originalTarget;
        
        // Only use textContent if it's not "0" and we don't have data-target/original-target
        if (!targetStr) {
          const textNum = parseInt(originalText.replace(/[^0-9]/g, ''), 10);
          if (textNum > 0) {
            targetStr = originalText;
          } else {
            targetStr = '0';
          }
        }
        
        // Remove all non-numeric characters except digits
        const target = parseInt(targetStr.replace(/[^0-9]/g, ''), 10);
        
        if (isNaN(target) || target === 0) {
          console.warn('⚠️ [CounterInit] Invalid counter value:', {
            dataTarget,
            originalTarget,
            originalText,
            targetStr,
            parsed: target,
            element: htmlElement.outerHTML.substring(0, 100)
          });
          return;
        }


        // Mark as being animated to prevent multiple animations
        htmlElement.setAttribute('data-animating', 'true');
        
        // Store original target in data attribute for future reference
        htmlElement.setAttribute('data-original-target', target.toString());
        
        // Check if parent element already has "+" after the span
        // The HTML structure is: <span class="counter">10</span>+
        // So the "+" is outside the span, and we should NOT add it to the span's textContent
        const parentElement = htmlElement.parentElement;
        let suffix = '';
        
        if (parentElement) {
          // Check the parent's innerHTML to see if "+" comes after our span
          const parentHTML = parentElement.innerHTML || '';
          const spanOuterHTML = htmlElement.outerHTML;
          const spanIndex = parentHTML.indexOf(spanOuterHTML);
          
          if (spanIndex !== -1) {
            // Get text after the span
            const afterSpan = parentHTML.substring(spanIndex + spanOuterHTML.length);
            // Check if there's a "+" immediately after (allowing for whitespace)
            const hasPlusAfter = /^\s*\+/.test(afterSpan);
            
            if (hasPlusAfter) {
              // "+" is already in parent, don't add to span
              suffix = '';
            } else {
              // No "+" in parent, check if original text had suffix
              suffix = originalText.replace(/[0-9]/g, '');
            }
          } else {
            // Can't find span in parent HTML, extract from original text
            suffix = originalText.replace(/[0-9]/g, '');
          }
        } else {
          // No parent, extract suffix from original text
          suffix = originalText.replace(/[0-9]/g, '');
        }
        
        // Check current state before animation
        const currentText = htmlElement.textContent || '';
        const currentNum = parseInt(currentText.replace(/[^0-9]/g, ''), 10);
        
        // If already at target and marked, skip animation
        if (currentNum === target && htmlElement.hasAttribute('data-counted')) {
          htmlElement.removeAttribute('data-animating');
          return;
        }
        
        // Animation parameters - smoother animation
        const duration = 2000; // 2 seconds
        let startTime = Date.now();
        let hasStarted = false;
        
        const animate = () => {
          // Only reset to 0 on the very first frame of animation
          // This ensures we don't show "0" if animation doesn't start
          if (!hasStarted) {
            hasStarted = true;
            startTime = Date.now();
            // Don't set to 0 here - calculate first frame value immediately
            // This prevents showing "0" even for one frame
          }
          
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          // Easing function for smooth animation (ease-out)
          const easeOut = 1 - Math.pow(1 - progress, 3);
          const currentValue = Math.floor(easeOut * target);
          
          // Ensure we never show 0 - start from at least 1 if target > 0
          const displayValue = target > 0 && currentValue === 0 ? 1 : currentValue;
          htmlElement.textContent = displayValue.toString();
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            // Animation complete - add suffix if it exists
            htmlElement.textContent = target.toString() + suffix;
            htmlElement.setAttribute('data-counted', 'true');
            htmlElement.removeAttribute('data-animating');
          }
        };
        
        // Start animation regardless of current displayed number
        requestAnimationFrame(animate);
      };

      // Use Intersection Observer to trigger animation when visible
      if ('IntersectionObserver' in window) {
        
        const observerOptions = {
          threshold: 0.1, // Trigger when 10% visible (more sensitive)
          rootMargin: '100px' // Start animation 100px before element enters viewport
        };

        const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateCounter(entry.target);
              observer.unobserve(entry.target); // Stop observing after animation
            }
          });
        }, observerOptions);

        // Observe all counter elements
        counters.forEach((counter: Element) => {
          const htmlCounter = counter as HTMLElement;
          
          // CRITICAL: Store original value IMMEDIATELY before any modifications
          // This must happen first to preserve the original value
          if (!htmlCounter.getAttribute('data-original-target')) {
            const dataTarget = htmlCounter.getAttribute('data-target');
            const originalText = htmlCounter.textContent || '';
            
            // Priority: data-target > textContent (but only if textContent is not "0")
            let targetStr = dataTarget;
            if (!targetStr) {
              const textNum = parseInt(originalText.replace(/[^0-9]/g, ''), 10);
              if (textNum > 0) {
                targetStr = originalText;
              }
            }
            
          if (!targetStr) {
            console.warn('⚠️ [CounterInit] No valid target found for counter:', htmlCounter);
            return; // Skip this counter
          }
          
          const target = parseInt(targetStr.replace(/[^0-9]/g, ''), 10);
          
          if (!isNaN(target) && target > 0) {
            // Store the target value immediately
            htmlCounter.setAttribute('data-original-target', target.toString());
            // Always ensure the counter shows the target value initially
            htmlCounter.textContent = target.toString();
          } else {
            console.warn('⚠️ [CounterInit] Invalid target value:', targetStr, 'for counter:', htmlCounter);
          }
          }
          
          // Reset animation flags (but keep original target)
          htmlCounter.removeAttribute('data-counted');
          htmlCounter.removeAttribute('data-animating');
          
          // Check if element is already visible and trigger animation immediately
          const rect = htmlCounter.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight + 200 && rect.bottom > -200;
          
          if (isVisible) {
            // Element is already visible, trigger animation immediately
            // Use requestAnimationFrame to ensure DOM is ready
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                animateCounter(htmlCounter);
              });
            });
          } else {
            // Element not visible yet, use Intersection Observer
            observer.observe(counter);
          }
        });

        // Also observe the counter section if it exists (as a backup trigger)
        // But only if individual counters weren't found or animated
        if (counterSection && counters.length > 0) {
          const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
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
        }

        
        // Fallback: Also trigger animation after a delay if Intersection Observer hasn't fired
        // This ensures counters animate even if they're already in viewport
        setTimeout(() => {
          counters.forEach((counter) => {
            const htmlCounter = counter;
            if (!htmlCounter.hasAttribute('data-counted') && !htmlCounter.hasAttribute('data-animating')) {
              // Check if element is visible (simple check with larger margin)
              const rect = htmlCounter.getBoundingClientRect();
              const isVisible = rect.top < window.innerHeight + 200 && rect.bottom > -200;
              if (isVisible) {
                animateCounter(counter);
              }
            }
          });
        }, 1000);
        
        // Second fallback after longer delay - animate all remaining counters
        setTimeout(() => {
          counters.forEach((counter) => {
            const htmlCounter = counter;
            if (!htmlCounter.hasAttribute('data-counted') && !htmlCounter.hasAttribute('data-animating')) {
              animateCounter(counter);
            }
          });
        }, 2500);
      } else {
        // Fallback: animate immediately if no Intersection Observer support
        counters.forEach((counter) => {
          animateCounter(counter);
        });
      }
      
      // Final safety: if any counter still shows "0", restore its original target
      setTimeout(() => {
        counters.forEach((counter) => {
          const htmlCounter = counter as HTMLElement;
          const currentNum = parseInt((htmlCounter.textContent || '').replace(/[^0-9]/g, ''), 10);
          const originalTarget = htmlCounter.getAttribute('data-original-target');
          if (currentNum === 0 && originalTarget) {
            htmlCounter.textContent = originalTarget;
          }
        });
      }, 3000);
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
