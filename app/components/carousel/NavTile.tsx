import Icon from "~/ui/Icon/Icon";
``;

type Collection = {
  title: string;
  id: string;
  image: { url: string };
};

const NavTile = ({ title, id, image }: Collection) => {
  return (
    <a
      href="/"
      className="relative flex aspect-[1/1] w-full max-w-[650px] overflow-hidden rounded-[8px]"
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
    ), url(${image.url})`,
        }}
      />

      <div className="absolute top-0 flex h-full w-full items-end justify-start p-6 text-white">
        <h3 className="text-[1.5rem] font-bold">{title}</h3>
        <div className="flex grow-1 -translate-x-2.5 justify-end opacity-0 duration-500 ease-in-out hover:translate-x-0 hover:opacity-100">
          <Icon id="arrow-right" size={32} />
        </div>
      </div>
    </a>
  );
};

export default NavTile;
