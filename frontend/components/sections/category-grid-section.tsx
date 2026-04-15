"use client";

import Image from "next/image";
import { Icon } from "@/components/icons";

const categories = [
  {
    title: "Health and Supplements",
    image: "/sector-health.png",
    icon: "health",
  },
  {
    title: "Beauty & Personal Care",
    image: "/sector-beauty.png",
    icon: "beauty",
  },
  {
    title: "Grocery & Food Retail",
    image: "/sector-grocery.png",
    icon: "grocery",
  },
  {
    title: "Premium Gardening Tool",
    image: "/sector-garden.png",
    icon: "home",
  },
  {
    title: "Consumer Electronics",
    image: "/sector-electronics.png",
    icon: "electronics",
  },
  {
    title: "Automotive Parts",
    image: "/sector-automotive.png",
    icon: "automotive",
  },
];

export function CategoryGridSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Absolute Background Split (Precisely 50/50 of entire section height) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="h-1/2 w-full bg-white" />
        <div className="h-1/2 w-full bg-black" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 pt-24">
        {/* Header Area */}
        <div className="container max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 uppercase tracking-tighter text-gray-900">
            DISTRIBUTION SECTORS <br />
            <span className="text-primary italic">WE SERVE</span>
          </h2>
          <div className="w-24 h-1 bg-black mx-auto mb-8" />
          <p className="max-w-3xl mx-auto text-black/70 text-lg font-medium">
            Our structured wholesale strategy enables distribution across high-growth consumer categories.
          </p>
        </div>

        {/* Grid Area */}
        <div className="pb-24">
          <div className="container max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="group relative bg-white text-primary rounded-xl shadow-xl transition-all duration-500 hover:-translate-y-2">
                  {/* Image Container */}
                  <div className="relative h-64 w-full overflow-hidden rounded-t-xl">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Floating Icon - Outside overflow-hidden to prevent clipping */}
                  <div className="absolute top-64 -translate-y-1/2 right-6 z-10 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center border-4 border-white shadow-xl transition-all duration-300 group-hover:scale-110">
                    <Icon name={category.icon as any} className="w-7 h-7" />
                  </div>

                  {/* Content Section */}
                  <div className="relative p-8 pt-12">
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-3 leading-tight">
                      {category.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
