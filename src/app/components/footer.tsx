import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer className="bg-[#742f0d] text-white py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 md:mb-6">
            <Link href="/" className="logo-font font-cursive text-3xl md:text-4xl">
              Lala Cafe
            </Link>
          </div>

          <nav className="flex justify-center gap-6 md:gap-8 mb-8 md:mb-12 text-sm">
            <Link href="/" className="hover:text-[#caa558] transition">Home</Link>
            <a href="#contact" className="hover:text-[#caa558] transition">Contact</a>
          </nav>

          <div className="flex justify-center gap-4 mb-8 md:mb-10">
            <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 md:w-9 md:h-9 rounded bg-white text-[#742f0d] flex items-center justify-center hover:bg-[#caa558] hover:text-white transition">
              <svg className="w-4 h-4 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 md:w-9 md:h-9 bg-white rounded text-[#742f0d] flex items-center justify-center hover:bg-[#caa558] hover:text-white transition">
              <svg className="w-4 h-4 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://tripadvisor.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 md:w-9 md:h-9 rounded bg-white text-[#742f0d] flex items-center justify-center hover:bg-[#caa558] hover:text-white transition">
              <svg className="w-4 h-4 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-3-8c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm9 0c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z"/></svg>
            </a>
            <a href="https://yelp.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 md:w-9 md:h-9 bg-white rounded text-[#742f0d] flex items-center justify-center hover:bg-[#caa558] hover:text-white transition">
              <svg className="w-4 h-4 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </a>
          </div>

          <div className="text-center mb-6 md:mb-8 text-sm">
            <p className="mb-2">90 Streatham Hill, London SW2 4RD</p>
            <p className="mb-2">
              <a href="tel:+442073780057" className="hover:text-[#caa558]">02086711918</a>
            </p>
            <p className="text-xs md:text-sm">
              <span className="text-[#caa558]">Open</span> - Closes at 19:00
            </p>
          </div>

          <div className="text-center text-xs md:text-sm border-t border-[#5a2509] pt-6 md:pt-6">
            <div className="flex flex-wrap justify-between items-center gap-4">
              <p>© Lala Cafe 2025</p>
              <div className="flex gap-3 md:gap-3">
                <a href="#" className="hover:text-[#caa558]">Legal Notice</a>
                <a href="#" className="hover:text-[#caa558]">Data privacy</a>
                <a href="#" className="hover:text-[#caa558]">Cookies settings</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
