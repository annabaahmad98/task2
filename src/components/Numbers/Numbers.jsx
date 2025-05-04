import React from 'react'
import styles from './Numbers.module.css'

export default function Numbers({listItems}) {
    return (
        <div className={styles.numbersContainer}>
            {listItems.map((item, index) => {
                return (
                    <div className={styles.numbersItemContainer} key={index}>
                        <h2 className={`${styles.numbersValue} fw-bold`}>{item.number}</h2>
                        <div className={`${styles.numbersText} fs-8`}>{item.text}</div>
                    </div>
                )
            })}
        </div>
    )
}
