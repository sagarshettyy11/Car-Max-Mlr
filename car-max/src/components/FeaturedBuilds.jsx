import React, { useState } from 'react';
import { FEATURED_BUILDS, BRAND_INFO } from '../data/carmaxData';
import { Award, Clock, UserCheck, Star, X, ChevronRight, CheckCircle, MessageSquare } from 'lucide-react';

export default function FeaturedBuilds() {
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [activeBuildModal, setActiveBuildModal] = useState(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  const brandsFilter = ['All', 'BMW', 'Mercedes-Benz', 'Porsche', 'Land Rover'];

  const filteredBuilds = selectedBrand === 'All'
    ? FEATURED_BUILDS
    : FEATURED_BUILDS.filter((b) => b.brand === selectedBrand);

  return (
    <section id="builds" className="py-24 bg-[#090a0d] relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#ff5500] font-mono uppercase tracking-widest mb-4">
            <Award className="w-3.5 h-3.5" />
            COMPLETED CUSTOM PROJECTS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            FEATURED <span className="orange-gradient-text">BUILDS</span> & SHOWCASE
          </h2>
          <p className="text-base text-gray-400 font-light leading-relaxed">
            Explore our hallmark builds executed in Mangalore. From track-ready engine remaps to widebody armor, every build is an embodiment of precision engineering.
          </p>

          {/* Filter Brands */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {brandsFilter.map((brand) => (
              <button
                key={brand}
                onClick={() => setSelectedBrand(brand)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedBrand === brand
                    ? 'bg-[#ff5500] text-white shadow-lg shadow-[#ff5500]/30 scale-105'
                    : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {brand}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Builds Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredBuilds.map((build) => (
            <div
              key={build.id}
              onClick={() => {
                setActiveBuildModal(build);
                setActiveGalleryIndex(0);
              }}
              className="group glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-[#ff5500]/50 transition-all duration-500 cursor-pointer flex flex-col justify-between"
            >
              {/* Main Image Header */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                <img
                  src={build.mainImage}
                  alt={build.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181a22] via-transparent to-black/50"></div>

                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest bg-[#ff5500] text-white font-bold">
                    {build.brand}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest bg-black/60 backdrop-blur-md text-gray-300 border border-white/10">
                    {build.category}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-[#ff5500] transition-colors mb-1">
                    {build.title}
                  </h3>
                  <p className="text-xs text-gray-300 font-mono">
                    {build.specs}
                  </p>
                </div>
              </div>

              {/* Build Meta Footer */}
              <div className="p-6 bg-[#181a22]/80 flex items-center justify-between border-t border-white/5 text-xs text-gray-400 font-mono">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#ff5500]" />
                  <span>{build.duration}</span>
                </div>

                <div className="flex items-center gap-1 text-[#ff5500] font-semibold group-hover:translate-x-1 transition-transform">
                  <span>Explore Build Specs</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Build Specs & Gallery Modal */}
      {activeBuildModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#12141a] border border-white/15 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar shadow-2xl p-6 sm:p-8 relative">
            <button
              onClick={() => setActiveBuildModal(null)}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors z-20"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs uppercase tracking-widest text-[#ff5500] font-mono bg-[#ff5500]/15 px-3 py-1 rounded-full border border-[#ff5500]/30 inline-block mb-3">
              {activeBuildModal.brand} Build Case Study
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              {activeBuildModal.title}
            </h3>
            <p className="text-xs font-mono text-gray-400 mb-6">
              {activeBuildModal.specs} • {activeBuildModal.duration}
            </p>

            {/* Gallery Image Display */}
            <div className="relative h-64 sm:h-96 rounded-2xl overflow-hidden mb-4 border border-white/10">
              <img
                src={activeBuildModal.gallery[activeGalleryIndex] || activeBuildModal.mainImage}
                alt="Build Gallery"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Gallery Thumbnails */}
            {activeBuildModal.gallery.length > 1 && (
              <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
                {activeBuildModal.gallery.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt="Thumbnail"
                    onClick={() => setActiveGalleryIndex(i)}
                    className={`w-20 h-16 rounded-xl object-cover cursor-pointer border-2 transition-all ${
                      activeGalleryIndex === i ? 'border-[#ff5500] scale-105' : 'border-white/10 opacity-60 hover:opacity-100'
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Modifications Checklist */}
            <div className="mb-6 bg-white/5 p-5 rounded-2xl border border-white/10">
              <h4 className="text-xs uppercase tracking-widest text-[#ff5500] font-bold mb-3">
                Installed Modifications & Upgrades
              </h4>
              <div className="space-y-2">
                {activeBuildModal.modifications.map((mod, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-gray-200">
                    <CheckCircle className="w-4 h-4 text-[#ff5500] flex-shrink-0" />
                    <span>{mod}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Client Quote */}
            <div className="p-4 rounded-xl bg-[#ff5500]/10 border border-[#ff5500]/30 mb-6">
              <div className="flex items-center gap-2 text-xs text-[#ff5500] font-bold mb-1">
                <Star className="w-4 h-4 fill-[#ff5500]" />
                <span>Verified Client Feedback — {activeBuildModal.client}</span>
              </div>
              <p className="text-xs text-gray-300 italic">
                "{activeBuildModal.review}"
              </p>
            </div>

            {/* CTA button */}
            <a
              href={`https://wa.me/${BRAND_INFO.whatsapp}?text=Hello%20CARMAX%2C%20I%20saw%20the%20${encodeURIComponent(activeBuildModal.title)}%20build%20and%20want%20a%20similar%20customization.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#ff6b00] to-[#ff3300] text-white font-bold text-xs uppercase tracking-wider text-center shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Inquire Similar Custom Build</span>
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
