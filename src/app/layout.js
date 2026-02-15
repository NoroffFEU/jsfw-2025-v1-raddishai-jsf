import "./globals.css";
import Header from "@/components/Header";
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
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
