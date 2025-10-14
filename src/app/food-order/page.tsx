'use client';

import { useState } from 'react';
import Link from 'next/link';
import { X, Menu as MenuIcon, ExternalLink, ChevronDown, Menu } from 'lucide-react';

export default function FoodOrderPage() {
  const [showBanner, setShowBanner] = useState(true);
  const [orderType, setOrderType] = useState<'delivery' | 'takeaway' | null>(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);


  return (
    <div className="min-h-screen">
      {/* Top Banner */}
      {showBanner && (
        <div className="bg-[#caa558] text-white py-3 px-4 relative">
          <div className="container mx-auto flex items-center justify-between">
            <p className="text-sm md:text-base text-center flex-1 uppercase tracking-wide">
              Lala Cafe IS THE PERFECT PLACE TO HOST YOUR EVENTS IN LONDON, FOR LEISURE OR BUSINESS.{' '}
              <Link href="/#contact" className="underline font-semibold">CONTACT US</Link>
            </p>
            <button
              onClick={() => setShowBanner(false)}
              className="ml-4 hover:opacity-70"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

       {/* Header */}
       <header className="bg-white border-b border-gray-200 px-4 py-4 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="logo-font text-4xl md:text-5xl text-gray-800">
            Lala Cafe
          </Link>
          <nav className="hidden md:flex text-black items-center gap-6">
            <a href="#menu" className="text-sm hover:text-[#5f2b11] transition">Menu</a>
            <a href="#" className="text-sm hover:text-[#5f2b11] transition">Delivery & Takeaway</a>
            <a href="#contact" className="text-sm hover:text-[#5f2b11] transition">Contact</a>
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
                href="#"
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
                href="#"
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

      {/* Hero Section */}
      <section className="bg-[#742f0d] py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white uppercase">
            Delivery & Takeaway
          </h1>
        </div>
      </section>

      {/* Order Options Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {!orderType ? (
              <div className="text-center">
                <h2 className="text-2xl text-black md:text-3xl font-bold mb-12 uppercase">
                  How would you like to order?
                </h2>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <button
                    onClick={() => setOrderType('delivery')}
                    className="border-2 border-gray-800 px-12 hover:underline py-4 text-black hover:bg-gray-800 hover:text-white transition uppercase font-semibold tracking-wide text-lg min-w-[200px]"
                  >
                    Delivery
                  </button>
                  <button
                    onClick={() => setOrderType('takeaway')}
                    className="border-2 border-gray-800 px-12 py-4 text-gray-800 hover:bg-gray-800 hover:text-white transition uppercase font-semibold tracking-wide text-lg min-w-[200px]"
                  >
                    Takeaway
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-2xl md:text-3xl text-black font-bold mb-4 uppercase">
                    Available with one of our partners
                  </h2>
                  <button
                    onClick={() => setOrderType(null)}
                    className="text-gray-600 hover:text-gray-800 underline"
                  >
                    ← Back to options
                  </button>
                </div>

                {orderType === 'delivery' && (
                  <div className="space-y-6 text-black">
                    {/* Deliveroo */}
                    <a
                      href="https://deliveroo.co.uk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-6 border-b hover:bg-gray-50 transition group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 flex items-center justify-center">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY044Thr0atnFbx4mtiy8O4is5p9EPSoa-qg&s" alt="" />
                        </div>
                        <span className="font-semibold text-lg">DELIVEROO</span>
                      </div>
                    </a>

                    {/* Just Eat */}
                    <a
                      href="https://www.just-eat.co.uk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-6 border-b hover:bg-gray-50 transition group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 flex items-center justify-center">
                          <img src="https://logos-world.net/wp-content/uploads/2021/02/Just-Eat-Symbol.png" alt="" />
                        </div>
                        <span className="font-semibold text-lg">JUST EAT</span>
                      </div>
                    </a>

                    {/* Uber Eats */}
                    <a
                      href="https://www.ubereats.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-6 border-b hover:bg-gray-50 transition group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 flex items-center justify-center">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6VSGDpKsP_2nu9bnxc05vKy_IxJMTp52PMg&s" alt="" />
                        </div>
                        <span className="font-semibold text-lg">UBER EATS</span>
                      </div>
                    </a>
                  </div>
                )}

                {orderType === 'takeaway' && (
                  <div className="text-center p-12 bg-gray-50 rounded-lg">
                    <h3 className="text-xl text-black font-semibold mb-4">Takeaway Information</h3>
                    <p className="text-black mb-4">
                      Call us to place your takeaway order
                    </p>
                    <a
                      href="tel:+442073780057"
                      className="inline-block border-2 border-gray-800 px-8 py-3 text-gray-800 hover:bg-gray-800 hover:text-white transition uppercase font-semibold tracking-wide"
                    >
                      02086711918
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#742f0d] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Link href="/" className="logo-font text-5xl">
              Lala Cafe            </Link>
          </div>

          <nav className="flex justify-center gap-8 mb-12">
            <Link href="/" className="hover:text-[#caa558] transition">Home</Link>
            <Link href="/#contact" className="hover:text-[#caa558] transition">Contact</Link>
          </nav>

          <div className="flex justify-center gap-4 mb-12">
            <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded bg-white text-[#742f0d] flex items-center justify-center hover:bg-[#caa558] hover:text-white transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded bg-white text-[#742f0d] flex items-center justify-center hover:bg-[#caa558] hover:text-white transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://tripadvisor.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded bg-white text-[#742f0d] flex items-center justify-center hover:bg-[#caa558] hover:text-white transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-3-8c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm9 0c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z"/></svg>
            </a>
            <a href="https://yelp.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded bg-white text-[#742f0d] flex items-center justify-center hover:bg-[#caa558] hover:text-white transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </a>
          </div>

          <div className="text-center mb-8">
            <p className="mb-2">125 Borough High St, London SE1 1NP</p>
            <p className="mb-2">
              <a href="tel:+442073780057" className="hover:text-[#caa558]">+44 20 7378 0057</a>
            </p>
            <p className="text-sm">
              <span className="text-[#caa558]">Open</span> - Closes at 19:00
            </p>
          </div>

          <div className="text-center text-sm border-t border-[#5a2509] pt-8">
            <div className="flex flex-wrap justify-between items-center gap-4">
              <p>© Lala Cafe 2025</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-[#caa558]">Legal Notice</a>
                <a href="#" className="hover:text-[#caa558]">Data privacy</a>
                <a href="#" className="hover:text-[#caa558]">Cookies settings</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
