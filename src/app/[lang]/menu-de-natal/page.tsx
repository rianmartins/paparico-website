"use client";

import { useTranslations } from "@/i18n/LanguageProvider";

import Button from "@/components/Button";
import Footer from "@/components/Footer";
import HeroHeader from "@/components/HeroHeader";
import ProductItem from "@/components/ProductItem";
import { WHATSAPP_URL } from "@/constants";

import styles from "./page.module.css";

export default function ChristmasMenuPage() {
  const t = useTranslations();

  return (
    <div className={styles.page}>
      <HeroHeader
        className={styles.header}
        heroClassName={styles.heroImage}
        image="/products/natal/hero.jpg"
        imageAlt={t.menu.heroAlt}
        title={t.menu.title}
        subtitle={t.menu.subtitle}
      />
      <section className={styles.content}>
        <div className={styles.contentInner}>
          <h1 className={styles.contentTitle}>{t.menu.contentTitle}</h1>
          {t.menu.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className={styles.products}>
            {t.menu.items.map((item) => (
              <ProductItem
                key={item.title}
                image={item.image}
                title={item.title}
                description={item.description}
                price={item.price}
                moreInfo={item.moreInfo}
              />
            ))}
          </div>
          <Button
            size="large"
            onClick={() => window.open(WHATSAPP_URL, "_blank")}
            className={styles.button}
          >
            {t.menu.button}
          </Button>
          <div className={styles.info}>
            <p>{t.menu.notice.descriptionTop}</p>
            <h3>{t.menu.notice.pickupTitle}</h3>
            <ul>
              {t.menu.notice.pickupTimes.map((time) => (
                <li key={time}>{time}</li>
              ))}
            </ul>
            <p>{t.menu.notice.closing}</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
