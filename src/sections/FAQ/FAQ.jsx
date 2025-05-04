import React, { useState } from "react";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import styles from "./FAQ.module.css";
import plus from '../../assets/images/icons/plus.png'
import minus from '../../assets/images/icons/minus.png'

const faqData = [
  {
    question: "What are the school hours at Little Learners Academy?",
    answer:
      "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up."
  },
  {
    question: "Is there a uniform policy for students?",
    answer:
      "We provide educational programs for children aged 3 to 18 years, covering preschool to high school levels.",
  },
  {
    question: "Is there a uniform policy for students?",
    answer:
      "Yes, we offer a variety of extracurricular activities including sports, arts, music, and technology clubs.",
  },
  {
    question: "Is there a uniform policy for students?",
    answer:
      "You can schedule a visit by contacting our admissions office through phone or filling out the form on our website.",
  },
  {
    question: "How do you handle food allergies and dietary restrictions?",
    answer:
      "The admission fee depends on the program and grade level. Please contact the admissions office for specific details.",
  },
  {
    question: "What is the teacher-to-student ratio at Little Learners Academy?",
    answer:
      "Yes, we offer financial aid for eligible families based on the available resources and your financial situation.",
  },
  {
    question: "How do you handle discipline and behavior management?",
    answer:
      "Yes, you can switch programs depending on availability and the requirements of the program you're switching to.",
  },
  {
    question: "How do you handle discipline and behavior management?",
    answer:
      "Yes, you can switch programs depending on availability and the requirements of the program you're switching to.",
  },
];


export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="main-section-container">
      <SectionHeader
        badgeText="Solutions For The Doubts"
        headerText="Frequently Asked Questions"
        descriptionText="Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education."
      />
      <div className={styles.faqContainer}>
        <div className={styles.faqColumn}>
          {faqData.map((item, index) => (
            <div className={styles.faqQuestionContainer}>
              <div
                key={index}
                className={`${styles.faqItem} ${activeIndex === index ? styles.active : ""
                  }`}
                onClick={() => toggleQuestion(index)}
              >
                <div>
                  <div className="fw-bold fs-6">{item.question}</div>
                  {activeIndex === index && (
                    <div className={`${styles.faqAnswer} fs-7`}>{item.answer}</div>
                  )}
                </div>
                <div className={styles.faqIcon}>
                  <img src={`${activeIndex === index ? minus : plus}`} />
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
