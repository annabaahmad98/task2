import Article from '../../components/Article/Article'
import bgArticle from '../../assets/images/bgArticle.png'
import MissionVisions from '../../sections/MissionVisions/MissionVisions'
import Achievements from '../../sections/Achievements/Achievements'
import OurHistory from '../../sections/OurHistory/OurHistory'
import TeamMembers from '../../sections/TeamMembers/TeamMembers'


export default function AboutUs() {
  return (
    <div>
      <Article bgArticle={bgArticle} articleTitle="Nurturing Young Minds for Success" articleDescription="Welcome to our Academics page, where we take pride in providing a comprehensive and stimulating educational experience for your child. Our kindergarten school's academic program is thoughtfully designed to foster a love for learning while building a strong foundation of essential skills and knowledge. From language arts and mathematics to science and social studies, our curriculum is carefully crafted to spark curiosity and encourage active exploration." />
      <MissionVisions />
      <Achievements />
      <OurHistory />
      <TeamMembers />
    </div>
  )
}
