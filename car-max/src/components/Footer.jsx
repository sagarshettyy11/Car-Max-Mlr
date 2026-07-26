import React, { useState } from 'react';
import { BRAND_INFO, SERVICES } from '../data/carmaxData';
import { Phone, Mail, MapPin, Send, Check, Heart } from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon } from './SocialIcons';

export default function Footer({ onOpenBooking }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#07080a] border-t border-white/10 relative overflow-hidden text-gray-400 pt-20 pb-12">
      {/* Animated Glow Line at Top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#ff5500] to-transparent shadow-[0_0_15px_#ff5500]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff6b00] to-[#ff3300] p-[1px]">
                <div className="w-full h-full bg-[#090a0d] rounded-[11px] flex items-center justify-center font-extrabold text-xl text-white">
                  CX
                </div>
              </div>
              <div>
                <span className="text-2xl font-black text-white tracking-wider">
                  CAR<span className="text-[#ff5500]">MAX</span>
                </span>
                <p className="text-[10px] tracking-widest uppercase text-gray-400">
                  MANGALORE • LUXURY AUTOMOTIVE
                </p>
              </div>
            </a>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm font-light">
              CARMAX is Mangalore’s premier luxury multi-brand automotive workshop specializing in precision servicing, TPU paint protection, valvetronic exhausts, custom body kits, and German diagnostics.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={BRAND_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-[#ff5500] text-gray-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={BRAND_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-[#ff5500] text-gray-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={BRAND_INFO.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-[#ff5500] text-gray-300 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              {['Services', 'Modifications', 'Featured Builds', 'Before & After', 'Workshop', 'Accessories', 'Reviews', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                    className="hover:text-[#ff5500] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#ff5500]">›</span>
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services Shortcuts */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold mb-4">
              Top Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              {SERVICES.slice(0, 6).map((srv) => (
                <li key={srv.id}>
                  <a href="#services" className="hover:text-[#ff5500] transition-colors line-clamp-1">
                    • {srv.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold mb-4">
              VIP Newsletter
            </h4>
            <p className="text-xs text-gray-400 mb-4">
              Subscribe for car care guides & exclusive build updates in Mangalore.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#12141a] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#ff5500]"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-[#ff5500] hover:bg-[#ff6b00] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Subscribe</span>
                </button>
              </form>
            ) : (
              <div className="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-xs text-emerald-400 flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>Subscribed successfully!</span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <div>
            © {new Date().getFullYear()} CARMAX Mangalore. All Rights Reserved.
          </div>
          <div className="flex items-center gap-1 text-gray-400 font-mono">
            <span>Engineered with precision for Mangalore Automotive Enthusiasts</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
