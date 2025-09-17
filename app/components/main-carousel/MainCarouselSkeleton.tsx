import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import NavTile from "./NavTile";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Icon from "~/ui/Icon/Icon";

import type { Tile } from "~/entities/HomepageNavTiles";
import { range } from "~/helpers/helpers";

const MainCarouselSkeleton = () => {
  return (
    <div
      className="mb-10 flex w-[2050px] flex-col gap-5 overflow-hidden"
      style={{ marginBottom: "2.375rem" }}
    >
      <div className="flex gap-5">
        {range(0, 5).map((_, i) => (
          <div
            key={i}
            className={`aspecp-[1/1] h-100 w-[650px] animate-pulse rounded-lg bg-gray-200`}
          />
        ))}
      </div>
      <div className="mt-9 flex w-full justify-end">
        <div className="h-9 w-9 animate-pulse rounded-full bg-gray-200" />
        <div className="ml-2 h-9 w-9 animate-pulse rounded-full bg-gray-200" />
      </div>
    </div>
  );
};
export default MainCarouselSkeleton;
