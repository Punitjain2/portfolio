import dynamic from 'next/dynamic';
import Hero from '@/components/sections/Hero';

// Enable instant shell pre-rendering in Next.js 16/15
export const unstable_instant = { prefetch: 'static' };

// Dynamically import all below-the-fold components to reduce initial JavaScript payload size
const About = dynamic(() => import('@/components/sections/About'));
const Education = dynamic(() => import('@/components/sections/Education'));
const Skills = dynamic(() => import('@/components/sections/Skills'));
const Projects = dynamic(() => import('@/components/sections/Projects'));
const Experience = dynamic(() => import('@/components/sections/Experience'));
const Certifications = dynamic(() => import('@/components/sections/Certifications'));
const Achievements = dynamic(() => import('@/components/sections/Achievements'));
const TechShowcase = dynamic(() => import('@/components/sections/TechShowcase'));
const Contact = dynamic(() => import('@/components/sections/Contact'));
const Footer = dynamic(() => import('@/components/sections/Footer'));

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      {/* Hero Intro view */}
      <Hero />

      {/* About Biography section */}
      <About />

      {/* Education timeline node section */}
      <Education />

      {/* Skills progress and categorizations */}
      <Skills />

      {/* Projects grid and interactive details draw modal */}
      <Projects />

      {/* Experience history timeline */}
      <Experience />

      {/* Certifications and credentials list */}
      <Certifications />

      {/* Achievements metrics & radial target goals */}
      <Achievements />

      {/* Toolbox scrolling marquees */}
      <TechShowcase />

      {/* Validated email forms */}
      <Contact />

      {/* Footer copyright and scrolling buttons */}
      <Footer />
    </main>
  );
}
