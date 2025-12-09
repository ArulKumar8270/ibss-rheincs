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
  
  console.log('🔄 [Popover] Initializing popovers...');
  
  const popoverIds = ['myPopover', 'myPopover2', 'myPopover3', 'myPopover4', 'myPopover5'];
  let initializedCount = 0;
  
  popoverIds.forEach((popoverId) => {
    const popoverTriggerEl = document.getElementById(popoverId);
    if (!popoverTriggerEl) {
      console.log(`ℹ️ [Popover] Element ${popoverId} not found, skipping`);
      return;
    }
    
    // Check if already initialized (to avoid duplicates)
    if (popoverTriggerEl.hasAttribute('data-popover-init')) {
      console.log(`ℹ️ [Popover] ${popoverId} already initialized, cleaning up first...`);
      // Dispose existing popover if it exists
      const existingPopover = bootstrap.Popover.getInstance(popoverTriggerEl);
      if (existingPopover) {
        existingPopover.dispose();
      }
    }
    
    // Clone element to remove old event listeners
    const newPopoverTriggerEl = popoverTriggerEl.cloneNode(true) as HTMLElement;
    if (popoverTriggerEl.parentNode) {
      popoverTriggerEl.parentNode.replaceChild(newPopoverTriggerEl, popoverTriggerEl);
    }
    
    // Get fresh reference
    const updatedPopoverTriggerEl = document.getElementById(popoverId);
    if (!updatedPopoverTriggerEl) {
      console.error(`❌ [Popover] Failed to get updated element for ${popoverId}`);
      return;
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
    console.log(`✅ [Popover] Initialized ${popoverId}`);
  });
  
  if (initializedCount > 0) {
    console.log(`✅ [Popover] Successfully initialized ${initializedCount} popover(s)`);
  } else {
    console.log('ℹ️ [Popover] No popovers found to initialize');
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
      
      console.log('🔄 [Popover] Route changed, re-initializing...');
      
      // Wait for Bootstrap and DOM to be ready
      const tryReinit = (attempt: number = 1) => {
        const bootstrap = (window as any).bootstrap;
        if (typeof bootstrap === 'undefined' || !bootstrap.Popover) {
          if (attempt < 15) {
            setTimeout(() => tryReinit(attempt + 1), 200 * attempt);
          }
          return;
        }
        
        // Use requestAnimationFrame to ensure DOM is updated
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            const success = initPopoverStandalone();
            if (!success) {
              // Retry with delays
              setTimeout(() => initPopoverStandalone(), 200);
              setTimeout(() => initPopoverStandalone(), 500);
              setTimeout(() => initPopoverStandalone(), 1000);
            }
          });
        });
      };
      
      tryReinit();
    };

    reinit();
  }, [pathname]);

  return null;
}
