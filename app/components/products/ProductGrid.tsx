import React from "react";
import useBikes from "~/hooks/useBikes";
import ProductCard from "./ProductCard";
import type { BikesData, Product } from "~/entities/Bikes";

interface Props {
  bikes: Product[];
}

const ProductGrid: React.FC<Props> = ({ bikes }) => {
  return (
    <ul
      id="grid"
      className="grid h-full w-full grid-cols-1 items-stretch gap-6 px-6 md:w-[calc(100%-332px)] md:grid-cols-2 2xl:grid-cols-3"
    >
      {bikes.map((product, index) => {
        return <ProductCard key={index} {...product} />;
      })}
    </ul>
  );
};

export default ProductGrid;
