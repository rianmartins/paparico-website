import type { MetadataRoute } from "next";

import { SUPPORTED_LANGUAGES } from "@/i18n/translations";
import {
  getCanonicalUrl,
  getLanguageAlternates,
  getOpenGraphImageUrl,
  SITE_URL,
} from "@/lib/seo";

const imagePaths = [
  "/hero-image.jpg",
  "/Image_cover.png",
  "/Image_cover_mobile.jpg",
  "/products/bolo-de-rolo-tradicional.jpg",
  "/products/bolo-de-rolo-toppings-doce-de-leite.png",
  "/products/bolo-de-rolo-fatia.jpg",
  "/products/bolo-de-pote.jpg",
  "/products/casadinho.png",
  "/products/bolo-de-rolo-naked-recheado.jpg",
  "/products/events/mini.jpg",
  "/gallery/Image_1.png",
  "/gallery/Image_2.png",
  "/gallery/Image_3.png",
  "/gallery/Image_4.png",
  "/gallery/Image_5.png",
  "/gallery/Image_6.png",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const images = [getOpenGraphImageUrl(), ...imagePaths.map((path) => `${SITE_URL}${path}`)];

  return SUPPORTED_LANGUAGES.map((language) => ({
    url: getCanonicalUrl(language),
    lastModified,
    changeFrequency: "monthly",
    priority: language === "pt" ? 1 : 0.9,
    alternates: {
      languages: getLanguageAlternates(),
    },
    images,
  }));
}
