'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Download, Eye } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import Image from "next/image";
import { Sun, Moon } from "lucide-react";


const typingTexts = [
  'Full Stack Developer',
  'Android Developer',
  'IoT Developer',
  'AI Learner',
  'Problem Solver',
];

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const [theme, setTheme] = useState("dark");
useEffect(() => {
  const savedTheme = localStorage.getItem("theme") || "dark";

  document.documentElement.classList.remove("dark", "light");
  document.documentElement.classList.add(savedTheme);

  if (savedTheme !== theme) {
    setTimeout(() => setTheme(savedTheme), 0);
  }
}, [theme]);
  
  useEffect(() => {
    const activeWord = typingTexts[textIndex];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(activeWord.substring(0, typedText.length - 1));
      }, 50);
    } else {
      timer = setTimeout(() => {
        setTypedText(activeWord.substring(0, typedText.length + 1));
      }, 100);
    }
if (!isDeleting && typedText === activeWord) {
  timer = setTimeout(() => {
    setIsDeleting(true);
  }, 2000);
} else if (isDeleting && typedText === '') {
  timer = setTimeout(() => {
    setIsDeleting(false);
    setTextIndex((prev) => (prev + 1) % typingTexts.length);
  }, 0);
}

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, textIndex]);

  const toggleTheme = () => {
  const newTheme = theme === "dark" ? "light" : "dark";

  console.log("Current:", theme);
  console.log("New:", newTheme);

  setTheme(newTheme);
  localStorage.setItem("theme", newTheme);

  document.documentElement.className = document.documentElement.className
    .replace("dark", "")
    .replace("light", "");

  document.documentElement.classList.add(newTheme);

  console.log("HTML Classes:", document.documentElement.className);
};

  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden px-6 md:px-12">
      {/* Mouse Follow Spotlight Background - Local Variable Driven via CSS */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle 500px at center, rgba(99, 102, 241, 0.08), transparent 80%)'
        }}
      />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="absolute top-0 right-4 md:right-8 z-[9999]">
  <button
  onClick={toggleTheme}
  className="p-3 rounded-full bg-zinc-900 border border-zinc-700 text-white hover:scale-110 transition-all duration-300"
>
  {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
</button>

</div>
        {/* Left Typography Column */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.0 }}
            className="px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono tracking-widest uppercase mb-6"
          >
            Available for Opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-4 leading-[1.1]"
          >
            Punit Jain
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.2 }}
            className="text-xl md:text-3xl font-bold text-zinc-400 mb-6 flex flex-wrap items-center gap-2"
          >
            <span>Software Engineer</span>
            <span className="text-primary font-light">|</span>
            <span className="text-gradient">AI Enthusiast</span>
          </motion.h2>

          {/* Typing Animation Showcase */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.3 }}
            className="h-10 text-lg md:text-xl font-mono text-accent flex items-center mb-8 bg-zinc-900/30 px-4 py-2 rounded-lg border border-white/5"
          >
            <span className="text-zinc-600 mr-2">$</span>
            <span className="text-zinc-300">specialty: </span>
            <span className="ml-1 text-white font-semibold">{typedText}</span>
            <span className="w-1.5 h-5 bg-accent ml-1 animate-pulse" />
          </motion.div>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.4 }}
            className="flex flex-wrap gap-4 w-full sm:w-auto"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                handleScroll('#projects');
              }}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-primary/20 hover:scale-105 active:scale-95 transition-all duration-200 w-full sm:w-auto justify-center hover-target"
            >
              View Projects
              <Eye size={18} />
            </a>

            <button
              onClick={() => handleScroll('#contact')}
              className="px-6 py-3.5 rounded-xl bg-zinc-900/80 backdrop-blur border border-white/10 text-white font-medium flex items-center gap-2 hover:bg-zinc-800 hover:border-white/20 transition-all duration-200 w-full sm:w-auto justify-center hover-target"
            >
              Contact Me
              <ArrowRight size={18} className="text-accent" />
            </button>

            {/* Resume download using a dynamic blob so it triggers a real browser download */}
            <a
              href="/PUNIT_JAIN_RESUME.pdf"
              download
              className="px-6 py-3.5 rounded-xl border border-dashed border-zinc-700 text-zinc-300 font-medium flex items-center gap-2 hover:text-white hover:border-zinc-500 transition-all duration-200 w-full sm:w-auto justify-center hover-target"
            >
              Download Resume
              <Download size={18} />
            </a>
          </motion.div>

          {/* Social Icons Link List */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.5 }}
            className="flex items-center gap-6 mt-12"
          >
            <a
              href="https://www.linkedin.com/in/punit-jain-2426032b0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-[#0a66c2] transition-colors p-1 hover:scale-110 duration-200 hover-target"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={24} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-colors p-1 hover:scale-110 duration-200 hover-target"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={24} />
            </a>
            <a
              href="mailto:punitj668@gmail.com"
              className="text-zinc-500 hover:text-accent transition-colors p-1 hover:scale-110 duration-200 hover-target"
              aria-label="Send Email"
            >
              <Mail size={24} />
            </a>
          </motion.div>

        </div>

        {/* Right Illustration Column */}
        <div className="lg:col-span-6 flex justify-center items-center w-full relative">
          <motion.div
  initial={{ opacity: 0, x: 40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 2.2 }}
  className="relative flex justify-center items-end w-full"
>

<div className="absolute w-[500px] h-[500px] bg-[#00FF88]/10 blur-[140px] rounded-full" />
  <div className="relative w-[550px] h-[700px] md:w-[800px] md:h-[1000px]">

    <Image
      src="/punit-cutout.png"
      alt="Punit Jain"
      fill
      priority
      className="object-contain relative z-10 drop-shadow-[0_0_40px_rgba(99,102,241,0.4)]"
      sizes="(max-width:768px) 550px, 800px"
    />

  </div>

</motion.div>
        </div>

      </div>
    </section>
  );
}
