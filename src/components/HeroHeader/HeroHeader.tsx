import Image from "next/image";
import cx from "classnames";

import Header from "../Header";

import styles from "./HeroHeader.module.css";
import { ReactNode } from "react";

type HeroHeaderProps = {
  image: string;
  imageAlt: string;
  title: string | ReactNode;
  subtitle: string;
  className?: string;
  heroClassName?: string;
};

const HeroHeader = ({
  image,
  imageAlt,
  title,
  subtitle,
  className = "",
  heroClassName = "",
}: HeroHeaderProps) => {
  return (
    <>
      <div className={cx(styles.heroSection, heroClassName)}>
        <Image
          className={styles.heroImage}
          alt={imageAlt}
          src={image}
          width={1920}
          height={1080}
          priority
          sizes="100vw"
        />
        <div className={styles.heroOverlay} aria-hidden="true" />
      </div>
      <div className={cx(styles.main, className)}>
        <Header className={styles.header} />
        <div className={styles.container}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
      </div>
    </>
  );
};

export default HeroHeader;
