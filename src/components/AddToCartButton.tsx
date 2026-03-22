"use client";

import { useCart } from "@/context/cart-context";
import type { Product } from "@/types/product";

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { add } = useCart();

  return (
    <button className="primary" onClick={() => add(product)}>
      Add to cart
    </button>
  );
}
