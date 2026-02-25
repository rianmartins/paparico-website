"use client";

import React from "react";
import cx from "classnames";

import styles from "./Skeleton.module.css";

const Skeleton: React.FC = () => {
  return (
    <div className={styles.Skeleton}>
      <div className={cx(styles.skeletonBlock, styles.imageSkeleton)} />
      <div className={cx(styles.skeletonBlock, styles.skeletonLine)} />
      <div className={cx(styles.skeletonBlock, styles.skeletonLine)} />
      <div className={cx(styles.skeletonBlock, styles.skeletonLine, styles.skeletonLineShort)} />
      <div className={cx(styles.skeletonBlock, styles.skeletonLine, styles.skeletonLineShort)} />
      <div className={cx(styles.skeletonBlock, styles.skeletonLine, styles.skeletonLineShort)} />
    </div>
  );
};

export default Skeleton;
