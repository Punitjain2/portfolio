'use client';

import { motion } from 'framer-motion';
import { Briefcase, Code, Award, Hourglass, Landmark } from 'lucide-react';

const experiences = [
  {
    role: 'Full Stack & IoT Developer',
    company: 'Academic Engineering & Innovation Labs',
    duration: '2023 - Present',
    type: 'Academic',
    icon: Code,
    color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
    description: 'Spearheading design and implementation of cross-discipline software applications, combining low-power hardware (ESP32) and native applications. Architected normalized database schemas, built responsive frontends, and integrated secure auth systems.',
    bullets: [
      'Engineered smart bike tracking hardware connecting LoRa mesh networks and GSM alert cells',
      'Developed native doctor booking application in Kotlin with real-time Firebase sync',
      'Modeled C++ CLI dashboards linked with MySQL databases for high throughput queries',
    ]
  },
  {
    role: 'Hackathon Contender & Rapid Prototyper',
    company: 'National & University Hackathons',
    duration: '2024 - Present',
    type: 'Competition',
    icon: Award,
    color: 'text-accent-light bg-accent/10 border-accent/20',
    description: 'Participate in time-bound technological sprints (24 to 48-hour hackathons) to build solutions for real-world issues. Collaborate closely with designers and database engineers to deliver complete MVPs.',
    bullets: [
      'Pitched a virtual clothes trying-on avatar web concept for e-commerce, using browser rendering overlays',
      'Structured attendance tracking wireframes and clickable routes based on user research feedback',
      'Collaborated on database triggers to optimize logistics and stock monitoring databases under strain',
    ]
  },
  {
    role: 'Software Engineer Intern',
    company: 'Seeking Industrial Internship Opportunities',
    duration: 'Upcoming / Available Now',
    type: 'Placement Target',
    icon: Hourglass,
    color: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    description: 'Actively interviewing for software engineering, full-stack, mobile (Android), or applied artificial intelligence internships. Eager to solve challenging problems and implement scalable solutions within production environments.',
    bullets: [
      'Eager to collaborate on corporate applications alongside professional developers',
      'Ready to apply solid understanding of data structures, databases, and network architectures',
      'Strongly self-motivated with capability to pick up new stacks and tools in short timelines',
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden px-6 md:px-12">
      {/* Glow spots */}
      <div className="absolute top-[10%] left-[-10%] w-[35vw] h-[35vw] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-16 text-left">
          <span className="text-xs font-mono tracking-widest text-primary uppercase mb-2">05 // Professional Journey</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Experience &amp; <span className="text-gradient">Milestones</span>
          </h2>
          <div className="w-20 h-1 bg-accent mt-4 rounded-full" />
        </div>

        {/* Experience Cards Grid */}
        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="glass-card p-6 md:p-8 border-white/5 hover:border-white/12 relative overflow-hidden group flex flex-col md:flex-row gap-6 items-start"
              >
                {/* Floating glowing slide */}
                <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-primary/5 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Left Side: Icon & Meta */}
                <div className="flex md:flex-col items-center md:items-start justify-between w-full md:w-48 shrink-0 border-b md:border-b-0 md:border-r border-zinc-900 pb-4 md:pb-0 md:pr-6 gap-4">
                  <div className={`p-3.5 rounded-2xl border ${exp.color} group-hover:scale-105 transition-transform duration-300`}>
                    <Icon size={24} />
                  </div>
                  <div className="text-left md:mt-2">
                    <span className="text-xs font-mono font-bold text-zinc-500 block">
                      {exp.duration}
                    </span>
                    <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-zinc-900 border border-zinc-800 text-zinc-400 uppercase tracking-wider">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Right Side: Role Content */}
                <div className="flex-grow text-left">
                  <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-accent-light transition-colors leading-snug">
                    {exp.role}
                  </h3>
                  <h4 className="text-sm font-semibold text-zinc-400 mt-1 font-mono flex items-center gap-1.5">
                    <Landmark size={14} className="text-zinc-600" />
                    {exp.company}
                  </h4>
                  
                  <p className="text-sm text-zinc-400 mt-4 leading-relaxed font-sans">
                    {exp.description}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="mt-6 space-y-2.5">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex gap-2.5 text-xs text-zinc-400 leading-relaxed font-sans">
                        <span className="text-primary">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
