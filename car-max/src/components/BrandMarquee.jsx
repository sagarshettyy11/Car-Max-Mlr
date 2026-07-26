import React from 'react';
import { LUXURY_BRANDS } from '../data/carmaxData';
import { ShieldCheck } from 'lucide-react';

export default function BrandMarquee() {
  return (
    <section id="brands" className="py-12 bg-[#0c0d12] border-y border-white/10 relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#090a0d] via-transparent to-[#090a0d] z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 font-mono uppercase tracking-widest mb-2">
          <ShieldCheck className="w-3.5 h-3.5 text-[#ff5500]" />
          Multi-Brand German & Luxury Specialists
        </div>
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
          Trusted Expertise Across World-Class Automotive Marques
        </h3>
      </div>

      {/* Marquee Track */}
      <div className="relative w-full overflow-hidden flex items-center">
        <div className="animate-marquee flex items-center gap-8 sm:gap-12 py-2">
          {/* Double array for seamless loop */}
          {[...LUXURY_BRANDS, ...LUXURY_BRANDS].map((brand, idx) => (
            <div
              key={`${brand.name}-${idx}`}
              className="flex-shrink-0 group px-6 py-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-[#ff5500]/40 hover:bg-[#ff5500]/10 transition-all duration-300 cursor-pointer flex items-center gap-3"
            >
              <span className="text-xl filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all">
                {brand.icon}
              </span>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-gray-400 group-hover:text-white tracking-wider font-mono transition-colors">
                  {brand.logoText}
                </span>
                <span className="text-[9px] uppercase tracking-widest text-gray-500 group-hover:text-[#ff5500] font-light">
                  {brand.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
