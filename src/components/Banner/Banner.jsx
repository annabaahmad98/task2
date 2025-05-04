import React from 'react'
import styles from './Banner.module.css'
import bgImageStart from '../../assets/images/bgImageStart.png'
import bgImageEnd from '../../assets/images/bgImageEnd.png'

export default function Banner({ text, icon }) {
    return (
        <div className={styles.homeBanner}>
            <div className={styles.bannerImg}>
                <img src={bgImageStart} />
            </div>
            <div className={styles.bannerContent}>
                <p className='fs-8'>{text}</p>
                <div className={styles.bannerArrow}>
                    <img src={icon} />
                </div>
            </div>
            <div className={styles.bannerImg}>
                <img src={bgImageEnd} />
            </div>
        </div>
    )
}
