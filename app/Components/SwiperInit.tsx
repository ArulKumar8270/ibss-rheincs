'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function SwiperInit() {
  const pathname = usePathname();

  useEffect(() => {
    // Wait for all scripts to be loaded
    const initSwiper = () => {
      if (typeof window === 'undefined') return;
      
      // Check if Swiper is loaded
      if (typeof (window as any).Swiper === 'undefined') {
        setTimeout(initSwiper, 100);
        return;
      }
      
      const Swiper = (window as any).Swiper;
      
      // Destroy all existing Swiper instances first
      document.querySelectorAll('.swiper').forEach((el: any) => {
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
      
      console.log('Initializing Swiper carousels...', pathname);
      
      // Function to initialize specific Swipers
      const initializeSwipers = () => {
        // Initialize testimonial-slider1
        const testimonialSlider1El = document.querySelector('.testimonial-slider1 .swiper');
        if (testimonialSlider1El && !(testimonialSlider1El as any).swiper) {
          try {
            new Swiper(testimonialSlider1El, {
              slidesPerView: 1.3,
              spaceBetween: 10,
              loop: false,
              speed: 800,
              breakpoints: {
                768: {
                  slidesPerView: 1.5,
                  spaceBetween: 15
                },
                900: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 2.8,
                }
              },
              navigation: {
                nextEl: '.testimonial-slider1 .testimonial-button-next',
                prevEl: '.testimonial-slider1 .testimonial-button-prev',
              },
            });
            console.log('testimonial-slider1 initialized');
          } catch (e) {
            console.error('Error initializing testimonial-slider1:', e);
          }
        }
        
        // Initialize testimonial-slider-awards
        const awardsSliderEl = document.querySelector('.testimonial-slider-awards .swiper');
        if (awardsSliderEl && !(awardsSliderEl as any).swiper) {
          try {
            new Swiper(awardsSliderEl, {
              slidesPerView: 2,
              spaceBetween: 15,
              loop: false,
              speed: 800,
              breakpoints: {
                768: {
                  slidesPerView: 3,
                  spaceBetween: 15
                },
                991: {
                  slidesPerView: 9,
                  spaceBetween: 15
                }
              },
              navigation: {
                nextEl: '.testimonial-slider-awards .testimonial-button-next',
                prevEl: '.testimonial-slider-awards .testimonial-button-prev',
              },
            });
            console.log('testimonial-slider-awards initialized');
          } catch (e) {
            console.error('Error initializing awards slider:', e);
          }
        }
        
        // Initialize any other Swiper carousels on the page that aren't initialized
        document.querySelectorAll('.swiper:not(.swiper-initialized)').forEach((el) => {
          try {
            // Skip if already has a swiper instance
            if ((el as any).swiper) return;
            
            new Swiper(el as HTMLElement, {
              slidesPerView: 1,
              spaceBetween: 10,
              loop: false,
              speed: 800,
              breakpoints: {
                768: {
                  slidesPerView: 2
                },
                991: {
                  slidesPerView: 3
                }
              }
            });
            console.log('Initialized swiper:', el.className);
          } catch (e) {
            console.error('Error initializing swiper:', el, e);
          }
        });
      };
      
      // Small delay to ensure DOM is fully updated
      setTimeout(initializeSwipers, 200);
      
      // Also try again after a longer delay in case elements load slowly
      setTimeout(initializeSwipers, 600);
    };
    
    // Wait for DOM to be ready and scripts to load
    const initWithDelay = () => {
      // Use requestAnimationFrame to ensure DOM is painted
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTimeout(initSwiper, 300);
        });
      });
    };
    
    // Listen for custom reinit event from ScriptReinit
    const handleSwiperReinit = () => {
      // Wait a bit for DOM to be ready
      setTimeout(() => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            initSwiper();
          });
        });
      }, 200);
    };
    
    window.addEventListener('swiperReinit', handleSwiperReinit);
    
    // Run immediately on pathname change (route navigation)
    // Use multiple attempts to catch Swipers that load at different times
    setTimeout(() => {
      initWithDelay();
      
      // Second attempt after longer delay
      setTimeout(() => {
        initSwiper();
      }, 800);
      
      // Third attempt for slow-loading content
      setTimeout(() => {
        initSwiper();
      }, 1500);
    }, 100);
    
    // Also listen for load event for initial page load
    const handleLoad = () => {
      setTimeout(initSwiper, 500);
    };
    
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }
    
    // Cleanup
    return () => {
      window.removeEventListener('load', handleLoad);
      window.removeEventListener('swiperReinit', handleSwiperReinit);
    };
  }, [pathname]); // Re-run on pathname change
  
  return null;
}

