import React, { useState } from 'react';
import { SERVICES, BRAND_INFO } from '../data/carmaxData';
import { Wrench, Shield, Sparkles, Zap, Flame, Cpu, Gauge, Layers, ShieldAlert, Droplet, Crown, Tv, ArrowRight, CheckCircle2, Clock, X, MessageSquare } from 'lucide-react';

const iconMap = {
  Wrench, Shield, Sparkles, Zap, Flame, Cpu, Gauge, Layers, ShieldAlert, Droplet, Crown, Tv
};

export default function Services({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedService, setSelectedService] = useState(null);

  const categories = ['All', 'General Servicing', 'Protection & Detailing', 'Modifications', 'Mechanical & Electrical', 'Luxury Accessories'];

  const filteredServices = activeCategory === 'All'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory || (activeCategory === 'Modifications' && s.category.includes('Modifications')));

  return (
    <section id="services" className="py-24 bg-[#090a0d] relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#ff5500]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#ff5500] font-mono uppercase tracking-widest mb-4">
            <Wrench className="w-3.5 h-3.5" />
            WORLD-CLASS AUTOMOTIVE CARE
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            PREMIUM <span className="orange-gradient-text">SERVICES</span> & EXPERTISE
          </h2>
          <p className="text-base text-gray-400 font-light leading-relaxed">
            From factory periodic servicing and German engine overhauls to TPU paint protection films and valvetronic exhaust systems, CARMAX delivers uncompromising craftsmanship.
          </p>

          {/* Filter Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[#ff5500] text-white shadow-lg shadow-[#ff5500]/30 scale-105'
                    : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const IconComponent = iconMap[service.iconName] || Wrench;
            return (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="group glass-card rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-between border border-white/10 hover:border-[#ff5500]/50 transition-all duration-500 hover:-translate-y-1.5"
              >
                {/* Visual Image Header */}
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={service.bgImage}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181a22] via-[#181a22]/40 to-transparent"></div>

                  {/* Icon & Category Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest bg-black/60 backdrop-blur-md text-white border border-white/15">
                      {service.category}
                    </span>
                    <div className="p-2.5 rounded-xl bg-black/60 backdrop-blur-md text-[#ff5500] border border-white/15 group-hover:bg-[#ff5500] group-hover:text-white transition-colors">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#ff5500] transition-colors mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs text-gray-400 line-clamp-3 leading-relaxed mb-4">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div>
                    {/* Turnaround & Warranty */}
                    <div className="grid grid-cols-2 gap-2 text-[11px] py-3 border-y border-white/5 mb-4 text-gray-300 font-mono">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#ff5500]" />
                        <span>{service.turnaround}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Shield className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{service.warranty}</span>
                      </div>
                    </div>

                    {/* View Details Action */}
                    <div className="flex items-center justify-between text-xs font-semibold text-[#ff5500] group-hover:translate-x-1 transition-transform">
                      <span>View Specifications & Inclusions</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal Drawer */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#12141a] border border-white/15 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar shadow-2xl p-6 sm:p-8 relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image Header */}
            <div className="relative h-48 sm:h-64 rounded-2xl overflow-hidden mb-6 border border-white/10">
              <img
                src={selectedService.bgImage}
                alt={selectedService.title}
                className="w-full h-full object-cover filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12141a] via-transparent to-black/50"></div>
              <div className="absolute bottom-4 left-6">
                <span className="text-xs uppercase tracking-widest text-[#ff5500] font-mono bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  {selectedService.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed mb-6">
              {selectedService.fullDesc}
            </p>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6 p-4 rounded-xl bg-white/5 border border-white/10 text-xs font-mono">
              <div>
                <span className="text-gray-400 block mb-1">Turnaround Time</span>
                <span className="text-white font-bold">{selectedService.turnaround}</span>
              </div>
              <div>
                <span className="text-gray-400 block mb-1">Warranty Guarantee</span>
                <span className="text-emerald-400 font-bold">{selectedService.warranty}</span>
              </div>
            </div>

            {/* Key Inclusions List */}
            <div className="mb-8">
              <h4 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-3">
                Key Package Inclusions & Standards
              </h4>
              <div className="space-y-2">
                {selectedService.includes.map((inc, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs text-gray-200 p-2 rounded-lg bg-white/5">
                    <CheckCircle2 className="w-4 h-4 text-[#ff5500] flex-shrink-0" />
                    <span>{inc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
              <a
                href={`https://wa.me/${BRAND_INFO.whatsapp}?text=Hello%20CARMAX%2C%20I%20am%20interested%20in%20inquiring%20about%20${encodeURIComponent(selectedService.title)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider text-center shadow-lg transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Inquire via WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  setSelectedService(null);
                  onOpenBooking();
                }}
                className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-[#ff6b00] to-[#ff3300] text-white font-bold text-xs uppercase tracking-wider text-center shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Wrench className="w-4 h-4" />
                <span>Book Service Appointment</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
