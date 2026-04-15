import Image from "next/image";

export function AboutUsSection() {
  return (
    <section id="about" className="py-24 bg-[#f8f9fb] overflow-hidden relative">
      <div className="container max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <p className="text-black font-bold tracking-[0.2em] text-xs mb-4 uppercase">
              About Prime Goods & Services
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 uppercase tracking-tighter">
              DRIVING GROWTH THROUGH{" "}
              <span className="text-primary italic">
                STRATEGIC DISTRIBUTION
              </span>
            </h2>
            <div className="w-24 h-1 bg-black mb-8" />
            <p className="text-gray-600 text-lg leading-relaxed mb-6 font-medium">
              At Prime Goods and Services, we redefine the wholesale and
              distribution landscape. Our approach isn't just about moving
              products; it's about building long-term, scalable partnerships
              with brands to ensure their presence is optimized and protected
              across diverse markets.
            </p>
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              We leverage data-driven logistics, premium relationships, and
              specialized retail insights to navigate complex industries.
              Whether it's healthcare, electronics, or beauty, our structured
              model keeps your brand's integrity intact while maximizing your
              reach.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12 mt-8">
              <div className="flex flex-col items-start border-l-2 border-primary pl-4">
                <span className="text-3xl font-black text-gray-900">14+</span>
                <span className="text-xs uppercase font-bold tracking-widest text-primary mt-1">
                  Years Experience
                </span>
              </div>
              <div className="flex flex-col items-start border-l-2 border-black pl-4">
                <span className="text-3xl font-black text-gray-900">100+</span>
                <span className="text-xs uppercase font-bold tracking-widest text-primary mt-1">
                  Brand Partners
                </span>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative flex justify-center mt-12 lg:mt-0">
            <div className="relative w-full aspect-square max-w-lg rounded-2xl overflow-hidden shadow-2xl z-10">
              <Image
                src="/hero-bg.png"
                alt="About Prime Distribution"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
            </div>
            {/* Minimalist Decoration block */}
            <div className="absolute -bottom-8 -left-20 xl:-left-8 w-40 h-40 bg-primary z-0 rounded-tl-3xl rounded-br-3xl hidden md:block" />
            <div className="absolute -top-8 -right-8 w-32 h-32 border-4 border-black z-0 rounded-tr-3xl hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
