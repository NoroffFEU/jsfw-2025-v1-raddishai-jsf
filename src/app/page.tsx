"use client";

import { useEffect, useState } from "react";
import { getProducts } from "@/services/products";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/types/product";
import styles from "./page.module.css";

function getDisplayPrice(product: Product): number {
  return product.discountedPrice !== undefined &&
    product.discountedPrice < product.price
    ? product.discountedPrice
    : product.price;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("default");

  useEffect(() => {
    async function fetchProducts() {
      const data = await getProducts();
      setProducts(data);
    }

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase()),
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "price-asc") {
      return getDisplayPrice(a) - getDisplayPrice(b);
    }

    if (sortOrder === "price-desc") {
      return getDisplayPrice(b) - getDisplayPrice(a);
    }

    return 0;
  });

  return (
    <main className="container">
      <h1>JS Frameworks Shop</h1>

      <div className={styles.toolbar}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className={styles.sortSelect}
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="default">Sort by</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>

      {sortedProducts.length === 0 ? (
        <p>No products matched your search.</p>
      ) : (
        <ul className="product-grid">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      )}
    </main>
  );
}
