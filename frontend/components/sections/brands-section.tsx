"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

export function BrandsSection() {
  const brands = [
    { name: "PureBites", logo: "https://placehold.co/300x120/white/Black?text=PureBites" },
    { name: "JTECH Medical", logo: "https://placehold.co/300x120/white/Black?text=JTECH+MEDICAL" },
    { name: "Bob Ross", logo: "https://placehold.co/300x120/white/Red?text=Bob+Ross" },
    { name: "Crown Supply", logo: "https://placehold.co/300x120/white/Navy?text=CROWN+SUPPLY" },
    { name: "Health Plus+", logo: "https://placehold.co/300x120/white/Green?text=HEALTH+PLUS+" },
    { name: "First Response", logo: "https://placehold.co/300x120/white/Blue?text=FIRST+RESPONSE" },
  ];

  // Double the brands to ensure enough slides for Swiper loop to function correctly on large screens
  const displayBrands = [...brands, ...brands];

  return (
    <section className="bg-white py-20 border-y border-border/50 overflow-hidden">
      <div className="container max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-center text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900 uppercase">
          BRANDS WE WORK WITH
        </h2>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={32}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
            1280: {
              slidesPerView: 6,
            },
          }}
          className="brand-swiper"
        >
          {displayBrands.map((brand, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center h-24 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="max-h-full max-w-[80%] object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
