import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

type PaymentFormProps = {
  totalAmount: number;
};

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

export default function PaymentForm({ totalAmount }: PaymentFormProps) {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // fetch from backend
    fetch("http://localhost:3001/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: totalAmount }), // e.g. $20 cart total
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  if (!clientSecret) return <p>Loading payment form...</p>;

  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <CheckoutForm />
    </Elements>
  );
}
