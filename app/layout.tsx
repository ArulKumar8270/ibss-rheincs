import type { Metadata } from "next";
import Script from "next/script";
import SwiperInit from "./Components/SwiperInit";
import OwlCarouselInit from "./Components/OwlCarouselInit";
import CounterInit from "./Components/CounterInit";
import ScriptReinit from "./Components/ScriptReinit";
import MobileMenuInit from "./Components/MobileMenuInit";
import MobileSearchInit from "./Components/MobileSearchInit";
import SearchBoxInit from "./Components/SearchBoxInit";
import LottieInit from "./Components/LottieInit";
import VideoPopupInit from "./Components/VideoPopupInit";
import PopoverInit from "./Components/PopoverInit";
import LoadingWrapper from "./Components/LoadingWrapper";
import RouteTracker from "./Components/RouteTracker";
import LeadSquaredInit from "./Components/LeadSquaredInit";
import React, { Suspense } from "react";
import "./globals.css";

import translations from "./translations.json";

export const metadata: Metadata = {
  title: "Enterprise Digital Transformation & ERP Solutions | RheinBrücke",
  description: "Driving Digital Innovation with Integrated Business Platforms",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/fav.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fustat:wght@200..800&family=Raleway:ital,wght@0,100..900;1,100..900&family=Radio+Canada:ital,wght@0,300..700;1,300..700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Parkinsans:wght@300..800&display=swap"
          rel="stylesheet"
        />
        
        {/* Non-render-blocking styles (raw HTML so onload works) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
          <link href="https://use.typekit.net/guc8vih.css" rel="stylesheet" media="print" onload="this.media='all'" />
          <link href="https://fonts.cdnfonts.com/css/helvetica-neue-lt-pro" rel="stylesheet" media="print" onload="this.media='all'" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" media="print" onload="this.media='all'" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" media="print" onload="this.media='all'" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bxslider/4.2.12/jquery.bxslider.min.css" media="print" onload="this.media='all'" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/jquery.slick/1.5.9/slick.css" media="print" onload="this.media='all'" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css" media="print" onload="this.media='all'" />
        `,
          }}
        />
        
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/slicknav.min.css" />
        <link rel="stylesheet" href="/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/css/all.css" />
        <link rel="stylesheet" href="/css/animate.css" />
        <link rel="stylesheet" href="/css/magnific-popup.css" />
        <link rel="stylesheet" href="/css/mousecursor.css" />
        <link rel="stylesheet" href="/css/owl.carousel.css" />
        <link rel="stylesheet" href="/css/custom.css" />
        
        {/* <link rel="stylesheet" href="./css/enterprise.css" /> */}
        <link rel="stylesheet" href="/style2.css" />

        {/* Fallback for non-render-blocking styles if JS is disabled */}
        <noscript>
          <link href="https://use.typekit.net/guc8vih.css" rel="stylesheet" />
          <link
            href="https://fonts.cdnfonts.com/css/helvetica-neue-lt-pro"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/bxslider/4.2.12/jquery.bxslider.min.css"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/jquery.slick/1.5.9/slick.css"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"
          />
        </noscript>

        {/* Global translations for vanilla JS */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.translations = ${JSON.stringify(translations)};`,
          }}
        />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WHPH6XN');`,
          }}
        />

        {/* Google tag (gtag.js) - AW-795585511 */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-795585511"
          defer
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-795585511');`,
          }}
        />

        {/* Google tag (gtag.js) - G-2XTG321QD3 */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-2XTG321QD3"
          defer
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-2XTG321QD3');`,
          }}
        />

        {/* Freshmarketer */}
        <script src="//cdn.freshmarketer.com/195245/632861.js" defer></script>

        {/* Factors.ai */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.factors = window.factors || function () { this.q = []; var i = new CustomEvent("FACTORS_QUEUED_EVENT"), n = function (t, e) { this.q.push({ k: t, a: e }), window.dispatchEvent(i) }; return this.track = function (t, e, i) { n("track", arguments) }, this.init = function (t, e, i) { this.TOKEN = t, this.INIT_PARAMS = e, this.INIT_CALLBACK = i, window.dispatchEvent(new CustomEvent("FACTORS_INIT_EVENT")) }, this.reset = function () { n("reset", arguments) }, this.page = function (t, e) { n("page", arguments) }, this.updateEventProperties = function (t, e) { n("updateEventProperties", arguments) }, this.identify = function (t, e) { n("identify", arguments) }, this.addUserProperties = function (t) { n("addUserProperties", arguments) }, this.getUserId = function () { n("getUserId", arguments) }, this.call = function () { var t = { k: "", a: [] }; if (arguments && 1 <= arguments.length) { for (var e = 1; e < arguments.length; e++) t.a.push(arguments[e]); t.k = arguments[0] } this.q.push(t), window.dispatchEvent(i) }, this.init("yyq3qwq23c7r4rq7o5refttcg39ju39m"), this }(), function () { var t = document.createElement("script"); t.type = "text/javascript", t.src = "https://app.factors.ai/assets/v1/factors.js", t.async = !0, d = document.getElementsByTagName("script")[0], d.parentNode.insertBefore(t, d) }();`,
          }}
        />


        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Rheinbrücke IT Consulting",
              url: "https://en.rheincs.com/",
              logo: "https://en.rheincs.com/Assets/images/RheinBr%C3%BCcke-logo.jpg",
              sameAs: [
                "https://www.facebook.com/RheinBrucke",
                "https://twitter.com/RheinBruckeIT",
                "https://www.youtube.com/channel/UCuR25ldsvrd7yd5vkzqntAg",
                "https://www.linkedin.com/company/rheinbr%C3%BCcke-it-consulting",
              ],
              department: [
                {
                  "@type": "LocalBusiness",
                  name: "RheinBrücke IT Consulting BV",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Stationsplein, 8K NL-6221BT",
                    addressLocality: "Maastricht",
                    addressRegion: "",
                    postalCode: "6221BT",
                    addressCountry: "Netherlands",
                  },
                  telephone: "+31 (0) 43 799 9102",
                  email: "info@rheincs.com",
                },
                {
                  "@type": "LocalBusiness",
                  name: "RheinBrücke IT Consulting GmbH",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Ruhrallee 9",
                    addressLocality: "Dortmund",
                    addressRegion: "",
                    postalCode: "44139",
                    addressCountry: "Germany",
                  },
                  telephone: "+49 231 292 95619",
                  email: "info@rheincs.com",
                },
                {
                  "@type": "LocalBusiness",
                  name: "RheinBrücke IT Consulting",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "3815 Chippenham Road",
                    addressLocality: "Mechanicsburg",
                    addressRegion: "PA",
                    postalCode: "17050",
                    addressCountry: "United States",
                  },
                  telephone: "+1 717 265 3937",
                  email: "info@rheincs.com",
                },
                {
                  "@type": "LocalBusiness",
                  name: "RheinBrücke IT Consulting Pvt Ltd",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress:
                      "Bharati Vilas, 1st Floor, 26B Jawaharlal Nehru Salai, Ekkatuthangal, Guindy Industrial Estate",
                    addressLocality: "Chennai",
                    addressRegion: "Tamil Nadu",
                    postalCode: "600032",
                    addressCountry: "India",
                  },
                  telephone: "+91 44 6671 7555",
                  email: "info@rheincs.com",
                },
                {
                  "@type": "LocalBusiness",
                  name: "RheinBrücke IT Consulting EMEA FZE",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress:
                      "2-234-235 – Techno Hub 2, Dubai Silicon Oasis",
                    addressLocality: "Dubai",
                    addressRegion: "",
                    postalCode: "342060",
                    addressCountry: "United Arab Emirates",
                  },
                  telephone: "+971 43 330 366",
                  email: "info@rheincs.com",
                },
                {
                  "@type": "LocalBusiness",
                  name: "RheinBrücke IT Consulting DMCC",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress:
                      "Unit No. 30-01-949, Floor No. 1, Bldg No. 3, Plot No. 550-554, J&G, DMCC",
                    addressLocality: "Dubai",
                    addressRegion: "",
                    postalCode: "",
                    addressCountry: "United Arab Emirates",
                  },
                  telephone: "+971 50 650 8854",
                  email: "info@rheincs.com",
                },
              ],
            }),
          }}
        />

        {/* ✅ jQuery FIRST */}
        <Script
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          strategy="beforeInteractive"
        />
      
        
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WHPH6XN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Suspense fallback={null}>
          <RouteTracker />
        </Suspense>
        <LoadingWrapper>{children}</LoadingWrapper>
        <LeadSquaredInit />
        <SwiperInit />
        <OwlCarouselInit />
        <CounterInit />
        <MobileMenuInit />
        <MobileSearchInit />
        <SearchBoxInit />
        <LottieInit />
        <VideoPopupInit />
        <PopoverInit />
        <ScriptReinit />

        {/* Google Conversion Tracking */}
        <script
          dangerouslySetInnerHTML={{
            __html: `var google_tag_params = { dynx_itemid: '48550682' };`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `var google_conversion_id = 955726328; var google_custom_params = window.google_tag_params; var google_remarketing_only = true;`,
          }}
        />
        <script
          type="text/javascript"
          src="//www.googleadservices.com/pagead/conversion.js"
          defer
        ></script>

        {/* Google Analytics */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function (i, s, o, g, r, a, m) { i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () { (i[r].q = i[r].q || []).push(arguments) }, i[r].l = 1 * new Date(); a = s.createElement(o), m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m) })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga'); ga('create', 'UA-61074754-1', 'auto'); ga('set', 'anonymizeIp', true); ga('send', 'pageview');`,
          }}
        />

        {/* VWO (Visual Website Optimizer) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `var _vwo_code = (function () { var account_id = 292694, settings_tolerance = 2000, library_tolerance = 2500, use_existing_jquery = false, f = false, d = document; return { use_existing_jquery: function () { return use_existing_jquery; }, library_tolerance: function () { return library_tolerance; }, finish: function () { if (!f) { f = true; var a = d.getElementById('_vis_opt_path_hides'); if (a) a.parentNode.removeChild(a); } }, finished: function () { return f; }, load: function (a) { var b = d.createElement('script'); b.src = a; b.type = 'text/javascript'; b.innerText; b.onerror = function () { _vwo_code.finish(); }; d.getElementsByTagName('head')[0].appendChild(b); }, init: function () { settings_timer = setTimeout('_vwo_code.finish()', settings_tolerance); var a = d.createElement('style'), b = 'body{opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;}', h = d.getElementsByTagName('head')[0]; a.setAttribute('id', '_vis_opt_path_hides'); a.setAttribute('type', 'text/css'); if (a.styleSheet) a.styleSheet.cssText = b; else a.appendChild(d.createTextNode(b)); h.appendChild(a); this.load('//dev.visualwebsiteoptimizer.com/j.php?a=' + account_id + '&u=' + encodeURIComponent(d.URL) + '&r=' + Math.random()); return settings_timer; } }; }()); _vwo_settings_timer = _vwo_code.init();`,
          }}
        />

        {/* Google Conversion Tracking - noscript */}
        <noscript>
          <div style={{ display: "inline" }}>
            <img
              height="1"
              width="1"
              style={{ borderStyle: "none" }}
              alt=""
              src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/955726328/?guid=ON&amp;script=0"
              loading="lazy"
            />
          </div>
        </noscript>

        {/* LiveChat Widget (loads only after cookie consent) */}
        <Script id="livechat-init" strategy="afterInteractive">
          {`
            (function () {
              function isAccepted() {
                var consent = null;
                try { consent = localStorage.getItem('cookieConsent'); } catch (e) {}
                var cookie = (document.cookie || '').split(';').map(function(s){return s.trim();}).find(function(s){ return s.indexOf('CookieConsent=') === 0; });
                var val = cookie ? cookie.split('=')[1] : null;
                return consent === 'accepted' || val === 'accepted';
              }
              function initLiveChat() {
                if (window.LiveChatWidget && window.LiveChatWidget.get) return;
                window.__lc = window.__lc || {}; window.__lc.license = 14850255;
                (function (n, t, c) {
                  function i(n) { return e._h ? e._h.apply(null, n) : e._q.push(n) }
                  var e = {
                    _q: [], _h: null, _v: "2.0",
                    on: function () { i(["on", c.call(arguments)]) },
                    once: function () { i(["once", c.call(arguments)]) },
                    off: function () { i(["off", c.call(arguments)]) },
                    get: function () { if (!e._h) throw new Error("[LiveChatWidget] You can't use getters before load."); return i(["get", c.call(arguments)]) },
                    call: function () { i(["call", c.call(arguments)]) },
                    init: function () { var n = t.createElement("script"); n.async = !0; n.type = "text/javascript"; n.src = "https://cdn.livechatinc.com/tracking.js"; t.head.appendChild(n) }
                  };
                  !n.__lc.asyncInit && e.init(), n.LiveChatWidget = n.LiveChatWidget || e
                }(window, document, [].slice));
              }
              if (isAccepted()) {
                initLiveChat();
              } else {
                window.addEventListener('cookieConsentAccepted', function(){ initLiveChat(); }, { once: true });
              }
            })();
          `}
        </Script>
        <noscript>
          <a href="https://www.livechat.com/chat-with/14850255/" rel="nofollow">
            Chat with us
          </a>
          , powered by{" "}
          <a href="#" rel="noopener nofollow" target="_blank">
            LiveChat
          </a>
        </noscript>

        {/* Google reCAPTCHA */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `var onloadCallback = function () { grecaptcha.render('g_captcha', { 'sitekey': '6LchLhApAAAAAKh9skbfRiq9ZLwCfCrLZrfcvyCn' }); };`,
          }}
        />
        <script src="https://www.google.com/recaptcha/api.js" defer></script>

        {/* Google Conversion Functions */}
        <script
          dangerouslySetInnerHTML={{
            __html: `function gtag_report_conversion(url) { var callback = function () { if (typeof (url) != 'undefined') { window.location = url; } }; gtag('event', 'conversion', { 'send_to': 'AW-795585511/1tsTCLe_6ZYBEOfXrvsC', 'event_callback': callback }); return false; }`,
          }}
        />

        {/* LiveChat API - Google AdWords Tracking */}
        <script
          dangerouslySetInnerHTML={{
            __html: `var LC_API = LC_API || {}; LC_API.on_chat_started = function () { var google_conversion_id, google_conversion_label, img; google_conversion_id = '795585511'; google_conversion_label = 'vNDLCMG5iawaEOfXrvsC'; img = new Image(1, 1); img.src = 'https://www.googleadservices.com/pagead/conversion/' + google_conversion_id + '/?label=' + google_conversion_label + '&script=0'; };`,
          }}
        />

        {/* Google Conversion Async */}
        <script
          dangerouslySetInnerHTML={{
            __html: `goog_snippet_vars = function () { var w = window; w.google_conversion_id = 795585511; w.google_conversion_label = "vNDLCMG5iawaEOfXrvsC"; w.google_conversion_value = 13.00; w.google_conversion_currency = "USD"; w.google_remarketing_only = false; } goog_report_conversion = function (url) { goog_snippet_vars(); window.google_conversion_format = "3"; var opt = new Object(); opt.onload_callback = function () { if (typeof (url) != 'undefined') { window.location = url; } } var conv_handler = window['google_trackConversion']; if (typeof (conv_handler) == 'function') { conv_handler(opt); } }`,
          }}
        />
        <script
          type="text/javascript"
          src="//www.googleadservices.com/pagead/conversion_async.js"
        ></script>

      <script
        dangerouslySetInnerHTML={{
          __html: `
          (function() {
            var scripts = [
              '/js/jquery-3.7.1.min.js',
              'https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js',
              '/js/bootstrap.min.js',
              '/js/validator.min.js',
              '/js/jquery.slicknav.js',
              '/js/swiper-bundle.min.js',
              '/js/jquery.waypoints.min.js',
              '/js/jquery.counterup.min.js',
              '/js/isotope.min.js',
              '/js/jquery.magnific-popup.min.js',
              '/js/SmoothScroll.js',
              '/js/parallaxie.js',
              '/js/gsap.min.js',
              '/js/magiccursor.js',
              '/js/SplitText.js',
              '/js/ScrollTrigger.min.js',
              '/js/jquery.mb.YTPlayer.min.js',
              '/js/typed.js',
              '/js/wow.js',
              'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js',
              'https://cdnjs.cloudflare.com/ajax/libs/bxslider/4.2.12/jquery.bxslider.min.js',
              '/js/popup-video.js',
              '/js/function.js',
              '/js/main.js',
              'http://dimsemenov.com/plugins/magnific-popup/dist/jquery.magnific-popup.min.js'
            ];
            function loadScript(src, callback) {
              var script = document.createElement('script');
              script.src = src;
              script.async = false;
              if (callback) {
                script.onload = callback;
              }
              document.body.appendChild(script);
            }
            
            function loadScriptsSequentially(index) {
              if (index >= scripts.length) return;
              
              var src = scripts[index];
              var isLast = index === scripts.length - 1;
              
              loadScript(src, function() {
                if (src.includes('owl.carousel')) {
                  if (window.dispatchEvent) {
                    window.dispatchEvent(new Event('owlCarouselLoaded'));
                  }
                }
                if (!isLast) {
                  loadScriptsSequentially(index + 1);
                }
              });
            }
            
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', function() {
                loadScriptsSequentially(0);
              });
            } else {
              loadScriptsSequentially(0);
            }
          })();
          
          // Handle chunk loading errors gracefully for static export
          window.addEventListener('error', function(e) {
            if (e.message && e.message.includes('Failed to load chunk')) {
              console.warn('Chunk loading error (non-critical for static export):', e.message);
              e.preventDefault();
              return true;
            }
          }, true);
          
          // Handle unhandled promise rejections from chunk loading
          window.addEventListener('unhandledrejection', function(e) {
            if (e.reason && (e.reason.message && e.reason.message.includes('Failed to load chunk') || 
                e.reason.message && e.reason.message.includes('Loading chunk'))) {
              console.warn('Chunk loading rejection (non-critical for static export):', e.reason.message);
              e.preventDefault();
            }
          });

        `,
        }}
      />
    </body>
  </html>
);
}
