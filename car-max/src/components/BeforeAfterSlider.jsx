import React, { useState, useRef, useEffect } from 'react';
import { BEFORE_AFTER_CASES } from '../data/carmaxData';
import { Sliders, Sparkles, MoveHorizontal, CheckCircle2 } from 'lucide-react';

export default function BeforeAfterSlider() {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const activeCase = BEFORE_AFTER_CASES[activeCaseIndex];

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e) => {
    if (isDragging && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <section id="before-after" className="py-24 bg-[#0c0d12] relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#ff5500] font-mono uppercase tracking-widest mb-4">
            <Sliders className="w-3.5 h-3.5" />
            INTERACTIVE CRAFTSMANSHIP COMPARISON
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            BEFORE & AFTER <span className="orange-gradient-text">TRANSFORMATIONS</span>
          </h2>
          <p className="text-base text-gray-400 font-light leading-relaxed">
            Drag the interactive handle left and right to witness the astonishing level of detailing, paint restoration, and customization performed by CARMAX.
          </p>

          {/* Preset Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            {BEFORE_AFTER_CASES.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveCaseIndex(idx);
                  setSliderPosition(50);
                }}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  activeCaseIndex === idx
                    ? 'bg-[#ff5500] text-white shadow-lg shadow-[#ff5500]/30 scale-105'
                    : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        {/* Comparison Box */}
        <div className="max-w-4xl mx-auto">
          <div className="mb-4 flex items-center justify-between text-xs font-mono text-gray-300 px-2">
            <span className="flex items-center gap-1.5 text-gray-400">
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              BEFORE: {activeCase.beforeLabel}
            </span>
            <span className="flex items-center gap-1.5 text-[#ff5500] font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#ff5500]" />
              AFTER: {activeCase.afterLabel}
            </span>
          </div>

          <div
            ref={containerRef}
            onMouseDown={(e) => {
              setIsDragging(true);
              handleMove(e.clientX);
            }}
            onTouchStart={(e) => {
              setIsDragging(true);
              if (e.touches[0]) handleMove(e.touches[0].clientX);
            }}
            className="relative h-[350px] sm:h-[500px] w-full rounded-3xl overflow-hidden border border-white/15 shadow-2xl select-none cursor-ew-resize group"
          >
            {/* AFTER IMAGE (Full Base) */}
            <img
              src={activeCase.afterImage}
              alt="After Transformation"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-[#ff5500] text-white text-[10px] font-mono font-bold uppercase tracking-widest shadow-lg">
              AFTER (CARMAX)
            </div>

            {/* BEFORE IMAGE (Clipped Overlay) */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={activeCase.beforeImage}
                alt="Before Transformation"
                className="absolute inset-y-0 left-0 max-w-none h-full object-cover"
                style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%' }}
              />
              <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/80 border border-white/20 text-gray-300 text-[10px] font-mono uppercase tracking-widest">
                BEFORE
              </div>
            </div>

            {/* Vertical Slider Bar & Handle */}
            <div
              className="absolute inset-y-0 z-20 w-1 bg-[#ff5500] cursor-ew-resize shadow-[0_0_15px_#ff5500]"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#ff5500] text-white shadow-xl shadow-[#ff5500]/50 flex items-center justify-center border-2 border-white group-hover:scale-110 transition-transform">
                <MoveHorizontal className="w-5 h-5 animate-pulse" />
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-gray-300 text-center">
            <p className="font-light">
              <strong className="text-white font-semibold">{activeCase.vehicle}:</strong> {activeCase.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
