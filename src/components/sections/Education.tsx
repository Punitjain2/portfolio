'use client';

import { motion } from 'framer-motion';
import { Calendar, GraduationCap, MapPin, Award } from 'lucide-react';

const educationList = [
  {
    degree: 'Bachelor of Technology (Computer Science)',
    institution: 'Avantika University',
    duration: '2023 - 2027',
    location: 'Ujjain, Madhya Pradesh, India',
    details: 'Acquiring deep foundations in Algorithms, Object-Oriented System Designs, Database Systems, Computer Networks, and AI models. Actively participating in research projects, hackathons, and technology clubs.',
    gpa: 'Pursuing - 1st Class',
  },
  {
    degree: 'Class XII (Senior Secondary)',
    institution: 'Model Higher Secondary School',
    duration: '2022 - 2023',
    location: 'Ujjain, Madhya Pradesh, India',
    details: 'Specialized in Physics, Chemistry, and Mathematics (PCM). Developed early computer science interests with basics of algorithms and logic structures.',
    gpa: 'PCM Stream',
  },
  {
    degree: 'Class X (Secondary School)',
    institution: 'Model Higher Secondary School',
    duration: '2020 - 2021',
    location: 'Ujjain, Madhya Pradesh, India',
    details: 'Laid core foundations in Science, Mathematics, English, and analytical sciences. Participated in local science exhibitions and quizzes.',
    gpa: 'General Curriculum',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden px-6 md:px-12 bg-zinc-950/20">
      {/* Background ambient light */}
      <div className="absolute bottom-0 left-[10%] w-[35vw] h-[35vw] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        
        {/* Section Title */}
        <div className="flex flex-col items-center mb-20 text-center">
          <span className="text-xs font-mono tracking-widest text-primary uppercase mb-2">02 // Academic History</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Education <span className="text-gradient">Timeline</span>
          </h2>
          <div className="w-20 h-1 bg-accent mt-4 rounded-full" />
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative border-l border-zinc-800 ml-4 md:ml-32 pl-8 md:pl-16 space-y-16">
          {educationList.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[41px] md:-left-[81px] top-1.5 flex items-center justify-center">
                {/* Pulsing ring outer */}
                <div className="w-6 h-6 rounded-full bg-dark-bg border-2 border-zinc-700 flex items-center justify-center group-hover:border-accent group-hover:scale-110 transition-all duration-300">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-600 group-hover:bg-accent transition-colors duration-300" />
                </div>
              </div>

              {/* Float Left Year Badge for Desktop */}
              <div className="hidden md:block absolute -left-[240px] top-1 text-right w-44">
                <span className="text-sm font-bold font-mono text-zinc-500 group-hover:text-white transition-colors duration-300 flex items-center justify-end gap-2">
                  <Calendar size={14} className="text-accent" />
                  {item.duration}
                </span>
                <span className="text-[10px] text-zinc-600 uppercase font-mono block mt-1">
                  Timeline Block
                </span>
              </div>

              {/* Education Main Glass Card */}
              <div className="glass-card p-6 md:p-8 border-white/5 hover:border-white/12 relative overflow-hidden group">
                {/* Border glowing highlight effect */}
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Header info */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    {/* Degree title */}
                    <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-accent-light transition-colors duration-300 flex items-center gap-2">
                      <GraduationCap size={20} className="text-primary" />
                      {item.degree}
                    </h3>
                    {/* Institution */}
                    <h4 className="text-sm font-semibold text-zinc-300 mt-1 font-sans">
                      {item.institution}
                    </h4>
                  </div>

                  {/* Year (Mobile display only) */}
                  <span className="md:hidden self-start px-3 py-1 text-xs font-mono font-semibold text-accent bg-accent/10 border border-accent/20 rounded-md flex items-center gap-1.5">
                    <Calendar size={12} />
                    {item.duration}
                  </span>

                  {/* GPA/Score Tag */}
                  <span className="self-start md:self-center px-3.5 py-1.5 text-xs font-mono font-medium text-white bg-zinc-900 border border-zinc-800 rounded-lg flex items-center gap-1.5">
                    <Award size={12} className="text-amber-500" />
                    {item.gpa}
                  </span>
                </div>

                {/* Location */}
                <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-mono mb-4">
                  <MapPin size={12} />
                  {item.location}
                </div>

                {/* Details paragraph */}
                <p className="text-sm text-zinc-400 leading-relaxed font-sans">
                  {item.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
