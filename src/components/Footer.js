import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p>© {new Date().getFullYear()} JS Frameworks Shop</p>
        <p>Built with Next.js</p>
      </div>
    </footer>
  );
}
