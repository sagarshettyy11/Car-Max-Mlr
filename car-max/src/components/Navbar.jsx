import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, ChevronDown, Wrench, Shield, Zap, Sparkles, MapPin, Clock } from 'lucide-react';
import { BRAND_INFO, SERVICES } from '../data/carmaxData';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services', hasDropdown: true },
    { name: 'Modifications', href: '#modifications' },
    { name: 'Featured Builds', href: '#builds' },
    { name: 'Before & After', href: '#before-after' },
    { name: 'Workshop', href: '#workshop' },
    { name: 'Accessories', href: '#accessories' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Emergency & Info Banner */}
      <div className="bg-[#0b0c10] border-b border-white/10 text-xs py-2 px-4 text-gray-400 hidden lg:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-gray-300">
              <MapPin className="w-3.5 h-3.5 text-[#ff5500]" />
              {BRAND_INFO.address}
            </span>
            <span className="flex items-center gap-1.5 text-gray-400">
              <Clock className="w-3.5 h-3.5 text-[#ff5500]" />
              {BRAND_INFO.hours}
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href={`tel:${BRAND_INFO.phone}`} className="flex items-center gap-1.5 text-white font-medium hover:text-[#ff5500] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#ff5500]" />
              Hotline: {BRAND_INFO.phone}
            </a>
            <span className="text-[#ff5500] font-semibold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#ff5500] animate-pulse"></span>
              24/7 Emergency Flatbed Towing Available
            </span>
          </div>
        </div>
      </div>

      {/* Main Glass Navigation Bar */}
      <header
        className={`fixed top-0 lg:top-8 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#090a0d]/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl lg:top-0'
            : 'bg-gradient-to-b from-[#090a0d]/90 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff6b00] to-[#ff3300] p-[1px] shadow-lg shadow-[#ff5500]/20 group-hover:shadow-[#ff5500]/40 transition-all">
                <div className="w-full h-full bg-[#090a0d] rounded-[11px] flex items-center justify-center">
                  <span className="font-extrabold text-xl tracking-tighter text-white group-hover:text-[#ff5500] transition-colors">
                    CX
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-black tracking-wider text-white">
                    CAR<span className="text-[#ff5500]">MAX</span>
                  </span>
                  <span className="text-[9px] uppercase tracking-widest bg-[#ff5500]/15 text-[#ff5500] border border-[#ff5500]/30 px-1.5 py-0.5 rounded font-mono">
                    LUXURY
                  </span>
                </div>
                <span className="text-[10px] tracking-widest uppercase text-gray-400 font-medium">
                  MANGALORE • AUTOMOTIVE WORKSHOP
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && setServicesDropdown(true)}
                  onMouseLeave={() => link.hasDropdown && setServicesDropdown(false)}
                >
                  <a
                    href={link.href}
                    className="px-3.5 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <span>{link.name}</span>
                    {link.hasDropdown && (
                      <ChevronDown className={`w-3.5 h-3.5 text-gray-400 transition-transform ${servicesDropdown ? 'rotate-180 text-[#ff5500]' : ''}`} />
                    )}
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#ff5500] scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full"></span>
                  </a>

                  {/* Dropdown Menu for Services */}
                  {link.hasDropdown && servicesDropdown && (
                    <div className="absolute top-full left-0 w-80 pt-2 z-50">
                      <div className="bg-[#12141a] border border-white/10 rounded-2xl p-3 shadow-2xl backdrop-blur-2xl">
                        <div className="text-[11px] uppercase tracking-wider text-[#ff5500] font-semibold px-3 py-1 mb-1 border-b border-white/5 flex items-center justify-between">
                          <span>Luxury Services ({SERVICES.length})</span>
                          <Wrench className="w-3 h-3" />
                        </div>
                        <div className="max-h-80 overflow-y-auto custom-scrollbar space-y-1">
                          {SERVICES.slice(0, 7).map((srv) => (
                            <a
                              key={srv.id}
                              href={`#services`}
                              className="block p-2.5 rounded-xl hover:bg-white/5 transition-colors group/item"
                            >
                              <div className="text-xs font-semibold text-gray-200 group-hover/item:text-[#ff5500] transition-colors flex items-center justify-between">
                                {srv.title}
                                <span className="text-[9px] text-gray-500 bg-white/5 px-1.5 py-0.5 rounded">
                                  {srv.category}
                                </span>
                              </div>
                              <p className="text-[11px] text-gray-400 line-clamp-1 mt-0.5">
                                {srv.shortDesc}
                              </p>
                            </a>
                          ))}
                        </div>
                        <div className="pt-2 mt-2 border-t border-white/5 text-center">
                          <a
                            href="#services"
                            className="text-xs text-[#ff5500] hover:underline font-medium block py-1"
                          >
                            Explore All Services →
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Action CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={BRAND_INFO.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-all text-xs flex items-center gap-2 font-medium"
                title="WhatsApp Inquiry"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>WhatsApp</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#ff6b00] to-[#ff3300] text-white font-semibold text-sm shadow-lg shadow-[#ff5500]/25 hover:shadow-[#ff5500]/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onOpenBooking}
                className="p-2 rounded-lg bg-[#ff5500] text-white sm:hidden text-xs font-semibold flex items-center gap-1"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-200 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Toggle Navigation"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-[#ff5500]" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-full bg-[#0d0f14]/98 backdrop-blur-2xl border-b border-white/10 shadow-2xl p-6 transition-all animate-fadeIn">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-gray-200 hover:text-[#ff5500] py-2 border-b border-white/5 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-gray-500 text-xs">→</span>
                </a>
              ))}

              <div className="pt-4 space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#ff6b00] to-[#ff3300] text-white font-semibold text-center text-sm shadow-lg shadow-[#ff5500]/30 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment Now</span>
                </button>

                <a
                  href={`tel:${BRAND_INFO.phone}`}
                  className="w-full py-3 rounded-xl border border-white/15 bg-white/5 text-gray-200 font-medium text-center text-sm flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#ff5500]" />
                  <span>Call Workshop ({BRAND_INFO.phone})</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
