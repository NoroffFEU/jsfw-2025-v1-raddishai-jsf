const BASE_URL = "https://v2.api.noroff.dev/online-shop";

export async function getProducts() {
  const response = await fetch(`${BASE_URL}`);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const json = await response.json();
  return json.data;
}

export async function getProductById(id) {
  const products = await getProducts();
  const product = products.find((p) => p.id === id);

  if (!product) {
    throw new Error("Product not found");
  }

  return product;
}
