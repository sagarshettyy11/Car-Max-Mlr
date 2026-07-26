import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Calendar, ArrowRight, ShieldCheck, Star, Volume2, VolumeX, Sparkles, Flame, RefreshCw, Play, X, Zap } from 'lucide-react';
import { HERO_SLIDES, BRAND_INFO } from '../data/carmaxData';

export default function Hero({ onOpenBooking }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [showDriftTheater, setShowDriftTheater] = useState(false);
  const videoRef = useRef(null);
  const theaterVideoRef = useRef(null);

  // Real Supercar Drift Video Footage Sources
  const DRIFT_VIDEOS = [
    {
      url: "https://assets.mixkit.co/videos/preview/mixkit-sports-car-drifting-on-a-racetrack-41490-large.mp4",
      title: "Racetrack Supercar Power Drift",
      desc: "High-rpm sideways power drift with burning rubber smoke clouds."
    },
    {
      url: "https://assets.mixkit.co/videos/preview/mixkit-black-car-drifting-on-a-curved-road-41492-large.mp4",
      title: "Touge Apex Drift Attack",
      desc: "Aggressive mountain curve drift entry with precision counter-steering."
    },
    {
      url: "https://assets.mixkit.co/videos/preview/mixkit-sports-car-driving-fast-on-a-curved-road-41487-large.mp4",
      title: "V8 Twin-Turbo Highway Sprint",
      desc: "Full throttle supercar acceleration & exhaust flame roar."
    }
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const replayDriftVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const slide = HERO_SLIDES[currentSlideIndex];

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#090a0d] pt-24 pb-16 lg:pt-32">
      {/* Real Supercar Video Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          key={DRIFT_VIDEOS[currentVideoIndex].url}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          poster="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1920&auto=format&fit=crop"
          className="w-full h-full object-cover scale-105 filter brightness-[0.75] contrast-115 transition-all duration-700"
        >
          <source src={DRIFT_VIDEOS[currentVideoIndex].url} type="video/mp4" />
        </video>

        {/* Dynamic Dark Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090a0d] via-[#090a0d]/50 to-[#090a0d]/70 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#090a0d]/55 to-[#090a0d] pointer-events-none"></div>

        {/* Ambient Orange Beam Effect */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ff5500]/25 rounded-full blur-3xl animate-pulse-glow pointer-events-none"></div>
      </div>

      {/* Floating Controls: Supercar Drift Controls & Audio Toggle */}
      <div className="absolute top-28 right-6 z-30 flex items-center gap-3">
        <button
          onClick={() => setShowDriftTheater(true)}
          className="px-4 py-2.5 rounded-full bg-gradient-to-r from-[#ff6b00] to-[#ff3300] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-[#ff5500]/40 hover:scale-105 transition-all animate-pulse"
        >
          <Play className="w-4 h-4 fill-white" />
          <span>Watch 4K Supercar Drift</span>
        </button>

        <button
          onClick={() => {
            const nextIdx = (currentVideoIndex + 1) % DRIFT_VIDEOS.length;
            setCurrentVideoIndex(nextIdx);
          }}
          className="px-3.5 py-2.5 rounded-full bg-black/80 border border-white/20 backdrop-blur-md text-white text-xs font-mono font-bold hover:border-[#ff5500] transition-all flex items-center gap-1.5"
          title="Switch Drift Video Clip"
        >
          <Flame className="w-3.5 h-3.5 text-[#ff5500]" />
          <span className="hidden sm:inline">Next Drift ({currentVideoIndex + 1}/3)</span>
        </button>

        <button
          onClick={() => setIsMuted(!isMuted)}
          className="p-2.5 rounded-full bg-black/80 border border-white/20 backdrop-blur-md text-white hover:bg-white/20 transition-all flex items-center gap-2 text-xs"
          title="Toggle V8/V10 Exhaust Audio"
        >
          {isMuted ? <VolumeX className="w-4 h-4 text-gray-400" /> : <Volume2 className="w-4 h-4 text-[#ff5500] animate-bounce" />}
          <span className="text-gray-300 font-medium hidden md:inline">{isMuted ? 'Sound Off' : 'Sound On'}</span>
        </button>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Headline & Content */}
        <div className="max-w-3xl flex-1">
          {/* Supercar Drift Trigger Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#ff5500]/50 backdrop-blur-md mb-6 shadow-lg shadow-[#ff5500]/20 animate-fadeIn">
            <Flame className="w-4 h-4 text-[#ff5500] animate-bounce" />
            <span className="text-xs uppercase tracking-widest text-white font-bold">
              REAL SUPERCAR DRIFT EXPERIENCE
            </span>
            <span className="text-gray-500 text-xs">|</span>
            <span className="text-xs text-[#ff5500] font-mono">MANGALORE</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            DEFINING <span className="orange-gradient-text">AUTOMOTIVE</span> EXCELLENCE
          </h1>

          {/* Dynamic Rotating Message Box */}
          <div className="h-20 sm:h-16 mb-6 flex items-center justify-center lg:justify-start">
            <div className="text-xl sm:text-2xl font-bold text-gray-200 flex items-center gap-3 transition-all duration-500 transform translate-y-0">
              <span className="text-[#ff5500] uppercase tracking-wider font-mono border-b-2 border-[#ff5500] pb-0.5">
                {slide.title}
              </span>
              <span className="text-gray-400 font-normal hidden sm:inline">— {slide.highlight}</span>
            </div>
          </div>

          <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed font-light">
            {slide.description}
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#ff6b00] to-[#ff3300] text-white font-bold text-base shadow-xl shadow-[#ff5500]/30 hover:shadow-[#ff5500]/50 hover:scale-[1.03] active:scale-[0.97] transition-all flex items-center justify-center gap-3 group"
            >
              <Calendar className="w-5 h-5 text-white" />
              <span>Book Appointment</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => setShowDriftTheater(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl border border-[#ff5500] bg-[#ff5500]/20 hover:bg-[#ff5500] text-white font-bold text-base backdrop-blur-md transition-all flex items-center justify-center gap-3 group shadow-lg shadow-[#ff5500]/20"
            >
              <Play className="w-5 h-5 fill-white" />
              <span>Play Drift Video</span>
            </button>
          </div>

          {/* Trust Badges Bar */}
          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-4 text-center lg:text-left">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {BRAND_INFO.carsServiced}
              </div>
              <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">
                Luxury Vehicles Serviced
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#ff5500] tracking-tight">
                {BRAND_INFO.buildsCompleted}
              </div>
              <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">
                Bespoke Modifications
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center justify-center lg:justify-start gap-1">
                <span>{BRAND_INFO.googleRating}</span>
                <Star className="w-5 h-5 fill-[#ff5500] text-[#ff5500]" />
              </div>
              <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">
                540+ Google Reviews
              </div>
            </div>
          </div>
        </div>

        {/* Right Supercar Drift Preview Card Widget */}
        <div className="w-full lg:w-80 glass-card rounded-2xl p-5 relative overflow-hidden border border-[#ff5500]/40 shadow-2xl hidden lg:block group">
          <div className="relative h-48 rounded-xl overflow-hidden mb-4 border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=800&auto=format&fit=crop"
              alt="Supercar Drift Preview"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <button
                onClick={() => setShowDriftTheater(true)}
                className="w-14 h-14 rounded-full bg-[#ff5500] text-white flex items-center justify-center shadow-xl shadow-[#ff5500]/60 group-hover:scale-110 transition-transform"
              >
                <Play className="w-6 h-6 fill-white ml-1" />
              </button>
            </div>
            <span className="absolute bottom-2 left-2 text-[10px] font-mono text-white bg-black/70 px-2 py-0.5 rounded border border-white/20">
              4K SUPERCAR DRIFT
            </span>
          </div>

          <div className="space-y-2 text-xs text-gray-300">
            <div className="flex items-center justify-between font-mono">
              <span className="text-gray-400">Drift Action</span>
              <span className="text-[#ff5500] font-bold">Racetrack Apex</span>
            </div>
            <div className="flex items-center justify-between font-mono">
              <span className="text-gray-400">Exhaust Note</span>
              <span className="text-white font-bold">Twin-Turbo V8</span>
            </div>
          </div>

          <button
            onClick={() => setShowDriftTheater(true)}
            className="w-full mt-4 py-2.5 rounded-xl bg-gradient-to-r from-[#ff6b00] to-[#ff3300] text-white font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2"
          >
            <Zap className="w-4 h-4" />
            <span>Launch Fullscreen Drift</span>
          </button>
        </div>
      </div>

      {/* 4K SUPERCAR DRIFT THEATER MODAL */}
      {showDriftTheater && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl animate-fadeIn">
          <div className="relative max-w-5xl w-full bg-[#0d0f14] border border-[#ff5500]/50 rounded-3xl overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="p-4 sm:p-6 bg-gradient-to-r from-[#12141a] to-[#1a1d26] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[#ff5500] text-white">
                  <Flame className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-white">
                    {DRIFT_VIDEOS[currentVideoIndex].title}
                  </h3>
                  <p className="text-xs text-gray-400 font-mono">
                    {DRIFT_VIDEOS[currentVideoIndex].desc}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setShowDriftTheater(false)}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Video Player */}
            <div className="relative h-[320px] sm:h-[500px] w-full bg-black">
              <video
                ref={theaterVideoRef}
                autoPlay
                controls
                playsInline
                className="w-full h-full object-contain"
                src={DRIFT_VIDEOS[currentVideoIndex].url}
              ></video>
            </div>

            {/* Footer Clips Bar */}
            <div className="p-4 bg-[#090a0d] border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-gray-400 font-mono">Select Supercar Drift Action Clip:</span>
              <div className="flex gap-2">
                {DRIFT_VIDEOS.map((clip, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentVideoIndex(idx)}
                    className={`px-3 py-1.5 rounded-xl font-mono text-xs transition-all ${
                      currentVideoIndex === idx
                        ? 'bg-[#ff5500] text-white font-bold shadow-lg shadow-[#ff5500]/40'
                        : 'bg-white/10 text-gray-300 hover:text-white hover:bg-white/20'
                    }`}
                  >
                    Clip {idx + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Scroll Down Indicator */}
      <a
        href="#brands"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-gray-400 hover:text-[#ff5500] transition-colors"
      >
        <span className="text-[10px] uppercase tracking-widest font-mono">Scroll Down</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#ff5500]" />
      </a>
    </section>
  );
}
