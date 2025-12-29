'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Standalone Read More Toggle Implementation
// This is completely self-contained and doesn't depend on function.js
const initReadMoreTogglesStandalone = () => {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;
  
  
  // Remove ALL initialization markers to allow complete re-initialization
  document.querySelectorAll('[data-readmore-init]').forEach((el) => {
    el.removeAttribute('data-readmore-init');
    el.removeAttribute('data-index');
  });
  
  const toggleButtons = document.querySelectorAll('[id="toggleReadMore"]');
  const allMoreTexts = document.querySelectorAll('[id="more"]');
  
  if (toggleButtons.length === 0) {
    return;
  }
  
  
  toggleButtons.forEach((originalBtn: Element, index: number) => {
    // Skip if already initialized (check after we remove markers above)
    if ((originalBtn as HTMLElement).hasAttribute('data-readmore-init')) {
      return;
    }
    
    // Clone the button to remove ALL old event listeners
    const toggleBtn = originalBtn.cloneNode(true) as HTMLElement;
    if (originalBtn.parentNode) {
      originalBtn.parentNode.replaceChild(toggleBtn, originalBtn);
    }
    
    // Mark as initialized
    toggleBtn.setAttribute('data-readmore-init', 'true');
    toggleBtn.setAttribute('data-index', index.toString());
    
    // Find the associated #more element using multiple strategies
    let moreText: HTMLElement | null = null;
    const parent = toggleBtn.parentElement;
    
    // Strategy 1: Look for parent's previous sibling
    if (parent && parent.previousElementSibling) {
      const prevSibling = parent.previousElementSibling as HTMLElement;
      if (prevSibling.id === 'more') {
        moreText = prevSibling;
      } else {
        const moreInSibling = prevSibling.querySelector('[id="more"]') as HTMLElement;
        if (moreInSibling) {
          moreText = moreInSibling;
        }
      }
    }
    
    // Strategy 2: Walk backwards through siblings
    if (!moreText && parent) {
      let currentSibling = parent.previousElementSibling;
      while (currentSibling && !moreText) {
        if ((currentSibling as HTMLElement).id === 'more') {
          moreText = currentSibling as HTMLElement;
          break;
        }
        const moreInSibling = currentSibling.querySelector('[id="more"]') as HTMLElement;
        if (moreInSibling) {
          moreText = moreInSibling;
          break;
        }
        currentSibling = currentSibling.previousElementSibling;
      }
    }
    
    // Strategy 3: Search in parent container with index pairing
    if (!moreText && parent) {
      let container = parent.parentElement;
      while (container && !moreText) {
        const allMoreInContainer = Array.from(container.querySelectorAll('[id="more"]')) as HTMLElement[];
        const allTogglesInContainer = Array.from(container.querySelectorAll('[id="toggleReadMore"]')) as HTMLElement[];
        
        if (allMoreInContainer.length > 0) {
          if (allMoreInContainer.length === allTogglesInContainer.length) {
            const toggleIndex = allTogglesInContainer.indexOf(toggleBtn);
            if (toggleIndex >= 0 && allMoreInContainer[toggleIndex]) {
              moreText = allMoreInContainer[toggleIndex];
              break;
            }
          }
          // Fallback: use index-based pairing
          const toggleIndex = allTogglesInContainer.indexOf(toggleBtn);
          if (toggleIndex >= 0 && toggleIndex < allMoreInContainer.length) {
            moreText = allMoreInContainer[toggleIndex];
          } else if (allMoreInContainer[0]) {
            moreText = allMoreInContainer[0];
          }
        }
        if (moreText) break;
        container = container.parentElement;
      }
    }
    
    // Strategy 4: Global fallback - pair by document order
    if (!moreText && allMoreTexts.length > 0) {
      const allToggleElements = Array.from(document.querySelectorAll('[id="toggleReadMore"]')) as HTMLElement[];
      const toggleIndex = allToggleElements.indexOf(toggleBtn);
      if (toggleIndex >= 0 && toggleIndex < allMoreTexts.length) {
        moreText = allMoreTexts[toggleIndex] as HTMLElement;
      } else if (allMoreTexts[0]) {
        moreText = allMoreTexts[0] as HTMLElement;
      }
    }
    
    if (!moreText) {
      console.warn(`❌ [Standalone] No #more element found for button ${index}`);
      return;
    }
    
    // Get label and icon elements
    const btnLabel = toggleBtn.querySelector('.label') as HTMLElement;
    const iconContainer = toggleBtn.querySelector('.svg-container') as HTMLElement;
    
    if (!btnLabel || !iconContainer) {
      console.warn(`❌ [Standalone] Button ${index} missing .label or .svg-container`);
      return;
    }
    
    // Create click handler
    const handleClick = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      
      // Toggle the hidden class
      const wasHidden = moreText!.classList.contains('hidden');
      moreText!.classList.toggle('hidden');
      const isNowHidden = moreText!.classList.contains('hidden');
      
      // Update label
      if (btnLabel) {
        btnLabel.textContent = isNowHidden ? "Read More" : "Read Less";
      }
      
      // Update icon
      if (iconContainer) {
        if (isNowHidden) {
          iconContainer.classList.remove('rotate-up');
        } else {
          iconContainer.classList.add('rotate-up');
        }
      }
      
      // Update ARIA
      toggleBtn.setAttribute('aria-expanded', isNowHidden ? 'false' : 'true');
      
    };
    
    // Add multiple event listeners to ensure it works
    toggleBtn.onclick = handleClick;
    toggleBtn.addEventListener('click', handleClick, true); // Capture phase
    toggleBtn.addEventListener('click', handleClick, false); // Bubble phase
    
    // Make clickable
    toggleBtn.style.cssText = `
      cursor: pointer !important;
      pointer-events: auto !important;
      user-select: none !important;
      position: relative !important;
      z-index: 1000 !important;
      display: inline-block !important;
    `;
    
    // Make all children non-interactive
    const allChildren = toggleBtn.querySelectorAll('*');
    allChildren.forEach((child: Element) => {
      (child as HTMLElement).style.pointerEvents = 'none';
      (child as HTMLElement).style.cursor = 'pointer';
    });
    
    // Accessibility
    toggleBtn.setAttribute('role', 'button');
    toggleBtn.setAttribute('tabindex', '0');
    toggleBtn.setAttribute('aria-expanded', moreText.classList.contains('hidden') ? 'false' : 'true');
    toggleBtn.setAttribute('aria-controls', moreText.id || `more-${index}`);
    
    // Keyboard support
    toggleBtn.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleClick(e);
      }
    });
    
  });
  
};

