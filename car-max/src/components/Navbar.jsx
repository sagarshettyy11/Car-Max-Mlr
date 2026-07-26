import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#050608]/90 backdrop-blur-md py-6 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between relative">
        {/* Left Logo (Exact TurboTweak style: swirl icon + carmax) */}
        <a href="#" className="flex items-center gap-2 group">
          <svg className="w-6 h-6 text-white group-hover:text-[#ff5500] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
            <path d="M12 6a6 6 0 1 0 6 6" />
          </svg>
          <span className="text-2xl font-bold tracking-tight text-white font-sans">
            carmax
          </span>
        </a>

        {/* Center Floating Porsche Shield Crest Badge (Exact TurboTweak image) */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0">
          <a
            href="#"
            className="w-10 h-12 bg-gradient-to-b from-[#1a1c23] via-[#0d0f14] to-[#050608] border-x border-b border-white/20 rounded-b-xl flex flex-col items-center justify-center shadow-2xl hover:border-[#ff5500] transition-all transform hover:scale-105"
            title="CARMAX Porsche Specialist"
          >
            {/* Porsche Shield Colors: Gold, Black, Red */}
            <div className="w-7 h-9 rounded-b-md bg-[#d4af37] border border-[#a68a28] p-0.5 flex flex-col items-center justify-between text-center overflow-hidden">
              <div className="bg-black w-full text-[5.5px] font-black tracking-widest text-yellow-300 py-0.5 uppercase font-mono">
                PORSCHE
              </div>
              <div className="grid grid-cols-2 gap-0.5 w-full flex-1 mt-0.5">
                <div className="bg-[#b30000] rounded-tl-sm"></div>
                <div className="bg-black rounded-tr-sm"></div>
                <div className="bg-black rounded-bl-sm"></div>
                <div className="bg-[#b30000] rounded-br-sm"></div>
              </div>
            </div>
          </a>
        </div>

        {/* Right Navigation Links: FAQ, Contact, About us, Hamburger Icon */}
        <div className="hidden lg:flex items-center gap-8 text-xs font-medium text-gray-300">
          <a href="#contact" className="hover:text-white transition-colors">
            FAQ
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
          <a href="#workshop" className="hover:text-white transition-colors">
            About us
          </a>

          {/* Minimalist Hamburger Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-gray-300 hover:text-white transition-colors ml-2"
            aria-label="Toggle Menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#ff5500]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#050608]/98 backdrop-blur-2xl border-b border-white/10 p-6 space-y-4 shadow-2xl">
          {['Services', 'Modifications', 'Featured Builds', 'FAQ', 'Contact', 'About us'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, '-')}`}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-gray-200 hover:text-[#ff5500] py-2 border-b border-white/5"
            >
              {item}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="w-full py-3 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider"
          >
            Get started
          </button>
        </div>
      )}
    </header>
  );
}
