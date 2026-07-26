import React, { useState, useEffect } from 'react';
import { TESTIMONIALS, BRAND_INFO } from '../data/carmaxData';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const t = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-[#0c0e14] relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#ff5500] font-mono uppercase tracking-widest mb-4">
            <Star className="w-3.5 h-3.5 fill-[#ff5500]" />
            500+ VERIFIED GOOGLE REVIEWS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            CLIENT <span className="orange-gradient-text">TESTIMONIALS</span> & TRUST
          </h2>
          <p className="text-base text-gray-400 font-light leading-relaxed">
            Read authentic feedback from luxury car owners across Mangalore, Udupi, Kasaragod, and Bangalore who entrust their vehicles to CARMAX.
          </p>
        </div>

        {/* Testimonial Card Display */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/15 shadow-2xl relative overflow-hidden">
            <Quote className="absolute top-6 right-8 w-24 h-24 text-white/5 pointer-events-none" />

            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
              {/* Car & Avatar Photo */}
              <div className="flex-shrink-0 relative">
                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-[#ff5500] shadow-xl">
                  <img
                    src={t.carPhoto}
                    alt={t.role}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 p-1.5 rounded-full bg-[#ff5500] text-white shadow-lg">
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>

              {/* Text Quote Content */}
              <div className="flex-1 text-center md:text-left">
                {/* Rating Stars */}
                <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#ff5500] text-[#ff5500]" />
                  ))}
                  <span className="text-xs text-gray-400 font-mono ml-2">5.0 / 5.0 Rating</span>
                </div>

                <p className="text-base sm:text-lg text-gray-200 italic leading-relaxed mb-6 font-light">
                  "{t.text}"
                </p>

                <div>
                  <h4 className="text-lg font-bold text-white tracking-wide">
                    {t.name}
                  </h4>
                  <p className="text-xs text-[#ff5500] font-mono font-semibold mt-0.5">
                    {t.role} • {t.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Slider Controls */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all ${
                      currentIndex === idx ? 'w-8 bg-[#ff5500]' : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1))}
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-[#ff5500] text-white transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length)}
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-[#ff5500] text-white transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
