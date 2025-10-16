'use client';

import { useState } from 'react';
import Link from 'next/link';
import { X, MapPin, Phone, Mail, Menu as MenuIcon, Menu, ChevronDown } from 'lucide-react';
import Navbar from './components/navbar';

export default function Home() {
  const [showBanner, setShowBanner] = useState(true);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Top Banner */}
      {showBanner && (
        <div className="bg-[#caa558] text-white py-3 px-4 relative">
          <div className="container mx-auto flex items-center justify-between">
            <p className="text-sm md:text-base text-center flex-1 uppercase tracking-wide">
              Lala Cafe IS THE PERFECT PLACE TO HOST YOUR EVENTS IN LONDON, FOR LEISURE OR BUSINESS.{' '}
              <a href="#contact" className="underline font-semibold">CONTACT US</a>
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
      <Navbar />

      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0">
          <img
            src="/tea2.jpg"
            alt="Traditional Moroccan mint tea"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative container mx-auto px-4 py-24 md:py-40">
          <div className="max-w-3xl">
            <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight uppercase">
              A Taste of North African Cuisine
            </h1>
            <p className="mt-6 text-white/90 text-lg md:text-xl leading-relaxed">
              Discover warm hospitality and rich Moroccan flavors in the heart of South London.
              From aromatic tagines and fluffy couscous to freshly baked pastries and traditional mint tea.
            </p>
            <div className="mt-10">
              <Link
                href="/food-order"
                className="inline-block rounded-xl border-2 border-white px-8 py-3 text-white hover:bg-white hover:text-[#742f0d] transition uppercase font-semibold tracking-wide"
              >
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="bg-[#742f0d] py-16">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 uppercase">Menu</h2>
          <a
            href="#"
            className="inline-block rounded-xl border-2 border-white px-8 py-3 text-white hover:bg-white hover:text-[#742f0d] transition uppercase font-semibold tracking-wide"
          >
            View More
          </a>
        </div>
      </section>

      {/* Food Gallery */}
      <section className="bg-[#f8f1ee] py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <img
                src="/break.jpg"
                alt="Moroccan breakfast"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <img
                src="/burger.jpg"
                alt="Burger and fries"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="contact" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <MapPin className="w-6 h-6" />
                Lala Cafe
              </h3>
              <p className="text-gray-700 mb-2">90 Streatham Hill</p>
              <p className="text-gray-700 mb-6">London SW2 4RD</p>

              <div className="flex items-center gap-2 mb-4">
                <Phone className="w-5 h-5" />
                <a href="tel:+442073780057" className="text-gray-700 hover:text-[#caa558]">
                  02086711918
                </a>
              </div>

              {/* <div className="flex items-center gap-2 mb-8">
                <Mail className="w-5 h-5" />
                <a href="#contact" className="text-gray-700 hover:text-[#caa558]">
                  Contact
                </a>
              </div> */}

              <div className="space-y-2 mb-6">
                <p className="text-gray-700 text-sm">American Express | Cash | Visa | Mastercard | Debit card | Google pay | Apple pay</p>
              </div>

              <div className="space-y-2 text-sm text-gray-700">
                <p>✓ Wheelchair accessible</p>
                <p>✓ Outdoor seating</p>
                <p>✓ Air cooling</p>
                <p>✓ Family-friendly</p>
              </div>
            </div>

            <div className="relative h-[400px] bg-gray-200 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <a
                  href="https://maps.app.goo.gl/amcTjN4qC6PJWJUn6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#742f0d] text-white px-6 py-3 rounded hover:bg-[#5a2509] transition uppercase font-semibold"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome CTA Section */}
      <section id="delivery" className="bg-[#caa558] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase">
            Welcome to Lala Cafe
          </h2>
          <p className="text-white mb-8 text-lg">
            You can order Online or by phone <a href="tel:02086711918" className="underline">02086711918</a>
          </p>

          <div className="flex justify-center gap-8 mb-8">
            <img
              src="https://ext.same-assets.com/1733516/4269835566.png"
              alt="Halal"
              className="h-20 object-contain bg-white rounded-full p-2"
            />
          </div>

          <Link
            href="/food-order"
            className="inline-block rounded-xl border-2 border-white px-8 py-3 text-white hover:bg-white hover:text-[#caa558] transition uppercase font-semibold tracking-wide"
          >
            Order Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#742f0d] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Link href="/" className="logo-font text-5xl">
              Lala Cafe
            </Link>
          </div>

          <nav className="flex justify-center gap-8 mb-12">
            <Link href="/" className="hover:text-[#caa558] transition">Home</Link>
            <a href="#contact" className="hover:text-[#caa558] transition">Contact</a>
          </nav>

          <div className="flex justify-center gap-4 mb-12">
            <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded bg-white text-[#742f0d] flex items-center justify-center hover:bg-[#caa558] hover:text-white transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded text-[#742f0d] flex items-center justify-center hover:bg-[#caa558] hover:text-white transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://tripadvisor.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded text-[#742f0d] flex items-center justify-center hover:bg-[#caa558] hover:text-white transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-3-8c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm9 0c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z"/></svg>
            </a>
            <a href="https://yelp.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded text-[#742f0d] flex items-center justify-center hover:bg-[#caa558] hover:text-white transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </a>
          </div>

          <div className="text-center mb-8">
            <p className="mb-2">90 Streatham Hill, London SW2 4RD</p>
            <p className="mb-2">
              <a href="tel:+442073780057" className="hover:text-[#caa558]">02086711918</a>
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
