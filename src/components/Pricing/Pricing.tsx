'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Pricing.module.css';
import { Check, Zap } from 'lucide-react';

type CSSWithVars = React.CSSProperties & { [key: `--${string}`]: string };

const plans = [
  {
    name: 'Starter',
    monthlyPrice: 49,
    yearlyPrice: 39,
    description: 'Perfect for small businesses getting started with professional printing.',
    color: '#00d4ff',
    features: [
      'Up to 500 business cards/mo',
      'Standard paper stocks',
      'CMYK printing',
      'Digital proofs included',
      '5-7 day turnaround',
      'Email support',
    ],
    notIncluded: ['Rush printing', 'Premium finishes', 'Dedicated account manager'],
    cta: 'Get Started',
  },
  {
    name: 'Professional',
    monthlyPrice: 149,
    yearlyPrice: 119,
    description: 'For growing brands that demand premium quality and faster turnarounds.',
    color: '#7c3aed',
    popular: true,
    features: [
      'Unlimited business cards',
      'All paper stocks available',
      'CMYK + spot color',
      'Priority proofing',
      '2-3 day turnaround',
      'Rush printing available',
      'Premium finishes (UV, foil)',
      'Priority support',
    ],
    notIncluded: ['Dedicated account manager'],
    cta: 'Start Free Trial',
  },
  {
    name: 'Enterprise',
    monthlyPrice: 399,
    yearlyPrice: 319,
    description: 'Full-service printing partner for agencies and large-scale brands.',
    color: '#f472b6',
    features: [
      'Everything in Professional',
      'Dedicated account manager',
      'Custom paper & substrates',
      'White-label service',
      'Same-day rush available',
      'Bulk pricing discounts',
      'API access for print orders',
      '24/7 phone support',
      'Net-30 billing',
    ],
    notIncluded: [],
    cta: 'Contact Sales',
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag">✦ Pricing</div>
          <h2 className={styles.title}>
            Transparent Pricing,
            <br />
            <span className="gradient-text">No Hidden Fees</span>
          </h2>
          <p className={styles.subtitle}>
            Choose the plan that fits your volume and needs. All plans include
            free digital proofing and satisfaction guarantee.
          </p>

          {/* Toggle */}
          <div className={styles.toggle}>
            <span className={!yearly ? styles.activeLabel : ''}>Monthly</span>
            <button
              className={`${styles.toggleBtn} ${yearly ? styles.toggleActive : ''}`}
              onClick={() => setYearly(!yearly)}
              aria-label="Toggle billing period"
            >
              <div className={styles.toggleKnob} />
            </button>
            <span className={yearly ? styles.activeLabel : ''}>
              Yearly
              <span className={styles.saveBadge}>Save 20%</span>
            </span>
          </div>
        </motion.div>

        <div className={styles.grid}>
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`${styles.card} glass-card ${plan.popular ? styles.popular : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ '--plan-color': plan.color } as CSSWithVars}
            >
              {plan.popular && (
                <div className={styles.popularBadge}>
                  <Zap size={12} fill="currentColor" /> Most Popular
                </div>
              )}

              <div className={styles.planHeader}>
                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.planDesc}>{plan.description}</p>
              </div>

              <div className={styles.priceRow}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={yearly ? 'yearly' : 'monthly'}
                    className={styles.price}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    style={{ color: plan.color }}
                  >
                    ${yearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </motion.span>
                </AnimatePresence>
                <span className={styles.period}>/month</span>
              </div>

              <ul className={styles.features}>
                {plan.features.map((f) => (
                  <li key={f} className={styles.feature}>
                    <Check size={15} style={{ color: plan.color, flexShrink: 0 }} />
                    {f}
                  </li>
                ))}
              </ul>

              <a href="#contact" className={plan.popular ? 'btn-primary' : 'btn-secondary'}>
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
