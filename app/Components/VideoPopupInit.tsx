'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function VideoPopupInit() {
  const pathname = usePathname()

  useEffect(() => {
    let openPopup: ((e: Event) => void) | null = null
    let closePopup: (() => void) | null = null
    let handleEscape: ((e: KeyboardEvent) => void) | null = null

    const init = () => {
      const playBtn = document.getElementById('playVideo')
      const popup = document.getElementById('videoPopup')
      const closeBtn = document.getElementById('closePopup')
      const video = document.getElementById('youtubeVideo') as HTMLIFrameElement | null

      if (!playBtn || !popup || !closeBtn || !video) {
        setTimeout(init, 500)
        return
      }

      // Hide popup initially
      popup.style.display = 'none'

      openPopup = (e: Event) => {
        e.preventDefault()
        e.stopPropagation()
        document.body.classList.add('popup-open')
        popup.style.display = 'flex'
        video.src = 'https://www.youtube.com/embed/molnWIax5DU'
      }

      closePopup = () => {
        popup.style.display = 'none'
        video.src = ''
        document.body.classList.remove('popup-open')
      }

      handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && popup.style.display === 'flex') {
          closePopup?.()
        }
      }

      playBtn.addEventListener('click', openPopup)
      closeBtn.addEventListener('click', closePopup)
      document.addEventListener('keydown', handleEscape)

      popup.addEventListener('click', (e) => {
        if (e.target === popup) {
          closePopup?.()
        }
      })
    }

    init()

    return () => {
      const playBtn = document.getElementById('playVideo')
      const closeBtn = document.getElementById('closePopup')
      
      if (playBtn && openPopup) {
        playBtn.removeEventListener('click', openPopup)
      }
      if (closeBtn && closePopup) {
        closeBtn.removeEventListener('click', closePopup)
      }
      if (handleEscape) {
        document.removeEventListener('keydown', handleEscape)
      }
    }
  }, [pathname])

  return null
}
