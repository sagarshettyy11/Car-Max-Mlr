import React from 'react';
import { Car, Zap, Cpu, Award, Star } from 'lucide-react';
import { BRAND_INFO } from '../data/carmaxData';

export default function StatsCounter() {
  const stats = [
    {
      label: 'Luxury Vehicles Serviced',
      value: BRAND_INFO.carsServiced,
      sub: 'BMW, Mercedes, Audi & Porsche',
      icon: Car
    },
    {
      label: 'Bespoke Modifications',
      value: BRAND_INFO.buildsCompleted,
      sub: 'Bodykits, PPF & Valvetronic',
      icon: Zap
    },
    {
      label: 'OEM Diagnostic Suite',
      value: '100%',
      sub: 'Autel, ISTA+, XENTRY, PIWIS',
      icon: Cpu
    },
    {
      label: 'Automotive Experience',
      value: BRAND_INFO.experienceYears,
      sub: 'Master Engineers in Mangalore',
      icon: Award
    }
  ];

  return (
    <section className="py-16 bg-[#090a0d] border-y border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 border border-white/10 hover:border-[#ff5500]/40 transition-all duration-300 group flex items-center gap-5"
              >
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-[#ff5500] group-hover:bg-[#ff5500] group-hover:text-white transition-all shadow-lg">
                  <IconComp className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-3xl font-black text-white tracking-tight group-hover:text-[#ff5500] transition-colors">
                    {item.value}
                  </div>
                  <div className="text-xs font-bold text-gray-200 uppercase tracking-wider mt-0.5">
                    {item.label}
                  </div>
                  <div className="text-[11px] text-gray-400 font-mono mt-0.5">
                    {item.sub}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
