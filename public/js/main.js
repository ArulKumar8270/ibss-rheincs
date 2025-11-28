// Wait for DOM and jQuery to be ready
(function() {
    'use strict';

    // Helper function to wait for jQuery
    function waitForJQuery(callback) {
        if (typeof window !== 'undefined' && typeof window.$ !== 'undefined' && window.$.fn) {
            callback(window.$);
        } else {
            setTimeout(function() {
                waitForJQuery(callback);
            }, 50);
        }
    }

    // Initialize when DOM is ready
    function init() {
        waitForJQuery(function($) {
            // Font size adjustment functionality
            var $affectedElements = $("p, h1, h2, h3, h4, h5, h6");

            // Storing the original size in a data attribute so size can be reset
            $affectedElements.each(function() {
                var $this = $(this);
                $this.data("orig-size", $this.css("font-size"));
            });

            // Font size buttons
            $("#btn-increase").on("click", function() {
                changeFontSize(1);
            });

            $("#btn-decrease").on("click", function() {
                changeFontSize(-1);
            });

            $("#btn-orig").on("click", function() {
                $affectedElements.each(function() {
                    var $this = $(this);
                    $this.css("font-size", $this.data("orig-size"));
                });
            });

            function changeFontSize(direction) {
                $affectedElements.each(function() {
                    var $this = $(this);
                    var currentSize = parseInt($this.css("font-size"));
                    if (!isNaN(currentSize)) {
                        $this.css("font-size", currentSize + direction);
                    }
                });
            }

            // Search box functionality is handled in function.js

            // Looping animation functionality with IntersectionObserver
            const animatedSvg = document.getElementById('looping-animation');
            if (animatedSvg) {
                const animationDuration = 3000; // Total animation time in milliseconds
                const pauseDuration = 5000;     // 5-second pause
                let animationInterval;

                const runAnimation = () => {
                    // This clever trick forces the browser to restart the CSS animations
                    animatedSvg.classList.remove('animate');
                    void animatedSvg.offsetWidth;
                    animatedSvg.classList.add('animate');
                };

                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            // When it's visible, run it once immediately
                            runAnimation();
                            // Then, set it to loop with a 5-second pause in between
                            animationInterval = setInterval(runAnimation, animationDuration + pauseDuration);
                        } else {
                            // If it scrolls off-screen, stop the loop to save resources
                            clearInterval(animationInterval);
                            animatedSvg.classList.remove('animate');
                        }
                    });
                }, { threshold: 0.1 }); // Starts when 10% of the SVG is visible

                observer.observe(animatedSvg);
            }

            // Animated SVG link functionality
            document.querySelectorAll('.animated-svg-link12').forEach(function(btn) {
                btn.addEventListener('mouseenter', function() {
                    btn.classList.add('btn-style-3');
                });
                btn.addEventListener('mouseleave', function() {
                    btn.classList.remove('btn-style-3');
                });
            });

            // Path carousel initialization (Owl Carousel)
            if ($('.path-carousel').length > 0 && typeof $.fn.owlCarousel !== 'undefined') {
                $('.path-carousel').owlCarousel({
                    items: 1.5,
                    loop: false,
                    margin: 20,
                    stagePadding: 20,
                    nav: true,
                    navText: ['', ''],
                    onInitialized: updateCounter,
                    onTranslated: updateCounter,
                    responsive: {
                        0: {
                            items: 1.2,
                            stagePadding: 10
                        },
                        600: {
                            items: 1.5,
                            stagePadding: 20
                        },
                        1000: {
                            items: 2,
                            stagePadding: 50
                        }
                    }
                });

                // Add counter element between arrows
                $('.owl-carousel .owl-nav').prepend('<span class="owl-counter"></span>');
            }

            function updateCounter(event) {
                if (!event || !event.item) return;
                var items = event.item.count;
                var item = event.item.index - event.relatedTarget._clones.length / 2;
                if (item < 0) item = items;
                if (item > items) item = item % items;
                $('.owl-carousel .owl-counter').text(item + '/' + items);
            }

            // Success counter box hover effect
            document.querySelectorAll('.success-counter-box1').forEach(function(box) {
                var firstBox = box.querySelector('.firstbox');
                if (firstBox) {
                    box.addEventListener('mouseenter', function() {
                        firstBox.style.background = 'none';
                    });
                    box.addEventListener('mouseleave', function() {
                        firstBox.style.background = 'url(../images/countbg.png) no-repeat 110% 100% / contain';
                    });
                }
            });

            // Mega menu tab functionality
            document.querySelectorAll(".mega-menu-content").forEach(function(menu) {
                var tabs = menu.querySelectorAll(".tab-link");
                var contents = menu.querySelectorAll(".tab-content");

                if (tabs.length && contents.length) {
                    tabs.forEach(function(tab) {
                        tab.addEventListener("click", function() {
                            tabs.forEach(function(t) {
                                t.classList.remove("active");
                            });
                            contents.forEach(function(c) {
                                c.classList.remove("active");
                            });
                            this.classList.add("active");
                            var targetId = this.dataset.tab;
                            if (targetId) {
                                var target = menu.querySelector("#" + targetId);
                                if (target) {
                                    target.classList.add("active");
                                }
                            }
                        });
                    });

                    // Force first tab open inside this menu
                    if (tabs[0]) {
                        tabs[0].click();
                    }
                }
            });
        });
    }

    // Language change function - make it globally available
    window.language_changefunc = function(langvalue) {
        if (langvalue == "German") {
            window.location.href = "https://ibss.co.in/RB1/German.php";
        } else {
            window.location.href = "https://ibss.co.in/RB1/index.php";
        }
    };

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        // DOM is already ready
        init();
    }
})();
