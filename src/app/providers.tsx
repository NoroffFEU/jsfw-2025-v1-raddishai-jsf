"use client";

import { CartProvider } from "@/context/cart-context";
import type { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return <CartProvider>{children}</CartProvider>;
}
