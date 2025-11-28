'use client'
import Header from './Header'
import Footer from './Footer'
export default function CommomLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}