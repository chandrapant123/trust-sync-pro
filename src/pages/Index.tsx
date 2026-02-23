import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Building2, BarChart3, FileSearch, CheckCircle, Lock, Users, Globe, Landmark, CreditCard, HeartPulse, ShoppingCart, Wifi, Truck, Home, GraduationCap, Gamepad2, Building } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import heroBg from "@/assets/hero-bg.jpg";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const products = [
  { icon: Shield, title: "Identity & KYC Verification", desc: "Verify Aadhaar, PAN, CKYC, address, and face liveness in seconds.", outcome: "Faster onboarding with regulatory compliance." },
  { icon: BarChart3, title: "Financial & Income Intelligence", desc: "Validate bank accounts, income signals, and credit data for accurate risk decisions.", outcome: "Lower defaults and smarter underwriting." },
  { icon: Building2, title: "Business & KYB Verification", desc: "Authenticate GST, CIN, MSME status, directors, and company legitimacy.", outcome: "Fraud-free vendor and merchant onboarding." },
  { icon: FileSearch, title: "Background, Legal & Risk Checks", desc: "Screen criminal records, court data, AML signals, and fraud indicators.", outcome: "Safer customers, employees, and partners." },
  { icon: Globe, title: "Document AI & Extraction", desc: "Auto-read and verify documents for onboarding, lending, and insurance claims.", outcome: "Reduced manual work and faster processing." },
];

const industryLinks = [
  { name: "Fintech & Digital Lending", path: "/industries/fintech", icon: Zap, desc: "Instant KYC, fraud detection, and credit intelligence." },
  { name: "Banks & NBFCs", path: "/industries/banking", icon: Landmark, desc: "Compliance-ready onboarding and risk verification." },
  { name: "Insurance", path: "/industries/insurance", icon: HeartPulse, desc: "Fraud-free policies, underwriting, and claims." },
  { name: "Telecom", path: "/industries/telecom", icon: Wifi, desc: "Secure SIM KYC and subscriber verification." },
  { name: "E-Commerce", path: "/industries/ecommerce", icon: ShoppingCart, desc: "Trusted sellers, buyers, and delivery partners." },
  { name: "Logistics & Mobility", path: "/industries/logistics", icon: Truck, desc: "Driver, fleet, and vehicle verification." },
  { name: "Real Estate", path: "/industries/real-estate", icon: Home, desc: "Tenant, landlord, and property checks." },
  { name: "Healthcare", path: "/industries/healthcare", icon: HeartPulse, desc: "Doctor, patient, and hospital verification." },
  { name: "Education", path: "/industries/education", icon: GraduationCap, desc: "Student identity and certificate validation." },
  { name: "Gaming & Dating", path: "/industries/gaming", icon: Gamepad2, desc: "User KYC and fraud prevention." },
  { name: "Government", path: "/industries/government", icon: Building, desc: "Citizen verification and subsidy fraud prevention." },
];

const metrics = [
  { value: "70%", label: "Fraud Reduction" },
  { value: "3×", label: "Faster Verification" },
  { value: "50%", label: "Lower Processing Cost" },
  { value: "99.9%", label: "API Uptime" },
];

const steps = [
  { num: "01", title: "Get API Access", desc: "Create an account and receive secure API keys instantly." },
  { num: "02", title: "Integrate in Minutes", desc: "Use developer-friendly REST APIs and comprehensive documentation." },
  { num: "03", title: "Verify Instantly", desc: "Run real-time checks and automate decisions at scale." },
];

