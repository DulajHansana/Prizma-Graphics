'use client';

import { motion } from 'framer-motion';
import styles from './Portfolio.module.css';
import { ExternalLink } from 'lucide-react';

const portfolioItems = [
  {
    title: 'Luxe Cosmetics Brand Identity',
    category: 'Packaging',
    size: 'large',
    gradient: 'linear-gradient(135deg, #f472b6 0%, #7c3aed 100%)',
    accent: '#f472b6',
  },
  {
    title: 'Tech Summit Conference Materials',
    category: 'Brochures & Signage',
    size: 'small',
    gradient: 'linear-gradient(135deg, #00d4ff 0%, #0369a1 100%)',
    accent: '#00d4ff',
  },
  {
    title: 'Urban Coffee Packaging',
    category: 'Custom Packaging',
    size: 'small',
    gradient: 'linear-gradient(135deg, #fbbf24 0%, #f97316 100%)',
    accent: '#fbbf24',
  },
  {
    title: 'Fashion Week Lookbook',
    category: 'Catalog & Books',
    size: 'small',
    gradient: 'linear-gradient(135deg, #7c3aed 0%, #db2777 100%)',
    accent: '#7c3aed',
  },
  {
    title: 'Startup Business Collateral',
    category: 'Business Cards & Stationery',
    size: 'large',
    gradient: 'linear-gradient(135deg, #00d4ff 0%, #7c3aed 50%, #f472b6 100%)',
    accent: '#00d4ff',
  },
  {
    title: 'Restaurant Menu & Branding',
    category: 'Menu & Signage',
    size: 'small',
    gradient: 'linear-gradient(135deg, #f97316 0%, #dc2626 100%)',
    accent: '#f97316',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag">✦ Portfolio</div>
          <h2 className={styles.title}>
            Work That Speaks
            <br />
            <span className="gradient-text">Louder Than Words</span>
          </h2>
          <p className={styles.subtitle}>
            A curated selection of our finest print projects — each one a
            testament to our craft and attention to detail.
          </p>
        </motion.div>

        {/* Masonry-style grid */}
        <div className={styles.grid}>
          {portfolioItems.map((item, i) => (
            <motion.div
              key={i}
              className={`${styles.card} ${item.size === 'large' ? styles.large : ''}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Visual placeholder */}
              <div
                className={styles.preview}
                style={{ background: item.gradient }}
              >
                {/* Decorative elements inside preview */}
                <div className={styles.previewDeco1} />
                <div className={styles.previewDeco2} />
                <div className={styles.previewDeco3} />
                <div className={styles.previewLabel}>{item.category}</div>

                {/* Hover overlay */}
                <div className={styles.overlay}>
                  <ExternalLink size={32} />
                  <span>View Project</span>
                </div>
              </div>

              {/* Info */}
              <div className={styles.info}>
                <span
                  className={styles.category}
                  style={{ color: item.accent }}
                >
                  {item.category}
                </span>
                <h3 className={styles.itemTitle}>{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.cta}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a href="#contact" className="btn-primary">
            Get a Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
}
