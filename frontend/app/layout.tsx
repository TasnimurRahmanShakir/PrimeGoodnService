import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { FloatingWhatsapp } from "@/components/shared/floating-whatsapp";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://primesgoods.com"),
  title: "Prime Goods and Services - Protects & Strengthens Your Brand",
  description: "Distribution and brand partnership services for health, beauty, grocery, and more.",
  icons: {
    icon: [
      { url: "/logo.jpg" },
      { url: "/logo.jpg", sizes: "192x192", type: "image/jpeg" },
      { url: "/logo.jpg", sizes: "512x512", type: "image/jpeg" },
    ],
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
  openGraph: {
    title: "Prime Goods and Services - Protects & Strengthens Your Brand",
    description: "Distribution and brand partnership services for health, beauty, grocery, and more.",
    url: "https://primesgoods.com",
    siteName: "Prime Goods and Services",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 600,
        alt: "Prime Goods and Services Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prime Goods and Services - Protects & Strengthens Your Brand",
    description: "Distribution and brand partnership services for health, beauty, grocery, and more.",
    images: ["/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Prime Goods and Services",
    url: "https://primesgoods.com",
    logo: "https://primesgoods.com/logo.jpg",
  };

  return (
    <html lang="en" className={`${inter.variable} h-full antialiased scroll-smooth`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingWhatsapp />
      </body>
    </html>
  );
}
