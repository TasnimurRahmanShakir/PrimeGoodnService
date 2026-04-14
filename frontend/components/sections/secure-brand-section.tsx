import Image from "next/image";
import { Icon } from "@/components/icons";
import { FeatureItem } from "@/app/(home)/type";

const features: FeatureItem[] = [
  {
    title: "RELIABLE LOGISTICS",
    description: "We ensure timely and safe delivery of goods across our extensive network, prioritizing speed and efficiency.",
  },
  {
    title: "SMART DISTRIBUTION",
    description: "Our data-driven approach optimizes supply chains, reducing costs and maximizing reach for your brand.",
  },
  {
    title: "STRATEGIC PARTNERSHIPS",
    description: "We build long-term relationships with brands to grow together through shared values and goals.",
  },
  {
    title: "PREMIUM QUALITY",
    description: "Only the best products reach our shelves, maintaining the high standards your customers expect.",
  },
];

export function SecureBrandSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Section */}
          <div className="lg:w-1/2 relative group">
            <div className="absolute -inset-4 bg-accent/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl w-fit mx-auto">
              <Image 
                src="/secure-brand.png" 
                alt="Our distribution process" 
                width={600} 
                height={500}
                className="w-full h-auto max-h-[80vh] object-contain rounded-2xl transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2">
            <p className="text-sm font-bold tracking-[0.2em] text-accent mb-4 uppercase">
              Our Methodology
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-8 leading-tight">
              THE WAY WE <br />
              SECURE YOUR BRAND
            </h2>
            
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                      <Icon name="checkCircle" className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-sm tracking-wider mb-2 uppercase">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <button className="flex items-center gap-2 text-primary font-bold text-xs tracking-widest uppercase hover:text-accent transition-colors group">
                Learn more about our process
                <Icon name="arrowRight" className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
