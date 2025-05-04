import RightArrowBtn from '../../components/RightArrowBtn/RightArrowBtn'
import LeftArrowBtn from '../../components/LeftArrowBtn/LeftArrowBtn'
import LargeCard from '../../components/LargeCard/LargeCard'
import pie from '../../assets/images/icons/pie.png'

const cardData = [
    {
        icon: pie,
        title: 'Outstanding Early Childhood Education Awar',
        description: "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment"
    }
]
export default function AchievementsSlider({ awardsNumber }) {
    return (
        <div>
            <div>
                {cardData.map((card, index) =>
                    <div className="w-50 w-sm-100 flex-1"><LargeCard key={index} icon={card.icon} title={card.title} description={card.description} /></div>
                )}
            </div>
            <div>
                <span><span>{awardsNumber}</span> More Awards</span>
                <div>
                    <LeftArrowBtn />
                    <RightArrowBtn />
                </div>
            </div>
        </div>
    )
}
