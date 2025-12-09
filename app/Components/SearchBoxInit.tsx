'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Standalone Search Box and Animated SVG Link Initialization
// This handles generic search boxes and animated SVG link hover effects
// NOTE: Main search boxes (#searchBox, #mobileSearchBox) are handled by Header.jsx and MobileSearchInit
const initSearchBoxStandalone = () => {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;
  
  console.log('🔄 [SearchBox] Initializing generic search box functionality...');
  
  // --- Generic Search Box Functionality ---
  // Only handle search boxes that are NOT already handled by Header.jsx or MobileSearchInit
  // Exclude: #searchBox, #mobileSearchBox (these are handled elsewhere)
  const allSearchBoxes = document.querySelectorAll('.search-box');
  const excludedIds = ['searchBox', 'mobileSearchBox'];
  
  // Filter out search boxes that are already handled
  const genericSearchBoxes = Array.from(allSearchBoxes).filter(box => {
    const id = box.id;
    const shouldExclude = excludedIds.includes(id);
    if (shouldExclude) {
      console.log(`ℹ️ [SearchBox] Excluding ${id} - handled by Header/MobileSearchInit`);
      return false; // Exclude this box
    }
    // Also check if button has specific IDs that indicate it's handled elsewhere
    const searchBtn = box.querySelector('.btn-search');
    if (searchBtn) {
      const btnId = searchBtn.id;
      if (btnId === 'searchBtn' || btnId === 'mobileSearchBtn') {
        console.log(`ℹ️ [SearchBox] Excluding box with button id ${btnId} - handled elsewhere`);
        return false;
      }
    }
    return true; // Include this box
  });
  
  console.log(`🔍 [SearchBox] Found ${allSearchBoxes.length} total search boxes, ${genericSearchBoxes.length} generic search boxes to handle`);
  
  if (genericSearchBoxes.length === 0) {
    console.log('ℹ️ [SearchBox] No generic search boxes to handle (all are handled by other components)');
  }
  
  // Handle generic search box toggle (only for boxes not handled by Header/MobileSearchInit)
  genericSearchBoxes.forEach((searchBox, index) => {
    const searchBtn = searchBox.querySelector('.btn-search');
    const searchInput = searchBox.querySelector('.input-search') || searchBox.querySelector('input');
    const boxId = searchBox.id || `generic-${index}`;
    
    if (!searchBtn) {
      console.warn(`⚠️ [SearchBox] No search button found in search box ${index} (id: ${boxId})`);
      return;
    }
    
    // Double-check: Skip if this is a main search box (should have been filtered, but check again)
    if (boxId === 'searchBox' || boxId === 'mobileSearchBox') {
      console.log(`⚠️ [SearchBox] Skipping ${boxId} - should be handled by Header/MobileSearchInit`);
      return;
    }
    
    // Check if button already has our handler (to avoid duplicates)
    if (searchBtn.hasAttribute('data-searchbox-init')) {
      console.log(`ℹ️ [SearchBox] Search box ${index} already initialized, skipping`);
      return;
    }
    
    // Clone button to remove old listeners
    const newSearchBtn = searchBtn.cloneNode(true);
    if (searchBtn.parentNode) {
      searchBtn.parentNode.replaceChild(newSearchBtn, searchBtn);
    }
    
    const updatedSearchBtn = searchBox.querySelector('.btn-search');
    if (!updatedSearchBtn) {
      console.error(`❌ [SearchBox] Failed to get updated search button for ${boxId}`);
      return;
    }
    
    // Mark as initialized
    updatedSearchBtn.setAttribute('data-searchbox-init', 'true');
    
    // Debounce to prevent double-toggling
    let isToggling = false;
    let toggleTimeout = null;
    
    const handleSearchToggle = (e) => {
      // Prevent multiple rapid clicks
      if (isToggling) {
        console.log(`⚠️ [SearchBox] Toggle already in progress for ${boxId}, ignoring`);
        return;
      }
      
      // Clear any pending timeout
      if (toggleTimeout) {
        clearTimeout(toggleTimeout);
      }
      
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      
      isToggling = true;
      console.log(`🔍 [SearchBox] Toggling generic search box ${index} (id: ${boxId})`);
      
      const isActive = searchBox.classList.contains('active');
      
      if (!isActive) {
        // Opening - use add instead of toggle to be explicit
        searchBox.classList.add('active');
        console.log(`✅ [SearchBox] Search box ${boxId} opened (class added)`);
        
        // Focus on input if it exists
        if (searchInput) {
          setTimeout(() => {
            searchInput.focus();
            console.log(`✅ [SearchBox] Input focused for ${boxId}`);
          }, 200);
        }
      } else {
        // Closing - use remove instead of toggle to be explicit
        searchBox.classList.remove('active');
        console.log(`❌ [SearchBox] Search box ${boxId} closed (class removed)`);
        
        // Blur input
        if (searchInput) {
          searchInput.blur();
        }
      }
      
      // Reset toggle lock after a delay
      toggleTimeout = setTimeout(() => {
        isToggling = false;
        toggleTimeout = null;
      }, 500);
    };
    
    // Remove old handlers completely
    updatedSearchBtn.onclick = null;
    
    // Add only one handler using onclick (simpler, more reliable)
    updatedSearchBtn.onclick = handleSearchToggle;
    
    // Don't use addEventListener to avoid conflicts with other handlers
    
    // Make sure button is clickable
    updatedSearchBtn.style.cursor = 'pointer';
    updatedSearchBtn.style.pointerEvents = 'auto';
    
    console.log(`✅ [SearchBox] Initialized search box ${index} (id: ${boxId})`);
    
    // Also handle close button if it exists
    const closeBtn = searchBox.querySelector('.icon-close');
    if (closeBtn && !closeBtn.hasAttribute('data-searchbox-init')) {
      const newCloseBtn = closeBtn.cloneNode(true);
      if (closeBtn.parentNode) {
        closeBtn.parentNode.replaceChild(newCloseBtn, closeBtn);
      }
      
      const updatedCloseBtn = searchBox.querySelector('.icon-close');
      if (updatedCloseBtn) {
        updatedCloseBtn.setAttribute('data-searchbox-init', 'true');
        
        const handleClose = (e) => {
          e.preventDefault();
          e.stopPropagation();
          console.log(`❌ [SearchBox] Close button clicked for ${boxId}`);
          searchBox.classList.remove('active');
          if (searchInput) {
            searchInput.blur();
          }
        };
        
        updatedCloseBtn.onclick = handleClose;
        updatedCloseBtn.addEventListener('click', handleClose, false);
        updatedCloseBtn.style.cursor = 'pointer';
        updatedCloseBtn.style.pointerEvents = 'auto';
        updatedCloseBtn.style.zIndex = '10001';
        
        console.log(`✅ [SearchBox] Initialized close button for ${boxId}`);
      }
    }
  });
  
  // --- Animated SVG Link Hover Effects ---
  const animatedSvgLinks = document.querySelectorAll('.animated-svg-link12');
  console.log(`🎨 [SearchBox] Found ${animatedSvgLinks.length} animated SVG links`);
  
  animatedSvgLinks.forEach((btn, index) => {
    // Skip if already initialized
    if (btn.hasAttribute('data-svglink-init')) {
      console.log(`ℹ️ [SearchBox] SVG link ${index} already initialized, skipping`);
      return;
    }
    
    // Clone to remove old listeners
    const newBtn = btn.cloneNode(true);
    if (btn.parentNode) {
      btn.parentNode.replaceChild(newBtn, btn);
    }
    
    const updatedBtn = document.querySelectorAll('.animated-svg-link12')[index];
    if (!updatedBtn) {
      console.warn(`⚠️ [SearchBox] Failed to get updated SVG link ${index}`);
      return;
    }
    
    updatedBtn.setAttribute('data-svglink-init', 'true');
    
    const handleMouseEnter = () => {
      updatedBtn.classList.add('btn-style-3');
      console.log(`🎨 [SearchBox] Added btn-style-3 to link ${index}`);
    };
    
    const handleMouseLeave = () => {
      updatedBtn.classList.remove('btn-style-3');
      console.log(`🎨 [SearchBox] Removed btn-style-3 from link ${index}`);
    };
    
    updatedBtn.addEventListener('mouseenter', handleMouseEnter);
    updatedBtn.addEventListener('mouseleave', handleMouseLeave);
    
    // Make sure it's interactive
    updatedBtn.style.cursor = 'pointer';
    updatedBtn.style.pointerEvents = 'auto';
    
    console.log(`✅ [SearchBox] Initialized SVG link ${index}`);
  });
  
  console.log('✅ [SearchBox] Search box functionality initialized');
  return true;
};

