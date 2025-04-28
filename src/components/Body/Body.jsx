import React from 'react'
import Hero from '../../sections/Hero/Hero'
import OurBenefits from '../../sections/OurBenefits/OurBenefits'
import OurTestimonials from '../../sections/OurTestimonials/OurTestimonials'
import FAQ from '../../sections/FAQ/FAQ'
import Navigate from '../../sections/Navigate/Navigate'
import styles from './Body.module.css'

export default function Body() {
    return (
        <div className={styles.bodyContent}>
            <Hero />
            <OurBenefits />
            <OurTestimonials />
            <FAQ />
            <Navigate />
        </div>
    )
}
