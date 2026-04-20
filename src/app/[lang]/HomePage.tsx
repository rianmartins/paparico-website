"use client";

import { useState } from "react";
import Image from "next/image";
import cx from "classnames";

import { useLanguage, useTranslations } from "@/i18n/LanguageProvider";

import { HOME_IMAGE_ALT_TEXT, REVIEW_LINK, WHATSAPP_URL } from "@/constants";

import { type GridSection } from "@/types/Products";
import { type Review } from "@/types/Reviews";

import HeroHeader from "@/components/HeroHeader";
import GridItem from "@/components/GridItem";
import ReviewItem from "@/components/ReviewItem";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import InputLabel from "@/components/Form/InputLabel";
import Input from "@/components/Form/Input";
import TextArea from "@/components/Form/TextArea";
import Button from "@/components/Button";
import GridText from "@/components/GridText";
import FormField from "@/components/Form/FormField";
import Header from "@/components/Header";

import { useFloatingHeader } from "@/hooks/useFloatingHeader";
import { initialResellerFormValues, useResellerForm } from "@/hooks/useResellerForm";

import styles from "./page.module.css";

type HomePageClientProps = {
  gridItems: GridSection[];
  reviews: Review[];
};

export default function HomePage({ gridItems, reviews }: HomePageClientProps) {
  const { language } = useLanguage();
  const t = useTranslations();
  const imageAlt = HOME_IMAGE_ALT_TEXT[language];
  const [resellerFormValues, setResellerFormValues] = useState(initialResellerFormValues);
  const {
    floatingHeaderRef,
    isFloatingHeaderVisible,
    handleFloatingHeaderMouseEnter,
    handleFloatingHeaderMouseLeave,
    handleFloatingHeaderClickCapture,
  } = useFloatingHeader();
  const {
    formStatus,
    fieldErrors,
    handleFieldChange,
    handleFieldBlur,
    handleSubmit,
    handleCancel,
  } = useResellerForm({
    language,
    values: resellerFormValues,
    setValues: setResellerFormValues,
    validationMessages: {
      nameRequired: t.home.reseller.formActions.nameRequired,
      emailRequired: t.home.reseller.formActions.emailRequired,
      emailInvalid: t.home.reseller.formActions.emailInvalid,
      messageRequired: t.home.reseller.formActions.messageRequired,
    },
    successMessage: t.home.reseller.formActions.success,
    errorMessage: t.home.reseller.formActions.error,
  });
  const { name, company, email, contact, message } = resellerFormValues;

  return (
    <div className={styles.page}>
      <div
        ref={floatingHeaderRef}
        className={cx(styles.floatingHeader, {
          [styles.floatingHeaderVisible]: isFloatingHeaderVisible,
        })}
        aria-hidden={!isFloatingHeaderVisible}
        onMouseEnter={handleFloatingHeaderMouseEnter}
        onMouseLeave={handleFloatingHeaderMouseLeave}
        onClickCapture={handleFloatingHeaderClickCapture}
      >
        <Header variant="floating" />
      </div>
      <HeroHeader
        className={styles.header}
        heroClassName={styles.heroImage}
        image="/hero-image.jpg"
        imageAlt={t.home.heroSection.alt}
        title={t.home.heroSection.title}
        subtitle={t.home.heroSection.subtitle}
      />
      <section className={`${styles.content}`}>
        <div className={styles.info}>
          <div className={styles.title}>{t.home.title}</div>
          <div className={styles.text}>{t.home.text}</div>
        </div>
      </section>
      <Image
        className={styles.coverImageMobile}
        src="/Image_cover_mobile.jpg"
        alt={imageAlt.coverMobile}
        width={390}
        height={555}
        priority
      />
      <section className={styles.content}>
        <div className={styles.productShowcase}>
          <div className={styles.fullWidth}>
            <Image
              src="/products/Image_1.png"
              alt={imageAlt.productSlices}
              className={styles.mobile}
              width={690}
              height={700}
            />
          </div>
          <div className={styles.columnFullWidth}>
            <div>
              <Image
                src="/products/Image_2.png"
                alt={imageAlt.platedSlice}
                className={styles.mobile}
                width={360}
                height={350}
              />
            </div>
            <div className={styles.textRight}>
              <Image
                src="/products/Image_3.png"
                alt={imageAlt.slicedRoll}
                width={360}
                height={350}
              />
              <Image
                src="/gallery/Image_2.png"
                alt={imageAlt.breakfastTray}
                className={styles.mobile}
                width={360}
                height={350}
              />
            </div>
          </div>
        </div>
      </section>
      <Image
        className={styles.coverImage}
        src="/Image_cover.png"
        alt={imageAlt.cover}
        width={1440}
        height={887}
        priority
      />
      <section className={styles.content}>
        <div id="products" className={styles.products}>
          <h2 className={styles.title}>{t.home.productsTitle}</h2>
          <p className={styles.textMobile}>{t.home.productsText1}</p>
          <p className={styles.textMobile}>{t.home.productsText2}</p>
          <h2 className={styles.textMobile}>{t.home.productsSubtitle1}</h2>
          <h2 className={styles.textMobile}>{t.home.productsSubtitle2}</h2>
          <div className={styles.productsGrid}>
            {gridItems.map((section) =>
              section.type === "item" ? (
                <GridItem
                  key={section.id}
                  sizes={section.sizes}
                  flavors={section.flavors}
                  image={section.image}
                  href={section.href}
                  openInNewTab={section.openInNewTab}
                />
              ) : (
                <GridText
                  key={section.id}
                  className={styles.gridTextItem}
                  title={section.title}
                  text={section.text}
                  hasCTAButton={section.hasCTAButton}
                />
              ),
            )}
          </div>
        </div>
      </section>
      <div className={styles.galleryMobile}>
        <Image src="/gallery/Image_1.png" alt={imageAlt.nakedCake} width={445} height={408} />
        <Image src="/gallery/Image_2.png" alt={imageAlt.breakfastTray} width={621} height={519} />
      </div>
      <section className={styles.content}>
        <div id="images" className={styles.gallery}>
          <h2 className={styles.subtitle}>{t.home.galleryTitle1}</h2>
          <h2 className={styles.subtitle}>{t.home.galleryTitle2}</h2>
          <div className={styles.galleryGrid}>
            <div className={styles.row}>
              <Image
                src="/gallery/Image_1.png"
                alt={imageAlt.nakedCake}
                width={445}
                height={408}
                className={styles.alignStart}
              />
              <Image
                src="/gallery/Image_2.png"
                alt={imageAlt.breakfastTray}
                width={621}
                height={519}
              />
              <Image
                src="/gallery/Image_3.png"
                alt={imageAlt.giftBox}
                width={268}
                height={268}
                className={styles.alignEnd}
              />
            </div>
            <div className={styles.row}>
              <Image
                src="/gallery/Image_4.png"
                alt={imageAlt.classicSlices}
                width={667}
                height={667}
              />
              <Image
                src="/gallery/Image_5.png"
                alt={imageAlt.dessertSquares}
                width={333}
                height={333}
                className={styles.alignStart}
              />
              <Image
                src="/gallery/Image_6.png"
                alt={imageAlt.chocolateRoll}
                width={333}
                height={333}
                className={styles.alignEnd}
              />
            </div>
          </div>
        </div>
        <div id="information" className={styles.infoOrders}>
          <h2 className={styles.title}>{t.home.info.title}</h2>
          <h3 className={styles.subtitle}>{t.home.info.subtitle}</h3>
          <div className={styles.ordersLayout}>
            <div className={`${styles.text} ${styles.ordersText}`}>
              <div className={styles.card}>
                <h3>{t.home.info.pickupTitle}</h3>
                <p>{t.home.info.pickupDescription}</p>
              </div>
              <div className={styles.card}>
                <h3>{t.home.info.shippingTitle}</h3>
                <p>{t.home.info.shippingDescription}</p>
              </div>
            </div>
            <Image
              className={styles.imageCenter}
              src="/info-1.png"
              alt={imageAlt.orderInfo}
              width={450}
              height={830}
            />
            <div className={styles.columnImageCTAButton}>
              <div>
                <Image src="/info-2.png" alt={imageAlt.berriesCake} width={350} height={536} />
                <Image
                  src="/info-1.png"
                  alt={imageAlt.orderInfo}
                  className={styles.mobile}
                  width={350}
                  height={536}
                />
                {t.home.info.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <Button
                className={styles.CTAButton}
                onClick={() => window.open(WHATSAPP_URL, "_blank")}
              >
                {t.header.order}
              </Button>
            </div>
          </div>
        </div>
        <div id="reseller" className={styles.reseller}>
          <h2 className={styles.title}>{t.home.reseller.title}</h2>
          <div className={styles.fullWidth}>
            <h3 className={styles.resellerHeading}>{t.home.reseller.heading}</h3>
            <div className={styles.resellerContent}>
              <Image src="/fatias.png" alt={imageAlt.packagedSlices} width={480} height={625} />
              <div className={styles.resellerForm}>
                <div className={styles.resellerDescription}>
                  {t.home.reseller.description.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <Form
                  onSubmit={handleSubmit}
                  onCancel={handleCancel}
                  isSubmitting={formStatus === "submitting"}
                  submitLabel={t.home.reseller.formActions.submit}
                  submittingLabel={t.home.reseller.formActions.sending}
                  cancelLabel={t.home.reseller.formActions.cancel}
                >
                  <FormField errorMessage={fieldErrors.name} errorId="reseller-name-error">
                    <InputLabel>{t.home.reseller.formLabels.name}</InputLabel>
                    <Input
                      name="name"
                      placeholder={t.home.reseller.formLabels.name}
                      value={name}
                      onChange={(event) => handleFieldChange("name", event.target.value)}
                      onBlur={() => handleFieldBlur("name")}
                      hasError={Boolean(fieldErrors.name)}
                      aria-invalid={Boolean(fieldErrors.name)}
                      aria-describedby={fieldErrors.name ? "reseller-name-error" : undefined}
                      required
                      autoComplete="name"
                    />
                  </FormField>
                  <FormField>
                    <InputLabel>{t.home.reseller.formLabels.company}</InputLabel>
                    <Input
                      name="company"
                      placeholder={t.home.reseller.formLabels.company}
                      value={company}
                      onChange={(event) => handleFieldChange("company", event.target.value)}
                      onBlur={() => handleFieldBlur("company")}
                      autoComplete="organization"
                    />
                  </FormField>
                  <FormField errorMessage={fieldErrors.email} errorId="reseller-email-error">
                    <InputLabel>{t.home.reseller.formLabels.email}</InputLabel>
                    <Input
                      type="email"
                      name="email"
                      placeholder={t.home.reseller.formLabels.email}
                      value={email}
                      onChange={(event) => handleFieldChange("email", event.target.value)}
                      onBlur={() => handleFieldBlur("email")}
                      hasError={Boolean(fieldErrors.email)}
                      aria-invalid={Boolean(fieldErrors.email)}
                      aria-describedby={fieldErrors.email ? "reseller-email-error" : undefined}
                      required
                      autoComplete="email"
                    />
                  </FormField>
                  <FormField>
                    <InputLabel>{t.home.reseller.formLabels.contact}</InputLabel>
                    <Input
                      type="tel"
                      name="contact"
                      placeholder={t.home.reseller.formLabels.contact}
                      value={contact}
                      onChange={(event) => handleFieldChange("contact", event.target.value)}
                      onBlur={() => handleFieldBlur("contact")}
                      autoComplete="tel"
                    />
                  </FormField>
                  <FormField errorMessage={fieldErrors.message} errorId="reseller-message-error">
                    <InputLabel>{t.home.reseller.formLabels.message}</InputLabel>
                    <TextArea
                      name="message"
                      placeholder={t.home.reseller.formLabels.message}
                      value={message}
                      onChange={(event) => handleFieldChange("message", event.target.value)}
                      onBlur={() => handleFieldBlur("message")}
                      hasError={Boolean(fieldErrors.message)}
                      aria-invalid={Boolean(fieldErrors.message)}
                      aria-describedby={fieldErrors.message ? "reseller-message-error" : undefined}
                      required
                      autoComplete="off"
                    />
                  </FormField>
                </Form>
              </div>
            </div>
          </div>
        </div>
        <div id="reviews" className={styles.reviews}>
          <h2 className={styles.title}>{t.home.reviews.title}</h2>
          <h3>{t.home.reviews.subheadingOne}</h3>
          <h3>{t.home.reviews.subheadingTwo}</h3>
          <div>
            <Button
              className={styles.reviewsCta}
              onClick={() => window.open(REVIEW_LINK, "_blank")}
            >
              {t.home.reviews.cta}
            </Button>
            <div className={styles.reviewsGrid}>
              {reviews.map((review) => (
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
          </div>
        </div>
      </section>
      <Image
        className={styles.coverImage}
        src="/map-paparico.png"
        alt={imageAlt.map}
        width={1440}
        height={623}
      />
      <Footer />
    </div>
  );
}
