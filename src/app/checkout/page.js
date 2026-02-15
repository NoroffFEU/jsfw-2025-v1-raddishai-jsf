"use client";

import { useCart } from "@/context/cart-context";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { checkout } = useCart();
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();

    checkout();
    router.push("/success");
  }

  return (
    <main className="container">
      <h1>Checkout</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Full Name
            <input type="text" name="fullName" required minLength={3} />
          </label>
        </div>

        <div>
          <label>
            Email
            <input type="email" name="email" required />
          </label>
        </div>

        <div>
          <label>
            Address
            <input type="text" name="address" required />
          </label>
        </div>

        <button type="submit">Complete Purchase</button>
      </form>
    </main>
  );
}
