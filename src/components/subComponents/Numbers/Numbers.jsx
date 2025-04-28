import React from 'react'
import styles from './Numbers.module.css'

export default function Numbers({listItems}) {
    return (
        <div className={styles.numbersContainer}>
            {listItems.map((item, index) => {
                return (
                    <div className={styles.numbersItemContainer} key={index}>
                        <div className={styles.numbersValue}>{item.number}</div>
                        <div className={styles.numbersText}>{item.text}</div>
                    </div>
                )
            })}
        </div>
    )
}
