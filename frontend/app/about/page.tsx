import { AboutUsSection } from "@/components/sections/about-us-section";
import { TeamSection } from "@/components/sections/team-section";
import { MissionSection } from "@/components/sections/mission-section";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Prime Goods and Services",
  description: "Learn more about Prime Goods and Services. We redefine the wholesale and distribution landscape to build long-term, scalable partnerships.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* About Us Hero Section */}
      <section className="relative w-full py-20 md:py-32 bg-black overflow-hidden flex items-center justify-center border-b border-white/5">
        {/* Background Image with Dark Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center grayscale-[50%]"
          style={{ backgroundImage: "url('/hero-bg.png')" }}
        >
          <div className="absolute inset-0 bg-black/80 mix-blend-multiply" />
        </div>

        <div className="container relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-left text-white">
          <div className="inline-flex items-center gap-2 bg-primary backdrop-blur-md border border-white/10 px-4 py-2 rounded-md mb-8 w-fit shadow-lg">
            <span className="text-[12px] font-bold tracking-[0.2em] text-white uppercase">
              Our Journey
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6 uppercase max-w-4xl">
            About Us
          </h1>
          <p className="text-base md:text-xl text-white/80 leading-relaxed font-medium max-w-2xl">
            We are dedicated to moving products with strategy, precision, and a commitment to brand protection.
          </p>
        </div>
      </section>

      {/* Unique Content Sections for About Page */}
      <AboutUsSection />
      <MissionSection />
      <PhilosophySection />
      <TeamSection />
    </div>
  );
}
