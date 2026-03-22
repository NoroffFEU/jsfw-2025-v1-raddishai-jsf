import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Providers } from "./providers";
import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JS Frameworks Shop",
  description: "A simple online shop built with Next.js",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="app-shell">
            <Header />
            <div className="app-content">{children}</div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
