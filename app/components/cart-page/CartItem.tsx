import React from "react";
import { useCartStore } from "~/context/useCartStore";
import type { CartItem } from "~/entities/CartItem";
import { formatPrice } from "~/helpers/helpers";
import Icon from "~/ui/Icon/Icon";

const CartItem = ({ title, image, price, id, quantity }: CartItem) => {
  const addItem = useCartStore((state) => state.addItem);
  const removeItem = useCartStore((state) => state.removeItem);
  const increase = useCartStore((state) => state.increaseQuantity);
  const decrease = useCartStore((state) => state.decreaseQuantity);

  return (
    <li className="rounded-lg bg-white p-4">
      <div className="flex gap-8">
        <div className="w-[180px] max-w-[180px] basis-[180px]">
          <div className="bg-white-gray flex items-center justify-center rounded-lg">
            <img
              src={image}
              alt="Product Image"
              className="aspect-square overflow-hidden object-contain"
            />
          </div>
        </div>
        <div className="flex flex-3/4 flex-col">
          <div className="border-white-gray flex justify-between border-b-2 pb-4">
            <h2 className="font-bold">{title}</h2>
            <span className="font-bold">{formatPrice(price)}</span>
          </div>
          <div className="flex h-full items-end justify-between">
            <div>
              <div
                key={id}
                className="flex h-8 w-fit items-center justify-center gap-2 rounded-sm border border-black px-3 py-1"
              >
                <button className="cursor-pointer" onClick={() => decrease(id)}>
                  <Icon id="minus" />
                </button>
                <p>{quantity}</p>
                <button className="cursor-pointer" onClick={() => increase(id)}>
                  <Icon id="plus" />
                </button>
              </div>
            </div>
            <div>
              {" "}
              <div
                key={id}
                className="flex h-8 w-fit items-center justify-center gap-2 rounded-sm border border-black px-3 py-1"
              >
                <button
                  className="cursor-pointer"
                  onClick={() => removeItem(id)}
                >
                  Delete Item
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
