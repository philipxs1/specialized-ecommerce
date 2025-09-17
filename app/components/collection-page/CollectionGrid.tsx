import React from "react";

import ProductCard from "./ProductCard";
import type { Product } from "~/entities/Bikes";

interface Props {
  products: Product[];
}

const CollectionGrid: React.FC<Props> = ({ products }) => {
  return (
    <ul
      id="grid"
      className="grid h-full w-full grid-cols-1 items-stretch gap-6 pr-6 md:grid-cols-2 lg:w-[calc(100%-332px)] 2xl:grid-cols-3"
    >
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </ul>
  );
};

export default CollectionGrid;
