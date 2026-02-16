import styles from "./ProductCard.module.css";
import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <li className={styles.card}>
      <Link href={`/product/${product.id}`}>
        <div className={styles.imageWrap}>
          <Image
            src={product.image.url}
            alt={product.image.alt || product.title}
            width={300}
            height={300}
          />
        </div>

        <h3 className={styles.title}>{product.title}</h3>
      </Link>

      <div className={styles.priceRow}>
        <span className={styles.price}>${product.price}</span>
      </div>
    </li>
  );
}
