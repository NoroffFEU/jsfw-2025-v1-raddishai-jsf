import styles from "./page.module.css";
import AddToCartButton from "@/components/AddToCartButton";
import { getProductById } from "@/services/products";
import Image from "next/image";
import Link from "next/link";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProductById(id);

  const hasDiscount =
    product.discountedPrice !== undefined &&
    product.discountedPrice < product.price;

  const displayPrice = hasDiscount ? product.discountedPrice : product.price;

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

          {product.rating !== undefined && (
            <p className={styles.rating}>Rating: {product.rating}/5</p>
          )}

          <p className={styles.price}>
            {hasDiscount ? (
              <>
                <span className={styles.oldPrice}>${product.price}</span>
                <span className={styles.discounted}>${displayPrice}</span>
              </>
            ) : (
              <>${product.price}</>
            )}
          </p>

          <div className={styles.actions}>
            <AddToCartButton product={product} />
          </div>

          <p className={styles.description}>{product.description}</p>

          {product.tags && product.tags.length > 0 && (
            <div className={styles.tags}>
              {product.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          )}

          <section className={styles.reviewsSection}>
            <h2 className={styles.reviewsTitle}>Reviews</h2>

            {product.reviews && product.reviews.length > 0 ? (
              <ul className={styles.reviewsList}>
                {product.reviews.map((review, index) => (
                  <li
                    key={review.id || `${review.username || "review"}-${index}`}
                    className={styles.reviewItem}
                  >
                    <p className={styles.reviewMeta}>
                      <strong>{review.username || "Anonymous"}</strong>
                      {review.rating !== undefined && ` · ${review.rating}/5`}
                    </p>
                    <p>{review.description || "No review text provided."}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className={styles.noReviews}>No reviews yet.</p>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
