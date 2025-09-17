import React from "react";
import type { Tile } from "~/entities/HomepageNavTiles";

type Props = Tile;

const CarouselTile = ({ link, image, title }: Props) => {
  return (
    <a
      href={link}
      className="tile-transform flex flex-col overflow-hidden rounded-lg shadow-md"
    >
      <img
        src={image}
        alt={title}
        className="aspect-[1/1] w-full object-cover"
      />
      <div className="flex bg-white p-6">
        <h2 className="text-2xl font-bold break-words">{title}</h2>
      </div>
    </a>
  );
};

export default CarouselTile;
