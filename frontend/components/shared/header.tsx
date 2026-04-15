"use client";

import Link from "next/link";
import { Icon } from "@/components/icons";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/services", label: "Services" },
    { href: "/categories", label: "Distribution Categories" },

    { href: "/about", label: "About Us" },
    { href: "/faq", label: "FAQ" },
  ];

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
              className="h-10 sm:h-14 w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden lg:flex items-center gap-1 p-1.5 bg-gray-50/50 border border-gray-100/80 rounded-full shadow-inner">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname?.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-5 py-2 text-[13px] font-bold transition-all duration-300 rounded-full ${
                  isActive
                    ? "bg-primary text-white shadow-sm"
                    : "text-gray-600 hover:text-primary hover:bg-white hover:shadow-sm"
                }`}>
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Contact Section & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/19296911930"
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden sm:flex items-center gap-3 bg-gradient-to-r from-primary to-primary hover:from-black hover:to-black text-white px-5 py-2.5 rounded-full shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30 active:scale-95 border border-white/5">
            <div className="bg-white p-2 rounded-full text-primary transition-colors duration-300">
              <Icon name="phone" className="h-4 w-4" />
            </div>
            <div className="flex flex-col pr-1 text-left">
              <span className="text-[9px] font-semibold tracking-[0.2em] text-white uppercase leading-none mb-1">
                WhatsApp Us
              </span>
              <span className="text-sm font-semibold tracking-wide leading-none text-white">
                +1 (929) 691-1930
              </span>
            </div>
          </a>

          <button
            className="lg:hidden p-2 text-gray-600 hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <Icon name="menu" className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg py-4 px-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname?.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-sm font-bold p-2 border-b border-gray-50 transition-colors ${
                  isActive
                    ? "text-primary bg-primary/5"
                    : "text-gray-800 hover:text-primary"
                }`}>
                {link.label}
              </Link>
            );
          })}
          <a
            href="https://wa.me/19296911930"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden mt-2 flex items-center justify-center gap-3 bg-primary text-white p-4 rounded-full font-bold shadow-lg shadow-primary/20">
            <Icon name="phone" className="h-5 w-5" />
            WhatsApp +1 (123) 456-7890
          </a>
        </div>
      )}
    </header>
  );
}
