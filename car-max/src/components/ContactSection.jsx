import React from 'react';
import { BRAND_INFO } from '../data/carmaxData';
import { MapPin, Phone, Mail, Clock, ShieldAlert, MessageSquare, ExternalLink, Navigation } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-[#0c0e14] relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Info Cards */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#ff5500] font-mono uppercase tracking-widest mb-4">
              <MapPin className="w-3.5 h-3.5" />
              LOCATION & WORKSHOP DETAILS
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
              VISIT OUR <span className="orange-gradient-text">WORKSHOP</span> IN MANGALORE
            </h2>

            <p className="text-base text-gray-400 font-light leading-relaxed mb-8">
              Located conveniently on NH 66 Bypass near Kuntikan Flyover, our modern facility features easy access, secure gated parking, and dedicated reception lounges.
            </p>

            <div className="space-y-4 mb-8">
              {/* Address Card */}
              <div className="glass-card p-4 rounded-2xl border border-white/10 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#ff5500]/15 text-[#ff5500] border border-[#ff5500]/30">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-mono tracking-widest text-gray-400 mb-1">Workshop Address</h4>
                  <p className="text-sm text-white font-medium">{BRAND_INFO.address}</p>
                  <a
                    href={BRAND_INFO.socials.location}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#ff5500] hover:underline font-mono inline-flex items-center gap-1 mt-1"
                  >
                    <span>Get Google Maps Directions</span>
                    <Navigation className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="glass-card p-4 rounded-2xl border border-white/10 flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-white/5 text-[#ff5500]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-gray-400 block">Phone Desk</span>
                    <a href={`tel:${BRAND_INFO.phone}`} className="text-sm font-bold text-white hover:text-[#ff5500]">
                      {BRAND_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="glass-card p-4 rounded-2xl border border-white/10 flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-emerald-500/15 text-emerald-400">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-gray-400 block">WhatsApp Desk</span>
                    <a href={BRAND_INFO.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-emerald-400 hover:underline">
                      Chat Instant
                    </a>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="glass-card p-4 rounded-2xl border border-white/10 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-white/5 text-[#ff5500]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono text-gray-400 block">Working Schedule</span>
                  <p className="text-xs text-gray-200 font-medium">{BRAND_INFO.hours}</p>
                </div>
              </div>
            </div>

            {/* Emergency Hotline Callout */}
            <div className="p-4 rounded-2xl bg-[#ff5500]/10 border border-[#ff5500]/30 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShieldAlert className="w-6 h-6 text-[#ff5500]" />
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-wider">24/7 Breakdown & Towing</div>
                  <div className="text-[11px] text-gray-300">Flatbed vehicle recovery across Mangalore & Udupi.</div>
                </div>
              </div>
              <a
                href={`tel:${BRAND_INFO.phone}`}
                className="px-4 py-2 rounded-xl bg-[#ff5500] text-white text-xs font-bold uppercase tracking-wider"
              >
                Call Towing
              </a>
            </div>
          </div>

          {/* Right Embedded Google Map */}
          <div className="h-[450px] sm:h-[500px] rounded-3xl overflow-hidden border border-white/15 shadow-2xl relative">
            <iframe
              title="CARMAX Mangalore Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.379893766782!2d74.8560!3d12.8700!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a4d00000001%3A0x123456789abcdef!2sMangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
              className="w-full h-full filter invert contrast-125 grayscale hover:grayscale-0 transition-all duration-700"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>

            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#090a0d]/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                <span className="text-xs font-bold text-white">Workshop Open Today</span>
              </div>
              <a
                href={BRAND_INFO.socials.location}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#ff5500] font-bold hover:underline flex items-center gap-1"
              >
                Open in Maps App <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
