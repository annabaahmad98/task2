import React from 'react'
import styles from './LargeCard.module.css'

export default function LargeCard({ icon, title, description }) {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardIcon}>
                <img src={icon} />
            </div>
            <span className={`${styles.cardTitle} fs-6`}>{title}</span>
            <p  className={`${styles.cardDescription} fs-7`}>{description}</p>
        </div>
    )
}
