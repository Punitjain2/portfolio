'use client';

import { motion } from 'framer-motion';
import { 
  Code, Layout, Server, Database, Smartphone, 
  BrainCircuit, ShieldAlert, BookOpen, ExternalLink 
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code,
    color: 'text-indigo-400',
    borderColor: 'group-hover:border-indigo-500/30',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'C++', level: 85 },
      { name: 'C', level: 80 },
      { name: 'JavaScript', level: 85 },
      { name: 'SQL', level: 80 },
    ],
  },
  {
    title: 'Frontend',
    icon: Layout,
    color: 'text-accent-light',
    borderColor: 'group-hover:border-teal-500/30',
    skills: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3 / Tailwind', level: 90 },
      { name: 'React.js', level: 80 },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    color: 'text-purple-400',
    borderColor: 'group-hover:border-purple-500/30',
    skills: [
      { name: 'Node.js', level: 75 },
      { name: 'REST APIs', level: 80 },
    ],
  },
  {
    title: 'Databases',
    icon: Database,
    color: 'text-rose-400',
    borderColor: 'group-hover:border-rose-500/30',
    skills: [
      { name: 'MySQL', level: 85 },
      { name: 'MongoDB', level: 78 },
    ],
  },
  {
    title: 'Mobile Development',
    icon: Smartphone,
    color: 'text-emerald-400',
    borderColor: 'group-hover:border-emerald-500/30',
    skills: [
      { name: 'Kotlin', level: 82 },
      { name: 'Android Studio', level: 85 },
    ],
  },
  {
    title: 'AI & Data',
    icon: BrainCircuit,
    color: 'text-amber-400',
    borderColor: 'group-hover:border-amber-500/30',
    skills: [
      { name: 'Machine Learning', level: 75 },
      { name: 'Data Analysis', level: 80 },
      { name: 'Power BI', level: 78 },
      { name: 'Excel (Advanced)', level: 85 },
    ],
  },
  {
    title: 'Tools',
    icon: ShieldAlert,
    color: 'text-blue-400',
    borderColor: 'group-hover:border-blue-500/30',
    skills: [
      { name: 'Git & GitHub', level: 88 },
      { name: 'Figma (UI/UX)', level: 80 },
      { name: 'VS Code', level: 90 },
      { name: 'Cisco Packet Tracer', level: 75 },
    ],
  },
  {
    title: 'Core Subjects',
    icon: BookOpen,
    color: 'text-pink-400',
    borderColor: 'group-hover:border-pink-500/30',
    skills: [
      { name: 'Data Structures & Algorithms', level: 85 },
      { name: 'Object-Oriented Programming (OOP)', level: 88 },
      { name: 'Database Management (DBMS)', level: 84 },
      { name: 'Operating Systems', level: 80 },
      { name: 'Software Engineering', level: 82 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden px-6 md:px-12">
      {/* Background spotlights */}
      <div className="absolute top-[30%] left-[-15%] w-[45vw] h-[45vw] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[45vw] h-[45vw] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-16 text-left">
          <span className="text-xs font-mono tracking-widest text-primary uppercase mb-2">03 // Tech stack</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Skills &amp; <span className="text-gradient">Proficiencies</span>
          </h2>
          <div className="w-20 h-1 bg-accent mt-4 rounded-full" />
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative glass-card p-6 border-white/5 hover:border-white/12 hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full hover-target"
              >
                {/* Glowing light inside card */}
                <div className={`absolute top-0 right-0 w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500/10 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Header of the category */}
                <div className="flex items-center gap-3.5 mb-6 relative z-10">
                  <div className={`p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="text-base font-bold text-white tracking-wide">
                    {category.title}
                  </h3>
                </div>

                {/* Skill List with Progress Bars */}
                <div className="space-y-4 flex-grow relative z-10">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="flex flex-col gap-1.5">
                      <div className="flex justify-between items-center text-xs font-mono">
                        <span className="text-zinc-300 font-medium">{skill.name}</span>
                        <span className="text-zinc-500">{skill.level}%</span>
                      </div>
                      
                      {/* Outer Bar */}
                      <div className="w-full h-1.5 bg-zinc-800/60 rounded-full overflow-hidden">
                        {/* Progress filler */}
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.1, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tiny corner tag */}
                <div className="mt-6 pt-4 border-t border-zinc-900/60 flex items-center justify-between text-[9px] font-mono text-zinc-600 uppercase tracking-widest relative z-10">
                  <span>Category 0{index + 1}</span>
                  <ExternalLink size={10} className="opacity-0 group-hover:opacity-40 transition-opacity" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
