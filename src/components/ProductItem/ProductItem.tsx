import { FC } from "react";
import Image from "next/image";

import styles from "./ProductItem.module.css";

type ProductItemProps = {
  image: string;
  title: string;
  description: string | React.ReactNode;
  price: number;
  moreInfo?: string;
};

const ProductItem: FC<ProductItemProps> = ({ image, title, description, price, moreInfo }) => {
  return (
    <div className={styles.ProductItem}>
      <Image
        src={image}
        className={styles.image}
        alt={title}
        width={800}
        height={600}
        sizes="(max-width: 720px) 100vw, 65vw"
      />
      <div className={styles.details}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
        <div className={styles.info}>
          <div className={styles.price}>€ {price.toFixed(2)}</div>
          {moreInfo && <div className={styles.moreInfo}>{moreInfo}</div>}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
