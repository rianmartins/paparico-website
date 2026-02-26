import { productGrid } from "@/data/products";
import { type GridSource } from "@/types/Products";

export class ProductsAPI {
  static async getItems(): Promise<GridSource> {
    // Mocked backend call returning canonical product grid.
    return Promise.resolve(productGrid);
  }
}
