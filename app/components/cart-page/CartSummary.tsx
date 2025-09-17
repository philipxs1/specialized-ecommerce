import { useCartStore } from "~/context/useCartStore";
import type { CartItem } from "~/entities/CartItem";
import { formatPrice } from "~/helpers/helpers";

const CartSummary = () => {
  const items = useCartStore((state) => state.items);
  const totalPrice = useCartStore((state) => state.totalPrice);
  const fees = useCartStore((state) => state.fees);

  const total = totalPrice();

  return (
    <div className="bg-white-gray rounded-lg px-14 py-15">
      <div className="pb-10">
        <h1 className="text-2xl font-bold">Order summmary</h1>
      </div>
      <div className="pb-2">
        {items.map((item) => (
          <SummaryItem
            item={{ ...item, image: item.image ?? "/placeholder.png" }}
          />
        ))}
      </div>
      <div className="border-black-lighter border-t pt-8 pb-10">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h4 className="text-xl font-bold">Subtotal</h4>
            <p>{formatPrice(total)}</p>
          </div>
          <div className="flex items-center justify-between">
            <h4>Ship to Home</h4>
            <p>{formatPrice(fees)}</p>
          </div>
        </div>
      </div>
      <div className="border-black-lighter border-t pt-8">
        <div>
          <div className="flex items-center justify-between">
            <h4 className="text-xl font-bold">Order Total</h4>
            <p>{formatPrice(total + fees)}</p>
          </div>
        </div>
      </div>
      <div className="pt-10">
        <p className="text-xs">Total Cost Including GST</p>
      </div>
    </div>
  );
};

export default CartSummary;

const SummaryItem = ({ item }: { item: CartItem }) => {
  const { title, image, price, colour, quantity } = item;
  return (
    <div className="border-black-lighter flex gap-2 border-t pt-8 pb-2">
      <div className="w-[180px] max-w-[180px] flex-1/4 basis-[180px]">
        <a
          className="bg-white-gray flex items-center justify-center rounded-lg"
          href=""
        >
          <img
            src={image ?? "/placeholder.png"}
            alt="Product Image"
            className="aspect-square overflow-hidden object-contain"
          />
        </a>
      </div>
      <div className="block max-w-full min-w-0 flex-2/4">
        <h3 className="font-bold">{title}</h3>
        <p className="overflow-hidden text-sm font-normal text-ellipsis whitespace-nowrap">
          Colour: {colour}
        </p>
        <p className="text-sm font-normal">Price: {formatPrice(price)}</p>
        <p className="text-sm font-normal">Qty: {quantity}</p>
      </div>
      <p className="flex-1/4 text-sm">{formatPrice(price)}</p>
    </div>
  );
};
