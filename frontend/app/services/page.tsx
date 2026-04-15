import { OurServicesSection } from "@/components/sections/our-services-section";
import { ProcessSection } from "@/components/sections/process-section";
import { FAQSection } from "@/components/sections/faq-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Primes Goods and Services",
  description: "Comprehensive wholesale distribution, brand partnership, and logistics management services.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Services Hero Section */}
      <section className="relative w-full py-20 md:py-32 bg-black overflow-hidden flex items-center justify-center">
        {/* Background Image with Dark Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center grayscale-[50%]"
          style={{ backgroundImage: "url('/hero-bg.png')" }}
        >
          <div className="absolute inset-0 bg-black/80 mix-blend-multiply" />
        </div>

        <div className="container relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-primary backdrop-blur-md border border-white/10 px-4 py-2 rounded-md mb-8 w-fit shadow-lg mx-auto">
            <span className="text-[12px] font-bold tracking-[0.2em] text-white uppercase">
              What We Do
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6 uppercase max-w-4xl mx-auto">
            Our Services
          </h1>
          <p className="text-base md:text-xl text-white/80 leading-relaxed font-medium max-w-2xl mx-auto">
            Providing end-to-end distribution infrastructure and brand representation tailored to scale your wholesale operations.
          </p>
        </div>
      </section>

      {/* Main Content Sections */}
      <OurServicesSection />
      <ProcessSection />
      <FAQSection />
    </div>
  );
}
