import React from "react";
import styles from "./SectionHeader.module.css";

export default function SectionHeader({
  badgeText,
  headerText,
  descriptionText,
}) {
  return (
    <div className={styles.sectionHeaderContainer}>
      {badgeText && (
        <div className={`${styles.sectionBadge} fs-8`}>
          <span>{badgeText}</span>
        </div>
      )}
      <h1 className={`${styles.sectionTitle} fw-bold h1`}>{headerText}</h1>
      <p className={`${styles.sectionDescription} fs-7`}>
        {descriptionText}
      </p>
    </div>
  );
}
