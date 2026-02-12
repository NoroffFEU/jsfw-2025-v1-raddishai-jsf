import { getProducts } from "@/services/products";
import ProductCard from "@/components/ProductCard";

export default async function Home() {
  const products = await getProducts();

  console.log(products);

  return (
    <main style={{ padding: 24 }}>
      <h1>JS Frameworks Shop</h1>

      <ul>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </main>
  );
}
