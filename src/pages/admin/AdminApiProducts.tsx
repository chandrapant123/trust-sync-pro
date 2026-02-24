import { useState } from "react";
import { Home, ChevronRight, Shield, FileText, Zap, Eye, CreditCard, Search, Users, Lock, Globe, BarChart3, Fingerprint, Building2, Car, Scale, Mail, Phone, MapPin, FileCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type ApiProduct = {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  category: string;
  tags: string[];
  active: boolean;
  docsUrl: string;
};

const MOCK_PRODUCTS: ApiProduct[] = [
  { id: "aadhaar", name: "Aadhaar Verification", description: "Verify Aadhaar numbers instantly with secure OTP-based authentication and demographic matching.", icon: Fingerprint, category: "Identity", tags: ["KYC", "eKYC"], active: true, docsUrl: "/api/aadhaar-verification" },
  { id: "pan", name: "PAN Verification", description: "Real-time PAN card verification and validation against government databases.", icon: CreditCard, category: "Identity", tags: ["KYC", "Tax"], active: true, docsUrl: "/api/pan-verification" },
  { id: "gst", name: "GST Verification", description: "Verify GSTIN details including business name, status, and registration type.", icon: Building2, category: "Business", tags: ["Compliance", "Tax"], active: true, docsUrl: "/api/gst-verification" },
  { id: "bank", name: "Bank Account Verification", description: "Penny-drop based bank account verification with account holder name matching.", icon: Shield, category: "Financial", tags: ["KYC", "Banking"], active: true, docsUrl: "/api/bank-account-verification" },
  { id: "voter-id", name: "Voter ID Verification", description: "Validate voter identity cards against the Election Commission database.", icon: FileCheck, category: "Identity", tags: ["KYC"], active: true, docsUrl: "/api/voter-id-verification" },
  { id: "driving-license", name: "Driving License Check", description: "Verify driving license details including validity, class of vehicle, and issuing authority.", icon: Car, category: "Identity", tags: ["KYC", "Transport"], active: true, docsUrl: "/api/driving-license-verification" },
  { id: "criminal-record", name: "Criminal Record Screening", description: "Comprehensive criminal background checks across court databases nationwide.", icon: Scale, category: "Compliance", tags: ["Background", "Legal"], active: true, docsUrl: "/api/criminal-record-check" },
  { id: "email", name: "Email Verification", description: "Validate email addresses for deliverability, domain, and syntax checks.", icon: Mail, category: "Contact", tags: ["Validation"], active: true, docsUrl: "/api/email-verification" },
  { id: "face-match", name: "Face Match & Liveness", description: "AI-powered facial recognition with liveness detection to prevent spoofing.", icon: Eye, category: "Biometric", tags: ["AI", "Biometric"], active: false, docsUrl: "/api/face-match-liveness" },
  { id: "aml", name: "AML Screening", description: "Screen individuals against global PEP and sanctions watchlists for compliance.", icon: Search, category: "Compliance", tags: ["AML", "Risk"], active: false, docsUrl: "/api/aml-screening" },
  { id: "credit-score", name: "Credit Score Check", description: "Fetch credit scores and bureau reports from major credit bureaus.", icon: BarChart3, category: "Financial", tags: ["Credit", "Risk"], active: false, docsUrl: "/api/credit-score-check" },
  { id: "mobile", name: "Mobile Number Verification", description: "Verify mobile numbers with telecom operator validation and name match.", icon: Phone, category: "Contact", tags: ["KYC", "Telecom"], active: false, docsUrl: "/api/mobile-verification" },
  { id: "address", name: "Address Verification", description: "Validate and geocode addresses with postal and locality matching.", icon: MapPin, category: "Contact", tags: ["KYC", "Address"], active: false, docsUrl: "/api/address-verification" },
  { id: "doc-ocr", name: "Document OCR", description: "Extract structured data from identity documents using optical character recognition.", icon: FileText, category: "AI", tags: ["OCR", "AI"], active: false, docsUrl: "/api/document-ocr" },
  { id: "fraud-risk", name: "Fraud Risk Score", description: "ML-powered fraud risk scoring based on device, behavior, and transaction signals.", icon: Zap, category: "Risk", tags: ["AI", "Fraud"], active: false, docsUrl: "/api/fraud-risk-score" },
  { id: "msme", name: "MSME / Udyam Verification", description: "Verify MSME Udyam registration numbers against the ministry database.", icon: Globe, category: "Business", tags: ["Compliance"], active: false, docsUrl: "/api/msme-verification" },
];

const ProductCard = ({ product }: { product: ApiProduct }) => (
  <Card className="flex flex-col">
    <CardHeader className="pb-3">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
          <product.icon className="h-5 w-5 text-accent" />
        </div>
        <div className="min-w-0">
          <h3 className="truncate font-heading text-sm font-semibold text-foreground">{product.name}</h3>
          <span className="text-xs text-muted-foreground">{product.category}</span>
        </div>
      </div>
    </CardHeader>
    <CardContent className="flex-1 pb-3">
      <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">{product.description}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {product.tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="text-[10px] px-2 py-0">{tag}</Badge>
        ))}
      </div>
      <Link to={product.docsUrl} className="mt-3 inline-block text-xs font-medium text-accent hover:underline">View Documents</Link>
    </CardContent>
    <CardFooter className="pt-0">
      {product.active ? (
        <Button size="sm" className="w-full">Try it</Button>
      ) : (
        <Button size="sm" variant="secondary" className="w-full" disabled>Subscribe Now</Button>
      )}
    </CardFooter>
  </Card>
);

const AdminApiProducts = () => {
  const active = MOCK_PRODUCTS.filter((p) => p.active);
  const inactive = MOCK_PRODUCTS.filter((p) => !p.active);

  return (
    <div>
      <nav className="mb-6 flex items-center gap-1.5 text-sm text-muted-foreground">
        <Link to="/admin/dashboard" className="flex items-center gap-1 transition-colors hover:text-foreground">
          <Home className="h-4 w-4" />
          <span>Home</span>
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-medium text-foreground">API Products</span>
      </nav>

      <h1 className="font-heading text-2xl font-bold text-foreground">API Products</h1>
      <p className="mt-1 text-sm text-muted-foreground">Browse and manage your verification API products</p>

      <Tabs defaultValue="active" className="mt-8">
        <TabsList>
          <TabsTrigger value="active">Active Products ({active.length})</TabsTrigger>
          <TabsTrigger value="inactive">Inactive Products ({inactive.length})</TabsTrigger>
          <TabsTrigger value="all">All Products ({MOCK_PRODUCTS.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="active">
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {active.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </TabsContent>

        <TabsContent value="inactive">
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {inactive.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </TabsContent>

        <TabsContent value="all">
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {MOCK_PRODUCTS.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminApiProducts;
