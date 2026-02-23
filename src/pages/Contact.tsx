import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { toast } from "@/hooks/use-toast";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", company: "", message: "" });
  };

  return (
    <Layout>
      <SEOHead title="Contact BharateVerify | Get API Access & Schedule a Demo" description="Get in touch with BharateVerify for API access, demos, pricing, and partnership inquiries. We're here to help you build trusted digital experiences." />

      <section className="gradient-hero py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mx-auto max-w-2xl text-center">
            <h1 className="font-heading text-3xl font-bold text-primary-foreground md:text-5xl">Get in Touch</h1>
            <p className="mt-4 text-lg text-primary-foreground/80">Ready to get started? Contact us for API access, a demo, or any questions about our verification platform.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <h2 className="font-heading text-2xl font-bold text-foreground">Send us a message</h2>
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input placeholder="Full Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                  <Input placeholder="Work Email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                </div>
                <Input placeholder="Company Name" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
                <Textarea placeholder="How can we help you?" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
                <Button variant="saffron" size="lg" type="submit">
                  Send Message <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>

            <div className="space-y-6 lg:col-span-2">
              <h2 className="font-heading text-2xl font-bold text-foreground">Contact Info</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                  <Mail className="mt-0.5 h-5 w-5 text-accent" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">contact@bharateverify.in</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                  <Phone className="mt-0.5 h-5 w-5 text-accent" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Phone</p>
                    <p className="text-sm text-muted-foreground">+91-XXXX-XXXXXX</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                  <MapPin className="mt-0.5 h-5 w-5 text-accent" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Office</p>
                    <p className="text-sm text-muted-foreground">India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
