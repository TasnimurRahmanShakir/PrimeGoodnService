"use client";

import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { productTabs } from "@/lib/products";
import Link from "next/link";
import { useDraggableScroll } from "@/hooks/use-draggable-scroll";

export function ProductsSection() {
  const tabsListRef = useDraggableScroll();

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight uppercase">
          EXPLORE OUR <span className="text-primary">PRODUCTS</span>
        </h2>
        <p className="max-w-3xl mx-auto text-black text-lg font-medium">
          Explore our most popular products across top categories, carefully
          selected to help you find
          <br className="hidden md:block" /> what matters most.
        </p>
      </div>

      <div className="container max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <Tabs defaultValue="all" className="w-full">
          <TabsList
            ref={tabsListRef as any}
            className="flex flex-nowrap overflow-x-auto no-scrollbar h-auto bg-transparent justify-start md:justify-center gap-4 mb-16 border-none scroll-smooth w-full cursor-grab active:cursor-grabbing select-none">
            {productTabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="px-6 py-2.5 rounded-full border border-gray-200 bg-white text-gray-900 data-[state=active]:bg-accent data-[state=active]:text-white data-[state=active]:border-accent transition-all duration-300 text-sm font-bold shadow-sm hover:border-accent hover:text-accent hover:-translate-y-0.5 active:scale-95 cursor-pointer">
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {productTabs.map((tab) => (
            <TabsContent key={tab.id} value={tab.id} className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {tab.products.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.id}`}
                    className="bg-white rounded-[2rem] p-5 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-500 border border-gray-100 flex flex-col h-full group hover:-translate-y-1.5 active:scale-[0.98] cursor-pointer">
                    {/* Image Area */}
                    <div className="relative h-64 w-full bg-[#f6f7f8] rounded-[1.5rem] overflow-hidden mb-6 flex items-center justify-center p-6">
                      {/* Status Badge (Top Left, 45 deg angle) */}
                      {product.status && (
                        <div
                          className={`absolute top-6 -left-10 -rotate-45 w-40 text-center text-[10px] font-black py-1.5 tracking-wider z-10 shadow-md ${
                            product.status === "Approved"
                              ? "bg-green-500 text-white"
                              : "bg-orange-500 text-white"
                          }`}
                        >
                          {product.status.toUpperCase()}
                        </div>
                      )}

                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className={`object-contain p-4 transition-all duration-700 ${
                          product.hoverImage
                            ? "group-hover:opacity-0 group-hover:scale-95"
                            : "group-hover:scale-105"
                        }`}
                      />
                      {product.hoverImage && (
                        <Image
                          src={product.hoverImage}
                          alt={`${product.name} hover`}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-contain p-4 absolute inset-0 opacity-0 scale-105 transition-all duration-700 group-hover:opacity-100 group-hover:scale-100"
                        />
                      )}
                    </div>

                    {/* Content Area */}
                    <div className="flex flex-col flex-grow px-2 pb-2">
                      <div className="flex items-center justify-between mb-3">
                        {/* Category Badge */}
                        <div className="bg-[#E5E7EB] text-gray-500 text-[10px] font-bold py-1 px-3 rounded-full w-fit tracking-wider">
                          {product.brand.toUpperCase()}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-2 leading-snug">
                        {product.name}
                      </h3>

                      <p className="text-sm text-black/50 font-medium leading-relaxed mb-6 line-clamp-2">
                        {product.description}
                      </p>

                      <div className="flex items-end justify-between mt-auto pt-4 border-t border-gray-100 gap-2">
                        <span className="text-[15px] font-black text-gray-900 leading-[1.2] flex-1">
                          {product.price}
                        </span>
                        <Button className="bg-primary hover:bg-accent/90 text-white font-bold py-2.5 px-4 rounded-xl text-xs shadow-sm shadow-accent/20 transition-all duration-300 group-hover:-translate-y-0.5 hover:shadow-md hover:shadow-accent/40 active:scale-95 shrink-0">
                          View Detail
                        </Button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
