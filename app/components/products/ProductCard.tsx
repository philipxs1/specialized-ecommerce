import React from "react";
import type { Product } from "~/entities/Bikes";

const ProductCard = ({ title, image, price }: Product) => {
  return (
    <li>
      <article>
        <div className="relative flex h-full flex-col">
          <a href="">
            <figure className="bg-white-gray relative flex aspect-[1/1] items-center justify-center overflow-hidden rounded-t-lg">
              <div>
                <img
                  src={image}
                  alt="product image"
                  className="absolute top-1/2 left-1/2 h-auto max-h-full w-full -translate-x-1/2 -translate-y-1/2 transform rounded-lg"
                />
              </div>
            </figure>
          </a>
          <div className="product-card-border grow rounded-b-lg px-5 pb-3">
            <div className="pt-6">
              <h2 className="block text-2xl font-bold">{title}</h2>
            </div>
            <div className="pt-6">
              <span className="font-bold">${price}</span>
            </div>
          </div>
        </div>
      </article>
    </li>
  );
};

export default ProductCard;
