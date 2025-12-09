'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function VideoPopupInit() {
  const pathname = usePathname()

  useEffect(() => {
    const initVideoPopup = () => {
      const playBtn = document.getElementById('playVideo')
      const popup = document.getElementById('videoPopup')
      const closeBtn = document.getElementById('closePopup')
      const video = document.getElementById('youtubeVideo')

      if (!playBtn || !popup || !closeBtn || !video) {
        // Elements don't exist yet, try again after a delay
        setTimeout(() => {
          initVideoPopup()
        }, 500)
        return
      }

      // Clean up existing event listeners by cloning elements
      const newPlayBtn = playBtn.cloneNode(true)
      const newCloseBtn = closeBtn.cloneNode(true)
      const newPopup = popup.cloneNode(true)
      
      if (playBtn.parentNode) {
        playBtn.parentNode.replaceChild(newPlayBtn, playBtn)
      }
      if (closeBtn.parentNode) {
        closeBtn.parentNode.replaceChild(newCloseBtn, closeBtn)
      }
      if (popup.parentNode) {
        popup.parentNode.replaceChild(newPopup, popup)
      }

      // Get fresh references after cloning
      const updatedPlayBtn = document.getElementById('playVideo')
      const updatedPopup = document.getElementById('videoPopup')
      const updatedCloseBtn = document.getElementById('closePopup')
      const updatedVideo = document.getElementById('youtubeVideo')

      if (!updatedPlayBtn || !updatedPopup || !updatedCloseBtn || !updatedVideo) {
        console.error('❌ [VideoPopup] Elements not found after cloning')
        return
      }

      // Convert YouTube watch URL to embed URL
      const getEmbedUrl = (url) => {
        // If already an embed URL, return as is
        if (url.includes('/embed/')) {
          return url
        }
        
        // Extract video ID from watch URL
        const watchMatch = url.match(/[?&]v=([^&]+)/)
        if (watchMatch) {
          return `https://www.youtube.com/embed/${watchMatch[1]}?autoplay=1`
        }
        
        // Extract video ID from short URL
        const shortMatch = url.match(/youtu\.be\/([^?]+)/)
        if (shortMatch) {
          return `https://www.youtube.com/embed/${shortMatch[1]}?autoplay=1`
        }
        
        // Default fallback
        return 'https://www.youtube.com/embed/molnWIax5DU?autoplay=1'
      }

      const openPopup = (e) => {
        e.preventDefault()
        e.stopPropagation()
        
        document.body.classList.add('popup-open')
        updatedPopup.style.display = 'flex'
        
        // Set video source with autoplay
        const videoUrl = 'https://www.youtube.com/watch?v=molnWIax5DU'
        updatedVideo.src = getEmbedUrl(videoUrl)
        
        console.log('✅ [VideoPopup] Popup opened')
      }

      const closePopup = () => {
        updatedPopup.style.display = 'none'
        // Stop video by clearing src
        updatedVideo.src = ''
        document.body.classList.remove('popup-open')
        
        console.log('✅ [VideoPopup] Popup closed')
      }

      // Attach event listeners
      updatedPlayBtn.addEventListener('click', openPopup)
      updatedCloseBtn.addEventListener('click', closePopup)
      
      // Close when clicking on popup background
      updatedPopup.addEventListener('click', (e) => {
        if (e.target === updatedPopup) {
          closePopup()
        }
      })

      // Close on Escape key
      const handleEscape = (e) => {
        if (e.key === 'Escape' && updatedPopup.style.display === 'flex') {
          closePopup()
        }
      }
      document.addEventListener('keydown', handleEscape)

      console.log('✅ [VideoPopup] Initialized successfully')

      // Return cleanup function
      return () => {
        updatedPlayBtn.removeEventListener('click', openPopup)
        updatedCloseBtn.removeEventListener('click', closePopup)
        document.removeEventListener('keydown', handleEscape)
      }
    }

    // Initial initialization
    const cleanup = initVideoPopup()

    // Re-initialize on route changes
    const timeout1 = setTimeout(() => {
      initVideoPopup()
    }, 300)

    const timeout2 = setTimeout(() => {
      initVideoPopup()
    }, 800)

    return () => {
      cleanup?.()
      clearTimeout(timeout1)
      clearTimeout(timeout2)
    }
  }, [pathname])

  return null
}
