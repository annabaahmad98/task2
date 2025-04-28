import React from "react";
import SectionHeader from "../../components/subComponents/SectionHeader/SectionHeader";
import styles from "./Navigate.module.css";

const cardData = [
  {
    heading: "Heading 1",
    paragraph: "Paragraph text goes here describing the card content.",
    buttonText: "Button 1",
  },
  {
    heading: "Heading 2",
    paragraph: "Paragraph text goes here describing the card content.",
    buttonText: "Button 2",
  },
  {
    heading: "Heading 3",
    paragraph: "Paragraph text goes here describing the card content.",
    buttonText: "Button 3",
  },
  {
    heading: "Heading 4",
    paragraph: "Paragraph text goes here describing the card content.",
    buttonText: "Button 4",
  },
];

const Navigate = () => {
  return (
    <div className={styles.container}>
      <SectionHeader
        headerText="Navigate through our Pages"
        descriptionText="Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school"
      />
      
      <div className={styles.subContainer}>
        <div className={styles.itemsContainer}>
          {/* First Row */}
          {cardData.slice(0, 2).map((card, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardContainer}>
                <div className={styles.cardSubContainer}>
                  <h2 className={styles.cardHeading}>{card.heading}</h2>
                  <div className={styles.ratingContainer}>
                    {/* Rating line with circles */}
                    {[1, 2, 3, 4, 5].map((_, index) => (
                      <div key={index} className={styles.ratingSubContainer}>
                        <div className={styles.ratingShape}></div>
                        <div className={styles.ratingLineContainer}>
                          <div className={styles.ratingLine}></div>
                        </div>
                      </div>
                    ))}
                    <div className={styles.ratingEndContainer}>
                      <div className={styles.ratingEndLineContainer}>
                        <div className={styles.ratingLine}></div>
                      </div>
                      <div className={styles.ratingShape}></div>
                    </div>
                  </div>
                </div>
                <p className={styles.cardParagraph}>{card.paragraph}</p>
                <button className={styles.cardButton}>
                  <span className={styles.buttonText}>{card.buttonText}</span>
                  <div className={styles.buttonIcon}>
                    <div className={styles.buttonVector}></div>
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className={styles.itemsContainer}>
          {cardData.slice(2, 4).map((card, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardContainer}>
                <div className={styles.cardSubContainer}>
                  <h2 className={styles.cardHeading}>{card.heading}</h2>
                  <div className={styles.ratingContainer}>
                    {/* Rating line with circles */}
                    {[1, 2, 3, 4, 5].map((_, index) => (
                      <div key={index} className={styles.ratingSubContainer}>
                        <div className={styles.ratingShape}></div>
                        <div className={styles.ratingLineContainer}>
                          <div className={styles.ratingLine}></div>
                        </div>
                      </div>
                    ))}
                    <div className={styles.ratingEndContainer}>
                      <div className={styles.ratingEndLineContainer}>
                        <div className={styles.ratingLine}></div>
                      </div>
                      <div className={styles.ratingShape}></div>
                    </div>
                  </div>
                </div>
                <p className={styles.cardParagraph}>{card.paragraph}</p>
                <button className={styles.cardButton}>
                  <span className={styles.buttonText}>{card.buttonText}</span>
                  <div className={styles.buttonIcon}>
                    <div className={styles.buttonVector}></div>
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
