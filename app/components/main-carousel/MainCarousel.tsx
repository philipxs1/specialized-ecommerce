import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import NavTile from "./NavTile";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Icon from "~/ui/Icon/Icon";
import useHomepageTiles from "~/hooks/useHomepageTiles";
import type { Tile } from "~/entities/HomepageNavTiles";

const MainCarousel = () => {
  const { data: tiles, isLoading, isError } = useHomepageTiles();
  if (isLoading) return <p>Loading collections...</p>;
  if (isError) return <p>Something went wrong loading collections</p>;

  return (
    <div id="Maincarousel">
      <Swiper
        style={{ overflow: "visible", marginBottom: "2.375rem" }}
        modules={[A11y, Navigation]}
        spaceBetween={16}
        slidesPerView={1} // default for mobile
        slidesPerGroup={1} // move one at a time
        breakpoints={{
          640: { slidesPerView: 2.5 },
          1024: { slidesPerView: 3.5 },
          1280: { slidesPerView: 4.5 },
        }}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
      >
        {tiles &&
          tiles.map((tile: Tile) => (
            <SwiperSlide key={tile.title}>
              <NavTile {...tile} />
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="mt-9 flex w-full justify-end">
        <button className="custom-prev cursor-pointer transition">
          <Icon id="chevron-left" size={34} />
        </button>
        <button className="custom-next cursor-pointer transition">
          <Icon id="chevron-right" size={34} />
        </button>
      </div>
    </div>
  );
};

export default MainCarousel;
