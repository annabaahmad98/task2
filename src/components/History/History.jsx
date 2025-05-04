import styles from './History.module.css'
import HistoryItem from '../HistoryItem/HistoryItem'

const cardData = [
    {
        year: "2023",
        historyTitle: "Resilience and Future Horizons",
        historyDesecrption: "Adapting to new challenges, we remained committed to our mission of providing an exceptional early education. Looking ahead with optimism, we envision a future filled with boundless possibilities as we continue shaping the leaders and thinkers of tomorrow."
    },
    {
        year: "2023",
        historyTitle: "Resilience and Future Horizons",
        historyDesecrption: "Adapting to new challenges, we remained committed to our mission of providing an exceptional early education. Looking ahead with optimism, we envision a future filled with boundless possibilities as we continue shaping the leaders and thinkers of tomorrow."
    },
    {
        year: "2023",
        historyTitle: "Resilience and Future Horizons",
        historyDesecrption: "Adapting to new challenges, we remained committed to our mission of providing an exceptional early education. Looking ahead with optimism, we envision a future filled with boundless possibilities as we continue shaping the leaders and thinkers of tomorrow."
    },
    {
        year: "2023",
        historyTitle: "Resilience and Future Horizons",
        historyDesecrption: "Adapting to new challenges, we remained committed to our mission of providing an exceptional early education. Looking ahead with optimism, we envision a future filled with boundless possibilities as we continue shaping the leaders and thinkers of tomorrow."
    },
]
export default function History() {
    return (
        <div className={`${styles.historyContainer} card-main-layout`}>
            <div className={styles.historyContent}>
                <div className={styles.historyBorder}></div>
                {cardData.map((card, index) =>
                    <HistoryItem key={index} year={card.year} historyTitle={card.historyTitle} historyDesecrption={card.historyDesecrption} />)}
            </div>
        </div>
    )
}
