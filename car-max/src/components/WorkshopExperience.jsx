import React from 'react';
import { WORKSHOP_FEATURES, BRAND_INFO } from '../data/carmaxData';
import { Cpu, Flame, Wrench, Award, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';

const iconMap = { Cpu, Flame, Wrench, Award };

export default function WorkshopExperience() {
  return (
    <section id="workshop" className="py-24 bg-[#0c0e14] relative overflow-hidden border-t border-white/10">
      {/* Background Light Orb */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#ff5500]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Visual Storytelling Collage */}
          <div className="space-y-4">
            <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl h-80 sm:h-96 group">
              <img
                src="https://images.unsplash.com/photo-1486006920555-c77dce18193b?q=80&w=1200&auto=format&fit=crop"
                alt="CARMAX Workshop Facility Mangalore"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e14] via-transparent to-black/30"></div>

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#ff5500] text-white">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">Mangalore Headquarters</h4>
                    <p className="text-[11px] text-gray-400">NH-66 Bypass Facility</p>
                  </div>
                </div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#ff5500] bg-[#ff5500]/20 px-2.5 py-1 rounded">
                  State-of-the-Art
                </span>
              </div>
            </div>

            {/* Secondary Grid Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden border border-white/10 h-40 group">
                <img
                  src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=600&auto=format&fit=crop"
                  alt="Dust-Free Paint Booth"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-white/10 h-40 group">
                <img
                  src="https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=600&auto=format&fit=crop"
                  alt="High-Tech Diagnostic Lifts"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right Workshop Details */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#ff5500] font-mono uppercase tracking-widest mb-4">
              <MapPin className="w-3.5 h-3.5" />
              MANGALORE'S ULTIMATE AUTOMOTIVE HUB
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              ENGINEERED FOR <span className="orange-gradient-text">PERFECTION</span> & TRUST
            </h2>

            <p className="text-base text-gray-300 font-light leading-relaxed mb-8">
              At CARMAX, we believe luxury car care demands more than standard wrenching. Our Mangalore workshop is equipped with German factory-grade diagnostic computers, climate-controlled paint booths, specialized hydraulic lifts, and certified master engineers.
            </p>

            {/* Features List Grid */}
            <div className="space-y-4 mb-8">
              {WORKSHOP_FEATURES.map((item, i) => {
                const IconC = iconMap[item.icon] || Wrench;
                return (
                  <div key={i} className="glass-card p-4 rounded-xl border border-white/10 flex items-start gap-4 hover:border-[#ff5500]/40 transition-colors">
                    <div className="p-2.5 rounded-xl bg-[#ff5500]/15 text-[#ff5500] border border-[#ff5500]/30 mt-0.5">
                      <IconC className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-400 font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Customer VIP Lounge Callout */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-white/5 to-[#ff5500]/10 border border-white/10 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-white uppercase tracking-wider">VIP Customer Lounge & Espresso Bar</div>
                <div className="text-[11px] text-gray-400">Relax with Wi-Fi & live video stream while your car is serviced.</div>
              </div>
              <span className="text-xs font-mono font-bold text-[#ff5500]">Complimentary</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
