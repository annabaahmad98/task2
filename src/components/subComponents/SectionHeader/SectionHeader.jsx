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
      <div className={styles.sectionTitle}>
        <h1>{headerText}</h1>
      </div>
      <div className={`${styles.sectionDescription} fs-7`}>
        {descriptionText}
      </div>
    </div>
  );
}
