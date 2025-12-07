"use client";

import Image from "next/image";

import Header from "@/components/Header";
import ProductItem from "@/components/ProductItem";
import Footer from "@/components/Footer";

import styles from "../../menu-de-natal/page.module.css";
import Button from "@/components/Button";
import { WHATSAPP_URL } from "@/constants";
import { useTranslations } from "@/i18n/LanguageProvider";

export default function ChristmasMenuPage() {
  const t = useTranslations();

  return (
    <div className={styles.page}>
      <div className={styles.heroSection}>
        <Image
          className={styles.heroImage}
          alt={t.menu.heroAlt}
          src="/products/natal/hero.jpg"
          width={1920}
          height={1080}
          priority
          sizes="100vw"
        />
        <div className={styles.heroOverlay} aria-hidden="true" />
      </div>
      <main className={styles.main}>
        <Header className={styles.header} />
        <div className={styles.container}>
          <h1 className={styles.title}>{t.menu.title}</h1>
          <p className={styles.subtitle}>{t.menu.subtitle}</p>
        </div>
      </main>
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
