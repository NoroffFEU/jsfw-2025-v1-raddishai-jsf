"use client";

import { useCart } from "@/context/cart-context";

export default function AddToCartButton({ product }) {
  const { add } = useCart();

  return (
    <button type="button" onClick={() => add(product)}>
      Add to cart
    </button>
  );
}
