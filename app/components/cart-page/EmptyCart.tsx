import React from "react";

const EmptyCart = () => {
  return (
    <div className="p-10">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl">Cart</h1>
          <p className="font-bold">Your shopping cart is empty.</p>
        </div>
        <div className="inline-block">
          <a
            href="/shop/bikes"
            className="rounded-sm border border-black px-4 py-2"
          >
            Shop Bikes
          </a>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
