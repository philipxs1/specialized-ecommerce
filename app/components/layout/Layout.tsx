import React from "react";
import SideBar from "../sidebar/SideBar";
import ProductGrid from "../products/ProductGrid";

const Layout = ({ title, showCarousel }) => {
  return (
    <div>
      <div className="mx-6 my-6">
        <h1 className="text-2xl font-bold">
          {title}
          &nbsp;
          <span className="text-lg font-normal">
            ({products?.allBikes.length})
          </span>
        </h1>
      </div>
      {showCarousel && <Carousel tiles={tiles.bikes} promo={tiles.promos} />}
      <div className="relative mx-auto my-0 flex max-w-[var(--setmax-width)] py-4">
        <SideBar filters={filters} />
        <ProductGrid bikes={products?.allBikes ?? []} />
      </div>
    </div>
  );
};

export default Layout;
