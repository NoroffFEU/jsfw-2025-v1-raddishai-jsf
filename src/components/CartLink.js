"use client";

import Link from "next/link";
import { useCart } from "@/context/cart-context";

export default function CartLink() {
  const { totalItems } = useCart();

  return (
    <Link href="/cart" className="cart-link">
      Cart ({totalItems})
    </Link>
  );
}
