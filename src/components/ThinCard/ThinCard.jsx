import React from 'react';
import styles from './ThinCard.module.css'

export default function ThinCard({ avatar, title, icon, description, stars }) {
    return (
        <div className={`${styles.cardConatiner} card-main-layout`}>
            <div className={styles.cardAvatar}>
                <img src={avatar} alt="Avatar"/>
            </div>
            <span className="fw-bold fs-6">{title}</span>
            
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
