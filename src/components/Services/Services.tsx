'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

type CSSWithVars = React.CSSProperties & { [key: `--${string}`]: string };
import styles from './Services.module.css';
import {
  Printer,
  Package,
  Layout,
  CreditCard,
  ImageIcon,
  Zap,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: CreditCard,
    title: 'Business Cards',
    description:
      'Make a lasting impression with premium business cards. Choose from silk laminate, spot UV, foil stamping, and more.',
    color: '#00d4ff',
    tags: ['Spot UV', 'Foil', 'Soft Touch'],
  },
  {
    icon: Layout,
    title: 'Large Format Banners',
    description:
      'Eye-catching banners and signage printed at massive scale without sacrificing an ounce of quality.',
    color: '#7c3aed',
    tags: ['Indoor', 'Outdoor', 'Retractable'],
  },
  {
    icon: Package,
    title: 'Custom Packaging',
    description:
      'Your packaging is your silent salesperson. We craft stunning boxes, bags, and inserts that elevate your brand.',
    color: '#f472b6',
    tags: ['Boxes', 'Bags', 'Labels'],
  },
  {
    icon: Printer,
    title: 'Brochures & Flyers',
    description:
      'High-impact marketing materials printed on premium stocks with vivid CMYK and Pantone color accuracy.',
    color: '#f97316',
    tags: ['CMYK', 'Pantone', 'Gloss/Matte'],
  },
  {
    icon: ImageIcon,
    title: 'Photo Printing',
    description:
      'Gallery-quality photo prints on fine art paper, canvas, or acrylic — perfect for studios and events.',
    color: '#fbbf24',
    tags: ['Canvas', 'Acrylic', 'Fine Art'],
  },
  {
    icon: Zap,
    title: 'Rush Printing',
    description:
      'Tight deadline? Our express service delivers same-day and next-day printing without compromising quality.',
    color: '#00d4ff',
    tags: ['Same Day', 'Next Day', 'Priority'],
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag">✦ Our Services</div>
          <h2 className={styles.title}>
            Everything You Need to
            <br />
            <span className="gradient-text">Print with Confidence</span>
          </h2>
          <p className={styles.subtitle}>
            From business essentials to large-format displays, we bring your
            vision to life with precision, speed, and unmatched quality.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          ref={ref}
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          {services.map((service, i) => (
            <motion.div key={i} variants={cardVariants} className={`${styles.card} glass-card`}>
              {/* Icon */}
              <div
                className={styles.iconWrapper}
                style={{ '--icon-color': service.color } as CSSWithVars}
              >
                <service.icon size={28} />
              </div>

              {/* Content */}
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>

              {/* Tags */}
              <div className={styles.tags}>
                {service.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a href="#contact" className={styles.cardLink}>
                Learn more <ArrowRight size={14} />
              </a>

              {/* Glow accent */}
              <div
                className={styles.cardGlow}
                style={{ '--glow-color': service.color } as CSSWithVars}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
