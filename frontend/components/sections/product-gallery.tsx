"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
  images: string[];
  name: string;
  video?: string;
}

export function ProductGallery({ images, name, video }: ProductGalleryProps) {
  const [activeMedia, setActiveMedia] = useState(images[0]);

  // Combine video and images for thumbnails
  const allMedia = video ? [video, ...images] : images;

  return (
    <div className="space-y-6">
      {/* Main Image / Video */}
      <div className="relative aspect-square bg-[#f6f7f8] rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm group flex items-center justify-center">
        {activeMedia.endsWith(".mp4") || activeMedia.endsWith(".webm") ? (
          <video
            src={activeMedia}
            controls
            autoPlay
            loop
            muted
            className="w-full h-full object-contain p-4"
          />
        ) : (
          <Image
            src={activeMedia}
            alt={name}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain p-12 transition-transform duration-700 group-hover:scale-105"
            priority
          />
        )}
      </div>
 
      {/* Thumbnails */}
      {allMedia.length > 1 && (
        <div className="flex overflow-x-auto gap-4 no-scrollbar pb-2">
          {allMedia.map((media, i) => {
            const isVideo = media.endsWith(".mp4") || media.endsWith(".webm");
            return (
              <div
                key={i}
                onClick={() => setActiveMedia(media)}
                className={cn(
                  "relative w-24 h-24 rounded-2xl border-2 overflow-hidden cursor-pointer transition-all duration-300 transform active:scale-95 flex-shrink-0 bg-white",
                  activeMedia === media
                    ? "border-primary shadow-md shadow-primary/10"
                    : "border-gray-100 bg-gray-50 hover:border-gray-300 opacity-60 hover:opacity-100"
                )}
              >
                {isVideo ? (
                  <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-500">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 4l12 6-12 6z" />
                    </svg>
                  </div>
                ) : (
                  <Image
                    src={media}
                    alt={`${name} thumbnail ${i + 1}`}
                    fill
                    sizes="96px"
                    className="object-contain p-2"
                  />
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
