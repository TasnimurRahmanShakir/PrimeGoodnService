import Image from "next/image";
import { Icon } from "@/components/icons";
import { SectorItem } from "@/app/(home)/type";

const sectors: SectorItem[] = [
  {
    title: "Health and Supplements",
    description: "Premium distribution of vitamins, healthcare products, and pharmaceutical goods.",
    image: "/sector-health.png",
    icon: "health",
  },
  {
    title: "Beauty & Personal Care",
    description: "Leading brands in skincare, cosmetics, and personal grooming for global markets.",
    image: "/sector-beauty.png",
    icon: "beauty",
  },
  {
    title: "Grocery & Food Retail",
    description: "Reliable supply chain for fresh produce, packaged goods, and retail essentials.",
    image: "/sector-grocery.png",
    icon: "grocery",
  },
  {
    title: "Premium Gardening Tool",
    description: "High-quality tools and equipment for professional landscaping and home gardening.",
    image: "/sector-garden.png",
    icon: "home",
  },
  {
    title: "Consumer Electronics",
    description: "State-of-the-art audio equipment, accessories, and home technology solutions.",
    image: "/sector-electronics.png",
    icon: "electronics",
  },
  {
    title: "Automotive Parts",
    description: "Specialized distribution of engine parts, performance tools, and car accessories.",
    image: "/sector-automotive.png",
    icon: "automotive",
  },
];

export function SectorsSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Absolute Background Split (Precisely 50/50 of entire section height) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="h-1/2 w-full bg-white" />
        <div className="h-1/2 w-full bg-primary" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10">
        {/* Header Header Area */}
        <div className="pt-24 pb-16">
          <div className="container max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 uppercase tracking-tighter text-gray-900">
              DISTRIBUTION SECTORS <br />
              <span className="text-[#002D4E] italic">WE SERVE</span>
            </h2>
            <div className="w-24 h-1 bg-[#002D4E] mx-auto mb-8" />
            <p className="max-w-2xl mx-auto text-gray-500 text-sm">
              A wide range of expertise across various industries, ensuring each sector receives specialized attention and high-quality logistics.
            </p>
          </div>
        </div>

        {/* Grid Area */}
        <div className="pb-24">
          <div className="container max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sectors.map((sector, index) => (
                <div key={index} className="group relative bg-white text-primary rounded-xl shadow-xl transition-all duration-500 hover:-translate-y-2">
                  {/* Image Container */}
                  <div className="relative h-64 w-full overflow-hidden rounded-t-xl">
                    <Image 
                      src={sector.image} 
                      alt={sector.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Floating Icon - Outside overflow-hidden to prevent clipping */}
                  <div className="absolute top-64 -translate-y-1/2 right-6 z-10 w-16 h-16 bg-[#002D4E] text-white rounded-full flex items-center justify-center border-4 border-white shadow-xl transition-all duration-300 group-hover:scale-110">
                    <Icon name={sector.icon} className="w-7 h-7" />
                  </div>

                  {/* Content Section */}
                  <div className="relative p-8 pt-12">
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-3 leading-tight">
                      {sector.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                      {sector.description}
                    </p>
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
