'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Mail, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';

const CURRENT_YEAR = 2026;

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <footer className="bg-zinc-950 border-t border-white/5 py-12 relative overflow-hidden px-6 md:px-12 text-left">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">

        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
            className="text-lg font-bold tracking-tight text-white flex items-center gap-2 font-mono hover-target"
          >
            PUNIT<span className="text-zinc-500">JAIN</span>
          </a>

          <span className="text-xs text-zinc-500 font-mono">
            &copy; {CURRENT_YEAR} Punit Jain. All rights reserved.
          </span>
        </div>

        {/* Center Navigation */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-mono font-medium">
          <a
            href="#about"
            onClick={(e) => handleScrollToSection(e, '#about')}
            className="text-zinc-400 hover:text-white transition-colors hover-target"
          >
            About
          </a>

          <a
            href="#skills"
            onClick={(e) => handleScrollToSection(e, '#skills')}
            className="text-zinc-400 hover:text-white transition-colors hover-target"
          >
            Skills
          </a>

          <a
            href="#projects"
            onClick={(e) => handleScrollToSection(e, '#projects')}
            className="text-zinc-400 hover:text-white transition-colors hover-target"
          >
            Projects
          </a>

          <a
            href="#contact"
            onClick={(e) => handleScrollToSection(e, '#contact')}
            className="text-zinc-400 hover:text-white transition-colors hover-target"
          >
            Contact
          </a>

          <a
            href="/resume.pdf"
            download="Punit_Jain_Resume.pdf"
            className="text-accent-light hover:text-white transition-colors flex items-center gap-1 hover-target"
          >
            Resume
            <Download size={11} />
          </a>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          <div className="flex gap-4">

            <a
              href="https://www.linkedin.com/in/punit-jain-2426032b0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-colors hover-target"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>

            <a
              href="https://github.com/YOUR_GITHUB_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-colors hover-target"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </a>

            <a
              href="mailto:punit.jain@avantika.edu.in"
              className="text-zinc-500 hover:text-white transition-colors hover-target"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>

          </div>
        </div>
      </div>

      {/* Back To Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{
              opacity: 0,
              scale: 0.8,
              y: 50,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              y: 50,
            }}
            transition={{
              duration: 0.3,
            }}
            className="fixed bottom-8 right-8 z-40 p-3.5 rounded-full bg-primary/90 text-white shadow-xl shadow-primary/20 backdrop-blur hover:bg-primary-hover hover:scale-110 active:scale-90 transition-all border border-white/10 hover-target"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}