// Make it globally available so it can be called from anywhere
if (typeof window !== 'undefined') {
  (window as any).initReadMoreTogglesStandalone = initReadMoreTogglesStandalone;
}

export default function ScriptReinit() {
  const pathname = usePathname();
  

  useEffect(() => {
    // Re-initialize scripts and jQuery-dependent code on route change
    const reinitScripts = () => {
      if (typeof window === 'undefined') return;

      // Wait for DOM to be ready
      const init = () => {
        // Re-trigger function.js initialization if it exists
        if (typeof (window as any).jQuery !== 'undefined') {
          const $ = (window as any).jQuery;
          
          // Re-initialize jQuery-dependent plugins
          try {
            // Re-initialize Slicknav if it exists
            if ($.fn.slicknav && $('#menu').length) {
              $('#menu').slicknav({
                label: '',
                prependTo: '.responsive-menu'
              });
            }

            // Re-initialize WOW.js
            if (typeof (window as any).WOW !== 'undefined') {
              new (window as any).WOW().init();
            }

            // Re-initialize counter
            if (false && $('.counter').length && $.fn.counterUp) {
              $('.counter').counterUp({ delay: 6, time: 3000 });
            }

            // Re-initialize magnific popup
            if ($.fn.magnificPopup) {
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
                    opener: function (element: any) {
                      return element.find('img');
                    }
                  }
                });
              }

              // Use the dedicated popup-video.js function if available
              if ($('.popup-video').length && typeof window.initPopupVideo === 'function') {
                window.initPopupVideo();
              } else if ($('.popup-video').length) {
                // Fallback initialization
                $('.popup-video').magnificPopup({
                  type: 'iframe',
                  mainClass: 'mfp-fade',
                  removalDelay: 160,
                  preloader: false,
                  fixedContentPos: true
                });
              }
            }

            // Re-initialize parallaxie
            if ($.fn.parallaxie && $('.parallaxie').length && $(window).width() && $(window).width()! > 991) {
              $('.parallaxie').parallaxie({
                speed: 0.55,
                offset: 0,
              });
            }

            // Re-initialize isotope
            if ($.fn.isotope && $(".project-item-boxes").length) {
              var $menuitem = $(".project-item-boxes").isotope({
                itemSelector: ".project-item-box",
                layoutMode: "masonry",
                masonry: {
                  columnWidth: 1,
                }
              });
            }

            // Re-initialize typed
            if ($.fn.typed && $('.typed-title').length) {
              $('.typed-title').typed({
                stringsElement: $('.typing-title'),
                backDelay: 2000,
                typeSpeed: 0,
                loop: true
              });
            }
          } catch (error) {
            console.error('Error re-initializing jQuery plugins:', error);
          }
        }

        // Re-initialize mobile menu using standalone function
        // Mobile menu is now handled by MobileMenuInit component, but we can also call it here as backup
        const reinitMobileMenu = () => {
          if (typeof (window as any).initMobileMenuStandalone === 'function') {
            try {
              (window as any).initMobileMenuStandalone();
              return true;
            } catch (error) {
              console.error('❌ Error re-initializing mobile menu:', error);
              return false;
            }
          } else if (typeof (window as any).reinitMobileMenu === 'function') {
            try {
              (window as any).reinitMobileMenu();
              return true;
            } catch (error) {
              console.error('❌ Error re-initializing mobile menu:', error);
              return false;
            }
          }
          return false;
        };

        // Re-initialize mobile search using standalone function
        // Mobile search is now handled by MobileSearchInit component, but we can also call it here as backup
        const reinitMobileSearch = () => {
          if (typeof (window as any).initMobileSearchStandalone === 'function') {
            try {
              (window as any).initMobileSearchStandalone();
              return true;
            } catch (error) {
              console.error('❌ Error re-initializing mobile search:', error);
              return false;
            }
          } else if (typeof (window as any).reinitMobileSearch === 'function') {
            try {
              (window as any).reinitMobileSearch();
              return true;
            } catch (error) {
              console.error('❌ Error re-initializing mobile search:', error);
              return false;
            }
          }
          return false;
        };

        // Re-initialize generic search box functionality
        const reinitSearchBox = () => {
          if (typeof (window as any).initSearchBoxStandalone === 'function') {
            try {
              (window as any).initSearchBoxStandalone();
              return true;
            } catch (error) {
              console.error('❌ Error re-initializing search box:', error);
              return false;
            }
          } else if (typeof (window as any).reinitSearchBox === 'function') {
            try {
              (window as any).reinitSearchBox();
              return true;
            } catch (error) {
              console.error('❌ Error re-initializing search box:', error);
              return false;
            }
          }
          return false;
        };

        // Re-initialize mobile menu, search, and generic search box with multiple attempts (backup to components)
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            reinitMobileMenu();
            reinitMobileSearch();
            reinitSearchBox();
            setTimeout(() => {
              reinitMobileMenu();
              reinitMobileSearch();
              reinitSearchBox();
            }, 300);
            setTimeout(() => {
              reinitMobileMenu();
              reinitMobileSearch();
              reinitSearchBox();
            }, 800);
          });
        });

        // Re-initialize function.js code
        // Trigger a custom event that function.js can listen to
        if (window.dispatchEvent) {
          window.dispatchEvent(new CustomEvent('routeChange', { detail: { pathname } }));
        }
        
        // Re-initialize read more toggles - use standalone implementation
        const reinitReadMoreToggles = () => {
          // Use the standalone implementation (always works, doesn't depend on function.js)
          initReadMoreTogglesStandalone();
          
          // Also try the function.js version if available (as backup)
          if (typeof (window as any).initReadMoreToggles === 'function') {
            try {
              (window as any).initReadMoreToggles();
            } catch (error) {
              console.error('❌ Error calling function.js initReadMoreToggles:', error);
            }
          }
        };
        
        // Call immediately to clean up markers
        reinitReadMoreToggles();
        
        // Use requestAnimationFrame to ensure DOM is ready, then re-initialize
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            // First attempt after short delay
            setTimeout(() => {
              reinitReadMoreToggles();
            }, 100);
            
            // Second attempt after longer delay for slow-loading content
            setTimeout(() => {
              reinitReadMoreToggles();
            }, 400);
            
            // Third attempt after even longer delay
            setTimeout(() => {
              reinitReadMoreToggles();
            }, 800);
            
            // Fourth attempt for very slow-loading content
            setTimeout(() => {
              reinitReadMoreToggles();
            }, 1500);
          });
        });

        // Destroy all existing Swiper instances first
        if (typeof (window as any).Swiper !== 'undefined') {
          document.querySelectorAll('.swiper').forEach((el: any) => {
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
        }
        
        // Re-initialize all Swiper carousels after DOM is ready
        // Use multiple attempts to ensure all Swipers are initialized
        const reinitSwipers = () => {
          // First, trigger function.js Swiper re-initialization
          if (typeof (window as any).reinitAllSwipersOnRouteChange === 'function') {
            (window as any).reinitAllSwipersOnRouteChange();
          }
          
          // Also directly check and re-run Swiper inits as fallback
          if (typeof (window as any).rerunSwiperInits === 'function') {
            (window as any).rerunSwiperInits();
          }
          
          // Trigger SwiperInit component re-initialization via custom event
          if (window.dispatchEvent) {
            window.dispatchEvent(new CustomEvent('swiperReinit', { detail: { pathname } }));
          }
        };
        
        // Wait longer to ensure Next.js has finished rendering
        setTimeout(() => {
          // Use double RAF to ensure DOM is fully painted
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              reinitSwipers();
              
              // Second attempt after a delay
              setTimeout(() => {
                reinitSwipers();
              }, 500);
              
              // Third attempt after longer delay (for slow-loading content)
              setTimeout(() => {
                reinitSwipers();
              }, 1000);
            });
          });
        }, 500);
        
        // Re-initialize all jQuery plugins and animations
        if (typeof (window as any).reinitJQueryPlugins === 'function') {
          setTimeout(() => {
            (window as any).reinitJQueryPlugins();
          }, 300);
          
          // Also try after longer delays for slow-loading content
          setTimeout(() => {
            (window as any).reinitJQueryPlugins();
          }, 700);
          
          setTimeout(() => {
            (window as any).reinitJQueryPlugins();
          }, 1200);
        }
        
        // Re-initialize looping animation
        if (typeof (window as any).initLoopingAnimation === 'function') {
          setTimeout(() => {
            (window as any).initLoopingAnimation();
          }, 500);
          
          // Also try after longer delay in case element loads slowly
          setTimeout(() => {
            (window as any).initLoopingAnimation();
          }, 1000);
        }
        
        // Note: Counter initialization is now handled by CounterInit.tsx component
        // Note: OwlCarousel initialization is now handled by OwlCarouselInit.tsx component
        // No need to initialize them here anymore
        
        // Final re-initialization of read more toggles after all other scripts
        // This ensures read more toggles are initialized even if other scripts take time
        setTimeout(() => {
          reinitReadMoreToggles();
        }, 2000);
        
        // Additional fallback: Try one more time after a longer delay
        setTimeout(() => {
          reinitReadMoreToggles();
        }, 3000);
        
        // Ultimate fallback: Dispatch custom event if function still not found
        setTimeout(() => {
          if (typeof (window as any).initReadMoreToggles !== 'function') {
            console.warn('⚠️ initReadMoreToggles still not found after 3 seconds, dispatching custom event');
            if (window.dispatchEvent) {
              window.dispatchEvent(new CustomEvent('reinitReadMoreToggles', { 
                detail: { fallback: true } 
              }));
            }
          }
        }, 3500);
      };

      // Small delay to ensure DOM is updated
      setTimeout(init, 100);
    };

    // Re-initialize on pathname change
    reinitScripts();
    
    // Also initialize read more toggles immediately on mount
    // This ensures they work even before route changes
    if (typeof window !== 'undefined') {
      // Try multiple times to catch dynamically loaded content
      setTimeout(() => initReadMoreTogglesStandalone(), 100);
      setTimeout(() => initReadMoreTogglesStandalone(), 500);
      setTimeout(() => initReadMoreTogglesStandalone(), 1000);
      setTimeout(() => initReadMoreTogglesStandalone(), 2000);
    }
  }, [pathname]);

  return null;
}
