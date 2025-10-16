'use client';

import { useState } from 'react';
import Link from 'next/link';
import { X, Menu as MenuIcon, ExternalLink, ChevronDown, Menu } from 'lucide-react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

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
       <Navbar />

      {/* Hero Section */}
      <section className="bg-[#742f0d] py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white uppercase">
            Delivery & Takeaway
          </h1>
        </div>
      </section>

      {/* Order Options Section */}
      <section className="bg-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-2xl md:text-3xl text-black font-bold mb-4 uppercase">
                    Available with one of our partners
                  </h2>
                </div>
                  <div className="space-y-6 text-black">
                    {/* Deliveroo */}
                    <a
                      href="https://deliveroo.co.uk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-6 border-b hover:bg-gray-50 transition group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-28 h-28 md:w-40 md:h-40 flex items-center justify-center">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY044Thr0atnFbx4mtiy8O4is5p9EPSoa-qg&s" alt="" />
                        </div>
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
                        <div className="w-28 h-28 md:w-40 md:h-40 flex items-center justify-center">
                          <img className='rounded-2xl' src="https://logos-world.net/wp-content/uploads/2021/02/Just-Eat-Symbol.png" alt="" />
                        </div>
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
                        <div className="w-28 h-28 md:w-40 md:h-40 flex items-center justify-center">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6VSGDpKsP_2nu9bnxc05vKy_IxJMTp52PMg&s" alt="" />
                        </div>
                      </div>
                    </a>
                  </div>

                {orderType === 'takeaway' && (
                  <div className="text-center p-8 md:p-12 bg-gray-50 rounded-lg">
                    <h3 className="text-lg md:text-xl text-black font-semibold mb-4">Takeaway Information</h3>
                    <p className="text-black mb-4 text-sm md:text-base">
                      Call us to place your takeaway order
                    </p>
                    <a
                      href="tel:+442073780057"
                      className="inline-block border-2 border-gray-800 px-6 py-2 text-sm md:px-8 md:py-3 md:text-base text-gray-800 hover:bg-gray-800 hover:text-white transition uppercase font-semibold tracking-wide"
                    >
                      02086711918
                    </a>
                  </div>
                )}
              </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
}
