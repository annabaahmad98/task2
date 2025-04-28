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
        <div className={styles.sectionBadge}>
          <span>{badgeText}</span>
        </div>
      )}
      <div className={styles.sectionTitle}>
        <span>{headerText}</span>
      </div>
      <div className={styles.sectionDescription}>
        <span>{descriptionText}</span>
      </div>
    </div>
  );
}
