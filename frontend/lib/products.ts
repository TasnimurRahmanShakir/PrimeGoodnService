import { ProductTab, ProductItem } from "@/app/(home)/type";

export const productTabs: ProductTab[] = [
  {
    id: "health",
    label: "Health and Supplements",
    products: [
      {
        id: "1",
        name: "Vaginal Probiotics",
        brand: "HEALTH AND SUPPLEMENTS",
        description:
          "O Positiv URO Vaginal Probiotics for Women pH Balance with Prebiotics & Postbiotics. Professional grade formula designed for feminine health and stability.",
        image: "/product.png",
        images: ["/product.png", "/product.png", "/product.png", "/product.png"],
        price: "$28.97",
      },
      {
        id: "2",
        name: "GuruNanda Tongue Scraper",
        brand: "HEALTH AND SUPPLEMENTS",
        description:
          "GuruNanda Tongue Scraper for Adults (2 Pack) with Travel Case. Medical-grade stainless steel constructed for optimal oral hygiene and fresh breath.",
        image: "/product.png",
        price: "$4.97",
      },
      {
        id: "3",
        name: "NOONI Korean Lip Oil",
        brand: "HEALTH AND SUPPLEMENTS",
        description:
          "NOONI Korean Lip Oil Appleplum - Long-Lasting Moisturizing Lip Oil for smooth, hydrated lips. Infused with natural fruit extracts and antioxidants.",
        image: "/product.png",
        price: "$12.00",
      },
      {
        id: "4",
        name: "Shower Steamers Aromatherapy",
        brand: "HEALTH AND SUPPLEMENTS",
        description:
          "Shower Steamers Aromatherapy Relaxation Gifts - Peppermint & Eucalyptus scents to transform your daily routine into a spa-like experience.",
        image: "/product.png",
        price: "$9.99",
      },
    ],
  },
  {
    id: "automotive",
    label: "Automotive & Tools",
    products: [
      {
        id: "5",
        name: "Premium Motor Oil",
        brand: "AUTOMOTIVE",
        description:
          "Advanced full synthetic motor oil 5W-30 for maximum engine protection. Reduces wear and improves fuel efficiency in all weather conditions.",
        image: "/product.png",
        price: "$34.99",
      },
      {
        id: "6",
        name: "Mechanics Tool Set",
        brand: "AUTOMOTIVE",
        description: "130-piece heavy-duty tool set with socket wrenches, drivers, and specialized bits. Chrome vanadium construction for ultimate durability.",
        image: "/product.png",
        price: "$129.00",
      },
    ],
  },
  {
    id: "electronics",
    label: "Electronics & Accessories",
    products: [
      {
        id: "7",
        name: "Wireless Earbuds Pro",
        brand: "ELECTRONICS",
        description:
          "Active noise cancelling true wireless earbuds with 24h battery life, spatial audio support, and custom-tuned drivers for high-fidelity sound.",
        image: "/product.png",
        price: "$89.50",
      },
      {
        id: "8",
        name: "Fast Charging Power Bank",
        brand: "ELECTRONICS",
        description: "20000mAh portable charger with USB-C power delivery. Fast charge up to 3 devices simultaneously with intelligent power allocation.",
        image: "/product.png",
        price: "$45.99",
      },
      {
        id: "9",
        name: "Smart Watch Series 8",
        brand: "ELECTRONICS",
        description: "Fitness tracker watch with heart rate, blood oxygen, and sleep monitor. Multi-sport modes and always-on retina display.",
        image: "/product.png",
        price: "$199.99",
      },
    ],
  },
  {
    id: "pets",
    label: "Pet Supplies",
    products: [
      {
        id: "10",
        name: "Premium Dog Food",
        brand: "PET SUPPLIES",
        description: "Grain-free natural dry dog food with real salmon. High-protein formula designed for active dogs of all sizes and breeds.",
        image: "/product.png",
        price: "$56.99",
      },
      {
        id: "11",
        name: "Interactive Cat Toy",
        brand: "PET SUPPLIES",
        description: "Automatic rotating laser pointer for indoor cats. Encourages physical activity and mental stimulation with variable patterns.",
        image: "/product.png",
        price: "$19.95",
      },
    ],
  },
  {
    id: "beauty",
    label: "Beauty & Personal Care",
    products: [
      {
        id: "12",
        name: "Vitamin C Serum",
        brand: "BEAUTY & CARE",
        description:
          "Anti-aging facial serum with Vitamin C, E and Hyaluronic Acid. Brightens skin tone and reduces the appearance of fine lines and wrinkles.",
        image: "/product.png",
        price: "$24.99",
      },
      {
        id: "13",
        name: "Hydrating Face Cream",
        brand: "BEAUTY & CARE",
        description: "Daily face moisturizer for dry and sensitive skin. Non-greasy formula provides 24-hour hydration and strengthens the skin barrier.",
        image: "/product.png",
        price: "$18.50",
      },
    ],
  },
  {
    id: "home",
    label: "Home, Crafts & Households",
    products: [
      {
        id: "14",
        name: "Aromatherapy Diffuser",
        brand: "HOME & CRAFTS",
        description: "Essential oil diffuser with color-changing LED lights. Ultra-quiet ultrasonic technology creates a soothing mist for any room.",
        image: "/product.png",
        price: "$29.99",
      },
      {
        id: "15",
        name: "Ceramic Cookware Set",
        brand: "HOME & CRAFTS",
        description: "Non-stick 10-piece pots and pans set. PFOA/PTFE free ceramic coating for healthy cooking and effortless cleanup.",
        image: "/product.png",
        price: "$149.00",
      },
    ],
  },
];

export function getAllProducts(): ProductItem[] {
  return productTabs.flatMap(tab => tab.products);
}

export function getProductById(id: string): ProductItem | undefined {
  return getAllProducts().find(p => p.id === id);
}

export function getRelatedProducts(categoryId: string, currentProductId: string): ProductItem[] {
  const tab = productTabs.find(t => t.id === categoryId);
  if (!tab) return [];
  return tab.products.filter(p => p.id !== currentProductId).slice(0, 4);
}
