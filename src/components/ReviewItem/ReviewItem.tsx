import { FC } from "react";

import { formatRelativeDate } from "./utils";
import styles from "./ReviewItem.module.css";

type ReviewItemProps = {
  name: string;
  review: string;
  date: string;
  image?: string;
};

const ReviewItem: FC<ReviewItemProps> = ({ name, review, date, image = "/hero-image.png" }) => {
  return (
    <div className={styles.ReviewItem}>
      <div className={styles.review}>"{review}"</div>
      <div className={styles.user}>
        <img src={image} alt={name} className={styles.image} />
        <div className={styles.info}>
          <div className={styles.name}>{name}</div>
          <div className={styles.date}>{formatRelativeDate(date)}</div>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
