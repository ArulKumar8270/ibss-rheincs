console.log('🔥🔥🔥 START OF function.js FILE 🔥🔥🔥');

// Immediately register carousel functions BEFORE the IIFE
(function() {
  "use strict";
  
  console.log('📜 function.js IIFE executing');

  // Registry to store initialization functions for re-running on route changes
  window.swiperInitRegistry = window.swiperInitRegistry || [];
  window.generalInitRegistry = window.generalInitRegistry || [];

  // Helper function to run code when DOM and dependencies are ready
  function whenReady(callback, dependencies, registerForReinit) {
    dependencies = dependencies || [];
    registerForReinit = registerForReinit !== false; // Default to true for Swiper
    
    function checkDependencies() {
      // Check if all dependencies are available
      for (var i = 0; i < dependencies.length; i++) {
        var dep = dependencies[i];
        if (dep === 'jQuery' && (typeof window === 'undefined' || typeof window.$ === 'undefined' || !window.$.fn)) {
          return false;
        }
        if (dep === 'Swiper' && (typeof window === 'undefined' || typeof window.Swiper === 'undefined')) {
          return false;
        }
        if (dep === 'WOW' && (typeof window === 'undefined' || typeof window.WOW === 'undefined')) {
          return false;
        }
        if (dep === 'gsap' && (typeof window === 'undefined' || typeof window.gsap === 'undefined')) {
          return false;
        }
        if (dep === 'ScrollTrigger' && (typeof window === 'undefined' || typeof window.ScrollTrigger === 'undefined')) {
          return false;
        }
        if (dep === 'SplitText' && (typeof window === 'undefined' || typeof window.SplitText === 'undefined')) {
          return false;
        }
        if (dep === 'owlCarousel' && (typeof window === 'undefined' || typeof window.$ === 'undefined' || typeof window.$.fn === 'undefined' || typeof window.$.fn.owlCarousel === 'undefined')) {
          return false;
        }
        if (dep === 'bootstrap' && (typeof window === 'undefined' || typeof window.bootstrap === 'undefined')) {
          return false;
        }
      }
      return true;
    }

    function tryExecute() {
      // Check if DOM is ready
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
          if (checkDependencies()) {
            // Register for re-initialization BEFORE calling (for Swiper inits)
            if (registerForReinit && dependencies.indexOf('Swiper') !== -1) {
              // Only register if not already registered
              var alreadyRegistered = false;
              for (var i = 0; i < window.swiperInitRegistry.length; i++) {
                if (window.swiperInitRegistry[i] === callback) {
                  alreadyRegistered = true;
                  break;
                }
              }
              if (!alreadyRegistered) {
                window.swiperInitRegistry.push(callback);
              }
            }
            callback();
          } else {
            setTimeout(tryExecute, 50);
          }
        });
      } else {
        // DOM is already ready
        if (checkDependencies()) {
          // Register for re-initialization BEFORE calling (for Swiper inits)
          if (registerForReinit && dependencies.indexOf('Swiper') !== -1) {
            // Only register if not already registered
            var alreadyRegistered = false;
            for (var i = 0; i < window.swiperInitRegistry.length; i++) {
              if (window.swiperInitRegistry[i] === callback) {
                alreadyRegistered = true;
                break;
              }
            }
            if (!alreadyRegistered) {
              window.swiperInitRegistry.push(callback);
            }
          }
          callback();
        } else {
          setTimeout(tryExecute, 50);
        }
      }
    }

    tryExecute();
  }
  
  // Function to re-run all Swiper initializations
  function rerunSwiperInits() {
    if (typeof Swiper === 'undefined') {
      // Wait for Swiper to load
      setTimeout(rerunSwiperInits, 100);
      return;
    }
    
    // Ensure all existing Swiper instances are destroyed (safety check)
    document.querySelectorAll('.swiper').forEach(function(el) {
      try {
        if (el.swiper && el.swiper.destroy) {
          el.swiper.destroy(true, true);
        }
      } catch (e) {
        // Ignore errors
      }
      el.classList.remove('swiper-initialized');
      if (el.swiper) {
        delete el.swiper;
      }
    });
    
    // Re-run all registered initialization functions
    if (typeof window.swiperInitRegistry !== 'undefined' && Array.isArray(window.swiperInitRegistry)) {
      // Get a copy of the registry to avoid modification during iteration
      var inits = window.swiperInitRegistry.slice();
      
      // Re-run all initialization functions
      // They will check if elements exist on current page and initialize accordingly
      inits.forEach(function(initFn) {
        try {
          // Re-run the initialization function
          // Each function checks if elements exist before initializing
          initFn();
        } catch (e) {
          console.error('Error re-running swiper init:', e);
        }
      });
    }
    
    // Fallback: Force re-trigger whenReady for Swiper dependencies
    // This ensures all Swiper initializations run again
    setTimeout(function() {
      // Check if there are uninitialized Swipers
      var uninitialized = document.querySelectorAll('.swiper:not(.swiper-initialized)');
      if (uninitialized.length > 0 && typeof window.swiperInitRegistry !== 'undefined') {
        // Re-run all registered initializations one more time
        var inits = window.swiperInitRegistry.slice();
        inits.forEach(function(initFn) {
          try {
            initFn();
          } catch (e) {
            // Ignore errors
          }
        });
      }
    }, 600);
    
    // Final safety check after longer delay
    setTimeout(function() {
      if (typeof Swiper !== 'undefined') {
        var stillUninitialized = document.querySelectorAll('.swiper:not(.swiper-initialized)');
        if (stillUninitialized.length > 0 && typeof window.swiperInitRegistry !== 'undefined') {
          // One more attempt to initialize
          var inits = window.swiperInitRegistry.slice();
          inits.forEach(function(initFn) {
            try {
              initFn();
            } catch (e) {
              // Ignore errors
            }
          });
        }
      } 
    }, 1000);
  }
  
  // Make globally available
  window.rerunSwiperInits = rerunSwiperInits;

  // --- Read More/Read Less Toggle ---
  // Clean implementation with multiple strategies to ensure clicks work
  function initReadMoreToggles() {
    console.log('🔄 Initializing Read More Toggles...');
    console.log('Function called from:', new Error().stack);
    
    const toggleButtons = document.querySelectorAll('[id="toggleReadMore"]');
    
    if (toggleButtons.length === 0) {
      console.log('⚠️ No toggle buttons found');
      return;
    }
    
    console.log('✓ Found', toggleButtons.length, 'toggle buttons');
    
    toggleButtons.forEach(function(originalBtn, index) {
      // Clone the button to remove ALL old event listeners
      const toggleBtn = originalBtn.cloneNode(true);
      if (originalBtn.parentNode) {
        originalBtn.parentNode.replaceChild(toggleBtn, originalBtn);
      }
      
      console.log('Setting up button', index);
      
      // Find the #more element using multiple strategies
      let moreText = null;
      const parent = toggleBtn.parentElement;
      
      // Strategy 1: Look for parent's previous sibling
      if (parent && parent.previousElementSibling) {
        const prevSibling = parent.previousElementSibling;
        if (prevSibling.id === 'more') {
          moreText = prevSibling;
        } else {
          moreText = prevSibling.querySelector('[id="more"]');
        }
      }
      
      // Strategy 2: Walk backwards through siblings to find #more
      if (!moreText && parent) {
        let currentSibling = parent.previousElementSibling;
        while (currentSibling && !moreText) {
          if (currentSibling.id === 'more') {
            moreText = currentSibling;
            break;
          }
          const moreInSibling = currentSibling.querySelector('[id="more"]');
          if (moreInSibling) {
            moreText = moreInSibling;
            break;
          }
          currentSibling = currentSibling.previousElementSibling;
        }
      }
      
      // Strategy 3: Search in parent container (all #more elements, use index)
      if (!moreText && parent) {
        let container = parent.parentElement;
        while (container && !moreText) {
          const allMoreInContainer = Array.from(container.querySelectorAll('[id="more"]'));
          const allTogglesInContainer = Array.from(container.querySelectorAll('[id="toggleReadMore"]'));
          
          if (allMoreInContainer.length > 0) {
            // If counts match, pair by index
            if (allMoreInContainer.length === allTogglesInContainer.length) {
              const toggleIndex = allTogglesInContainer.indexOf(toggleBtn);
              if (toggleIndex >= 0 && allMoreInContainer[toggleIndex]) {
                moreText = allMoreInContainer[toggleIndex];
                break;
              }
            }
            // Otherwise, use the first one or one before this toggle
            const toggleIndex = allTogglesInContainer.indexOf(toggleBtn);
            if (toggleIndex > 0 && allMoreInContainer[toggleIndex - 1]) {
              moreText = allMoreInContainer[toggleIndex - 1];
            } else if (allMoreInContainer[0]) {
              moreText = allMoreInContainer[0];
            }
          }
          
          if (moreText) break;
          container = container.parentElement;
        }
      }
      
      // Strategy 4: Global fallback - find all #more and pair by document order
      if (!moreText) {
        const allMoreElements = Array.from(document.querySelectorAll('[id="more"]'));
        const allToggleElements = Array.from(document.querySelectorAll('[id="toggleReadMore"]'));
        
        if (allMoreElements.length > 0 && allToggleElements.length > 0) {
          const toggleIndex = allToggleElements.indexOf(toggleBtn);
          if (toggleIndex >= 0 && toggleIndex < allMoreElements.length) {
            moreText = allMoreElements[toggleIndex];
          } else if (allMoreElements.length > 0) {
            // Use the last #more element as fallback
            moreText = allMoreElements[allMoreElements.length - 1];
          }
        }
      }
      
      if (!moreText) {
        console.warn('❌ No #more element found for button', index, toggleBtn);
        console.warn('Parent:', parent);
        console.warn('All #more elements on page:', document.querySelectorAll('[id="more"]').length);
        return;
      }
      
      console.log('✓ Found #more for button', index, moreText);
      
      // Get label and icon elements
      const btnLabel = toggleBtn.querySelector('.label');
      const iconContainer = toggleBtn.querySelector('.svg-container');
      
      // Click handler - simple and direct
      const handleClick = function(e) {
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }
        
        console.log('👆 TOGGLE CLICKED:', index);
        
        // Toggle the hidden class
        const wasHidden = moreText.classList.contains('hidden');
        moreText.classList.toggle('hidden');
        
        console.log('State changed:', wasHidden ? 'hidden → visible' : 'visible → hidden');
        
        // Update UI
        const isNowHidden = moreText.classList.contains('hidden');
        
        if (btnLabel) {
          btnLabel.textContent = isNowHidden ? "Read More" : "Read Less";
        }
        
        if (iconContainer) {
          if (isNowHidden) {
            iconContainer.classList.remove('rotate-up');
          } else {
            iconContainer.classList.add('rotate-up');
          }
        }
        
        toggleBtn.setAttribute('aria-expanded', isNowHidden ? 'false' : 'true');
      };
      
      // Method 1: Direct onclick (most reliable)
      toggleBtn.onclick = function(e) {
        console.log('Method 1: onclick fired');
        handleClick(e);
      };
      
      // Method 2: addEventListener with capture
      toggleBtn.addEventListener('click', function(e) {
        console.log('Method 2: addEventListener fired');
        handleClick(e);
      }, true);
      
      // Method 3: addEventListener without capture
      toggleBtn.addEventListener('click', function(e) {
        console.log('Method 3: addEventListener (bubble) fired');
        handleClick(e);
      }, false);
      
      // Method 4: mousedown as backup
      toggleBtn.addEventListener('mousedown', function(e) {
        console.log('Method 4: mousedown fired');
        handleClick(e);
      });
      
      // Force clickable styles with !important via cssText
      toggleBtn.style.cssText = `
        cursor: pointer !important;
        pointer-events: auto !important;
        user-select: none !important;
        position: relative !important;
        z-index: 1000 !important;
        display: inline-block !important;
      `;
      
      // Make ALL children non-interactive so they don't block clicks
      const allChildren = toggleBtn.querySelectorAll('*');
      allChildren.forEach(function(child) {
        child.style.pointerEvents = 'none';
        child.style.cursor = 'pointer';
      });
      
      // Accessibility
      toggleBtn.setAttribute('role', 'button');
      toggleBtn.setAttribute('tabindex', '0');
      toggleBtn.setAttribute('aria-expanded', moreText.classList.contains('hidden') ? 'false' : 'true');
      toggleBtn.setAttribute('aria-controls', moreText.id || 'more-' + index);
      
      // Keyboard support
      toggleBtn.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          console.log('Keyboard trigger');
          handleClick(e);
        }
      });
      
      // Store reference for debugging
      toggleBtn.setAttribute('data-readmore-init', 'true');
      toggleBtn.setAttribute('data-index', index);
      
      console.log('✅ Button', index, 'fully initialized');
    });
    
    console.log('✅ Toggle initialization complete');
  }
  
  // Global click delegation as ultimate fallback
  // This catches ANY click on toggleReadMore elements
  document.addEventListener('click', function(e) {
    let target = e.target;
    let depth = 0;
    
    // Walk up the DOM tree to find toggleReadMore
    while (target && depth < 10) {
      if (target.id === 'toggleReadMore') {
        console.log('🌐 Global delegation caught click on toggleReadMore');
        
        // Find the #more element
        let moreText = null;
        const parent = target.parentElement;
        
        if (parent && parent.previousElementSibling) {
          const prevSibling = parent.previousElementSibling;
          if (prevSibling.id === 'more') {
            moreText = prevSibling;
          } else {
            moreText = prevSibling.querySelector('[id="more"]');
          }
        }
        
        if (moreText) {
          e.preventDefault();
          e.stopPropagation();
          
          // Toggle
          moreText.classList.toggle('hidden');
          const isHidden = moreText.classList.contains('hidden');
          
          // Update label
          const btnLabel = target.querySelector('.label');
          if (btnLabel) {
            btnLabel.textContent = isHidden ? "Read More" : "Read Less";
          }
          
          // Update icon
          const iconContainer = target.querySelector('.svg-container');
          if (iconContainer) {
            if (isHidden) {
              iconContainer.classList.remove('rotate-up');
            } else {
              iconContainer.classList.add('rotate-up');
            }
          }
          
          console.log('✓ Global delegation toggle complete');
        }
        
        break;
      }
      
      target = target.parentElement;
      depth++;
    }
  }, true); // Use capture phase
  
  // Make function globally available for ScriptReinit IMMEDIATELY
  // Register it as soon as the function is defined, not after initialization
  // This must happen BEFORE any initialization code runs
  (function() {
    if (typeof window !== 'undefined') {
      // Register immediately
      window.initReadMoreToggles = initReadMoreToggles;
      
      // Also ensure it's available with a different name as backup
      window.reinitReadMoreToggles = initReadMoreToggles;
      
      // Test function to manually trigger from console
      window.testToggle = function() {
        console.log('=== MANUAL TEST TRIGGERED ===');
        console.log('Buttons found:', document.querySelectorAll('[id="toggleReadMore"]').length);
        console.log('More texts found:', document.querySelectorAll('[id="more"]').length);
        if (typeof window.initReadMoreToggles === 'function') {
          window.initReadMoreToggles();
        } else {
          console.error('❌ initReadMoreToggles is not a function!');
        }
      };
      
      console.log('✅ initReadMoreToggles function registered on window (immediate)');
      console.log('💡 To test manually, run: window.testToggle() or window.initReadMoreToggles()');
      
      // Verify it's accessible
      if (typeof window.initReadMoreToggles === 'function') {
        console.log('✅ Verification: window.initReadMoreToggles is accessible');
        console.log('Function type:', typeof window.initReadMoreToggles);
      } else {
        console.error('❌ ERROR: window.initReadMoreToggles is NOT accessible!');
      }
      
      // Also set up a polling mechanism to ensure it stays available
      let pollCount = 0;
      const maxPolls = 10;
      const pollInterval = setInterval(function() {
        pollCount++;
        if (typeof window.initReadMoreToggles !== 'function') {
          console.warn('⚠️ initReadMoreToggles was removed! Re-registering... (poll', pollCount, ')');
          window.initReadMoreToggles = initReadMoreToggles;
          window.reinitReadMoreToggles = initReadMoreToggles;
        }
        if (pollCount >= maxPolls) {
          clearInterval(pollInterval);
        }
      }, 1000);
    } else {
      console.error('❌ window is not defined, cannot register initReadMoreToggles');
    }
  })();

  // Initialize IMMEDIATELY if DOM is already loaded
  if (document.readyState === 'loading') {
    console.log('⏳ DOM still loading, waiting...');
    document.addEventListener('DOMContentLoaded', function() {
      console.log('✅ DOMContentLoaded fired, initializing toggles');
      initReadMoreToggles();
      // Try again after delays (for Next.js client-side rendering)
      setTimeout(initReadMoreToggles, 500);
      setTimeout(initReadMoreToggles, 1000);
      setTimeout(initReadMoreToggles, 2000);
    });
  } else {
    console.log('✅ DOM already loaded, initializing toggles now');
    initReadMoreToggles();
    // Try again after delays (for Next.js client-side rendering)
    setTimeout(function() {
      console.log('Retry after 500ms');
      initReadMoreToggles();
    }, 500);
    setTimeout(function() {
      console.log('Retry after 1000ms');
      initReadMoreToggles();
    }, 1000);
    setTimeout(function() {
      console.log('Retry after 2000ms');
      initReadMoreToggles();
    }, 2000);
  }

  // Also use whenReady as backup
  whenReady(function() {
    console.log('✅ whenReady fired, initializing toggles');
    initReadMoreToggles();
  });

  // Listen for custom reinit event (from ScriptReinit fallback)
  window.addEventListener('reinitReadMoreToggles', function() {
    console.log('🔄 reinitReadMoreToggles custom event received');
    // Remove markers
    document.querySelectorAll('[data-readmore-init]').forEach(function(el) {
      el.removeAttribute('data-readmore-init');
      el.removeAttribute('data-index');
    });
    // Re-initialize
    initReadMoreToggles();
  });
  
  // Re-initialize on route changes
  window.addEventListener('routeChange', function() {
    console.log('🔄 Route change detected, re-initializing toggles...');
    
    // Remove ALL initialization markers to allow complete re-initialization
    document.querySelectorAll('[data-readmore-init]').forEach(function(el) {
      el.removeAttribute('data-readmore-init');
      el.removeAttribute('data-index');
    });
    
    // Use requestAnimationFrame to ensure DOM updates are complete
    requestAnimationFrame(function() {
      requestAnimationFrame(function() {
        // Re-initialize with multiple delays to ensure DOM is ready
        setTimeout(function() {
          console.log('🔄 Re-init attempt 1 (100ms)');
          initReadMoreToggles();
        }, 100);
        
        setTimeout(function() {
          console.log('🔄 Re-init attempt 2 (400ms)');
          initReadMoreToggles();
        }, 400);
        
        setTimeout(function() {
          console.log('🔄 Re-init attempt 3 (800ms)');
          initReadMoreToggles();
        }, 800);
        
        setTimeout(function() {
          console.log('🔄 Re-init attempt 4 (1500ms)');
          initReadMoreToggles();
        }, 1500);
        
        setTimeout(function() {
          console.log('🔄 Re-init attempt 5 (2500ms) - final attempt');
          initReadMoreToggles();
        }, 2500);
      });
    });
  });
  
  // Also listen for Next.js router events if available (Pages Router only)
  // Note: App Router doesn't have router.events, and static export doesn't have client-side routing
  if (typeof window !== 'undefined' && window.next && window.next.router && window.next.router.events && typeof window.next.router.events.on === 'function') {
    try {
    window.next.router.events.on('routeChangeComplete', function() {
      console.log('🔄 Next.js route change complete, re-initializing toggles...');
      // Remove markers
      document.querySelectorAll('[data-readmore-init]').forEach(function(el) {
        el.removeAttribute('data-readmore-init');
        el.removeAttribute('data-index');
      });
      // Re-initialize
        setTimeout(initReadMoreToggles, 200);
        setTimeout(initReadMoreToggles, 600);
        setTimeout(initReadMoreToggles, 1200);
      });
    } catch (e) {
      console.log('⚠️ Next.js router events not available (App Router or static export):', e.message);
    }
  } else {
    // Silently skip if router events are not available (expected for App Router/static export)
  }
  
  // For static export, listen to custom route change events
  if (typeof window !== 'undefined') {
    window.addEventListener('routeChange', function() {
      console.log('🔄 Route change event detected, re-initializing toggles...');
      setTimeout(initReadMoreToggles, 200);
      setTimeout(initReadMoreToggles, 600);
      setTimeout(initReadMoreToggles, 1200);
    });
  }
  
  // Listen for popstate (browser back/forward)
  window.addEventListener('popstate', function() {
    console.log('🔄 Popstate detected, re-initializing toggles...');
    document.querySelectorAll('[data-readmore-init]').forEach(function(el) {
      el.removeAttribute('data-readmore-init');
      el.removeAttribute('data-index');
    });
    setTimeout(initReadMoreToggles, 200);
    setTimeout(initReadMoreToggles, 600);
  });
  
  // MutationObserver as fallback to catch dynamically added toggle buttons
  if (typeof MutationObserver !== 'undefined') {
    const observer = new MutationObserver(function(mutations) {
      let shouldReinit = false;
      mutations.forEach(function(mutation) {
        mutation.addedNodes.forEach(function(node) {
          if (node.nodeType === 1) { // Element node
            // Check if the added node or its children contain toggleReadMore
            if (node.id === 'toggleReadMore' || 
                (node.querySelector && node.querySelector('[id="toggleReadMore"]'))) {
              shouldReinit = true;
            }
          }
        });
      });
      
      if (shouldReinit) {
        console.log('🔄 MutationObserver detected new toggle buttons, re-initializing...');
        // Remove markers for new elements
        document.querySelectorAll('[id="toggleReadMore"]:not([data-readmore-init])').forEach(function(el) {
          // New elements don't have markers yet, so we can initialize them
        });
        // Small delay to ensure DOM is settled
        setTimeout(initReadMoreToggles, 100);
      }
    });
    
    // Start observing when DOM is ready
    if (document.body) {
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
      console.log('✅ MutationObserver started for toggle buttons');
    } else {
      // Wait for body to be available
      document.addEventListener('DOMContentLoaded', function() {
        if (document.body) {
          observer.observe(document.body, {
            childList: true,
            subtree: true
          });
          console.log('✅ MutationObserver started for toggle buttons (after DOMContentLoaded)');
        }
      });
    }
  }

  // --- Main Mobile Menu (Hamburger) Logic ---
  // Extract mobile menu initialization into a reusable function
  function initMobileMenu() {
    console.log('🔄 Initializing mobile menu...');
    
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const closeBtn = document.getElementById('close-btn');
    const mobileNavPanel = document.getElementById('mobileNavPanel');
    const menuOverlay = document.getElementById('menuOverlay'); // Optional - may not exist

    // Check for required elements
    if (!hamburgerBtn) {
      console.warn('⚠️ hamburger-btn not found');
      return;
    }
    if (!closeBtn) {
      console.warn('⚠️ close-btn not found');
      return;
    }
    if (!mobileNavPanel) {
      console.warn('⚠️ mobileNavPanel not found');
      return;
    }

    console.log('✅ Found mobile menu elements:', {
      hamburgerBtn: !!hamburgerBtn,
      closeBtn: !!closeBtn,
      mobileNavPanel: !!mobileNavPanel,
      menuOverlay: !!menuOverlay
    });

    // Function to open the main menu
    const openMenu = (e) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      console.log('🍔 Opening mobile menu');
      if (mobileNavPanel) {
        mobileNavPanel.classList.add('open');
        console.log('✅ Added "open" class to mobileNavPanel');
      }
      if (menuOverlay) {
        menuOverlay.classList.add('open');
      }
      document.body.style.overflow = 'hidden';
    };

    // Function to close the main menu
    const closeMenu = (e) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      console.log('❌ Closing mobile menu');
      if (mobileNavPanel) {
        mobileNavPanel.classList.remove('open');
        console.log('✅ Removed "open" class from mobileNavPanel');
      }
      if (menuOverlay) {
        menuOverlay.classList.remove('open');
      }
      document.body.style.overflow = '';
    };

    // Remove old listeners by using onclick (which replaces previous onclick)
    // But also addEventListener for better compatibility
    // Use both methods to ensure it works
    
    // Remove any existing onclick handlers first
    hamburgerBtn.onclick = null;
    closeBtn.onclick = null;
    
    // Add new handlers using onclick (simple, always works)
    hamburgerBtn.onclick = openMenu;
    closeBtn.onclick = closeMenu;
    
    // Also addEventListener as backup
    hamburgerBtn.addEventListener('click', openMenu, false);
    closeBtn.addEventListener('click', closeMenu, false);
    
    // Add overlay click handler if it exists
    if (menuOverlay) {
      menuOverlay.onclick = closeMenu;
      menuOverlay.addEventListener('click', closeMenu, false);
    }
    
    // Mark as initialized
    hamburgerBtn.setAttribute('data-mobile-menu-init', 'true');
    closeBtn.setAttribute('data-mobile-menu-init', 'true');
    
    console.log('✅ Mobile menu event listeners attached');

    // --- Submenu Accordion Logic ---
    // Remove old listeners by re-querying and re-initializing
    const allSubmenuToggles = document.querySelectorAll('.submenu-toggle');
    allSubmenuToggles.forEach(toggle => {
      // Clone to remove old listeners
      const newToggle = toggle.cloneNode(true);
      if (toggle.parentNode) toggle.parentNode.replaceChild(newToggle, toggle);

      newToggle.addEventListener('click', function(event) {
        event.preventDefault();
        event.stopPropagation();

        const parentLi = this.closest('li');
        const submenu = parentLi ? parentLi.querySelector('.submenu') : null;

        if (!submenu) return;

        const allSiblings = parentLi ? parentLi.parentElement.children : [];
        for (const sibling of Array.from(allSiblings)) {
          if (sibling !== parentLi) {
            const siblingSubmenu = sibling.querySelector('.submenu');
            const siblingToggle = sibling.querySelector('.submenu-toggle');
            if (siblingSubmenu && siblingSubmenu.style.display === 'block') {
              siblingSubmenu.style.display = 'none';
              if (siblingToggle) {
                siblingToggle.classList.remove('active');
              }
            }
          }
        }

        this.classList.toggle('active');
        if (submenu.style.display === 'block') {
          submenu.style.display = 'none';
        } else {
          submenu.style.display = 'block';
        }
      });
    });

    // --- Search Box Logic ---
    const mobileSearchBtn = document.getElementById('mobileSearchBtn');
    const mobileSearchClose = document.getElementById('mobileSearchClose');
    const mobileSearchBox = document.getElementById('mobileSearchBox');

    if (mobileSearchBtn && mobileSearchBox) {
      // Clone to remove old listeners
      const newMobileSearchBtn = mobileSearchBtn.cloneNode(true);
      if (mobileSearchBtn.parentNode) mobileSearchBtn.parentNode.replaceChild(newMobileSearchBtn, mobileSearchBtn);
      newMobileSearchBtn.addEventListener('click', () => {
        if (mobileSearchBox) mobileSearchBox.classList.add('active');
      });
    }

    if (mobileSearchClose && mobileSearchBox) {
      // Clone to remove old listeners
      const newMobileSearchClose = mobileSearchClose.cloneNode(true);
      if (mobileSearchClose.parentNode) mobileSearchClose.parentNode.replaceChild(newMobileSearchClose, mobileSearchClose);
      newMobileSearchClose.addEventListener('click', () => {
        if (mobileSearchBox) mobileSearchBox.classList.remove('active');
      });
    }

    // Setup search functionality
    function setupSearch(boxId, btnId, closeId) {
      const searchBox = document.getElementById(boxId);
      const searchBtn = document.getElementById(btnId);
      const searchClose = document.getElementById(closeId);

      if (!searchBox || !searchBtn || !searchClose) {
        return;
      }

      // Clone buttons to remove old listeners
      const newSearchBtn = searchBtn.cloneNode(true);
      const newSearchClose = searchClose.cloneNode(true);
      if (searchBtn.parentNode) searchBtn.parentNode.replaceChild(newSearchBtn, searchBtn);
      if (searchClose.parentNode) searchClose.parentNode.replaceChild(newSearchClose, searchClose);

      newSearchBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        searchBox.classList.add('search-active');
        const inputField = searchBox.querySelector('.search-bar input');
        if (inputField) {
          setTimeout(() => inputField.focus(), 100);
        }
      });

      newSearchClose.addEventListener('click', () => {
        searchBox.classList.remove('search-active');
      });
    }

    setupSearch('searchBox', 'searchBtn', 'searchClose');
    setupSearch('mobileSearchBox', 'mobileSearchBtn', 'mobileSearchClose');

    console.log('✅ Mobile menu initialized');
  }

  // Register function globally for re-initialization
  window.initMobileMenu = initMobileMenu;
  window.reinitMobileMenu = initMobileMenu;

  // Initialize on page load
  whenReady(function() {
    initMobileMenu();
  });

  // --- Bootstrap Popover Initialization ---
  whenReady(function() {
    if (!window.__USE_LEGACY_POPOVER__) { return; }
    function initPopover(popoverId) {
      const popoverTriggerEl = document.getElementById(popoverId);
      if (!popoverTriggerEl) return;

      let hideTimeout;
      const popover = new bootstrap.Popover(popoverTriggerEl, {
        customClass: 'custom-popover-style',
        html: true,
        trigger: 'manual'
      });

      popoverTriggerEl.addEventListener('mouseenter', function () {
        clearTimeout(hideTimeout);
        popover.show();
      });

      popoverTriggerEl.addEventListener('mouseleave', function () {
        hideTimeout = setTimeout(() => {
          popover.hide();
        }, 200);
      });

      popoverTriggerEl.addEventListener('shown.bs.popover', () => {
        const popoverBody = document.querySelector('.popover');
        if (popoverBody) {
          popoverBody.addEventListener('mouseenter', function () {
            clearTimeout(hideTimeout);
          });
          popoverBody.addEventListener('mouseleave', function () {
            popover.hide();
          });
        }
      });
    }

    initPopover('myPopover');
    initPopover('myPopover2');
    initPopover('myPopover3');
    initPopover('myPopover4');
    initPopover('myPopover5');
  }, ['bootstrap']);

  // --- Swiper Initialization for Submenus ---
  whenReady(function() {
    const submenuSwiperEl = document.querySelector('.submenu-swiper');
    if (submenuSwiperEl && typeof Swiper !== 'undefined') {
      new Swiper(submenuSwiperEl, {
        loop: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
      });
    }
  }, ['Swiper']);

  // --- jQuery-dependent code ---
  whenReady(function() {
    var $ = window.$;
    var $window = $(window);
    var $body = $('body');

    /* Preloader Effect */
    $window.on('load', function () {
      $(".preloader").fadeOut(600);
    });

    /* Sticky Header */
    if ($('.active-sticky-header').length) {
      $window.on('resize', function () {
        setHeaderHeight();
      });

      function setHeaderHeight() {
        $("header.main-header").css("height", $('header .header-sticky').outerHeight());
      }

      $(window).on("scroll", function () {
        var fromTop = $(window).scrollTop();
        setHeaderHeight();
        var headerHeight = $('header .header-sticky').outerHeight()
        $("header .header-sticky").toggleClass("hide", (fromTop > headerHeight + 100));
        $("header .header-sticky").toggleClass("active", (fromTop > 600));
      });
    }

    /* Slick Menu JS */
    if ($('#menu').length) {
      $('#menu').slicknav({
        label: '',
        prependTo: '.responsive-menu'
      });
    }

    if ($("a[href='#top']").length) {
      $("a[href='#top']").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
      });
    }

    /* Typed subtitle */
    if ($('.typed-title').length && typeof $.fn.typed !== 'undefined') {
      $('.typed-title').typed({
        stringsElement: $('.typing-title'),
        backDelay: 2000,
        typeSpeed: 0,
        loop: true
      });
    }

    /* Hero Slider Layout JS */
    if (typeof Swiper !== 'undefined') {
      const heroSliderEl = document.querySelector('.hero-slider-layout .swiper');
      if (heroSliderEl) {
        // Destroy existing instance if it exists
        if (heroSliderEl.swiper && heroSliderEl.swiper.destroy) {
          heroSliderEl.swiper.destroy(true, true);
        }
        new Swiper(heroSliderEl, {
          effect: 'fade',
          slidesPerView: 1,
          speed: 1000,
          spaceBetween: 0,
          loop: false,
          autoplay: {
            delay: 4000,
          },
          pagination: {
            el: '.hero-pagination',
            clickable: true,
          },
        });
      }
    }

    if ($('.agency-supports-slider').length && typeof Swiper !== 'undefined') {
      const sliderEl = document.querySelector('.agency-supports-slider .swiper');
      if (sliderEl && sliderEl.swiper && sliderEl.swiper.destroy) {
        sliderEl.swiper.destroy(true, true);
      }
      const agency_supports_slider = new Swiper('.agency-supports-slider .swiper', {
        slidesPerView: 5,
        spaceBetween: 10,
        loop: false,
        ltr: true,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },
        speed: 4000,
        freeMode: true,
        freeModeMomentum: false,
        allowTouchMove: false,
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          991: {
            slidesPerView: 5,
          }
        }
      });
      if (sliderEl1) {
        sliderEl1.addEventListener('mouseenter', () => {
          agency_supports_slider.autoplay.stop();
        });
        sliderEl1.addEventListener('mouseleave', () => {
          agency_supports_slider.autoplay.start();
        });
      }
    } 

    if ($('.agency-supports-slider2').length && typeof Swiper !== 'undefined') {
      const sliderEl2 = document.querySelector('.agency-supports-slider2 .swiper');
      if (sliderEl2 && sliderEl2.swiper && sliderEl2.swiper.destroy) {
        sliderEl2.swiper.destroy(true, true);
      }
      const agency_supports_slider2 = new Swiper('.agency-supports-slider2 .swiper', {
        slidesPerView: 5,
        spaceBetween: 10,
        loop: false,
        rtl: true,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: true,
        },
        speed: 4000,
        freeMode: true,
        freeModeMomentum: false,
        allowTouchMove: false,
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          991: {
            slidesPerView: 5,
          }
        }
      });
      const sliderEl2Mouse = document.querySelector('.agency-supports-slider2 .swiper');
      if (sliderEl2Mouse) {
        sliderEl2Mouse.addEventListener('mouseenter', () => {
          agency_supports_slider2.autoplay.stop();
        });
        sliderEl2Mouse.addEventListener('mouseleave', () => {
          agency_supports_slider2.autoplay.start();
        });
      }
    }
    
    if ($('.agency-supports-slider1').length && typeof Swiper !== 'undefined') {
      const sliderEl1 = document.querySelector('.agency-supports-slider1 .swiper');
      if (sliderEl1 && sliderEl1.swiper && sliderEl1.swiper.destroy) {
        sliderEl1.swiper.destroy(true, true);
      }
      const agency_supports_slider = new Swiper('.agency-supports-slider1 .swiper', {
        slidesPerView: 5,
        spaceBetween: 10,
        loop: false,
        rtl: true,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },
        speed: 10000,
        freeMode: true,
        freeModeMomentum: false,
        allowTouchMove: false,
        breakpoints: {
          768: {
            slidesPerView: 5,
          },
          991: {
            slidesPerView: 6,
          }
        }
      });
    }
  }, ['jQuery']);

  // Registry to store Swiper initialization functions for re-running on route changes
  window.swiperInitRegistry = window.swiperInitRegistry || [];
  
  // Helper function to safely initialize Swiper (destroys existing instance first)
  function safeSwiperInit(selector, config, registerForReinit) {
    const swiperEl = typeof selector === 'string' ? document.querySelector(selector) : selector;
    if (!swiperEl || typeof Swiper === 'undefined') return null;
    
    // Destroy existing instance if it exists
    if (swiperEl.swiper && swiperEl.swiper.destroy) {
      try {
        swiperEl.swiper.destroy(true, true);
      } catch (e) {
        // Ignore errors
      }
    }
    
    // Create new instance
    const instance = new Swiper(swiperEl, config);
    
    // Register for re-initialization if requested
    if (registerForReinit && typeof window.swiperInitRegistry !== 'undefined') {
      window.swiperInitRegistry.push(function() {
        return safeSwiperInit(selector, config, false);
      });
    }
    
    return instance;
  }

  // --- Testimonial Slider Initializations ---
  whenReady(function() {
    const swiperEl = document.querySelector('.testimonial-slider .swiper');
    const counterEl = document.querySelector('.testimonial-slider .testspace');
    const rtyElement = document.querySelector('.testimonial-slider .rtyElement');

    if (!swiperEl || !counterEl || typeof Swiper === 'undefined') return;
    
    // Destroy existing instance if it exists
    if (swiperEl.swiper && swiperEl.swiper.destroy) {
      try {
        swiperEl.swiper.destroy(true, true);
      } catch (e) {
        // Ignore errors
      }
    }

    function getDynamicOffset() {
      const fluid = document.querySelector('.container-fluid');
      const fluidWidth = fluid ? fluid.clientWidth : window.innerWidth;
      const container = document.querySelector('.container');

      if (!container) return 0;

      const totalGap = fluidWidth - container.clientWidth;
      const offset = totalGap / 2;

      return offset > 0 ? offset : 0;
    }

    const realTotalSlides = swiperEl.querySelectorAll('.swiper-wrapper .swiper-slide').length;

    const testimonial_slider = new Swiper(swiperEl, {
      spaceBetween: 15,
      loop: true,
      speed: 800,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: '.testimonial-slider .testimonial-button-next',
        prevEl: '.testimonial-slider .testimonial-button-prev',
      },
      breakpoints: {
        0: { slidesPerView: 1.3 },
        768: { slidesPerView: 3 },
        991: { slidesPerView: 4 },
        1300: { slidesPerView: 5 },
        1700: { slidesPerView: 5.8 },
      },
      // on: {
      //   init: function () {
      //     applyOffset(this);
      //     counterEl.textContent = `1/${realTotalSlides}`;
      //   },
      //   resize: function () {
      //     applyOffset(this);
      //   },
      //   slideChange: function () {
      //     const currentSlide = this.realIndex + 1;
      //     counterEl.textContent = `${currentSlide}/${realTotalSlides}`;
      //   }
      // }
    });

    function applyOffset(swiperInstance) {
      const offset = getDynamicOffset();

      if (window.innerWidth >= 991) {
        swiperInstance.params.slidesOffsetBefore = offset;
        if (rtyElement) {
          rtyElement.style.marginLeft = `${offset}px`;
        }
      } else {
        swiperInstance.params.slidesOffsetBefore = 15;
        if (rtyElement) {
          rtyElement.style.marginLeft = '15px';
        }
      }

      swiperInstance.update();
    }
  }, ['Swiper']);

  whenReady(function() {
    const swiperEl = document.querySelector('.testimonial-slider-marquee .swiper');
    const counterEl = document.querySelector('.testimonial-slider-marquee .testspace');

    if (!swiperEl || !counterEl || typeof Swiper === 'undefined') return;
    
    // Destroy existing instance if it exists
    if (swiperEl.swiper && swiperEl.swiper.destroy) {
      try {
        swiperEl.swiper.destroy(true, true);
      } catch (e) {
        // Ignore errors
      }
    }

    const realTotalSlides = swiperEl.querySelectorAll('.swiper-wrapper .swiper-slide').length;

    const testimonial_slider = new Swiper(swiperEl, {
      slidesPerView: 5,
      spaceBetween: 15,
      loop: false,
      speed: 800,
      autoplay: true,
      navigation: {
        nextEl: '.testimonial-slider-marquee .testimonial-button-next',
        prevEl: '.testimonial-slider-marquee .testimonial-button-prev',
      },
      breakpoints: {
        0: { slidesPerView: 1.5 },
        768: { slidesPerView: 3 },
        991: { slidesPerView: 5 },
      },
      // on: {
      //   init: function () {
      //     counterEl.textContent = `1/${realTotalSlides}`;
      //   },
      //   slideChange: function () {
      //     const currentSlide1 = this.realIndex + 1;
      //     counterEl.textContent = `${currentSlide1}/${realTotalSlides}`;
      //   }
      // }
    });
  }, ['Swiper']);

  whenReady(function() {
    const swiperEl = document.querySelector('.testimonial-slider-08 .swiper');
    const counterEl = document.querySelector('.testimonial-slider-08 .testspace');

    if (!swiperEl || !counterEl || typeof Swiper === 'undefined') return;
    
    // Destroy existing instance if it exists
    if (swiperEl.swiper && swiperEl.swiper.destroy) {
      try {
        swiperEl.swiper.destroy(true, true);
      } catch (e) {
        // Ignore errors
      }
    }

    const realTotalSlides = swiperEl.querySelectorAll('.swiper-wrapper .swiper-slide').length;

    const testimonial_slider = new Swiper(swiperEl, {
      slidesPerView: 3,
      spaceBetween: 15,
      loop: true,
      speed: 800,
      autoplay: false,
      navigation: {
        nextEl: '.testimonial-slider-08 .testimonial-button-next',
        prevEl: '.testimonial-slider-08 .testimonial-button-prev',
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 3 },
        991: { slidesPerView: 3 },
      },
      // on: {
      //   init: function () {
      //     counterEl.textContent = `1/${realTotalSlides}`;
      //   },
      //   slideChange: function () {
      //     const currentSlide = this.realIndex + 1;
      //     counterEl.textContent = `${currentSlide}/${realTotalSlides}`;
      //   }
      // }
    });
  }, ['Swiper']);


  whenReady(function() {
    const swiperEl = document.querySelector('.testimonial-sliders1 .swiper');
    const counterEl = document.querySelector('.testimonial-sliders1 .testspace');

    if (!swiperEl || !counterEl || typeof Swiper === 'undefined') return;
    
    // Destroy existing instance if it exists
    if (swiperEl.swiper && swiperEl.swiper.destroy) {
      try {
        swiperEl.swiper.destroy(true, true);
      } catch (e) {
        // Ignore errors
      }
    }

    const realTotalSlides = swiperEl.querySelectorAll('.swiper-wrapper .swiper-slide').length;

    const testimonial_slider = new Swiper(swiperEl, {
      slidesPerView: 3,
      spaceBetween: 15,
      loop: false,
      speed: 800,
      autoplay: true,
      navigation: {
        nextEl: '.testimonial-sliders1 .testimonial-button-next',
        prevEl: '.testimonial-sliders1 .testimonial-button-prev',
      },
      breakpoints: {
        0: { slidesPerView: 1.5 },
        768: { slidesPerView: 2 },
        991: { slidesPerView: 3 },
      },
      // on: {
      //   init: function () {
      //     counterEl.textContent = `1/${realTotalSlides}`;
      //   },
      //   slideChange: function () {
      //     const currentSlide = this.realIndex + 1;
      //     counterEl.textContent = `${currentSlide}/${realTotalSlides}`;
      //   }
      // }
    });
  }, ['Swiper']);

  whenReady(function() {
    const swiperEl = document.querySelector('.testslide1 .swiper');
    if (swiperEl && typeof Swiper !== 'undefined') {
      // Destroy existing instance if it exists
      if (swiperEl.swiper && swiperEl.swiper.destroy) {
        try {
          swiperEl.swiper.destroy(true, true);
        } catch (e) {
          // Ignore errors
        }
      }
      new Swiper(swiperEl, {
        loop: true,
        speed: 3000,
        autoplay: {
          delay: 8000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        },
        spaceBetween: 20,
        navigation: {
          nextEl: ".testslide1 .testimonial-button-next",
          prevEl: ".testslide1 .testimonial-button-prev",
        },
        breakpoints: {
          0: {
            slidesPerView: 1.2,
            speed: 1400,
            autoplay: { delay: 12000, disableOnInteraction: false, pauseOnMouseEnter: true }
          },
          480: {
            slidesPerView: 1.2,
            speed: 1400,
            autoplay: { delay: 12000, disableOnInteraction: false, pauseOnMouseEnter: true }
          },
          768: {
            slidesPerView: 2,
            speed: 1200,
            autoplay: { delay: 10000, disableOnInteraction: false, pauseOnMouseEnter: true }
          },
          1024: {
            slidesPerView: 3,
            speed: 3000,
            autoplay: { delay: 8000, disableOnInteraction: false, pauseOnMouseEnter: true }
          },
          1366: {
            slidesPerView: 4,
            speed: 900,
            autoplay: { delay: 8000, disableOnInteraction: false, pauseOnMouseEnter: true }
          }
        }
      });
    }
  }, ['Swiper']);

  whenReady(function() {
    const searchBtn = document.getElementById("searchBtn");
    const searchClose = document.getElementById("searchClose");
    const searchFull = document.getElementById("searchFull");
    const searchWrapper = document.getElementById("searchBox");

    if (!searchBtn || !searchClose || !searchFull || !searchWrapper) return;

    const openSearch = () => {
      searchFull.classList.add("active");
      searchWrapper.classList.add("active");
      document.body.classList.add("no-scroll", "search-open");
      const inputField = searchFull.querySelector('input[type="text"]');
      if (inputField) {
        inputField.focus();
      }
      updateSearchPosition();
    };

    const closeSearch = () => {
      searchFull.classList.remove("active");
      searchWrapper.classList.remove("active");
      document.body.classList.remove("no-scroll", "search-open");
    };

    searchBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      openSearch();
    });

    searchClose.addEventListener("click", (e) => {
      e.stopPropagation();
      closeSearch();
    });

    searchFull.addEventListener("click", (e) => {
      if (e.target === searchFull) closeSearch();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && searchFull.classList.contains("active")) closeSearch();
    });

    const topHeader = document.querySelector(".topheader");
    const mainHeader = document.querySelector(".navbar, .header, .main-header, .navbar-toggle");

    const updateSearchPosition = () => {
      let offset = 0;
      if (topHeader) offset += topHeader.offsetHeight;
      if (mainHeader) offset += mainHeader.offsetHeight;
      if (searchFull) {
        searchFull.style.top = offset + "px";
      }
    };

    window.addEventListener("scroll", updateSearchPosition);
    window.addEventListener("resize", updateSearchPosition);
    
    if (searchFull && searchFull.classList.contains("active")) {
      updateSearchPosition();
    }
  });

  whenReady(function() {
    const swiperEl = document.querySelector('.testimonial-slider59 .swiper');
    const counterEl = document.querySelector('.testimonial-slider59 .testspace');

    if (!swiperEl || !counterEl || typeof Swiper === 'undefined') return;
    
    // Destroy existing instance if it exists
    if (swiperEl.swiper && swiperEl.swiper.destroy) {
      try {
        swiperEl.swiper.destroy(true, true);
      } catch (e) {
        // Ignore errors
      }
    }

    const realTotalSlides = swiperEl.querySelectorAll('.swiper-wrapper .swiper-slide').length;

    const testimonial_slider = new Swiper(swiperEl, {
      slidesPerView: 6,
      spaceBetween: 30,
      loop: true,
      speed: 800,
      centeredSlides: true,
      autoplay: true,
      navigation: {
        nextEl: '.testimonial-slider59 .testimonial-button-next',
        prevEl: '.testimonial-slider59 .testimonial-button-prev',
      },
      breakpoints: {
        0: { slidesPerView: 1.5 },
        768: { slidesPerView: 3 },
        991: { slidesPerView: 5 },
        1200: { slidesPerView: 6 },
      },
      // on: {
      //   init: function () {
      //     counterEl.textContent = `1/${realTotalSlides}`;
      //   },
      //   slideChange: function () {
      //     const currentSlide = this.realIndex + 1;
      //     counterEl.textContent = `${currentSlide}/${realTotalSlides}`;
      //   }
      // }
    });
  }, ['Swiper']);

  whenReady(function() {
    const swiperEl = document.querySelector('.industries .swiper');
    const counterEl = document.querySelector('.industries .testspace');
    const rtyElement = document.querySelector('.industries .rtyElement');

    if (!swiperEl || !counterEl || typeof Swiper === 'undefined') return;

    function getDynamicOffset() {
      const fluid = document.querySelector('.container-fluid');
      const fluidWidth = fluid ? fluid.clientWidth : window.innerWidth;
      const container = document.querySelector('.container');

      if (!container) return 0;

      const totalGap = fluidWidth - container.clientWidth;
      const offset = totalGap / 2;

      return offset > 0 ? offset : 0;
    }

    const realTotalSlides = swiperEl.querySelectorAll('.industries .swiper-slide').length;

    const testimonial_slider = new Swiper(swiperEl, {
      spaceBetween: 15,
      loop: true,
      speed: 800,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: '.industries .testimonial-button-next',
        prevEl: '.industries .testimonial-button-prev',
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 3 },
        991: { slidesPerView: 4 },
        1300: { slidesPerView: 5 },
        1700: { slidesPerView: 5 },
      },
      // on: {
      //   init: function () {
      //     applyOffset(this);
      //     counterEl.textContent = `1/${realTotalSlides}`;
      //   },
      //   resize: function () {
      //     applyOffset(this);
      //   },
      //   slideChange: function () {
      //     const currentSlide = this.realIndex + 1;
      //     counterEl.textContent = `${currentSlide}/${realTotalSlides}`;
      //   }
      // }
    });

    function applyOffset(swiperInstance) {
      const offset = getDynamicOffset();

      if (window.innerWidth >= 991) {
        swiperInstance.params.slidesOffsetBefore = offset;
        if (rtyElement) {
          rtyElement.style.marginLeft = `${offset}px`;
        }
      } else {
        swiperInstance.params.slidesOffsetBefore = 15;
        if (rtyElement) {
          rtyElement.style.marginLeft = '15px';
        }
      }

      swiperInstance.update();
    }
  }, ['Swiper']);

  whenReady(function() {
    const swiperEl = document.querySelector('.testimonial-slider1 .swiper');
    const counterEl = document.querySelector('.testimonial-slider1 .testspace');

    if (!swiperEl || !counterEl || typeof Swiper === 'undefined') return;

    function getDynamicOffset() {
      const fluid = document.querySelector('.container-fluid');
      const container = document.querySelector('.container');

      if (!fluid || !container) return 0;

      const fluidWidth = fluid.clientWidth;
      const containerWidth = container.clientWidth;

      const totalGap = fluidWidth - containerWidth;
      const leftOffset = totalGap / 2;

      return leftOffset > 0 ? leftOffset : 0;
    }

    const realTotalSlides = swiperEl.querySelectorAll('.swiper-wrapper .swiper-slide').length;

    const testimonial_slider = new Swiper(swiperEl, {
      spaceBetween: 20,
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.testimonial-slider1 .testimonial-button-next',
        prevEl: '.testimonial-slider1 .testimonial-button-prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        500: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        900: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 2,
        },
        1500: {
          slidesPerView: 2,
        },
        1600: {
          slidesPerView: 2,
        }
      },
      // on: {
      //   init: function () {
      //     applyOffset(this);
      //     counterEl.textContent = `1/${realTotalSlides}`;
      //   },
      //   resize: function () {
      //     applyOffset(this);
      //   },
      //   slideChange: function () {
      //     const currentSlide = this.realIndex + 1;
      //     counterEl.textContent = `${currentSlide}/${realTotalSlides}`;
      //   }
      // }
    });

    function applyOffset(swiperInstance) {
      const offset = getDynamicOffset();

      if (window.innerWidth >= 1200) {
        swiperInstance.params.slidesOffsetBefore = offset;
      } else {
        swiperInstance.params.slidesOffsetBefore = 0;
      }

      swiperInstance.update();
    }
  }, ['Swiper']);

  whenReady(function() {
    const swiperEl = document.querySelector('.testimonial-slider11 .swiper');
    const counterEl = document.querySelector('.testimonial-slider11 .testspace');

    if (!swiperEl || !counterEl || typeof Swiper === 'undefined') return;

    const realTotalSlides = swiperEl.querySelectorAll('.swiper-wrapper .swiper-slide').length;

    const testimonial_slider = new Swiper(swiperEl, {
      slidesPerView: 5,
      spaceBetween: 15,
      loop: false,
      speed: 800,
      centeredSlides: true,
      autoplay: true,
      navigation: {
        nextEl: '.testimonial-slide11 .testimonial-button-next',
        prevEl: '.testimonial-slider11 .testimonial-button-prev',
      },
      breakpoints: {
        0: { slidesPerView: 1.5 },
        768: { slidesPerView: 3 },
        991: { slidesPerView: 5 },
      },
      // on: {
      //   init: function () {
      //     counterEl.textContent = `1/${realTotalSlides}`;
      //   },
      //   slideChange: function () {
      //     const currentSlide = this.realIndex + 1;
      //     counterEl.textContent = `${currentSlide}/${realTotalSlides}`;
      //   }
      // }
    });
  }, ['Swiper']);

  whenReady(function() {
    if (document.querySelector('.testimonial-slider3') && typeof Swiper !== 'undefined') {
      const testimonial_slider = new Swiper('.testimonial-slider3 .swiper', {
        slidesPerView: 1.3,
        spaceBetween: 15,
        loop: false,
        speed: 800,
        breakpoints: {
          420: {
            slidesPerView: 1.2,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 1.5,
            spaceBetween: 15
          },
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: '.testimonial-slider3 .testimonial-button-next',
          prevEl: '.testimonial-slider3 .testimonial-button-prev',
        },
        // on: {
        //   init: function () {
        //     const totalSlides = Array.from(this.slides)
        //       .filter(slide => !slide.classList.contains('swiper-slide-duplicate'))
        //       .length;
        //     this.totalRealSlides = totalSlides;
        //     const testspace = document.querySelector('.testspace1');
        //     if (testspace) testspace.textContent = `1/${totalSlides}`;
        //   },
        //   slideChange: function () {
        //     const currentSlide = this.realIndex + 1;
        //     const testspace = document.querySelector('.testspace1');
        //     if (testspace) testspace.textContent = `${currentSlide}/${this.totalRealSlides}`;
        //   }
        // }
      });
    }
  }, ['Swiper']);

  whenReady(function() {
    if (document.querySelector('.testimonial-slider33') && typeof Swiper !== 'undefined') {
      const testimonial_slider = new Swiper('.testimonial-slider33 .swiper', {
        slidesPerView: 1.3,
        spaceBetween: 15,
        loop: false,
        speed: 800,
        breakpoints: {
          420: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 15
          },
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: '.testimonial-slider33 .testimonial-button-next',
          prevEl: '.testimonial-slider33 .testimonial-button-prev',
        },
        // on: {
        //   init: function () {
        //     const totalSlides = Array.from(this.slides)
        //       .filter(slide => !slide.classList.contains('swiper-slide-duplicate'))
        //       .length;
        //     this.totalRealSlides = totalSlides;
        //     const testspace = document.querySelector('.testspace');
        //     if (testspace) testspace.textContent = `1/${totalSlides}`;
        //   },
        //   slideChange: function () {
        //     const currentSlide = this.realIndex + 1;
        //     const testspace = document.querySelector('.testspace');
        //     if (testspace) testspace.textContent = `${currentSlide}/${this.totalRealSlides}`;
        //   }
        // }
      });
    }
  }, ['Swiper']);

  whenReady(function() {
    const swiperEl = document.querySelector('.testimonial-slider5 .swiper');
    const counterEl = document.querySelector('.testimonial-slider5 .testspace');

    if (!swiperEl || !counterEl || typeof Swiper === 'undefined') return;

    const realTotalSlides = swiperEl.querySelectorAll('.swiper-wrapper .swiper-slide').length;

    const testimonial_slider = new Swiper(swiperEl, {
      slidesPerView: 5,
      spaceBetween: 15,
      loop: false,
      speed: 800,
      autoplay: true,
      navigation: {
        nextEl: '.testimonial-slider5 .testimonial-button-next',
        prevEl: '.testimonial-slider5 .testimonial-button-prev',
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 3 },
        991: { slidesPerView: 5 },
      },
      // on: {
      //   init: function () {
      //     counterEl.textContent = `1/${realTotalSlides}`;
      //   },
      //   slideChange: function () {
      //     const currentSlide = this.realIndex + 1;
      //     counterEl.textContent = `${currentSlide}/${realTotalSlides}`;
      //   }
      // }
    });
  }, ['Swiper']);

  whenReady(function() {
    const swiperEl = document.querySelector('.testimonial-slider-awards .swiper');
    const counterEl = document.querySelector('.testimonial-slider-awards .testspace');

    if (!swiperEl || !counterEl || typeof Swiper === 'undefined') return;

    const realTotalSlides = swiperEl.querySelectorAll('.swiper-wrapper .swiper-slide').length;

    const testimonial_slider = new Swiper(swiperEl, {
      slidesPerView: 5,
      spaceBetween: 30,
      loop: true,
      speed: 800,
      autoplay: true,
      // navigation: {
      //   nextEl: '.testimonial-slider-awards .testimonial-button-next',
      //   prevEl: '.testimonial-slider-awards .testimonial-button-prev',
      // },
      breakpoints: {
        0: {
          slidesPerView: 2,
          centeredSlides: true,
          spaceBetween: 15
        },
        768: { slidesPerView: 3, spaceBetween: 15 },
        991: { slidesPerView: 9, spaceBetween: 15, },
      },
      // on: {
      //   init: function () {
      //     counterEl.textContent = `1/${realTotalSlides}`;
      //   },
      //   slideChange: function () {
      //     const currentSlide = this.realIndex + 1;
      //     counterEl.textContent = `${currentSlide}/${realTotalSlides}`;
      //   }
      // }
    });
  }, ['Swiper']);

  whenReady(function() {
    const swiperEl = document.querySelector('.testimonial-slider7 .swiper');
    const counterEl = document.querySelector('.testimonial-slider7 .testspace');

    if (!swiperEl || !counterEl || typeof Swiper === 'undefined') return;

    const realTotalSlides = swiperEl.querySelectorAll('.swiper-wrapper .swiper-slide').length;

    const testimonial_slider = new Swiper(swiperEl, {
      slidesPerView: 5,
      spaceBetween: 15,
      loop: false,
      speed: 800,
      autoplay: false,
      navigation: {
        nextEl: '.testimonial-slide7 .testimonial-button-next',
        prevEl: '.testimonial-slider7 .testimonial-button-prev',
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 3 },
        991: { slidesPerView: 5 },
      },
      // on: {
      //   init: function () {
      //     counterEl.textContent = `1/${realTotalSlides}`;
      //   },
      //   slideChange: function () {
      //     const currentSlide = this.realIndex + 1;
      //     counterEl.textContent = `${currentSlide}/${realTotalSlides}`;
      //   }
      // }
    });
  }, ['Swiper']);

  whenReady(function() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const items = document.querySelectorAll(".item");

    filterButtons.forEach(button => {
      button.addEventListener("click", function () {
        filterButtons.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");

        const filterValue = this.getAttribute("data-filter");

        items.forEach(item => {
          const itemCategories = item.getAttribute("data-category").split(" ");
          if (filterValue === "all" || itemCategories.includes(filterValue)) {
            item.style.display = "block";
            item.classList.add("show");
          } else {
            item.style.display = "none";
            item.classList.remove("show");
          }
        });
      });
    });
  });

  // --- Overview Slider Initializations ---
  whenReady(function() {
    const swiperEl = document.querySelector('.overview-slider .swiper');
    const counterEl = document.querySelector('.overview-slider .testspace');
    const rtyElement = document.querySelector('.overview-slider .rtyElement');

    if (!swiperEl || !counterEl || typeof Swiper === 'undefined') return;

    function getDynamicOffset() {
      const fluid = document.querySelector('.container-fluid');
      const fluidWidth = fluid ? fluid.clientWidth : window.innerWidth;
      const container = document.querySelector('.container');

      if (!container) return 0;

      const totalGap = fluidWidth - container.clientWidth;
      const offset = totalGap / 2;

      return offset > 0 ? offset : 0;
    }

    const realTotalSlides = swiperEl.querySelectorAll('.swiper-wrapper .swiper-slide').length;

    const testimonial_slider = new Swiper(swiperEl, {
      spaceBetween: 15,
      loop: true,
      speed: 800,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: '.overview-slider .testimonial-button-next',
        prevEl: '.overview-slider .testimonial-button-prev',
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        450: { slidesPerView: 2 },
        600: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        991: { slidesPerView: 4 },
        1300: { slidesPerView: 5 },
        1700: { slidesPerView: 6 },
      },
      // on: {
      //   init: function () {
      //     applyOffset(this);
      //     counterEl.textContent = `1/${realTotalSlides}`;
      //   },
      //   resize: function () {
      //     applyOffset(this);
      //   },
      //   slideChange: function () {
      //     const currentSlide = this.realIndex + 1;
      //     counterEl.textContent = `${currentSlide}/${realTotalSlides}`;
      //   }
      // }
    });

    function applyOffset(swiperInstance) {
      const offset = getDynamicOffset();

      if (window.innerWidth >= 991) {
        swiperInstance.params.slidesOffsetBefore = offset;
        if (rtyElement) {
          rtyElement.style.marginLeft = `${offset}px`;
        }
      } else {
        swiperInstance.params.slidesOffsetBefore = 15;
        if (rtyElement) {
          rtyElement.style.marginLeft = '15px';
        }
      }

      swiperInstance.update();
    }
  }, ['Swiper']);

  whenReady(function() {
    const swiperEl = document.querySelector('.overview-slider2 .swiper');
    const counterEl = document.querySelector('.overview-slider2 .testspace');
    const rtyElement = document.querySelector('.overview-slider2 .rtyElement');

    if (!swiperEl || !counterEl || typeof Swiper === 'undefined') return;

    function getDynamicOffset() {
      const fluid = document.querySelector('.container-fluid');
      const fluidWidth = fluid ? fluid.clientWidth : window.innerWidth;
      const container = document.querySelector('.container');

      if (!container) return 0;

      const totalGap = fluidWidth - container.clientWidth;
      const offset = totalGap / 2;

      return offset > 0 ? offset : 0;
    }

    const realTotalSlides = swiperEl.querySelectorAll('.swiper-wrapper .swiper-slide').length;

    const testimonial_slider = new Swiper(swiperEl, {
      spaceBetween: 15,
      loop: true,
      speed: 800,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: '.overview-slider2 .testimonial-button-next',
        prevEl: '.overview-slider2 .testimonial-button-prev',
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        450: { slidesPerView: 2 },
        600: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        991: { slidesPerView: 4 },
        1300: { slidesPerView: 4 },
        1700: { slidesPerView: 5 },
      },
      // on: {
      //   init: function () {
      //     applyOffset(this);
      //     counterEl.textContent = `1/${realTotalSlides}`;
      //   },
      //   resize: function () {
      //     applyOffset(this);
      //   },
      //   slideChange: function () {
      //     const currentSlide = this.realIndex + 1;
      //     counterEl.textContent = `${currentSlide}/${realTotalSlides}`;
      //   }
      // }
    });

    function applyOffset(swiperInstance) {
      const offset = getDynamicOffset();

      if (window.innerWidth >= 991) {
        swiperInstance.params.slidesOffsetBefore = offset;
        if (rtyElement) {
          rtyElement.style.marginLeft = `${offset}px`;
        }
      } else {
        swiperInstance.params.slidesOffsetBefore = 15;
        if (rtyElement) {
          rtyElement.style.marginLeft = '15px';
        }
      }

      swiperInstance.update();
    }
  }, ['Swiper']);

  whenReady(function() {
    const swiperEl = document.querySelector('.overview-slider5 .swiper');
    const counterEl = document.querySelector('.overview-slider5 .testspace');
    const rtyElement = document.querySelector('.overview-slider5 .rtyElement');

    if (!swiperEl || !counterEl || typeof Swiper === 'undefined') return;

    function getDynamicOffset() {
      const fluid = document.querySelector('.container-fluid');
      const fluidWidth = fluid ? fluid.clientWidth : window.innerWidth;
      const container = document.querySelector('.container');

      if (!container) return 0;

      const totalGap = fluidWidth - container.clientWidth;
      const offset = totalGap / 2;

      return offset > 0 ? offset : 0;
    }

    const realTotalSlides = swiperEl.querySelectorAll('.swiper-wrapper .swiper-slide').length;

    const testimonial_slider = new Swiper(swiperEl, {
      spaceBetween: 15,
      loop: true,
      speed: 800,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: '.overview-slider5 .testimonial-button-next',
        prevEl: '.overview-slider5 .testimonial-button-prev',
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        450: { slidesPerView: 2 },
        600: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        991: { slidesPerView: 4 },
        1300: { slidesPerView: 5 },
        1700: { slidesPerView: 6 },
      },
      // on: {
      //   init: function () {
      //     applyOffset(this);
      //     counterEl.textContent = `1/${realTotalSlides}`;
      //   },
      //   resize: function () {
      //     applyOffset(this);
      //   },
      //   slideChange: function () {
      //     const currentSlide = this.realIndex + 1;
      //     counterEl.textContent = `${currentSlide}/${realTotalSlides}`;
      //   }
      // }
    });

    function applyOffset(swiperInstance) {
      const offset = getDynamicOffset();

      if (window.innerWidth >= 991) {
        swiperInstance.params.slidesOffsetBefore = offset;
        if (rtyElement) {
          rtyElement.style.marginLeft = `${offset}px`;
        }
      } else {
        swiperInstance.params.slidesOffsetBefore = 15;
        if (rtyElement) {
          rtyElement.style.marginLeft = '15px';
        }
      }

      swiperInstance.update();
    }
  }, ['Swiper']);

  whenReady(function() {
    const swiperEl = document.querySelector('.sap-service .swiper');
    const counterEl = document.querySelector('.sap-service .testspace');
    const rtyElement = document.querySelector('.sap-service .rtyElement');

    if (!swiperEl || !counterEl || typeof Swiper === 'undefined') return;

    function getDynamicOffset() {
      const fluid = document.querySelector('.container-fluid');
      const fluidWidth = fluid ? fluid.clientWidth : window.innerWidth;
      const container = document.querySelector('.container');

      if (!container) return 0;

      const totalGap = fluidWidth - container.clientWidth;
      const offset = totalGap / 2;

      return offset > 0 ? offset : 0;
    }

    const realTotalSlides = swiperEl.querySelectorAll('.swiper-wrapper .swiper-slide').length;

    const testimonial_slider = new Swiper(swiperEl, {
      spaceBetween: 15,
      loop: true,
      speed: 800,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: '.sap-service .testimonial-button-next',
        prevEl: '.sap-service .testimonial-button-prev',
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 3 },
        991: { slidesPerView: 3 },
        1300: { slidesPerView: 3 },
        1700: { slidesPerView: 3 },
      },
      // on: {
      //   init: function () {
      //     applyOffset(this);
      //     counterEl.textContent = `1/${realTotalSlides}`;
      //   },
      //   resize: function () {
      //     applyOffset(this);
      //   },
      //   slideChange: function () {
      //     const currentSlide = this.realIndex + 1;
      //     counterEl.textContent = `${currentSlide}/${realTotalSlides}`;
      //   }
      // }
    });

    function applyOffset(swiperInstance) {
      const offset = getDynamicOffset();

      if (window.innerWidth >= 991) {
        swiperInstance.params.slidesOffsetBefore = offset;
        if (rtyElement) {
          rtyElement.style.marginLeft = `${offset}px`;
        }
      } else {
        swiperInstance.params.slidesOffsetBefore = 15;
        if (rtyElement) {
          rtyElement.style.marginLeft = '15px';
        }
      }

      swiperInstance.update();
    }
  }, ['Swiper']);

  whenReady(function() {
    const swiperEl = document.querySelector('.testimonial-slideram .swiper');
    const counterEl = document.querySelector('.testimonial-slideram .testspace');
    const rtyElement = document.querySelector('.testimonial-slideram .rtyElement');

    if (!swiperEl || !counterEl || typeof Swiper === 'undefined') return;

    function getDynamicOffset() {
      const fluid = document.querySelector('.container-fluid');
      const fluidWidth = fluid ? fluid.clientWidth : window.innerWidth;
      const container = document.querySelector('.container');

      if (!container) return 0;

      const totalGap = fluidWidth - container.clientWidth;
      const offset = totalGap / 2;

      return offset > 0 ? offset : 0;
    }

    const realTotalSlides = swiperEl.querySelectorAll('.swiper-wrapper .swiper-slide').length;

    const testimonial_slider = new Swiper(swiperEl, {
      spaceBetween: 15,
      loop: true,
      speed: 800,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: '.testimonial-slideram .testimonial-button-next',
        prevEl: '.testimonial-slideram .testimonial-button-prev',
      },
      breakpoints: {
        0: { slidesPerView: 1.3 },
        768: { slidesPerView: 3 },
        991: { slidesPerView: 4 },
        1300: { slidesPerView: 4 },
        1700: { slidesPerView: 5 },
      },
      // on: {
      //   init: function () {
      //     applyOffset(this);
      //     counterEl.textContent = `1/${realTotalSlides}`;
      //   },
      //   resize: function () {
      //     applyOffset(this);
      //   },
      //   slideChange: function () {
      //     const currentSlide = this.realIndex + 1;
      //     counterEl.textContent = `${currentSlide}/${realTotalSlides}`;
      //   }
      // }
    });

    function applyOffset(swiperInstance) {
      const offset = getDynamicOffset();

      if (window.innerWidth >= 991) {
        swiperInstance.params.slidesOffsetBefore = offset;
        if (rtyElement) {
          rtyElement.style.marginLeft = `${offset}px`;
        }
      } else {
        swiperInstance.params.slidesOffsetBefore = 15;
        if (rtyElement) {
          rtyElement.style.marginLeft = '15px';
        }
      }

      swiperInstance.update();
    }
  }, ['Swiper']);

  whenReady(function() {
    const swiperEl = document.querySelector('.ecommers-8 .swiper');
    const counterEl = document.querySelector('.ecommers-8 .testspace');
    const rtyElement = document.querySelector('.ecommers-8 .rtyElement');

    if (!swiperEl || !counterEl || typeof Swiper === 'undefined') return;

    function getDynamicOffset() {
      const fluid = document.querySelector('.container-fluid');
      const fluidWidth = fluid ? fluid.clientWidth : window.innerWidth;
      const container = document.querySelector('.container');

      if (!container) return 0;

      const totalGap = fluidWidth - container.clientWidth;
      const offset = totalGap / 2;

      return offset > 0 ? offset : 0;
    }

    const realTotalSlides = swiperEl.querySelectorAll('.swiper-wrapper .swiper-slide').length;

    const testimonial_slider = new Swiper(swiperEl, {
      spaceBetween: 15,
      loop: true,
      speed: 800,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: '.ecommers-8 .testimonial-button-next',
        prevEl: '.ecommers-8 .testimonial-button-prev',
      },
      breakpoints: {
        0: { slidesPerView: 1.3 },
        768: { slidesPerView: 3 },
        991: { slidesPerView: 4 },
        1300: { slidesPerView: 5 },
        1700: { slidesPerView: 5 },
      },
      // on: {
      //   init: function () {
      //     applyOffset(this);
      //     counterEl.textContent = `1/${realTotalSlides}`;
      //   },
      //   resize: function () {
      //     applyOffset(this);
      //   },
      //   slideChange: function () {
      //     const currentSlide = this.realIndex + 1;
      //     counterEl.textContent = `${currentSlide}/${realTotalSlides}`;
      //   }
      // }
    });

    function applyOffset(swiperInstance) {
      const offset = getDynamicOffset();

      if (window.innerWidth >= 991) {
        swiperInstance.params.slidesOffsetBefore = offset;
        if (rtyElement) {
          rtyElement.style.marginLeft = `${offset}px`;
        }
      } else {
        swiperInstance.params.slidesOffsetBefore = 15;
        if (rtyElement) {
          rtyElement.style.marginLeft = '15px';
        }
      }

      swiperInstance.update();
    }
  }, ['Swiper']);

  whenReady(function() {
    const swiperEl = document.querySelector('.architecture .swiper');
    const counterEl = document.querySelector('.architecture .testspace');
    const rtyElement = document.querySelector('.architecture .rtyElement');

    if (!swiperEl || !counterEl || typeof Swiper === 'undefined') return;

    function getDynamicOffset() {
      const fluid = document.querySelector('.container-fluid');
      const fluidWidth = fluid ? fluid.clientWidth : window.innerWidth;
      const container = document.querySelector('.container');

      if (!container) return 0;

      const totalGap = fluidWidth - container.clientWidth;
      const offset = totalGap / 2;

      return offset > 0 ? offset : 0;
    }

    const realTotalSlides = swiperEl.querySelectorAll('.swiper-wrapper .swiper-slide').length;

    const testimonial_slider = new Swiper(swiperEl, {
      spaceBetween: 15,
      loop: true,
      speed: 800,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: '.architecture .testimonial-button-next',
        prevEl: '.architecture .testimonial-button-prev',
      },
      breakpoints: {
        0: { slidesPerView: 1.3 },
        768: { slidesPerView: 3 },
        991: { slidesPerView: 4 },
        1300: { slidesPerView: 5 },
        1700: { slidesPerView: 5 },
      },
      // on: {
      //   init: function () {
      //     applyOffset(this);
      //     counterEl.textContent = `1/${realTotalSlides}`;
      //   },
      //   resize: function () {
      //     applyOffset(this);
      //   },
      //   slideChange: function () {
      //     const currentSlide = this.realIndex + 1;
      //     counterEl.textContent = `${currentSlide}/${realTotalSlides}`;
      //   }
      // }
    });

    function applyOffset(swiperInstance) {
      const offset = getDynamicOffset();

      if (window.innerWidth >= 991) {
        swiperInstance.params.slidesOffsetBefore = offset;
        if (rtyElement) {
          rtyElement.style.marginLeft = `${offset}px`;
        }
      } else {
        swiperInstance.params.slidesOffsetBefore = 15;
        if (rtyElement) {
          rtyElement.style.marginLeft = '15px';
        }
      }

      swiperInstance.update();
    }
  }, ['Swiper']);

  whenReady(function() {
    const swiperEl = document.querySelector('.ai-slider .swiper');
    const counterEl = document.querySelector('.ai-slider .testspace');
    const rtyElement = document.querySelector('.ai-slider .rtyElement');

    if (!swiperEl || !counterEl || typeof Swiper === 'undefined') return;

    function getDynamicOffset() {
      const fluid = document.querySelector('.container-fluid');
      const fluidWidth = fluid ? fluid.clientWidth : window.innerWidth;
      const container = document.querySelector('.container');

      if (!container) return 0;

      const totalGap = fluidWidth - container.clientWidth;
      const offset = totalGap / 2;

      return offset > 0 ? offset : 0;
    }

    const realTotalSlides = swiperEl.querySelectorAll('.swiper-wrapper .swiper-slide').length;

    const testimonial_slider = new Swiper(swiperEl, {
      spaceBetween: 15,
      loop: true,
      speed: 800,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: '.ai-slider .testimonial-button-next',
        prevEl: '.ai-slider .testimonial-button-prev',
      },
      breakpoints: {
        0: { slidesPerView: 1.3 },
        768: { slidesPerView: 3 },
        991: { slidesPerView: 4 },
        1300: { slidesPerView: 5 },
        1700: { slidesPerView: 5 },
      },
      // on: {
      //   init: function () {
      //     applyOffset(this);
      //     counterEl.textContent = `1/${realTotalSlides}`;
      //   },
      //   resize: function () {
      //     applyOffset(this);
      //   },
      //   slideChange: function () {
      //     const currentSlide = this.realIndex + 1;
      //     counterEl.textContent = `${currentSlide}/${realTotalSlides}`;
      //   }
      // }
    });

    function applyOffset(swiperInstance) {
      const offset = getDynamicOffset();

      if (window.innerWidth >= 991) {
        swiperInstance.params.slidesOffsetBefore = offset;
        if (rtyElement) {
          rtyElement.style.marginLeft = `${offset}px`;
        }
      } else {
        swiperInstance.params.slidesOffsetBefore = 15;
        if (rtyElement) {
          rtyElement.style.marginLeft = '15px';
        }
      }

      swiperInstance.update();
    }
  }, ['Swiper']);

  whenReady(function() {
    const swiperEl = document.querySelector('.CorusHR-slider .swiper');
    const counterEl = document.querySelector('.CorusHR-slider .testspace');
    const rtyElement = document.querySelector('.CorusHR-slider .rtyElement');

    if (!swiperEl || !counterEl || typeof Swiper === 'undefined') return;

    function getDynamicOffset() {
      const fluid = document.querySelector('.container-fluid');
      const fluidWidth = fluid ? fluid.clientWidth : window.innerWidth;
      const container = document.querySelector('.container');

      if (!container) return 0;

      const totalGap = fluidWidth - container.clientWidth;
      const offset = totalGap / 2;

      return offset > 0 ? offset : 0;
    }

    const realTotalSlides = swiperEl.querySelectorAll('.CorusHR-slider .swiper-slide').length;

    const testimonial_slider = new Swiper(swiperEl, {
      spaceBetween: 15,
      loop: true,
      speed: 800,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: '.CorusHR-slider .testimonial-button-next',
        prevEl: '.CorusHR-slider .testimonial-button-prev',
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 3 },
        991: { slidesPerView: 4 },
        1300: { slidesPerView: 4 },
        1700: { slidesPerView: 4 },
      },
      // on: {
      //   init: function () {
      //     applyOffset(this);
      //     counterEl.textContent = `1/${realTotalSlides}`;
      //   },
      //   resize: function () {
      //     applyOffset(this);
      //   },
      //   slideChange: function () {
      //     const currentSlide = this.realIndex + 1;
      //     counterEl.textContent = `${currentSlide}/${realTotalSlides}`;
      //   }
      // }
    });

    function applyOffset(swiperInstance) {
      const offset = getDynamicOffset();

      if (window.innerWidth >= 991) {
        swiperInstance.params.slidesOffsetBefore = offset;
        if (rtyElement) {
          rtyElement.style.marginLeft = `${offset}px`;
        }
      } else {
        swiperInstance.params.slidesOffsetBefore = 15;
        if (rtyElement) {
          rtyElement.style.marginLeft = '15px';
        }
      }

      swiperInstance.update();
    }
  }, ['Swiper']);

  whenReady(function() {
    const swiperEl = document.querySelector('.industries2 .swiper');
    const counterEl = document.querySelector('.industries2 .testspace');

    if (!swiperEl || !counterEl || typeof Swiper === 'undefined') return;

    const realTotalSlides = swiperEl.querySelectorAll('.swiper-slide').length;

    const testimonial_slider = new Swiper(swiperEl, {
      spaceBetween: 20,
      loop: true,
      speed: 800,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: '.industries2 .testimonial-button-next',
        prevEl: '.industries2 .testimonial-button-prev',
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        450: { slidesPerView: 1.3 },
        768: { slidesPerView: 3 },
        991: { slidesPerView: 4 },
        1300: { slidesPerView: 4 },
        1700: { slidesPerView: 4 },
      },
      // on: {
      //   init: function () {
      //     counterEl.textContent = `1/${realTotalSlides}`;
      //   },
      //   slideChange: function () {
      //     const currentSlide = this.realIndex + 1;
      //     counterEl.textContent = `${currentSlide}/${realTotalSlides}`;
      //   }
      // }
    });
  }, ['Swiper']);

  whenReady(function() {
    const swiperEl = document.querySelector('.epicsecslide .swiper');
    const counterEl = document.querySelector('.epicsecslide .testspace');
    const rtyElement = document.querySelector('.epicsecslide .rtyElement');

    if (!swiperEl || !counterEl || typeof Swiper === 'undefined') return;

    function getDynamicOffset() {
      const fluid = document.querySelector('.container-fluid');
      const fluidWidth = fluid ? fluid.clientWidth : window.innerWidth;
      const container = document.querySelector('.container');

      if (!container) return 0;

      const totalGap = fluidWidth - container.clientWidth;
      const offset = totalGap / 2;

      return offset > 0 ? offset : 0;
    }

    const realTotalSlides = swiperEl.querySelectorAll('.epicsecslide .swiper-slide').length;

    const testimonial_slider = new Swiper(swiperEl, {
      spaceBetween: 15,
      loop: true,
      speed: 800,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: '.epicsecslide .testimonial-button-next',
        prevEl: '.epicsecslide .testimonial-button-prev',
      },
      breakpoints: {
        0: { slidesPerView: 1.3 },
        768: { slidesPerView: 3 },
        991: { slidesPerView: 3 },
        1300: { slidesPerView: 4 },
        1700: { slidesPerView: 5.8 },
      },
      // on: {
      //   init: function () {
      //     applyOffset(this);
      //     counterEl.textContent = `1/${realTotalSlides}`;
      //   },
      //   resize: function () {
      //     applyOffset(this);
      //   },
      //   slideChange: function () {
      //     const currentSlide = this.realIndex + 1;
      //     counterEl.textContent = `${currentSlide}/${realTotalSlides}`;
      //   }
      // }
    });

    function applyOffset(swiperInstance) {
      const offset = getDynamicOffset();

      if (window.innerWidth >= 991) {
        swiperInstance.params.slidesOffsetBefore = offset;
        if (rtyElement) {
          rtyElement.style.marginLeft = `${offset}px`;
        }
      } else {
        swiperInstance.params.slidesOffsetBefore = 15;
        if (rtyElement) {
          rtyElement.style.marginLeft = '15px';
        }
      }

      swiperInstance.update();
    }
  }, ['Swiper']);

  whenReady(function() {
    const swiperEl = document.querySelector('.mobiletesti5 .swiper');
    const counterEl = document.querySelector('.mobiletesti5 .testspace');
    const rtyElement = document.querySelector('.mobiletesti5 .rtyElement');

    if (!swiperEl || !counterEl || typeof Swiper === 'undefined') return;

    function getDynamicOffset() {
      const fluid = document.querySelector('.container-fluid');
      const fluidWidth = fluid ? fluid.clientWidth : window.innerWidth;
      const container = document.querySelector('.container');

      if (!container) return 0;

      const totalGap = fluidWidth - container.clientWidth;
      const offset = totalGap / 2;

      return offset > 0 ? offset : 0;
    }

    const realTotalSlides = swiperEl.querySelectorAll('.mobiletesti5 .swiper-slide').length;

    const testimonial_slider = new Swiper(swiperEl, {
      spaceBetween: 15,
      loop: true,
      speed: 800,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: '.mobiletesti5 .testimonial-button-next',
        prevEl: '.mobiletesti5 .testimonial-button-prev',
      },
      breakpoints: {
        0: { slidesPerView: 1.3 },
        768: { slidesPerView: 3 },
        991: { slidesPerView: 3 },
        1300: { slidesPerView: 4 },
        1700: { slidesPerView: 5 },
      },
      // on: {
      //   init: function () {
      //     applyOffset(this);
      //     counterEl.textContent = `1/${realTotalSlides}`;
      //   },
      //   resize: function () {
      //     applyOffset(this);
      //   },
      //   slideChange: function () {
      //     const currentSlide = this.realIndex + 1;
      //     counterEl.textContent = `${currentSlide}/${realTotalSlides}`;
      //   }
      // }
    });

    function applyOffset(swiperInstance) {
      const offset = getDynamicOffset();

      if (window.innerWidth >= 991) {
        swiperInstance.params.slidesOffsetBefore = offset;
        if (rtyElement) {
          rtyElement.style.marginLeft = `${offset}px`;
        }
      } else {
        swiperInstance.params.slidesOffsetBefore = 15;
        if (rtyElement) {
          rtyElement.style.marginLeft = '15px';
        }
      }

      swiperInstance.update();
    }
  }, ['Swiper']);

  whenReady(function() {
    const swiperEl = document.querySelector('.msds .swiper');
    const counterEl = document.querySelector('.msds .testspace');
    const rtyElement = document.querySelector('.msds .rtyElement');

    if (!swiperEl || !counterEl || typeof Swiper === 'undefined') return;

    function getDynamicOffset() {
      const fluid = document.querySelector('.container-fluid');
      const fluidWidth = fluid ? fluid.clientWidth : window.innerWidth;
      const container = document.querySelector('.container');

      if (!container) return 15;

      const totalGap = fluidWidth - container.clientWidth;
      const offset = totalGap / 2;

      return offset > 0 ? offset : 15;
    }

    const realTotalSlides = swiperEl.querySelectorAll('.swiper-slide').length;

    const testimonial_slider = new Swiper(swiperEl, {
      spaceBetween: 15,
      loop: true,
      speed: 800,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: '.msds .testimonial-button-next',
        prevEl: '.msds .testimonial-button-prev',
      },
      breakpoints: {
        0: { slidesPerView: 1.3 },
        768: { slidesPerView: 2 },
        991: { slidesPerView: 3 },
        1300: { slidesPerView: 4 },
        1700: {
          slidesPerView: 5,
          autoplay: false
        },
      },
      // on: {
      //   init: function () {
      //     applyOffset(this);
      //     counterEl.textContent = `1/${realTotalSlides}`;
      //   },
      //   resize: function () {
      //     applyOffset(this);
      //   },
      //   slideChange: function () {
      //     const currentSlide = this.realIndex + 1;
      //     counterEl.textContent = `${currentSlide}/${realTotalSlides}`;
      //   }
      // }
    });

    function applyOffset(swiperInstance) {
      const offset = getDynamicOffset();

      if (window.innerWidth >= 991) {
        swiperInstance.params.slidesOffsetBefore = offset;
        if (rtyElement) {
          rtyElement.style.marginLeft = `${offset}px`;
        }
      } else {
        swiperInstance.params.slidesOffsetBefore = 15;
        if (rtyElement) {
          rtyElement.style.marginLeft = '15px';
        }
      }

      swiperInstance.update();
    }
  }, ['Swiper']);

  whenReady(function() {
    const swiperEl = document.querySelector('.dew .swiper');
    const counterEl = document.querySelector('.dew .testspace');
    const rtyElement = document.querySelector('.dew .rtyElement');

    if (!swiperEl || !counterEl || typeof Swiper === 'undefined') return;

    function getDynamicOffset() {
      const fluid = document.querySelector('.container-fluid');
      const fluidWidth = fluid ? fluid.clientWidth : window.innerWidth;
      const container = document.querySelector('.container');

      if (!container) return 0;

      const totalGap = fluidWidth - container.clientWidth;
      const offset = totalGap / 2;

      return offset > 0 ? offset : 0;
    }

    const realTotalSlides = swiperEl.querySelectorAll('.dew .swiper-slide').length;

    const testimonial_slider = new Swiper(swiperEl, {
      spaceBetween: 15,
      loop: true,
      speed: 800,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: '.dew .testimonial-button-next',
        prevEl: '.dew .testimonial-button-prev',
      },
      breakpoints: {
        0: { slidesPerView: 1.3 },
        768: { slidesPerView: 3 },
        991: { slidesPerView: 3 },
        1300: { slidesPerView: 4 },
        1700: { slidesPerView: 5 },
      },
      // on: {
      //   init: function () {
      //     applyOffset(this);
      //     counterEl.textContent = `1/${realTotalSlides}`;
      //   },
      //   resize: function () {
      //     applyOffset(this);
      //   },
      //   slideChange: function () {
      //     const currentSlide = this.realIndex + 1;
      //     counterEl.textContent = `${currentSlide}/${realTotalSlides}`;
      //   }
      // }
    });

    function applyOffset(swiperInstance) {
      const offset = getDynamicOffset();

      if (window.innerWidth >= 991) {
        swiperInstance.params.slidesOffsetBefore = offset;
        if (rtyElement) {
          rtyElement.style.marginLeft = `${offset}px`;
        }
      } else {
        swiperInstance.params.slidesOffsetBefore = 15;
        if (rtyElement) {
          rtyElement.style.marginLeft = '15px';
        }
      }

      swiperInstance.update();
    }
  }, ['Swiper']);

  whenReady(function() {
    const swiperEl = document.querySelector('.sap .swiper');
    const counterEl = document.querySelector('.sap .testspace');

    if (!swiperEl || !counterEl || typeof Swiper === 'undefined') return;

    const realTotalSlides = swiperEl.querySelectorAll('.sap .swiper-slide').length;

    const testimonial_slider = new Swiper(swiperEl, {
      spaceBetween: 15,
      loop: true,
      speed: 3000,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: '.sap .testimonial-button-next',
        prevEl: '.sap .testimonial-button-prev',
      },
      breakpoints: {
        0: { slidesPerView: 1.3 },
        768: { slidesPerView: 3 },
        991: { slidesPerView: 3 },
        1300: { slidesPerView: 4 },
        1700: {
          slidesPerView: 5,
          autoplay: false
        },
      },
      // on: {
      //   init: function () {
      //     counterEl.textContent = `1/${realTotalSlides}`;
      //   },
      //   slideChange: function () {
      //     const currentSlide = this.realIndex + 1;
      //     counterEl.textContent = `${currentSlide}/${realTotalSlides}`;
      //   }
      // }
    });
  }, ['Swiper']);

  whenReady(function() {
    const sliderContainer = document.querySelector('.testimonial-slider-009');
    const swiperEl = sliderContainer ? sliderContainer.querySelector('.swiper') : null;
    const counterEl = sliderContainer ? sliderContainer.querySelector('.testspace') : null;

    if (!swiperEl || !counterEl || typeof Swiper === 'undefined') return;

    const totalSlides = swiperEl.querySelectorAll('.swiper-slide').length;

    const slider009 = new Swiper(swiperEl, {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      speed: 800,
      navigation: {
        nextEl: '.testimonial-slider-009 .testimonial-button-next',
        prevEl: '.testimonial-slider-009 .testimonial-button-prev',
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1300: { slidesPerView: 4 },
        1700: { slidesPerView: 5 }
      },
      // on: {
      //   init: function () {
      //     counterEl.textContent = `1/${totalSlides}`;
      //   },
      //   slideChange: function () {
      //     const currentSlide = this.realIndex + 1;
      //     counterEl.textContent = `${currentSlide}/${totalSlides}`;
      //   }
      // }
    });
  }, ['Swiper']);

  whenReady(function() {
    const sliderContainer = document.querySelector('.testimonial-slider-0009');
    const swiperEl = sliderContainer ? sliderContainer.querySelector('.swiper') : null;
    const counterEl = sliderContainer ? sliderContainer.querySelector('.testspace') : null;

    if (!swiperEl || !counterEl || typeof Swiper === 'undefined') return;

    const totalSlides = swiperEl.querySelectorAll('.swiper-slide').length;

    const slider0009 = new Swiper(swiperEl, {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      speed: 800,
      navigation: {
        nextEl: '.testimonial-slider-0009 .testimonial-button-next',
        prevEl: '.testimonial-slider-0009 .testimonial-button-prev',
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 2.5 },
        1300: { slidesPerView: 3 },
        1700: { slidesPerView: 4 }
      },
      // on: {
      //   init: function () {
      //     counterEl.textContent = `1/${totalSlides}`;
      //   },
      //   slideChange: function () {
      //     const currentSlide = this.realIndex + 1;
      //     counterEl.textContent = `${currentSlide}/${totalSlides}`;
      //   }
      // }
    });
  }, ['Swiper']);

  // --- More jQuery-dependent code ---
  // Make initialization functions globally available for re-initialization on route changes

  // Function to initialize YouTube Background Video
  window.initYTVideo = function() {
    if (typeof window.$ === 'undefined' || !window.$.fn) return;
    var $ = window.$;
    if ($('#herovideo').length && typeof $.fn.YTPlayer !== 'undefined') {
      try {
        // Destroy existing instance if it exists
        var existingPlayer = $('#herovideo').data('YTPlayer');
        if (existingPlayer && existingPlayer.destroy) {
          existingPlayer.destroy();
        }
      var myPlayer = $("#herovideo").YTPlayer();
      } catch (e) {
        console.error('Error initializing YouTube video:', e);
      }
    }
  };
  
  // Function to initialize Counter - Standalone Implementation
  window.initCounter = function() {
    console.log('🔢 [initCounter] Starting counter initialization...');
    
    var counters = document.querySelectorAll('.counter');
    
    console.log(`🔢 [initCounter] Found ${counters.length} counter elements`);
    
    if (counters.length === 0) {
      console.log('ℹ️ [initCounter] No counter elements found on this page');
      return;
    }
    
    // Pure JavaScript counter animation (no jQuery/waypoints dependency)
    function animateCounter(element) {
      // Skip if already animated
      if (element.hasAttribute('data-counted')) {
        console.log('🔢 [initCounter] Counter already animated, skipping');
        return;
      }
      
      // Get target from data-target attribute or text content
      var target = parseInt(element.getAttribute('data-target') || element.textContent);
      if (isNaN(target)) {
        console.warn('⚠️ [initCounter] Invalid counter value:', element.textContent);
        return;
      }
      
      console.log(`🔢 [initCounter] Animating counter to ${target}`);
      
      var current = 0;
      var increment = target / 100; // 100 steps
      var duration = 2000; // 2 seconds
      var stepTime = duration / 100;
      
      element.setAttribute('data-counted', 'true');
      element.textContent = '0';
      
      var timer = setInterval(function() {
        current += increment;
        if (current >= target) {
          element.textContent = target;
          clearInterval(timer);
          console.log(`✅ [initCounter] Counter animated to ${target}`);
        } else {
          element.textContent = Math.floor(current);
        }
      }, stepTime);
    }
    
    // Use Intersection Observer to trigger animation when in viewport
    if ('IntersectionObserver' in window) {
      var observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
      };
      
      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            console.log('🔢 [initCounter] Counter entered viewport');
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);
      
      counters.forEach(function(counter) {
        observer.observe(counter);
      });
      
      console.log('✅ [initCounter] Intersection Observer initialized');
    } else {
      // Fallback for browsers without Intersection Observer
      console.log('🔢 [initCounter] Using fallback (no Intersection Observer)');
      counters.forEach(function(counter) {
        animateCounter(counter);
      });
    }
    
    // Try jQuery method as backup if available
    if (typeof window.$ !== 'undefined' && window.$.fn && typeof window.$.fn.counterUp !== 'undefined') {
      console.log('🔢 [initCounter] Also trying jQuery counterUp as backup...');
      try {
        window.$('.counter').counterUp({ delay: 10, time: 2000 });
      } catch (e) {
        console.log('ℹ️ [initCounter] jQuery counterUp failed, using pure JS version');
      }
    }
  };

  // Function to initialize Image Reveal Animation
  window.initImageReveal = function() {
    if ($('.reveal').length && typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      try {
      gsap.registerPlugin(ScrollTrigger);
        // Kill existing ScrollTriggers for reveal containers
        ScrollTrigger.getAll().forEach(function(trigger) {
          if (trigger.vars && trigger.vars.trigger && trigger.vars.trigger.classList && trigger.vars.trigger.classList.contains('reveal')) {
            trigger.kill();
          }
        });
        
      let revealContainers = document.querySelectorAll(".reveal");
      revealContainers.forEach((container) => {
        let image = container.querySelector("img");
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            toggleActions: "play none none none"
          }
        });
        tl.set(container, {
          autoAlpha: 1
        });
        tl.from(container, 1, {
          xPercent: -100,
          ease: Power2.out
        });
        tl.from(image, 1, {
          xPercent: 100,
          scale: 1,
          delay: -1,
          ease: Power2.out
        });
      });
      } catch (e) {
        console.error('Error initializing image reveal:', e);
    }
    }
  };

  // Function to initialize header scroll behavior (only once)
  if (!window._headerScrollInitialized) {
    window.addEventListener("scroll", function () {
      const header = document.querySelector(".main-header");
      if (header) {
        header.classList.toggle("is-sticky", window.scrollY > 50);
      }
    });
    window._headerScrollInitialized = true;
  }

    // Function to generate grid overlay
    window.initGridOverlay = function() {
    function generateGrid() {
      const overlay = document.querySelector('.grid-overlay');
      const section = document.querySelector('.grid-section');
      
      if (!overlay || !section) return;
      
      overlay.innerHTML = '';
      const cols = Math.ceil(section.offsetWidth / 120);
      const rows = Math.ceil(section.offsetHeight / 150);
      for (let i = 0; i < cols * rows; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        overlay.appendChild(cell);
      }
    }

    if (document.querySelector('.grid-overlay') && document.querySelector('.grid-section')) {
      generateGrid();
        // Remove old resize listener if exists
        if (window._gridResizeHandler) {
          window.removeEventListener('resize', window._gridResizeHandler);
        }
        window._gridResizeHandler = generateGrid;
        window.addEventListener('resize', window._gridResizeHandler);
    }

    const gridOverlay = document.querySelector(".grid-overlay");
      if (gridOverlay && !document.querySelector('.grid-section')) {
      const cols = Math.ceil(window.innerWidth / 120);
      const section = document.querySelector(".grid-section");
      if (section) {
        const rows = Math.ceil(section.offsetHeight / 120);
        const total = cols * rows;

          gridOverlay.innerHTML = '';
        for (let i = 0; i < total; i++) {
          const cell = document.createElement("div");
          cell.className = "cell";
          gridOverlay.appendChild(cell);
        }
      }
    }
    };

    // Wait for owlCarousel plugin to be available
    function initSkewCarousel() {
      console.log('🦉 [initSkewCarousel] Starting initialization...');
      
      if (typeof window === 'undefined' || typeof window.$ === 'undefined' || !window.$.fn) {
        console.warn('⚠️ [initSkewCarousel] jQuery not ready, retrying...');
        setTimeout(initSkewCarousel, 100);
        return;
      }
      
      var $ = window.$;
      
      if (typeof $.fn.owlCarousel === 'undefined') {
        console.warn('⚠️ [initSkewCarousel] OwlCarousel plugin not loaded, retrying...');
        setTimeout(initSkewCarousel, 100);
        return;
      }
      
      var carouselElements = $('.skew-carousel');
      console.log(`🦉 [initSkewCarousel] Found ${carouselElements.length} .skew-carousel elements`);
      
      if (carouselElements.length > 0) {
        try {
          // Destroy existing instance if it exists
          var existingCarousel = carouselElements.data('owl.carousel');
          if (existingCarousel) {
            console.log('🦉 [initSkewCarousel] Destroying existing carousel instance...');
            carouselElements.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
            carouselElements.find('.owl-stage-outer').children().unwrap();
          }
          
          console.log('🦉 [initSkewCarousel] Initializing carousel...');
          carouselElements.owlCarousel({
            loop: false,
            margin: 10,
            items: 5,
            dots: false,
            nav: false,
            autoplay: true,
            autoplayHoverPause: true,
            mouseDrag: false,
            touchDrag: false,
            pullDrag: false
          });
          console.log('✅ [initSkewCarousel] Carousel initialized successfully!');
        } catch (e) {
          console.error('❌ [initSkewCarousel] Error initializing skew-carousel:', e);
        }
      } else {
        console.log('ℹ️ [initSkewCarousel] No .skew-carousel elements found on page');
      }
    }
    
    // Make globally available for route change re-initialization
    window.initSkewCarousel = initSkewCarousel;
    console.log('✅ window.initSkewCarousel registered:', typeof window.initSkewCarousel);

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        setTimeout(initSkewCarousel, 500);
      });
    } else {
      setTimeout(initSkewCarousel, 500);
    }
    
    if (typeof window !== 'undefined') {
      window.addEventListener('owlCarouselLoaded', function() {
        console.log('🦉 [initSkewCarousel] owlCarouselLoaded event received');
        setTimeout(initSkewCarousel, 100);
      });
      
      // Also try when page becomes visible (for client-side navigation)
      if (document.visibilityState === 'visible') {
        setTimeout(initSkewCarousel, 800);
      }
      document.addEventListener('visibilitychange', function() {
        if (document.visibilityState === 'visible') {
          setTimeout(initSkewCarousel, 200);
        }
      });
    }

    function initSkewCarousel1() {
      console.log('🦉 [initSkewCarousel1] Starting initialization...');
      
      if (typeof window === 'undefined' || typeof window.$ === 'undefined' || !window.$.fn) {
        console.warn('⚠️ [initSkewCarousel1] jQuery not ready, retrying...');
        setTimeout(initSkewCarousel1, 100);
        return;
      }
      
      var $ = window.$;
      
      if (typeof $.fn.owlCarousel === 'undefined') {
        console.warn('⚠️ [initSkewCarousel1] OwlCarousel plugin not loaded, retrying...');
        setTimeout(initSkewCarousel1, 100);
        return;
      }
      
          let owl1 = $('.skew-carousel1');
      console.log(`🦉 [initSkewCarousel1] Found ${owl1.length} .skew-carousel1 elements`);
      
      if (owl1.length > 0) {
        try {
          // Destroy existing instance if it exists
          var existingCarousel = owl1.data('owl.carousel');
          if (existingCarousel) {
            console.log('🦉 [initSkewCarousel1] Destroying existing carousel instance...');
            owl1.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
            owl1.find('.owl-stage-outer').children().unwrap();
          }

          console.log('🦉 [initSkewCarousel1] Initializing carousel...');
          owl1.owlCarousel({
            loop: false,
            margin: 15,
            dots: false,
            nav: false,
            autoplay: true,
            mouseDrag: true,
            touchDrag: true,
            responsive: {
              0: { items: 1 },
              480: { items: 2 },
              768: { items: 3 },
              1024: { items: 5 }
            }
          });

          function setActiveSlide(event) {
            let owl = event.relatedTarget;
            let current = owl.current();
            let $items = owl.$stage.children();

            $items.removeClass("active");
            $items.eq(current).addClass("active");
          }

          owl1.on("changed.owl.carousel", setActiveSlide);
          owl1.on("translated.owl.carousel", setActiveSlide);
          
          console.log('✅ [initSkewCarousel1] Carousel initialized successfully!');
        } catch (e) {
          console.error('❌ [initSkewCarousel1] Error initializing skew-carousel1:', e);
        }
      } else {
        console.log('ℹ️ [initSkewCarousel1] No .skew-carousel1 elements found on page');
      }
    }
    
    // Make globally available for route change re-initialization
    window.initSkewCarousel1 = initSkewCarousel1;
    console.log('✅ window.initSkewCarousel1 registered:', typeof window.initSkewCarousel1);

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        setTimeout(initSkewCarousel1, 500);
      });
    } else {
      setTimeout(initSkewCarousel1, 500);
    }
    
    if (typeof window !== 'undefined') {
      window.addEventListener('owlCarouselLoaded', function() {
        console.log('🦉 [initSkewCarousel1] owlCarouselLoaded event received');
        setTimeout(initSkewCarousel1, 100);
      });
      
      // Also try when page becomes visible (for client-side navigation)
      if (document.visibilityState === 'visible') {
        setTimeout(initSkewCarousel1, 850);
      }
      document.addEventListener('visibilitychange', function() {
        if (document.visibilityState === 'visible') {
          setTimeout(initSkewCarousel1, 250);
        }
      });
    }

    // Function to initialize Text Effect Animations
    window.initTextAnimations = function() {
      if (typeof window.$ === 'undefined' || !window.$.fn) return;
      var $ = window.$;
      
      // Text Animation Style 1
    if ($('.text-anime-style-1').length && typeof SplitText !== 'undefined' && typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        try {
          gsap.registerPlugin(ScrollTrigger);
      let staggerAmount = 0.05,
        delayValue = 0.5,
        animatedTextElements = document.querySelectorAll('.text-anime-style-1');

      animatedTextElements.forEach((element) => {
            // Clean up existing animations
            if (element._splitText) {
              element._splitText.revert();
            }
            ScrollTrigger.getAll().forEach(function(trigger) {
              if (trigger.vars && trigger.vars.trigger === element) {
                trigger.kill();
              }
            });
            
        let animationSplitText = new SplitText(element, { type: "chars, words" });
            element._splitText = animationSplitText;
        gsap.from(animationSplitText.words, {
          duration: 1,
          delay: delayValue,
          x: 20,
          autoAlpha: 0,
          stagger: staggerAmount,
          scrollTrigger: { trigger: element, start: "top 85%" },
        });
      });
        } catch (e) {
          console.error('Error initializing text-anime-style-1:', e);
        }
    }

      // Text Animation Style 2
    if ($('.text-anime-style-2').length && typeof SplitText !== 'undefined' && typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        try {
          gsap.registerPlugin(ScrollTrigger);
      let staggerAmount = 0.03,
        translateXValue = 20,
        delayValue = 0.1,
        easeType = "power2.out",
        animatedTextElements = document.querySelectorAll('.text-anime-style-2');

      animatedTextElements.forEach((element) => {
            // Clean up existing animations
            if (element._splitText) {
              element._splitText.revert();
            }
            ScrollTrigger.getAll().forEach(function(trigger) {
              if (trigger.vars && trigger.vars.trigger === element) {
                trigger.kill();
              }
            });
            
        let animationSplitText = new SplitText(element, { type: "chars, words" });
            element._splitText = animationSplitText;
        gsap.from(animationSplitText.chars, {
          duration: 1,
          delay: delayValue,
          x: translateXValue,
          autoAlpha: 0,
          stagger: staggerAmount,
          ease: easeType,
          scrollTrigger: { trigger: element, start: "top 85%" },
        });
      });
        } catch (e) {
          console.error('Error initializing text-anime-style-2:', e);
        }
    }

      // Text Animation Style 3
    if ($('.text-anime-style-3').length && typeof SplitText !== 'undefined' && typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        try {
          gsap.registerPlugin(ScrollTrigger);
      let animatedTextElements = document.querySelectorAll('.text-anime-style-3');

      animatedTextElements.forEach((element) => {
            // Clean up existing animations
        if (element.animation) {
          element.animation.progress(1).kill();
            }
            if (element.split) {
          element.split.revert();
        }
            ScrollTrigger.getAll().forEach(function(trigger) {
              if (trigger.vars && trigger.vars.trigger === element) {
                trigger.kill();
              }
            });

        element.split = new SplitText(element, {
          type: "lines,words,chars",
          linesClass: "split-line",
        });
        gsap.set(element, { perspective: 400 });

        gsap.set(element.split.chars, {
          opacity: 0,
          x: "50",
        });

        element.animation = gsap.to(element.split.chars, {
          scrollTrigger: { trigger: element, start: "top 90%" },
          x: "0",
          y: "0",
          rotateX: "0",
          opacity: 1,
          duration: 1,
          ease: Back.easeOut,
          stagger: 0.02,
        });
      });
        } catch (e) {
          console.error('Error initializing text-anime-style-3:', e);
        }
      }
    };

    // Function to initialize Parallaxie
    window.initParallaxie = function() {
      if (typeof window.$ === 'undefined' || !window.$.fn) return;
      var $ = window.$;
      var $window = $(window);
    var $parallaxie = $('.parallaxie');
    if ($parallaxie.length && ($window.width() > 991)) {
      if ($window.width() > 768 && typeof $.fn.parallaxie !== 'undefined') {
          try {
        $parallaxie.parallaxie({
          speed: 0.55,
          offset: 0,
        });
          } catch (e) {
            console.error('Error initializing parallaxie:', e);
      }
    }
      }
    };

    // Function to initialize Magnific Popup for gallery
    window.initMagnificGallery = function() {
      if (typeof window.$ === 'undefined' || !window.$.fn) return;
      var $ = window.$;
    if ($('.gallery-items').length && typeof $.fn.magnificPopup !== 'undefined') {
        try {
          // Destroy existing instances
          if ($.magnificPopup && $.magnificPopup.instance) {
            $.magnificPopup.instance.close();
          }
      $('.gallery-items').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom',
        image: {
          verticalFit: true,
        },
        gallery: {
          enabled: true
        },
        zoom: {
          enabled: true,
          duration: 300,
          opener: function (element) {
            return element.find('img');
          }
        }
      });
        } catch (e) {
          console.error('Error initializing magnific gallery:', e);
    }
      }
    };

    /* Contact form validation */
    var $contactform = $("#contactForm");
    if ($contactform.length && typeof $.fn.validator !== 'undefined') {
      $contactform.validator({ focus: false }).on("submit", function (event) {
        if (!event.isDefaultPrevented()) {
          event.preventDefault();
          submitForm();
        }
      });
    }

    function submitForm() {
      $.ajax({
        type: "POST",
        url: "/api/contact",
        data: $contactform.serialize(),
        success: function (text) {
          if (text == "success") {
            formSuccess();
          } else {
            submitMSG(false, text);
          }
        }
      });
    }

    function formSuccess() {
      $contactform[0].reset();
      submitMSG(true, "Message Sent Successfully!")
    }

    function submitMSG(valid, msg) {
      if (valid) {
        var msgClasses = "h4 text-success";
      } else {
        var msgClasses = "h4 text-danger";
      }
      $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
    }

    // Function to initialize Isotope filtering
    window.initIsotope = function() {
      if (typeof window.$ === 'undefined' || !window.$.fn) return;
      var $ = window.$;
      var $window = $(window);
      if ($(".project-item-boxes").length && typeof $.fn.isotope !== 'undefined') {
        try {
          // Destroy existing isotope instance
          var $menuitem = $(".project-item-boxes");
          if ($menuitem.data('isotope')) {
            $menuitem.isotope('destroy');
          }
          
          $menuitem.isotope({
          itemSelector: ".project-item-box",
          layoutMode: "masonry",
          masonry: {
            columnWidth: 1,
          }
        });

          // Remove old event listeners and add new ones
        var $menudisesnav = $(".our-Project-nav li a");
          $menudisesnav.off('click.isotope').on('click.isotope', function (e) {
          var filterValue = $(this).attr('data-filter');
          $menuitem.isotope({
            filter: filterValue
          });

          $menudisesnav.removeClass("active-btn");
          $(this).addClass("active-btn");
          e.preventDefault();
        });
        $menuitem.isotope({ filter: "*" });
        } catch (e) {
          console.error('Error initializing isotope:', e);
      }
      }
    };

    // Function to initialize WOW.js
    window.initWOW = function() {
    if (typeof WOW !== 'undefined') {
        try {
      new WOW().init();
        } catch (e) {
          console.error('Error initializing WOW:', e);
    }
      }
    };

    // Function to initialize Popup Video
    // NOTE: This function is now handled by /js/popup-video.js
    // Keeping this as a fallback that calls the main function
    window.initPopupVideo = window.initPopupVideo || function() {
      // If popup-video.js is loaded, it will handle initialization
      // This is just a fallback
      if (typeof window.$ === 'undefined' || !window.$.fn) return;
      var $ = window.$;
      if ($('.popup-video').length && typeof $.fn.magnificPopup !== 'undefined') {
        console.warn('Popup Video: Using fallback initialization. Please ensure /js/popup-video.js is loaded.');
        try {
          if ($.magnificPopup && $.magnificPopup.instance) {
            $.magnificPopup.instance.close();
          }
          $('.popup-video').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: true
          });
        } catch (e) {
          console.error('Error initializing popup video:', e);
        }
      }
    };

    // Function to initialize Why Choose us hover effects
    window.initWhyChoose = function() {
      if (typeof window.$ === 'undefined' || !window.$.fn) return;
      var $ = window.$;
    if ($('.why-choose-content').length) {
        try {
      var element = $('.why-choose-content');
      var items = element.find('.why-choose-item');
      if (items.length) {
            // Remove old event listeners
            items.off('mouseenter.whyChoose mouseleave.whyChoose');
        items.on({
          mouseenter: function () {
            if ($(this).hasClass('active')) return;
            items.removeClass('active');
            $(this).addClass('active');
          },
          mouseleave: function () {
            //stuff to do on mouse leave
          }
        });
      }
        } catch (e) {
          console.error('Error initializing why choose:', e);
        }
      }
    };
    
    // Function to initialize Collapsible elements
    window.initCollapsible = function() {
      // Remove old markers to allow re-initialization
      document.querySelectorAll('[data-collapsible-initialized]').forEach(function(el) {
        el.removeAttribute('data-collapsible-initialized');
      });

    var coll = document.getElementsByClassName("collapsible");
      for (var i = 0; i < coll.length; i++) {
        // Skip if already initialized
        if (coll[i].hasAttribute('data-collapsible-initialized')) continue;
        
        coll[i].setAttribute('data-collapsible-initialized', 'true');
        
        // Remove old event listeners by cloning
        var newColl = coll[i].cloneNode(true);
        coll[i].parentNode.replaceChild(newColl, coll[i]);
        
        newColl.addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content) {
          if (content.style.display === "block") {
            content.style.display = "none";
          } else {
            content.style.display = "block";
          }
        }
      });
    }
    };
    
    // Main initialization function that calls all sub-functions
    window.reinitJQueryPlugins = function() {
      window.initYTVideo();
      // Prefer React CounterInit for counters; keep legacy as opt-in
      if (window.__USE_LEGACY_COUNTER__ === true) {
        window.initCounter();
      }
      window.initImageReveal();
      window.initGridOverlay();
      window.initTextAnimations();
      window.initParallaxie();
      window.initMagnificGallery();
      window.initIsotope();
      window.initWOW();
      window.initPopupVideo();
      window.initWhyChoose();
      window.initCollapsible();
      
      // OwlCarousel re-initializations
      if (typeof window.initSkewCarousel === 'function') {
        window.initSkewCarousel();
      }
      if (typeof window.initSkewCarousel1 === 'function') {
        window.initSkewCarousel1();
      }
    };
    
  // Initialize on first load
  whenReady(function() {
      window.reinitJQueryPlugins();
  }, ['jQuery']);

  // --- Additional Search Box Functionality ---
  // Extract into reusable function
  function initSearchBoxFunctionality() {
    console.log('🔄 [function.js] Initializing search box functionality...');
    
    const searchBoxes = document.querySelectorAll('.search-box');
    const searchBtns = document.querySelectorAll('.btn-search');
    const searchInputs = document.querySelectorAll('.input-search');

    console.log(`🔍 [function.js] Found ${searchBoxes.length} search boxes, ${searchBtns.length} search buttons`);

    // Handle generic search box toggle
    searchBtns.forEach((searchBtn, index) => {
      // Find the closest search box parent
      const searchBox = searchBtn.closest('.search-box') || searchBoxes[index];
      const searchInput = searchBox ? searchBox.querySelector('.input-search') : searchInputs[index];

      if (!searchBox) {
        console.warn(`⚠️ [function.js] No search box found for button ${index}`);
        return;
      }

      const handleSearchToggle = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log(`🔍 [function.js] Toggling search box ${index}`);
        
        searchBox.classList.toggle('active');
        
        if (searchBox.classList.contains('active')) {
          console.log('✅ [function.js] Search box opened');
          // Focus on input if it exists
          if (searchInput) {
            setTimeout(() => {
              searchInput.focus();
            }, 100);
          } else {
            // Try to find input in the search box
            const inputInBox = searchBox.querySelector('input');
            if (inputInBox) {
              setTimeout(() => {
                inputInBox.focus();
              }, 100);
            }
          }
        } else {
          console.log('❌ [function.js] Search box closed');
        }
      };

      searchBtn.addEventListener('click', handleSearchToggle, false);
    });

    // Handle animated SVG link hover effects
    document.querySelectorAll('.animated-svg-link12').forEach((btn, index) => {
      const handleMouseEnter = () => {
        btn.classList.add('btn-style-3');
        console.log(`🎨 [function.js] Added btn-style-3 to link ${index}`);
      };
      
      const handleMouseLeave = () => {
        btn.classList.remove('btn-style-3');
        console.log(`🎨 [function.js] Removed btn-style-3 from link ${index}`);
      };
      
      btn.addEventListener('mouseenter', handleMouseEnter);
      btn.addEventListener('mouseleave', handleMouseLeave);
    });

    console.log('✅ [function.js] Search box functionality initialized');
  }

  // Register globally for re-initialization
  window.initSearchBoxFunctionality = initSearchBoxFunctionality;
  window.reinitSearchBoxFunctionality = initSearchBoxFunctionality;

  // Initialize on page load
  whenReady(function() {
    initSearchBoxFunctionality();
  });

  // Function to re-initialize all Swiper carousels
  function reinitAllSwipers() {
    if (typeof Swiper === 'undefined') {
      // Wait a bit for Swiper to load
      setTimeout(reinitAllSwipers, 100);
      return;
    }
    
    // Destroy all existing Swiper instances
    document.querySelectorAll('.swiper').forEach(function(el) {
      try {
        if (el.swiper && el.swiper.destroy) {
          el.swiper.destroy(true, true);
        }
      } catch (e) {
        // Ignore errors, element might already be destroyed
      }
      // Clean up
      el.classList.remove('swiper-initialized');
      if (el.swiper) {
        delete el.swiper;
      }
    });
  }
  
  // Comprehensive function to re-initialize all Swipers on route change
  function reinitAllSwipersOnRouteChange() {
    // Wait for Swiper to be available
    if (typeof Swiper === 'undefined') {
      setTimeout(reinitAllSwipersOnRouteChange, 100);
      return;
    }
    
    // Destroy all existing instances first (already done in ScriptReinit, but do it again to be sure)
    document.querySelectorAll('.swiper').forEach(function(el) {
      try {
        if (el.swiper && el.swiper.destroy) {
          el.swiper.destroy(true, true);
        }
      } catch (e) {
        // Ignore
      }
      el.classList.remove('swiper-initialized');
      if (el.swiper) {
        delete el.swiper;
      }
    });
    
    // Re-run all registered initializations after a delay
    setTimeout(function() {
      if (typeof window.rerunSwiperInits === 'function') {
        window.rerunSwiperInits();
      }
    }, 400);
  }
  
  // Function to manually initialize all Swipers that exist on the page
  function manuallyInitAllSwipers() {
    if (typeof Swiper === 'undefined') {
      setTimeout(manuallyInitAllSwipers, 100);
      return;
    }
    
    // Find all .swiper elements that aren't initialized
    document.querySelectorAll('.swiper:not(.swiper-initialized)').forEach(function(swiperEl) {
      // Check if this is a known Swiper type and initialize accordingly
      // This is a fallback for Swipers that might not be in the registry
      const parentClass = swiperEl.closest('[class*="slider"]')?.className || '';
      
      // Only initialize if it's clearly a slider (has slider-related classes)
      if (parentClass.includes('slider') || parentClass.includes('testimonial') || 
          parentClass.includes('overview') || parentClass.includes('hero')) {
        // Don't auto-initialize - let the specific whenReady functions handle it
        // This is just a safety check
      }
    });
  }
  
  // MutationObserver to detect new Swiper elements added to DOM
  function setupSwiperObserver() {
    if (typeof MutationObserver === 'undefined') return;
    
    var observer = new MutationObserver(function(mutations) {
      var shouldReinit = false;
      
      mutations.forEach(function(mutation) {
        mutation.addedNodes.forEach(function(node) {
          if (node.nodeType === 1) { // Element node
            // Check if this node or its children contain Swiper elements
            if (node.classList && node.classList.contains('swiper')) {
              shouldReinit = true;
            } else if (node.querySelector && node.querySelector('.swiper:not(.swiper-initialized)')) {
              shouldReinit = true;
            }
          }
        });
      });
      
      if (shouldReinit) {
        // Debounce: wait a bit then re-initialize
        clearTimeout(window.swiperObserverTimeout);
        window.swiperObserverTimeout = setTimeout(function() {
          if (typeof window.rerunSwiperInits === 'function') {
            window.rerunSwiperInits();
          }
        }, 500);
      }
    });
    
    // Observe the document body for changes
    if (document.body) {
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    }
  }
  
  // Setup observer when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupSwiperObserver);
  } else {
    setupSwiperObserver();
  }
  
  // Make globally available
  window.reinitAllSwipers = reinitAllSwipers;
  window.reinitAllSwipersOnRouteChange = reinitAllSwipersOnRouteChange;
  window.manuallyInitAllSwipers = manuallyInitAllSwipers;

  // Listen for route changes (triggered by ScriptReinit component)
  window.addEventListener('routeChange', function(event) {
    // Re-initialize code that needs to run on route change
    const pathname = event.detail?.pathname;
    
    // Small delay to ensure DOM is updated
    setTimeout(function() {
      // Re-initialize any code that depends on DOM elements
      // This will be called after Next.js Link navigation
      
      // Re-initialize all jQuery plugins and animations
      if (typeof window.reinitJQueryPlugins === 'function') {
        setTimeout(function() {
          window.reinitJQueryPlugins();
        }, 200);
        
        // Also try after longer delay for slow-loading content
        setTimeout(function() {
          window.reinitJQueryPlugins();
        }, 800);
        
        setTimeout(function() {
          window.reinitJQueryPlugins();
        }, 1500);
      }
      
      // Re-initialize all Swiper carousels
      // This will destroy existing instances and re-run all initializations
      reinitAllSwipersOnRouteChange();
      
      // Also try manual initialization as fallback
      setTimeout(function() {
        if (typeof window.manuallyInitAllSwipers === 'function') {
          window.manuallyInitAllSwipers();
        }
      }, 600);
      
      // Re-initialize OwlCarousel carousels
      if (typeof window.initSkewCarousel === 'function') {
        setTimeout(function() {
          window.initSkewCarousel();
        }, 300);
      }
      
      if (typeof window.initSkewCarousel1 === 'function') {
        setTimeout(function() {
          window.initSkewCarousel1();
        }, 350);
      }
      
      // Re-initialize popovers if needed
      if (window.__USE_LEGACY_POPOVER__) {
        if (typeof bootstrap !== 'undefined' && bootstrap.Popover) {
          document.querySelectorAll('[data-bs-toggle="popover"]').forEach(function(el) {
            try {
              const existingPopover = bootstrap.Popover.getInstance(el);
              if (existingPopover) {
                existingPopover.dispose();
              }
              new bootstrap.Popover(el);
            } catch (e) {
              console.error('Error re-initializing popover:', e);
            }
          });
        }
      }
      
      // Re-initialize WOW animations
      if (typeof WOW !== 'undefined') {
        new WOW().init();
      }
      
      // Re-initialize counters
      if (typeof $ !== 'undefined' && $.fn.counterUp && $('.counter').length && false) {
        $('.counter').counterUp({ delay: 6, time: 3000 });
      }
      
      // Re-initialize magnific popup
      if (typeof $ !== 'undefined' && $.fn.magnificPopup) {
        // Destroy existing instances first
        if ($.magnificPopup && $.magnificPopup.instance) {
          $.magnificPopup.instance.close();
        }
        
        if ($('.gallery-items').length) {
          $('.gallery-items').magnificPopup({
            delegate: 'a',
            type: 'image',
            closeOnContentClick: false,
            closeBtnInside: false,
            mainClass: 'mfp-with-zoom',
            image: {
              verticalFit: true,
            },
            gallery: {
              enabled: true
            },
            zoom: {
              enabled: true,
              duration: 300,
              opener: function (element) {
                return element.find('img');
              }
            }
          });
        }
        
        if ($('.popup-video').length) {
          $('.popup-video').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: true
          });
        }
      }
      
      // Re-initialize Slicknav
      if (typeof $ !== 'undefined' && $.fn.slicknav && $('#menu').length) {
        // Destroy existing slicknav
        var slicknavInstance = $('#menu').data('slicknav');
        if (slicknavInstance) {
          $('#menu').slicknav('destroy');
        }
        $('#menu').slicknav({
          label: '',
          prependTo: '.responsive-menu'
        });
      }
      
      // Re-initialize typed
      if (typeof $ !== 'undefined' && $.fn.typed && $('.typed-title').length) {
        $('.typed-title').each(function() {
          var $this = $(this);
          if ($this.data('typed')) {
            $this.typed('destroy');
          }
        });
        $('.typed-title').typed({
          stringsElement: $('.typing-title'),
          backDelay: 2000,
          typeSpeed: 0,
          loop: true
        });
      }
      
      // Re-initialize parallaxie
      if (typeof $ !== 'undefined' && $.fn.parallaxie && $('.parallaxie').length && $(window).width() && $(window).width() > 991) {
        $('.parallaxie').parallaxie({
          speed: 0.55,
          offset: 0,
        });
      }
      
      // Re-initialize isotope
      if (typeof $ !== 'undefined' && $.fn.isotope && $(".project-item-boxes").length) {
        var $menuitem = $(".project-item-boxes");
        if ($menuitem.data('isotope')) {
          $menuitem.isotope('destroy');
        }
        $menuitem.isotope({
          itemSelector: ".project-item-box",
          layoutMode: "masonry",
          masonry: {
            columnWidth: 1,
          }
        });
      }
      
      // Re-initialize grid overlay
      function generateGrid() {
        const overlay = document.querySelector('.grid-overlay');
        const section = document.querySelector('.grid-section');
        
        if (!overlay || !section) return;
        
        overlay.innerHTML = '';
        const cols = Math.ceil(section.offsetWidth / 120);
        const rows = Math.ceil(section.offsetHeight / 150);
        for (let i = 0; i < cols * rows; i++) {
          const cell = document.createElement('div');
          cell.classList.add('cell');
          overlay.appendChild(cell);
        }
      }
      
      if (document.querySelector('.grid-overlay') && document.querySelector('.grid-section')) {
        generateGrid();
      }
    }, 200);
  });
  
  // Mark that function.js has fully loaded and all functions are available
  window.functionJsLoaded = true;
  console.log('✅✅✅ function.js IIFE COMPLETE!');
  
  // Dispatch event to notify other components
  if (typeof window !== 'undefined' && window.dispatchEvent) {
    window.dispatchEvent(new Event('functionJsReady'));
  }

})();

