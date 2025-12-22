'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Standalone Bootstrap Popover Initialization
// Handles hover popovers with proper cleanup and re-initialization
const initPopoverStandalone = () => {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;
  
  // Check if Bootstrap is available
  const bootstrap = (window as any).bootstrap;
  if (typeof bootstrap === 'undefined' || !bootstrap.Popover) {
    console.warn('⚠️ [Popover] Bootstrap not loaded yet, will retry...');
    return false;
  }
  
  // Note: Bootstrap 5 requires Popper.js
  // We'll let the actual popover creation handle errors if Popper.js is missing
  
  
  const popoverIds = ['myPopover', 'myPopover2', 'myPopover3', 'myPopover4', 'myPopover5'];
  let initializedCount = 0;
  
  popoverIds.forEach((popoverId) => {
    const popoverTriggerEl = document.getElementById(popoverId);
    if (!popoverTriggerEl) {
      // Element not found - this is okay if we're on a page without popovers
      return;
    }
    
    // Skip if element doesn't have data-bs-content or data-bs-toggle="popover" attribute (not a popover)
    const hasContent = popoverTriggerEl.hasAttribute('data-bs-content') || popoverTriggerEl.getAttribute('data-bs-content');
    const hasToggle = popoverTriggerEl.hasAttribute('data-bs-toggle') && popoverTriggerEl.getAttribute('data-bs-toggle') === 'popover';
    if (!hasContent && !hasToggle) {
      return;
    }
    
    // Check if already initialized (to avoid duplicates)
    if (popoverTriggerEl.hasAttribute('data-popover-init')) {
      // Dispose existing popover if it exists
      const existingPopover = bootstrap.Popover.getInstance(popoverTriggerEl);
      if (existingPopover) {
        existingPopover.dispose();
      }
    }
    
    // Clone element to remove old event listeners
    // Only clone if we need to (if it's already initialized)
    let updatedPopoverTriggerEl = popoverTriggerEl;
    if (popoverTriggerEl.hasAttribute('data-popover-init')) {
      const newPopoverTriggerEl = popoverTriggerEl.cloneNode(true) as HTMLElement;
      if (popoverTriggerEl.parentNode) {
        popoverTriggerEl.parentNode.replaceChild(newPopoverTriggerEl, popoverTriggerEl);
      }
      
      // Get fresh reference
      const freshElement = document.getElementById(popoverId);
      if (!freshElement) {
        console.error(`❌ [Popover] Failed to get updated element for ${popoverId}`);
        return;
      }
      updatedPopoverTriggerEl = freshElement;
    }
    
    // Initialize Bootstrap Popover
    let hideTimeout: NodeJS.Timeout | null = null;
    let popover;
    
    try {
      popover = new bootstrap.Popover(updatedPopoverTriggerEl, {
        customClass: 'custom-popover-style',
        html: true,
        trigger: 'manual',
        placement: 'top' // You can change this to 'bottom', 'left', 'right' as needed
      });
    } catch (error: any) {
      console.error(`❌ [Popover] Failed to initialize popover for ${popoverId}:`, error);
      return;
    }
    
    // Mark as initialized
    updatedPopoverTriggerEl.setAttribute('data-popover-init', 'true');
    
    // Show popover on mouse enter
    const handleMouseEnter = () => {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
        hideTimeout = null;
      }
      try {
        popover.show();
      } catch (error: any) {
        console.error(`❌ [Popover] Failed to show popover for ${popoverId}:`, error);
      }
    };
    
    // Hide popover on mouse leave (with delay to allow moving to popover)
    const handleMouseLeave = () => {
      hideTimeout = setTimeout(() => {
        try {
          popover.hide();
        } catch (error: any) {
          console.error(`❌ [Popover] Failed to hide popover for ${popoverId}:`, error);
        }
        hideTimeout = null;
      }, 200);
    };
    
    // Add event listeners
    updatedPopoverTriggerEl.addEventListener('mouseenter', handleMouseEnter);
    updatedPopoverTriggerEl.addEventListener('mouseleave', handleMouseLeave);
    
    // Handle popover body hover (so user can move mouse to popover without it closing)
    updatedPopoverTriggerEl.addEventListener('shown.bs.popover', () => {
      // Get the popover tip element - Bootstrap creates it with class 'popover'
      // We need to find the one that was just shown
      setTimeout(() => {
        const popoverElements = document.querySelectorAll('.popover');
        // Get the last one (most recently shown)
        const popoverElement = popoverElements[popoverElements.length - 1];
        
        if (popoverElement) {
          const handlePopoverEnter = () => {
            if (hideTimeout) {
              clearTimeout(hideTimeout);
              hideTimeout = null;
            }
          };
          
          const handlePopoverLeave = () => {
            hideTimeout = setTimeout(() => {
              try {
                popover.hide();
              } catch (error: any) {
                console.error(`❌ [Popover] Failed to hide popover on leave for ${popoverId}:`, error);
              }
              hideTimeout = null;
            }, 200);
          };
          
          popoverElement.addEventListener('mouseenter', handlePopoverEnter);
          popoverElement.addEventListener('mouseleave', handlePopoverLeave);
          
          // Store cleanup function on the trigger element
          (updatedPopoverTriggerEl as any).__popoverCleanup = () => {
            popoverElement.removeEventListener('mouseenter', handlePopoverEnter);
            popoverElement.removeEventListener('mouseleave', handlePopoverLeave);
          };
        }
      }, 50); // Small delay to ensure popover is in DOM
    });
    
    // Cleanup on hide
    updatedPopoverTriggerEl.addEventListener('hidden.bs.popover', () => {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
        hideTimeout = null;
      }
      // Cleanup popover element listeners
      if ((updatedPopoverTriggerEl as any).__popoverCleanup) {
        (updatedPopoverTriggerEl as any).__popoverCleanup();
        delete (updatedPopoverTriggerEl as any).__popoverCleanup;
      }
    });
    
    initializedCount++;
  });
  
  if (initializedCount > 0) {
    console.log(`✅ [Popover] Successfully initialized ${initializedCount} popover(s)`);
  }
  
  return initializedCount > 0;
};

