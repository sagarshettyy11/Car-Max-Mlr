import React, { useState } from 'react';
import { MODIFICATIONS_CATALOG, BRAND_INFO } from '../data/carmaxData';
import { Zap, Check, ArrowRight, MessageSquare } from 'lucide-react';

export default function Modifications({ onOpenBooking }) {
  const [selectedModCategory, setSelectedModCategory] = useState('All');

  const categories = ['All', 'Aerodynamics', 'Exhaust & Power', 'Suspension', 'Interior Luxury', 'Wheels & Stance', 'Electronics'];

  const filteredMods = selectedModCategory === 'All'
    ? MODIFICATIONS_CATALOG
    : MODIFICATIONS_CATALOG.filter((m) => m.category === selectedModCategory);

  return (
    <section id="modifications" className="py-24 bg-[#0c0e14] relative overflow-hidden border-t border-white/10">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#ff5500]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#ff5500] font-mono uppercase tracking-widest mb-4">
            <Zap className="w-3.5 h-3.5 text-[#ff5500]" />
            BESPOKE PERFORMANCE & STYLING
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            LUXURY <span className="orange-gradient-text">MODIFICATIONS</span> & UPGRADES
          </h2>
          <p className="text-base text-gray-400 font-light leading-relaxed">
            Turn your vehicle into a unique masterpiece with authentic aerodynamic carbon packs, valvetronic exhaust acoustics, and custom luxury interiors.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedModCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedModCategory === cat
                    ? 'bg-[#ff5500] text-white shadow-lg shadow-[#ff5500]/30 scale-105'
                    : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMods.map((item, idx) => (
            <div
              key={idx}
              className="group glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-[#ff5500]/50 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
            >
              {/* Image & Gain Tag */}
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181a22] via-transparent to-black/40"></div>

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest bg-[#ff5500] text-white font-bold shadow-lg shadow-[#ff5500]/40">
                    {item.gain}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[11px] font-mono text-gray-300 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded border border-white/10">
                    Target: {item.vehicle}
                  </span>
                </div>
              </div>

              {/* Specs & Info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#ff5500] transition-colors mb-4">
                    {item.title}
                  </h3>

                  <div className="space-y-2 mb-6">
                    {item.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                        <Check className="w-3.5 h-3.5 text-[#ff5500] flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <a
                    href={`https://wa.me/${BRAND_INFO.whatsapp}?text=Hello%20CARMAX%2C%20I%20want%20to%20quote%20a%20modification%20for%20${encodeURIComponent(item.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#ff5500] hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Inquire Modification</span>
                  </a>

                  <button
                    onClick={onOpenBooking}
                    className="p-2 rounded-xl bg-white/5 hover:bg-[#ff5500] text-gray-300 hover:text-white transition-colors"
                    title="Book Custom Build Slot"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
