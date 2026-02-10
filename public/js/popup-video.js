/**
 * Popup Video Handler
 * Handles YouTube video popups using Magnific Popup
 */

(function() {
  'use strict';

  /**
   * Convert YouTube URLs to embed format
   * Supports: youtu.be, youtube.com/watch, and embed URLs
   */
  function convertToEmbedUrl(url) {
    if (!url) return '';
    
    // If already an embed URL, ensure autoplay is added
    if (url.indexOf('/embed/') !== -1) {
      if (url.indexOf('autoplay') === -1) {
        return url.indexOf('?') !== -1 ? url + '&autoplay=1' : url + '?autoplay=1';
      }
      return url;
    }
    
    var videoId = '';
    
    // Extract video ID from youtu.be short URL
    var shortMatch = url.match(/youtu\.be\/([^?&#]+)/);
    if (shortMatch) {
      videoId = shortMatch[1];
    }
    // Extract video ID from watch URL
    else {
      var watchMatch = url.match(/[?&]v=([^&?#]+)/);
      if (watchMatch) {
        videoId = watchMatch[1];
      }
    }
    
    if (videoId) {
      return 'https://www.youtube.com/embed/' + videoId + '?autoplay=1&rel=0&enablejsapi=1';
    }
    
    // If no match, return original URL
    return url;
  }

  /**
   * Initialize Popup Video functionality
   */
  window.initPopupVideo = function() {
    // Check if jQuery and Magnific Popup are available
    if (typeof window.$ === 'undefined' || !window.$.fn) {
      console.warn('Popup Video: jQuery is not loaded');
      return;
    }
    
    var $ = window.$;
    
    if (typeof $.fn.magnificPopup === 'undefined') {
      console.warn('Popup Video: Magnific Popup is not loaded');
      return;
    }
    
    if ($('.popup-video').length === 0) {
      // No popup video elements found, nothing to initialize
      return;
    }
    
    try {
      // Close any existing popup instances
      if ($.magnificPopup && $.magnificPopup.instance) {
        $.magnificPopup.instance.close();
      }
      
      // Unbind existing click handlers to prevent duplicates
      $('.popup-video').off('click.magnificPopup');
      
      // Convert all YouTube URLs to embed format before initializing
      $('.popup-video').each(function() {
        var $link = $(this);
        var originalHref = $link.attr('href');
        
        if (originalHref && (originalHref.indexOf('youtube.com') !== -1 || originalHref.indexOf('youtu.be') !== -1)) {
          var embedUrl = convertToEmbedUrl(originalHref);
          $link.attr('href', embedUrl);
        }
      });
      
      // Initialize Magnific Popup
      $('.popup-video').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: true,
        closeOnBgClick: true,
        enableEscapeKey: true,
        iframe: {
          markup: '<div class="mfp-iframe-scaler">' +
                  '<div class="mfp-close"></div>' +
                  '<iframe class="mfp-iframe" frameborder="0" allowfullscreen allow="autoplay; encrypted-media"></iframe>' +
                  '</div>',
          patterns: {
            youtube: {
              index: 'youtube.com/',
              id: function(url) {
                // Try multiple patterns to extract video ID
                var m = url.match(/[?&]v=([^&]+)/);
                if (!m) {
                  m = url.match(/youtu\.be\/([^?]+)/);
                }
                if (!m) {
                  m = url.match(/embed\/([^?]+)/);
                }
                return m ? m[1] : null;
              },
              src: 'https://www.youtube.com/embed/%id%?autoplay=1&rel=0&enablejsapi=1'
            }
          }
        },
        callbacks: {
          beforeOpen: function() {
            // Optional: Add any pre-open logic here
          },
          open: function() {
            // Optional: Add any post-open logic here
          },
          close: function() {
            // Optional: Add any cleanup logic here
          }
        }
      });
      
    } catch (e) {
      console.error('Popup Video: Error initializing popup video:', e);
    }
  };

  // Auto-initialize when DOM is ready (if jQuery is available)
  if (typeof window.$ !== 'undefined') {
    $(document).ready(function() {
      // Small delay to ensure all scripts are loaded
      setTimeout(function() {
        window.initPopupVideo();
      }, 100);
    });
  }

})();
