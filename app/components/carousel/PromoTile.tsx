import type { Tile } from "~/entities/HomepageNavTiles";

type Props = Tile;

const PromoTile = ({ link, image, title }: Props) => {
  return (
    <a
      href={link}
      className="tile-transform relative flex h-full flex-col overflow-hidden rounded-lg shadow-xl"
    >
      <img
        src={image}
        alt={title}
        className="absolute h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(181.63deg, rgba(0, 0, 0, 0) 21.69%, rgba(0, 0, 0, 0.7) 93.89%)",
        }}
      />
      <h2 className="absolute bottom-0 z-1 p-6 text-3xl font-bold break-words text-white">
        {title}
      </h2>
    </a>
  );
};

export default PromoTile;
