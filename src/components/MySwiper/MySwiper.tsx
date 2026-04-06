// Import Swiper React components
"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

// Import Swiper core styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type HeroSlide = {
  image: string;
  title: string;
  subtitle: string;
  description?: string;
  primaryCtaLabel: string;
  secondaryCtaLabel?: string;
};

type MySwiperProps = {
  slides: HeroSlide[];
  slidesPerView?: number;
};

export default function MySwiper({
  slides,
  slidesPerView = 1,
}: MySwiperProps) {
  return (
    <Swiper
      className="hero-swiper"
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={slidesPerView}
      loop
      centeredSlides
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={`${slide.title}-${index}`}>
          <div className="relative w-full h-[220px] sm:h-[260px] md:h-[320px] lg:h-[360px] overflow-hidden">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-[#13BA51]/80" />

            <div className="absolute inset-y-0 left-0 flex items-center px-6 md:px-12">
              <div className="max-w-md text-white space-y-2 md:space-y-3">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-xl sm:text-2xl md:text-4xl font-bold leading-snug"
                >
                  {slide.title}
                </motion.h1>
                {slide.subtitle && (
                  <p className="text-sm sm:text-base text-white/90">
                    {slide.subtitle}
                  </p>
                )}
                {slide.description && (
                  <p className="text-xs sm:text-sm text-white/80">
                    {slide.description}
                  </p>
                )}

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  className="mt-3 md:mt-4 flex flex-wrap gap-3"
                >
                  <button
                    type="button"
                    className="rounded-full bg-white text-[#009966] px-5 py-2 sm:px-6 sm:py-2 text-sm sm:text-base font-semibold shadow-md hover:bg-gray-100 transition-colors"
                  >
                    {slide.primaryCtaLabel}
                  </button>
                  {slide.secondaryCtaLabel && (
                    <button
                      type="button"
                      className="rounded-full border border-white text-white px-5 py-2 sm:px-6 sm:py-2 text-sm sm:text-base font-semibold bg-transparent hover:bg-white/10 transition-colors"
                    >
                      {slide.secondaryCtaLabel}
                    </button>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}