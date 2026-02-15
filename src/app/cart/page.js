"use client";

import { useCart } from "@/context/cart-context";
import Link from "next/link";

export default function CartPage() {
  const { itemsArray, totalPrice, setQty, clear } = useCart();

  return (
    <main className="container">
      <h1>Your Cart</h1>

      {itemsArray.length === 0 ? (
        <>
          <p>Your cart is empty.</p>
          <Link href="/">← Continue shopping</Link>
        </>
      ) : (
        <>
          <ul>
            {itemsArray.map(({ product, quantity }) => (
              <li key={product.id}>
                <strong>{product.title}</strong>

                <p>
                  ${product.price} × {quantity}
                </p>

                <div>
                  <button onClick={() => setQty(product.id, quantity - 1)}>
                    -
                  </button>

                  <button onClick={() => setQty(product.id, quantity + 1)}>
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <h2>Total: ${totalPrice.toFixed(2)}</h2>

          <Link href="/checkout">Go to checkout →</Link>

          <button onClick={clear}>Clear cart</button>
        </>
      )}
    </main>
  );
}
