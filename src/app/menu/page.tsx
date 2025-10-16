'use client';

import { useState } from 'react';
import { X, ChevronDown, Menu } from 'lucide-react';
import Link from 'next/link';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

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
      <Footer />
    </div>
  );
}
