import React from 'react';
import styles from './ThinCard.module.css'

export default function ThinCard({ avatar, title, icon, description, style, stars }) {
    return (
        <div className={styles.cardConatiner}>
            <div className={styles.cardAvatar}>
                <img src={avatar} alt="Avatar"/>
            </div>
            <span className={`${styles.cardTitle} fs-6`}>{title}</span>
            
            <div className={styles.starsContainer}>
                {[...Array(stars)].map((_, i) => (
                    <div className={styles.starItem}>
                    <img key={i} src={icon} alt="Star" />
                    </div>
                ))}
            </div>

            <p className={`${styles.cardDescription} fs-7`}>{description}</p>
        </div>
    );
}
