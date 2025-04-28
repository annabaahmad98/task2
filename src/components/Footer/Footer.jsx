import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h1 className={styles.title}>Little Learners</h1>
          <p className={styles.description}>
            We believe in the power of play to foster creativity, problem-solving skills, and imagination.
          </p>
        </div>

        <div className={styles.contact}>
          <p className={styles.email}>hello@littlelearners.com</p>
          <p className={styles.phone}>+91 91813 23 2309</p>
          <p className={styles.address}>Somewhere in the World</p>
        </div>

        <div className={styles.links}>
          <div className={styles.linkSection}>
            <h3 className={styles.linkHeading}>Home</h3>
            <ul className={styles.linkList}>
              <li>Features</li>
              <li>Our Testimonials</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div className={styles.linkSection}>
            <h3 className={styles.linkHeading}>About Us</h3>
            <ul className={styles.linkList}>
              <li>Our Mission</li>
              <li>Our Vision</li>
              <li>Awards and Recognitions</li>
              <li>History</li>
              <li>Teachers</li>
            </ul>
          </div>

          <div className={styles.linkSection}>
            <h3 className={styles.linkHeading}>Academics</h3>
            <ul className={styles.linkList}>
              <li>Special Features</li>
              <li>Gallery</li>
            </ul>
          </div>

          <div className={styles.linkSection}>
            <h3 className={styles.linkHeading}>Contact Us</h3>
            <ul className={styles.linkList}>
              <li>Information</li>
              <li>Map & Direction</li>
            </ul>
          </div>
        </div>

        <div className={styles.legal}>
          <div className={styles.legalLinks}>
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
            <span>Cookie Policy</span>
          </div>
          <div className={styles.copyright}>
            Copyright © [2023] Little Learners Academy. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;