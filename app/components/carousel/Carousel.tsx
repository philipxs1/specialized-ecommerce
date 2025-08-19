import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import NavTile from "./NavTile";
import useCollections from "~/hooks/useCollections";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Icon from "~/ui/Icon/Icon";

const Carousel = () => {
  const { data: collections, isLoading, isError } = useCollections();
  if (isLoading) return <p>Loading collections...</p>;
  if (isError) return <p>Something went wrong loading collections</p>;

  return (
    <div id="carousel">
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
        {collections &&
          collections.map((collection) => (
            <SwiperSlide key={collection.id}>
              <NavTile {...collection} />
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

export default Carousel;
