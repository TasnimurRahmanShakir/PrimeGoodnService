import { getProductById, getRelatedProducts, productTabs } from "@/lib/products";
import { Icon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ProductGallery } from "@/components/sections/product-gallery";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { headers } from "next/headers";
import type { Metadata } from "next";

// In Next.js 15, params is a Promise
interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  const host = (await headers()).get("host") || "primesgoods.com";
  const protocol = host.includes("localhost") ? "http" : "https";
  
  if (!product) return { title: "Product Not Found" };
  
  const absoluteImageUrl = `${protocol}://${host}${product.image}`;

  return {
    title: `${product.name} | Prime Goods and Services`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [
        {
          url: absoluteImageUrl,
          width: 800,
          height: 800,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.description,
      images: [absoluteImageUrl],
    },
  };
}

export default async function ProductDetailsPage({ params }: Props) {
  const { id } = await params;
  const product = getProductById(id);
  const host = (await headers()).get("host") || "primesgoods.com";
  const protocol = host.includes("localhost") ? "http" : "https";

  if (!product) {
    notFound();
  }

  // Find category ID for related products
  const categoryTab = productTabs.find(tab => 
    tab.products.some(p => p.id === product.id)
  );
  
  const relatedProducts = categoryTab 
    ? getRelatedProducts(categoryTab.id, product.id) 
    : [];

  const whatsappNumber = "19296911930";
  const productUrl = `${protocol}://${host}/products/${product.id}`;
  const absoluteImageUrl = `${protocol}://${host}${product.image}`;

  const message = `Hello! I am interested in purchasing this product from Prime Goods and Services:

*Product:* ${product.name}
*Brand:* ${product.brand}
*Price:* ${product.price}

*Product Link:* ${productUrl}
*Product Image:* ${absoluteImageUrl}

Please provide more details on how to proceed.`;
  
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-100 py-4">
        <div className="container max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <Icon name="chevronRight" className="w-3 h-3" />
            <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
            <Icon name="chevronRight" className="w-3 h-3" />
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </div>

      <main className="flex-grow py-16 md:py-24">
        <div className="container max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: Interactive Image Gallery */}
            <ProductGallery 
              images={product.images || [product.image]} 
              name={product.name} 
            />

            {/* Right: Product Info */}
            <div className="flex flex-col">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                  {product.brand}
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter leading-[1.05] mb-4">
                  {product.name}
                </h1>
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-3xl font-black text-primary italic">
                    {product.price}
                  </span>
                  <div className="h-4 w-px bg-gray-200" />
                  <div className="flex items-center gap-1 text-green-600 font-bold text-sm">
                    <Icon name="checkCircle" className="w-4 h-4" />
                    In Stock & Ready for Distribution
                  </div>
                </div>
              </div>

              <div className="space-y-8 mb-12">
                <div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-gray-900 mb-4 border-b border-gray-100 pb-2 inline-block">Description</h3>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    {product.description}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-gray-900 mb-4 border-b border-gray-100 pb-2 inline-block">Key Highlights</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "FDA Compliant Manufacturing",
                      "Third-Party Lab Tested",
                      "Authorized U.S. Distribution",
                      "Brand Integrity Protected"
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                        <Icon name="check" className="w-4 h-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-[1.5]"
                >
                  <Button size="lg" className="w-full h-16 bg-[#075E54] text-white hover:bg-[#054c44] font-black uppercase tracking-widest text-xs rounded-2xl shadow-xl shadow-green-900/10 transition-all active:scale-95 flex items-center justify-center gap-2">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.539 2.016 2.126-.54c.947.527 1.912.814 3.163.815 3.181 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.768-5.769-5.778zm3.387 7.464c-.12.401-.713.79-1.011.817-.297.027-.551.139-1.745-.333-1.457-.571-2.398-2.04-2.471-2.137-.073-.098-.593-.762-.593-1.455 0-.693.363-1.035.492-1.171.129-.136.28-.174.373-.174.093 0 .186.002.268.005.086.002.203-.032.317.234.117.272.399 1.002.433 1.074.034.072.057.155.008.252-.049.098-.073.158-.147.245-.074.086-.14.156-.217.243-.077.086-.156.177-.071.32.085.144.381.604.811 1.026.54.524 1.029.689 1.187.757.158.067.251.054.344-.05.093-.105.399-.46.505-.623.106-.163.212-.136.35-.086s.87.409.998.448c.128.039.214.058.245.111.031.053.031.252-.089.654z"/></svg>
                    Order via WhatsApp
                  </Button>
                </a>
                <Link href="/apply" className="flex-1">
                  <Button size="lg" variant="outline" className="w-full h-16 border-2 border-gray-100 hover:border-black hover:text-black font-black uppercase tracking-widest text-xs rounded-2xl transition-all active:scale-95">
                    Become a Partner
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-24 pt-24 border-t border-gray-100">
              <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter mb-12">Related <span className="text-primary italic">Distribution</span></h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {relatedProducts.map((rel) => (
                  <Link key={rel.id} href={`/products/${rel.id}`} className="group">
                    <div className="bg-white rounded-[1.5rem] border border-gray-100 p-4 transition-all duration-300 hover:shadow-xl group-hover:-translate-y-1">
                      <div className="relative aspect-square bg-[#f6f7f8] rounded-2xl overflow-hidden mb-4 p-4">
                        <Image src={rel.image} alt={rel.name} fill className="object-contain" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-1 truncate">{rel.name}</h4>
                      <p className="text-xs font-bold text-primary uppercase mb-2">{rel.brand}</p>
                      <span className="font-black text-gray-900">{rel.price}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
