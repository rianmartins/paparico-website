import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono, Inter_Tight } from "next/font/google";
import { notFound } from "next/navigation";
import { type ReactNode } from "react";

import { ToastProvider } from "@/components/Toast";
import { LanguageProvider, type Language } from "@/i18n/LanguageProvider";
import { SUPPORTED_LANGUAGES } from "@/i18n/translations";
import {
  getCanonicalPath,
  getLanguageAlternates,
  OPEN_GRAPH_IMAGE,
  OPEN_GRAPH_IMAGE_HEIGHT,
  OPEN_GRAPH_IMAGE_WIDTH,
  SEO_LANGUAGES,
  SITE_URL,
} from "@/lib/seo";
import "../globals.css";

const theSeasons = localFont({
  src: [
    {
      path: "../../../public/fonts/the-seasons/theseasons-reg.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/the-seasons/theseasons-it.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../../public/fonts/the-seasons/theseasons-lt.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/fonts/the-seasons/theseasons-ltit.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../../public/fonts/the-seasons/theseasons-bd.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/fonts/the-seasons/theseasons-bdit.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-the-seasons",
  display: "swap",
});

const roslindale = localFont({
  src: [
    {
      path: "../../../public/fonts/roslindale/Roslindale-DisplayCondensedRegular-Testing.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/roslindale/Roslindale-DisplayCondensedItalic-Testing.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../../public/fonts/roslindale/Roslindale-DisplayCondensedLight-Testing.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/fonts/roslindale/Roslindale-DisplayCondensedMedium-Testing.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/roslindale/Roslindale-DisplayCondensedMediumItalic-Testing.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../../public/fonts/roslindale/Roslindale-DisplayCondensedSemiBold-Testing.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../../public/fonts/roslindale/Roslindale-DisplayCondensedSemiBoldItalic-Testing.ttf",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-roslindale",
  display: "swap",
});

const apercuPro = localFont({
  src: [
    {
      path: "../../../public/fonts/apercu-pro/apercu_regular_pro.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/apercu-pro/apercu_regular_italic_pro.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../../public/fonts/apercu-pro/apercu_medium_pro.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/apercu-pro/apercu_medium_italic_pro.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../../public/fonts/apercu-pro/apercu_bold_pro.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/fonts/apercu-pro/apercu_bold_italic_pro.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-apercu-pro",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

type LangParams = { lang: string } | Promise<{ lang: string }>;

const resolveLanguage = async (params: LangParams): Promise<Language> => {
  const { lang } = await params;

  if (!SUPPORTED_LANGUAGES.includes(lang as Language)) {
    notFound();
  }

  return lang as Language;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return SUPPORTED_LANGUAGES.map((lang) => ({ lang }));
}

export const viewport: Viewport = {
  themeColor: "#31405e",
};

export async function generateMetadata({ params }: { params: LangParams }): Promise<Metadata> {
  const lang = await resolveLanguage(params);
  const seo = SEO_LANGUAGES[lang];
  const canonicalPath = getCanonicalPath(lang);
  const alternateLocale = SUPPORTED_LANGUAGES.filter((locale) => locale !== lang).map(
    (locale) => SEO_LANGUAGES[locale].openGraphLocale,
  );

  return {
    title: seo.title,
    description: seo.description,
    metadataBase: new URL(SITE_URL),
    applicationName: "Paparico",
    authors: [{ name: "Paparico" }],
    creator: "Paparico",
    publisher: "Paparico",
    category: "food",
    alternates: {
      canonical: canonicalPath,
      languages: getLanguageAlternates(),
    },
    openGraph: {
      type: "website",
      url: canonicalPath,
      siteName: "Paparico",
      locale: seo.openGraphLocale,
      alternateLocale,
      title: seo.title,
      description: seo.description,
      images: [
        {
          url: OPEN_GRAPH_IMAGE,
          width: OPEN_GRAPH_IMAGE_WIDTH,
          height: OPEN_GRAPH_IMAGE_HEIGHT,
          alt: seo.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [
        {
          url: OPEN_GRAPH_IMAGE,
          alt: seo.imageAlt,
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: LangParams;
}) {
  const lang = await resolveLanguage(params);

  return (
    <html lang={SEO_LANGUAGES[lang].htmlLang}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${theSeasons.variable} ${interTight.variable} ${roslindale.variable} ${apercuPro.variable}`}
      >
        <LanguageProvider initialLanguage={lang}>
          <ToastProvider>{children}</ToastProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
