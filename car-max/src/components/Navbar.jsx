import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#050608]/90 backdrop-blur-md py-4 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        {/* Left Official CARMAX Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/carmax_logo.jpeg"
            alt="CARMAX Luxury Automotive Logo"
            className="h-10 w-auto object-contain rounded-xl border border-white/15 group-hover:border-white transition-all shadow-md"
          />
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-wider text-white font-sans uppercase">
              CAR<span className="text-gray-400">MAX</span>
            </span>
            <span className="text-[9px] font-mono text-gray-400 tracking-widest uppercase">
              MANGALORE
            </span>
          </div>
        </a>

        {/* Right Navigation Links & White Pill Action Button */}
        <div className="hidden lg:flex items-center gap-8 text-xs font-medium text-gray-300">
          <a href="#services" className="hover:text-white transition-colors">
            Services
          </a>
          <a href="#modifications" className="hover:text-white transition-colors">
            Modifications
          </a>
          <a href="#builds" className="hover:text-white transition-colors">
            Featured Builds
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            FAQ
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
          <a href="#workshop" className="hover:text-white transition-colors">
            About us
          </a>

          <button
            onClick={onOpenBooking}
            className="px-6 py-2.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-gray-200 hover:scale-105 active:scale-95 transition-all shadow-lg"
          >
            Get started
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={onOpenBooking}
            className="px-4 py-1.5 rounded-full bg-white text-black text-xs font-bold sm:hidden"
          >
            Get started
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#050608]/98 backdrop-blur-2xl border-b border-white/10 p-6 space-y-4 shadow-2xl">
          {['Services', 'Modifications', 'Featured Builds', 'Before & After', 'Workshop', 'Accessories', 'FAQ', 'Contact', 'About us'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-gray-200 hover:text-white py-2 border-b border-white/5"
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
