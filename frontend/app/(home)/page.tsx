import { HeroSection } from "@/components/sections/hero-section";
import { StatsSection } from "@/components/sections/stats-section";
import { SecureBrandSection } from "@/components/sections/secure-brand-section";
import { BrandsSection } from "@/components/sections/brands-section";
import { SectorsSection } from "@/components/sections/sectors-section";
import { ProductsSection } from "@/components/sections/products-section";
import { ProcessSection } from "@/components/sections/process-section";
import { FAQSection } from "@/components/sections/faq-section";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <StatsSection />
      <SecureBrandSection />
      <BrandsSection />
      <SectorsSection />
      <ProductsSection />
      <ProcessSection />
      <FAQSection />
    </div>
  );
}
