import styles from './FilterItem.module.css'

export default function FilterItem({ title }) {
    return (
        <div className={styles.fiterItem}>
            <span className="fs-8">{title}</span>
        </div>
    )
}
