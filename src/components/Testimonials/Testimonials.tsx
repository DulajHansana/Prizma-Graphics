'use client';

import { motion } from 'framer-motion';
import styles from './Testimonials.module.css';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Creative Director, Luminos Agency',
    avatar: 'SC',
    avatarGradient: 'linear-gradient(135deg, #00d4ff, #7c3aed)',
    rating: 5,
    quote:
      "PrintCraft's quality is absolutely unmatched. The foil business cards we ordered for our client blew everyone in the room away. The attention to detail is extraordinary.",
  },
  {
    name: 'Marcus Williams',
    role: 'Founder, Urban Threads Co.',
    avatar: 'MW',
    avatarGradient: 'linear-gradient(135deg, #f472b6, #7c3aed)',
    rating: 5,
    quote:
      "We've tried 6 different printers. PrintCraft is the only one that consistently nails color accuracy for our packaging. The rush service is a lifesaver for product launches.",
  },
  {
    name: 'Elena Rodriguez',
    role: 'Marketing Manager, TechPeak',
    avatar: 'ER',
    avatarGradient: 'linear-gradient(135deg, #fbbf24, #f97316)',
    rating: 5,
    quote:
      "The conference banners arrived same-day and looked incredible. Our booth was the talk of the entire event. PrintCraft is our permanent printing partner now.",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag">✦ Testimonials</div>
          <h2 className={styles.title}>
            Trusted by <span className="gradient-text">15,000+ Brands</span>
          </h2>
        </motion.div>

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className={`${styles.card} glass-card`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              {/* Stars */}
              <div className={styles.stars}>
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} fill="#fbbf24" color="#fbbf24" />
                ))}
              </div>

              <p className={styles.quote}>"{t.quote}"</p>

              {/* Author */}
              <div className={styles.author}>
                <div
                  className={styles.avatar}
                  style={{ background: t.avatarGradient }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.role}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brand logos strip */}
        <div className={styles.brands}>
          <p className={styles.brandsLabel}>Trusted by brands worldwide</p>
          <div className={styles.logoStrip}>
            {['NEXUS', 'AETHER', 'LUMINOS', 'VORTEX', 'ZENITH', 'PRISM', 'APEX'].map((b) => (
              <span key={b} className={styles.brandName}>{b}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
