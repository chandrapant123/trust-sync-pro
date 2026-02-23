import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const Privacy = () => (
  <Layout>
    <SEOHead title="Privacy Policy | VeriSekure" description="VeriSekure's privacy policy explains how we collect, use, and protect your personal and business data." />

    <section className="gradient-hero py-16 lg:py-20">
      <div className="container mx-auto px-4 text-center lg:px-8">
        <h1 className="font-heading text-3xl font-bold text-primary-foreground md:text-4xl">Privacy Policy</h1>
        <p className="mt-3 text-primary-foreground/70">Last updated: February 2026</p>
      </div>
    </section>

    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="prose prose-lg mx-auto max-w-3xl text-foreground">
          <h2 className="font-heading text-xl font-bold text-foreground">1. Introduction</h2>
          <p className="text-muted-foreground">VeriSekure ("we," "our," or "us") is committed to protecting the privacy of our users and customers. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our verification APIs and services.</p>

          <h2 className="mt-8 font-heading text-xl font-bold text-foreground">2. Information We Collect</h2>
          <p className="text-muted-foreground">We collect information necessary to provide our verification services, including:</p>
          <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
            <li>Account registration details (name, email, company)</li>
            <li>Verification request data submitted through APIs</li>
            <li>Usage logs and API access patterns</li>
            <li>Payment and billing information</li>
          </ul>

          <h2 className="mt-8 font-heading text-xl font-bold text-foreground">3. How We Use Your Information</h2>
          <p className="text-muted-foreground">We use collected information to:</p>
          <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
            <li>Provide and improve our verification services</li>
            <li>Process verification requests securely</li>
            <li>Maintain audit logs for compliance</li>
            <li>Communicate service updates and support</li>
            <li>Prevent fraud and ensure platform security</li>
          </ul>

          <h2 className="mt-8 font-heading text-xl font-bold text-foreground">4. Data Security</h2>
          <p className="text-muted-foreground">We implement enterprise-grade security measures including end-to-end encryption, secure data storage, access controls, and regular security audits. All data processing complies with applicable Indian data protection regulations.</p>

          <h2 className="mt-8 font-heading text-xl font-bold text-foreground">5. Data Retention</h2>
          <p className="text-muted-foreground">We retain verification data only as long as necessary for business and compliance purposes. API request logs are retained in accordance with regulatory requirements. You may request data deletion subject to legal obligations.</p>

          <h2 className="mt-8 font-heading text-xl font-bold text-foreground">6. Third-Party Sharing</h2>
          <p className="text-muted-foreground">We do not sell your data. We may share data with authorized government data sources for verification purposes, service providers who assist in our operations, and as required by law or regulation.</p>

          <h2 className="mt-8 font-heading text-xl font-bold text-foreground">7. Your Rights</h2>
          <p className="text-muted-foreground">You have the right to access, correct, or delete your personal information. Contact us at privacy@verisekure.com for any privacy-related requests.</p>

          <h2 className="mt-8 font-heading text-xl font-bold text-foreground">8. Contact Us</h2>
          <p className="text-muted-foreground">For privacy inquiries, contact our Data Protection Officer at privacy@verisekure.com.</p>
        </div>
      </div>
    </section>
  </Layout>
);

export default Privacy;
