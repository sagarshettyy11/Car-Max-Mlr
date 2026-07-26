import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, SkipForward, Play } from 'lucide-react';

export default function CinematicIntroSequence({ onComplete, forceReplay = false }) {
  const videoRef = useRef(null);
  const [phase, setPhase] = useState('videoStart'); // 'videoStart', 'smokeLogo', 'dissolve'
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  // Exact User-Provided High Quality RWB Drift Video MP4 File
  const VIDEO_SRC = "/rwb_drift.mp4";

  useEffect(() => {
    // Session persistence unless forceReplay requested
    if (forceReplay) {
      sessionStorage.removeItem('carmax_cinematic_intro_seen');
      setIsVisible(true);
      setPhase('videoStart');
      setSoundEnabled(true);
    } else if (sessionStorage.getItem('carmax_cinematic_intro_seen')) {
      setIsVisible(false);
      if (onComplete) onComplete();
      return;
    }

    // Default sound ON: Attempt unmuted playback immediately
    const attemptUnmutedPlay = () => {
      if (videoRef.current) {
        videoRef.current.muted = false;
        videoRef.current.volume = 1.0;
        const promise = videoRef.current.play();
        if (promise !== undefined) {
          promise.catch(() => {
            // Browser restricted unmuted autoplay prior to first gesture:
            // Temporarily play muted until first user interaction anywhere on screen
            if (videoRef.current) {
              videoRef.current.muted = true;
              videoRef.current.play().catch(console.error);
            }
          });
        }
      }
    };

    attemptUnmutedPlay();

    // Auto-unmute sound immediately on first user interaction anywhere on page
    const handleFirstInteraction = () => {
      if (videoRef.current) {
        videoRef.current.muted = false;
        videoRef.current.volume = 1.0;
        videoRef.current.play().catch(console.error);
      }
      cleanupInteractionListeners();
    };

    const cleanupInteractionListeners = () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('pointerdown', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('touchstart', handleFirstInteraction);
    window.addEventListener('pointerdown', handleFirstInteraction);
    window.addEventListener('keydown', handleFirstInteraction);

    let t1, t2;

    // Timeline for 6.5s Cinematic Intro:
    t1 = setTimeout(() => {
      setPhase('smokeLogo');
    }, 4200);

    t2 = setTimeout(() => {
      setPhase('dissolve');
      sessionStorage.setItem('carmax_cinematic_intro_seen', 'true');
      setTimeout(() => {
        setIsVisible(false);
        if (onComplete) onComplete();
      }, 800);
    }, 5800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      cleanupInteractionListeners();
    };
  }, [forceReplay]);

  const toggleSound = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      const nextState = !soundEnabled;
      videoRef.current.muted = !nextState;
      videoRef.current.volume = nextState ? 1.0 : 0;
      setSoundEnabled(nextState);
    }
  };

  const skipIntro = (e) => {
    e.stopPropagation();
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
        className="fixed inset-0 z-50 bg-[#050608] overflow-hidden flex items-center justify-center pointer-events-auto select-none"
      >
        {/* Real RWB Porsche Drift Video Player */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={!soundEnabled}
            playsInline
            preload="auto"
            poster="/porshe-final.png"
            className="w-full h-full object-cover scale-105 transform-gpu transition-all duration-700"
          >
            <source src={VIDEO_SRC} type="video/mp4" />
          </video>

          {/* Dark Luxury Vignette Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-transparent to-[#050608]/80 pointer-events-none"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#050608]/50 to-[#050608] pointer-events-none"></div>
        </div>

        {/* Top Controls: Sound Audio & Skip Button */}
        <div className="absolute top-8 right-8 z-40 flex items-center gap-3">
          <button
            onClick={toggleSound}
            className={`px-4 py-2.5 rounded-full border backdrop-blur-md transition-all shadow-xl flex items-center gap-2 text-xs font-mono font-bold ${
              soundEnabled
                ? 'bg-white text-black border-white shadow-white/20'
                : 'bg-black/80 text-white border-white/30 hover:bg-white hover:text-black'
            }`}
            title="Toggle Engine Audio"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-black" /> : <VolumeX className="w-4 h-4 text-gray-400" />}
            <span>{soundEnabled ? 'SOUND ON' : 'UNMUTE ENGINE'}</span>
          </button>

          <button
            onClick={skipIntro}
            className="px-4 py-2.5 rounded-full bg-black/80 border border-white/25 backdrop-blur-md text-xs font-mono font-bold text-gray-200 hover:text-white hover:border-white transition-all flex items-center gap-1.5 shadow-xl"
          >
            <span>SKIP INTRO</span>
            <SkipForward className="w-3.5 h-3.5 text-white" />
          </button>
        </div>

        {/* OFFICIAL CARMAX BRAND LOGO REVEAL AFTER DRIFT */}
        {(phase === 'smokeLogo' || phase === 'dissolve') && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-30 text-center px-6 max-w-2xl"
          >
            {/* Official CARMAX Logo Badge */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-[#090a0d] border border-white/20 p-2 mx-auto mb-6 shadow-2xl overflow-hidden">
              <img
                src="/carmax_logo.jpeg"
                alt="CARMAX Logo"
                className="w-full h-full object-contain rounded-xl"
              />
            </div>

            {/* Glowing Brand Title */}
            <h1 className="text-5xl sm:text-7xl font-extrabold text-white tracking-widest uppercase mb-3 font-sans">
              CAR<span className="text-gray-400">MAX</span>
            </h1>

            {/* Horizontal Metallic Light Beam */}
            <div className="relative w-64 sm:w-80 h-0.5 mx-auto mb-4 bg-white/10 overflow-hidden rounded-full">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.1, ease: 'easeInOut' }}
                className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_20px_#ffffff]"
              />
            </div>

            <p className="text-xs sm:text-sm font-mono tracking-[0.35em] uppercase text-gray-300 font-bold mb-1">
              Driven by Precision. Defined by Excellence.
            </p>
            <p className="text-[10px] font-mono tracking-widest text-gray-400 uppercase font-semibold">
              MANGALORE • LUXURY AUTOMOTIVE WORKSHOP
            </p>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
