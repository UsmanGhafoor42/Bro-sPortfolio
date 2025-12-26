"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

interface SlideItem {
  id: number;
  image: string;
  title?: string;
}

interface SliderProps {
  slides?: SlideItem[];
  className?: string;
}

export default function SliderComponent({
  slides = [],
  className = "",
}: SliderProps) {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="relative w-full flex items-center justify-center">
      {/* Previous Button */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-2 md:left-4 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-orange flex items-center justify-center text-white hover:opacity-90 transition-opacity"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={1.2}
        spaceBetween={20}
        centeredSlides={true}
        loop={true}
        slidesPerGroup={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={500}
        modules={[Autoplay, Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 30,
          },
        }}
        className={`w-full slider-highlight ${className}`}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden border-1 border-orange">
              <Image
                src={slide.image}
                alt={slide.title || "Slide"}
                fill
                className="object-cover"
              />
              {slide.title && (
                <div className="absolute bottom-4 left-4 text-white text-lg font-medium italic">
                  {slide.title}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Next Button */}
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-2 md:right-4 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-orange flex items-center justify-center text-white hover:opacity-90 transition-opacity"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>
    </div>
  );
}
