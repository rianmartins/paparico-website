"use client";

import HeroHeader from "@/components/HeroHeader";
import { useLanguage, useTranslations } from "@/i18n/LanguageProvider";

import styles from "./page.module.css";
import GridItem from "@/components/GridItem";
import Footer from "@/components/Footer";

export default function EventsPage() {
  const t = useTranslations();
  const { language } = useLanguage();
  const perUnitLabel = language === "pt" ? "/unid" : "/unit";
  const [mainProduct, ...otherProducts] = t.events.items;

  return (
    <div className={styles.page}>
      <HeroHeader
        className={styles.header}
        heroClassName={styles.heroImage}
        image="/products/events/hero.jpg"
        imageAlt={t.events.heroAlt}
        title={t.events.heroTitle}
        subtitle={t.events.heroSubtitle}
      />
      <section className={styles.content}>
        <h1 className={styles.title}>{t.events.pageTitle}</h1>
        <div className={styles.products}>
          {mainProduct && (
            <div className={styles.mainProduct}>
              <GridItem
                {...mainProduct}
                priceSuffix={mainProduct.isPerUnit ? perUnitLabel : undefined}
              />
            </div>
          )}
          {otherProducts.slice(0, 2).length > 0 && (
            <div className={styles.otherProducts}>
              {otherProducts.slice(0, 2).map((product) => (
                <GridItem
                  key={product.title}
                  {...product}
                  priceSuffix={product.isPerUnit ? perUnitLabel : undefined}
                />
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}
