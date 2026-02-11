import "./globals.css";

export const metadata = {
  title: "JS Frameworks Shop",
  description: "A simple online shop built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
