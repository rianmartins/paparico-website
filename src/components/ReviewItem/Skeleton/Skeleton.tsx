"use client";

import React from "react";
import cx from "classnames";

import styles from "./Skeleton.module.css";

const Skeleton: React.FC = () => {
  return (
    <div className={styles.Skeleton}>
      <div className={cx(styles.skeletonBlock, styles.headlineLine)} />
      <div className={cx(styles.skeletonBlock, styles.headlineLine, styles.headlineLineShort)} />
      <div className={styles.ratingRow}>
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={`rating-skeleton-${index}`}
            className={cx(styles.skeletonBlock, styles.ratingDot)}
          />
        ))}
      </div>
      <div className={cx(styles.skeletonBlock, styles.reviewLine)} />
      <div className={cx(styles.skeletonBlock, styles.reviewLine, styles.reviewLineShort)} />
      <div className={styles.user}>
        <div className={cx(styles.skeletonBlock, styles.avatar)} />
        <div className={styles.userLines}>
          <div className={cx(styles.skeletonBlock, styles.userName)} />
          <div className={cx(styles.skeletonBlock, styles.userOrigin)} />
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
