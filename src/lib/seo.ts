import {
  CONTACT_EMAIL,
  CONTACT_PHONE_E164,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  TIKTOK_URL,
  WHATSAPP_URL,
} from "@/constants";
import { type Language } from "@/i18n/translations";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://paparico.pt").replace(
  /\/$/,
  "",
);

export const DEFAULT_LANGUAGE: Language = "pt";

export const SEO_LANGUAGES: Record<
  Language,
  {
    htmlLang: string;
    hreflang: string;
    openGraphLocale: string;
    title: string;
    description: string;
    imageAlt: string;
  }
> = {
  pt: {
    htmlLang: "pt-PT",
    hreflang: "pt-PT",
    openGraphLocale: "pt_PT",
    title: "Paparico | Bolo de rolo artesanal em Portugal",
    description:
      "Bolos de rolo pernambucanos feitos artesanalmente em Portugal. Encomendas por WhatsApp, envios nacionais e retirada mediante agendamento.",
    imageAlt: "Bolo de rolo artesanal do Paparico",
  },
  en: {
    htmlLang: "en",
    hreflang: "en",
    openGraphLocale: "en_US",
    title: "Paparico | Handmade Bolo de Rolo in Portugal",
    description:
      "Handmade Pernambuco-style bolo de rolo in Portugal. Order by WhatsApp, with nationwide shipping and scheduled pickup.",
    imageAlt: "Handmade Paparico bolo de rolo",
  },
};

export const BUSINESS_NAME = "Paparico";
export const BUSINESS_LEGAL_NAME = "Fatia Empolgante Unipessoal, Lda";
export const OPEN_GRAPH_IMAGE = "/prc.jpg";
export const OPEN_GRAPH_IMAGE_WIDTH = 842;
export const OPEN_GRAPH_IMAGE_HEIGHT = 595;

export const getCanonicalPath = (language: Language) => `/${language}`;

export const getCanonicalUrl = (language: Language) => `${SITE_URL}${getCanonicalPath(language)}`;

export const getLanguageAlternates = () => ({
  [SEO_LANGUAGES.pt.hreflang]: getCanonicalUrl("pt"),
  [SEO_LANGUAGES.en.hreflang]: getCanonicalUrl("en"),
  "x-default": getCanonicalUrl(DEFAULT_LANGUAGE),
});

export const getOpenGraphImageUrl = () => `${SITE_URL}${OPEN_GRAPH_IMAGE}`;

export const SOCIAL_PROFILE_URLS = [INSTAGRAM_URL, TIKTOK_URL, FACEBOOK_URL];

export const buildWebsiteJsonLd = (language: Language) => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: BUSINESS_NAME,
  url: SITE_URL,
  inLanguage: SEO_LANGUAGES[language].htmlLang,
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
});

export const buildOrganizationJsonLd = (language: Language) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: BUSINESS_NAME,
  legalName: BUSINESS_LEGAL_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: [getOpenGraphImageUrl()],
  description: SEO_LANGUAGES[language].description,
  email: CONTACT_EMAIL,
  telephone: CONTACT_PHONE_E164,
  sameAs: SOCIAL_PROFILE_URLS,
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: CONTACT_PHONE_E164,
      email: CONTACT_EMAIL,
      url: WHATSAPP_URL,
      availableLanguage: ["Portuguese", "English"],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "21:00",
      },
    },
  ],
});

export const buildHomePageJsonLd = (language: Language) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${getCanonicalUrl(language)}#webpage`,
  url: getCanonicalUrl(language),
  name: SEO_LANGUAGES[language].title,
  description: SEO_LANGUAGES[language].description,
  inLanguage: SEO_LANGUAGES[language].htmlLang,
  isPartOf: {
    "@id": `${SITE_URL}/#website`,
  },
  about: {
    "@id": `${SITE_URL}/#organization`,
  },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: getOpenGraphImageUrl(),
    width: OPEN_GRAPH_IMAGE_WIDTH,
    height: OPEN_GRAPH_IMAGE_HEIGHT,
  },
});
