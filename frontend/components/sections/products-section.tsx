"use client";

import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ProductTab } from "@/app/(home)/type";

const productTabs: ProductTab[] = [
  {
    id: "health",
    label: "Health and Supplements",
    products: [
      { id: "1", name: "Vaginal Probiotics", brand: "HEALTH AND SUPPLEMENTS", description: "O Positiv URO Vaginal Probiotics for Women pH Balance with Prebiotics &...", image: "/product.png", price: "$28.97" },
      { id: "2", name: "GuruNanda Tongue Scraper", brand: "HEALTH AND SUPPLEMENTS", description: "GuruNanda Tongue Scraper for Adults (2 Pack) with Travel Case, Medical-...", image: "/product.png", price: "$4.97" },
      { id: "3", name: "NOONI Korean Lip Oil", brand: "HEALTH AND SUPPLEMENTS", description: "NOONI Korean Lip Oil Appleplum - Long-Lasting Moisturizing Lip Oil for...", image: "/product.png", price: "$12.00" },
      { id: "4", name: "Shower Steamers Aromatherapy", brand: "HEALTH AND SUPPLEMENTS", description: "Shower Steamers Aromatherapy Relaxation Gifts - Peppermint &...", image: "/product.png", price: "$9.99" },
    ]
  },
  {
    id: "automotive",
    label: "Automotive & Tools",
    products: [
      { id: "5", name: "Premium Motor Oil", brand: "AUTOMOTIVE", description: "Advanced full synthetic motor oil 5W-30 for engine protection.", image: "/product.png", price: "$34.99" },
      { id: "6", name: "Mechanics Tool Set", brand: "AUTOMOTIVE", description: "130-piece heavy-duty tool set with socket wrenches.", image: "/product.png", price: "$129.00" },
    ]
  },
  {
    id: "electronics",
    label: "Electronics & Accessories",
    products: [
      { id: "7", name: "Wireless Earbuds Pro", brand: "ELECTRONICS", description: "Active noise cancelling true wireless earbuds with 24h battery life.", image: "/product.png", price: "$89.50" },
      { id: "8", name: "Fast Charging Power Bank", brand: "ELECTRONICS", description: "20000mAh portable charger with USB-C power delivery.", image: "/product.png", price: "$45.99" },
      { id: "9", name: "Smart Watch Series 8", brand: "ELECTRONICS", description: "Fitness tracker watch with heart rate and sleep monitor.", image: "/product.png", price: "$199.99" },
    ]
  },
  {
    id: "pets",
    label: "Pet Supplies",
    products: [
      { id: "10", name: "Premium Dog Food", brand: "PET SUPPLIES", description: "Grain-free natural dry dog food with real salmon.", image: "/product.png", price: "$56.99" },
      { id: "11", name: "Interactive Cat Toy", brand: "PET SUPPLIES", description: "Automatic rotating laser pointer for indoor cats.", image: "/product.png", price: "$19.95" },
    ]
  },
  {
    id: "beauty",
    label: "Beauty & Personal Care",
    products: [
      { id: "12", name: "Vitamin C Serum", brand: "BEAUTY & CARE", description: "Anti-aging facial serum with Vitamin C, E and Hyaluronic Acid.", image: "/product.png", price: "$24.99" },
      { id: "13", name: "Hydrating Face Cream", brand: "BEAUTY & CARE", description: "Daily face moisturizer for dry and sensitive skin.", image: "/product.png", price: "$18.50" },
    ]
  },
  {
    id: "home",
    label: "Home, Crafts & Households",
    products: [
      { id: "14", name: "Aromatherapy Diffuser", brand: "HOME & CRAFTS", description: "Essential oil diffuser with color-changing LED lights.", image: "/product.png", price: "$29.99" },
      { id: "15", name: "Ceramic Cookware Set", brand: "HOME & CRAFTS", description: "Non-stick 10-piece pots and pans set, oven safe.", image: "/product.png", price: "$149.00" },
    ]
  }
];

export function ProductsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight uppercase">
          EXPLORE OUR PRODUCTS
        </h2>
        <p className="max-w-3xl mx-auto text-accent text-lg font-medium">
          Explore our most popular products across top categories, carefully selected to help you find<br className="hidden md:block"/> what matters most.
        </p>
      </div>

      <div className="container max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <Tabs defaultValue="health" className="w-full">
          <TabsList className="flex flex-wrap h-auto bg-transparent justify-center gap-4 mb-16 border-none">
            {productTabs.map((tab) => (
              <TabsTrigger 
                key={tab.id} 
                value={tab.id}
                className="px-6 py-2.5 rounded-full border border-gray-200 bg-white text-gray-900 data-[state=active]:bg-accent data-[state=active]:text-white data-[state=active]:border-accent transition-all duration-300 text-sm font-bold shadow-sm hover:border-accent hover:text-accent hover:-translate-y-0.5 active:scale-95 cursor-pointer"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {productTabs.map((tab) => (
            <TabsContent key={tab.id} value={tab.id} className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {tab.products.map((product) => (
                  <div key={product.id} className="bg-white rounded-[2rem] p-5 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-500 border border-gray-100 flex flex-col h-full group hover:-translate-y-1.5 active:scale-[0.98] cursor-pointer">
                    {/* Image Area */}
                    <div className="relative h-64 w-full bg-[#f6f7f8] rounded-[1.5rem] overflow-hidden mb-6 flex items-center justify-center p-6">
                      <Image 
                        src={product.image} 
                        alt={product.name} 
                        fill 
                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Content Area */}
                    <div className="flex flex-col flex-grow px-2 pb-2">
                       {/* Category Badge */}
                       <div className="bg-[#E5E7EB] text-gray-500 text-[10px] font-bold py-1 px-3 rounded-full w-fit mb-3 tracking-wider">
                         {product.brand.toUpperCase()}
                       </div>

                       <h3 className="text-xl font-bold text-gray-900 mb-2 leading-snug">
                         {product.name}
                       </h3>

                       <p className="text-sm text-accent font-medium leading-relaxed mb-6 line-clamp-2">
                         {product.description}
                       </p>

                       <div className="flex items-center justify-between mt-auto pt-4">
                         <span className="text-2xl font-extrabold text-gray-900">
                           {product.price}
                         </span>
                         <Button className="bg-accent hover:bg-accent/90 text-white font-bold py-5 px-6 rounded-[0.85rem] text-sm shadow-md shadow-accent/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/40 active:scale-90">
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
