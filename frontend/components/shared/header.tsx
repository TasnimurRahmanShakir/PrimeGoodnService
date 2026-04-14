import Link from "next/link";
import { Icon } from "@/components/icons";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md text-primary py-4 border-b border-black/5">
      <div className="container max-w-[1400px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-primary p-2 rounded-sm group-hover:bg-accent transition-colors">
              <Icon name="logo" className="h-10 w-auto text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter leading-none text-primary">CROWN SUPPLY</span>
              <span className="text-sm font-bold tracking-[0.3em] leading-none text-accent">DISTRIBUTION</span>
            </div>
          </Link>
        </div>

        {/* Navigation - All Caps, Gold, Bold */}
        <nav className="hidden lg:flex items-center gap-8 text-[13px] font-black tracking-widest text-accent">
          <Link href="/" className="hover:text-primary transition-colors uppercase border-b-2 border-transparent hover:border-accent pb-1">
            HOME
          </Link>
          <Link href="#categories" className="hover:text-primary transition-colors uppercase border-b-2 border-transparent hover:border-accent pb-1">
            DISTRIBUTION CATEGORIES
          </Link>
          <Link href="#products" className="hover:text-primary transition-colors uppercase border-b-2 border-transparent hover:border-accent pb-1">
            PRODUCTS
          </Link>
          <Link href="#faq" className="hover:text-primary transition-colors uppercase border-b-2 border-transparent hover:border-accent pb-1">
            FAQ
          </Link>
          <Link href="#about" className="hover:text-primary transition-colors uppercase border-b-2 border-transparent hover:border-accent pb-1">
            ABOUT US
          </Link>
        </nav>

        {/* Contact Section */}
        <div className="flex items-center gap-3">
          <div className="text-accent">
            <Icon name="phone" className="h-8 w-8 stroke-[1.5]" />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-[10px] font-black tracking-widest text-primary uppercase">Contact Us</span>
            <span className="text-sm font-bold text-accent">+1 (414) 519-9127</span>
          </div>
        </div>
      </div>
    </header>
  );
}
