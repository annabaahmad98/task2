import React from 'react'
import HeroContent from '../../components/HeroContent/HeroContent'
import ImageContainer from '../../components/ImageContainer/ImageContainer'
import imageContainer from "../../assets/images/imageContainer.png"
import styles from './Hero.module.css'

export default function Hero() {
    return (
        <div className={styles.heroContainer}>
            <ImageContainer img={imageContainer} width="50%" height="height: calc(450px - 1.5vw)" />
            <HeroContent title="Welcome to Little Learners Academy" mainTitle="Where Young Minds Blossom and " highlitedText="Dreams Take Flight." description="Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!" />
        </div>
    )
}
