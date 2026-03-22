import { getProducts } from "@/services/products";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/types/product";

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="container">
      <h1>JS Frameworks Shop</h1>

      <ul className="product-grid">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </main>
  );
}
