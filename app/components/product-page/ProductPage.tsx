import { useState } from "react";

import ImageGallery from "./ImageGallery";
import ProductDetails from "./ProductDetails";

import { useCartStore } from "~/context/useCartStore";
import { formatPrice } from "~/helpers/helpers";

type Variant = {
  id: string;
  colour: string;
  images: string[];
};

interface ProductPageProps {
  id: string;
  title: string;
  description: string;
  descriptionHtml: string;
  price: number;
  variants?: Variant[];
  defaultVariant: Variant;
}

const ProductPage = ({
  id,
  title,
  description,
  descriptionHtml,
  price,
  variants,
}: ProductPageProps) => {
  const [selectedId, setSelectedId] = useState(0);
  const addItem = useCartStore((state) => state.addItem);

  if (!variants || variants.length === 0) {
    return <p>loading product</p>;
  }
  const selectedVariant = variants[selectedId];

  return (
    <div className="product-grid max-w-[1920px]">
      <div className="max-w-full [grid-area:gallery]">
        <ImageGallery selectedVariant={selectedVariant} />
      </div>
      <div className="w-full [grid-area:side-panel]">
        <div className="sticky top-10 p-10">
          <div className="flex flex-col gap-5 border-b-2 border-gray-300 pb-8">
            <div>
              <h1 className="text-2xl font-bold">{title}</h1>
            </div>
            <div className="">
              <h5 className="text-2xl font-normal">{formatPrice(price)}</h5>
            </div>
            <div>
              <p className="line-clamp-2">{description}</p>
              <button className="cursor-pointer underline">Read More...</button>
            </div>
          </div>

          <div className="flex gap-4 border-b-2 border-gray-300 py-8">
            {variants.map((variant, index) => (
              <button
                key={variant.id}
                onClick={() => setSelectedId(index)}
                className={`hover:bg-black-lighter rounded-lg border px-4 py-2 transition-colors ${
                  selectedVariant.id === variant.id
                    ? "bg-black-darker text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {variant.colour}
              </button>
            ))}
          </div>
          <div className="py-8">
            <button
              onClick={() =>
                addItem({
                  id: selectedVariant.id,
                  title,
                  price: Number(price),
                  image: selectedVariant.images?.[0],
                  colour: selectedVariant.colour,
                })
              }
              className="bg-black-darker text-white-headers hover:bg-black-lighter w-full cursor-pointer rounded-sm px-10 py-4 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-b-2 border-gray-300 p-10 [grid-area:content]">
        <div>
          <div className="pb-10">
            <h2 className="text-2xl font-bold">Product Details</h2>
          </div>

          <ProductDetails descriptionHtml={descriptionHtml} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
