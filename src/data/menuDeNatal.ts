import { type ReactNode } from "react";

export type ChristmasMenuItem = {
  image: string;
  title: string;
  description: string | ReactNode;
  price: number;
  moreInfo?: string;
};
