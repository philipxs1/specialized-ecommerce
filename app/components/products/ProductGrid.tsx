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
      className="grid h-full w-full grid-cols-1 items-stretch gap-6 pr-6 md:grid-cols-2 lg:w-[calc(100%-332px)] 2xl:grid-cols-3"
    >
      {bikes.map((product, index) => {
        return <ProductCard key={index} {...product} />;
      })}
    </ul>
  );
};

export default ProductGrid;
