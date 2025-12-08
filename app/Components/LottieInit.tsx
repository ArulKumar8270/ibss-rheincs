'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function LottieInit() {
  const pathname = usePathname()

  useEffect(() => {
    const initLottieAnimation = () => {
      const container = document.getElementById('lottie-container')
      
      if (!container) {
        // Element doesn't exist yet, try again after a delay
        setTimeout(() => {
          initLottieAnimation()
        }, 500)
        return
      }

      // Check if Lottie library is loaded
      if (typeof window === 'undefined' || !window.lottie) {
        // Load Lottie library if not already loaded
        const script = document.createElement('script')
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js'
        script.async = true
        script.onload = () => {
          initializeAnimation()
        }
        document.head.appendChild(script)
      } else {
        initializeAnimation()
      }

      function initializeAnimation() {
        // Clean up any existing animation
        if (container._lottieAnimation) {
          container._lottieAnimation.destroy()
          container._lottieAnimation = null
        }

        // Clear container
        container.innerHTML = ''

        // Check if lottie is available
        if (!window.lottie) {
          console.error('❌ [Lottie] Lottie library not loaded')
          return
        }

        try {
          // Load the animation
          const animation = window.lottie.loadAnimation({
            container: container,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '/js/animation.json'
          })

          // Store reference for cleanup
          container._lottieAnimation = animation

          console.log('✅ [Lottie] Animation loaded successfully')
        } catch (error) {
          console.error('❌ [Lottie] Error loading animation:', error)
        }
      }
    }

    // Initial initialization
    initLottieAnimation()

    // Re-initialize on route changes
    const timeout1 = setTimeout(() => {
      initLottieAnimation()
    }, 300)

    const timeout2 = setTimeout(() => {
      initLottieAnimation()
    }, 800)

    return () => {
      clearTimeout(timeout1)
      clearTimeout(timeout2)
      
      // Cleanup animation on unmount
      const container = document.getElementById('lottie-container')
      if (container && container._lottieAnimation) {
        container._lottieAnimation.destroy()
        container._lottieAnimation = null
      }
    }
  }, [pathname])

  return null
}
