export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-24 bg-gray-50">
        <div className="container max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-black uppercase tracking-tight mb-12 text-gray-900 border-b-4 border-primary pb-4 inline-block">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
            <p className="font-medium text-lg text-gray-800">Effective Date: April 15, 2026</p>
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
              <p>We collect information you provide directly to us when you fill out forms on our website, including wholesale applications, contact forms, and support requests. This may include your name, business email, phone number, and company details.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p>We use the information we collect to process your applications, provide our distribution services, communicate with you about your account, and improve our platform's performance and security.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized processing and against accidental loss, destruction, or damage.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Sharing of Information</h2>
              <p>We do not sell your personal information. We may share data with trusted service providers who assist us in operating our website or conducting our distribution business, so long as those parties agree to keep this information confidential.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at privacy@primesgoods.com.</p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
