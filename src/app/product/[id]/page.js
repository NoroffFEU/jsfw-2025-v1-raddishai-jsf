import styles from "./page.module.css";
import AddToCartButton from "@/components/AddToCartButton";
import { getProductById } from "@/services/products";
import Image from "next/image";
import Link from "next/link";

export default async function ProductPage({ params }) {
  const { id } = await params;
  const product = await getProductById(id);

  return (
    <main className={`container ${styles.page}`}>
      <Link href="/" className={styles.backLink}>
        ← Back to shop
      </Link>

      <div className={styles.content}>
        <div className={styles.imageWrap}>
          <Image
            src={product.image.url}
            alt={product.image.alt || product.title}
            width={600}
            height={600}
            sizes="(min-width: 800px) 420px, 100vw"
          />
        </div>

        <div className={styles.details}>
          <h1 className={styles.title}>{product.title}</h1>

          <p className={styles.price}>${product.price}</p>

          <div className={styles.actions}>
            <AddToCartButton product={product} />
          </div>

          <p className={styles.description}>{product.description}</p>
        </div>
      </div>
    </main>
  );
}
