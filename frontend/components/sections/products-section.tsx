"use client";

import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ProductTab } from "@/app/(home)/type";

const productTabs: ProductTab[] = [
  {
    id: "health",
    label: "HEALTH & WELLNESS",
    products: [
      { id: "1", name: "Multi-Vitamin Complex", brand: "BioPure", description: "Daily essential vitamins and minerals for optimal health.", image: "/product.png", price: "$29.99" },
      { id: "2", name: "Omega-3 Fish Oil", brand: "SeaLife", description: "High-grade EPA/DHA supplements for heart health.", image: "/product.png", price: "$24.50" },
      { id: "3", name: "Immunity Booster", brand: "HealthFirst", description: "Vitamin C and Zinc complex for immune support.", image: "/product.png", price: "$19.99" },
      { id: "4", name: "Probiotic Relief", brand: "GutGlow", description: "Multi-strain probiotics for digestive balance.", image: "/product.png", price: "$34.00" },
    ]
  },
  {
    id: "beauty",
    label: "BEAUTY & CARE",
    products: [
      { id: "5", name: "Hydrating Serum", brand: "GlowSkin", description: "Pure hyaluronic acid for deep skin hydration.", image: "/product.png", price: "$42.00" },
      { id: "6", name: "Night Repair Cream", brand: "LuxeCare", description: "Advanced anti-aging formula for overnight renewal.", image: "/product.png", price: "$55.00" },
    ]
  },
  {
    id: "grocery",
    label: "GROCERY & RETAIL",
    products: [
      { id: "7", name: "Organic Maple Syrup", brand: "NatureGold", description: "100% pure Canadian maple syrup, grade A.", image: "/product.png", price: "$15.99" },
    ]
  }
];

export function ProductsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight uppercase">
          EXPLORE OUR PRODUCTS
        </h2>
        <div className="w-20 h-1.5 bg-accent mx-auto mb-8 rounded-full" />
        <p className="max-w-2xl mx-auto text-gray-500 text-sm">
          A curated selection of our top-performing products across various sectors. Discover quality you can trust.
        </p>
      </div>

      <div className="container max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <Tabs defaultValue="health" className="w-full">
          <TabsList className="flex flex-wrap h-auto bg-transparent justify-center gap-2 mb-12">
            {productTabs.map((tab) => (
              <TabsTrigger 
                key={tab.id} 
                value={tab.id}
                className="px-6 py-2 rounded-full border border-black/10 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary transition-all text-xs font-bold"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {productTabs.map((tab) => (
            <TabsContent key={tab.id} value={tab.id} className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {tab.products.map((product) => (
                  <div key={product.id} className="bg-white rounded-[2.5rem] p-5 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col h-full group">
                    {/* Image Area */}
                    <div className="relative h-72 w-full bg-[#f4f4f4] rounded-[2rem] overflow-hidden mb-6 flex items-center justify-center">
                      <Image 
                        src={product.image} 
                        alt={product.name} 
                        fill 
                        className="object-contain p-10 group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>

                    {/* Content Area */}
                    <div className="flex flex-col flex-grow px-1">
                      {/* Category Badge */}
                      <div className="bg-[#E5E7EB] text-gray-500 text-[9px] font-bold py-1.5 px-4 rounded-full w-fit mb-4 tracking-wider">
                        {product.brand.toUpperCase()}
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
                        {product.name}
                      </h3>

                      <p className="text-sm text-accent font-medium leading-relaxed mb-6 line-clamp-2">
                        {product.description}
                      </p>

                      <div className="flex items-center justify-between mt-auto pt-2">
                        <span className="text-2xl font-bold text-gray-900">
                          {product.price.replace('$', '')}
                        </span>
                        <Button className="bg-accent hover:bg-accent/90 text-white font-bold py-6 px-10 rounded-2xl text-sm shadow-lg shadow-accent/20 transition-all duration-300">
                          View Detail
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
