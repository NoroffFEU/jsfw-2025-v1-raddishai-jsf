"use client";

import { useCart } from "@/context/cart-context";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function CheckoutPage() {
  const { checkout } = useCart();
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();

    checkout();
    router.push("/success");
  }

  return (
    <main className={`container ${styles.page}`}>
      <h1 className={styles.title}>Checkout</h1>

      <section className={styles.card}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="fullName">
              Full Name
            </label>
            <input
              className={styles.input}
              id="fullName"
              type="text"
              name="fullName"
              required
              minLength={3}
              autoComplete="name"
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <input
              className={styles.input}
              id="email"
              type="email"
              name="email"
              required
              autoComplete="email"
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="address">
              Address
            </label>
            <input
              className={styles.input}
              id="address"
              type="text"
              name="address"
              required
              autoComplete="street-address"
            />
          </div>

          <div className={styles.actions}>
            <button type="submit" className="button primary">
              Complete Purchase
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
