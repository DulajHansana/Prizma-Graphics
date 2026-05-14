'use client';

import { motion } from 'framer-motion';
import styles from './Testimonials.module.css';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Innovative Pesticides Marketing (PVT) Ltd.',
    role: 'Flex Banner Printing Client',
    avatar: 'IP',
    avatarGradient: 'linear-gradient(135deg, #00d4ff, #7c3aed)',
    rating: 5,
    quote:
      'We approached Prizma Graphics for large-scale flex banners for our seasonal campaigns and the results were outstanding. The colors were vivid, the print was sharp even at large formats, and the delivery was on time. Their team was very professional and guided us throughout the process. We are extremely satisfied with the quality and will definitely be coming back for future printing needs.',
  },
  {
    name: 'Oshanda Book Shop',
    role: 'Custom Sticker Printing Client',
    avatar: 'OB',
    avatarGradient: 'linear-gradient(135deg, #f472b6, #fbbf24)',
    rating: 5,
    quote:
      'Prizma Graphics delivered premium quality stickers for our book shop that exceeded all our expectations. The finish was smooth, the colors were perfectly matched, and the cutting was precise. Our customers absolutely love the branded stickers we now include with every purchase. The team at Prizma was friendly, responsive, and made the whole experience smooth and enjoyable. Highly recommended!',
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
            Trusted by <span className="gradient-text">2+ Brands</span>
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
      </div>
    </section>
  );
}
