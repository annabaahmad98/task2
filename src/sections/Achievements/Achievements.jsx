import React from 'react'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import AchievementsSlider from '../AchievementsSlider/AchievementsSlider'

export default function Achievements() {
    return (
        <section>
            <SectionHeader headerText="Our Awards and Recognitions" badgeText="Our Achievements" descriptionText="Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students." />
            <AchievementsSlider awardsNumber='8'/>
        </section>
    )
}
