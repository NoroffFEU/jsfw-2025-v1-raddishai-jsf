import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <li style={{ marginBottom: 20 }}>
      <Link href={`/product/${product.id}`}>
        <Image
          src={product.image.url}
          alt={product.image.alt || product.title}
          width={150}
          height={150}
        />
        <h3>{product.title}</h3>
      </Link>

      <p>${product.price}</p>
    </li>
  );
}
