'use client';

import { useEffect } from 'react';

export default function SwiperInit() {
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
      
      console.log('Initializing Swiper carousels...');
      
      // Initialize testimonial-slider1
      const testimonialSlider1El = document.querySelector('.testimonial-slider1 .swiper');
      if (testimonialSlider1El) {
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
      if (awardsSliderEl) {
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
      
      // Initialize any other Swiper carousels on the page
      document.querySelectorAll('.swiper:not(.swiper-initialized)').forEach((el) => {
        try {
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
    
    // Wait a bit for scripts to load
    setTimeout(initSwiper, 1000);
    
    // Also listen for script load events
    window.addEventListener('load', () => {
      setTimeout(initSwiper, 500);
    });
  }, []);
  
  return null;
}

