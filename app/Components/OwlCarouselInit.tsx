'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

declare global {
  interface Window {
    $: any;
    jQuery: any;
  }
}

export default function OwlCarouselInit() {
  const pathname = usePathname();

  useEffect(() => {
    console.log('🦉 [OwlCarouselInit] Component mounted, pathname:', pathname);

    const initOwlCarousels = () => {
      // Check if jQuery is available
      if (typeof window === 'undefined' || typeof window.$ === 'undefined') {
        console.warn('⚠️ [OwlCarouselInit] jQuery not loaded yet, retrying...');
        setTimeout(initOwlCarousels, 100);
        return;
      }

      const $ = window.$;

      // Check if OwlCarousel plugin is available
      if (typeof $.fn.owlCarousel === 'undefined') {
        console.warn('⚠️ [OwlCarouselInit] OwlCarousel plugin not loaded yet, retrying...');
        setTimeout(initOwlCarousels, 100);
        return;
      }

      console.log('✅ [OwlCarouselInit] jQuery and OwlCarousel are ready!');

      // Initialize skew-carousel
      initSkewCarousel();
      
      // Initialize skew-carousel1
      initSkewCarousel1();
    };

    const initSkewCarousel = () => {
      const $ = window.$;
      const $carousel = $('.skew-carousel');
      
      if ($carousel.length === 0) {
        console.log('ℹ️ [skew-carousel] No elements found on this page');
        return;
      }

      console.log(`🦉 [skew-carousel] Found ${$carousel.length} carousel(s)`);

      try {
        // Destroy existing instances
        $carousel.each(function() {
          const $this = $(this);
          const existingCarousel = $this.data('owl.carousel');
          
          if (existingCarousel) {
            console.log('🦉 [skew-carousel] Destroying existing instance...');
            $this.trigger('destroy.owl.carousel');
            $this.removeClass('owl-carousel owl-loaded');
            $this.find('.owl-stage-outer').children().unwrap();
          }
        });

        // Initialize carousel
        console.log('🦉 [skew-carousel] Initializing...');
        $carousel.owlCarousel({
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

        console.log('✅ [skew-carousel] Initialized successfully!');
      } catch (error) {
        console.error('❌ [skew-carousel] Error:', error);
      }
    };

    const initSkewCarousel1 = () => {
      const $ = window.$;
      const $carousel = $('.skew-carousel1');
      
      if ($carousel.length === 0) {
        console.log('ℹ️ [skew-carousel1] No elements found on this page');
        return;
      }

      console.log(`🦉 [skew-carousel1] Found ${$carousel.length} carousel(s)`);

      try {
        // Destroy existing instances
        $carousel.each(function() {
          const $this = $(this);
          const existingCarousel = $this.data('owl.carousel');
          
          if (existingCarousel) {
            console.log('🦉 [skew-carousel1] Destroying existing instance...');
            $this.trigger('destroy.owl.carousel');
            $this.removeClass('owl-carousel owl-loaded');
            $this.find('.owl-stage-outer').children().unwrap();
          }
        });

        // Initialize carousel
        console.log('🦉 [skew-carousel1] Initializing...');
        $carousel.owlCarousel({
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

        // Add active slide functionality
        const setActiveSlide = (event: any) => {
          const owl = event.relatedTarget;
          const current = owl.current();
          const $items = $(owl.$stage).children();
          
          $items.removeClass('active');
          $items.eq(current).addClass('active');
        };

        $carousel.on('changed.owl.carousel', setActiveSlide);
        $carousel.on('translated.owl.carousel', setActiveSlide);

        console.log('✅ [skew-carousel1] Initialized successfully!');
      } catch (error) {
        console.error('❌ [skew-carousel1] Error:', error);
      }
    };

    // Try to initialize immediately
    initOwlCarousels();

    // Also try after short delays for dynamically loaded content
    const timeouts = [
      setTimeout(initOwlCarousels, 500),
      setTimeout(initOwlCarousels, 1000),
      setTimeout(initOwlCarousels, 1500)
    ];

    // Listen for OwlCarousel loaded event
    const handleOwlCarouselLoaded = () => {
      console.log('🦉 [OwlCarouselInit] owlCarouselLoaded event received');
      setTimeout(initOwlCarousels, 100);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('owlCarouselLoaded', handleOwlCarouselLoaded);
    }

    // Cleanup function
    return () => {
      console.log('🦉 [OwlCarouselInit] Cleaning up...');
      timeouts.forEach(timeout => clearTimeout(timeout));
      
      if (typeof window !== 'undefined') {
        window.removeEventListener('owlCarouselLoaded', handleOwlCarouselLoaded);
      }

      // Destroy all OwlCarousel instances
      if (typeof window !== 'undefined' && typeof window.$ !== 'undefined') {
        try {
          const $ = window.$;
          $('.skew-carousel, .skew-carousel1').each(function() {
            const $this = $(this);
            const carousel = $this.data('owl.carousel');
            if (carousel) {
              $this.trigger('destroy.owl.carousel');
              $this.removeClass('owl-carousel owl-loaded');
            }
          });
        } catch (error) {
          console.error('❌ [OwlCarouselInit] Error during cleanup:', error);
        }
      }
    };
  }, [pathname]); // Re-run when pathname changes

  return null; // This component doesn't render anything
}
