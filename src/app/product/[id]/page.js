import { getProductById } from "@/services/products";
import Image from "next/image";
import Link from "next/link";

export default async function ProductPage({ params }) {
  const { id } = await params;
  const product = await getProductById(id);

  return (
    <main style={{ padding: 24 }}>
      <Link href="/" style={{ display: "inline-block", marginBottom: 20 }}>
        ← Back to shop
      </Link>

      <h1>{product.title}</h1>

      <Image
        src={product.image.url}
        alt={product.image.alt || product.title}
        width={300}
        height={300}
      />

      <p>${product.price}</p>
      <p>{product.description}</p>
    </main>
  );
}
