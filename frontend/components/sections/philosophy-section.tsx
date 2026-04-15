import { Icon } from "@/components/icons";

export function PhilosophySection() {
  const points = [
    {
      title: "Precision Logistics",
      desc: "Our systems are designed for surgical accuracy in inventory management and distribution timing.",
    },
    {
      title: "Brand Safeguarding",
      desc: "We prioritize your brand's reputation above all else, ensuring authorized-only retail presence.",
    },
    {
      title: "Strategic Scaling",
      desc: "We don't just distribute; we identify growth levers that help your brand expand predictably.",
    },
    {
      title: "Adaptive Innovation",
      desc: "We continuously evolve our methodology to meet the shifting demands of the modern global marketplace.",
    },
  ];

  return (
    <section className="py-24 bg-[#f8f9fb]">
      <div className="container max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <p className="text-primary font-bold tracking-[0.2em] text-xs mb-4 uppercase">
              Our Philosophy
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 uppercase tracking-tighter">
              BEYOND <span className="text-primary italic">DISTRIBUTION</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 font-medium">
              We believe that distribution is a science of trust. For Prime Goods and Services, every shipment is a promise of quality and every partnership is a commitment to long-term stability.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
               {points.map((p, i) => (
                 <div key={i} className="flex flex-col gap-3">
                   <div className="w-10 h-1 bg-primary mb-2" />
                   <h4 className="font-bold text-gray-900 uppercase tracking-wide">{p.title}</h4>
                   <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                 </div>
               ))}
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
             <div className="aspect-[4/5] bg-black rounded-3xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                   <p className="text-white text-3xl font-black uppercase tracking-tighter italic">Trust.</p>
                </div>
             </div>
             <div className="aspect-[4/5] bg-primary rounded-3xl translate-y-8 relative overflow-hidden group">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                   <p className="text-white text-3xl font-black uppercase tracking-tighter italic">Scale.</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
