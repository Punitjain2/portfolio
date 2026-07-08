'use client';

import { motion } from 'framer-motion';
import { 
  Code, Layout, Server, Database, Smartphone, 
  BarChart, Paintbrush, Shield, Terminal, Cpu 
} from 'lucide-react';

const row1Tech = [
  { name: 'Python', icon: Code, color: 'text-yellow-500 bg-yellow-500/10' },
  { name: 'C++', icon: Terminal, color: 'text-blue-500 bg-blue-500/10' },
  { name: 'React.js', icon: Layout, color: 'text-cyan-400 bg-cyan-400/10' },
  { name: 'Node.js', icon: Server, color: 'text-green-500 bg-green-500/10' },
  { name: 'MySQL', icon: Database, color: 'text-orange-500 bg-orange-500/10' },
  { name: 'Kotlin', icon: Smartphone, color: 'text-purple-500 bg-purple-500/10' },
  { name: 'Android Studio', icon: Cpu, color: 'text-emerald-400 bg-emerald-400/10' },
];

const row2Tech = [
  { name: 'MongoDB', icon: Database, color: 'text-green-400 bg-green-400/10' },
  { name: 'Power BI', icon: BarChart, color: 'text-yellow-600 bg-yellow-600/10' },
  { name: 'Figma', icon: Paintbrush, color: 'text-pink-500 bg-pink-500/10' },
  { name: 'Git & GitHub', icon: Shield, color: 'text-white bg-white/10' },
  { name: 'VS Code', icon: Code, color: 'text-blue-400 bg-blue-400/10' },
  { name: 'Cisco Packet Tracer', icon: Cpu, color: 'text-teal-400 bg-teal-400/10' },
  { name: 'Data Analysis', icon: BarChart, color: 'text-cyan-500 bg-cyan-500/10' },
];

export default function TechShowcase() {
  return (
    <section id="tech-showcase" className="py-24 relative overflow-hidden bg-zinc-950/20">
      {/* Background glow orb */}
      <div className="absolute top-[20%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[35vw] h-[35vw] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-xs font-mono tracking-widest text-primary uppercase mb-2">08 // Toolbox</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Technology <span className="text-gradient">Showcase</span>
          </h2>
          <div className="w-20 h-1 bg-accent mt-4 rounded-full" />
        </div>
      </div>

      {/* Scrolling Marquees Container */}
      <div className="flex flex-col gap-6 w-full select-none">
        
        {/* Row 1: Left to Right scrolling */}
        <div className="w-full overflow-hidden flex relative">
          {/* Gradient fade borders left/right */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-dark-bg to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-dark-bg to-transparent z-10 pointer-events-none" />
          
          <div className="flex gap-4 py-2 animate-marquee hover:[animation-play-state:paused] whitespace-nowrap min-w-full">
            {/* Render list twice to ensure seamless infinite looping */}
            {[...row1Tech, ...row1Tech, ...row1Tech].map((tech, index) => {
              const TechIcon = tech.icon;
              return (
                <div
                  key={`${tech.name}-${index}`}
                  className="glass-card px-6 py-4 flex items-center gap-3 border-white/5 hover:border-primary/20 hover:bg-zinc-900/60 duration-300 shrink-0 select-none hover-target"
                >
                  <div className={`p-2 rounded-lg ${tech.color} shrink-0`}>
                    <TechIcon size={18} />
                  </div>
                  <span className="text-sm font-bold text-white font-mono">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Row 2: Right to Left scrolling */}
        <div className="w-full overflow-hidden flex relative">
          {/* Gradient fade borders left/right */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-dark-bg to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-dark-bg to-transparent z-10 pointer-events-none" />
          
          <div className="flex gap-4 py-2 animate-marquee-reverse hover:[animation-play-state:paused] whitespace-nowrap min-w-full">
            {/* Render list twice for loop */}
            {[...row2Tech, ...row2Tech, ...row2Tech].map((tech, index) => {
              const TechIcon = tech.icon;
              return (
                <div
                  key={`${tech.name}-${index}`}
                  className="glass-card px-6 py-4 flex items-center gap-3 border-white/5 hover:border-accent/20 hover:bg-zinc-900/60 duration-300 shrink-0 select-none hover-target"
                >
                  <div className={`p-2 rounded-lg ${tech.color} shrink-0`}>
                    <TechIcon size={18} />
                  </div>
                  <span className="text-sm font-bold text-white font-mono">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
