import Image from "next/image";
import { ProcessItem } from "@/app/(home)/type";

const processes: ProcessItem[] = [
  {
    step: "01",
    title: "BRAND REVIEW AND APPROVAL",
    description: "We evaluate product fit and align with your distribution policies.",
  },
  {
    step: "02",
    title: "AUTHORIZED RESELLER AGREEMENT",
    description: "We operate under clear agreements & follow brand specific compliance guidelines.",
  },
  {
    step: "03",
    title: "INVENTORY INTEGRATION",
    description: "We implement forecasting and controlled restocking systems.",
  },
  {
    step: "04",
    title: "MANAGED MARKETPLACE DISTRIBUTION",
    description: "We monitor pricing, availability, and listing quality to maintain brand value.",
  },
];

export function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Split - 50/50 for desktop */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="h-full w-full lg:w-1/2 bg-primary" />
        <div className="h-full w-full lg:w-1/2 bg-white absolute top-0 right-0" />
      </div>

      <div className="container max-w-[1400px] mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center py-24 sm:py-32">
          {/* Text Content (Left Side) - Now set to exactly 1/2 of container */}
          <div className="w-full lg:w-1/2 lg:pr-16 mb-16 lg:mb-0 text-white">
            <div className="relative mb-12 flex items-start">
              {/* Gold Square Accent */}
              <div className="w-12 h-12 bg-accent opacity-90 flex-shrink-0" />
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-[1.05] tracking-tighter pl-6">
                OUR BRAND <br />
                PARTNERSHIP <br />
                PROCESS
              </h2>
            </div>
            
            <p className="max-w-md text-white/80 text-sm leading-relaxed mb-12 pl-[calc(3rem+1.5rem)] md:pl-[calc(3rem+1.5rem)]">
              We follow a structured onboarding & distribution process to ensure compliance and long term marketplace stability.
            </p>

            <div className="space-y-8 pl-[calc(3rem+1.5rem)]">
              {processes.map((item, index) => (
                <div key={index} className="flex items-start gap-6 group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent text-primary flex items-center justify-center font-bold text-sm shadow-lg shadow-accent/20">
                    {item.step}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-white text-base tracking-wide group-hover:text-accent transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-xs text-white/60 leading-relaxed max-w-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section (Overlapping as per reference) */}
          <div className="w-full lg:w-1/2 relative flex items-center pr-4">
            <div className="relative w-full aspect-[4/3] lg:aspect-[1.4/1] rounded-sm overflow-hidden shadow-[10px_30px_70px_rgba(0,0,0,0.3)] lg:-ml-24 lg:translate-y-4 z-20">
              <Image 
                src="/process.png" 
                alt="Our brand partnership process team meeting" 
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
