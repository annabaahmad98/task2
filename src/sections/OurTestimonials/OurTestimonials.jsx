import React from "react";
import { useState } from "react";
import SectionHeader from "../../components/subComponents/SectionHeader/SectionHeader";
import ThinCard from "../../components/subComponents/ThinCard/ThinCard";
import avatar from "../../assets/images/avatar.png";
import star from "../../assets/images/star.png";
import styles from './OurTestimonials.module.css';
import arrowleft from '../../assets/images/arrowleft.png'
import arrowright from '../../assets/images/arrowright.png'

export default function OurTestimonials() {
  const [currentPage, setCurrentPage] = useState(0);

  const titles = ["Jennifer B", "David K", "Emily L", "Sarah M", "Chris P", "Anna R"];
  const descriptions = [
    `Little Learners Academy has been a second home for my child.`,
    `Choosing Little Learners Academy for my daughter was the best decision.`,
    `My son's social and academic growth has been remarkable.`,
    `Wonderful environment with caring teachers.`,
    `Amazing learning experience for my child.`,
    `Highly recommend Little Learners Academy!`,
  ];
  const stars = [5, 5, 5, 4, 5, 4];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(titles.length / itemsPerPage);

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };
  return (
    <>
      <SectionHeader
        badgeText="Their Happy Words 🤗"
        headerText="Our Testimonials"
        descriptionText="Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally."
      />

      <div className={styles.mainContainer}>

        <button onClick={handlePrev} className={styles.sliderBtn}>
          <img src={arrowleft} />
        </button>
        <div style={{
          overflow: 'hidden',
        }}>
          <div className={styles.cardsContainer} style={{
            transform: `translateX(-${currentPage * (350 * itemsPerPage + 2 * (itemsPerPage - 1) * 16)}px)`,
            padding: '1rem',
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

        <button onClick={handleNext} className={styles.sliderBtn}>
          <img src={arrowright} />

        </button>
      </div>
    </>
  );
}
