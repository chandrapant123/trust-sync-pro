import { motion } from "framer-motion";
import { Shield, Users, Globe, Zap, Target, Award } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const values = [
  { icon: Shield, title: "Trust First", desc: "Every API, every check, every decision is built on a foundation of trust. We protect businesses and their customers alike." },
  { icon: Zap, title: "Speed at Scale", desc: "Real-time verifications processed in milliseconds, built to handle millions of requests without compromise." },
  { icon: Target, title: "Accuracy Matters", desc: "We combine multiple data sources and intelligent validation to deliver the most accurate verification results." },
  { icon: Users, title: "Customer Obsessed", desc: "Developer-friendly APIs, comprehensive documentation, and dedicated support — your success is our success." },
  { icon: Globe, title: "India First", desc: "Purpose-built for India's regulatory landscape, supporting every compliance requirement from RBI KYC to AML." },
  { icon: Award, title: "Innovation Driven", desc: "Continuously evolving our technology to stay ahead of emerging fraud patterns and regulatory changes." },
];

const About = () => (
  <Layout>
    <SEOHead title="About BharateVerify | India's Trusted KYC & Verification Platform" description="Learn about BharateVerify's mission to power trust in India's digital economy through real-time identity, financial, and business verification APIs." />

    <section className="gradient-hero py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6 }} className="mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-3xl font-bold text-primary-foreground md:text-5xl">Powering Trust in India's Digital Economy</h1>
          <p className="mt-6 text-lg text-primary-foreground/80">BharateVerify is India's unified verification platform — helping businesses onboard genuine customers, prevent fraud, and stay compliant at scale.</p>
        </motion.div>
      </div>
    </section>

    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">Our Mission</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">As India rapidly digitizes across fintech, banking, e-commerce, healthcare, and government services, the need for instant, reliable verification has never been greater. BharateVerify was founded to solve this critical challenge.</p>
            <p className="mt-4 text-muted-foreground leading-relaxed">We provide a single, secure platform that enables organizations of all sizes to verify identities, validate financial data, authenticate businesses, and screen for risk — all in real time, with full regulatory compliance.</p>
            <p className="mt-4 text-muted-foreground leading-relaxed">Our APIs are trusted by fintech leaders, banks, NBFCs, insurers, e-commerce platforms, and government programs across India, processing millions of verifications securely every day.</p>
          </motion.div>
        </div>
      </div>
    </section>

    <section className="bg-secondary/50 py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-center font-heading text-2xl font-bold text-foreground md:text-3xl">Our Values</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <motion.div key={v.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }} className="rounded-xl border border-border bg-card p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10">
                <v.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">Why Choose BharateVerify?</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 text-left">
            {["Pan-India coverage across 500+ verification types", "Sub-second API response times with 99.9% uptime", "RBI, AML, KYC, and data protection compliant", "Enterprise-grade encryption and security", "Developer-friendly REST APIs with SDKs", "Flexible pricing from startups to enterprises"].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <Zap className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
