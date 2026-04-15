"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
  images: string[];
  name: string;
}

export function ProductGallery({ images, name }: ProductGalleryProps) {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="space-y-6">
      {/* Main Image */}
      <div className="relative aspect-square bg-[#f6f7f8] rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm group">
        <Image
          src={activeImage}
          alt={name}
          fill
          className="object-contain p-12 transition-transform duration-700 group-hover:scale-105"
          priority
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              onClick={() => setActiveImage(img)}
              className={cn(
                "aspect-square rounded-2xl border-2 overflow-hidden cursor-pointer transition-all duration-300 transform active:scale-95",
                activeImage === img
                  ? "border-primary bg-white shadow-md shadow-primary/10"
                  : "border-gray-100 bg-gray-50 hover:border-gray-300 opacity-60 hover:opacity-100"
              )}
            >
              <Image
                src={img}
                alt={`${name} thumbnail ${i + 1}`}
                width={100}
                height={100}
                className="object-contain p-2"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
