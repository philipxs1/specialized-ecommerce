import React, { useEffect } from "react";
import { useSearchParams } from "react-router";
import { useCartStore } from "~/context/useCartStore";

const index = () => {
  const clearCart = useCartStore((state) => state.clearCart);
  const [searchParams] = useSearchParams();
  const redirectStatus = searchParams.get("redirect_status");

  useEffect(() => {
    if (redirectStatus === "succeeded") {
      clearCart();
    }
  }, [clearCart, searchParams]);

  return (
    <div className="mx-auto flex w-full max-w-[1200px] p-6">
      <div className="flex w-full flex-col gap-2">
        <h1 className="text-2xl">Thank you for your order! 🚲 </h1>
        {redirectStatus === "succeeded" ? (
          <p>🎉 Payment successful!</p>
        ) : (
          <p>⚠️ Something went wrong.</p>
        )}
      </div>
    </div>
  );
};

export default index;
