import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 pb-12">
      {/* Black Container with Rounded Corners */}
      <div className="relative w-full max-w-[1500px] mx-auto h-[500px] md:h-[650px] overflow-hidden rounded-[2rem] shadow-2xl">
        
        {/* Background Image with Desaturation and Darkening */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat grayscale-[60%]"
          style={{ 
            backgroundImage: "url('/hero-bg.png')",
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/70 mix-blend-multiply" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-20 max-w-4xl text-white">
          <div className="inline-flex items-center gap-2 bg-primary/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-md mb-8 w-fit shadow-lg">
            <span className="text-[12px] font-bold tracking-widest text-sky-400 uppercase">Authorized Distribution That</span>
          </div>

          <h1 className="text-4xl md:text-7xl font-black leading-[1.05] tracking-tight mb-8">
            PROTECTS & <br />
            STRENGTHENS <br />
            YOUR BRAND
          </h1>

          <p className="text-base md:text-xl text-white/80 mb-12 leading-relaxed max-w-2xl font-medium">
            We partner with brands to deliver controlled wholesale distribution across major marketplaces, 
            ensuring strict MAP compliance and pricing integrity.
          </p>

          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-black tracking-widest uppercase px-10 md:px-12 py-6 md:py-7 rounded-lg w-fit shadow-xl border border-white/5 transition-all hover:scale-105 active:scale-95">
            Partner With Us
          </Button>
        </div>
      </div>
    </section>
  );
}
