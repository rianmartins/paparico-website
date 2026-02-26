import React from "react";

import styles from "./GridText.module.css";

type GridTextProps = {
  title: string;
  text: string[];
  className?: string;
};

const GridText: React.FC<GridTextProps> = ({ title, text, className = "" }) => {
  return (
    <div className={`${styles.GridText} ${className}`}>
      <div className={styles.title}>{title}</div>
      <div className={styles.text}>
        {text.map((paragraph, index) => (
          <p key={index + paragraph.substring(0, 5)}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default GridText;
