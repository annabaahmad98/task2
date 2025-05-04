import React from "react";
import styles from "./OurBenefits.module.css";
import LargeCard from "../../components/LargeCard/LargeCard";
import hat from "../../assets/images/icons/hat.png";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

export default function OurBenefits() {
  const titles = [
    "Holistic Learning Approach",
    "Experienced Educators",
    "Nurturing Environment",
    "Play-Based Learning",
    "Individualized Attention",
    "Parent Involvement",
  ];
  const descriptions = [
    "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.",
    "We prioritize safety and provide a warm and caring atmosphere for every child.",
    "We prioritize safety and provide a warm and caring atmosphere for every child.  ",
    "We believe in the power of play to foster creativity, problem-solving skills, and imagination.",
    `Our small class sizes enable personalized attention, catering to each child's unique needs.`,
    `We foster a strong parent-school partnership to ensure seamless communication and collaboration.`,
  ];

  return (
    <div className='main-section-container'>
      <SectionHeader
        badgeText="Children Deserve Bright Future"
        headerText="Our Benefits"
        descriptionText="With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future."
      />
      <div className={styles.cardsContainer}>
        {Array.from({ length: 6 }).map((_, index) => (
          <LargeCard
            key={index}
            icon={hat}
            title={titles[index]}
            description={descriptions[index]}
          />
        ))}
      </div>
    </div>
  );
}