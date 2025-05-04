import React from "react";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import styles from "./Navigate.module.css";
import border from '../../assets/images/border.png'
import arrow from '../../assets/images/icons/arrow.png'

const cardData = [
  {
    heading: "About Us",
    paragraph: "Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.",
    buttonText: "Learn More",
  },
  {
    heading: "Academics",
    paragraph: "Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.",
    buttonText: "Learn More",
  },
  {
    heading: "Student Life",
    paragraph: "Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.",
    buttonText: "Learn More",
  },
  {
    heading: "Admissions",
    paragraph: "Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces.",
    buttonText: "Learn More",
  },
];

const Navigate = () => {
  return (
    <div className="main-section-container">
      <SectionHeader
        badgeText="Explore More"
        headerText="Navigate through our Pages"
        descriptionText="Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school"
      />

      <div className={styles.navigateContainer}>
        <div className={styles.itemsContainer}>
          {cardData.slice(0, 4).map((card, index) => (
            <div key={index} className={styles.card}>
              <div className={`${styles.cardContent} card-main-layout`}>
                <h2 className={`${styles.cardHeading} fw-bold`}>{card.heading}</h2>
                <div className={styles.borderContainer}>
                  <img src={border} />
                </div>
                <p className={`${styles.cardParagraph} fs-7`}>{card.paragraph}</p>
                <button className={`${styles.cardButton} fs-7`}>
                  <span>{card.buttonText}</span>
                  <div className={styles.buttonIcon}>
                    <img src={arrow}/>
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigate;
