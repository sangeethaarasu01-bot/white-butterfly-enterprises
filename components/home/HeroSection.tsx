"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function HeroSection() {
  const banners = [
    {
      image: "/images/banner/dry-fruits40607.webp",
      link: "/dry_food",
    },
    {
      image: "/images/banner/indian-millets-content-banner-2.jpg",
      link: "/millets",
    },
    {
      image: "/images/banner/export-banner-02.jpg",
      link: "/pulses",
    },
    {
      image: "/images/banner/banner-4.jpg",
      link: "/spicies",
    },
  ];

  return (
    <section className="w-full bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-800 text-center leading-tight">
          Quality Agro Products
        </h1>

        <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto text-center">
          Millets, Pulses, Spices & Dry Fruits – Direct from source
        </p>

        {/* Swiper Carousel */}
        <div className="mt-8">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="rounded-2xl overflow-hidden"
          >
            {banners.map((banner, index) => (
              <SwiperSlide key={index}>
                <a href={banner.link}>
                  <Image
                    src={banner.image}
                    alt={`banner-${index}`}
                    width={1400}
                    height={500}
                    className="w-full h-[220px] sm:h-[350px] md:h-[500px] object-cover"
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
