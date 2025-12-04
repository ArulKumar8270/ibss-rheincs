'use client'
import Header from './Header'
import Footer from './Footer'
import ScriptReinit from './ScriptReinit'

export default function CommomLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <ScriptReinit />
    </>
  )
}