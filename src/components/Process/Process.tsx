'use client';

import { motion } from 'framer-motion';
import styles from './Process.module.css';
import { Upload, Palette, Printer, Truck } from 'lucide-react';

type CSSWithVars = React.CSSProperties & { [key: `--${string}`]: string };

const steps = [
  {
    icon: Upload,
    step: '01',
    title: 'Upload Your Design',
    description:
      'Upload your artwork or let our designers create something extraordinary from scratch. We support all major file formats.',
    color: '#00d4ff',
  },
  {
    icon: Palette,
    step: '02',
    title: 'Design Review & Proof',
    description:
      'Our expert team reviews your files for print-readiness. You receive a digital proof to approve before we print.',
    color: '#7c3aed',
  },
  {
    icon: Printer,
    step: '03',
    title: 'Precision Printing',
    description:
      'Your approved design goes to press on our state-of-the-art equipment, ensuring pixel-perfect color accuracy.',
    color: '#f472b6',
  },
  {
    icon: Truck,
    step: '04',
    title: 'Fast Delivery',
    description:
      'Your prints are carefully packaged and shipped directly to you. Track your order in real-time every step of the way.',
    color: '#fbbf24',
  },
];

export default function Process() {
  return (
    <section id="process" className={styles.section}>
      {/* Decorative grid */}
      <div className={`${styles.gridBg} grid-bg`} />

      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag">✦ How It Works</div>
          <h2 className={styles.title}>
            From File to Finished
            <br />
            <span className="gradient-text">In 4 Simple Steps</span>
          </h2>
        </motion.div>

        <div className={styles.steps}>
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className={styles.step}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              {/* Connector line */}
              {i < steps.length - 1 && <div className={styles.connector} />}

              {/* Icon bubble */}
              <div
                className={styles.iconBubble}
                style={{ '--step-color': step.color } as CSSWithVars}
              >
                <step.icon size={28} />
                <div className={styles.stepNumber}>{step.step}</div>
              </div>

              {/* Content */}
              <div className={`${styles.card} glass-card`}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
