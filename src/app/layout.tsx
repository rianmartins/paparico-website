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

export const metadata: Metadata = {
  title: "Paparico",
  description: "O sabor do bolo de rolo tradicional de Pernambuco no coração de Portugal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${theSeasons.variable} ${interTight.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
