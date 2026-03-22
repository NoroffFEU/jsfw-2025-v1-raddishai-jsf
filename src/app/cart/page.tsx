"use client";

import Link from "next/link";
import { useCart } from "@/context/cart-context";
import styles from "./page.module.css";

export default function CartPage() {
  const { itemsArray, totalPrice, setQty, clear } = useCart();

  return (
    <main className={`container ${styles.page}`}>
      <h1>Your Cart</h1>

      {itemsArray.length === 0 ? (
        <>
          <p>Your cart is empty.</p>
          <Link href="/">← Continue shopping</Link>
        </>
      ) : (
        <>
          <ul className={styles.list}>
            {itemsArray.map(({ product, quantity }) => (
              <li key={product.id} className={styles.item}>
                <div className={styles.itemInfo}>
                  <span className={styles.itemTitle}>{product.title}</span>
                  <span className={styles.itemPrice}>
                    ${product.price} × {quantity}
                  </span>
                </div>

                <div className={styles.controls}>
                  <button
                    className={styles.qtyButton}
                    onClick={() => setQty(product.id, quantity - 1)}
                    aria-label={`Decrease quantity for ${product.title}`}
                  >
                    −
                  </button>

                  <span className={styles.qtyValue}>{quantity}</span>

                  <button
                    className={styles.qtyButton}
                    onClick={() => setQty(product.id, quantity + 1)}
                    aria-label={`Increase quantity for ${product.title}`}
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className={styles.summary}>
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          <div className={styles.actions}>
            <Link className="button primary" href="/checkout">
              Go to checkout →
            </Link>

            <button className="danger" onClick={clear}>
              Clear cart
            </button>
          </div>
        </>
      )}
    </main>
  );
}
