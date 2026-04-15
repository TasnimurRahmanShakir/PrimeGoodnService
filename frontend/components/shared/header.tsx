import Link from "next/link";
import { Icon } from "@/components/icons";
import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white py-4 border-b border-gray-200 shadow-sm transition-all duration-300">
      <div className="container max-w-[1400px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-3 group hover:opacity-80 transition-transform duration-300 hover:scale-[1.02] active:scale-95">
            <Image
              src="/logo.jpg"
              alt="Brand Logo"
              width={200}
              height={60}
              className="h-14 w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* Navigation - Modern, Sleek, Glass Pills */}
        <nav className="hidden lg:flex items-center gap-1 p-1.5 bg-gray-50/50 border border-gray-100/80 rounded-full shadow-inner">
          <Link
            href="/"
            className="relative px-5 py-2 text-[13px] font-bold text-gray-600 hover:text-primary transition-all duration-300 rounded-full hover:bg-white hover:shadow-sm">
            Home
          </Link>
          <Link
            href="#categories"
            className="relative px-5 py-2 text-[13px] font-bold text-gray-600 hover:text-primary transition-all duration-300 rounded-full hover:bg-white hover:shadow-sm">
            Distribution Categories
          </Link>
          <Link
            href="#products"
            className="relative px-5 py-2 text-[13px] font-bold text-gray-600 hover:text-primary transition-all duration-300 rounded-full hover:bg-white hover:shadow-sm">
            Products
          </Link>
          <Link
            href="#faq"
            className="relative px-5 py-2 text-[13px] font-bold text-gray-600 hover:text-primary transition-all duration-300 rounded-full hover:bg-white hover:shadow-sm">
            FAQ
          </Link>
          <Link
            href="#about"
            className="relative px-5 py-2 text-[13px] font-bold text-gray-600 hover:text-primary transition-all duration-300 rounded-full hover:bg-white hover:shadow-sm">
            About Us
          </Link>
        </nav>

        {/* Contact Section - Premium Active Pill */}
        <div className="flex items-center">
          <Link
            href="tel:+14145199127"
            className="group flex items-center gap-3 bg-gradient-to-r from-primary to-[#163859] hover:from-[#0a2540] hover:to-[#0a2540] text-white px-5 py-2.5 rounded-full shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30 active:scale-95 border border-white/5">
            <div className="bg-accent/20 p-2 rounded-full text-accent group-hover:bg-accent group-hover:text-primary transition-colors duration-300">
              <Icon name="phone" className="h-4 w-4" />
            </div>
            <div className="hidden sm:flex flex-col pr-1 text-left">
              <span className="text-[9px] font-extrabold tracking-[0.2em] text-accent/90 uppercase leading-none mb-1">
                Contact Us
              </span>
              <span className="text-sm font-extrabold tracking-wide leading-none text-white">
                +1 (414) 519-9127
              </span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
