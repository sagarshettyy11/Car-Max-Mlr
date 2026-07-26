import React, { useState, useEffect } from 'react';
import { MessageSquare, ArrowUp, Calendar } from 'lucide-react';
import { BRAND_INFO } from '../data/carmaxData';

export default function FloatingActions({ onOpenBooking }) {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none max-w-full">
      {/* Back to Top */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto p-3 rounded-full bg-[#12141a] border border-white/20 text-gray-300 hover:text-white hover:border-white shadow-2xl transition-all duration-300 hover:scale-110"
          title="Back to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* WhatsApp Quick Action Button */}
      <a
        href={BRAND_INFO.socials.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto p-4 rounded-full bg-[#1c1e26] border border-white/20 hover:bg-white hover:text-black text-white shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
        title="Chat on WhatsApp"
      >
        <MessageSquare className="w-5 h-5 fill-white group-hover:fill-black" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 text-xs font-bold transition-all duration-300">
          WhatsApp Inquiry
        </span>
      </a>

      {/* Floating Book Service CTA Button (Pure White Monochrome) */}
      <button
        onClick={onOpenBooking}
        className="pointer-events-auto px-5 py-3 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider shadow-2xl hover:bg-gray-200 transition-all duration-300 hover:scale-105 flex items-center gap-2"
      >
        <Calendar className="w-4 h-4 text-black" />
        <span className="inline">Book Service</span>
      </button>
    </div>
  );
}
