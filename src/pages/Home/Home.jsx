import styles from './Home.module.css'
import Hero from '../../sections/Hero/Hero'
import OurBenefits from '../../sections/OurBenefits/OurBenefits'
import OurTestimonials from '../../sections/OurTestimonials/OurTestimonials'
import FAQ from '../../sections/FAQ/FAQ'
import Navigate from '../../sections/Navigate/Navigate'

export default function Home() {
    return (
        <div className={styles.pageContent}>
            <Hero />
            <OurBenefits />
            <OurTestimonials />
            <FAQ />
            <Navigate />
        </div>
    )
}
