import React from "react";
import cx from "classnames";

import styles from "./GridItem.module.css";

type GridItemProps = {
  image: string;
  title: string;
  description: string | React.ReactNode;
  hasStartingFrom?: boolean;
  price?: number;
  className?: string;
};

const GridItem: React.FC<GridItemProps> = ({
  image,
  title,
  description,
  price,
  hasStartingFrom,
  className = "",
}) => {
  return (
    <div className={cx(styles.GridItem, className)}>
      <img src={image} className={styles.image} />
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
      {price && (
        <div className={styles.price}>
          {hasStartingFrom && "a partir de"} € {price.toFixed(2)}
        </div>
      )}
    </div>
  );
};

export default GridItem;
