import type { Product } from "@/types/product";

const BASE_URL = "https://v2.api.noroff.dev/online-shop";

interface ProductsResponse {
  data: Product[];
}

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const json: ProductsResponse = await response.json();
  return json.data;
}

export async function getProductById(id: string): Promise<Product> {
  const products = await getProducts();
  const product = products.find((p) => p.id === id);

  if (!product) {
    throw new Error("Product not found");
  }

  return product;
}
