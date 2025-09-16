import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import type swiperCore from "swiper";

import "swiper/css";
import { A11y, Navigation } from "swiper/modules";
import Icon from "~/ui/Icon/Icon";
import { useRef, useState } from "react";
import type { Tile } from "~/entities/HomepageNavTiles";
import CarouselTile from "./CarouselTile";
import PromoTile from "./PromoTile";

export interface CarouselProps {
  tiles?: Tile[];
  promo?: Tile[];
}

const Carousel: React.FC<CarouselProps> = ({ tiles, promo }) => {
  const swiperRef = useRef<swiperCore | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(true);

  return (
    <div className="relative isolate overflow-hidden py-6">
      <div className="mx-auto w-full max-w-[min(100vw,var(--setmax-width))] px-6 pb-1">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          style={{ overflow: "visible" }}
          modules={[Navigation, A11y]}
          slidesPerView="auto"
          slidesPerGroup={1}
          spaceBetween={20}
          onSliderMove={() => {
            const swiper = swiperRef.current;
            if (!swiper) return;
            setShowPrev(swiper.translate < 0);
            setShowNext(swiper.translate > swiper.maxTranslate());
          }}
          onTransitionEnd={() => {
            const swiper = swiperRef.current;
            if (!swiper) return;
            // update after snap-back or normal slide
            setShowPrev(swiper.translate < 0);
            setShowNext(swiper.translate > swiper.maxTranslate());
          }}
        >
          {tiles?.map((tile) => {
            return (
              <SwiperSlide
                key={tile.title}
                style={{ width: "260px", height: "auto" }}
              >
                {tile.promo ? (
                  <PromoTile {...tile} />
                ) : (
                  <CarouselTile {...tile} />
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="">
          <div className="absolute top-10 left-[60px] z-1">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="custom-prev cursor-pointer rounded-sm bg-white p-2 transition-opacity"
              style={{ opacity: showPrev ? 1 : 0 }}
            >
              <Icon id="arrow-left" size={34} strokeWidth={1} />
            </button>
          </div>
          <div className="absolute top-10 right-[60px] z-1">
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="custom-next cursor-pointer rounded-sm bg-white p-2 transition-opacity"
              style={{ opacity: showNext ? 1 : 0 }}
            >
              <Icon id="arrow-right" size={34} strokeWidth={1} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
