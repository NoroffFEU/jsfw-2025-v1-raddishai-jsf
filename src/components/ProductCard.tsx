import styles from "./ProductCard.module.css";
import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const hasDiscount =
    product.discountedPrice && product.discountedPrice < product.price;

  return (
    <li className={styles.card}>
      <Link href={`/product/${product.id}`}>
        <div className={styles.imageWrap}>
          <Image
            src={product.image?.url || "/placeholder.png"}
            alt={product.image?.alt || product.title}
            width={300}
            height={300}
          />
        </div>

        <h3 className={styles.title}>{product.title}</h3>
      </Link>

      <div className={styles.priceRow}>
        {hasDiscount ? (
          <>
            <span className={styles.oldPrice}>${product.price}</span>
            <span className={styles.discounted}>
              ${product.discountedPrice}
            </span>
          </>
        ) : (
          <span className={styles.price}>${product.price}</span>
        )}
      </div>
    </li>
  );
}
