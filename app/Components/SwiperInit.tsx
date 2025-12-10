'use client';
import React from 'react';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function SwiperInit() {
  const pathname = usePathname();

  useEffect(() => {
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
      
      console.log('🔄 Initializing all Swiper carousels...', pathname);
      
      // Helper function for dynamic offset calculation
      const getDynamicOffset = () => {
        const fluid = document.querySelector('.container-fluid');
        const fluidWidth = fluid ? fluid.clientWidth : window.innerWidth;
        const container = document.querySelector('.container');
        
        if (!container) return 0;
        
        const totalGap = fluidWidth - container.clientWidth;
        const offset = totalGap / 2;
        
        return offset > 0 ? offset : 0;
      };
      
      const applyOffset = (swiperInstance: any, rtyElement: HTMLElement | null) => {
        const offset = getDynamicOffset();
        
        if (window.innerWidth >= 991) {
          swiperInstance.params.slidesOffsetBefore = offset;
          if (rtyElement) {
            (rtyElement as HTMLElement).style.marginLeft = `${offset}px`;
          }
        } else {
          swiperInstance.params.slidesOffsetBefore = 15;
          if (rtyElement) {
            (rtyElement as HTMLElement).style.marginLeft = '15px';
          }
        }
        
        swiperInstance.update();
      };
      
      // Function to initialize all Swipers
      const initializeSwipers = () => {
        
        // 1. testimonial-slider
        const testimonialSliderEl = document.querySelector('.testimonial-slider .swiper');
        const testimonialCounterEl = document.querySelector('.testimonial-slider .testspace');
        const testimonialRtyEl = document.querySelector('.testimonial-slider .rtyElement');
        
        if (testimonialSliderEl && testimonialCounterEl && !(testimonialSliderEl as any).swiper) {
          try {
            const realTotalSlides = testimonialSliderEl.querySelectorAll('.swiper-wrapper .swiper-slide').length;
            const swiperInstance = new Swiper(testimonialSliderEl, {
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
              on: {
                init: function (this: any) {
                  applyOffset(this, testimonialRtyEl as HTMLElement);
                  if (testimonialCounterEl) testimonialCounterEl.textContent = `1/${realTotalSlides}`;
                },
                resize: function (this: any) {
                  applyOffset(this, testimonialRtyEl as HTMLElement);
                },
                slideChange: function (this: any) {
                  const currentSlide = this.realIndex + 1;
                  if (testimonialCounterEl) testimonialCounterEl.textContent = `${currentSlide}/${realTotalSlides}`;
                }
              }
            });
            console.log('✓ testimonial-slider initialized');
          } catch (e) {
            console.error('Error initializing testimonial-slider:', e);
          }
        }
        
        // 2. testimonial-slider-marquee
        const marqueeSliderEl = document.querySelector('.testimonial-slider-marquee .swiper');
        const marqueeCounterEl = document.querySelector('.testimonial-slider-marquee .testspace');
        
        if (marqueeSliderEl && marqueeCounterEl && !(marqueeSliderEl as any).swiper) {
          try {
            const realTotalSlides = marqueeSliderEl.querySelectorAll('.swiper-wrapper .swiper-slide').length;
            new Swiper(marqueeSliderEl, {
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
              on: {
                init: function (this: any) {
                  if (marqueeCounterEl) marqueeCounterEl.textContent = `1/${realTotalSlides}`;
                },
                slideChange: function (this: any) {
                  const currentSlide1 = this.realIndex + 1;
                  if (marqueeCounterEl) marqueeCounterEl.textContent = `${currentSlide1}/${realTotalSlides}`;
                }
              }
            });
            console.log('✓ testimonial-slider-marquee initialized');
          } catch (e) {
            console.error('Error initializing marquee slider:', e);
          }
        }
        
        // 3. testimonial-slider-08
        const slider08El = document.querySelector('.testimonial-slider-08 .swiper');
        const slider08CounterEl = document.querySelector('.testimonial-slider-08 .testspace');
        
        if (slider08El && slider08CounterEl && !(slider08El as any).swiper) {
          try {
            const realTotalSlides = slider08El.querySelectorAll('.swiper-wrapper .swiper-slide').length;
            new Swiper(slider08El, {
              slidesPerView: 3,
              spaceBetween: 30,
              loop: true,
              speed: 800,
              autoplay: false,
              navigation: {
                nextEl: '.testimonial-slider-08 .testimonial-button-next',
                prevEl: '.testimonial-slider-08 .testimonial-button-prev',
              },
              breakpoints: {
                0: { slidesPerView: 1.1 },
                768: { slidesPerView: 3 },
                991: { slidesPerView: 3 },
              },
              on: {
                init: function (this: any) {
                  if (slider08CounterEl) slider08CounterEl.textContent = `1/${realTotalSlides}`;
                },
                slideChange: function (this: any) {
                  const currentSlide = this.realIndex + 1;
                  if (slider08CounterEl) slider08CounterEl.textContent = `${currentSlide}/${realTotalSlides}`;
                }
              }
            });
            console.log('✓ testimonial-slider-08 initialized');
          } catch (e) {
            console.error('Error initializing slider-08:', e);
          }
        }
        
        // 3.5. testimonial-slider77
        const slider77El = document.querySelector('.testimonial-slider77 .swiper');
        const slider77CounterEl = document.querySelector('.testimonial-slider77 .testspace');
        
        if (slider77El && slider77CounterEl && !(slider77El as any).swiper) {
          try {
            // Count only the actual slides inside .swiper-wrapper (not duplicates)
            const realTotalSlides = slider77El.querySelectorAll('.swiper-wrapper .swiper-slide').length;
            new Swiper(slider77El, {
              slidesPerView: 1,
              spaceBetween: 30,
              loop: true,
              speed: 800,
              autoplay: true,
              navigation: {
                nextEl: '.testimonial-slider77 .testimonial-button-next',
                prevEl: '.testimonial-slider77 .testimonial-button-prev',
              },
              breakpoints: {
                0: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                991: { slidesPerView: 1 },
              },
              on: {
                init: function (this: any) {
                  // Set initial counter
                  if (slider77CounterEl) slider77CounterEl.textContent = `1/${realTotalSlides}`;
                },
                slideChange: function (this: any) {
                  // Show correct current / total (realIndex is correct for loop mode)
                  const currentSlide = this.realIndex + 1;
                  if (slider77CounterEl) slider77CounterEl.textContent = `${currentSlide}/${realTotalSlides}`;
                }
              }
            });
            console.log('✓ testimonial-slider77 initialized');
          } catch (e) {
            console.error('Error initializing slider77:', e);
          }
        }
        
        // 4. testimonial-sliders1
        const sliders1El = document.querySelector('.testimonial-sliders1 .swiper');
        const sliders1CounterEl = document.querySelector('.testimonial-sliders1 .testspace');
        
        if (sliders1El && sliders1CounterEl && !(sliders1El as any).swiper) {
          try {
            const realTotalSlides = sliders1El.querySelectorAll('.swiper-wrapper .swiper-slide').length;
            new Swiper(sliders1El, {
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
              on: {
                init: function (this: any) {
                  if (sliders1CounterEl) sliders1CounterEl.textContent = `1/${realTotalSlides}`;
                },
                slideChange: function (this: any) {
                  const currentSlide = this.realIndex + 1;
                  if (sliders1CounterEl) sliders1CounterEl.textContent = `${currentSlide}/${realTotalSlides}`;
                }
              }
            });
            console.log('✓ testimonial-sliders1 initialized');
          } catch (e) {
            console.error('Error initializing sliders1:', e);
          }
        }
        
        // 5. testslide1
        const testslide1El = document.querySelector('.testslide1 .swiper');
        if (testslide1El && !(testslide1El as any).swiper) {
          try {
            new Swiper(testslide1El, {
              loop: true,
              autoplay: {
                delay: 3000,
                disableOnInteraction: false
              },
              spaceBetween: 20,
              navigation: {
                nextEl: ".testslide1 .testimonial-button-next",
                prevEl: ".testslide1 .testimonial-button-prev",
              },
              breakpoints: {
                0: { slidesPerView: 1.2 },
                480: { slidesPerView: 1.2 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1366: { slidesPerView: 4 }
              }
            });
            console.log('✓ testslide1 initialized');
          } catch (e) {
            console.error('Error initializing testslide1:', e);
          }
        }
        
        // 6. testimonial-slider59
        const slider59El = document.querySelector('.testimonial-slider59 .swiper');
        const slider59CounterEl = document.querySelector('.testimonial-slider59 .testspace');
        
        if (slider59El && slider59CounterEl && !(slider59El as any).swiper) {
          try {
            const realTotalSlides = slider59El.querySelectorAll('.swiper-wrapper .swiper-slide').length;
            new Swiper(slider59El, {
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
              on: {
                init: function (this: any) {
                  if (slider59CounterEl) slider59CounterEl.textContent = `1/${realTotalSlides}`;
                },
                slideChange: function (this: any) {
                  const currentSlide = this.realIndex + 1;
                  if (slider59CounterEl) slider59CounterEl.textContent = `${currentSlide}/${realTotalSlides}`;
                }
              }
            });
            console.log('✓ testimonial-slider59 initialized');
          } catch (e) {
            console.error('Error initializing slider59:', e);
          }
        }
        
        // 7. industries slider
        const industriesEl = document.querySelector('.industries .swiper');
        const industriesCounterEl = document.querySelector('.industries .testspace');
        const industriesRtyEl = document.querySelector('.industries .rtyElement');
        
        if (industriesEl && industriesCounterEl && !(industriesEl as any).swiper) {
          try {
            const realTotalSlides = industriesEl.querySelectorAll('.industries .swiper-slide').length;
            const swiperInstance = new Swiper(industriesEl, {
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
                0: { slidesPerView: 1.3 },
                768: { slidesPerView: 3 },
                991: { slidesPerView: 4 },
                1300: { slidesPerView: 5 },
                1700: { slidesPerView: 5.8 },
              },
              on: {
                init: function (this: any) {
                  applyOffset(this, industriesRtyEl as HTMLElement);
                  if (industriesCounterEl) industriesCounterEl.textContent = `1/${realTotalSlides}`;
                },
                resize: function (this: any) {
                  applyOffset(this, industriesRtyEl as HTMLElement);
                },
                slideChange: function (this: any) {
                  const currentSlide = this.realIndex + 1;
                  if (industriesCounterEl) industriesCounterEl.textContent = `${currentSlide}/${realTotalSlides}`;
                }
              }
            });
            console.log('✓ industries slider initialized');
          } catch (e) {
            console.error('Error initializing industries:', e);
          }
        }
        
        // 8. testimonial-slider1 (detailed version)
        const slider1El = document.querySelector('.testimonial-slider1 .swiper');
        const slider1CounterEl = document.querySelector('.testimonial-slider1 .testspace');
        
        if (slider1El && slider1CounterEl && !(slider1El as any).swiper) {
          try {
            const realTotalSlides = slider1El.querySelectorAll('.swiper-wrapper .swiper-slide').length;
            const swiperInstance = new Swiper(slider1El, {
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
                0: { slidesPerView: 1, spaceBetween: 10 },
                500: { slidesPerView: 1.3, spaceBetween: 20 },
                768: { slidesPerView: 1.3, spaceBetween: 20 },
                900: { slidesPerView: 2 },
                1200: { slidesPerView: 2.5 },
                1500: { slidesPerView: 2.8 },
                1600: { slidesPerView: 2.8 }
              },
              on: {
                init: function (this: any) {
                  const offset = getDynamicOffset();
                  if (window.innerWidth >= 1200) {
                    this.params.slidesOffsetBefore = offset;
                  } else {
                    this.params.slidesOffsetBefore = 0;
                  }
                  this.update();
                  if (slider1CounterEl) slider1CounterEl.textContent = `1/${realTotalSlides}`;
                },
                resize: function (this: any) {
                  const offset = getDynamicOffset();
                  if (window.innerWidth >= 1200) {
                    this.params.slidesOffsetBefore = offset;
                  } else {
                    this.params.slidesOffsetBefore = 0;
                  }
                  this.update();
                },
                slideChange: function (this: any) {
                  const currentSlide = this.realIndex + 1;
                  if (slider1CounterEl) slider1CounterEl.textContent = `${currentSlide}/${realTotalSlides}`;
                }
              }
            });
            console.log('✓ testimonial-slider1 initialized');
          } catch (e) {
            console.error('Error initializing slider1:', e);
          }
        }
        
        // 9. testimonial-slider11
        const slider11El = document.querySelector('.testimonial-slider11 .swiper');
        const slider11CounterEl = document.querySelector('.testimonial-slider11 .testspace');
        
        if (slider11El && slider11CounterEl && !(slider11El as any).swiper) {
          try {
            const realTotalSlides = slider11El.querySelectorAll('.swiper-wrapper .swiper-slide').length;
            new Swiper(slider11El, {
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
              on: {
                init: function (this: any) {
                  if (slider11CounterEl) slider11CounterEl.textContent = `1/${realTotalSlides}`;
                },
                slideChange: function (this: any) {
                  const currentSlide = this.realIndex + 1;
                  if (slider11CounterEl) slider11CounterEl.textContent = `${currentSlide}/${realTotalSlides}`;
                }
              }
            });
            console.log('✓ testimonial-slider11 initialized');
          } catch (e) {
            console.error('Error initializing slider11:', e);
          }
        }
        
        // 10. testimonial-slider3
        if (document.querySelector('.testimonial-slider3')) {
          const slider3El = document.querySelector('.testimonial-slider3 .swiper');
          if (slider3El && !(slider3El as any).swiper) {
            try {
              new Swiper(slider3El, {
                slidesPerView: 1.3,
                spaceBetween: 15,
                loop: false,
                speed: 800,
                breakpoints: {
                  420: { slidesPerView: 1.2, spaceBetween: 10 },
                  768: { slidesPerView: 1.5, spaceBetween: 15 },
                },
                autoplay: {
                  delay: 5000,
                  disableOnInteraction: false
                },
                navigation: {
                  nextEl: '.testimonial-slider3 .testimonial-button-next',
                  prevEl: '.testimonial-slider3 .testimonial-button-prev',
                },
                on: {
                  init: function (this: any) {
                    const totalSlides = Array.from(this.slides)
                      .filter((slide: any) => !slide.classList.contains('swiper-slide-duplicate'))
                      .length;
                    this.totalRealSlides = totalSlides;
                    const testspace = document.querySelector('.testspace1');
                    if (testspace) testspace.textContent = `1/${totalSlides}`;
                  },
                  slideChange: function (this: any) {
                    const currentSlide = this.realIndex + 1;
                    const testspace = document.querySelector('.testspace1');
                    if (testspace) testspace.textContent = `${currentSlide}/${this.totalRealSlides}`;
                  }
                }
              });
              console.log('✓ testimonial-slider3 initialized');
            } catch (e) {
              console.error('Error initializing slider3:', e);
            }
          }
        }
        
        // 11. testimonial-slider33
        if (document.querySelector('.testimonial-slider33')) {
          const slider33El = document.querySelector('.testimonial-slider33 .swiper');
          if (slider33El && !(slider33El as any).swiper) {
            try {
              new Swiper(slider33El, {
                slidesPerView: 1.3,
                spaceBetween: 15,
                loop: false,
                speed: 800,
                breakpoints: {
                  420: { slidesPerView: 1.2, spaceBetween: 10 },
                  768: { slidesPerView: 1.5, spaceBetween: 15 },
                },
                autoplay: {
                  delay: 5000,
                  disableOnInteraction: false
                },
                navigation: {
                  nextEl: '.testimonial-slider33 .testimonial-button-next',
                  prevEl: '.testimonial-slider33 .testimonial-button-prev',
                },
                on: {
                  init: function (this: any) {
                    const totalSlides = Array.from(this.slides)
                      .filter((slide: any) => !slide.classList.contains('swiper-slide-duplicate'))
                      .length;
                    this.totalRealSlides = totalSlides;
                    const testspace = document.querySelector('.testspace');
                    if (testspace) testspace.textContent = `1/${totalSlides}`;
                  },
                  slideChange: function (this: any) {
                    const currentSlide = this.realIndex + 1;
                    const testspace = document.querySelector('.testspace');
                    if (testspace) testspace.textContent = `${currentSlide}/${this.totalRealSlides}`;
                  }
                }
              });
              console.log('✓ testimonial-slider33 initialized');
            } catch (e) {
              console.error('Error initializing slider33:', e);
            }
          }
        }
        
        // Continue in next part...
        // 12. testimonial-slider5
        const slider5El = document.querySelector('.testimonial-slider5 .swiper');
        const slider5CounterEl = document.querySelector('.testimonial-slider5 .testspace');
        
        if (slider5El && slider5CounterEl && !(slider5El as any).swiper) {
          try {
            const realTotalSlides = slider5El.querySelectorAll('.swiper-wrapper .swiper-slide').length;
            new Swiper(slider5El, {
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
                0: { slidesPerView: 1.5 },
                768: { slidesPerView: 3 },
                991: { slidesPerView: 5 },
              },
              on: {
                init: function (this: any) {
                  if (slider5CounterEl) slider5CounterEl.textContent = `1/${realTotalSlides}`;
                },
                slideChange: function (this: any) {
                  const currentSlide = this.realIndex + 1;
                  if (slider5CounterEl) slider5CounterEl.textContent = `${currentSlide}/${realTotalSlides}`;
                }
              }
            });
            console.log('✓ testimonial-slider5 initialized');
          } catch (e) {
            console.error('Error initializing slider5:', e);
          }
        }
        
        // 13. testimonial-slider-awards
        const awardsEl = document.querySelector('.testimonial-slider-awards .swiper');
        const awardsCounterEl = document.querySelector('.testimonial-slider-awards .testspace');
        
        if (awardsEl && awardsCounterEl && !(awardsEl as any).swiper) {
          try {
            const realTotalSlides = awardsEl.querySelectorAll('.swiper-wrapper .swiper-slide').length;
            new Swiper(awardsEl, {
              slidesPerView: 5,
              spaceBetween: 30,
              loop: true,
              speed: 800,
              autoplay: true,
              navigation: {
                nextEl: '.testimonial-slider-awards .testimonial-button-next',
                prevEl: '.testimonial-slider-awards .testimonial-button-prev',
              },
              breakpoints: {
                0: { slidesPerView: 2, centeredSlides: true, spaceBetween: 15 },
                768: { slidesPerView: 3, spaceBetween: 15 },
                991: { slidesPerView: 9, spaceBetween: 15 },
              },
              on: {
                init: function (this: any) {
                  if (awardsCounterEl) awardsCounterEl.textContent = `1/${realTotalSlides}`;
                },
                slideChange: function (this: any) {
                  const currentSlide = this.realIndex + 1;
                  if (awardsCounterEl) awardsCounterEl.textContent = `${currentSlide}/${realTotalSlides}`;
                }
              }
            });
            console.log('✓ testimonial-slider-awards initialized');
          } catch (e) {
            console.error('Error initializing awards:', e);
          }
        }
        
        // 14. testimonial-slider7
        const slider7El = document.querySelector('.testimonial-slider7 .swiper');
        const slider7CounterEl = document.querySelector('.testimonial-slider7 .testspace');
        
        if (slider7El && slider7CounterEl && !(slider7El as any).swiper) {
          try {
            const realTotalSlides = slider7El.querySelectorAll('.swiper-wrapper .swiper-slide').length;
            new Swiper(slider7El, {
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
                0: { slidesPerView: 1.5 },
                768: { slidesPerView: 3 },
                991: { slidesPerView: 5 },
              },
              on: {
                init: function (this: any) {
                  if (slider7CounterEl) slider7CounterEl.textContent = `1/${realTotalSlides}`;
                },
                slideChange: function (this: any) {
                  const currentSlide = this.realIndex + 1;
                  if (slider7CounterEl) slider7CounterEl.textContent = `${currentSlide}/${realTotalSlides}`;
                }
              }
            });
            console.log('✓ testimonial-slider7 initialized');
          } catch (e) {
            console.error('Error initializing slider7:', e);
          }
        }


        // 14. testimonial-slider7
        const slideragency = document.querySelector('.agency-supports-slider .swiper');
        const slider8agency = document.querySelector('.agency-supports-slider .testspace');
        
        if (slideragency && slider8agency && !(slideragency as any).swiper) {
          try {
            const realTotalSlides = slideragency.querySelectorAll('.swiper-wrapper .swiper-slide').length;
            new Swiper(slideragency, {
              slidesPerView: 5,
              spaceBetween: 15,
              loop: false,
              speed: 800,
              autoplay: false,
              navigation: {
                nextEl: '.testimonial-slide7 .testimonial-button-next',
                prevEl: '.agency-supports-slider .testimonial-button-prev',
              },
              breakpoints: {
                0: { slidesPerView: 1.5 },
                768: { slidesPerView: 3 },
                991: { slidesPerView: 5 },
              },
              on: {
                init: function (this: any) {
                  if (slider8agency) slider8agency.textContent = `1/${realTotalSlides}`;
                },
                slideChange: function (this: any) {
                  const currentSlide = this.realIndex + 1;
                  if (slider8agency) slider8agency.textContent = `${currentSlide}/${realTotalSlides}`;
                }
              }
            });
            console.log('✓ agency-supports-slider initialized');
          } catch (e) {
            console.error('Error initializing slider7:', e);
          }
        }
        
        // 15-25: Overview sliders, sap-service, testimonial-slideram, ecommers-8, architecture, ai-slider, CorusHR-slider, industries2, epicsecslide, mobiletesti5, msds, dew, sap
        // I'll add these with the same pattern for brevity
        
        const sliderConfigs = [
          { selector: '.overview-slider', hasRty: true, hasCounter: true },
          { selector: '.overview-slider2', hasRty: true, hasCounter: true },
          { selector: '.overview-slider5', hasRty: true, hasCounter: true },
          { selector: '.sap-service', hasRty: true, hasCounter: true },
          { selector: '.testimonial-slideram', hasRty: true, hasCounter: true },
          { selector: '.ecommers-8', hasRty: true, hasCounter: true },
          { selector: '.architecture', hasRty: true, hasCounter: true },
          { selector: '.ai-slider', hasRty: true, hasCounter: true },
          { selector: '.CorusHR-slider', hasRty: true, hasCounter: true },
          { selector: '.industries2', hasRty: false, hasCounter: true },
          { selector: '.epicsecslide', hasRty: true, hasCounter: true },
          { selector: '.mobiletesti5', hasRty: true, hasCounter: true },
          { selector: '.msds', hasRty: true, hasCounter: true },
          { selector: '.dew', hasRty: true, hasCounter: true },
          { selector: '.sap', hasRty: false, hasCounter: true },
          { selector: '.agency-supports-slider', hasRty: false, hasCounter: true },
          { selector: '.agency-supports-slider2', hasRty: false, hasCounter: true },
        ];
        
        sliderConfigs.forEach(config => {
          const swiperEl = document.querySelector(`${config.selector} .swiper`);
          const counterEl = config.hasCounter ? document.querySelector(`${config.selector} .testspace`) : null;
          const rtyEl = config.hasRty ? document.querySelector(`${config.selector} .rtyElement`) : null;
          
          if (swiperEl && !(swiperEl as any).swiper) {
            try {
              const realTotalSlides = swiperEl.querySelectorAll('.swiper-slide').length;
              const swiperInstance = new Swiper(swiperEl, {
                spaceBetween: 15,
                loop: true,
                speed: 800,
                rtl: true,
                autoplay: {
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                  reverseDirection: config.selector === '.agency-supports-slider2' ? true : false,
                },
                navigation: {
                  nextEl: `${config.selector} .testimonial-button-next`,
                  prevEl: `${config.selector} .testimonial-button-prev`,
                },
                breakpoints: {
                  0: { slidesPerView: config.selector === '.sap-service' ? 1.2 : config.selector === '.sap' ? 1.2 : config.selector === '.industries2' ? 1.2 : config.selector === '.msds' ? 1.2 : 1.3 },
                  768: { slidesPerView: config.selector === '.sap-service' ? 2 : config.selector === '.sap' ? 2 : config.selector === '.industries2' ? 2 : config.selector === '.msds' ? 2 : 3 },
                  991: { slidesPerView: config.selector === '.sap-service' ? 2 : config.selector === '.sap' ? 3 : config.selector === '.industries2' ? 3 : config.selector === '.msds' ? 3 : 4 },
                  1300: { slidesPerView: config.selector === '.sap-service' ? 3 : config.selector === '.sap' ? 4 : config.selector === '.industries2' ? 4 : config.selector === '.msds' ? 4 : 5 },
                  1700: { slidesPerView: config.selector === '.sap-service' ? 3 : config.selector === '.sap' ? 4 : config.selector === '.industries2' ? 4 : config.selector === '.msds' ? 4 : 6 },
                },
                on: {
                  init: function (this: any) {
                    if (config.hasRty) applyOffset(this, rtyEl as HTMLElement);
                    if (counterEl && config.hasCounter) counterEl.textContent = `1/${realTotalSlides}`;
                  },
                  resize: function (this: any) {
                    if (config.hasRty) applyOffset(this, rtyEl as HTMLElement);
                  },
                  slideChange: function (this: any) {
                    const currentSlide = this.realIndex + 1;
                    if (counterEl && config.hasCounter) counterEl.textContent = `${currentSlide}/${realTotalSlides}`;
                  }
                }
              });
              console.log(`✓ ${config.selector} initialized`);
            } catch (e) {
              console.error(`Error initializing ${config.selector}:`, e);
            }
          }
        });
        
        // testimonial-slider-009
        const slider009Container = document.querySelector('.testimonial-slider-009');
        if (slider009Container) {
          const slider009El = slider009Container.querySelector('.swiper');
          const counter009El = slider009Container.querySelector('.testspace');
          
          if (slider009El && counter009El && !(slider009El as any).swiper) {
            try {
              const totalSlides = slider009El.querySelectorAll('.swiper-slide').length;
              new Swiper(slider009El, {
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
                on: {
                  init: function (this: any) {
                    if (counter009El) counter009El.textContent = `1/${totalSlides}`;
                  },
                  slideChange: function (this: any) {
                    const currentSlide = this.realIndex + 1;
                    if (counter009El) counter009El.textContent = `${currentSlide}/${totalSlides}`;
                  }
                }
              });
              console.log('✓ testimonial-slider-009 initialized');
            } catch (e) {
              console.error('Error initializing slider-009:', e);
            }
          }
        }
        
        // testimonial-slider-0009
        const slider0009Container = document.querySelector('.testimonial-slider-0009');
        if (slider0009Container) {
          const slider0009El = slider0009Container.querySelector('.swiper');
          const counter0009El = slider0009Container.querySelector('.testspace');
          
          if (slider0009El && counter0009El && !(slider0009El as any).swiper) {
            try {
              const totalSlides = slider0009El.querySelectorAll('.swiper-slide').length;
              new Swiper(slider0009El, {
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
                  1300: { slidesPerView: 4 },
                  1700: { slidesPerView: 4 }
                },
                on: {
                  init: function (this: any) {
                    if (counter0009El) counter0009El.textContent = `1/${totalSlides}`;
                  },
                  slideChange: function (this: any) {
                    const currentSlide = this.realIndex + 1;
                    if (counter0009El) counter0009El.textContent = `${currentSlide}/${totalSlides}`;
                  }
                }
              });
              console.log('✓ testimonial-slider-0009 initialized');
            } catch (e) {
              console.error('Error initializing slider-0009:', e);
            }
          }
        }
        
        console.log('✅ All Swiper initializations complete');
      };
      
      // Initialize with delay
      setTimeout(initializeSwipers, 200);
      setTimeout(initializeSwipers, 600);
    };
    
    // Multiple initialization attempts
    const initWithDelay = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTimeout(initSwiper, 300);
        });
      });
    };
    
    // Listen for custom reinit event
    const handleSwiperReinit = () => {
      setTimeout(() => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            initSwiper();
          });
        });
      }, 200);
    };
    
    window.addEventListener('swiperReinit', handleSwiperReinit);
    
    // Run immediately and with multiple delays
    setTimeout(() => {
      initWithDelay();
      setTimeout(() => initSwiper(), 800);
      setTimeout(() => initSwiper(), 1500);
    }, 100);
    
    // Also on load
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
  }, [pathname]);
  
  return null;
}
