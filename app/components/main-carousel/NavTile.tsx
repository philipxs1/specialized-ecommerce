import type { Tile } from "~/entities/HomepageNavTiles";
import Icon from "~/ui/Icon/Icon";
``;

type Props = Tile;

const NavTile = ({ title, image, link }: Props) => {
  return (
    <a
      href={link}
      className="group relative flex aspect-[1/1] w-full max-w-[650px] overflow-hidden rounded-[8px]"
    >
      <div
        id="image"
        className="absolute h-full w-full rounded-[8px] bg-cover"
        style={{
          backgroundImage: `linear-gradient(
      0deg,
      rgb(0, 0, 0) 15%,
      rgba(0, 0, 0, 0.8) 25%,
      rgba(0, 0, 0, 0) 50%
    ), url(${image})`,
        }}
      />

      <div className="absolute top-0 flex h-full w-full items-end justify-start p-6 text-white">
        <h3 className="text-[1.5rem] font-bold">{title}</h3>
        <div className="flex grow-1 -translate-x-2.5 justify-end opacity-0 duration-500 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
          <Icon id="arrow-right" size={32} />
        </div>
      </div>
    </a>
  );
};

export default NavTile;
