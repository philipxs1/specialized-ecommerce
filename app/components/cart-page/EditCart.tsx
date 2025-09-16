import CartItem from "./CartItem";
import { formatPrice } from "~/helpers/helpers";
import { useCartStore } from "~/context/useCartStore";

type Props = {
  setStep: (step: number) => void;
};

const EditCart = ({ setStep }: Props) => {
  const items = useCartStore((state) => state.items);
  const fees = useCartStore((state) => state.fees);
  const clearCart = useCartStore((state) => state.clearCart);
  const totalQuantity = useCartStore((state) => state.totalQuantity());
  const totalPrice = useCartStore((state) => state.totalPrice());

  return (
    <div className="relative">
      <div className="grid grid-cols-[var(--grid-columns-set)] gap-10 p-10">
        <div className="">
          <div className="flex items-baseline gap-2">
            <h2 className="text-xl font-bold">Cart</h2>
            {totalQuantity > 0 && (
              <span>
                ({totalQuantity} {totalQuantity === 1 ? "Item" : "Items"})
              </span>
            )}
          </div>
          <div className="mt-8">
            <div className="bg-white-gray rounded-lg p-4 pt-10">
              <ul className="flex flex-col gap-4">
                {items.map((item) => (
                  <CartItem key={item.id} {...item} image={item.image ?? ""} />
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="sticky top-0 overflow-y-hidden pt-4">
            <div className="flex flex-col gap-5">
              <div>
                <h2 className="text-xl font-bold">Order Summary</h2>
              </div>
              <div className="border-white-gray flex justify-between border-b-2 pb-4">
                <h4 className="font-bold">Subtotal</h4>
                <h4>{formatPrice(totalPrice)}</h4>
              </div>
              <div className="border-white-gray border-b-2 pb-4">
                <div>
                  <h4 className="font-bold">Estimated Fees</h4>
                </div>
                <div className="flex justify-between">
                  <h4>Ship to home</h4>
                  <h4>{formatPrice(fees)}</h4>
                </div>
              </div>
              <div className="border-white-gray flex justify-between border-b-2 pb-4">
                <h4 className="font-bold">Estimated Total</h4>
                <h4>{formatPrice(totalPrice + fees)}</h4>
              </div>
            </div>
            <div className="pt-4">
              <button
                onClick={() => setStep(1)}
                className="w-full cursor-pointer rounded-sm bg-black p-4 text-white"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCart;
