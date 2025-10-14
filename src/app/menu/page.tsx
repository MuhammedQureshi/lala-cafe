'use client';

import { useState } from 'react';
import { X, ChevronDown, Menu } from 'lucide-react';
import Link from 'next/link';
import Navbar from '../components/navbar';

const menuData = {
  mains: [
    { name: "Shrigleys Traditional English Breakfast", desc: "Turkey bacon, beef sausage, fried or scrambled eggs, Heinz baked beans, mushroom and toast", price: "£11.50" },
    { name: "Turkey bacon & eggs served in ciabatta roll, English muffin or sandwich", desc: "", price: "£7.15" },
    { name: "Beef sausage & eggs served in ciabatta roll, English Muffin or sandwich", desc: "", price: "£7.15" },
    { name: "Eggs Benedict", desc: "Poached eggs, turkey bacon, and Hollandaise sauce. Served on an English muffin with mixed leaves", price: "£11.50" },
    { name: "Eggs Benedict Royal", desc: "Poached eggs, smoked salmon, and Hollandaise sauce. Served on an English muffin with mixed leaves", price: "£11.50" },
    { name: "Beef sausage sandwich", desc: "Juicy beef sausage served in a sandwich.", price: "£5.20" },
    { name: "Omelette", desc: "Flavourful eggs, expertly cooked to a tender fold.", price: "£10.50" },
  ],
  hotMeals: [
    { name: "Meat Lasagna with Garnish Salad", desc: "Layered pasta with meat and a side of fresh garnish salad.", price: "£11.95" },
    { name: "Pasta of the day with Halloumi cheese", desc: "Creamy pesto pasta, Mushroom, Asparagus, Mange tout, Baby corn, Roasted mixed peppers, and broccoli served with halloumi cheese", price: "£12.50" },
    { name: "Pasta of the day with Moroccan Chicken", desc: "Creamy pesto pasta, Mushroom, Asparagus, Mange tout, Baby corn, Roasted mixed peppers, and broccoli served with Moroccan chicken", price: "£12.50" },
    { name: "Omelette", desc: "Flavourful eggs, expertly cooked to a tender fold.", price: "£10.50" },
    { name: "Pasta of the Day", desc: "Creamy pesto pasta, Mushroom, Asparagus, mange tout, baby corn, roasted mixed peppers and broccoli", price: "£9.95" },
    { name: "Chilli Con Carne with Rice and Cheese", desc: "Spicy beef dish served with rice and melted cheese.", price: "£12.50" },
    { name: "Chilli Con Carne with Rice", desc: "Spicy beef dish served with rice.", price: "£10.98" },
  ],
  salads: [
    { name: "Moroccan Chicken Royal Salad", desc: "Marinated Moroccan chicken breast, kofta, and grilled halloumi. Served on a bed of mixed leaves salad with salsa, chopped tomatoes, cucumber, red onion, and parsley. Served with hummus, couscous, and pitta bread.", price: "£12.98" },
    { name: "Moroccan Chicken Salad", desc: "Served on a bed of mixed leaves salad with salsa, chopped tomatoes, cucumber, red onion, and parsley. Served with hummus, couscous, and pitta bread.", price: "£11.65" },
    { name: "Falafel and Halloumi Salad", desc: "Served on a bed of mixed leaves salad with salsa, chopped tomatoes, cucumber, red onion, and parsley. Served with hummus, couscous, and pitta bread.", price: "£11.65", label: "VEGETARIAN" },
    { name: "Falafel Salad", desc: "Served on a bed of mixed leaves salad with salsa, chopped tomatoes, cucumber, red onion, and parsley. Served with hummus, couscous, and pitta bread.", price: "£11.65", label: "VEGAN" },
    { name: "Moroccan Chicken and Kofta Salad", desc: "Served on a bed of mixed leaves salad with salsa, chopped tomatoes, cucumber, red onion, and parsley. Served with hummus, couscous, and pitta bread.", price: "£11.65" },
    { name: "Halloumi Cheese Salad", desc: "Served on a bed of mixed leaves salad with salsa, chopped tomatoes, cucumber, red onion, and parsley. Served with hummus, couscous, and pitta bread.", price: "£11.65", label: "VEGETARIAN" },
    { name: "Moroccan Chicken and Halloumi Salad", desc: "Served on a bed of mixed leaves salad with salsa, chopped tomatoes, cucumber, red onion, and parsley. Served with hummus, couscous, and pitta bread.", price: "£11.65" },
    { name: "Moroccan Kofta Salad", desc: "Served on a bed of mixed leaves salad with salsa, chopped tomatoes, cucumber, red onion, and parsley. Served with hummus, couscous, and pitta bread.", price: "£11.65" },
    { name: "Mediterranean Salad", desc: "Served on a bed of mixed leaves salad with salsa, chopped tomatoes, cucumber, red onion, and parsley. Served with hummus, couscous, and pitta bread.", price: "£11.65", label: "VEGAN" },
    { name: "Greek Salad", desc: "Served on a bed of mixed leaves salad with salsa, chopped tomatoes, cucumber, red onion, and parsley, black olives red onions, fetta cheese, hummus, couscous, and pitta bread.", price: "£11.65", label: "VEGAN" },
    { name: "Moroccan Chicken and Falafel Salad", desc: "Served on a bed of mixed leaves salad with salsa, chopped tomatoes, cucumber, red onion, and parsley. Served with hummus, couscous, and pitta bread.", price: "£11.65" },
  ],
  jacketPotatoes: [
    { name: "Jacket Potato with Tuna Mayo", desc: "Baked potato topped with tuna mayonnaise.", price: "£10.50" },
    { name: "Jacket Potato with Chilli Con Carne and Cheese", desc: "Baked potato topped with chilli con carne and melted cheese.", price: "£12.50" },
    { name: "Jacket Potato with Heinz Baked Beans and Cheese", desc: "Baked beans and melted cheese atop a fluffy jacket potato.", price: "£10.50", label: "VEGAN" },
    { name: "Jacket Potato with Crispy Turkey Bacon and Cheese", desc: "Baked potato topped with crispy turkey bacon and melted cheese.", price: "£10.50" },
    { name: "Jacket Potato with Coleslaw", desc: "Baked potato served with a side of creamy coleslaw.", price: "£9.00", label: "VEGETARIAN" },
    { name: "Jacket Potato with Butter", desc: "Fluffy baked potato smothered in rich butter.", price: "£7.95" },
    { name: "Jacket Potato with Cheese", desc: "Baked potato topped with melted cheese.", price: "£9.00", label: "VEGETARIAN" },
    { name: "Jacket Potato with Chilli Con Carne", desc: "Baked potato topped with chilli con carne.", price: "£10.98" },
    { name: "Jacket Potato with Honey Roast Turkey Ham", desc: "Fluffy baked potato topped with honey roast turkey ham.", price: "£10.50" },
    { name: "Jacket Potato with Crispy Turkey Bacon and Chicken", desc: "Fluffy baked potato topped with crispy turkey bacon and chicken.", price: "£10.50" },
    { name: "Jacket Potato with Heinz Baked Beans", desc: "Baked beans served on top of a fluffy jacket potato.", price: "£9.00" },
  ],
  wraps: [
    { name: "Two Filling Hot Large Wrap", desc: "Filled with mixed leaves, hummus, and salsa with chopped tomatoes, cucumber, red onion, and parsley.", price: "£10.50" },
    { name: "Two Fillings Pitta Bread", desc: "Filled with mixed leaves, hummus, and salsa with chopped tomatoes, cucumber, red onion, and parsley.", price: "£10.50" },
  ],
};

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState('mains');
  const [showBanner, setShowBanner] = useState(true);
  const [showCookie, setShowCookie] = useState(true);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Promotional Banner */}
      {showBanner && (
        <div className="bg-[#c8a964] text-[#5f2b11] px-4 py-3 text-center text-sm relative">
          <p className="max-w-6xl mx-auto">
            SHRIGLEY'S MOROCCAN CUISINE IS THE PERFECT PLACE TO HOST YOUR EVENTS IN LONDON, FOR LEISURE OR BUSINESS.{' '}
            <a href="#" className="underline hover:no-underline font-medium">CONTACT US &gt;</a>
          </p>
          <button
            onClick={() => setShowBanner(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

       {/* Header */}
       <Navbar />

      {/* Hero Section */}
      <div className="bg-[#5f2b11] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-light tracking-wide">MENU</h1>
        </div>
      </div>

      {/* Menu Tabs */}
      <div className="bg-gray-100 border-b border-gray-300  top-[73px] z-30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto">
            <button
              onClick={() => setActiveTab('mains')}
              className={`px-6 py-4 text-sm font-medium whitespace-nowrap transition ${
                activeTab === 'mains' ? 'border-b-2 border-[#5f2b11] text-[#5f2b11]' : 'text-gray-700 hover:text-[#5f2b11]'
              }`}
            >
              Mains
            </button>
            <button
              onClick={() => setActiveTab('hotMeals')}
              className={`px-6 py-4 text-sm font-medium whitespace-nowrap transition ${
                activeTab === 'hotMeals' ? 'border-b-2 border-[#5f2b11] text-[#5f2b11]' : 'text-gray-700 hover:text-[#5f2b11]'
              }`}
            >
              Hot Meals
            </button>
            <button
              onClick={() => setActiveTab('salads')}
              className={`px-6 py-4 text-sm font-medium whitespace-nowrap transition ${
                activeTab === 'salads' ? 'border-b-2 border-[#5f2b11] text-[#5f2b11]' : 'text-gray-700 hover:text-[#5f2b11]'
              }`}
            >
              Hot Meals and Salads
            </button>
            <button
              onClick={() => setActiveTab('jacketPotatoes')}
              className={`px-6 py-4 text-sm font-medium whitespace-nowrap transition ${
                activeTab === 'jacketPotatoes' ? 'border-b-2 border-[#5f2b11] text-[#5f2b11]' : 'text-gray-700 hover:text-[#5f2b11]'
              }`}
            >
              Jacket Potatoes
            </button>
            <button
              onClick={() => setActiveTab('wraps')}
              className={`px-6 py-4 text-sm font-medium whitespace-nowrap transition ${
                activeTab === 'wraps' ? 'border-b-2 border-[#5f2b11] text-[#5f2b11]' : 'text-gray-700 hover:text-[#5f2b11]'
              }`}
            >
              Hot Large Wraps or Pitta Bread
            </button>
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <main className="flex-1 bg-white px-4 py-12 text-black">
        <div className="max-w-4xl mx-auto">
          {/* Mains Section */}
          {activeTab === 'mains' && (
            <section>
              <h2 className="text-3xl font-bold mb-8">Mains</h2>
              <div className="space-y-6">
                {menuData.mains.map((item, idx) => (
                  <div key={idx} className="border-b border-gray-300 pb-6">
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                        {item.desc && <p className="text-sm text-gray-600">{item.desc}</p>}
                      </div>
                      <div className="text-lg font-semibold whitespace-nowrap">{item.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Hot Meals Section */}
          {activeTab === 'hotMeals' && (
            <section>
              <h2 className="text-3xl font-bold mb-8">Hot Meals</h2>
              <div className="space-y-6">
                {menuData.hotMeals.map((item, idx) => (
                  <div key={idx} className="border-b border-gray-300 pb-6">
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                        {item.desc && <p className="text-sm text-gray-600">{item.desc}</p>}
                      </div>
                      <div className="text-lg font-semibold whitespace-nowrap">{item.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Salads Section */}
          {activeTab === 'salads' && (
            <section>
              <h2 className="text-3xl font-bold mb-8">Hot Meals and Salads</h2>
              <div className="space-y-6">
                {menuData.salads.map((item, idx) => (
                  <div key={idx} className="border-b border-gray-300 pb-6">
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                        {item.desc && <p className="text-sm text-gray-600 mb-2">{item.desc}</p>}
                        {item.label && (
                          <span className="inline-block px-3 py-1 text-xs border border-gray-800 text-gray-800 font-medium">
                            {item.label}
                          </span>
                        )}
                      </div>
                      <div className="text-lg font-semibold whitespace-nowrap">{item.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Jacket Potatoes Section */}
          {activeTab === 'jacketPotatoes' && (
            <section>
              <h2 className="text-3xl font-bold mb-8">Jacket Potatoes</h2>
              <div className="space-y-6">
                {menuData.jacketPotatoes.map((item, idx) => (
                  <div key={idx} className="border-b border-gray-300 pb-6">
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                        {item.desc && <p className="text-sm text-gray-600 mb-2">{item.desc}</p>}
                        {item.label && (
                          <span className="inline-block px-3 py-1 text-xs border border-gray-800 text-gray-800 font-medium">
                            {item.label}
                          </span>
                        )}
                      </div>
                      <div className="text-lg font-semibold whitespace-nowrap">{item.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Wraps Section */}
          {activeTab === 'wraps' && (
            <section>
              <h2 className="text-3xl font-bold mb-8">Hot Large Wraps or Pitta Bread</h2>
              <div className="space-y-6">
                {menuData.wraps.map((item, idx) => (
                  <div key={idx} className="border-b border-gray-300 pb-6">
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                        {item.desc && <p className="text-sm text-gray-600">{item.desc}</p>}
                      </div>
                      <div className="text-lg font-semibold whitespace-nowrap">{item.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

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
