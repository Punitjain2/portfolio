'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, Terminal, Cpu, Award } from 'lucide-react';

const stats = [
  { value: 7, label: 'Projects Completed', icon: Terminal, color: 'text-indigo-400', suffix: '+' },
  { value: 7, label: 'Certifications Earned', icon: Award, color: 'text-accent-light', suffix: '' },
  { value: 20, label: 'Technologies Learned', icon: Cpu, color: 'text-purple-400', suffix: '+' },
  { value: 4, label: 'Years of Learning', icon: Sparkles, color: 'text-amber-400', suffix: '+' },
];

function CountUp({ value, duration = 1.5, suffix = '' }: { value: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const isInView = useInView(elementRef, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration, isInView]);

  return <span ref={elementRef}>{count}{suffix}</span>;
}

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden px-6 md:px-12">
      {/* Background glow spot */}
      <div className="absolute top-[20%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-16 text-left">
          <span className="text-xs font-mono tracking-widest text-primary uppercase mb-2">01 // Biography</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-accent mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Bio */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <motion.h3 
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-semibold text-white tracking-wide leading-snug"
            >
              Aspiring Software Engineer &amp; AI Enthusiast driven to build high-scale, intelligent systems.
            </motion.h3>

            <motion.p 
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base text-zinc-400 leading-relaxed"
            >
              Currently pursuing my B.Tech degree in Computer Science at Avantika University (Graduation 2027), I possess a robust analytical mindset and a strong foundation in programming languages, web technologies, software architecture, mobile systems, and network communication.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base text-zinc-400 leading-relaxed"
            >
              My passion lies at the intersection of full-stack engineering and intelligent machine learning systems. I relish solving challenging algorithmic problems, developing responsive frontend applications, building reliable databases, and implementing hardware-integrated IoT solutions.
            </motion.p>

            {/* Micro Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 font-mono text-xs">
              <div className="flex items-center gap-3 bg-zinc-900/40 p-4 rounded-xl border border-white/5">
                <span className="text-accent font-bold">&gt; LOCATION:</span>
                <span className="text-zinc-300">Ujjain, Madhya Pradesh, India</span>
              </div>
              <div className="flex items-center gap-3 bg-zinc-900/40 p-4 rounded-xl border border-white/5">
                <span className="text-accent font-bold">&gt; EDUCATION:</span>
                <span className="text-zinc-300">B.Tech in Computer Science</span>
              </div>
            </div>
          </div>

          {/* Right Counters Cards Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((stat, index) => {
              const IconComp = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass-card p-6 flex flex-col justify-between items-start border-white/5 hover:border-white/12 h-44 relative group"
                >
                  {/* Subtle hover gradient slide */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
                  
                  <div className="flex justify-between items-center w-full relative z-10">
                    <div className={`p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 ${stat.color}`}>
                      <IconComp size={20} />
                    </div>
                    {/* Index numbers */}
                    <span className="text-zinc-700 text-xs font-mono font-bold">0{index + 1}</span>
                  </div>

                  <div className="mt-4 relative z-10">
                    <div className="text-3xl font-bold text-white tracking-tight font-mono mb-1">
                      <CountUp value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-xs text-zinc-500 font-medium tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
