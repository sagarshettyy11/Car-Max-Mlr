import React, { useState, useEffect } from 'react';
import { MessageSquare, Phone, ArrowUp, Calendar } from 'lucide-react';
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
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Back to Top */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto p-3 rounded-full bg-[#12141a] border border-white/20 text-gray-300 hover:text-white hover:border-[#ff5500] shadow-2xl transition-all duration-300 hover:scale-110"
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
        className="pointer-events-auto p-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-2xl shadow-emerald-500/40 transition-all duration-300 hover:scale-110 flex items-center justify-center group"
        title="Chat on WhatsApp"
      >
        <MessageSquare className="w-6 h-6 fill-white" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 text-xs font-bold transition-all duration-300">
          WhatsApp Inquiry
        </span>
      </a>

      {/* Floating Book Appointment CTA Button */}
      <button
        onClick={onOpenBooking}
        className="pointer-events-auto px-4 py-3 rounded-full bg-gradient-to-r from-[#ff6b00] to-[#ff3300] text-white shadow-2xl shadow-[#ff5500]/40 transition-all duration-300 hover:scale-105 flex items-center gap-2 font-bold text-xs"
      >
        <Calendar className="w-4 h-4" />
        <span className="hidden sm:inline">Book Service</span>
      </button>
    </div>
  );
}
