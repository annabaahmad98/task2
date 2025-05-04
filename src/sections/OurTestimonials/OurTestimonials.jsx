import React from "react";
import { useState } from "react";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import ThinCard from "../../components/ThinCard/ThinCard";
import avatar from "../../assets/images/avatar.png";
import star from "../../assets/images/star.png";
import styles from './OurTestimonials.module.css';
import RightArrowBtn from "../../components/rightArrowBtn/rightArrowBtn";
import LeftArrowBtn from "../../components/LeftArrowBtn/LeftArrowBtn";

export default function OurTestimonials() {
  const [currentPage, setCurrentPage] = useState(0);

  const titles = ["Jennifer B", "David K", "Emily L", "Sarah M", "Chris P", "Anna R"];
  const descriptions = [
    `Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!`,
    `Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.`,
    `My son's social and academic growth has been remarkable.`,
    `Wonderful environment with caring teachers.`,
    `My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.`,
    `Highly recommend Little Learners Academy!`,
  ];
  const stars = [5, 3, 4, 4, 2, 4];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(titles.length / itemsPerPage);

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };
  return (
    <div className="main-section-container">
      <SectionHeader
        badgeText="Their Happy Words 🤗"
        headerText="Our Testimonials"
        descriptionText="Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally."
      />

      <div className={styles.mainContainer}>
        <LeftArrowBtn onClick={handlePrev} />
        <div className={styles.sliderContainer}>
          <div className={styles.cardsContainer} style={{
            transform: `translateX(-${currentPage * (350 * itemsPerPage + 2 * (itemsPerPage - 1) * 16)}px)`,
          }}>
            {titles.map((title, index) => (
              <ThinCard
                key={index}
                avatar={avatar}
                title={title}
                icon={star}
                description={descriptions[index]}
                stars={stars[index]}
              />
            ))}
          </div>
        </div>
        <RightArrowBtn onClick={handleNext} />
      </div>
    </div>
  );
}
