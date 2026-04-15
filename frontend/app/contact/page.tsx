import { Metadata } from "next";
import { Icon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact Us | Prime Goods and Services",
  description: "Get in touch with Prime Goods and Services for wholesale inquiries and partnerships.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-black text-white">
        <div className="absolute inset-0 z-0 opacity-20 grayscale" style={{ backgroundImage: "url('/hero-bg.png')", backgroundSize: 'cover' }} />
        <div className="container relative z-10 max-w-[1400px] mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">Contact <span className="text-primary italic">Us</span></h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">Have questions about our distribution network or partnership programs? Reach out to our team today.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container max-w-[1400px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight mb-8">Our Offices</h2>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                      <Icon name="phone" className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 uppercase text-xs tracking-widest mb-1">Phone</h4>
                      <p className="text-lg font-bold text-gray-800">+1 (929) 691-1930</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                       <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 uppercase text-xs tracking-widest mb-1">Address</h4>
                      <p className="text-lg font-bold text-gray-800 leading-relaxed">
                        106-38 Guy R Brewer Blvd,<br />
                        Jamaica, NY 11433
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-gray-50 rounded-[2rem] border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">Wholesale & Partnership</h3>
                <p className="text-gray-600 mb-6 font-medium">For large-scale distribution inquiries and brand representation requests, please use our dedicated application portal.</p>
                <a href="/apply" className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest text-xs hover:gap-3 transition-all">
                  Go to Application Portal <Icon name="arrowRight" className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Simple Contact Form */}
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100">
              <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-8">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Full Name</label>
                    <input type="text" className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Email Address</label>
                    <input type="email" className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Subject</label>
                  <input type="text" className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="How can we help?" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Message</label>
                  <textarea rows={5} className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none" placeholder="Write your message here..." />
                </div>
                <button type="submit" className="w-full py-5 bg-black text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-primary transition-all shadow-xl shadow-black/10">Submit Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
