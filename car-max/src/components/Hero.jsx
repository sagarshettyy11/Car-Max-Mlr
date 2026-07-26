import React from 'react';
import { ArrowRight, Wrench, Sparkles, Cpu, Flame, Store } from 'lucide-react';

export default function Hero({ onOpenBooking, onReplayCinematic }) {
  return (
    <section className="relative min-h-screen w-full bg-[#050608] text-white pt-28 pb-16 px-6 lg:px-12 flex items-center justify-center overflow-hidden">
      {/* Dark Showroom Background Atmosphere */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#12141c]/50 via-[#050608] to-[#050608] pointer-events-none"></div>

      {/* Huge Gray Outline Ghost Typography Behind Supercar (Exact TurboTweak 'S2' / '918' style) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 select-none pointer-events-none text-white/5 font-black text-[160px] sm:text-[280px] lg:text-[400px] tracking-tighter uppercase font-mono">
        S2
      </div>

      {/* Main 3-Column TurboTweak Grid */}
      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

        {/* LEFT COLUMN: Multiline Title, Sub-heading & White Pill Button */}
        <div className="lg:col-span-4 space-y-6 text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] font-sans">
            Elevate Your<br />
            Drive to<br />
            Extraordinary<br />
            Heights
          </h1>

          <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed max-w-xs">
            Crafting Power,<br />
            Performance, and<br />
            Style for the Ultimate<br />
            Driving Experience
          </p>

          <div className="pt-2 flex items-center gap-4">
            {/* TurboTweak Solid White Pill Button */}
            <button
              onClick={onOpenBooking}
              className="px-8 py-3.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-gray-200 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-white/10"
            >
              Get started
            </button>

            {/* Replay Video Intro Button */}
            <button
              onClick={onReplayCinematic}
              className="p-3 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white transition-all"
              title="Replay RWB Drift Video Intro"
            >
              <Flame className="w-4 h-4 text-[#ff5500]" />
            </button>
          </div>
        </div>

        {/* CENTER COLUMN: Porsche 918 Spyder Supercar on Showroom Pedestal Stage */}
        <div className="lg:col-span-5 relative flex flex-col items-center justify-center py-4">
          <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
            {/* Showroom Oval Stage Surface */}
            <div className="absolute bottom-2 w-full h-32 bg-gradient-to-t from-white/15 via-white/5 to-transparent rounded-[100%] blur-sm pointer-events-none"></div>
            <div className="absolute bottom-6 w-4/5 h-20 bg-[#ff5500]/15 rounded-[100%] blur-2xl pointer-events-none"></div>

            {/* Front 3/4 Silver Porsche 918 Spyder Supercar (Cutout Style matching Reference Image) */}
            <img
              src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1200&auto=format&fit=crop"
              alt="Porsche 918 Spyder Showroom Stage"
              className="w-full h-auto object-contain filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.95)] scale-110 z-10 rounded-2xl"
            />

            {/* Diagonal Callout Line connecting Car Hood to Top-Right Specs Card */}
            <svg className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-20">
              <line x1="55%" y1="42%" x2="90%" y2="28%" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
              <circle cx="55%" cy="42%" r="3" fill="#ffffff" />
            </svg>
          </div>
        </div>

        {/* RIGHT COLUMN: Specs Card & Aftermarket Performance List */}
        <div className="lg:col-span-3 space-y-6 text-left">
          {/* Top Specs Translucent Glass Box (Exact TurboTweak style) */}
          <div className="bg-[#101218]/90 border border-white/15 rounded-3xl p-6 shadow-2xl backdrop-blur-xl">
            <h3 className="text-base font-bold text-white mb-2 font-sans">
              Specs
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed font-light mb-4">
              The 918 Spyder is a plug-in hybrid powered by a mid-mounted naturally aspirated 4.6 L (4,593 cc) V8 engine but we can modify it.
            </p>
            <button
              onClick={onOpenBooking}
              className="px-5 py-2 rounded-full border border-white/30 text-xs font-semibold text-white hover:bg-white hover:text-black transition-all"
            >
              View more
            </button>
          </div>

          {/* Bottom Aftermarket Performance Feature List (Exact TurboTweak style) */}
          <div className="space-y-4 pt-2">
            <div className="flex items-start gap-3">
              {/* White Circle Icon Badge */}
              <div className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg">
                <Store className="w-4.5 h-4.5 text-black" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                  Aftermarket Performance
                </h4>
                <p className="text-[11px] text-gray-400 leading-relaxed font-light">
                  We specialize in upgrading your vehicle with after-market parts, instead of using original manufacturer parts. We offer you the opportunity to personalize your ride with parts of your choice.
                </p>
              </div>
            </div>

            {/* Vertical Timeline Dots for Subsequent Features */}
            <div className="pl-4 border-l border-white/15 space-y-3 ml-4">
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <Sparkles className="w-3.5 h-3.5 text-[#ff5500]" />
                <span>Bespoke Body Kit & PPF Wrapping</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <Cpu className="w-3.5 h-3.5 text-[#ff5500]" />
                <span>German Engine & ECU Tuning</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
