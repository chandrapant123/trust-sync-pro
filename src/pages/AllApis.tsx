import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Landmark, Building2, GraduationCap, FileCheck, Truck, Code2, Zap, BarChart3, ArrowRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { apiSlugMap } from "@/data/api-slug-map";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const apiCategories = [
  {
    title: "Identity & KYC Verification",
    icon: Shield,
    path: "/services/identity-kyc",
    groups: [
      { label: "Individual Identity", items: ["Aadhaar Verification", "PAN Verification", "Voter ID Verification", "Passport Verification", "Driving License Verification", "CKYC Search / Download", "Face Match & Liveness"] },
      { label: "Contact Verification", items: ["Mobile Number / Telecom Verification", "Email Verification"] },
      { label: "Address Intelligence", items: ["Aadhaar Address Fetch", "Address Verification", "Address Matching / Standardization"] },
    ],
  },
  {
    title: "Financial & Banking Verification",
    icon: Landmark,
    path: "/services/financial-banking",
    groups: [
      { label: "Bank Intelligence", items: ["Bank Account Verification (Penny Drop)", "IFSC Validation", "Account Name Match"] },
      { label: "Income & Credit", items: ["Income Verification", "Credit Bureau Score", "Full Credit Report"] },
      { label: "Fraud & AML", items: ["AML / Sanction Screening", "PEP Check", "Digital Footprint Risk"] },
    ],
  },
  {
    title: "Business / KYB Verification",
    icon: Building2,
    path: "/services/business-kyb",
    groups: [
      { label: "Company Verification", items: ["GST Verification", "CIN / MCA Company Details", "MSME Verification", "PAN to Company Mapping"] },
      { label: "Director & Compliance", items: ["Director KYC", "UBO / Ownership Check", "ICSI / Professional Verification"] },
      { label: "Shop & License", items: ["Shop Establishment Verification", "FSSAI License", "Trade License"] },
    ],
  },
  {
    title: "Employment & Education",
    icon: GraduationCap,
    path: "/services/employment-education",
    groups: [
      { label: "Employment", items: ["UAN Verification", "ESIC Verification", "Previous Employment Check"] },
      { label: "Education", items: ["Degree / Certificate Verification", "University Validation"] },
      { label: "Professional Credentials", items: ["Doctor Verification", "Nurse Verification", "Other License Checks"] },
    ],
  },
  {
    title: "Legal, Court & Criminal Checks",
    icon: FileCheck,
    path: "/services/legal-criminal",
    groups: [
      { label: "Legal Checks", items: ["Criminal Record Search", "eCourt Case Search", "CNR Case Status", "Litigation History"] },
    ],
  },
  {
    title: "Vehicle, Driver & Mobility",
    icon: Truck,
    path: "/services/vehicle-mobility",
    groups: [
      { label: "Driver", items: ["Driving License Verification", "DL Status / Expiry"] },
      { label: "Vehicle", items: ["RC Verification (Lite / Full)", "Vehicle Insurance Status", "Challan / Violation Check", "Permit & Fitness"] },
    ],
  },
  {
    title: "Document AI & Data Extraction",
    icon: Code2,
    path: "/services/document-ai",
    groups: [
      { label: "Document Processing", items: ["Document OCR Extraction", "Document Authenticity Check", "ID Document Parsing", "Claim / Invoice Extraction"] },
    ],
  },
  {
    title: "Risk, Fraud & Trust Intelligence",
    icon: Zap,
    path: "/services/risk-fraud",
    groups: [
      { label: "Risk Scoring", items: ["Fraud Risk Score", "Identity Deduplication", "Device / Behavioral Signals", "Trust Score API (Unified Score 0–1000)"] },
    ],
  },
  {
    title: "Property & Land Verification",
    icon: Home,
    path: "/services/property-land",
    groups: [
      { label: "Property Checks", items: ["Property Ownership Verification", "Land Record Search", "Encumbrance Certificate Check", "Title Document Verification"] },
      { label: "Compliance & Valuation", items: ["RERA Registration Verification", "Property Tax Payment Status", "Circle Rate / Guideline Value", "Builder / Developer Verification"] },
    ],
  },
  {
    title: "Industry Bundled APIs",
    icon: BarChart3,
    path: "/services/industry-bundles",
    groups: [
      { label: "Pre-built Bundles", items: ["Fintech Bundle — KYC + Bank + AML + Credit + Income", "Lending / NBFC Bundle — KYC + Telecom + Bank + Credit + Fraud", "Banking Bundle — CKYC + AML + KYB + Income + Credit", "Insurance Bundle — KYC + Income + Document AI + AML", "E-commerce Bundle — KYC + GST + Address + Fraud + RC/DL", "Telecom Bundle — KYC + Face Liveness + Address + AML"] },
    ],
  },
];

const AllApis = () => (
  <Layout>
    <SEOHead title="All Verification APIs | VeriSekure - Complete API Directory" description="Explore VeriSekure's complete API directory — 100+ real-time verification APIs for identity, financial, business, legal, vehicle, document, and risk intelligence." keywords="KYC API, verification API, identity verification, AML API, PAN verification API, Aadhaar API, bank verification API" />

    <section className="gradient-hero py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-3xl font-bold text-primary-foreground md:text-5xl">All Verification APIs</h1>
          <p className="mt-4 text-lg text-primary-foreground/80">Explore our complete suite of 100+ real-time verification APIs covering identity, financial, business, legal, vehicle, document, and risk intelligence.</p>
        </motion.div>
      </div>
    </section>

    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="space-y-16">
          {apiCategories.map((cat, ci) => (
            <motion.div key={cat.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: ci * 0.05 }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <cat.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h2 className="font-heading text-xl font-bold text-foreground">{cat.title}</h2>
                  <Link to={cat.path} className="text-xs text-accent hover:underline">View Details →</Link>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {cat.groups.map((group) => (
                  <div key={group.label} className="rounded-xl border border-border bg-card p-5">
                    <h3 className="mb-3 font-heading text-sm font-semibold uppercase tracking-wider text-accent">{group.label}</h3>
                    <ul className="space-y-2">
                      {group.items.map((item) => {
                        const slug = apiSlugMap[item];
                        return (
                          <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                            <div className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                            {slug ? (
                              <Link to={`/api/${slug}`} className="hover:text-accent transition-colors hover:underline">
                                {item}
                              </Link>
                            ) : (
                              item
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="gradient-hero py-16 lg:py-20">
      <div className="container mx-auto px-4 text-center lg:px-8">
        <h2 className="font-heading text-2xl font-bold text-primary-foreground md:text-3xl">Ready to Integrate?</h2>
        <p className="mt-4 text-primary-foreground/80">Get instant access to any API or bundle. Our developer-friendly documentation makes integration fast and seamless.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button variant="hero" size="lg" asChild><Link to="/contact">Get API Access <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
          <Button variant="hero-outline" size="lg" asChild><Link to="/contact">Schedule Demo</Link></Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default AllApis;
