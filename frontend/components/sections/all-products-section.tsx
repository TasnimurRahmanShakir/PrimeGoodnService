"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getAllProducts } from "@/lib/products";

const allProducts = getAllProducts();
const ITEMS_PER_PAGE = 8;

export function AllProductsSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(allProducts.length / ITEMS_PER_PAGE);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const currentProducts = allProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <section className="py-24 bg-white">
      <div className="container max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight uppercase">
          ALL PRODUCTS
        </h2>
        <div className="w-24 h-1 bg-black mx-auto mb-8" />
        <p className="max-w-3xl mx-auto text-black text-lg font-medium">
          Explore our most popular products across top categories, carefully selected to help you find what matters most.
        </p>
      </div>

      <div className="container max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 min-h-[600px] content-start">
          {currentProducts.map((product) => (
            <Link 
              key={product.id} 
              href={`/products/${product.id}`}
              className="bg-white rounded-[2rem] p-5 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-500 border border-gray-100 flex flex-col h-full group hover:-translate-y-1.5 active:scale-[0.98] cursor-pointer"
            >
              {/* Image Area */}
              <div className="relative h-64 w-full bg-[#f6f7f8] rounded-[1.5rem] overflow-hidden mb-6 flex items-center justify-center p-6">
                {/* Status Badge (Top Left, 45 deg angle) */}
                {product.status && (
                  <div
                    className="absolute top-6 -left-10 -rotate-45 w-40 text-center text-[10px] font-black py-1.5 tracking-wider z-10 shadow-md bg-orange-500 text-white"
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
                  <Button className="bg-primary hover:bg-opacity-90 text-white font-bold py-2.5 px-4 rounded-xl text-xs shadow-sm shadow-primary/20 transition-all duration-300 group-hover:-translate-y-0.5 hover:shadow-md hover:shadow-primary/40 active:scale-95 shrink-0">
                    View Detail
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="w-10 h-10 rounded-full border-gray-200 text-gray-500 hover:text-black hover:border-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant="outline"
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-full border-transparent font-semibold transition-colors ${
                  currentPage === page 
                    ? "bg-primary text-white shadow-md hover:bg-primary/90" 
                    : "bg-white text-gray-500 hover:text-black border-gray-200 hover:border-black"
                }`}
              >
                {page}
              </Button>
            ))}
            
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="w-10 h-10 rounded-full border-gray-200 text-gray-500 hover:text-black hover:border-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
