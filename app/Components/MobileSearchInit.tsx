'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Standalone Mobile Search Box Initialization
// This is completely self-contained and doesn't depend on function.js or Header.jsx
const initMobileSearchStandalone = () => {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;
  
  
  const mobileSearchBtn = document.getElementById('mobileSearchBtn');
  const mobileSearchClose = document.getElementById('mobileSearchClose');
  const mobileSearchBox = document.getElementById('mobileSearchBox');
  const mobileSearchFull = document.getElementById('mobileSearchFull');

  // Check for required elements
  if (!mobileSearchBtn) {
    console.warn('⚠️ [MobileSearch] mobileSearchBtn not found');
    return false;
  }
  if (!mobileSearchClose) {
    console.warn('⚠️ [MobileSearch] mobileSearchClose not found');
    return false;
  }
  if (!mobileSearchBox) {
    console.warn('⚠️ [MobileSearch] mobileSearchBox not found');
    return false;
  }


  // Remove old event listeners by cloning elements
  const newMobileSearchBtn = mobileSearchBtn.cloneNode(true);
  const newMobileSearchClose = mobileSearchClose.cloneNode(true);
  
  if (mobileSearchBtn.parentNode) {
    mobileSearchBtn.parentNode.replaceChild(newMobileSearchBtn, mobileSearchBtn);
  }
  if (mobileSearchClose.parentNode) {
    mobileSearchClose.parentNode.replaceChild(newMobileSearchClose, mobileSearchClose);
  }

  // Get fresh references after cloning
  const updatedMobileSearchBtn = document.getElementById('mobileSearchBtn');
  const updatedMobileSearchClose = document.getElementById('mobileSearchClose');
  const updatedMobileSearchBox = document.getElementById('mobileSearchBox');
  const updatedMobileSearchFull = document.getElementById('mobileSearchFull');

  if (!updatedMobileSearchBtn || !updatedMobileSearchClose || !updatedMobileSearchBox) {
    console.error('❌ [MobileSearch] Failed to get updated elements after cloning');
    return false;
  }

  // Function to open the search box
  const openSearch = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    try {
      // Trigger React state update by dispatching a custom event
      window.dispatchEvent(new CustomEvent('mobileSearchOpen'));
      
      // Also add active class to search box (for immediate visual feedback)
      if (updatedMobileSearchBox) {
        updatedMobileSearchBox.classList.add('active');
      }
      
      // Also add active class to full search overlay if it exists
      if (updatedMobileSearchFull) {
        updatedMobileSearchFull.classList.add('active');
      }
      
      // Focus on input field after opening
      setTimeout(() => {
        const searchInput = updatedMobileSearchFull?.querySelector('input');
        if (searchInput) {
          searchInput.focus();
        } else {
          console.warn('⚠️ [MobileSearch] Input field not found in mobileSearchFull');
        }
      }, 300);
      
    } catch (error) {
      console.error('❌ [MobileSearch] Error opening search:', error);
    }
  };

  // Function to close the search box
  const closeSearch = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    try {
      // Trigger React state update by dispatching a custom event
      window.dispatchEvent(new CustomEvent('mobileSearchClose'));
      
      // Remove active class from search box
      if (updatedMobileSearchBox) {
        updatedMobileSearchBox.classList.remove('active');
      }
      
      // Also remove active class from full search overlay if it exists
      if (updatedMobileSearchFull) {
        updatedMobileSearchFull.classList.remove('active');
      }
      
      // Clear any search input
      const searchInput = updatedMobileSearchFull?.querySelector('input');
      if (searchInput) {
        searchInput.blur();
      }
      
    } catch (error) {
      console.error('❌ [MobileSearch] Error closing search:', error);
    }
  };

  // Add event listeners - use onclick for immediate response
  if (updatedMobileSearchBtn) {
    // Remove any existing handlers first
    updatedMobileSearchBtn.onclick = null;
    // Clear any existing event listeners by cloning (already done above)
    
    // Add new handlers
    updatedMobileSearchBtn.onclick = openSearch;
    updatedMobileSearchBtn.addEventListener('click', openSearch, false);
    
    // Make sure button is clickable
    updatedMobileSearchBtn.style.cursor = 'pointer';
    updatedMobileSearchBtn.style.pointerEvents = 'auto';
    updatedMobileSearchBtn.style.userSelect = 'none';
    
  } else {
    console.error('❌ [MobileSearch] updatedMobileSearchBtn is null!');
  }
  
  if (updatedMobileSearchClose) {
    // Remove any existing handlers first
    updatedMobileSearchClose.onclick = null;
    
    // Add new handlers
    updatedMobileSearchClose.onclick = closeSearch;
    updatedMobileSearchClose.addEventListener('click', closeSearch, false);
    updatedMobileSearchClose.addEventListener('click', closeSearch, true); // Capture phase too
    
    // Make sure close button is clickable and visible
    updatedMobileSearchClose.style.cursor = 'pointer';
    updatedMobileSearchClose.style.pointerEvents = 'auto';
    updatedMobileSearchClose.style.zIndex = '99999';
    updatedMobileSearchClose.style.position = 'relative';
    updatedMobileSearchClose.style.userSelect = 'none';
    
    // Ensure it's not hidden
    updatedMobileSearchClose.style.display = 'block';
    updatedMobileSearchClose.style.visibility = 'visible';
    updatedMobileSearchClose.style.opacity = '1';
  } else {
    console.error('❌ [MobileSearch] updatedMobileSearchClose is null!');
  }

  // Also handle desktop search box if it exists
  const searchBtn = document.getElementById('searchBtn');
  const searchClose = document.getElementById('searchClose');
  const searchBox = document.getElementById('searchBox');
  const searchFull = document.getElementById('searchFull');

  if (searchBtn && searchClose && searchBox) {
    
    const newSearchBtn = searchBtn.cloneNode(true);
    const newSearchClose = searchClose.cloneNode(true);
    
    if (searchBtn.parentNode) searchBtn.parentNode.replaceChild(newSearchBtn, searchBtn);
    if (searchClose.parentNode) searchClose.parentNode.replaceChild(newSearchClose, searchClose);

    const updatedSearchBtn = document.getElementById('searchBtn');
    const updatedSearchClose = document.getElementById('searchClose');
    const updatedSearchBox = document.getElementById('searchBox');
    const updatedSearchFull = document.getElementById('searchFull');

    if (updatedSearchBtn && updatedSearchClose && updatedSearchBox) {
      const openDesktopSearch = (e?: Event) => {
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }
        updatedSearchBox.classList.add('search-active');
        if (updatedSearchFull) {
          updatedSearchFull.classList.add('active');
        }
        setTimeout(() => {
          const inputField = updatedSearchFull?.querySelector('input');
          if (inputField) {
            inputField.focus();
          }
        }, 100);
      };

      const closeDesktopSearch = (e?: Event) => {
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }
        updatedSearchBox.classList.remove('search-active');
        if (updatedSearchFull) {
          updatedSearchFull.classList.remove('active');
        }
        const inputField = updatedSearchFull?.querySelector('input');
        if (inputField) {
          inputField.value = '';
        }
      };

      updatedSearchBtn.onclick = openDesktopSearch;
      updatedSearchBtn.addEventListener('click', openDesktopSearch, false);
      
      updatedSearchClose.onclick = closeDesktopSearch;
      updatedSearchClose.addEventListener('click', closeDesktopSearch, false);
      
    }
  }

  // Handle Escape key to close search
  const handleEscapeKey = (e) => {
    if (e.key === 'Escape') {
      if (updatedMobileSearchBox && updatedMobileSearchBox.classList.contains('active')) {
        closeSearch();
      }
      const searchBox = document.getElementById('searchBox');
      if (searchBox && searchBox.classList.contains('search-active')) {
        const updatedSearchBox = document.getElementById('searchBox');
        const updatedSearchFull = document.getElementById('searchFull');
        if (updatedSearchBox) {
          updatedSearchBox.classList.remove('search-active');
        }
        if (updatedSearchFull) {
          updatedSearchFull.classList.remove('active');
        }
      }
    }
  };

  // Remove old escape key listener if exists
  document.removeEventListener('keydown', handleEscapeKey);
  document.addEventListener('keydown', handleEscapeKey);

  return true;
};

// Make it globally available
if (typeof window !== 'undefined') {
  (window as any).initMobileSearchStandalone = initMobileSearchStandalone;
  (window as any).reinitMobileSearch = initMobileSearchStandalone;
}

export default function MobileSearchInit() {
  const pathname = usePathname();

  useEffect(() => {
    // Initialize on mount
    const init = () => {
      if (typeof window === 'undefined') return;
      
      // Try multiple times to ensure elements are loaded
      const tryInit = (attempt = 1) => {
        const success = initMobileSearchStandalone();
        if (!success && attempt < 5) {
          setTimeout(() => tryInit(attempt + 1), 200 * attempt);
        }
      };
      
      // Initial attempt
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
      
      
      // Use requestAnimationFrame to ensure DOM is updated
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const success = initMobileSearchStandalone();
          if (!success) {
            // Retry with delays
            setTimeout(() => initMobileSearchStandalone(), 200);
            setTimeout(() => initMobileSearchStandalone(), 500);
            setTimeout(() => initMobileSearchStandalone(), 1000);
          }
        });
      });
    };

    reinit();
  }, [pathname]);

  return null;
}
