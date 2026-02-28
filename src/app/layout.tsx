import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono, Inter_Tight } from "next/font/google";
import "./globals.css";

const theSeasons = localFont({
  src: [
    {
      path: "../../public/fonts/the-seasons/theseasons-reg.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/the-seasons/theseasons-it.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/the-seasons/theseasons-lt.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/the-seasons/theseasons-ltit.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/the-seasons/theseasons-bd.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/the-seasons/theseasons-bdit.otf",
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
      path: "../../public/fonts/roslindale/Roslindale-DisplayCondensedRegular-Testing.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/roslindale/Roslindale-DisplayCondensedItalic-Testing.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/roslindale/Roslindale-DisplayCondensedLight-Testing.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/roslindale/Roslindale-DisplayCondensedMedium-Testing.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/roslindale/Roslindale-DisplayCondensedMediumItalic-Testing.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/roslindale/Roslindale-DisplayCondensedSemiBold-Testing.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/roslindale/Roslindale-DisplayCondensedSemiBoldItalic-Testing.ttf",
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
      path: "../../public/fonts/apercu-pro/apercu_regular_pro.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/apercu-pro/apercu_regular_italic_pro.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/apercu-pro/apercu_medium_pro.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/apercu-pro/apercu_medium_italic_pro.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/apercu-pro/apercu_bold_pro.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/apercu-pro/apercu_bold_italic_pro.otf",
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

// Temporarily hardcoded to preview URL for card testing; revert to env/default when merging.
const siteUrl = "https://paparico-website-git-feat-new-version-rian-martins-projects.vercel.app/";

export const metadata: Metadata = {
  title: "Paparico",
  description: "O sabor do bolo de rolo tradicional de Pernambuco no coração de Portugal",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Paparico",
    description: "O sabor do bolo de rolo tradicional de Pernambuco no coração de Portugal",
    images: [
      {
        url: "/hero-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bolo de rolo Paparico",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Paparico",
    description: "O sabor do bolo de rolo tradicional de Pernambuco no coração de Portugal",
    images: ["/hero-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${theSeasons.variable} ${interTight.variable} ${roslindale.variable} ${apercuPro.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
