import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Shield, Zap, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import Layout from "@/components/Layout";
import type { IndustryData } from "@/data/industries";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const IndustryPageTemplate = ({ data }: { data: IndustryData }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Layout>
      <SEOHead title={data.seoTitle} description={data.metaDescription} />

      {/* Hero */}
      <section className="gradient-hero py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6 }} className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-3xl font-bold leading-tight text-primary-foreground md:text-5xl text-balance">{data.headline}</h1>
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">{data.intro}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild><Link to="/contact">Get API Access <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
              <Button variant="hero-outline" size="lg" asChild><Link to="/contact">Schedule Demo</Link></Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">Key Challenges We Solve</h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {data.challenges.map((c, i) => (
                <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                  <Shield className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm text-foreground">{c}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-secondary/50 py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">Use Cases</h2>
            <div className="mt-8 space-y-3">
              {data.useCases.map((uc, i) => (
                <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.05 }} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-emerald" />
                  <span className="text-foreground">{uc}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* APIs */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">APIs Used</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {data.apis.map((api) => (
                <span key={api} className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground">{api}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-secondary/50 py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">Business Benefits</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {data.benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3 rounded-lg bg-card p-5 shadow-sm">
                  <Zap className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm text-foreground">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">Best Practices</h2>
            <ul className="mt-6 space-y-3">
              {data.bestPractices.map((bp, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">{i + 1}</span>
                  <span className="text-foreground">{bp}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-secondary/50 py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">Frequently Asked Questions</h2>
            <div className="mt-8 space-y-3">
              {data.faqs.map((faq, i) => (
                <div key={i} className="rounded-lg border border-border bg-card overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="flex w-full items-center justify-between p-5 text-left">
                    <span className="font-medium text-foreground">{faq.q}</span>
                    {openFaq === i ? <ChevronUp className="h-4 w-4 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 text-muted-foreground" />}
                  </button>
                  {openFaq === i && <div className="border-t border-border px-5 py-4 text-sm text-muted-foreground">{faq.a}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero py-16 lg:py-20">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-primary-foreground md:text-3xl">{data.ctaHeadline}</h2>
          <p className="mt-4 text-primary-foreground/80">{data.ctaText}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="lg" asChild><Link to="/contact">Get API Access <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
            <Button variant="hero-outline" size="lg" asChild><Link to="/contact">Schedule Demo</Link></Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndustryPageTemplate;
