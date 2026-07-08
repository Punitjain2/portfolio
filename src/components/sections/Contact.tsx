'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowRight, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [toast, setToast] = useState<{ show: boolean; message: string; type: 'success' | 'error' }>({
    show: false,
    message: '',
    type: 'success',
  });

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 4000);
  };

  const validate = () => {
    let tempErrors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!form.name.trim()) {
      tempErrors.name = 'Name is required';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      tempErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(form.email)) {
      tempErrors.email = 'Please provide a valid email';
      isValid = false;
    }

    if (!form.message.trim()) {
      tempErrors.message = 'Message is required';
      isValid = false;
    } else if (form.message.trim().length < 10) {
      tempErrors.message = 'Message must be at least 10 characters';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: '' })); // Clear error on change
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      setIsSuccess(true);
      showToast('Message transmitted successfully!', 'success');

      // Save query locally to prove it worked
      try {
        const queries = JSON.parse(localStorage.getItem('punit_contact_queries') || '[]');
        queries.push({ ...form, date: new Date().toISOString() });
        localStorage.setItem('punit_contact_queries', JSON.stringify(queries));
      } catch (err) {
        console.error('Local storage error:', err);
      }

      // Trigger premium confetti burst celebration
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#6366f1', '#14b8a6', '#ffffff'],
      });
    } catch (err: any) {
      console.error('Submission error:', err);
      showToast(err.message || 'Failed to send. Please verify details.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden px-6 md:px-12">
      {/* Background glow spots */}
      <div className="absolute top-[20%] left-[-15%] w-[45vw] h-[45vw] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[45vw] h-[45vw] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-16 text-left">
          <span className="text-xs font-mono tracking-widest text-primary uppercase mb-2">09 // Reach out</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Contact <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-accent mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left space-y-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white tracking-wide">
                Let&#39;s start a conversation.
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-sans max-w-sm">
                Have a project idea, coding questions, or want to hire a talented CS engineer? Fill out the form or write to me directly.
              </p>
            </div>

            {/* Visual Contact cards */}
            <div className="space-y-5">
              <div className="flex items-center gap-4 bg-zinc-900/40 p-4 rounded-2xl border border-white/5">
                <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-accent-light">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Email Me</span>
                  <a href="mailto:punit.jain@avantika.edu.in" className="text-sm font-semibold text-white hover:text-accent-light transition-colors font-mono hover-target">
                    punit.jain@avantika.edu.in
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-zinc-900/40 p-4 rounded-2xl border border-white/5">
                <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-primary">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Phone Call</span>
                  <a href="tel:+917773880738" className="text-sm font-semibold text-white hover:text-primary transition-colors font-mono hover-target">
                    +91 7773880738
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-zinc-900/40 p-4 rounded-2xl border border-white/5">
                <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-indigo-400">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Location</span>
                  <span className="text-sm font-semibold text-white">
                    Ujjain, Madhya Pradesh, India
                  </span>
                </div>
              </div>
            </div>

            {/* Social link buttons list */}
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/punit-jain-2426032b0/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 font-semibold text-xs flex items-center gap-2 transition-all hover-target"
              >
                <LinkedinIcon size={14} className="text-[#0a66c2]" />
                LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 font-semibold text-xs flex items-center gap-2 transition-all hover-target"
              >
                <GithubIcon size={14} />
                GitHub
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 border-white/5 h-full relative flex flex-col justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    className="space-y-6 text-left"
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    noValidate
                  >
                    {/* Name Field */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className={`w-full bg-zinc-900/40 border ${
                          errors.name ? 'border-rose-500/50 focus:border-rose-500' : 'border-white/5 focus:border-primary'
                        } rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:bg-zinc-900 transition-colors font-sans hover-target`}
                      />
                      {errors.name && (
                        <span className="text-[10px] text-rose-500 font-mono mt-0.5">{errors.name}</span>
                      )}
                    </div>

                    {/* Email Field */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleInputChange}
                        placeholder="johndoe@example.com"
                        className={`w-full bg-zinc-900/40 border ${
                          errors.email ? 'border-rose-500/50 focus:border-rose-500' : 'border-white/5 focus:border-primary'
                        } rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:bg-zinc-900 transition-colors font-sans hover-target`}
                      />
                      {errors.email && (
                        <span className="text-[10px] text-rose-500 font-mono mt-0.5">{errors.email}</span>
                      )}
                    </div>

                    {/* Message Field */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleInputChange}
                        rows={5}
                        placeholder="Tell me about your project or opportunity..."
                        className={`w-full bg-zinc-900/40 border ${
                          errors.message ? 'border-rose-500/50 focus:border-rose-500' : 'border-white/5 focus:border-primary'
                        } rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:bg-zinc-900 transition-colors font-sans resize-none hover-target`}
                      />
                      {errors.message && (
                        <span className="text-[10px] text-rose-500 font-mono mt-0.5">{errors.message}</span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/20 text-white font-semibold text-sm flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 disabled:scale-100 hover-target"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Transmitting...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={15} />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  // Gorgeous success screen layout
                  <motion.div
                    key="success-screen"
                    className="flex flex-col items-center text-center p-6 text-left"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="p-4 rounded-full bg-accent/10 border border-accent/20 text-accent-light mb-6 animate-pulse-slow">
                      <CheckCircle size={52} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">
                      Message Transmitted!
                    </h3>
                    
                    <p className="text-sm text-zinc-400 leading-relaxed font-sans max-w-sm mb-8">
                      Thank you for reaching out, <span className="text-white font-semibold">{form.name}</span>. Your details have been stored, and I will contact you shortly.
                    </p>

                    <button
                      onClick={() => {
                        setForm({ name: '', email: '', message: '' });
                        setIsSuccess(false);
                      }}
                      className="px-5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-all hover-target"
                    >
                      Send Another Message
                      <ArrowRight size={14} />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>

      {/* Floating custom toast alert notification */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-[99999] max-w-sm rounded-2xl p-4 shadow-2xl border backdrop-blur-md flex items-center gap-3 bg-zinc-900/95 border-white/10"
          >
            {toast.type === 'success' ? (
              <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                <CheckCircle size={18} />
              </div>
            ) : (
              <div className="p-1.5 rounded-lg bg-rose-500/10 text-rose-400">
                <AlertCircle size={18} />
              </div>
            )}
            <div className="flex-1 text-xs font-semibold text-white tracking-wide font-sans">
              {toast.message}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
