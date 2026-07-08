'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader() {
  const [count, setCount] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    // Disable body scroll during load
    document.body.style.overflow = 'hidden';

    let current = 0;
    const duration = 1600; // Total duration in ms
    const intervalTime = 16; // Approx 60fps
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      current += step + Math.random() * 2; // Slight randomized step size for a more natural loading feel
      if (current >= 100) {
        current = 100;
        clearInterval(timer);
        setTimeout(() => {
          setIsCompleted(true);
          document.body.style.overflow = '';
        }, 300); // Hold at 100% briefly
      }
      setCount(Math.floor(current));
    }, intervalTime);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {!isCompleted && (
        <motion.div
          className="fixed inset-0 w-full h-full bg-dark-bg z-[99999] flex flex-col justify-between p-8 md:p-16"
          exit={{
            y: '-100%',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          {/* Top Info */}
          <div className="flex justify-between items-center text-xs tracking-[0.2em] text-zinc-500 font-mono">
            <span>PUNIT JAIN // PORTFOLIO</span>
            <span>2026 // B.TECH CS</span>
          </div>

          {/* Centered Premium Typography */}
          <div className="flex flex-col items-start max-w-4xl mx-auto w-full my-auto">
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 80 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
                className="text-4xl md:text-7xl font-bold tracking-tight text-white"
              >
                Punit Jain
              </motion.h1>
            </div>
            <div className="overflow-hidden mt-2">
              <motion.p
                initial={{ y: 40 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.215, 0.61, 0.355, 1] }}
                className="text-lg md:text-2xl text-gradient font-medium"
              >
                Software Engineer &amp; AI Innovator
              </motion.p>
            </div>
          </div>

          {/* Bottom Counter & Status */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mt-auto">
            <div className="flex flex-col gap-2">
              <div className="w-48 h-[1px] bg-zinc-800 relative overflow-hidden">
                <motion.div
                  className="absolute left-0 top-0 h-full bg-primary"
                  style={{ width: `${count}%` }}
                />
              </div>
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                Initializing Workspace...
              </span>
            </div>
            
            <div className="overflow-hidden">
              <span className="text-7xl md:text-9xl font-bold font-mono tracking-tighter text-zinc-800 leading-none select-none block">
                {count}%
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
