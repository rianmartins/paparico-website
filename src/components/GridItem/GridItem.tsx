"use client";

import React from "react";
import Image from "next/image";
import cx from "classnames";

import { useTranslations } from "@/i18n/LanguageProvider";

import styles from "./GridItem.module.css";

type GridItemProps = {
  image: string;
  title: string;
  description: string | React.ReactNode;
  hasStartingFrom?: boolean;
  price?: number;
  priceSuffix?: string;
  className?: string;
  href?: string;
  openInNewTab?: boolean;
  startingFromLabel?: string;
  note?: string;
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
  priceSuffix,
  note,
}) => {
  const t = useTranslations();
  const startingFromLabel = hasStartingFrom ? `${t.common.startingFrom} ` : "";
  const suffix = priceSuffix ? ` ${priceSuffix}` : "";
  const priceString = price ? `${startingFromLabel}€ ${price.toFixed(2)}${suffix}` : "";
  const content = (
    <>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className={styles.image}
          sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 420px"
          priority={image.includes("hero")}
        />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
      {price !== undefined && (
        <div className={styles.price}>
          <span>{priceString}</span>
          {note && <div className={styles.note}>{note}</div>}
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

  return <div className={cx(styles.GridItem, className)}>{content}</div>;
};

export default GridItem;
