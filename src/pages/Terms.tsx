import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const Terms = () => (
  <Layout>
    <SEOHead title="Terms of Service | BharateVerify" description="Read BharateVerify's terms of service for using our verification APIs and platform." />

    <section className="gradient-hero py-16 lg:py-20">
      <div className="container mx-auto px-4 text-center lg:px-8">
        <h1 className="font-heading text-3xl font-bold text-primary-foreground md:text-4xl">Terms of Service</h1>
        <p className="mt-3 text-primary-foreground/70">Last updated: February 2026</p>
      </div>
    </section>

    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="prose prose-lg mx-auto max-w-3xl text-foreground">
          <h2 className="font-heading text-xl font-bold text-foreground">1. Acceptance of Terms</h2>
          <p className="text-muted-foreground">By accessing or using BharateVerify's services, APIs, or website, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>

          <h2 className="mt-8 font-heading text-xl font-bold text-foreground">2. Services</h2>
          <p className="text-muted-foreground">BharateVerify provides identity verification, KYC, KYB, financial verification, background checks, and related APIs. Our services are designed for businesses operating in India's regulatory framework.</p>

          <h2 className="mt-8 font-heading text-xl font-bold text-foreground">3. Account Registration</h2>
          <p className="text-muted-foreground">You must register for an account to access our APIs. You are responsible for maintaining the confidentiality of your API keys and account credentials. You must provide accurate and complete information during registration.</p>

          <h2 className="mt-8 font-heading text-xl font-bold text-foreground">4. Acceptable Use</h2>
          <p className="text-muted-foreground">You agree to use our services only for lawful purposes and in compliance with applicable regulations. You shall not:</p>
          <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
            <li>Use the services for unauthorized surveillance or harassment</li>
            <li>Attempt to reverse-engineer or circumvent our security measures</li>
            <li>Share API keys with unauthorized third parties</li>
            <li>Submit false or misleading verification requests</li>
            <li>Exceed rate limits or abuse the platform</li>
          </ul>

          <h2 className="mt-8 font-heading text-xl font-bold text-foreground">5. Data Processing</h2>
          <p className="text-muted-foreground">You acknowledge that verification data is processed in accordance with applicable Indian data protection laws. You are responsible for obtaining necessary consents from end-users before submitting their data for verification.</p>

          <h2 className="mt-8 font-heading text-xl font-bold text-foreground">6. Pricing & Payment</h2>
          <p className="text-muted-foreground">API usage is billed according to your selected plan. Pricing is subject to change with advance notice. Unpaid balances may result in service suspension.</p>

          <h2 className="mt-8 font-heading text-xl font-bold text-foreground">7. Service Level</h2>
          <p className="text-muted-foreground">We strive for 99.9% API uptime. Scheduled maintenance will be communicated in advance. We are not liable for downtime caused by third-party data sources or force majeure events.</p>

          <h2 className="mt-8 font-heading text-xl font-bold text-foreground">8. Limitation of Liability</h2>
          <p className="text-muted-foreground">BharateVerify's liability is limited to the fees paid by you in the 12 months preceding any claim. We are not liable for indirect, incidental, or consequential damages.</p>

          <h2 className="mt-8 font-heading text-xl font-bold text-foreground">9. Termination</h2>
          <p className="text-muted-foreground">Either party may terminate the agreement with 30 days' written notice. We may suspend services immediately for Terms violations.</p>

          <h2 className="mt-8 font-heading text-xl font-bold text-foreground">10. Governing Law</h2>
          <p className="text-muted-foreground">These Terms are governed by the laws of India. Disputes shall be resolved through arbitration in accordance with Indian arbitration laws.</p>

          <h2 className="mt-8 font-heading text-xl font-bold text-foreground">11. Contact</h2>
          <p className="text-muted-foreground">For questions about these Terms, contact us at legal@bharateverify.in.</p>
        </div>
      </div>
    </section>
  </Layout>
);

export default Terms;
