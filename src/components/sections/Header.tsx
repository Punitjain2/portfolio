'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'py-4 bg-background/80 backdrop-blur-md border-b border-foreground/5 shadow-lg shadow-black/5'
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.8 }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => handleNavClick(e, '#')}
            className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2 group font-mono hover-target"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            PUNIT<span className="text-zinc-500">JAIN</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm text-zinc-400 hover:text-foreground transition-colors duration-200 relative group font-medium hover-target"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            
            {/* Call to Action Button */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-primary to-accent text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 hover:shadow-lg hover:shadow-primary/20 hover:scale-105 active:scale-95 transition-all duration-200 hover-target"
            >
              Contact
              <ArrowUpRight size={14} />
            </a>
          </nav>

          {/* Mobile Nav Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-zinc-400 hover:text-foreground hover:bg-foreground/5 transition-colors hover-target"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 w-full h-screen bg-background z-40 flex flex-col pt-24 px-8 justify-between"
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-3xl font-semibold text-zinc-400 hover:text-foreground border-b border-foreground/5 pb-2 flex justify-between items-center"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 + 0.2 }}
                >
                  {item.label}
                  <ArrowUpRight size={20} className="text-zinc-500" />
                </motion.a>
              ))}
            </div>

            {/* Mobile Footer Contact Details */}
            <div className="pb-12 flex flex-col gap-6">
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-foreground/5 border border-foreground/10 text-zinc-400 hover:text-foreground transition-colors"
                >
                  <GithubIcon size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/punit-jain-2426032b0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-foreground/5 border border-foreground/10 text-zinc-400 hover:text-foreground transition-colors"
                >
                  <LinkedinIcon size={20} />
                </a>
                <a
                  href="mailto:punit.jain@avantika.edu.in"
                  className="p-3 rounded-full bg-foreground/5 border border-foreground/10 text-zinc-400 hover:text-foreground transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
              <div className="text-sm text-zinc-500 font-mono">
                punit.jain@avantika.edu.in
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
