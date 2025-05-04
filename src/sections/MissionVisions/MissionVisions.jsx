import SectionHeader from "../../components/SectionHeader/SectionHeader";
import XlCard from "../../components/XlCard/XlCard";
import scope from "../../assets/images/scope.png"
import mountains from "../../assets/images/mountains.png"

const cardData = [
  {
    cardTitle: "Mission",
    cardLogo: scope,
    cardDescription: "At Little Learners Academy, our mission is to inspire a passion for learning and empower young minds to become confident, compassionate, and creative individuals. We strive to create a safe and inclusive space where children thrive academically, socially, and emotionally, setting the stage for a successful educational journey."
  },
  {
    cardTitle: "Vision",
    cardLogo: mountains,
    cardDescription: "Our vision is to be a beacon of educational excellence, where children are encouraged to explore, discover, and express their unique talents. We aim to foster a generation of lifelong learners equipped with critical thinking, empathy, and a deep appreciation for diversity."
  }
]
export default function MissionVisions() {
  return (
    <section>
      <SectionHeader headerText="Our Mission & Visions" badgeText="Mission & Visions" descriptionText="We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth." />
      <div className="cards-layout">
        {cardData.map((card, index) => (
          <div className="w-50 w-sm-100 flex-1">
            <XlCard key={index} cardDescription={card.cardDescription} cardLogo={card.cardLogo} cardTitle={card.cardTitle} />
          </div>
        ))}
      </div>
    </section>
  )
}
