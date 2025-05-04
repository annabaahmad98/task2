import LargeCard from "../../components/LargeCard/LargeCard";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import book from '../../assets/images/icons/book.png'
 
const cardData = [
    {
        icon: book,
        title: "Thematic Learning",
        description: "Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant.�"
    }
]
export default function SpecialFeatures() {
    return (
        <section>
            <SectionHeader headerText="Our Special Features" badgeText="Our Features" descriptionText="Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!" />
            <div>
                {cardData.map((card, index) =>
                    <LargeCard key={index} icon={card.icon} title={card.title} description={card.description} />)}
            </div>
        </section>
    )
}