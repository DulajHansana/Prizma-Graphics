import Image from 'next/image';
import styles from './Footer.module.css';
// Social icons handled via text characters

const footerLinks = {
  Services: ['Business Cards', 'Banners & Signage', 'Custom Packaging', 'Photo Printing', 'Rush Printing'],
  Company: ['About Us', 'Portfolio', 'Blog', 'Careers', 'Press Kit'],
  Support: ['FAQ', 'Shipping Info', 'File Setup Guide', 'Design Templates', 'Contact Us'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Refund Policy'],
};

const socialLabels = ['𝕏', 'IG', 'in', 'f'];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topBorder} />
      <div className={styles.container}>
        {/* Top section */}
        <div className={styles.top}>
          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              <Image
                src="/logo.webp"
                alt="PrintCraft Logo"
                width={140}
                height={40}
                className={styles.logoImg}
              />
            </div>
            <p className={styles.tagline}>
              Premium digital printing for brands that refuse to blend in.
            </p>
            <div className={styles.socials}>
              {socialLabels.map((label, i) => (
                <a key={i} href="#" className={styles.socialLink}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className={styles.linkGroup}>
              <h4 className={styles.groupTitle}>{category}</h4>
              <ul className={styles.links}>
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className={styles.link}>{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © 2024 PrintCraft Studio. All rights reserved. Crafted with ❤️ for creators.
          </p>
          <div className={styles.badges}>
            <span className={styles.badge}>🔒 SSL Secured</span>
            <span className={styles.badge}>⚡ Fast Shipping</span>
            <span className={styles.badge}>✓ 100% Satisfaction</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
