import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { FeatureItem } from "@/app/(home)/type";

const features: FeatureItem[] = [
  {
    title: "FAST & SAFE DELIVERY",
    description:
      "We move your products quickly and safely through our large network, making sure they arrive on time, every time.",
  },
  {
    title: "SMART PLANNING",
    description:
      "We use data to improve your supply chain, helping you save money and reach more customers in new places.",
  },
  {
    title: "STRONG PARTNERSHIPS",
    description:
      "We focus on building honest, long-term relationships with brands so we can grow and succeed together.",
  },
  {
    title: "HIGH STANDARDS",
    description:
      "We only work with the best products to make sure your customers always get the quality they expect.",
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
            <p className="text-sm font-bold tracking-[0.2em] text-black mb-4 uppercase">
              OUR APPROACH TO GROWTH
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-8 leading-tight">
              HOW WE PROTECT <br />
              YOUR BRAND
            </h2>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white">
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
              <Link href="/apply">
                <button className="flex items-center gap-2 text-black font-bold text-xs tracking-widest uppercase hover:text-accent transition-colors group">
                  Start Your Partnership
                  <Icon
                    name="arrowRight"
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
