import pattern3 from '../../assets/images/pattern3.png'
import styles from './HistoryItem.module.css'

export default function HistoryItem({ year, historyTitle, historyDesecrption }) {
    return (
        <div className={styles.historyItem}>
            <div className={`${styles.historyYear} card-main-layout`}>
                <div className={styles.historyIcon}>
                    <img src={pattern3} />
                </div>
                <h1>{year}</h1>
            </div>
            <div>
                <p className='fw-bold fs-6'>{historyTitle}</p>
                <p className='fs-7'>{historyDesecrption}</p>
            </div>
        </div>
    )
}
