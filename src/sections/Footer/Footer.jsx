import React from 'react';
import styles from './footer.module.css';
import logo from '../../assets/images/logo.png'
import phone from '../../assets/images/icons/phone.png'
import envelop from '../../assets/images/icons/envelop.png'
import location from '../../assets/images/icons/location.png'
import facebook from '../../assets/images/icons/facebook.png'
import twitter from '../../assets/images/icons/twitter.png'
import linkedin from '../../assets/images/icons/linkedin.png'

const Footer = () => {
  return (
    <div className={`${styles.footerContainer} card-main-layout`}>
      <div className={styles.topSection}>
        <div className={styles.topSectionInfo}>
          <div className={styles.footerHeader}>
            <div className={styles.footerHeaderLogo}>
              <img src={logo} />
            </div>
            <h3 className={styles.title}>Little Learners</h3>
          </div>

          <p className={`${styles.description} fs-7`}>
            We believe in the power of play to foster creativity, problem-solving skills, and imagination.
          </p>

          <div className={styles.contactUsContainer}>
            <div className={styles.contactUsContainerItem}>
              <div className={styles.contactUsIcon}>
                <img src={envelop} />
              </div>
              <p className={`${styles.email} fs-7`}>hello@littlelearners.com</p>
            </div>
            <div className={styles.contactUsContainerItem}>
              <div className={styles.contactUsIcon}>
                <img src={phone} />
              </div>
              <p className={`${styles.phone} fs-7`}>+91 91813 23 2309</p>
            </div>
            <div className={styles.contactUsContainerItem}>
              <div className={styles.contactUsIcon}>
                <img src={location} />
              </div>
              <p className={`${styles.address} fs-7`}>Somewhere in the World</p>
            </div>
          </div>
        </div>

        <div className={styles.links}>
          <div className={styles.linkSection}>
            <p className="fw-bold fs-7">Home</p>
            <ul className={`${styles.linkList} fs-7`}>
              <li>Features</li>
              <li>Our Testimonials</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div className={styles.linkSection}>
            <p className={`${styles.linkHeading} fs-7`}>About Us</p>
            <ul className={`${styles.linkList} fs-7`}>
              <li>Our Mission</li>
              <li>Our Vision</li>
              <li>Awards and Recognitions</li>
              <li>History</li>
              <li>Teachers</li>
            </ul>
          </div>

          <div className={styles.linkSection}>
            <p className={`${styles.linkHeading} fs-7`}>Academics</p>
            <ul className={`${styles.linkList} fs-7`}>
              <li>Special Features</li>
              <li>Gallery</li>
            </ul>
          </div>

          <div className={styles.linkSection}>
            <p className={`${styles.linkHeading} fs-7`}>Contact Us</p>
            <ul className={`${styles.linkList} fs-7`}>
              <li>Information</li>
              <li>Map & Direction</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <div className={`${styles.legalLinks} fs-8`}>
          <span>Terms of Service</span>
          <span>Privacy Policy</span>
          <span>Cookie Policy</span>
        </div>
        <div className={styles.socialContainer}>
          <div className={styles.socialIcon}>
            <img src={facebook}/>
          </div>
          <div className={styles.socialIcon}>
            <img src={twitter}/>
          </div>
          <div className={styles.socialIcon}>
            <img src={linkedin}/>
          </div>
        </div>
      </div>

      <div className={`${styles.copyright} fs-8`}>
        Copyright © [2023] Little Learners Academy. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;