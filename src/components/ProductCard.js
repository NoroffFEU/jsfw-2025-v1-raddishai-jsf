import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <li style={{ marginBottom: 20 }}>
      <Image
        src={product.image.url}
        alt={product.image.alt || product.title}
        width={150}
        height={150}
      />

      <h3>{product.title}</h3>
      <p>${product.price}</p>
    </li>
  );
}
