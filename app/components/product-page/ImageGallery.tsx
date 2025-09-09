import React, { useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type swiperCore from "swiper";

import "swiper/css";

interface Variant {
  images: string[];
  title: string;
}

interface ImageGalleryProps {
  selectedVariant: Variant;
}

const ImageGallery = ({ selectedVariant }: ImageGalleryProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<swiperCore | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  return (
    <div className="relative">
      <div className="flex min-h-0 min-w-0 flex-col">
        <div className="overflow-hidden pb-10">
          <Swiper
            modules={[Thumbs, FreeMode, Navigation]}
            thumbs={{
              swiper: thumbsSwiper,
            }}
            spaceBetween={1}
            slidesPerView={1}
            navigation={true}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          >
            {selectedVariant.images.map((url: string, i: number) => (
              <SwiperSlide key={i}>
                <div className="bg-white-gray flex h-full justify-center">
                  {" "}
                  <img
                    src={url}
                    alt="Gallery Image"
                    className="aspect-[16/9] h-full w-full rounded-lg"
                    style={{ color: "transparent" }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="relative flex w-full py-4">
          <Swiper
            modules={[Thumbs, FreeMode, Navigation]}
            spaceBetween={16}
            onSwiper={setThumbsSwiper}
            slidesPerView="auto"
            watchSlidesProgress
            className="thumbs-swiper"
          >
            {selectedVariant.images.map((url: string, i: number) => {
              return (
                <SwiperSlide
                  key={i}
                  className="flex w-auto"
                  style={{ width: "80px" }}
                >
                  <div
                    className={`bg-white-gray mr-0 flex h-[44px] w-[80px] cursor-pointer overflow-hidden rounded-sm border-2 transition-colors ${
                      activeIndex === i ? "border-black" : "border-gray-400"
                    }`}
                  >
                    <img
                      src={url}
                      alt={`${selectedVariant.title}-${i}`}
                      height={90}
                      width={160}
                      className="aspect-[16/9] h-full w-full rounded-lg shadow"
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
