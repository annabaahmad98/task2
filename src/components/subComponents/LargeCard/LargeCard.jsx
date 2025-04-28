import React from 'react'
import styles from './LargeCard.module.css'

export default function LargeCard({ icon, title, description }) {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardIcon}>
                <img src={icon} />
            </div>
            <span className={styles.cardTitle}>{title}</span>
            <p  className={styles.cardDescription}>{description}</p>
        </div>
    )
}
