'use client';

import { motion } from 'framer-motion';
import { Award, ShieldCheck, CheckCircle2, ShieldAlert } from 'lucide-react';

const certifications = [
  {
    title: 'Data Analytics Essentials',
    issuer: 'Cisco Networking Academy',
    date: '2024',
    logo: ShieldCheck,
    color: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    verifyLink: '#',
  },
  {
    title: 'Introduction to Modern AI',
    issuer: 'Cisco Networking Academy',
    date: '2024',
    logo: ShieldCheck,
    color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    verifyLink: '#',
  },
  {
    title: 'JavaScript Essentials 1',
    issuer: 'Cisco Networking Academy',
    date: '2023',
    logo: ShieldCheck,
    color: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20',
    verifyLink: '#',
  },
  {
    title: 'C# Data Structures and Algorithms',
    issuer: 'Infosys Springboard',
    date: '2024',
    logo: Award,
    color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
    verifyLink: '#',
  },
  {
    title: 'Math & Set Operations',
    issuer: 'Infosys Springboard',
    date: '2023',
    logo: Award,
    color: 'text-pink-400 bg-pink-500/10 border-pink-500/20',
    verifyLink: '#',
  },
  {
    title: 'MongoDB Python Developer Path',
    issuer: 'MongoDB University',
    date: '2024',
    logo: CheckCircle2,
    color: 'text-green-400 bg-green-500/10 border-green-500/20',
    verifyLink: '#',
  },
  {
    title: 'Digital Electronics',
    issuer: 'Infosys Springboard',
    date: '2023',
    logo: Award,
    color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    verifyLink: '#',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden px-6 md:px-12 bg-zinc-950/20">
      {/* Background glow spot */}
      <div className="absolute top-[20%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-16 text-left">
          <span className="text-xs font-mono tracking-widest text-primary uppercase mb-2">06 // Credentials</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Licenses &amp; <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-accent mt-4 rounded-full" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const LogoIcon = cert.logo;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="glass-card p-6 border-white/5 hover:border-white/12 flex items-start gap-4 relative overflow-hidden group hover-target"
              >
                {/* Shiny line overlay reflection */}
                <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-25deg] group-hover:left-[150%] transition-all duration-1000 ease-out pointer-events-none" />

                {/* Left Side Logo */}
                <div className={`p-3 rounded-xl border shrink-0 ${cert.color} group-hover:scale-105 transition-transform duration-300`}>
                  <LogoIcon size={22} />
                </div>

                {/* Right Side Text Content */}
                <div className="text-left flex-grow">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">
                    {cert.issuer}
                  </span>
                  
                  <h3 className="text-sm font-bold text-white group-hover:text-accent-light transition-colors leading-snug">
                    {cert.title}
                  </h3>

                  <div className="flex items-center justify-between mt-4 text-[10px] font-mono">
                    <span className="text-zinc-600">Issued: {cert.date}</span>
                    <span className="text-accent-light font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Verified ✓
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
