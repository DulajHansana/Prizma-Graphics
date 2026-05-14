'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './About.module.css';
import { Award, Users, Target, Sparkles } from 'lucide-react';

const founders = [
  {
    name: 'Mr. Supun Lakruwan',
    role: 'Founder & CEO',
    image: '/supun.webp',
    bio: 'Supun is the visionary behind Prizma Graphics (PVT) Ltd. With a deep passion for design and print technology, he founded the company in 2026 with the mission to make premium quality digital printing accessible to every brand from startups to enterprises.',
    gradient: 'linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)',
  },
  {
    name: 'Mr. Dulaj Hansana',
    role: 'Co-Founder & COO',
    image: '/dulaj.webp',
    bio: 'Dulaj brings operational excellence and business strategy to Prizma Graphics (PVT) Ltd. As co-founder, he oversees production, quality control, and client experience ensuring every order leaves the studio exceeding expectations.',
    gradient: 'linear-gradient(135deg, #7c3aed 0%, #f472b6 100%)',
  },
];

const values = [
  { icon: Award, title: 'Premium Quality', desc: 'We never compromise on print quality. Every product meets the highest industry standards.' },
  { icon: Target, title: 'Pixel-Perfect Accuracy', desc: 'Color accuracy and detail precision are at the heart of everything we produce.' },
  { icon: Users, title: 'Client-First Culture', desc: 'Our clients are our partners. We listen, adapt, and deliver beyond expectations.' },
  { icon: Sparkles, title: 'Innovation-Driven', desc: 'We invest in the latest printing technology to stay ahead of the curve.' },
];

export default function About() {
  return (
    <section id="about" className={styles.section}>
      {/* Background orbs */}
      <div className={styles.orbLeft} />
      <div className={styles.orbRight} />

      <div className={styles.container}>

        {/* ── Header ── */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag">✦ About Us</div>
          <h2 className={styles.title}>
            The Story Behind
            <br />
            <span className="gradient-text">Prizma Graphics (PVT) Ltd.</span>
          </h2>
          <p className={styles.subtitle}>
            Founded in 2026, Prizma Graphics (PVT) Ltd. was born from a single belief that
            every brand deserves print materials that are as extraordinary as their
            vision. We combine cutting-edge technology with an obsessive attention
            to quality to deliver results that speak for themselves.
          </p>
        </motion.div>

        {/* ── Logo Feature ── */}
        <motion.div
          className={styles.logoBlock}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className={styles.logoGlow} />
          <Image
            src="/logo.webp"
            alt="Prizma Graphics (PVT) Ltd. Logo"
            width={260}
            height={80}
            className={styles.companyLogo}
          />
          <p className={styles.logoCaption}>Est. 2026 · Premium Digital Printing</p>
        </motion.div>

        {/* ── Founders ── */}
        <motion.div
          className={styles.foundersHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-tag">✦ Meet the Founders</div>
        </motion.div>

        <div className={styles.founders}>
          {founders.map((founder, i) => (
            <motion.div
              key={i}
              className={`${styles.founderCard} glass-card`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              {/* Photo */}
              <div className={styles.photoWrapper}>
                <div
                  className={styles.photoRing}
                  style={{ background: founder.gradient }}
                />
                <div className={styles.photoInner}>
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    width={200}
                    height={200}
                    className={styles.photo}
                  />
                </div>
              </div>

              {/* Info */}
              <div className={styles.founderInfo}>
                <span
                  className={styles.founderRole}
                  style={{ background: founder.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
                >
                  {founder.role}
                </span>
                <h3 className={styles.founderName}>{founder.name}</h3>
                <p className={styles.founderBio}>{founder.bio}</p>
              </div>

              {/* Decorative glow */}
              <div
                className={styles.cardGlow}
                style={{ background: founder.gradient }}
              />
            </motion.div>
          ))}
        </div>

        {/* ── Core Values ── */}
        <motion.div
          className={styles.valuesHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-tag">✦ Our Values</div>
          <h3 className={styles.valuesTitle}>What Drives Us Every Day</h3>
        </motion.div>

        <div className={styles.values}>
          {values.map((v, i) => (
            <motion.div
              key={i}
              className={`${styles.valueCard} glass-card`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className={styles.valueIcon}>
                <v.icon size={22} />
              </div>
              <h4 className={styles.valueTitle}>{v.title}</h4>
              <p className={styles.valueDesc}>{v.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
