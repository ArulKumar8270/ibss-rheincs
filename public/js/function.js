(function() {
  "use strict";

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
  function initReadMoreToggles() {
    // Find all toggle buttons (handle multiple instances on same page)
    // Use querySelectorAll to handle duplicate IDs (though not ideal HTML)
    const toggleButtons = document.querySelectorAll('[id="toggleReadMore"]');
    const allMoreTexts = document.querySelectorAll('[id="more"]');
    
    toggleButtons.forEach(function(toggleBtn, index) {
      // Skip if already initialized
      if (toggleBtn.hasAttribute('data-readmore-initialized')) {
        return;
      }
      
      // Mark as initialized
      toggleBtn.setAttribute('data-readmore-initialized', 'true');
      
      // Find the associated "more" text element
      // Strategy: Find the "more" element that appears right before this toggle button
      let moreText = null;
      
      // Method 1: Find the closest "more" element that appears before this toggle in DOM order
      // Get all elements in document order
      const allElements = Array.from(document.querySelectorAll('*'));
      const toggleIndex = allElements.indexOf(toggleBtn);
      
      // Find the last "more" element before this toggle
      for (let i = toggleIndex - 1; i >= 0; i--) {
        if (allElements[i].id === 'more') {
          moreText = allElements[i];
          break;
        }
      }
      
      // Method 2: If not found, try to find in the same parent container
      if (!moreText) {
        let parent = toggleBtn.parentElement;
        while (parent && !moreText) {
          const allMoreInContainer = Array.from(parent.querySelectorAll('[id="more"]'));
          const allTogglesInContainer = Array.from(parent.querySelectorAll('[id="toggleReadMore"]'));
          
          // If counts match, pair by index
          if (allMoreInContainer.length === allTogglesInContainer.length && allMoreInContainer.length > 0) {
            const toggleIndexInContainer = allTogglesInContainer.indexOf(toggleBtn);
            if (toggleIndexInContainer >= 0 && allMoreInContainer[toggleIndexInContainer]) {
              moreText = allMoreInContainer[toggleIndexInContainer];
              break;
            }
          }
          
          parent = parent.parentElement;
        }
      }
      
      // Method 3: Fallback to index-based pairing
      if (!moreText && allMoreTexts.length > index) {
        moreText = allMoreTexts[index];
      }
      
      if (toggleBtn && moreText) {
        const btnLabel = toggleBtn.querySelector('.label');
        const iconContainer = toggleBtn.querySelector('.svg-container');

        if (btnLabel && iconContainer) {
          toggleBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Toggle the text visibility
            moreText.classList.toggle('hidden');

            // Check if text is hidden or visible
            if (moreText.classList.contains('hidden')) {
              // State: Text is HIDDEN (Reset to default)
              btnLabel.textContent = "Read More";
              iconContainer.classList.remove('rotate-up'); // Rotate arrow back down
            } else {
              // State: Text is VISIBLE (Open)
              btnLabel.textContent = "Read Less";
              iconContainer.classList.add('rotate-up'); // Rotate arrow up
            }
          });
        }
      }
    });
  }
  
  // Make function globally available for ScriptReinit
  window.initReadMoreToggles = initReadMoreToggles;

  // Initialize on page load
  whenReady(function() {
    initReadMoreToggles();
  });

  // Re-initialize on route changes
  window.addEventListener('routeChange', function() {
    // Remove initialization markers so elements can be re-initialized
    document.querySelectorAll('[data-readmore-initialized]').forEach(function(el) {
      el.removeAttribute('data-readmore-initialized');
    });
    // Re-initialize after a short delay to ensure DOM is ready
    setTimeout(initReadMoreToggles, 200);
  });
  
  // Also re-initialize on DOMContentLoaded in case of dynamic content
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      setTimeout(initReadMoreToggles, 100);
    });
  } else {
    // DOM already loaded
    setTimeout(initReadMoreToggles, 100);
  }

  // --- Main Mobile Menu (Hamburger) Logic ---
  whenReady(function() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const closeBtn = document.getElementById('close-btn');
    const mobileNavPanel = document.getElementById('mobileNavPanel');
    const menuOverlay = document.getElementById('menuOverlay');

    // Function to open the main menu
    const openMenu = () => {
      if (mobileNavPanel) mobileNavPanel.classList.add('open');
      if (menuOverlay) menuOverlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    };

    // Function to close the main menu
    const closeMenu = () => {
      if (mobileNavPanel) mobileNavPanel.classList.remove('open');
      if (menuOverlay) menuOverlay.classList.remove('open');
      document.body.style.overflow = '';
    };

    if (hamburgerBtn) hamburgerBtn.addEventListener('click', openMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    if (menuOverlay) menuOverlay.addEventListener('click', closeMenu);

    // --- Submenu Accordion Logic ---
    const allSubmenuToggles = document.querySelectorAll('.submenu-toggle');
    allSubmenuToggles.forEach(toggle => {
      toggle.addEventListener('click', function(event) {
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
      mobileSearchBtn.addEventListener('click', () => {
        mobileSearchBox.classList.add('active');
      });
    }

    if (mobileSearchClose && mobileSearchBox) {
      mobileSearchClose.addEventListener('click', () => {
        mobileSearchBox.classList.remove('active');
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

      searchBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        searchBox.classList.add('search-active');
        const inputField = searchBox.querySelector('.search-bar input');
        if (inputField) {
          setTimeout(() => inputField.focus(), 100);
        }
      });

      searchClose.addEventListener('click', () => {
        searchBox.classList.remove('search-active');
      });
    }

    setupSearch('searchBox', 'searchBtn', 'searchClose');
    setupSearch('mobileSearchBox', 'mobileSearchBtn', 'mobileSearchClose');
  });

  // --- Bootstrap Popover Initialization ---
  whenReady(function() {
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
      const sliderEl = document.querySelector('.agency-supports-slider .swiper');
      if (sliderEl) {
        sliderEl.addEventListener('mouseenter', () => {
          agency_supports_slider.autoplay.stop();
        });
        sliderEl.addEventListener('mouseleave', () => {
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
      const sliderEl = document.querySelector('.agency-supports-slider2 .swiper');
      if (sliderEl) {
        sliderEl.addEventListener('mouseenter', () => {
          agency_supports_slider2.autoplay.stop();
        });
        sliderEl.addEventListener('mouseleave', () => {
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
      on: {
        init: function () {
          applyOffset(this);
          counterEl.textContent = `1/${realTotalSlides}`;
        },
        resize: function () {
          applyOffset(this);
        },
        slideChange: function () {
          const currentSlide = this.realIndex + 1;
          counterEl.textContent = `${currentSlide}/${realTotalSlides}`;
        }
      }
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
      on: {
        init: function () {
          counterEl.textContent = `1/${realTotalSlides}`;
        },
        slideChange: function () {
          const currentSlide1 = this.realIndex + 1;
          counterEl.textContent = `${currentSlide1}/${realTotalSlides}`;
        }
      }
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
        init: function () {
          counterEl.textContent = `1/${realTotalSlides}`;
        },
        slideChange: function () {
          const currentSlide = this.realIndex + 1;
          counterEl.textContent = `${currentSlide}/${realTotalSlides}`;
        }
      }
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
      on: {
        init: function () {
          counterEl.textContent = `1/${realTotalSlides}`;
        },
        slideChange: function () {
          const currentSlide = this.realIndex + 1;
          counterEl.textContent = `${currentSlide}/${realTotalSlides}`;
        }
      }
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
          0: {
            slidesPerView: 1.2,
          },
          480: {
            slidesPerView: 1.2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1366: {
            slidesPerView: 4,
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
      on: {
        init: function () {
          counterEl.textContent = `1/${realTotalSlides}`;
        },
        slideChange: function () {
          const currentSlide = this.realIndex + 1;
          counterEl.textContent = `${currentSlide}/${realTotalSlides}`;
        }
      }
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
        0: { slidesPerView: 1.3 },
        768: { slidesPerView: 3 },
        991: { slidesPerView: 4 },
        1300: { slidesPerView: 5 },
        1700: { slidesPerView: 5.8 },
      },
      on: {
        init: function () {
          applyOffset(this);
          counterEl.textContent = `1/${realTotalSlides}`;
        },
        resize: function () {
          applyOffset(this);
        },
        slideChange: function () {
          const currentSlide = this.realIndex + 1;
          counterEl.textContent = `${currentSlide}/${realTotalSlides}`;
        }
      }
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
          slidesPerView: 1.3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1.3,
          spaceBetween: 20,
        },
        900: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 2.5,
        },
        1500: {
          slidesPerView: 2.8,
        },
        1600: {
          slidesPerView: 2.8,
        }
      },
      on: {
        init: function () {
          applyOffset(this);
          counterEl.textContent = `1/${realTotalSlides}`;
        },
        resize: function () {
          applyOffset(this);
        },
        slideChange: function () {
          const currentSlide = this.realIndex + 1;
          counterEl.textContent = `${currentSlide}/${realTotalSlides}`;
        }
      }
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
      on: {
        init: function () {
          counterEl.textContent = `1/${realTotalSlides}`;
        },
        slideChange: function () {
          const currentSlide = this.realIndex + 1;
          counterEl.textContent = `${currentSlide}/${realTotalSlides}`;
        }
      }
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
        on: {
          init: function () {
            const totalSlides = Array.from(this.slides)
              .filter(slide => !slide.classList.contains('swiper-slide-duplicate'))
              .length;
            this.totalRealSlides = totalSlides;
            const testspace = document.querySelector('.testspace1');
            if (testspace) testspace.textContent = `1/${totalSlides}`;
          },
          slideChange: function () {
            const currentSlide = this.realIndex + 1;
            const testspace = document.querySelector('.testspace1');
            if (testspace) testspace.textContent = `${currentSlide}/${this.totalRealSlides}`;
          }
        }
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
          nextEl: '.testimonial-slider33 .testimonial-button-next',
          prevEl: '.testimonial-slider33 .testimonial-button-prev',
        },
        on: {
          init: function () {
            const totalSlides = Array.from(this.slides)
              .filter(slide => !slide.classList.contains('swiper-slide-duplicate'))
              .length;
            this.totalRealSlides = totalSlides;
            const testspace = document.querySelector('.testspace');
            if (testspace) testspace.textContent = `1/${totalSlides}`;
          },
          slideChange: function () {
            const currentSlide = this.realIndex + 1;
            const testspace = document.querySelector('.testspace');
            if (testspace) testspace.textContent = `${currentSlide}/${this.totalRealSlides}`;
          }
        }
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
        0: { slidesPerView: 1.5 },
        768: { slidesPerView: 3 },
        991: { slidesPerView: 5 },
      },
      on: {
        init: function () {
          counterEl.textContent = `1/${realTotalSlides}`;
        },
        slideChange: function () {
          const currentSlide = this.realIndex + 1;
          counterEl.textContent = `${currentSlide}/${realTotalSlides}`;
        }
      }
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
      navigation: {
        nextEl: '.testimonial-slider-awards .testimonial-button-next',
        prevEl: '.testimonial-slider-awards .testimonial-button-prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
          centeredSlides: true,
          spaceBetween: 15
        },
        768: { slidesPerView: 3, spaceBetween: 15 },
        991: { slidesPerView: 9, spaceBetween: 15, },
      },
      on: {
        init: function () {
          counterEl.textContent = `1/${realTotalSlides}`;
        },
        slideChange: function () {
          const currentSlide = this.realIndex + 1;
          counterEl.textContent = `${currentSlide}/${realTotalSlides}`;
        }
      }
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
        0: { slidesPerView: 1.5 },
        768: { slidesPerView: 3 },
        991: { slidesPerView: 5 },
      },
      on: {
        init: function () {
          counterEl.textContent = `1/${realTotalSlides}`;
        },
        slideChange: function () {
          const currentSlide = this.realIndex + 1;
          counterEl.textContent = `${currentSlide}/${realTotalSlides}`;
        }
      }
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
        0: { slidesPerView: 1.3 },
        450: { slidesPerView: 2 },
        600: { slidesPerView: 2.5 },
        768: { slidesPerView: 3 },
        991: { slidesPerView: 4 },
        1300: { slidesPerView: 5 },
        1700: { slidesPerView: 6 },
      },
      on: {
        init: function () {
          applyOffset(this);
          counterEl.textContent = `1/${realTotalSlides}`;
        },
        resize: function () {
          applyOffset(this);
        },
        slideChange: function () {
          const currentSlide = this.realIndex + 1;
          counterEl.textContent = `${currentSlide}/${realTotalSlides}`;
        }
      }
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
        0: { slidesPerView: 1.3 },
        450: { slidesPerView: 2 },
        600: { slidesPerView: 2.5 },
        768: { slidesPerView: 3 },
        991: { slidesPerView: 4 },
        1300: { slidesPerView: 4.5 },
        1700: { slidesPerView: 5 },
      },
      on: {
        init: function () {
          applyOffset(this);
          counterEl.textContent = `1/${realTotalSlides}`;
        },
        resize: function () {
          applyOffset(this);
        },
        slideChange: function () {
          const currentSlide = this.realIndex + 1;
          counterEl.textContent = `${currentSlide}/${realTotalSlides}`;
        }
      }
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
        0: { slidesPerView: 1.3 },
        450: { slidesPerView: 2 },
        600: { slidesPerView: 2.5 },
        768: { slidesPerView: 3 },
        991: { slidesPerView: 4 },
        1300: { slidesPerView: 5 },
        1700: { slidesPerView: 6 },
      },
      on: {
        init: function () {
          applyOffset(this);
          counterEl.textContent = `1/${realTotalSlides}`;
        },
        resize: function () {
          applyOffset(this);
        },
        slideChange: function () {
          const currentSlide = this.realIndex + 1;
          counterEl.textContent = `${currentSlide}/${realTotalSlides}`;
        }
      }
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
        0: { slidesPerView: 1.3 },
        768: { slidesPerView: 3 },
        991: { slidesPerView: 3 },
        1300: { slidesPerView: 3 },
        1700: { slidesPerView: 3.8 },
      },
      on: {
        init: function () {
          applyOffset(this);
          counterEl.textContent = `1/${realTotalSlides}`;
        },
        resize: function () {
          applyOffset(this);
        },
        slideChange: function () {
          const currentSlide = this.realIndex + 1;
          counterEl.textContent = `${currentSlide}/${realTotalSlides}`;
        }
      }
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
      on: {
        init: function () {
          applyOffset(this);
          counterEl.textContent = `1/${realTotalSlides}`;
        },
        resize: function () {
          applyOffset(this);
        },
        slideChange: function () {
          const currentSlide = this.realIndex + 1;
          counterEl.textContent = `${currentSlide}/${realTotalSlides}`;
        }
      }
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
      on: {
        init: function () {
          applyOffset(this);
          counterEl.textContent = `1/${realTotalSlides}`;
        },
        resize: function () {
          applyOffset(this);
        },
        slideChange: function () {
          const currentSlide = this.realIndex + 1;
          counterEl.textContent = `${currentSlide}/${realTotalSlides}`;
        }
      }
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
      on: {
        init: function () {
          applyOffset(this);
          counterEl.textContent = `1/${realTotalSlides}`;
        },
        resize: function () {
          applyOffset(this);
        },
        slideChange: function () {
          const currentSlide = this.realIndex + 1;
          counterEl.textContent = `${currentSlide}/${realTotalSlides}`;
        }
      }
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
      on: {
        init: function () {
          applyOffset(this);
          counterEl.textContent = `1/${realTotalSlides}`;
        },
        resize: function () {
          applyOffset(this);
        },
        slideChange: function () {
          const currentSlide = this.realIndex + 1;
          counterEl.textContent = `${currentSlide}/${realTotalSlides}`;
        }
      }
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
        0: { slidesPerView: 1.3 },
        768: { slidesPerView: 3 },
        991: { slidesPerView: 4 },
        1300: { slidesPerView: 5 },
        1700: { slidesPerView: 5.8 },
      },
      on: {
        init: function () {
          applyOffset(this);
          counterEl.textContent = `1/${realTotalSlides}`;
        },
        resize: function () {
          applyOffset(this);
        },
        slideChange: function () {
          const currentSlide = this.realIndex + 1;
          counterEl.textContent = `${currentSlide}/${realTotalSlides}`;
        }
      }
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
      on: {
        init: function () {
          counterEl.textContent = `1/${realTotalSlides}`;
        },
        slideChange: function () {
          const currentSlide = this.realIndex + 1;
          counterEl.textContent = `${currentSlide}/${realTotalSlides}`;
        }
      }
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
      on: {
        init: function () {
          applyOffset(this);
          counterEl.textContent = `1/${realTotalSlides}`;
        },
        resize: function () {
          applyOffset(this);
        },
        slideChange: function () {
          const currentSlide = this.realIndex + 1;
          counterEl.textContent = `${currentSlide}/${realTotalSlides}`;
        }
      }
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
      on: {
        init: function () {
          applyOffset(this);
          counterEl.textContent = `1/${realTotalSlides}`;
        },
        resize: function () {
          applyOffset(this);
        },
        slideChange: function () {
          const currentSlide = this.realIndex + 1;
          counterEl.textContent = `${currentSlide}/${realTotalSlides}`;
        }
      }
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
      on: {
        init: function () {
          applyOffset(this);
          counterEl.textContent = `1/${realTotalSlides}`;
        },
        resize: function () {
          applyOffset(this);
        },
        slideChange: function () {
          const currentSlide = this.realIndex + 1;
          counterEl.textContent = `${currentSlide}/${realTotalSlides}`;
        }
      }
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
      on: {
        init: function () {
          applyOffset(this);
          counterEl.textContent = `1/${realTotalSlides}`;
        },
        resize: function () {
          applyOffset(this);
        },
        slideChange: function () {
          const currentSlide = this.realIndex + 1;
          counterEl.textContent = `${currentSlide}/${realTotalSlides}`;
        }
      }
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
      on: {
        init: function () {
          counterEl.textContent = `1/${realTotalSlides}`;
        },
        slideChange: function () {
          const currentSlide = this.realIndex + 1;
          counterEl.textContent = `${currentSlide}/${realTotalSlides}`;
        }
      }
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
      on: {
        init: function () {
          counterEl.textContent = `1/${totalSlides}`;
        },
        slideChange: function () {
          const currentSlide = this.realIndex + 1;
          counterEl.textContent = `${currentSlide}/${totalSlides}`;
        }
      }
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
      on: {
        init: function () {
          counterEl.textContent = `1/${totalSlides}`;
        },
        slideChange: function () {
          const currentSlide = this.realIndex + 1;
          counterEl.textContent = `${currentSlide}/${totalSlides}`;
        }
      }
    });
  }, ['Swiper']);

  // --- More jQuery-dependent code ---
  whenReady(function() {
    var $ = window.$;
    var $window = $(window);

    /* Youtube Background Video JS */
    if ($('#herovideo').length && typeof $.fn.YTPlayer !== 'undefined') {
      var myPlayer = $("#herovideo").YTPlayer();
    }

    /* Init Counter */
    if ($('.counter').length && typeof $.fn.counterUp !== 'undefined') {
      $('.counter').counterUp({ delay: 6, time: 3000 });
    }

    /* Image Reveal Animation */
    if ($('.reveal').length && typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
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
    }

    window.addEventListener("scroll", function () {
      const header = document.querySelector(".main-header");
      if (header) {
        header.classList.toggle("is-sticky", window.scrollY > 50);
      }
    });

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
      window.addEventListener('resize', generateGrid);
    }

    const gridOverlay = document.querySelector(".grid-overlay");
    if (gridOverlay) {
      const cols = Math.ceil(window.innerWidth / 120);
      const section = document.querySelector(".grid-section");
      if (section) {
        const rows = Math.ceil(section.offsetHeight / 120);
        const total = cols * rows;

        for (let i = 0; i < total; i++) {
          const cell = document.createElement("div");
          cell.className = "cell";
          gridOverlay.appendChild(cell);
        }
      }
    }

    // Wait for owlCarousel plugin to be available
    function initSkewCarousel() {
      if (typeof window === 'undefined' || typeof window.$ === 'undefined' || !window.$.fn) {
        setTimeout(initSkewCarousel, 100);
        return;
      }
      
      var $ = window.$;
      
      if (typeof $.fn.owlCarousel === 'undefined') {
        setTimeout(initSkewCarousel, 100);
        return;
      }
      
      if ($('.skew-carousel').length > 0) {
        try {
          // Destroy existing instance if it exists
          var existingCarousel = $('.skew-carousel').data('owl.carousel');
          if (existingCarousel) {
            $('.skew-carousel').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
            $('.skew-carousel').find('.owl-stage-outer').children().unwrap();
          }
          
          $('.skew-carousel').owlCarousel({
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
        } catch (e) {
          console.error('Error initializing skew-carousel:', e);
        }
      }
    }
    
    // Make globally available for route change re-initialization
    window.initSkewCarousel = initSkewCarousel;

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        setTimeout(initSkewCarousel, 500);
      });
    } else {
      setTimeout(initSkewCarousel, 500);
    }
    
    if (typeof window !== 'undefined') {
      window.addEventListener('owlCarouselLoaded', function() {
        setTimeout(initSkewCarousel, 100);
      });
    }

    function initSkewCarousel1() {
      if (typeof window === 'undefined' || typeof window.$ === 'undefined' || !window.$.fn) {
        setTimeout(initSkewCarousel1, 100);
        return;
      }
      
      var $ = window.$;
      
      if (typeof $.fn.owlCarousel === 'undefined') {
        setTimeout(initSkewCarousel1, 100);
        return;
      }
      
      if ($('.skew-carousel1').length > 0) {
        try {
          let owl1 = $('.skew-carousel1');
          
          // Destroy existing instance if it exists
          var existingCarousel = owl1.data('owl.carousel');
          if (existingCarousel) {
            owl1.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
            owl1.find('.owl-stage-outer').children().unwrap();
          }

          owl1.owlCarousel({
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

          function setActiveSlide(event) {
            let owl = event.relatedTarget;
            let current = owl.current();
            let $items = owl.$stage.children();

            $items.removeClass("active");
            $items.eq(current).addClass("active");
          }

          owl1.on("changed.owl.carousel", setActiveSlide);
          owl1.on("translated.owl.carousel", setActiveSlide);
        } catch (e) {
          console.error('Error initializing skew-carousel1:', e);
        }
      }
    }
    
    // Make globally available for route change re-initialization
    window.initSkewCarousel1 = initSkewCarousel1;

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        setTimeout(initSkewCarousel1, 500);
      });
    } else {
      setTimeout(initSkewCarousel1, 500);
    }
    
    if (typeof window !== 'undefined') {
      window.addEventListener('owlCarouselLoaded', function() {
        setTimeout(initSkewCarousel1, 100);
      });
    }

    /* Text Effect Animation */
    if ($('.text-anime-style-1').length && typeof SplitText !== 'undefined' && typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      let staggerAmount = 0.05,
        translateXValue = 0,
        delayValue = 0.5,
        animatedTextElements = document.querySelectorAll('.text-anime-style-1');

      animatedTextElements.forEach((element) => {
        let animationSplitText = new SplitText(element, { type: "chars, words" });
        gsap.from(animationSplitText.words, {
          duration: 1,
          delay: delayValue,
          x: 20,
          autoAlpha: 0,
          stagger: staggerAmount,
          scrollTrigger: { trigger: element, start: "top 85%" },
        });
      });
    }

    if ($('.text-anime-style-2').length && typeof SplitText !== 'undefined' && typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      let staggerAmount = 0.03,
        translateXValue = 20,
        delayValue = 0.1,
        easeType = "power2.out",
        animatedTextElements = document.querySelectorAll('.text-anime-style-2');

      animatedTextElements.forEach((element) => {
        let animationSplitText = new SplitText(element, { type: "chars, words" });
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
    }

    if ($('.text-anime-style-3').length && typeof SplitText !== 'undefined' && typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      let animatedTextElements = document.querySelectorAll('.text-anime-style-3');

      animatedTextElements.forEach((element) => {
        if (element.animation) {
          element.animation.progress(1).kill();
          element.split.revert();
        }

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
    }

    /* Parallaxie js */
    var $parallaxie = $('.parallaxie');
    if ($parallaxie.length && ($window.width() > 991)) {
      if ($window.width() > 768 && typeof $.fn.parallaxie !== 'undefined') {
        $parallaxie.parallaxie({
          speed: 0.55,
          offset: 0,
        });
      }
    }

    /* Zoom Gallery screenshot */
    if ($('.gallery-items').length && typeof $.fn.magnificPopup !== 'undefined') {
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

    /* Our Project (filtering) Start */
    $window.on("load", function () {
      if ($(".project-item-boxes").length && typeof $.fn.isotope !== 'undefined') {
        var $menuitem = $(".project-item-boxes").isotope({
          itemSelector: ".project-item-box",
          layoutMode: "masonry",
          masonry: {
            columnWidth: 1,
          }
        });

        var $menudisesnav = $(".our-Project-nav li a");
        $menudisesnav.on('click', function (e) {
          var filterValue = $(this).attr('data-filter');
          $menuitem.isotope({
            filter: filterValue
          });

          $menudisesnav.removeClass("active-btn");
          $(this).addClass("active-btn");
          e.preventDefault();
        });
        $menuitem.isotope({ filter: "*" });
      }
    });

    /* Animated Wow Js */
    if (typeof WOW !== 'undefined') {
      new WOW().init();
    }

    /* Popup Video */
    if ($('.popup-video').length && typeof $.fn.magnificPopup !== 'undefined') {
      $('.popup-video').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: true
      });
    }

    /* Why Choose us active Start */
    if ($('.why-choose-content').length) {
      var element = $('.why-choose-content');
      var items = element.find('.why-choose-item');
      if (items.length) {
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
    }

    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
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
  }, ['jQuery']);

  // --- Additional Search Box Functionality ---
  whenReady(function() {
    const searchBox = document.querySelector('.search-box');
    const searchBtn = document.querySelector('.btn-search');
    const searchInput = document.querySelector('.input-search');

    if (searchBtn && searchBox && searchInput) {
      searchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        searchBox.classList.toggle('active');
        if (searchBox.classList.contains('active')) {
          searchInput.focus();
        }
      });
    }

    document.querySelectorAll('.animated-svg-link12').forEach(btn => {
      btn.addEventListener('mouseenter', () => {
        btn.classList.add('btn-style-3');
      });
      btn.addEventListener('mouseleave', () => {
        btn.classList.remove('btn-style-3');
      });
    });
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
      
      // Re-initialize WOW animations
      if (typeof WOW !== 'undefined') {
        new WOW().init();
      }
      
      // Re-initialize counters
      if (typeof $ !== 'undefined' && $.fn.counterUp && $('.counter').length) {
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

})();
