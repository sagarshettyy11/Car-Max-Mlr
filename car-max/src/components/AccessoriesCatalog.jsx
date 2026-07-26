import React, { useState } from 'react';
import { ACCESSORIES_CATALOG, BRAND_INFO } from '../data/carmaxData';
import { Crown, Sparkles, Tv, Flame, Shield, ArrowRight, MessageSquare } from 'lucide-react';

const iconMap = { Crown, Sparkles, Tv, Flame, Shield };

export default function AccessoriesCatalog({ onOpenBooking }) {
  const [selectedCat, setSelectedCat] = useState('All');

  const categories = ['All', 'Interior', 'Lighting', 'Electronics', 'Exhaust', 'Safety'];

  const filteredItems = selectedCat === 'All'
    ? ACCESSORIES_CATALOG
    : ACCESSORIES_CATALOG.filter((item) => item.category === selectedCat);

  return (
    <section id="accessories" className="py-24 bg-[#090a0d] relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#ff5500] font-mono uppercase tracking-widest mb-4">
            <Crown className="w-3.5 h-3.5" />
            HIGH-END AUTOMOTIVE ACCESSORIES
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            LUXURY <span className="orange-gradient-text">ACCESSORIES</span> CATALOG
          </h2>
          <p className="text-base text-gray-400 font-light leading-relaxed">
            Enhance your driving environment with custom carbon steering wheels, ambient lighting, starry optic ceilings, and high-definition Android smart cockpits.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedCat === cat
                    ? 'bg-[#ff5500] text-white shadow-lg shadow-[#ff5500]/30 scale-105'
                    : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => {
            const IconC = iconMap[item.icon] || Crown;
            return (
              <div
                key={item.id}
                className="group glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-[#ff5500]/50 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
              >
                {/* Product Image Header */}
                <div className="relative h-60 w-full overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181a22] via-transparent to-black/40"></div>

                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest bg-[#ff5500] text-white font-bold">
                      {item.tag}
                    </span>
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest bg-black/60 backdrop-blur-md text-gray-300 border border-white/10">
                      {item.category}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 p-2.5 rounded-xl bg-black/60 backdrop-blur-md text-[#ff5500] border border-white/15">
                    <IconC className="w-4 h-4" />
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#ff5500] transition-colors mb-2">
                      {item.name}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed mb-6 font-light">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-gray-400 uppercase font-mono block">Pricing</span>
                      <span className="text-xs font-bold text-emerald-400 font-mono">Inquire Fitment & Price</span>
                    </div>

                    <a
                      href={`https://wa.me/${BRAND_INFO.whatsapp}?text=Hello%20CARMAX%2C%20I%20am%20interested%20in%20inquiring%20about%20${encodeURIComponent(item.name)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-white/10 hover:bg-[#ff5500] text-white text-xs font-semibold transition-all flex items-center gap-1.5"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Order</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
