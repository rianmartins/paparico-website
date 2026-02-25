import { type Language } from "@/i18n/translations";

export type Localized = Record<Language, string>;

export type GridItemSource = {
  type: "item";
  id: string;
  image: string;
  sizes: { id: string; price: number }[];
  flavors: string[];
  href?: string;
  openInNewTab?: boolean;
};

export type GridTextSource = {
  type: "text";
  id: string;
  titleId: string;
  paragraphIds: string[];
};

export type GridSource = Array<GridItemSource | GridTextSource>;

export type GridSection =
  | {
      type: "item";
      id: string;
      image: string;
      sizes: { title: string; price: number }[];
      flavors: string[];
      href?: string;
      openInNewTab?: boolean;
    }
  | {
      type: "text";
      id: string;
      title: string;
      text: string[];
    };
