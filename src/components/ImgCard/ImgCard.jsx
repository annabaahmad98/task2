import styles from './ImgCard.module.css'
export default function ImgCard({ bgImg, title, description }) {
    return (
        <div className={`${styles.cardContainer} card-main-layout`}>
            <div className={styles.cardBanner}></div>
            <div style={{ backgroundImage: `url(${bgImg})` }} className={styles.cardImg}>
            </div>
            <p className='fs-6 fw-bold'>{title}</p>
            <p className='fs-7'>{description}</p>
        </div>
    )
}
