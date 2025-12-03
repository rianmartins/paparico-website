import { FC } from "react";
import Image from "next/image";

import styles from "./ReviewItem.module.css";

type ReviewItemProps = {
  name: string;
  review: string;
  headline: string;
  rating: number;
  origin: string;
};

const ReviewItem: FC<ReviewItemProps> = ({ name, review, origin, headline, rating }) => {
  return (
    <div className={styles.ReviewItem}>
      <div className={styles.headline}>
        <div className={styles.text}>“{headline}”</div>
        <div className={styles.rating}>
          {Array.from({ length: rating }, (_, index) => (
            <Image
              key={`rating-star-${index}`}
              src="/icons/star.svg"
              alt="Estrela de avaliação"
              width={20}
              height={20}
            />
          ))}
        </div>
      </div>
      <div className={styles.review}>“{review}”</div>
      <div className={styles.user}>
        <div className={styles.avatar}>{name.charAt(0)}</div>
        <div className={styles.info}>
          <div className={styles.name}>{name}</div>
          <div className={styles.description}>{origin}</div>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
