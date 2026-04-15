import Image from "next/image";
import { ProcessItem } from "@/app/(home)/type";

const processes: ProcessItem[] = [
  {
    step: "01",
    title: "BRAND REVIEW & SETUP",
    description:
      "We check if your products are a good fit and make sure our plan follows your rules.",
  },
  {
    step: "02",
    title: "OFFICIAL PARTNER AGREEMENT",
    description:
      "We sign a clear contract and follow all your specific guidelines to represent you correctly.",
  },
  {
    step: "03",
    title: "STOCK MANAGEMENT",
    description:
      "We use smart systems to predict how much stock you need so you never run out.",
  },
  {
    step: "04",
    title: "ACTIVE MARKET MONITORING",
    description:
      "We track prices and product quality online to make sure your brand stays valuable.",
  },
];

export function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Split - Black on the top/left, White on the bottom/right */}
      <div className="absolute inset-0 z-0 pointer-events-none flex flex-col lg:flex-row">
        {/* On mobile, this will expand to fill most of the space behind the text. On desktop it takes exactly half the width */}
        <div className="w-full lg:w-1/2 h-[85%] sm:h-[80%] lg:h-full bg-black" />
        <div className="w-full lg:w-1/2 flex-grow lg:h-full bg-transparent lg:bg-white" />
      </div>

      <div className="container max-w-[1400px] mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center py-24 sm:py-32">
          {/* Text Content (Left Side) - Now set to exactly 1/2 of container */}
          <div className="w-full lg:w-1/2 lg:pr-16 mb-16 lg:mb-0 text-white">
            <div className="relative mb-12 flex items-start">
              {/* Gold Square Accent */}
              <div className="w-12 h-12 bg-primary opacity-90 flex-shrink-0" />

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-[1.05] tracking-tighter pl-6">
                OUR BRAND <br /> PARTNERSHIP <br /> STEPS
              </h2>
            </div>

            <p className="max-w-md text-white/80 text-sm leading-relaxed mb-12 pl-[calc(3rem+1.5rem)] md:pl-[calc(3rem+1.5rem)]">
              We follow a proven system to start our partnership and manage your
              sales. This ensures everything stays organized and safe for your
              brand.
            </p>

            <div className="space-y-8 pl-[calc(3rem+1.5rem)]">
              {processes.map((item, index) => (
                <div key={index} className="flex items-start gap-6 group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-accent/20">
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
