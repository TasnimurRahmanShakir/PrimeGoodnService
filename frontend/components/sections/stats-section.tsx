import { Card, CardContent } from "@/components/ui/card";

export function StatsSection() {
  const stats = [
    { label: "OVER", value: "500+", sublabel: "SKUs Under Management" },
    { label: "OPERATING ACROSS", value: "6+", sublabel: "Marketplace Categories" },
    { label: "U.S. WIDE", value: "Distribution Network", sublabel: "" },
    { label: "4+", value: "Years Proven Experience", sublabel: "" },
  ];

  const cards = [
    "U.S. Registered Business",
    "MAP Compliant",
    "Amazon Marketplace Specialists"
  ];

  return (
    <section className="relative w-full z-10">
      {/* Blue Tinted Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center grayscale-[50%]"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      >
        <div className="absolute inset-0 bg-sky-900/80 mix-blend-multiply" />
      </div>

      <div className="container relative z-10 max-w-[1500px] mx-auto px-4 py-16 sm:px-6 lg:px-8">
        
        {/* Overlapping Cards Container - Compact centered layout */}
        <div className="max-w-[1000px] mx-auto min-[1000px]:-mt-35 z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((title, i) => (
              <Card key={i} className="bg-white border-0 shadow-2xl rounded-xl transition-transform hover:-translate-y-2 duration-300">
                <CardContent className="flex items-center justify-center text-center p-8 h-20">
                  <h3 className="text-base md:text-lg font-black text-primary leading-tight tracking-tight uppercase">
                    {title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/20 text-white">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center text-center p-6 md:p-8 group hover:bg-white/5 transition-colors">
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-white/60 mb-2">
                {stat.label}
              </span>
              <span className="text-4xl md:text-5xl font-black mb-2 tracking-tighter">
                {stat.value}
              </span>
              <span className="text-xs font-bold tracking-widest text-white/80 uppercase">
                {stat.sublabel}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
