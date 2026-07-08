'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Particle[] = [];
    const particleCount = Math.min(60, Math.floor((width * height) / 20000)); // Adaptive particle count
    const mouse = { x: -1000, y: -1000, radius: 120 };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      baseRadius: number;
      radius: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.baseRadius = Math.random() * 1.5 + 0.5;
        this.radius = this.baseRadius;
        
        // Curated luxury palette colors (indigo, cyan, blue)
        const colors = [
          'rgba(99, 102, 241, 0.25)', // Indigo
          'rgba(20, 184, 166, 0.25)', // Teal/Cyan
          'rgba(59, 130, 246, 0.2)',  // Blue
          'rgba(168, 85, 247, 0.15)', // Purple
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        // Drifting motion
        this.x += this.vx;
        this.y += this.vy;

        // Screen boundary wrap
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;

        // Mouse interaction (push away slightly or grow in size)
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          // Scale particle
          this.radius = this.baseRadius + force * 2;
          
          // Move away slightly
          const angle = Math.atan2(dy, dx);
          this.x -= Math.cos(angle) * force * 0.8;
          this.y -= Math.sin(angle) * force * 0.8;
        } else {
          // Shrink back to base radius
          if (this.radius > this.baseRadius) {
            this.radius -= 0.05;
          }
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw particle connections first
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            const alpha = (100 - dist) / 100 * 0.08;
            ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Event listeners
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-10 bg-background overflow-hidden pointer-events-none">
      {/* Interactive canvas particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />

      {/* Luxury blurred ambient glowing orbs */}
      <div
        className="absolute top-[10%] left-[5%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-tr from-primary/10 to-indigo-500/5 blur-[120px]"
      />
      <div
        className="absolute bottom-[10%] right-[5%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-accent/8 to-cyan-500/3 blur-[140px]"
      />
      <div
        className="absolute top-[40%] right-[30%] w-[35vw] h-[35vw] rounded-full bg-gradient-to-r from-purple-500/5 to-pink-500/5 blur-[110px]"
      />

      {/* Fine grid pattern for digital texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
    </div>
  );
}
