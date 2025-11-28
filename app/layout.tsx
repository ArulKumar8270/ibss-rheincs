import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SwiperInit from './Components/SwiperInit'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rheincs - Enterprise Solutions',
  description: 'Empowering businesses to operate smarter, adapt faster, and unlock new opportunities',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fustat:wght@200..800&family=Raleway:ital,wght@0,100..900;1,100..900&family=Radio+Canada:ital,wght@0,300..700;1,300..700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Parkinsans:wght@300..800&display=swap" rel="stylesheet" />
        <link href="https://use.typekit.net/guc8vih.css" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/helvetica-neue-lt-pro" rel="stylesheet" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/slicknav.min.css" />
        <link rel="stylesheet" href="/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/css/all.css" />
        <link rel="stylesheet" href="/css/animate.css" />
        <link rel="stylesheet" href="/css/magnific-popup.css" />
        <link rel="stylesheet" href="/css/mousecursor.css" />
        <link rel="stylesheet" href="/css/owl.carousel.css" />
        <link rel="stylesheet" href="/css/custom.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bxslider/4.2.12/jquery.bxslider.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/jquery.slick/1.5.9/slick.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css" />
        <link rel="stylesheet" href="https://use.typekit.net/guc8vih.css" />
        {/* <link rel="stylesheet" href="./css/enterprise.css" /> */}
        <link rel="stylesheet" href="/style2.css" />
      </head>
      <body className={inter.className}>
        {children}
        <SwiperInit />
      </body>
      <script dangerouslySetInnerHTML={{
        __html: `
          (function() {
            var scripts = [
              '/js/jquery-3.7.1.min.js',
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
              '/js/function.js',
              '/js/main.js'
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
        `
      }} />
    </html>
  )
}
