const BASE_URL = "https://v2.api.noroff.dev/online-shop";

export async function getProducts() {
  const response = await fetch(`${BASE_URL}`);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const json = await response.json();
  return json.data;
}
