"use client";

import Link from "next/link";
import { useCart } from "@/context/cart-context";
import styles from "./CartLink.module.css";

export default function CartLink() {
  const { totalItems } = useCart();

  return (
    <Link href="/cart" className={styles.link}>
      Cart
      {totalItems > 0 && <span className={styles.badge}>{totalItems}</span>}
    </Link>
  );
}
