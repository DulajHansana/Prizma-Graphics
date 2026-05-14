'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.bg} />

      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag">✦ Contact Us</div>
          <h2 className={styles.title}>
            Let's Create Something
            <br />
            <span className="gradient-text">Amazing Together</span>
          </h2>
        </motion.div>

        <div className={styles.grid}>
          {/* Info column */}
          <motion.div
            className={styles.info}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className={styles.infoTitle}>Get Your Free Quote</h3>
            <p className={styles.infoText}>
              Tell us about your project and we'll get back to you with a custom
              quote within 2 hours during business hours.
            </p>

            <div className={styles.contacts}>
              {[
                { icon: Mail, label: 'Email', value: 'hello@printcraft.studio' },
                { icon: Phone, label: 'Phone', value: '+1 (800) 555-PRINT' },
                { icon: MapPin, label: 'Studio', value: '123 Print Lane, Design City, CA 90210' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className={styles.contactLabel}>{label}</div>
                    <div className={styles.contactValue}>{value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative 3D cube */}
            <div className={styles.decorCube}>
              <div className={styles.cubeInner}>
                <div className={`${styles.cubeFace} ${styles.cubeFront}`} />
                <div className={`${styles.cubeFace} ${styles.cubeBack}`} />
                <div className={`${styles.cubeFace} ${styles.cubeRight}`} />
                <div className={`${styles.cubeFace} ${styles.cubeLeft}`} />
                <div className={`${styles.cubeFace} ${styles.cubeTop}`} />
                <div className={`${styles.cubeFace} ${styles.cubeBottom}`} />
              </div>
            </div>
          </motion.div>

          {/* Form column */}
          <motion.div
            className={`${styles.formCard} glass-card`}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {submitted ? (
              <div className={styles.success}>
                <CheckCircle size={56} color="#00d4ff" />
                <h3>Quote Request Sent!</h3>
                <p>
                  Thank you, {form.name || 'friend'}! We'll reach out to{' '}
                  {form.email || 'you'} within 2 hours.
                </p>
                <button className="btn-primary" onClick={() => setSubmitted(false)}>
                  Send Another Request
                </button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="name">Full Name</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="John Smith"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="service">Service Needed</label>
                  <select
                    id="service"
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                  >
                    <option value="">Select a service...</option>
                    <option>Business Cards</option>
                    <option>Large Format Banners</option>
                    <option>Custom Packaging</option>
                    <option>Brochures & Flyers</option>
                    <option>Photo Printing</option>
                    <option>Rush Printing</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className={styles.field}>
                  <label htmlFor="message">Project Details</label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your project — quantity, size, timeline, special finishes..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Send Quote Request <Send size={16} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
