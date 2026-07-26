import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, SkipForward, Play, Flame } from 'lucide-react';

export default function CinematicIntroSequence({ onComplete, forceReplay = false }) {
  const videoRef = useRef(null);
  const [phase, setPhase] = useState('videoStart'); // 'videoStart', 'smokeLogo', 'dissolve'
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Exact User-Provided RWB Drift Blender Car Animation MP4 File
  const VIDEO_SRC = "/rwb_drift.mp4";

  useEffect(() => {
    // Check session storage unless forceReplay is requested
    if (forceReplay) {
      sessionStorage.removeItem('carmax_cinematic_intro_seen');
      setIsVisible(true);
      setPhase('videoStart');
    } else if (sessionStorage.getItem('carmax_cinematic_intro_seen')) {
      setIsVisible(false);
      if (onComplete) onComplete();
      return;
    }

    // Force video play
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => {
        console.log("Autoplay error:", err);
      });
    }

    let t1, t2;

    // Timeline for 6.0s Cinematic Intro:
    // 0s - 3.8s: Real RWB Porsche Drift Video Animation
    // 3.8s - 5.2s: Drift smoke dissolves & CARMAX Metallic Logo emerges with light reflection streak
    // 5.2s - 6.0s: Smooth fade into live TurboTweak showroom homepage

    t1 = setTimeout(() => {
      setPhase('smokeLogo');
    }, 3800);

    t2 = setTimeout(() => {
      setPhase('dissolve');
      sessionStorage.setItem('carmax_cinematic_intro_seen', 'true');
      setTimeout(() => {
        setIsVisible(false);
        if (onComplete) onComplete();
      }, 800);
    }, 5400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [forceReplay]);

  const toggleSound = () => {
    if (videoRef.current) {
      const nextState = !soundEnabled;
      videoRef.current.muted = !nextState;
      setSoundEnabled(nextState);
    }
  };

  const skipIntro = () => {
    sessionStorage.setItem('carmax_cinematic_intro_seen', 'true');
    setIsVisible(false);
    if (onComplete) onComplete();
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="rwb-drift-intro"
        initial={{ opacity: 1 }}
        animate={{ opacity: phase === 'dissolve' ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="fixed inset-0 z-50 bg-[#040507] overflow-hidden flex items-center justify-center pointer-events-auto select-none"
      >
        {/* Real User RWB Drift Video Player */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            poster="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1920&auto=format&fit=crop"
            className="w-full h-full object-cover scale-105 filter brightness-110 contrast-125 transition-all duration-700"
          >
            <source src={VIDEO_SRC} type="video/mp4" />
          </video>

          {/* Dark Luxury Vignette & Radial Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#040507] via-transparent to-[#040507]/80 pointer-events-none"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#040507]/40 to-[#040507] pointer-events-none"></div>

          {/* Dynamic Drifting Smoke Glow Overlay */}
          <div className={`absolute inset-0 bg-[#ff5500]/15 transition-opacity duration-1000 pointer-events-none ${phase === 'smokeLogo' ? 'opacity-40' : 'opacity-0'}`}></div>
        </div>

        {/* Audio & Skip Controls */}
        <div className="absolute top-8 right-8 z-40 flex items-center gap-3">
          <button
            onClick={toggleSound}
            className="p-3 rounded-full bg-black/70 border border-white/20 backdrop-blur-md text-white hover:bg-[#ff5500] transition-all shadow-xl flex items-center gap-2 text-xs"
            title="Toggle Engine Audio"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-[#ff5500]" /> : <VolumeX className="w-4 h-4 text-gray-300" />}
            <span className="font-mono hidden sm:inline">{soundEnabled ? 'Audio On' : 'Unmute Audio'}</span>
          </button>

          <button
            onClick={skipIntro}
            className="px-4 py-2.5 rounded-full bg-black/70 border border-white/25 backdrop-blur-md text-xs font-mono font-bold text-gray-200 hover:text-white hover:border-[#ff5500] transition-all flex items-center gap-1.5 shadow-xl"
          >
            <span>SKIP INTRO</span>
            <SkipForward className="w-3.5 h-3.5 text-[#ff5500]" />
          </button>
        </div>

        {/* REALISTIC CARMAX BRAND LOGO REVEAL */}
        {(phase === 'smokeLogo' || phase === 'dissolve') && (
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-30 text-center px-6 max-w-2xl"
          >
            {/* Supercar Metallic CX Crest */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br from-[#ff6b00] via-[#ff3300] to-[#b32400] p-[2px] mx-auto mb-6 shadow-[0_0_50px_rgba(255,85,0,0.6)] animate-pulse">
              <div className="w-full h-full bg-[#07080b] rounded-[22px] flex items-center justify-center font-black text-4xl sm:text-5xl text-white tracking-tighter">
                CX
              </div>
            </div>

            {/* Glowing Brand Title */}
            <h1 className="text-5xl sm:text-7xl font-extrabold text-white tracking-widest uppercase mb-4 drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)]">
              CAR<span className="text-[#ff5500]">MAX</span>
            </h1>

            {/* Horizontal Orange Lens Flare Light Streak */}
            <div className="relative w-64 sm:w-80 h-0.5 mx-auto mb-5 bg-white/10 overflow-hidden rounded-full">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.1, ease: 'easeInOut' }}
                className="w-full h-full bg-gradient-to-r from-transparent via-[#ff5500] to-transparent shadow-[0_0_20px_#ff5500]"
              />
            </div>

            {/* Premium Tagline */}
            <p className="text-xs sm:text-sm font-mono tracking-[0.35em] uppercase text-gray-200 font-bold mb-1 drop-shadow-md">
              Driven by Precision. Defined by Excellence.
            </p>
            <p className="text-[10px] font-mono tracking-widest text-[#ff5500] uppercase font-semibold">
              MANGALORE • LUXURY AUTOMOTIVE WORKSHOP
            </p>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
