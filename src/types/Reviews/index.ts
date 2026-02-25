import { type Language } from "@/i18n/translations";

export type Review = {
  name: string;
  origin: string;
  headline: string;
  rating: number; // 1–5
  text: string;
};

export type ReviewsByLanguage = Record<Language, Review[]>;
