'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Standalone Mobile Menu Initialization
// This is completely self-contained and doesn't depend on function.js
const initMobileMenuStandalone = () => {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;
  
  console.log('🔄 [MobileMenu] Initializing mobile menu...');
  
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const closeBtn = document.getElementById('close-btn');
  const mobileNavPanel = document.getElementById('mobileNavPanel');
  const menuOverlay = document.getElementById('menuOverlay'); // Optional

  // Check for required elements
  if (!hamburgerBtn) {
    console.warn('⚠️ [MobileMenu] hamburger-btn not found');
    return false;
  }
  if (!closeBtn) {
    console.warn('⚠️ [MobileMenu] close-btn not found');
    return false;
  }
  if (!mobileNavPanel) {
    console.warn('⚠️ [MobileMenu] mobileNavPanel not found');
    return false;
  }

  console.log('✅ [MobileMenu] Found all required elements');

  // Remove old event listeners by cloning elements
  const newHamburgerBtn = hamburgerBtn.cloneNode(true) as HTMLElement;
  const newCloseBtn = closeBtn.cloneNode(true) as HTMLElement;
  
  if (hamburgerBtn.parentNode) {
    hamburgerBtn.parentNode.replaceChild(newHamburgerBtn, hamburgerBtn);
  }
  if (closeBtn.parentNode) {
    closeBtn.parentNode.replaceChild(newCloseBtn, closeBtn);
  }

  // Get fresh references after cloning
  const updatedHamburgerBtn = document.getElementById('hamburger-btn') as HTMLElement;
  const updatedCloseBtn = document.getElementById('close-btn') as HTMLElement;
  const updatedMobileNavPanel = document.getElementById('mobileNavPanel') as HTMLElement;
  const updatedMenuOverlay = document.getElementById('menuOverlay') as HTMLElement;

  if (!updatedHamburgerBtn || !updatedCloseBtn || !updatedMobileNavPanel) {
    console.error('❌ [MobileMenu] Failed to get updated elements after cloning');
    return false;
  }

  // Function to open the main menu
  const openMenu = (e?: Event) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    console.log('🍔 [MobileMenu] Opening mobile menu');
    updatedMobileNavPanel.classList.add('open');
    if (updatedMenuOverlay) {
      updatedMenuOverlay.classList.add('open');
    }
    document.body.style.overflow = 'hidden';
    console.log('✅ [MobileMenu] Menu opened');
  };

  // Function to close the main menu
  const closeMenu = (e?: Event) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    console.log('❌ [MobileMenu] Closing mobile menu');
    updatedMobileNavPanel.classList.remove('open');
    if (updatedMenuOverlay) {
      updatedMenuOverlay.classList.remove('open');
    }
    document.body.style.overflow = '';
    console.log('✅ [MobileMenu] Menu closed');
  };

  // Add event listeners using multiple methods for maximum compatibility
  updatedHamburgerBtn.onclick = openMenu;
  updatedHamburgerBtn.addEventListener('click', openMenu, false);
  updatedHamburgerBtn.addEventListener('click', openMenu, true);
  
  updatedCloseBtn.onclick = closeMenu;
  updatedCloseBtn.addEventListener('click', closeMenu, false);
  updatedCloseBtn.addEventListener('click', closeMenu, true);
  
  if (updatedMenuOverlay) {
    updatedMenuOverlay.onclick = closeMenu;
    updatedMenuOverlay.addEventListener('click', closeMenu, false);
  }

  // --- Submenu Accordion Logic ---
  const allSubmenuToggles = document.querySelectorAll('.submenu-toggle');
  console.log(`🔄 [MobileMenu] Found ${allSubmenuToggles.length} submenu toggles`);
  
  allSubmenuToggles.forEach((toggle, index) => {
    // Clone to remove old listeners
    const newToggle = toggle.cloneNode(true) as HTMLElement;
    if (toggle.parentNode) {
      toggle.parentNode.replaceChild(newToggle, toggle);
    }

    newToggle.addEventListener('click', function(event) {
      event.preventDefault();
      event.stopPropagation();

      const parentLi = this.closest('li');
      const submenu = parentLi ? parentLi.querySelector('.submenu') as HTMLElement : null;

      if (!submenu) {
        console.warn('⚠️ [MobileMenu] Submenu not found for toggle', index);
        return;
      }

      // Close other open submenus
      const allSiblings = parentLi ? Array.from(parentLi.parentElement?.children || []) : [];
      for (const sibling of allSiblings) {
        if (sibling !== parentLi) {
          const siblingSubmenu = sibling.querySelector('.submenu') as HTMLElement;
          const siblingToggle = sibling.querySelector('.submenu-toggle') as HTMLElement;
          if (siblingSubmenu && siblingSubmenu.style.display === 'block') {
            siblingSubmenu.style.display = 'none';
            if (siblingToggle) {
              siblingToggle.classList.remove('active');
            }
          }
        }
      }

      // Toggle current submenu
      this.classList.toggle('active');
      if (submenu.style.display === 'block') {
        submenu.style.display = 'none';
      } else {
        submenu.style.display = 'block';
      }
      
      console.log(`✅ [MobileMenu] Submenu ${index} toggled`);
    });
  });

  // Note: Search box functionality is now handled by MobileSearchInit component
  // This keeps the components separated and easier to maintain

  console.log('✅ [MobileMenu] Mobile menu fully initialized');
  return true;
};

// Make it globally available
if (typeof window !== 'undefined') {
  (window as any).initMobileMenuStandalone = initMobileMenuStandalone;
  (window as any).reinitMobileMenu = initMobileMenuStandalone;
  console.log('✅ [MobileMenu] Function registered globally');
}

export default function MobileMenuInit() {
  const pathname = usePathname();

  useEffect(() => {
    // Initialize on mount
    const init = () => {
      if (typeof window === 'undefined') return;
      
      // Try multiple times to ensure elements are loaded
      const tryInit = (attempt: number = 1) => {
        const success = initMobileMenuStandalone();
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
      
      console.log('🔄 [MobileMenu] Route changed, re-initializing...');
      
      // Use requestAnimationFrame to ensure DOM is updated
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const success = initMobileMenuStandalone();
          if (!success) {
            // Retry with delays
            setTimeout(() => initMobileMenuStandalone(), 200);
            setTimeout(() => initMobileMenuStandalone(), 500);
            setTimeout(() => initMobileMenuStandalone(), 1000);
          }
        });
      });
    };

    reinit();
  }, [pathname]);

  return null;
}
