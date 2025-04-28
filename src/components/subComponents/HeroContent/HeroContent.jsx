import React from 'react'
import Numbers from '../Numbers/Numbers'
import styles from './HeroContent.module.css'

export default function HeroContent({title, mainTitle, description, }) {
    return (
        <div className={styles.heroContentContainer}>
            <p className={styles.heroContentTitle}>{title}</p>
            <h1 className={styles.heroContentMainTitle}>{mainTitle}</h1>
            <p className={styles.heroContentDescription}>{description}</p>
            <Numbers listItems={[
                {number:'+7000',text:'Students Passed Out'},
                {number:'+37',text:'Awards & Recognitions'},
                {number:'+15',text:'Experience Educators'}
            ]}/>
        </div>
    )
}
