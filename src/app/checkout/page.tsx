"use client";

import { useState, type FormEvent } from "react";
import { useCart } from "@/context/cart-context";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

interface CheckoutErrors {
  fullName?: string;
  email?: string;
  address?: string;
}

export default function CheckoutPage() {
  const { checkout } = useCart();
  const router = useRouter();
  const [errors, setErrors] = useState<CheckoutErrors>({});

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const newErrors: CheckoutErrors = {};

    const fullName = String(formData.get("fullName") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const address = String(formData.get("address") || "").trim();

    if (fullName.length < 3) {
      newErrors.fullName = "Please enter your full name.";
    }

    if (!email.includes("@")) {
      newErrors.email = "Please enter a valid email.";
    }

    if (address.length < 3) {
      newErrors.address = "Please enter your address.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

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
              className={`${styles.input} ${
                errors.fullName ? styles.errorInput : ""
              }`}
              id="fullName"
              type="text"
              name="fullName"
              autoComplete="name"
            />
            {errors.fullName && (
              <span className={styles.errorMessage}>{errors.fullName}</span>
            )}
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <input
              className={`${styles.input} ${
                errors.email ? styles.errorInput : ""
              }`}
              id="email"
              type="email"
              name="email"
              autoComplete="email"
            />
            {errors.email && (
              <span className={styles.errorMessage}>{errors.email}</span>
            )}
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="address">
              Address
            </label>
            <input
              className={`${styles.input} ${
                errors.address ? styles.errorInput : ""
              }`}
              id="address"
              type="text"
              name="address"
              autoComplete="street-address"
            />
            {errors.address && (
              <span className={styles.errorMessage}>{errors.address}</span>
            )}
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
