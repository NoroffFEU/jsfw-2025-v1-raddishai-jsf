import styles from "./Header.module.css";
import Link from "next/link";
import CartLink from "./CartLink";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand}>
          JS Frameworks Shop
        </Link>

        <nav className={styles.nav}>
          <CartLink />
        </nav>
      </div>
    </header>
  );
}
