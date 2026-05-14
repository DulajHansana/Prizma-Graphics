import Image from 'next/image';
import styles from './Footer.module.css';
import { FaFacebookF, FaInstagram, FaTiktok, FaLinkedinIn } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';

const footerLinks = {
  Services: ['Business Cards', 'Banners & Signage', 'Custom Packaging', 'Photo Printing', 'Rush Printing'],
  Company: ['About Us', 'Portfolio', 'Blog', 'Careers', 'Press Kit'],
  Support: ['FAQ', 'Shipping Info', 'File Setup Guide', 'Design Templates', 'Contact Us'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Refund Policy'],
};

const socials = [
  { icon: FaFacebookF,  href: 'https://www.facebook.com/prizmagraphic/',                       label: 'Facebook' },
  { icon: FaInstagram,  href: 'https://www.instagram.com/prizmagraphic/',                      label: 'Instagram' },
  { icon: FaTiktok,     href: 'https://www.tiktok.com/@prizmagraphics?_r=1&_t=ZS-96INLBsujI4',  label: 'TikTok' },
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/company/prizma-graphics-pvt-ltd/',     label: 'LinkedIn' },
];

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
                alt="Prizma Graphics Logo"
                width={140}
                height={40}
                className={styles.logoImg}
              />
            </div>
            <p className={styles.tagline}>
              Premium digital printing for brands that refuse to blend in.
            </p>
            <div className={styles.socials}>
              {socials.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} className={styles.socialLink} aria-label={label} target="_blank" rel="noopener noreferrer">
                  <Icon size={16} />
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
            © 2026 Prizma Graphics (PVT) Ltd. All rights reserved. Built with <SiNextdotjs size={14} style={{ display: 'inline', verticalAlign: 'middle', marginBottom: '2px' }} />
          </p>
        </div>
      </div>
    </footer>
  );
}
