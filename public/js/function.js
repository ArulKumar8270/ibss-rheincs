(function() {
  "use strict";

  // Helper function to run code when DOM and dependencies are ready
  function whenReady(callback, dependencies) {
    dependencies = dependencies || [];
    
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
      }
      return true;
    }

    function tryExecute() {
      // Check if DOM is ready
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
          if (checkDependencies()) {
            callback();
          } else {
            setTimeout(tryExecute, 50);
          }
        });
      } else {
        // DOM is already ready
        if (checkDependencies()) {
          callback();
        } else {
          setTimeout(tryExecute, 50);
        }
      }
    }

    tryExecute();
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
          768: {
            slidesPerView: 5,
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
          768: {
            slidesPerView: 5,
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

  // --- Testimonial Slider Initializations ---
  whenReady(function() {
    const swiperEl = document.querySelector('.testimonial-slider .swiper');
    const counterEl = document.querySelector('.testimonial-slider .testspace');

    if (!swiperEl || !counterEl || typeof Swiper === 'undefined') return;

    const realTotalSlides = swiperEl.querySelectorAll('.swiper-wrapper .swiper-slide').length;

    const testimonial_slider = new Swiper(swiperEl, {
      slidesPerView: 1,
      spaceBetween: 15,
      loop: false,
      speed: 800,
      autoplay: true,
      navigation: {
        nextEl: '.testimonial-slider .testimonial-button-next',
        prevEl: '.testimonial-slider .testimonial-button-prev',
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 3 },
        991: { slidesPerView: 5 },
        1200: { slidesPerView: 5 },
      },
      on: {
        init: function () {
          counterEl.textContent = `1/${realTotalSlides}`;
          calculateEndOffset(this);
        },
        resize: function () {
          calculateEndOffset(this);
        },
        slideChange: function () {
          const currentSlide = this.activeIndex + 1;
          counterEl.textContent = `${currentSlide}/${realTotalSlides}`;
        }
      }
    });
    
    function calculateEndOffset(swiper) {
      const containerWidth = swiper.el.clientWidth;
      const slideWidth = swiper.slides[0].offsetWidth;
      swiper.params.slidesOffsetAfter = containerWidth - slideWidth;
      swiper.update();
    }
  }, ['Swiper']);

  whenReady(function() {
    const swiperEl = document.querySelector('.testimonial-slider-marquee .swiper');
    const counterEl = document.querySelector('.testimonial-slider-marquee .testspace');

    if (!swiperEl || !counterEl || typeof Swiper === 'undefined') return;

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

    const realTotalSlides = swiperEl.querySelectorAll('.swiper-wrapper .swiper-slide').length;

    const testimonial_slider = new Swiper(swiperEl, {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: false,
      speed: 800,
      autoplay: false,
      navigation: {
        nextEl: '.testimonial-slider-08 .testimonial-button-next',
        prevEl: '.testimonial-slider-08 .testimonial-button-prev',
      },
      breakpoints: {
        0: { slidesPerView: 1.5 },
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

    const realTotalSlides = swiperEl.querySelectorAll('.swiper-wrapper .swiper-slide').length;

    const testimonial_slider = new Swiper(swiperEl, {
      slidesPerView: 3,
      spaceBetween: 15,
      loop: false,
      speed: 800,
      autoplay: false,
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

    const realTotalSlides = swiperEl.querySelectorAll('.swiper-wrapper .swiper-slide').length;

    const testimonial_slider = new Swiper(swiperEl, {
      slidesPerView: 5,
      spaceBetween: 30,
      loop: false,
      speed: 800,
      centeredSlides: true,
      autoplay: false,
      navigation: {
        nextEl: '.testimonial-slider59 .testimonial-button-next',
        prevEl: '.testimonial-slider59 .testimonial-button-prev',
      },
      breakpoints: {
        0: { slidesPerView: 1.5 },
        768: { slidesPerView: 3 },
        991: { slidesPerView: 5.5 },
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

    if (!swiperEl || !counterEl || typeof Swiper === 'undefined') return;

    const realTotalSlides = swiperEl.querySelectorAll('.swiper-wrapper .swiper-slide').length;

    const testimonial_slider = new Swiper(swiperEl, {
      slidesPerView: 5,
      spaceBetween: 15,
      loop: false,
      speed: 800,
      autoplay: false,
      navigation: {
        nextEl: '.industries .testimonial-button-next',
        prevEl: '.industries .testimonial-button-prev',
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
    const swiperEl = document.querySelector('.testimonial-slider1 .swiper');
    const counterEl = document.querySelector('.testimonial-slider1 .testspace');

    if (!swiperEl || !counterEl || typeof Swiper === 'undefined') return;

    const realTotalSlides = swiperEl.querySelectorAll('.swiper-wrapper .swiper-slide').length;

    const testimonial_slider = new Swiper(swiperEl, {
      spaceBetween: 0,
      slidesPerView: 1,
      loop: false,
      speed: 800,
      autoplay: false,
      navigation: {
        nextEl: '.testimonial-slider1 .testimonial-button-next',
        prevEl: '.testimonial-slider1 .testimonial-button-prev',
      },
      breakpoints: {
        0: {
          slidesOffsetBefore: 0,
          slidesPerView: 1,
        },
        768: {
          slidesOffsetBefore: 0,
          slidesPerView: 1.3,
        },
        900: {
          slidesOffsetBefore: 0,
          slidesPerView: 2,
        },
        1200: {
          slidesOffsetBefore: window.innerWidth * 0.09,
          slidesPerView: 2.8,
        },
        1600: {
          slidesOffsetBefore: window.innerWidth * 0.11,
          slidesPerView: 2.8,
        },
        1710: {
          slidesOffsetBefore: window.innerWidth * 0.13,
          slidesPerView: 2.8,
        },
        1780: {
          slidesOffsetBefore: window.innerWidth * 0.14,
          slidesPerView: 2.8,
        },
        1920: {
          slidesOffsetBefore: window.innerWidth * 0.16,
          slidesPerView: 2.8,
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
      autoplay: false,
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
      loop: false,
      speed: 800,
      autoplay: false,
      navigation: {
        nextEl: '.testimonial-slider-awards .testimonial-button-next',
        prevEl: '.testimonial-slider-awards .testimonial-button-prev',
      },
      breakpoints: {
        0: { slidesPerView: 2, spaceBetween: 15 },
        768: { slidesPerView: 3, spaceBetween: 15 },
        991: { slidesPerView: 9, spaceBetween: 15 },
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
        url: "form-process.php",
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

})();
