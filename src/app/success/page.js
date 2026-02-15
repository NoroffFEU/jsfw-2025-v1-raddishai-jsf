"use client";

import Link from "next/link";
import { useCart } from "@/context/cart-context";

export default function SuccessPage() {
  const { lastOrder } = useCart();

  return (
    <main className="container">
      <h1>Success</h1>

      {!lastOrder ? (
        <>
          <p>No order found.</p>
          <Link href="/">← Back to shop</Link>
        </>
      ) : (
        <>
          <p>Your order has been placed.</p>

          <h2>Order summary</h2>

          <ul>
            {lastOrder.items.map(({ product, quantity }) => (
              <li key={product.id}>
                <strong>{product.title}</strong> — {quantity} × ${product.price}
              </li>
            ))}
          </ul>

          <p>
            <strong>Total:</strong> ${lastOrder.totalPrice.toFixed(2)}
          </p>

          <Link href="/">← Back to shop</Link>
        </>
      )}
    </main>
  );
}
