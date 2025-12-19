"use client";

import Image from "next/image";
import Link from "next/link";

import Header from "@/components/Header";
import Button from "@/components/Button";
import GridItem from "@/components/GridItem";
import ReviewItem from "@/components/ReviewItem";
import Footer from "@/components/Footer";

import { useLanguage, useTranslations } from "@/i18n/LanguageProvider";

import styles from "./page.module.css";

export default function Home() {
  const { language } = useLanguage();
  const t = useTranslations();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
        <div className={styles.description}>
          {t.home.description}
        </div>
        <div className={styles.menuCta}>
          <Link href={`/${language}/menu-de-natal`}>
            <Button size="large" className={styles.menuCtaButton}>
              {t.home.menuCta}
            </Button>
          </Link>
        </div>
        <Image
          className={styles.hero}
          src="/hero-image.png"
          alt={t.home.heroAlt}
          width={1600}
          height={900}
          priority
          sizes="100vw"
        />
        <h1 id="products" className={styles.title}>
          {t.home.productsTitle}
        </h1>
        <div className={styles.products}>
          <div className={styles.mainProduct}>
            <GridItem
              {...t.home.products.main}
              className={styles.mainItem}
              startingFromLabel={t.common.startingFrom}
            />
          </div>
          <div className={styles.otherProducts}>
            {t.home.products.secondary.map((product) => (
              <GridItem
                key={product.title}
                {...product}
                startingFromLabel={t.common.startingFrom}
              />
            ))}
          </div>
        </div>
        <div className={styles.productsGrid}>
          {t.home.products.grid.map((product) => (
            <GridItem
              key={product.title}
              {...product}
              startingFromLabel={t.common.startingFrom}
            />
          ))}
        </div>
        <h1>{t.home.reviewsTitle}</h1>
        <div className={styles.reviews}>
          {t.reviews.items.map((review) => (
            <ReviewItem
              key={`${review.name}-${review.headline}`}
              name={review.name}
              review={review.text}
              origin={review.origin}
              headline={review.headline}
              rating={review.rating}
              ratingAlt={t.reviews.starAlt}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
