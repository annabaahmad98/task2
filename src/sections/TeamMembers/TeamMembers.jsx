import SectionHeader from '../../components/SectionHeader/SectionHeader'
import MemberCard from '../../components/MemberCard/MemberCard'
import envelop from '../../assets/images/icons/envelop.png'
import avatar from '../../assets/images/avatar.png'

const cardData = [
    {
        avatar: avatar,
        memberName: "Ms. Sarah Anderson",
        btnIcon: envelop,
        title: "Qualification:Bachelor's Degree in Early Childhood Education",
        description: "Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn."
    }
]
export default function TeamMembers() {
    return (
        <section>
            <SectionHeader headerText="Our Team Members" badgeText="Our Teachers With Experties" descriptionText="At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning." />
            <div>
                {cardData.map((card, index) => <MemberCard key={index} avatar={card.avatar} memberName={card.memberName} btnIcon={card.btnIcon} title={card.title} description={card.description}/>)}
            </div>
        </section>
    )
}
