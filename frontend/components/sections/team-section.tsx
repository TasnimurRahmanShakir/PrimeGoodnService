import Image from "next/image";

const teamMembers = [
  {
    name: "David Reynolds",
    role: "Chief Executive Officer",
    image: "/team-ceo.png",
  },
  {
    name: "Elena Rodriguez",
    role: "Director of Operations",
    image: "/team-director.png",
  },
  {
    name: "Marcus Thorne",
    role: "Head of Logistics",
    image: "/team-logistics.png",
  },
  {
    name: "Sophia Sterling",
    role: "Brand Partnership Manager",
    image: "/team-brand.png",
  },
];

export function TeamSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-primary font-bold tracking-[0.2em] text-xs mb-4 uppercase">
            The Minds Behind Prime
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 uppercase tracking-tighter">
            OUR LEADERSHIP <span className="text-primary italic">TEAM</span>
          </h2>
          <div className="w-24 h-1 bg-black mx-auto" />
          <p className="max-w-2xl mx-auto text-gray-500 mt-8 text-lg font-medium">
            Dedicated professionals with decades of combined experience in distribution, logistics, and partner relations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-12 mt-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="group flex flex-col items-center">
              <div className="relative w-full aspect-[4/5] mb-8 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-700 group-hover:shadow-[0_40px_80px_rgba(185,0,39,0.15)] group-hover:-translate-y-3">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                {/* Overlay with primary accent border on hover */}
                <div className="absolute inset-0 border-0 group-hover:border-[12px] border-primary/20 transition-all duration-500 rounded-3xl pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-8">
                    <p className="text-white/80 text-xs font-bold tracking-widest uppercase mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        Connect with
                    </p>
                    <p className="text-white text-lg font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-75">
                        {member.name}
                    </p>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-primary">
                  {member.name}
                </h3>
                <p className="text-sm font-black tracking-[0.15em] text-primary uppercase mb-4">
                  {member.role}
                </p>
                <div className="w-8 h-0.5 bg-gray-200 mx-auto transition-all duration-500 group-hover:w-20 group-hover:bg-primary" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
