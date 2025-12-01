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
  href?: string;
  openInNewTab?: boolean;
};

const GridItem: React.FC<GridItemProps> = ({
  image,
  title,
  description,
  price,
  hasStartingFrom,
  className = "",
  href,
  openInNewTab,
}) => {
  const content = (
    <>
      <img src={image} className={styles.image} />
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
      {price && (
        <div className={styles.price}>
          {hasStartingFrom && "a partir de"} € {price.toFixed(2)}
        </div>
      )}
    </>
  );

  if (href) {
    return (
      <a
        className={cx(styles.GridItem, styles.clickable, className)}
        href={href}
        target={openInNewTab ? "_blank" : undefined}
        rel={openInNewTab ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <div className={cx(styles.GridItem, className)}>
      {content}
    </div>
  );
};

export default GridItem;
