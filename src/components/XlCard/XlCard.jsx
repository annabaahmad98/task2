import styles from './XlCard.module.css'

export default function XlCard({ cardTitle, cardLogo, cardDescription }) {
    return (
        <div className="card-main-layout">
            <div className={styles.cardHead}>
                <h1 className='fw-bold'>{cardTitle}</h1>
                <div className={styles.cardLogo}>
                    <img src={cardLogo} />
                </div>
            </div>
            <div>
                <p className='fs-7'>{cardDescription}</p>
            </div>
        </div>
    )
}
