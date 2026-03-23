import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p>© {new Date().getFullYear()} JS Frameworks Shop</p>
        <p>
          Built by{" "}
          <Link
            href="https://raddishaisportfolio.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            RaddishAI
          </Link>
        </p>
      </div>
    </footer>
  );
}
