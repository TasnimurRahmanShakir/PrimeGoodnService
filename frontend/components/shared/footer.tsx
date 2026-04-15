"use client";

import Link from "next/link";
import { Icon } from "@/components/icons";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const isCategoryPage = pathname === "/categories";

  return (
    <footer
      className={
        isCategoryPage
          ? "bg-white text-black border-t border-black/10"
          : "bg-black text-white border-t border-white/10"
      }>
      <div className="container max-w-[1500px] mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <Link
              href="/"
              className="inline-block mb-6 hover:opacity-80 transition-opacity">
              <Image
                src={isCategoryPage ? "/logo.jpg" : "/logo-white.png"}
                alt="Brand Logo"
                width={200}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p
              className={`text-sm leading-relaxed max-w-xs ${isCategoryPage ? "text-gray-600" : "text-white/70"}`}>
              Providing premium goods and services across multiple sectors,
              ensuring the highest standards of quality and distribution.
            </p>

            <div className="mt-6 space-y-3">
              <div
                className={`flex items-start gap-3 ${isCategoryPage ? "text-gray-800" : "text-white/80"}`}>
                <svg
                  className="h-5 w-5 mt-0.5 text-accent flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-sm">
                  106-38 Guy R Brewer Blvd,
                  <br />
                  Jamaica, NY 11433
                </span>
              </div>
              <div
                className={`flex items-center gap-3 ${isCategoryPage ? "text-gray-800" : "text-white/80"}`}>
                <Icon
                  name="phone"
                  className="h-5 w-5 text-accent flex-shrink-0"
                />
                <a
                  href="https://wa.me/19296911930"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold hover:text-accent transition-colors">
                  +1 (929) 691-1930
                </a>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <Link
                href="https://www.facebook.com/PrimeGoodsAndServices"
                className={
                  isCategoryPage
                    ? "bg-black/5 hover:bg-primary text-black hover:text-white border border-black/10 p-2.5 rounded-full transition-all duration-300 hover:-translate-y-1 shadow-sm group"
                    : "bg-white/5 hover:bg-accent text-white border border-white/10 p-2.5 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/30 group"
                }>
                <svg
                  className="w-4 h-4 group-hover:scale-110 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                href="#"
                className={
                  isCategoryPage
                    ? "bg-black/5 hover:bg-primary text-black hover:text-white border border-black/10 p-2.5 rounded-full transition-all duration-300 hover:-translate-y-1 shadow-sm group"
                    : "bg-white/5 hover:bg-accent text-white border border-white/10 p-2.5 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/30 group"
                }>
                <svg
                  className="w-4 h-4 group-hover:scale-110 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                href="#"
                className={
                  isCategoryPage
                    ? "bg-black/5 hover:bg-primary text-black hover:text-white border border-black/10 p-2.5 rounded-full transition-all duration-300 hover:-translate-y-1 shadow-sm group"
                    : "bg-white/5 hover:bg-accent text-white border border-white/10 p-2.5 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/30 group"
                }>
                <svg
                  className="w-4 h-4 group-hover:scale-110 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div className="col-span-1">
            <h3 className="font-bold text-accent mb-6 uppercase tracking-wider text-sm">
              Company
            </h3>
            <ul
              className={`space-y-4 text-sm ${isCategoryPage ? "text-gray-700" : ""}`}>
              <li>
                <Link
                  href="/about"
                  className="hover:text-accent transition-colors">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-accent transition-colors">
                  What We Do
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="col-span-1">
            <h3 className="font-bold text-accent mb-6 uppercase tracking-wider text-sm">
              Quick Links
            </h3>
            <ul
              className={`space-y-4 text-sm ${isCategoryPage ? "text-gray-700" : ""}`}>
              <li>
                <Link
                  href="/products"
                  className="hover:text-accent transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-accent transition-colors">
                  Service
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className="hover:text-accent transition-colors">
                  Distribution Categories
                </Link>
              </li>
              <li>
                <Link
                  href="/apply"
                  className="hover:text-accent transition-colors">
                  Partner With Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources & Info */}
          <div className="col-span-1">
            <h3 className="font-bold text-accent mb-6 uppercase tracking-wider text-sm">
              Links
            </h3>
            <ul
              className={`space-y-4 text-sm ${isCategoryPage ? "text-gray-700" : ""}`}>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-accent transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-accent transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="hover:text-accent transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className={`mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs ${isCategoryPage ? "border-black/10 text-gray-500" : "border-secondary-foreground/10 text-white"}`}>
          <p>© {currentYear} Prime Goods and Services. All Rights Reserved.</p>
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-center md:text-right font-medium">
            <p>
              Developed by{" "}
              <span className="text-primary font-bold">Jolforing</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