const Index = () => (
  <Layout>
    <SEOHead title="India's Most Trusted Verification & KYC API Platform | VeriSekure" description="Instantly verify identity, financial data, business credentials, and background risk with secure, real-time APIs built for fintech, banks, NBFCs, insurance, telecom, e-commerce, and enterprises." />

    {/* Hero */}
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="VeriSekure verification network" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-primary/70" />
      </div>
      <div className="container relative z-10 mx-auto px-4 py-24 lg:px-8 lg:py-36">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7 }} className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm text-primary-foreground">
            <Shield className="h-4 w-4 text-accent" /> Trusted by India's leading digital platforms
          </div>
          <h1 className="font-heading text-4xl font-extrabold leading-tight text-primary-foreground md:text-6xl text-balance">
            India's Most Trusted <span className="gradient-text-saffron">Verification & KYC</span> API Platform
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed md:text-xl">
            Instantly verify identity, financial data, business credentials, and background risk with secure, real-time APIs built for India's regulatory ecosystem.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-6 text-sm text-primary-foreground/70">
            <span className="flex items-center gap-2"><Zap className="h-4 w-4 text-accent" /> Real-time verification</span>
            <span className="flex items-center gap-2"><Shield className="h-4 w-4 text-accent" /> Fraud prevention & AML</span>
            <span className="flex items-center gap-2"><Lock className="h-4 w-4 text-accent" /> Enterprise-grade security</span>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get API Access <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/contact">Schedule a Demo</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Problem */}
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">Digital Growth Needs <span className="gradient-text-saffron">Digital Trust</span></h2>
            <p className="mt-4 text-muted-foreground text-lg">As India rapidly digitizes, businesses face rising identity fraud, fake documents, regulatory pressure, and manual verification delays. Without strong verification, growth becomes risky and expensive.</p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Products */}
    <section className="bg-secondary/50 py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">One Platform. Complete Verification.</h2>
          <p className="mt-4 text-muted-foreground text-lg">A unified suite of real-time verification APIs for onboarding, compliance, fraud prevention, and risk intelligence.</p>
        </motion.div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <motion.div key={p.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }} className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <p.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              <p className="mt-3 flex items-center gap-2 text-sm font-medium text-accent">
                <CheckCircle className="h-4 w-4" /> {p.outcome}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Industries */}
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">Industries We Power</h2>
          <p className="mt-4 text-muted-foreground text-lg">Tailored verification solutions for every major sector.</p>
        </motion.div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industryLinks.map((ind, i) => (
            <motion.div key={ind.path} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.05 }}>
              <Link to={ind.path} className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-accent/30 hover:shadow-md">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 transition-colors group-hover:bg-accent/20">
                  <ind.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-semibold text-foreground">{ind.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{ind.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Metrics */}
    <section className="gradient-hero py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-center font-heading text-3xl font-bold text-primary-foreground md:text-4xl">Verification That Drives Real Results</h2>
        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          {metrics.map((m, i) => (
            <motion.div key={m.label} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.15 }} className="text-center">
              <p className="font-heading text-4xl font-extrabold text-accent md:text-5xl">{m.value}</p>
              <p className="mt-2 text-sm text-primary-foreground/70">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* How it Works */}
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">Start Verifying in 3 Simple Steps</h2>
        </motion.div>
        <div className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div key={s.num} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.15 }} className="relative text-center">
              <span className="font-heading text-6xl font-extrabold text-accent/15">{s.num}</span>
              <h3 className="mt-2 font-heading text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button variant="saffron" size="lg" asChild>
            <Link to="/contact">Start Free Integration <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>

    {/* Security */}
    <section className="bg-secondary/50 py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">Enterprise-Grade Security You Can Trust</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {["End-to-end encrypted data flow", "Secure consent-based verification", "Full audit logs & traceability", "Privacy-first architecture aligned with Indian regulations"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-lg bg-card p-4 shadow-sm">
                  <Lock className="h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-center font-heading text-3xl font-bold text-foreground md:text-4xl">What Our Customers Say</h2>
        <div className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-2">
          {[
            { quote: "VeriSekure reduced our onboarding fraud dramatically while improving approval speed.", author: "Fintech Risk Head" },
            { quote: "Integration was seamless, and compliance audits became much easier.", author: "NBFC Operations Lead" },
          ].map((t) => (
            <div key={t.author} className="rounded-xl border border-border bg-card p-6">
              <p className="text-foreground italic">"{t.quote}"</p>
              <p className="mt-4 text-sm font-semibold text-accent">— {t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="gradient-hero py-16 lg:py-24">
      <div className="container mx-auto px-4 text-center lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="font-heading text-3xl font-bold text-primary-foreground md:text-4xl text-balance">Ready to Build a Fraud-Free, Compliant Digital Business?</h2>
          <p className="mt-4 text-lg text-primary-foreground/80">Join the growing ecosystem of companies using VeriSekure to power secure onboarding, smarter risk decisions, and trusted growth.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="lg" asChild><Link to="/contact">Get API Access <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
            <Button variant="hero-outline" size="lg" asChild><Link to="/contact">Book a Demo</Link></Button>
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Index;
