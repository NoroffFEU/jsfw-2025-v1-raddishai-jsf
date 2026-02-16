import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Providers } from "./providers";

export const metadata = {
  title: "JS Frameworks Shop",
  description: "A simple online shop built with Next.js",
};

export default function RootLayout({ children }) {
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
