import { Icon } from "@/components/icons";
import Link from "next/link";

export default function SupportPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-24 bg-[#f8f9fb]">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 text-gray-900">
            Support <span className="text-primary italic">Center</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            How can we assist you today? Our support team is here to help with
            your distribution needs.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 bg-gray-50 rounded-[2rem] border border-gray-100 flex flex-col items-center text-center group hover:bg-black transition-all duration-500">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                <Icon name="phone" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-2 group-hover:text-white transition-colors duration-500">
                Phone Support
              </h3>
              <p className="text-gray-500 group-hover:text-white/70 transition-colors duration-500 mb-6 text-sm">
                Available Monday to Friday, 9am - 5pm EST.
              </p>
              <a
                href="https://wa.me/19296911930"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-bold text-lg group-hover:text-white transition-colors duration-500">
                +1 (929) 691-1930
              </a>
            </div>

            <div className="p-10 bg-gray-50 rounded-[2rem] border border-gray-100 flex flex-col items-center text-center group hover:bg-black transition-all duration-500">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                <Icon name="search" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-2 group-hover:text-white transition-colors duration-500">
                Resource Center
              </h3>
              <p className="text-gray-500 group-hover:text-white/70 transition-colors duration-500 mb-6 text-sm">
                Browse our FAQs and guides for immediate answers.
              </p>
              <a
                href="/faq"
                className="inline-flex items-center gap-2 text-primary font-bold group-hover:text-white transition-colors duration-500">
                Visit FAQ <Icon name="arrowRight" className="w-4 h-4" />
              </a>
            </div>

            <div className="p-10 bg-gray-50 rounded-[2rem] border border-gray-100 flex flex-col items-center text-center group hover:bg-black transition-all duration-500">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                <Icon name="checkCircle" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-2 group-hover:text-white transition-colors duration-500">
                Application Support
              </h3>
              <p className="text-gray-500 group-hover:text-white/70 transition-colors duration-500 mb-6 text-sm">
                Need help with your wholesale application?
              </p>
              <a
                href="/apply"
                className="inline-flex items-center gap-2 text-primary font-bold group-hover:text-white transition-colors duration-500">
                Apply Now <Icon name="arrowRight" className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
