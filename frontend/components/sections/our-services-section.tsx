import { Icon } from "@/components/icons";

const services = [
  {
    title: "B2B Wholesale Distribution",
    description: "Reliable and high-volume product sourcing for retailers, leveraging our extensive catalog.",
    icon: "checkCircle",
  },
  {
    title: "Brand Partnership",
    description: "End-to-end representation of your brand, ensuring quality control and market positioning.",
    icon: "checkCircle",
  },
  {
    title: "Logistics & Fulfillment",
    description: "Fast, accurate, and scalable fulfillment operations designed to handle enterprise demands.",
    icon: "checkCircle",
  },
  {
    title: "Marketplace Management",
    description: "Optimizing product listings, monitoring pricing, and driving sales across top marketplaces.",
    icon: "checkCircle",
  },
];

export function OurServicesSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-black font-bold tracking-[0.2em] text-xs mb-4 uppercase">
            What We Do
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 uppercase tracking-tighter">
            OUR <span className="text-primary italic">SERVICES</span>
          </h2>
          <div className="w-24 h-1 bg-black mx-auto mb-8" />
          <p className="max-w-3xl mx-auto text-gray-600 text-lg font-medium">
            We provide a comprehensive suite of distribution and brand management services to scale your business and safeguard your brand's integrity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-2xl bg-[#f8f9fb] border border-gray-100 hover:bg-black transition-colors duration-500 hover:shadow-2xl flex flex-col items-start"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white flex items-center justify-center mb-6 transition-colors duration-500">
                <Icon name={service.icon as any} className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors duration-500">
                {service.title}
              </h3>
              <p className="text-gray-600 group-hover:text-white/80 leading-relaxed font-medium transition-colors duration-500">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
