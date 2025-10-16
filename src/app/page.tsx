'use client';

import { useState } from 'react';
import Link from 'next/link';
import { X, MapPin, Phone, Mail, Menu as MenuIcon, Menu, ChevronDown } from 'lucide-react';
import Navbar from './components/navbar';
import Footer from './components/footer';

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
      <section className="relative md:h-screen flex items-center justify-center">
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
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 uppercase">Menu</h2>
          <Link
            href="/menu"
            className="inline-block rounded-xl border-2 border-white px-6 py-2 text-white text-sm md:px-8 md:py-3 md:text-base hover:bg-white hover:text-[#742f0d] transition uppercase font-semibold tracking-wide"
          >
            View More
          </Link>
        </div>
      </section>

      {/* Food Gallery */}
      <section className="bg-[#f8f1ee] py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-64 md:h-[400px] overflow-hidden rounded-lg">
              <img
                src="/break.jpg"
                alt="Moroccan breakfast"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-64 md:h-[400px] overflow-hidden rounded-lg">
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
              <h3 className="text-2xl text-black font-bold mb-6 flex items-center gap-2">
                <MapPin className="w-6 h-6" />
                Lala Cafe
              </h3>
              <p className="text-gray-700 mb-2">90 Streatham Hill</p>
              <p className="text-gray-700 mb-6">London SW2 4RD</p>

              <div className="flex items-center gap-2 mb-4">
                <Phone className="w-5 h-5 text-[#caa558]" />
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

            <div className="relative h-64 md:h-[400px] bg-gray-200 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <a
                  href="https://maps.app.goo.gl/amcTjN4qC6PJWJUn6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#742f0d] text-white px-5 py-2 rounded hover:bg-[#5a2509] transition uppercase font-semibold text-sm md:px-6 md:py-3 md:text-base"
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
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 uppercase">
            Welcome to Lala Cafe
          </h2>
          <p className="text-white mb-8 text-base md:text-lg">
            You can order Online or by phone <a href="tel:02086711918" className="underline">02086711918</a>
          </p>

          <div className="flex justify-center gap-8 mb-8">
            <img
              src="https://ext.same-assets.com/1733516/4269835566.png"
              alt="Halal"
              className="h-16 md:h-20 object-contain bg-white rounded-full p-2"
            />
          </div>

          <Link
            href="/food-order"
            className="inline-block rounded-xl border-2 border-white px-6 py-2 text-white text-sm md:px-8 md:py-3 md:text-base hover:bg-white hover:text-[#caa558] transition uppercase font-semibold tracking-wide"
          >
            Order Now
          </Link>
        </div>
      </section>
      <Footer />

    </div>
  );
}
