import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu de Natal | Paparico",
  description: "Celebre o Natal com os sabores especiais do Paparico.",
};

export default function ChristmasMenuLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
