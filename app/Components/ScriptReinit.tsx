'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

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
            if ($('.counter').length && $.fn.counterUp) {
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

        // Re-initialize function.js code
        // Trigger a custom event that function.js can listen to
        if (window.dispatchEvent) {
          window.dispatchEvent(new CustomEvent('routeChange', { detail: { pathname } }));
        }
        
        // Re-initialize read more toggles
        // This is a dedicated function to ensure read more toggles work on route changes
        const reinitReadMoreToggles = () => {
          // Remove ALL initialization markers first to allow complete re-initialization
          document.querySelectorAll('[data-readmore-initialized]').forEach((el) => {
            el.removeAttribute('data-readmore-initialized');
          });
          document.querySelectorAll('[data-has-listeners]').forEach((el) => {
            el.removeAttribute('data-has-listeners');
          });
          
          // Re-initialize read more toggles with multiple attempts
          // This ensures it works even if DOM takes time to update
          if (typeof (window as any).initReadMoreToggles === 'function') {
            (window as any).initReadMoreToggles();
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
        
        // Re-initialize OwlCarousel carousels
        if (typeof (window as any).initSkewCarousel === 'function') {
          setTimeout(() => {
            (window as any).initSkewCarousel();
          }, 600);
        }
        
        if (typeof (window as any).initSkewCarousel1 === 'function') {
          setTimeout(() => {
            (window as any).initSkewCarousel1();
          }, 650);
        }
        
        // Final re-initialization of read more toggles after all other scripts
        // This ensures read more toggles are initialized even if other scripts take time
        setTimeout(() => {
          reinitReadMoreToggles();
        }, 2000);
      };

      // Small delay to ensure DOM is updated
      setTimeout(init, 100);
    };

    // Re-initialize on pathname change
    reinitScripts();
  }, [pathname]);

  return null;
}
