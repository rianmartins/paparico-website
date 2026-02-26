import {
  productGrid,
  sizes as sizeDictionary,
  flavors as flavorDictionary,
  texts as textDictionary,
} from "@/data/products";
import { type Language } from "@/i18n/translations";
import { ProductsAPI } from "@/api/ProductsAPI";
import { type GridSection, type GridSource, type Localized } from "@/types/Products";

const pickLocalized = (dict: Record<string, Localized>, id: string, lang: Language) =>
  dict[id]?.[lang] ?? dict[id]?.pt ?? id;

export class ProductsService {
  static async getItems(lang: Language): Promise<GridSection[]> {
    return ProductsAPI.getItems().then((grid) => this.materializeGrid(lang, grid));
  }

  static materializeGrid(lang: Language, grid: GridSource = productGrid): GridSection[] {
    return grid.map((entry) =>
      entry.type === "item"
        ? {
            type: "item",
            id: entry.id,
            image: entry.image,
            href: entry.href,
            openInNewTab: entry.openInNewTab,
            sizes: entry.sizes.map((size) => ({
              title: pickLocalized(sizeDictionary, size.id, lang),
              price: size.price,
            })),
            flavors: entry.flavors.map((flavorId) =>
              pickLocalized(flavorDictionary, flavorId, lang)
            ),
          }
        : {
            type: "text",
            id: entry.id,
            title: pickLocalized(textDictionary, entry.titleId, lang),
            text: entry.paragraphIds.map((paragraphId) =>
              pickLocalized(textDictionary, paragraphId, lang)
            ),
          }
    );
  }
}
