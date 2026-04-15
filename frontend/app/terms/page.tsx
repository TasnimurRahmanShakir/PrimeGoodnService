export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-24 bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-black uppercase tracking-tight mb-12 text-gray-900 border-b-4 border-primary pb-4 inline-block">Terms and Conditions</h1>
          
          <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
            <p className="font-medium text-lg text-gray-800">Last Updated: April 15, 2026</p>
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Wholesale & Distribution</h2>
              <p>All wholesale applications are subject to approval by Prime Goods and Services. We reserve the right to refuse service or partnerships at our discretion. Approved partners must comply with our Minimum Advertised Price (MAP) policies where applicable.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Intellectual Property</h2>
              <p>The name "Prime Goods and Services", "Primes", and all related logos are trademarks of Prime Goods and Services. You may not use these trademarks without our prior written permission.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Limitation of Liability</h2>
              <p>Prime Goods and Services shall not be liable for any special or consequential damages that result from the use of, or the inability to use, the materials on this site or the performance of the products.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Governing Law</h2>
              <p>These terms and conditions are governed by and construed in accordance with the laws of the State of New York and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
