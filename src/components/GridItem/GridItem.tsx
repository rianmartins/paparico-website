"use client";

import React from "react";
import Image from "next/image";
import cx from "classnames";

import { useTranslations } from "@/i18n/LanguageProvider";

import styles from "./GridItem.module.css";

type PriceSized = {
  title: string;
  price: number;
};

type GridItemProps = {
  image: string;
  flavors: string[];
  sizes: PriceSized[];
  className?: string;
  href?: string;
  openInNewTab?: boolean;
};

const GridItem: React.FC<GridItemProps> = ({
  image,
  className = "",
  href,
  openInNewTab,
  flavors,
  sizes,
}) => {
  const t = useTranslations();
  const title = sizes[0].title;
  const content = (
    <>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={title}
          width={445}
          height={445}
          className={styles.image}
          sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 420px"
          priority={image.includes("hero")}
        />
      </div>
      {sizes.map((item) => (
        <div key={item.title} className={styles.title}>
          <span>{item.title}</span>
          <span>{`${item.price.toFixed(1)}€`}</span>
        </div>
      ))}
      <div className={styles.description}>
        {flavors.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
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