// Make it globally available
if (typeof window !== 'undefined') {
  (window as any).initSearchBoxStandalone = initSearchBoxStandalone;
  (window as any).reinitSearchBox = initSearchBoxStandalone;
  console.log('✅ [SearchBox] Function registered globally');
}

export default function SearchBoxInit() {
  const pathname = usePathname();

  useEffect(() => {
    // Initialize on mount
    const init = () => {
      if (typeof window === 'undefined') return;
      
      // Try multiple times to ensure elements are loaded
      const tryInit = (attempt = 1) => {
        const success = initSearchBoxStandalone();
        // Don't retry if no generic search boxes found (that's okay)
        if (attempt < 3) {
          setTimeout(() => tryInit(attempt + 1), 300 * attempt);
        }
      };
      
      // Initial attempt
      setTimeout(() => tryInit(), 200);
      setTimeout(() => tryInit(), 500);
    };

    init();
  }, []);

  useEffect(() => {
    // Re-initialize on route change
    const reinit = () => {
      if (typeof window === 'undefined') return;
      
      console.log('🔄 [SearchBox] Route changed, re-initializing...');
      
      // Use requestAnimationFrame to ensure DOM is updated
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          initSearchBoxStandalone();
          // Retry with delays
          setTimeout(() => initSearchBoxStandalone(), 300);
          setTimeout(() => initSearchBoxStandalone(), 600);
        });
      });
    };

    reinit();
  }, [pathname]);

  return null;
}