// ABSOLUTE FALLBACK: Register carousel functions OUTSIDE IIFE to ensure they're available
console.log('🔥 Registering OwlCarousel functions as FINAL fallback...');
if (typeof window !== 'undefined') {
  // If functions weren't registered inside IIFE, create simple versions
  if (typeof window.initSkewCarousel !== 'function') {
    console.warn('⚠️ initSkewCarousel was not registered in IIFE, creating fallback');
    window.initSkewCarousel = function() {
      console.log('🦉 [FALLBACK] initSkewCarousel called');
      if (typeof $ !== 'undefined' && $.fn && $.fn.owlCarousel) {
        var $carousel = $('.skew-carousel');
        if ($carousel.length > 0) {
          console.log('🦉 [FALLBACK] Found', $carousel.length, 'carousels');
          $carousel.each(function() {
            var $this = $(this);
            if ($this.data('owl.carousel')) {
              $this.trigger('destroy.owl.carousel').removeClass('owl-loaded');
              $this.find('.owl-stage-outer').children().unwrap();
            }
            $this.owlCarousel({
              loop: false,
              margin: 10,
              items: 5,
              dots: false,
              nav: false,
              autoplay: true,
              autoplayHoverPause: true,
              mouseDrag: false,
              touchDrag: false,
              pullDrag: false
            });
          });
        }
      } else {
        console.warn('⚠️ jQuery or OwlCarousel not available');
      }
    };
  }
  
  if (typeof window.initSkewCarousel1 !== 'function') {
    console.warn('⚠️ initSkewCarousel1 was not registered in IIFE, creating fallback');
    window.initSkewCarousel1 = function() {
      console.log('🦉 [FALLBACK] initSkewCarousel1 called');
      if (typeof $ !== 'undefined' && $.fn && $.fn.owlCarousel) {
        var $carousel = $('.skew-carousel1');
        if ($carousel.length > 0) {
          console.log('🦉 [FALLBACK] Found', $carousel.length, 'carousel1 elements');
          $carousel.each(function() {
            var $this = $(this);
            if ($this.data('owl.carousel')) {
              $this.trigger('destroy.owl.carousel').removeClass('owl-loaded');
              $this.find('.owl-stage-outer').children().unwrap();
            }
            $this.owlCarousel({
              loop: false,
              margin: 15,
              dots: false,
              nav: false,
              autoplay: true,
              mouseDrag: true,
              touchDrag: true,
              responsive: {
                0: { items: 1.5 },
                480: { items: 2 },
                768: { items: 3 },
                1024: { items: 5 }
              }
            });
            
            $this.on('changed.owl.carousel translated.owl.carousel', function(event) {
              var owl = event.relatedTarget;
              var current = owl.current();
              var $items = owl.$stage.children();
              $items.removeClass('active');
              $items.eq(current).addClass('active');
            });
          });
        }
      } else {
        console.warn('⚠️ jQuery or OwlCarousel not available');
      }
    };
  }
  
  console.log('✅ Final check - Functions registered:', {
    initSkewCarousel: typeof window.initSkewCarousel,
    initSkewCarousel1: typeof window.initSkewCarousel1
  });
  
  window.functionJsLoaded = true;
}

console.log('🔥🔥🔥 END OF function.js FILE 🔥🔥🔥');


$(document).ready(function() {
	$('.popup-youtube').magnificPopup({
    type: 'iframe'
  });
});
