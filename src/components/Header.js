"use client";

import Link from "next/link";
import CartLink from "./CartLink";

export default function Header() {
  return (
    <header className="site-header">
      <nav className="nav">
        <Link href="/" className="logo">
          JS Frameworks Shop
        </Link>

        <CartLink />
      </nav>
    </header>
  );
}
