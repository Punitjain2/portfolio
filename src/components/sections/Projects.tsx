'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Filter, X, Smartphone, ShieldCheck, Database, ShoppingBag, BarChart3, ListTodo } from 'lucide-react';
import { GithubIcon, FigmaIcon } from '@/components/ui/Icons';

// Color schemes and details for all 7 projects
const projectsData = [
  {
    id: 1,
    title: 'Hospital Appointment Booking App',
    category: 'mobile',
    tech: ['Kotlin', 'Android Studio', 'Firebase', 'Material Design'],
    icon: Smartphone,
    color: 'from-blue-600/20 to-indigo-500/20 border-blue-500/20',
    accentColor: '#3b82f6',
    features: [
      'Doctor appointment scheduling and calendar management',
      'Patient profile records & history tracking',
      'Secure email & Google Authentication',
      'Real-time database updates for instant doctor availabilities',
      'Modern, responsive UI matching latest Android material guidelines',
    ],
    github: 'https://github.com',
    demo: '#',
    description: 'A comprehensive, native Android application that streamlines medical scheduling. Patients can view specialist doctors, book real-time appointments, and manage check-up history with seamless database sync.',
  },
  {
    id: 2,
    title: 'Smart Bike Tracker & Anti-Theft System',
    category: 'iot',
    tech: ['ESP32-CAM', 'GPS Module', 'GSM Sim800L', 'LoRa Mesh', 'IoT'],
    icon: ShieldCheck,
    color: 'from-emerald-600/20 to-teal-500/20 border-emerald-500/20',
    accentColor: '#10b981',
    features: [
      'Live GPS location coordinates tracking',
      'ESP32-CAM trigger for active face detection when lock is tampered',
      'Automatic instant GSM SMS theft alerts to owner phone',
      'Remote monitoring node connectivity over LoRa long range frequencies',
    ],
    github: 'https://github.com',
    demo: '#',
    description: 'An hardware-integrated IoT security system for bicycles and motorcycles. Leverages sensor networks to detect unauthorized handling, snap photos of intruders, and dispatch real-time locations.',
  },
  {
    id: 3,
    title: 'Employee Management System',
    category: 'desktop',
    tech: ['C++', 'MySQL', 'Database Normalization', 'CLI Design'],
    icon: Database,
    color: 'from-amber-600/20 to-orange-500/20 border-amber-500/20',
    accentColor: '#f59e0b',
    features: [
      'Create, view, update and delete (CRUD) staff records',
      'Advanced multi-parameter employee record search',
      'MySQL database connector integration in C++',
      'Transaction rollbacks and safe command interfaces',
    ],
    github: 'https://github.com',
    demo: '#',
    description: 'A high-performance command line dashboard designed to handle enterprise staff directories. Built with raw C++ bindings communicating directly with normalized MySQL relational models.',
  },
  {
    id: 4,
    title: 'Virtual Try-On Fashion Website',
    category: 'web',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'AR/VR WebGL API'],
    icon: ShoppingBag,
    color: 'from-pink-600/20 to-purple-500/20 border-pink-500/20',
    accentColor: '#ec4899',
    features: [
      'WebGL virtual avatar simulation',
      'Layered apparel positioning mapping client dimensions',
      'Secure login state management and wishlist saves',
      'Algorithmic personalized outfit & sizing recommendations',
    ],
    github: 'https://github.com',
    demo: '#',
    description: 'A luxury e-commerce web platform integrating augmented concepts. Allows users to construct virtual fashion avatars and try on listed clothing items dynamically inside their web browsers.',
  },
  {
    id: 5,
    title: 'Data Analytics Dashboard',
    category: 'analytics',
    tech: ['Power BI', 'Microsoft Excel', 'Data Modeling', 'KPI Metrics'],
    icon: BarChart3,
    color: 'from-cyan-600/20 to-blue-500/20 border-cyan-500/20',
    accentColor: '#06b6d4',
    features: [
      'Fully interactive dashboard reports with dynamic slicers',
      'Key Performance Indicator (KPI) tracking metrics',
      'Data cleaning, transformation & modeling pipelines',
      'Graphical reports, trend projections, and financial insights',
    ],
    github: 'https://github.com',
    demo: '#',
    description: 'A corporate intelligence report mapping revenue statistics, staff productivity metrics, and product demands. Raw datasets are cleaned and transformed to yield actionable business intelligence.',
  },
  {
    id: 6,
    title: 'Shoes Inventory Management System',
    category: 'database',
    tech: ['MySQL', 'SQL Schema', 'Indexing & Triggers', 'Relation Keys'],
    icon: Database,
    color: 'from-indigo-600/20 to-purple-500/20 border-indigo-500/20',
    accentColor: '#6366f1',
    features: [
      'Real-time automated stock count reduction triggers',
      'Detailed ledger tracking supplier and sales batches',
      'Complex query optimization using database indexing and views',
      'Visual sales reports grouping item demands',
    ],
    github: 'https://github.com',
    demo: '#',
    description: 'A robust relational database architecture designed to monitor e-commerce footwear inventories. Handles automatic reorder alerts, supplier listings, and sales transaction logs securely.',
  },
  {
    id: 7,
    title: 'Attendance Marking App Wireframes',
    category: 'design',
    tech: ['Figma', 'UI/UX Design', 'Wireframing', 'Interactive Prototypes'],
    icon: FigmaIcon,
    color: 'from-rose-600/20 to-pink-500/20 border-rose-500/20',
    accentColor: '#f43f5e',
    features: [
      'Comprehensive student/teacher journey flow maps',
      'High-fidelity interactively linked prototypes',
      'Clean accessibility design with WCAG compliance',
      'Dark mode layouts and mobile dashboard wireframes',
    ],
    github: 'https://github.com',
    demo: '#',
    description: 'A series of high-fidelity user interface wireframes and click-through interactive prototypes mapping an institutional mobile application to streamline attendance tracking.',
  },
];

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'mobile_iot', label: 'Mobile & IoT', items: ['mobile', 'iot'] },
  { id: 'web_desktop', label: 'Web & Desktop', items: ['web', 'desktop'] },
  { id: 'data_sql', label: 'Data & SQL', items: ['database', 'analytics'] },
  { id: 'design', label: 'Design UI/UX', items: ['design'] },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);

  const filteredProjects = projectsData.filter((project) => {
    if (activeTab === 'all') return true;
    const catConfig = categories.find((c) => c.id === activeTab);
    return catConfig?.items?.includes(project.category);
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden px-6 md:px-12 bg-zinc-950/20">
      {/* Background glow orb */}
      <div className="absolute top-[40%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[35vw] h-[35vw] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col items-start text-left">
            <span className="text-xs font-mono tracking-widest text-primary uppercase mb-2">04 // Showcase</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-accent mt-4 rounded-full" />
          </div>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-zinc-900/40 p-1.5 rounded-2xl border border-white/5 backdrop-blur-sm self-start">
            {categories.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-300 flex items-center gap-1.5 hover-target ${activeTab === tab.id
                    ? 'bg-gradient-to-r from-primary to-accent text-white shadow-md'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/40'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const IconComp = project.icon;
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className={`glass-card border border-white/5 overflow-hidden flex flex-col h-[480px] hover:scale-[1.02] duration-300 relative group`}
                >
                  {/* Decorative Background Gradient Block */}
                  <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center p-6 border-b border-white/5 relative overflow-hidden`}>
                    {/* Matrix overlay */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,transparent_10%,#030712_100%)] opacity-30 z-0" />

                    {/* Floating elements inside project cards representing structure */}
                    <div className="absolute inset-2 border border-dashed border-white/5 rounded-2xl pointer-events-none z-10" />

                    {/* Styled Floating Large Icon */}
                    <motion.div
                      className="p-5 rounded-2xl bg-zinc-950/80 border border-white/10 relative z-20 shadow-xl"
                      style={{ boxShadow: `0 10px 30px -5px ${project.accentColor}25` }}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <IconComp size={48} style={{ color: project.accentColor }} />
                    </motion.div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      {/* Tech badges */}
                      <div className="flex flex-wrap gap-1.5 mb-3.5">
                        {project.tech.slice(0, 3).map((badge) => (
                          <span
                            key={badge}
                            className="text-[9px] font-mono font-medium tracking-wide bg-zinc-900 border border-zinc-800 text-zinc-400 px-2 py-0.5 rounded-md"
                          >
                            {badge}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="text-[9px] font-mono text-zinc-500 px-2 py-0.5">
                            +{project.tech.length - 3} more
                          </span>
                        )}
                      </div>

                      {/* Project Title */}
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent-light transition-colors leading-tight">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-zinc-400 line-clamp-3 leading-relaxed font-sans">
                        {project.description}
                      </p>
                    </div>

                    {/* Action Panel */}
                    <div className="mt-6 pt-4 border-t border-zinc-900 flex justify-between items-center">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-xs font-semibold text-accent-light hover:text-white transition-colors flex items-center gap-1 hover-target"
                      >
                        Read Details
                        <span>&rarr;</span>
                      </button>

                      <div className="flex gap-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all hover-target"
                          aria-label="GitHub Repository"
                        >
                          <GithubIcon size={15} />
                        </a>
                        <a
                          href={project.demo}
                          className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all hover-target"
                          aria-label="Live Demo Link"
                        >
                          <ExternalLink size={15} />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="w-full max-w-2xl bg-zinc-950 border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative"
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-5 right-5 z-20 p-2 rounded-full bg-zinc-900/80 border border-white/5 text-zinc-400 hover:text-white hover:bg-zinc-800 hover-target"
                  aria-label="Close details modal"
                >
                  <X size={18} />
                </button>

                {/* Banner Gradient */}
                <div className={`h-40 bg-gradient-to-r ${selectedProject.color} relative p-6 md:p-8 flex items-end border-b border-white/5`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent" />
                  <div className="relative z-10 flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-zinc-950/80 border border-white/10">
                      <selectedProject.icon size={28} style={{ color: selectedProject.accentColor }} />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-accent uppercase font-semibold">
                        Project Details
                      </span>
                      <h3 className="text-xl md:text-2xl font-extrabold text-white leading-tight mt-1">
                        {selectedProject.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Modal Info Body */}
                <div className="p-6 md:p-8 max-h-[60vh] overflow-y-auto space-y-6">
                  {/* Detailed Description */}
                  <div>
                    <h4 className="text-xs font-mono uppercase text-zinc-500 tracking-wider mb-2">Overview</h4>
                    <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Core Features */}
                  <div>
                    <h4 className="text-xs font-mono uppercase text-zinc-500 tracking-wider mb-3">Key Features</h4>
                    <ul className="space-y-2.5">
                      {selectedProject.features.map((feature, idx) => (
                        <li key={idx} className="flex gap-2.5 text-xs text-zinc-400 font-sans leading-relaxed">
                          <span className="text-accent mt-0.5">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technical Stack */}
                  <div>
                    <h4 className="text-xs font-mono uppercase text-zinc-500 tracking-wider mb-2">Tech Stack Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((badge) => (
                        <span
                          key={badge}
                          className="text-xs font-mono bg-zinc-900/60 border border-zinc-800 text-zinc-300 px-3 py-1 rounded-lg"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="p-6 md:px-8 border-t border-zinc-900 bg-zinc-900/20 flex justify-end gap-3.5">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white font-medium text-xs flex items-center gap-2 hover-target"
                  >
                    <GithubIcon size={14} />
                    View Code
                  </a>
                  <a
                    href={selectedProject.demo}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/20 text-white font-medium text-xs flex items-center gap-2 hover-target"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
