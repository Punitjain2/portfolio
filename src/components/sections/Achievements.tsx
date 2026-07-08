'use client';

import { motion } from 'framer-motion';
import { Target, Trophy, Compass, Star } from 'lucide-react';

const milestones = [
  {
    title: 'IoT System Showcased',
    subtitle: 'University Innovation Forum',
    desc: 'Designed and presented the Smart Bike Tracker hardware tracking model to faculty and student innovators. Recognized for integrating GSM + GPS modules on low power chips.',
    icon: Trophy,
    color: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
  },
  {
    title: 'Top Academic Foundation',
    subtitle: 'Avantika University CS Track',
    desc: 'Maintained strong analytical marks in Data Structures, OOP, and DBMS. Active participant inside computing clubs and academic workshops.',
    icon: Star,
    color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
  },
  {
    title: 'Database Normalization Excellence',
    subtitle: '7+ Applications Deployed',
    desc: 'Designed complex relational models, indexing pipelines, and triggers across e-commerce inventories, employee registries, and real-time medical appointment suites.',
    icon: Target,
    color: 'text-accent-light bg-accent/10 border-accent/20',
  },
];

const futureGoals = [
  {
    goal: 'Applied AI & LLM Fine-Tuning',
    desc: 'Developing specialized chatbots and integrating neural layers with backend services.',
    progress: 75,
    strokeColor: '#3b82f6', // blue
  },
  {
    goal: 'Cloud-Native & Docker DevOps',
    desc: 'Learning container configurations and serverless deployment architectures.',
    progress: 60,
    strokeColor: '#10b981', // emerald
  },
  {
    goal: 'Modern Jetpack Compose Android',
    desc: 'Expanding Kotlin skills with declarative layouts and reactive state pipelines.',
    progress: 80,
    strokeColor: '#a855f7', // purple
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden px-6 md:px-12">
      {/* Background glow orb */}
      <div className="absolute top-[30%] left-[-15%] w-[45vw] h-[45vw] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-16 text-left">
          <span className="text-xs font-mono tracking-widest text-primary uppercase mb-2">07 // Ambitions &amp; Honors</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Achievements &amp; <span className="text-gradient">Future Goals</span>
          </h2>
          <div className="w-20 h-1 bg-accent mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Milestones */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <h3 className="text-xl font-extrabold text-white mb-6 flex items-center gap-2">
              <Trophy className="text-amber-400" size={20} />
              Key Milestones
            </h3>
            
            {milestones.map((milestone, index) => {
              const IconComp = milestone.icon;
              return (
                <motion.div
                  key={milestone.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-6 border-white/5 hover:border-white/12 relative overflow-hidden group flex gap-4"
                >
                  <div className={`p-3 rounded-xl border shrink-0 h-fit ${milestone.color} group-hover:scale-105 transition-all duration-300`}>
                    <IconComp size={20} />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block mb-0.5">
                      {milestone.subtitle}
                    </span>
                    <h4 className="text-base font-bold text-white group-hover:text-accent-light transition-colors duration-300">
                      {milestone.title}
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed mt-2 font-sans">
                      {milestone.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Future Goals with SVG Progress Rings */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <h3 className="text-xl font-extrabold text-white mb-6 flex items-center gap-2">
              <Compass className="text-accent-light" size={20} />
              Growth Roadmap
            </h3>

            <div className="space-y-6">
              {futureGoals.map((item, index) => {
                // Radial ring configurations
                const radius = 30;
                const circumference = 2 * Math.PI * radius;
                const strokeDashoffset = circumference - (item.progress / 100) * circumference;

                return (
                  <motion.div
                    key={item.goal}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass-card p-6 border-white/5 hover:border-white/12 flex items-center gap-6 group hover-target"
                  >
                    {/* SVG Circular Progress Ring */}
                    <div className="relative shrink-0 flex items-center justify-center">
                      <svg className="w-20 h-20 transform -rotate-90">
                        {/* Track circle */}
                        <circle
                          cx="40"
                          cy="40"
                          r={radius}
                          className="stroke-zinc-800"
                          strokeWidth="5"
                          fill="transparent"
                        />
                        {/* Progress circle */}
                        <motion.circle
                          cx="40"
                          cy="40"
                          r={radius}
                          stroke={item.strokeColor}
                          strokeWidth="5"
                          fill="transparent"
                          strokeDasharray={circumference}
                          initial={{ strokeDashoffset: circumference }}
                          whileInView={{ strokeDashoffset }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.2, ease: 'easeOut' }}
                          strokeLinecap="round"
                        />
                      </svg>
                      {/* Percent Overlay */}
                      <span className="absolute text-xs font-mono font-bold text-white">
                        {item.progress}%
                      </span>
                    </div>

                    {/* Goal Description details */}
                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-accent-light transition-colors">
                        {item.goal}
                      </h4>
                      <p className="text-xs text-zinc-400 leading-relaxed mt-1.5 font-sans">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
