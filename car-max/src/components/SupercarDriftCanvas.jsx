import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCw, Play, Volume2, Sparkles, Flame, Gauge } from 'lucide-react';

export default function SupercarDriftCanvas({ onAnimationComplete }) {
  const canvasRef = useRef(null);
  const [stage, setStage] = useState('intro'); // 'intro', 'drifting', 'settled'
  const [replayKey, setReplayKey] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Resize canvas
    const handleResize = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // Particle pool for tire smoke and drift sparks
    const particles = [];
    const skidMarks = [];

    let startTime = performance.now();

    // Car Animation State Variables
    let carX = -canvas.width * 0.4;
    let carY = canvas.height * 0.55;
    let carAngle = 0.2; // Radians
    let scale = 1;
    let speed = 25;
    let opacity = 0;

    const render = (now) => {
      const elapsed = (now - startTime) / 1000;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const width = canvas.width;
      const height = canvas.height;

      // Stage 1: Entrance & Fast Approach (0s -> 1.2s)
      if (elapsed < 1.2) {
        const progress = elapsed / 1.2;
        carX = -width * 0.3 + (width * 0.75) * Math.sin((progress * Math.PI) / 2);
        carY = height * 0.7 - (height * 0.15) * progress;
        carAngle = 0.35 - progress * 0.15;
        opacity = Math.min(1, progress * 2);
        speed = 30 * (1 - progress * 0.4);

        // Spawn high-speed trail particles
        if (Math.random() < 0.6) {
          particles.push({
            x: carX - 100,
            y: carY + 40,
            vx: (Math.random() - 0.5) * 4 - 8,
            vy: (Math.random() - 0.5) * 3,
            size: Math.random() * 25 + 15,
            alpha: 0.6,
            color: 'rgba(200, 200, 210, ',
            life: 0.8
          });
        }
      }
      // Stage 2: Sharp Drift sideways (1.2s -> 2.6s)
      else if (elapsed < 2.6) {
        const progress = (elapsed - 1.2) / 1.4;
        carX = width * 0.45 + (width * 0.15) * Math.sin(progress * Math.PI * 0.5);
        carY = height * 0.55 + Math.sin(progress * Math.PI) * 20;
        // Rotate sideways into drift angle!
        carAngle = 0.2 - Math.sin(progress * Math.PI) * 0.45;
        opacity = 1;

        // Generate intense tire smoke clouds
        for (let i = 0; i < 4; i++) {
          particles.push({
            x: carX - 120 + (Math.random() - 0.5) * 40,
            y: carY + 30 + (Math.random() - 0.5) * 30,
            vx: -Math.random() * 6 - 2,
            vy: (Math.random() - 0.5) * 4 - 1,
            size: Math.random() * 45 + 20,
            alpha: 0.7,
            color: Math.random() < 0.3 ? 'rgba(255, 85, 0, ' : 'rgba(220, 220, 230, ',
            life: 1.2
          });
        }

        // Leave tire skid mark lines
        if (skidMarks.length < 60) {
          skidMarks.push({
            x1: carX - 80,
            y1: carY + 35,
            x2: carX - 140,
            y2: carY + 45,
            alpha: 0.6
          });
        }
      }
      // Stage 3: Settled position with engine idle pulse (2.6s+)
      else {
        carX = width * 0.6;
        carY = height * 0.55 + Math.sin(elapsed * 2) * 3;
        carAngle = -0.05 + Math.sin(elapsed * 1.5) * 0.02;
        opacity = 1;

        if (stage !== 'settled') {
          setStage('settled');
          if (onAnimationComplete) onAnimationComplete();
        }

        // Soft idle exhaust smoke
        if (Math.random() < 0.25) {
          particles.push({
            x: carX - 180,
            y: carY + 20,
            vx: -Math.random() * 2 - 1,
            vy: -Math.random() * 1.5 - 0.5,
            size: Math.random() * 20 + 10,
            alpha: 0.3,
            color: 'rgba(255, 85, 0, ',
            life: 1.0
          });
        }
      }

      // Render Tire Skid Marks
      ctx.lineWidth = 6;
      skidMarks.forEach((sm) => {
        ctx.strokeStyle = `rgba(255, 85, 0, ${sm.alpha * 0.4})`;
        ctx.beginPath();
        ctx.moveTo(sm.x1, sm.y1);
        ctx.lineTo(sm.x2, sm.y2);
        ctx.stroke();
      });

      // Update and Draw Particles (Smoke & Sparks)
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.size += 0.8;
        p.alpha -= 0.015;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw Supercar Visual Representation
      ctx.save();
      ctx.translate(carX, carY);
      ctx.rotate(carAngle);
      ctx.globalAlpha = opacity;

      // Draw Headlight Beam Cone Glow
      const beamGradient = ctx.createRadialGradient(250, 0, 10, 500, 0, 300);
      beamGradient.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
      beamGradient.addColorStop(0.3, 'rgba(255, 120, 0, 0.4)');
      beamGradient.addColorStop(1, 'rgba(255, 85, 0, 0)');

      ctx.fillStyle = beamGradient;
      ctx.beginPath();
      ctx.moveTo(120, -10);
      ctx.lineTo(600, -180);
      ctx.lineTo(600, 180);
      ctx.lineTo(120, 10);
      ctx.closePath();
      ctx.fill();

      // Supercar Body Base Shape
      ctx.fillStyle = '#0a0b0e';
      ctx.strokeStyle = '#ff5500';
      ctx.lineWidth = 2;

      // Underglow Light
      ctx.shadowColor = '#ff5500';
      ctx.shadowBlur = 35;

      // Draw Sports Coupe Silhouette Contour
      ctx.beginPath();
      ctx.moveTo(-180, 25);
      ctx.bezierCurveTo(-190, -10, -140, -45, -60, -55);
      ctx.bezierCurveTo(20, -60, 90, -40, 140, -15);
      ctx.bezierCurveTo(180, -5, 210, 10, 220, 25);
      ctx.bezierCurveTo(200, 45, 150, 45, -180, 25);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Glowing Brake Calipers / Wheels
      ctx.fillStyle = '#ff5500';
      ctx.beginPath();
      ctx.arc(-110, 30, 22, 0, Math.PI * 2);
      ctx.arc(110, 30, 22, 0, Math.PI * 2);
      ctx.fill();

      // Inner Wheel Rims
      ctx.fillStyle = '#1e2028';
      ctx.beginPath();
      ctx.arc(-110, 30, 16, 0, Math.PI * 2);
      ctx.arc(110, 30, 16, 0, Math.PI * 2);
      ctx.fill();

      // Dual Xenon Headlight Optics
      ctx.fillStyle = '#ffffff';
      ctx.shadowColor = '#ffffff';
      ctx.shadowBlur = 20;
      ctx.beginPath();
      ctx.arc(195, 12, 6, 0, Math.PI * 2);
      ctx.arc(205, 20, 5, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [replayKey]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
      {/* HTML5 Canvas overlay */}
      <canvas ref={canvasRef} className="w-full h-full block" />

      {/* Dynamic Drifting Overlay Banner Badge */}
      <div className="absolute top-24 left-6 sm:left-12 z-20 pointer-events-auto">
        <motion.button
          key={replayKey}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          onClick={() => {
            setStage('drifting');
            setReplayKey((k) => k + 1);
          }}
          className="px-4 py-2 rounded-full bg-black/70 border border-[#ff5500]/50 backdrop-blur-md text-xs font-mono font-bold text-white hover:bg-[#ff5500] transition-all flex items-center gap-2 shadow-lg shadow-[#ff5500]/20 group"
        >
          <RefreshCw className="w-3.5 h-3.5 text-[#ff5500] group-hover:text-white group-hover:rotate-180 transition-transform duration-500" />
          <span>REPLAY DRIFT ENTRANCE</span>
        </motion.button>
      </div>
    </div>
  );
}
