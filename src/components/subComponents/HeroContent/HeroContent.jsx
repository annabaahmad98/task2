import React from 'react'
import Numbers from '../Numbers/Numbers'
import styles from './HeroContent.module.css'

export default function HeroContent({title, mainTitle, description, highlitedText}) {
    return (
        <div className={styles.heroContentContainer}>
            <p className={`${styles.heroContentTitle} fs-6`}>{title}</p>
            <h1 className={styles.heroContentMainTitle}>{mainTitle}<span className={styles.highlitedText}>{highlitedText}</span></h1>
            <p className={`${styles.heroContentDescription} fs-7`}>{description}</p>
            <Numbers listItems={[
                {number:'+7000',text:'Students Passed Out'},
                {number:'+37',text:'Awards & Recognitions'},
                {number:'+15',text:'Experience Educators'}
            ]}/>
        </div>
    )
}
