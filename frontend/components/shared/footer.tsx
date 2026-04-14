import Link from "next/link";
import { Icon } from "@/components/icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground border-t">
      <div className="container max-w-[1500px] mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-6 text-accent">
              <Icon name="logo" className="h-8 w-auto" />
            </Link>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed max-w-xs">
              Providing premium goods and services across multiple sectors, ensuring the highest standards of quality and distribution.
            </p>
          </div>

          {/* Company Links */}
          <div className="col-span-1">
            <h3 className="font-bold text-accent mb-6 uppercase tracking-wider text-sm">Company</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="#who-we-are" className="hover:text-accent transition-colors">Who We Are</Link></li>
              <li><Link href="#what-we-do" className="hover:text-accent transition-colors">What We Do</Link></li>
              <li><Link href="#careers" className="hover:text-accent transition-colors">Careers</Link></li>
              <li><Link href="#contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="col-span-1">
            <h3 className="font-bold text-accent mb-6 uppercase tracking-wider text-sm">Services</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="#health" className="hover:text-accent transition-colors">Health & Wellness</Link></li>
              <li><Link href="#beauty" className="hover:text-accent transition-colors">Beauty & Care</Link></li>
              <li><Link href="#grocery" className="hover:text-accent transition-colors">Grocery & Retail</Link></li>
              <li><Link href="#electronics" className="hover:text-accent transition-colors">Home Electronics</Link></li>
            </ul>
          </div>

          {/* Resources & Info */}
          <div className="col-span-1">
            <h3 className="font-bold text-accent mb-6 uppercase tracking-wider text-sm">Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-accent transition-colors">Terms of Service</Link></li>
              <li><Link href="/faq" className="hover:text-accent transition-colors">FAQs</Link></li>
              <li><Link href="/support" className="hover:text-accent transition-colors">Support</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-secondary-foreground/50">
          <p>© {currentYear} Primes Goods and Services. All Rights Reserved.</p>
          <p>Powered by Primes Systems</p>
        </div>
      </div>
    </footer>
  );
}
