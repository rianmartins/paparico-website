import { notFound } from "next/navigation";

import ProductsService from "@/services/ProductsService";
import { ReviewsService } from "@/services/ReviewsService";
import { SUPPORTED_LANGUAGES, type Language } from "@/i18n/translations";
import { buildHomePageJsonLd, buildOrganizationJsonLd, buildWebsiteJsonLd } from "@/lib/seo";

import HomePageClient from "./HomePage";

type HomePageProps = {
  params: Promise<{ lang: string }>;
};

const serializeJsonLd = (data: object) => JSON.stringify(data).replace(/</g, "\\u003c");

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}

export default async function HomePage({ params }: HomePageProps) {
  const { lang: paramLang } = await params;

  if (!SUPPORTED_LANGUAGES.includes(paramLang as Language)) {
    notFound();
  }

  const lang = paramLang as Language;
  const [gridItems, reviews] = await Promise.all([
    ProductsService.getItems(lang),
    ReviewsService.getItems(lang),
  ]);

  return (
    <>
      <JsonLd data={buildOrganizationJsonLd(lang)} />
      <JsonLd data={buildWebsiteJsonLd(lang)} />
      <JsonLd data={buildHomePageJsonLd(lang)} />
      <HomePageClient gridItems={gridItems} reviews={reviews} />
    </>
  );
}
