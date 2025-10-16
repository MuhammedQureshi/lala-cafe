'use client'
import { Menu, X } from 'lucide-react';
import Link from 'next/link'
import React, { useState } from 'react'

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);  
  return (
    <div>
               {/* Header */}
       <header className="bg-white border-b sticky border-gray-200 px-4 py-4 top-0 z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="logo-font font-cursive text-4xl md:text-5xl text-gray-800">
            Lala Cafe
          </Link>
          <nav className="hidden md:flex text-black items-center gap-6">
            <a href="/menu" className="text-sm hover:text-[#5f2b11] transition">Menu</a>
            <a href="/food-order" className="text-sm hover:text-[#5f2b11] transition">Delivery & Takeaway</a>
            <a href="/#contact" className="text-sm hover:text-[#5f2b11] transition">Contact</a>
          </nav>
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded"
            onClick={() => setShowMobileMenu(true)}
          >
            <Menu className="w-6 h-6 text-black" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {showMobileMenu && (
        <div className="fixed inset-0 bg-white text-black z-50 md:hidden">
          <div className="flex flex-col h-full">
            {/* Close Button */}
            <div className="p-6">
              <button
                onClick={() => setShowMobileMenu(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Items */}
            <nav className="flex-1 px-6">
              <a
                href="/menu"
                className="block py-3 text-lg font-normal hover:underline decoration-2 underline-offset-4 transition"
              >
                Menu
              </a>
              <a
                href="/food-order"
                className="block py-3 text-lg font-normal hover:underline decoration-2 underline-offset-4 transition"
              >
                Delivery & Takeaway
              </a>
              <a
                href="/#contact"
                className="block py-3 text-lg font-normal hover:underline decoration-2 underline-offset-4 transition"
              >
                Contact
              </a>
            </nav>

            {/* Address and Contact */}
            <div className="px-6 pb-8">
              <h3 className="text-sm font-bold mb-4 tracking-wide">ADDRESS AND CONTACT</h3>
              <div className="space-y-1 text-sm">
                <p>90 Streatham Hill</p>
                <p>London SW2 4RD</p>
                <p className="mt-2">02086711918</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
