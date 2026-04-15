import { WholesaleApplicationForm } from "@/components/forms/wholesale-application-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner With Us | Prime Goods and Services",
  description: "Apply for a wholesale account and join the Prime distribution network.",
};

export default function ApplyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fb]">
      {/* Hero Header */}
      <section className="relative w-full py-16 md:py-24 bg-black overflow-hidden flex items-center justify-center">
        {/* Subtle Background pattern/image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-30 grayscale"
          style={{ backgroundImage: "url('/hero-bg.png')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black" />
        </div>

        <div className="container relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-primary px-4 py-2 rounded-md mb-8 w-fit shadow-lg mx-auto">
            <span className="text-[12px] font-bold tracking-[0.2em] text-white uppercase">
              B2B Opportunities
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black leading-[1.05] tracking-tight mb-6 uppercase max-w-4xl mx-auto">
            WHOLESALE <span className="text-primary italic">APPLICATION</span>
          </h1>
          <p className="text-base md:text-xl text-white/70 leading-relaxed font-medium max-w-2xl mx-auto">
            Start your journey as an authorized retail partner. Fill out the application below to access our premium distribution catalog.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 -mt-16 relative z-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <WholesaleApplicationForm />
        </div>
      </section>

      {/* Additional Info / Trust Section */}
      <section className="pb-24 pt-10">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="mb-16 text-left bg-white p-10 rounded-[2rem] border border-gray-100 shadow-sm">
            <h3 className="text-2xl font-black text-gray-900 mb-6 uppercase tracking-tight">Why Partner with Prime?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <h4 className="font-bold text-primary uppercase text-xs tracking-widest">Market Integrity</h4>
                <p className="text-gray-600 text-sm leading-relaxed font-medium">We enforce strict MAP policies and authorized-only distribution to protect your brand's value and pricing across all digital and physical marketplaces.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-primary uppercase text-xs tracking-widest">Scalable Infrastructure</h4>
                <p className="text-gray-600 text-sm leading-relaxed font-medium">Access our network of over 500 distribution centers. Whether you're moving 100 units or 100,000, our logistics scale with your ambition.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-primary uppercase text-xs tracking-widest">Data-Driven Growth</h4>
                <p className="text-gray-600 text-sm leading-relaxed font-medium">Receive detailed marketplace insights and sales velocity data to help you optimize production and identify new category opportunities.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-primary uppercase text-xs tracking-widest">Premium Support</h4>
                <p className="text-gray-600 text-sm leading-relaxed font-medium">Every partner is assigned a dedicated account executive who understands your sector-specific needs and distribution hurdles.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-200 pt-16">
            <div className="space-y-4">
              <h4 className="text-gray-900 font-bold uppercase tracking-widest text-sm">Rapid Approval</h4>
              <p className="text-gray-500 text-sm leading-relaxed">Our team reviews applications within 24-48 business hours.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-gray-900 font-bold uppercase tracking-widest text-sm">Dedicated Support</h4>
              <p className="text-gray-500 text-sm leading-relaxed">Once approved, you'll be assigned a dedicated account manager.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-gray-900 font-bold uppercase tracking-widest text-sm">Flexible Logistics</h4>
              <p className="text-gray-500 text-sm leading-relaxed">Global fulfillment capabilities tailored to your business scale.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
