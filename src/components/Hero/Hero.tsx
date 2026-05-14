'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import { ArrowRight, Play, Star } from 'lucide-react';
import ThreeCanvas from '@/components/ThreeCanvas/ThreeCanvas';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 2;
      const y = (clientY / innerHeight - 0.5) * 2;
      containerRef.current.style.setProperty('--mouse-x', x.toString());
      containerRef.current.style.setProperty('--mouse-y', y.toString());
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={containerRef} className={`${styles.hero} grid-bg`}>
      {/* 3D Canvas Background */}
      <div className={styles.canvasWrapper}>
        <ThreeCanvas />
      </div>

      {/* Gradient Orbs */}
      <div className={styles.orbCyan} />
      <div className={styles.orbPurple} />
      <div className={styles.orbPink} />

      {/* Floating Particles */}
      <div className={styles.particles}>
        {[
          { l: 10, t: 15, d: 0.5, dur: 4.2, w: 3, h: 3 },
          { l: 25, t: 40, d: 1.2, dur: 5.1, w: 2, h: 2 },
          { l: 45, t: 20, d: 0.8, dur: 3.8, w: 4, h: 4 },
          { l: 60, t: 70, d: 2.1, dur: 6.0, w: 2, h: 2 },
          { l: 75, t: 10, d: 0.3, dur: 4.5, w: 3, h: 3 },
          { l: 85, t: 55, d: 1.5, dur: 5.3, w: 2, h: 2 },
          { l: 5, t: 80, d: 0.9, dur: 4.8, w: 3, h: 3 },
          { l: 35, t: 60, d: 1.8, dur: 3.5, w: 4, h: 4 },
          { l: 55, t: 85, d: 0.4, dur: 5.8, w: 2, h: 2 },
          { l: 90, t: 30, d: 2.3, dur: 6.2, w: 3, h: 3 },
          { l: 15, t: 50, d: 1.0, dur: 4.0, w: 2, h: 2 },
          { l: 70, t: 90, d: 0.6, dur: 5.5, w: 3, h: 3 },
          { l: 40, t: 5, d: 1.4, dur: 3.9, w: 4, h: 4 },
          { l: 80, t: 75, d: 2.0, dur: 6.4, w: 2, h: 2 },
          { l: 20, t: 95, d: 0.7, dur: 4.3, w: 3, h: 3 },
          { l: 50, t: 45, d: 1.6, dur: 5.7, w: 2, h: 2 },
          { l: 65, t: 25, d: 0.2, dur: 4.9, w: 4, h: 4 },
          { l: 30, t: 75, d: 1.9, dur: 3.6, w: 3, h: 3 },
          { l: 95, t: 60, d: 2.5, dur: 5.0, w: 2, h: 2 },
          { l: 8, t: 35, d: 0.1, dur: 4.6, w: 3, h: 3 },
        ].map((p, i) => (
          <div
            key={i}
            className={styles.particle}
            style={{
              left: `${p.l}%`,
              top: `${p.t}%`,
              animationDelay: `${p.d}s`,
              animationDuration: `${p.dur}s`,
              width: `${p.w}px`,
              height: `${p.h}px`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="section-tag">
            <Star size={12} fill="currentColor" />
            Premium Digital Printing
          </div>
        </motion.div>

        <motion.h1
          className={styles.heading}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
        >
          Print Your Vision
          <br />
          <span className="gradient-text">Into Reality</span>
        </motion.h1>

        <motion.p
          className={styles.subheading}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        >
          From concept to creation we deliver pixel perfect prints with
          cutting edge technology and premium materials. Your brand deserves
          nothing less than extraordinary.
        </motion.p>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
        >
          <a href="#contact" className="btn-primary">
            Get a Quote <ArrowRight size={18} />
          </a>
          <a href="#portfolio" className="btn-secondary">
            <Play size={16} fill="currentColor" />
            View Portfolio
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          className={styles.stats}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {[
            { value: '15K+', label: 'Happy Clients' },
            { value: '99.9%', label: 'Satisfaction Rate' },
            { value: '48hr', label: 'Avg. Turnaround' },
            { value: '50+', label: 'Print Products' },
          ].map((stat, i) => (
            <div key={i} className={styles.stat}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <div className={styles.scrollDot} />
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  );
}
