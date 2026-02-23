import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Briefcase, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { serviceCategories } from "@/data/verification-services";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? serviceCategories[slug] : undefined;

  if (!data) return <Navigate to="/all-apis" replace />;

  return (
    <Layout>
      <SEOHead title={data.seoTitle} description={data.metaDescription} />

      {/* Hero */}
      <section className="gradient-hero py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-3xl font-bold text-primary-foreground md:text-5xl">{data.headline}</h1>
            <p className="mt-4 text-lg text-primary-foreground/80">{data.intro}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild><Link to="/contact">Get API Access <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
              <Button variant="hero-outline" size="lg" asChild><Link to="/contact">Schedule Demo</Link></Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Long Content */}
      {data.longContent && (
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl">
              {data.longContent.split("\n\n").map((para, i) => (
                <motion.p key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.03 }} className="mb-5 text-muted-foreground leading-relaxed">
                  {para}
                </motion.p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Available APIs */}
      <section className="bg-secondary/30 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="mb-8 text-center font-heading text-2xl font-bold text-foreground md:text-3xl">Available APIs</h2>
          <div className="mx-auto max-w-4xl grid gap-4 md:grid-cols-2">
            {data.services.map((svc, i) => (
              <motion.div key={svc.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.05 }} className="rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-md">
                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <h3 className="font-heading text-sm font-semibold text-foreground">{svc.name}</h3>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{svc.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      {data.useCases && data.useCases.length > 0 && (
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="mb-8 text-center font-heading text-2xl font-bold text-foreground md:text-3xl">
              <Briefcase className="mr-2 inline h-6 w-6 text-accent" /> Key Use Cases
            </h2>
            <div className="mx-auto max-w-3xl grid gap-3 sm:grid-cols-2">
              {data.useCases.map((uc, i) => (
                <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.04 }} className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3">
                  <CheckCircle className="h-4 w-4 shrink-0 text-accent" />
                  <span className="text-sm text-foreground">{uc}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {data.faqs && data.faqs.length > 0 && (
        <section className="bg-secondary/30 py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="mb-8 text-center font-heading text-2xl font-bold text-foreground md:text-3xl">
              <HelpCircle className="mr-2 inline h-6 w-6 text-accent" /> Frequently Asked Questions
            </h2>
            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible>
                {data.faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger className="text-left font-heading text-sm font-semibold text-foreground">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="gradient-hero py-16 lg:py-20">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-primary-foreground md:text-3xl">{data.ctaText}</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="lg" asChild><Link to="/contact">Get API Access <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
            <Button variant="hero-outline" size="lg" asChild><Link to="/all-apis">View All APIs</Link></Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicePage;
