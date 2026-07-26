import React from 'react';
import { Store, Sparkles, Cpu, Play, ArrowRight, Wrench } from 'lucide-react';

export default function Hero({ onOpenBooking, onReplayCinematic }) {
  return (
    <section className="relative min-h-screen w-full bg-[#050608] text-white pt-28 pb-16 px-4 sm:px-6 lg:px-12 flex items-center justify-center overflow-hidden">
      {/* 16:9 Widescreen Porsche Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/porshe-final.png"
          alt="CARMAX Widescreen Hero Background"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.88] contrast-110 transition-transform duration-1000"
        />

        {/* Dark Luxury Vignette Overlays for Optimal Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-[#050608]/40 to-[#050608]/70 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#050608]/40 to-[#050608] pointer-events-none"></div>
      </div>

      {/* Main 3-Column Grid Overlay */}
      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

        {/* LEFT COLUMN: Multiline Title, Sub-heading & White Pill Button */}
        <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05] font-sans drop-shadow-2xl">
            Elevate Your<br />
            Drive to<br />
            Extraordinary<br />
            Heights
          </h1>

          <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed max-w-sm mx-auto lg:mx-0 drop-shadow-md">
            Crafting Power, Performance, and Style for the Ultimate Driving Experience in Mangalore
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
            {/* Solid White Pill Button */}
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-gray-200 hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-white/20 flex items-center gap-2"
            >
              <span>Get started</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Replay Video Intro Button */}
            <button
              onClick={onReplayCinematic}
              className="p-4 rounded-full border border-white/30 bg-black/60 backdrop-blur-md hover:bg-white hover:text-black text-white transition-all shadow-xl"
              title="Replay Video Intro"
            >
              <Play className="w-4 h-4 fill-current" />
            </button>
          </div>
        </div>

        {/* CENTER COLUMN: Clean Focal Area over Widescreen Porsche Background (Line Removed) */}
        <div className="lg:col-span-3 relative hidden lg:flex flex-col items-center justify-center min-h-[350px]">
        </div>

        {/* RIGHT COLUMN: CARMAX Workshop Services & Aftermarket Performance List */}
        <div className="lg:col-span-4 space-y-6 text-left">
          {/* Top CARMAX Services Translucent Glass Box */}
          <div className="bg-[#090b10]/85 border border-white/20 rounded-3xl p-6 sm:p-7 shadow-2xl backdrop-blur-2xl">
            <h3 className="text-lg font-bold text-white mb-2 font-sans flex items-center gap-2">
              <Wrench className="w-4 h-4 text-white" />
              <span>CARMAX Workshop Services</span>
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed font-light mb-5">
              Mangalore’s premier luxury multi-brand workshop. Specialist servicing, TPU paint protection (PPF), 9H ceramic polish, valvetronic exhausts, Stage 1/2 ECU tuning, and German engine diagnostics.
            </p>
            <a
              href="#services"
              className="px-6 py-2.5 rounded-full border border-white/30 text-xs font-semibold text-white hover:bg-white hover:text-black transition-all shadow-lg inline-block"
            >
              Explore Services
            </a>
          </div>

          {/* Bottom Aftermarket Performance Feature List */}
          <div className="space-y-4 pt-2 bg-[#090b10]/70 border border-white/10 p-5 rounded-3xl backdrop-blur-xl">
            <div className="flex items-start gap-3">
              {/* White Circle Store Icon Badge */}
              <div className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg">
                <Store className="w-4.5 h-4.5 text-black" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                  Aftermarket Performance
                </h4>
                <p className="text-[11px] text-gray-300 leading-relaxed font-light">
                  We specialize in upgrading your vehicle with after-market parts, instead of using original manufacturer parts. We offer you the opportunity to personalize your ride with parts of your choice.
                </p>
              </div>
            </div>

            {/* Vertical Sub-Features */}
            <div className="pl-4 border-l border-white/20 space-y-2 ml-4">
              <div className="flex items-center gap-2 text-xs text-gray-200">
                <Sparkles className="w-3.5 h-3.5 text-white" />
                <span>Bespoke Body Kit & PPF Wrapping</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-200">
                <Cpu className="w-3.5 h-3.5 text-white" />
                <span>German Engine & ECU Tuning</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
