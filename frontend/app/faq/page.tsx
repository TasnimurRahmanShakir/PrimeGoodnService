import { FAQSection } from "@/components/sections/faq-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Prime Goods and Services",
  description: "Find answers to commonly asked questions about Prime Goods and Services distribution and partnerships.",
};

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-24 bg-black text-white text-center relative overflow-hidden">
         {/* Subtle background element */}
         <div className="absolute top-0 left-0 w-full h-full bg-primary/5 -skew-y-6 transform origin-top-left" />
         
         <div className="container relative z-10 max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">FAQ<span className="text-primary italic">s</span></h1>
            <p className="text-xl text-white/60 font-medium">Everything you need to know about partnering with Prime distribution.</p>
         </div>
      </section>

      <FAQSection />

      <section className="py-24 bg-gray-50 text-center">
         <div className="container max-w-2xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase">Still have more questions?</h2>
            <p className="text-gray-600 mb-10">Our support team is ready to help you with any specific inquiries you might have regarding our wholesale model.</p>
            <a href="/contact" className="inline-flex py-4 px-10 bg-black text-white rounded-full font-black uppercase tracking-widest text-xs hover:bg-primary transition-all shadow-xl shadow-black/10">Contact Support Now</a>
         </div>
      </section>
    </div>
  );
}