// Make it globally available
if (typeof window !== 'undefined') {
  (window as any).initPopoverStandalone = initPopoverStandalone;
  (window as any).reinitPopover = initPopoverStandalone;
}

export default function PopoverInit() {
  const pathname = usePathname();

  useEffect(() => {
    // Initialize on mount
    const init = () => {
      if (typeof window === 'undefined') return;
      
      // Wait for Bootstrap to be available
      const tryInit = (attempt: number = 1) => {
        const bootstrap = (window as any).bootstrap;
        if (typeof bootstrap === 'undefined' || !bootstrap.Popover) {
          if (attempt < 15) {
            setTimeout(() => tryInit(attempt + 1), 200 * attempt);
          } else {
            console.error('❌ [Popover] Bootstrap not available after multiple attempts');
          }
          return;
        }
        
        // Try to initialize - if it fails due to Popper.js, retry
        const result = initPopoverStandalone();
        if (!result && attempt < 15) {
          setTimeout(() => tryInit(attempt + 1), 200 * attempt);
        }
      };
      
      // Initial attempts with delays
      setTimeout(() => tryInit(), 100);
      setTimeout(() => tryInit(), 300);
      setTimeout(() => tryInit(), 600);
      setTimeout(() => tryInit(), 1000);
    };

    init();
  }, []);

  useEffect(() => {
    // Re-initialize on route change
    const reinit = () => {
      if (typeof window === 'undefined') return;
      
      // First, dispose all existing popovers to clean up
      const popoverIds = ['myPopover', 'myPopover2', 'myPopover3', 'myPopover4', 'myPopover5'];
      popoverIds.forEach((popoverId) => {
        const element = document.getElementById(popoverId);
        if (element) {
          const bootstrap = (window as any).bootstrap;
          if (bootstrap && bootstrap.Popover) {
            const existingPopover = bootstrap.Popover.getInstance(element);
            if (existingPopover) {
              try {
                existingPopover.dispose();
              } catch (e) {
                // Ignore disposal errors
              }
            }
          }
          // Remove initialization marker
          element.removeAttribute('data-popover-init');
        }
      });
      
      // Wait for Bootstrap and DOM to be ready
      const tryReinit = (attempt: number = 1) => {
        const bootstrap = (window as any).bootstrap;
        if (typeof bootstrap === 'undefined' || !bootstrap.Popover) {
          if (attempt < 20) {
            setTimeout(() => tryReinit(attempt + 1), 150 * attempt);
          }
          return;
        }
        
        // Check if popover elements exist in DOM
        const hasPopoverElements = popoverIds.some(id => document.getElementById(id) !== null);
        if (!hasPopoverElements && attempt < 10) {
          // Elements not in DOM yet, retry
          setTimeout(() => tryReinit(attempt + 1), 200 * attempt);
          return;
        }
        
        // Use requestAnimationFrame to ensure DOM is updated
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            const success = initPopoverStandalone();
            if (!success) {
              // Retry with delays - more aggressive retries
              setTimeout(() => initPopoverStandalone(), 100);
              setTimeout(() => initPopoverStandalone(), 300);
              setTimeout(() => initPopoverStandalone(), 600);
              setTimeout(() => initPopoverStandalone(), 1000);
              setTimeout(() => initPopoverStandalone(), 1500);
            }
          });
        });
      };
      
      // Start with delays to let DOM settle and function.js finish
      // Multiple attempts to catch different timing scenarios
      setTimeout(() => tryReinit(), 100);
      setTimeout(() => tryReinit(), 300);
      setTimeout(() => tryReinit(), 600);
    };

    reinit();
    
    // Also listen to routeChange event from ScriptReinit as backup
    const handleRouteChange = () => {
      setTimeout(() => {
        if (typeof (window as any).reinitPopover === 'function') {
          (window as any).reinitPopover();
        }
      }, 300);
    };
    
    window.addEventListener('routeChange', handleRouteChange);
    
    return () => {
      window.removeEventListener('routeChange', handleRouteChange);
    };
  }, [pathname]);

  return null;
}
