import { Icon } from "@/components/icons";

const values = [
  {
    title: "Brand Integrity",
    text: "We safeguard every brand we distribute as if it were our own.",
  },
  {
    title: "Market Insight",
    text: "Leveraging data to ensure our products reach the right hands.",
  },
  {
    title: "Operational Excellence",
    text: "High-precision logistics and inventory management at scale.",
  },
];

export function MissionSection() {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-10 rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="container max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2">
            <p className="text-primary font-bold tracking-[0.2em] text-xs mb-4 uppercase">
              Our Core
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-12 uppercase tracking-tighter">
              MISSION & <span className="text-primary italic">VISION</span>
            </h2>
            
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold mb-4 border-l-4 border-primary pl-6 uppercase tracking-wide">Our Mission</h3>
                <p className="text-white/70 text-lg leading-relaxed pl-7">
                  To empower brands and retailers through a transparent, high-performance distribution ecosystem that prioritizes growth and reliability.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 border-l-4 border-white pl-6 uppercase tracking-wide">Our Vision</h3>
                <p className="text-white/70 text-lg leading-relaxed pl-7">
                  To become the global standard for strategic wholesale, bridging the gap between premium production and consumer accessibility.
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 bg-white/5 backdrop-blur-sm p-12 rounded-[2rem] border border-white/10 shadow-2xl">
            <h3 className="text-2xl font-bold mb-12 text-center uppercase tracking-widest">Our Shared Values</h3>
            <div className="space-y-10">
              {values.map((v, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                    <Icon name="check" className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-white group-hover:text-primary transition-colors">{v.title}</h4>
                    <p className="text-white/60 text-sm leading-relaxed">{v.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
