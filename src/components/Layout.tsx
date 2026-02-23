import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Shield, Zap, Building2, Landmark, CreditCard, HeartPulse, ShoppingCart, Wifi, Truck, Home, GraduationCap, Gamepad2, Building, Code2, FileCheck, BookOpen } from "lucide-react";
import logo from "@/assets/logo.png";

const industries = [
  { name: "Fintech", path: "/industries/fintech", icon: Zap },
  { name: "Banking", path: "/industries/banking", icon: Landmark },
  { name: "NBFC", path: "/industries/nbfc", icon: CreditCard },
  { name: "Insurance", path: "/industries/insurance", icon: Shield },
  { name: "E-Commerce", path: "/industries/ecommerce", icon: ShoppingCart },
  { name: "Telecom", path: "/industries/telecom", icon: Wifi },
  { name: "Logistics & Mobility", path: "/industries/logistics", icon: Truck },
  { name: "Real Estate", path: "/industries/real-estate", icon: Home },
  { name: "Healthcare", path: "/industries/healthcare", icon: HeartPulse },
  { name: "Education", path: "/industries/education", icon: GraduationCap },
  { name: "Gaming & Dating", path: "/industries/gaming", icon: Gamepad2 },
  { name: "Government", path: "/industries/government", icon: Building },
];

const serviceCategories = [
  { name: "Identity & KYC", path: "/services/identity-kyc", icon: Shield },
  { name: "Financial & Banking", path: "/services/financial-banking", icon: Landmark },
  { name: "Business / KYB", path: "/services/business-kyb", icon: Building2 },
  { name: "Employment & Education", path: "/services/employment-education", icon: GraduationCap },
  { name: "Legal & Criminal", path: "/services/legal-criminal", icon: FileCheck },
  { name: "Vehicle & Mobility", path: "/services/vehicle-mobility", icon: Truck },
  { name: "Document AI", path: "/services/document-ai", icon: Code2 },
  { name: "Risk & Fraud", path: "/services/risk-fraud", icon: Zap },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="VeriSekure Logo" className="h-9 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          <Link to="/" className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-accent ${location.pathname === "/" ? "text-accent" : "text-muted-foreground"}`}>
            Home
          </Link>

          <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-accent">
              Services <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {servicesOpen && (
              <div className="absolute left-0 top-full w-[440px] rounded-xl border border-border bg-card p-4 shadow-xl">
                <div className="grid grid-cols-2 gap-1">
                  {serviceCategories.map((svc) => (
                    <Link key={svc.path} to={svc.path} className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-secondary" onClick={() => setServicesOpen(false)}>
                      <svc.icon className="h-4 w-4 text-accent" />
                      {svc.name}
                    </Link>
                  ))}
                </div>
                <div className="mt-2 border-t border-border pt-2">
                  <Link to="/all-apis" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-secondary" onClick={() => setServicesOpen(false)}>
                    <Code2 className="h-4 w-4" /> View All APIs →
                  </Link>
                </div>
              </div>
            )}
          </div>

          <div className="relative" onMouseEnter={() => setIndustriesOpen(true)} onMouseLeave={() => setIndustriesOpen(false)}>
            <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-accent">
              Industries <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {industriesOpen && (
              <div className="absolute left-0 top-full w-[520px] rounded-xl border border-border bg-card p-4 shadow-xl">
                <div className="grid grid-cols-2 gap-1">
                  {industries.map((ind) => (
                    <Link key={ind.path} to={ind.path} className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-secondary" onClick={() => setIndustriesOpen(false)}>
                      <ind.icon className="h-4 w-4 text-accent" />
                      {ind.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link to="/all-apis" className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-accent ${location.pathname === "/all-apis" ? "text-accent" : "text-muted-foreground"}`}>
            All APIs
          </Link>
          <Link to="/blog" className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-accent ${location.pathname.startsWith("/blog") ? "text-accent" : "text-muted-foreground"}`}>
            Blog
          </Link>
          <Link to="/about" className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-accent ${location.pathname === "/about" ? "text-accent" : "text-muted-foreground"}`}>
            About
          </Link>
          <Link to="/contact" className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-accent ${location.pathname === "/contact" ? "text-accent" : "text-muted-foreground"}`}>
            Contact
          </Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/contact">Schedule Demo</Link>
          </Button>
          <Button variant="saffron" size="sm" asChild>
            <Link to="/contact">Get API Access</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background lg:hidden max-h-[80vh] overflow-y-auto">
          <div className="container mx-auto space-y-1 px-4 py-4">
            <Link to="/" className="block rounded-md px-3 py-2 text-sm font-medium text-foreground" onClick={() => setMobileOpen(false)}>Home</Link>
            <Link to="/all-apis" className="block rounded-md px-3 py-2 text-sm font-medium text-foreground" onClick={() => setMobileOpen(false)}>All APIs</Link>
            <Link to="/blog" className="block rounded-md px-3 py-2 text-sm font-medium text-foreground" onClick={() => setMobileOpen(false)}>Blog</Link>
            <p className="px-3 pt-3 text-xs font-semibold uppercase text-muted-foreground">Services</p>
            {serviceCategories.map((svc) => (
              <Link key={svc.path} to={svc.path} className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-foreground hover:bg-secondary" onClick={() => setMobileOpen(false)}>
                <svc.icon className="h-4 w-4 text-accent" /> {svc.name}
              </Link>
            ))}
            <p className="px-3 pt-3 text-xs font-semibold uppercase text-muted-foreground">Industries</p>
            {industries.map((ind) => (
              <Link key={ind.path} to={ind.path} className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-foreground hover:bg-secondary" onClick={() => setMobileOpen(false)}>
                <ind.icon className="h-4 w-4 text-accent" /> {ind.name}
              </Link>
            ))}
            <Link to="/about" className="block rounded-md px-3 py-2 text-sm font-medium text-foreground" onClick={() => setMobileOpen(false)}>About</Link>
            <Link to="/contact" className="block rounded-md px-3 py-2 text-sm font-medium text-foreground" onClick={() => setMobileOpen(false)}>Contact</Link>
            <div className="flex gap-2 pt-3">
              <Button variant="outline" size="sm" className="flex-1" asChild>
                <Link to="/contact" onClick={() => setMobileOpen(false)}>Schedule Demo</Link>
              </Button>
              <Button variant="saffron" size="sm" className="flex-1" asChild>
                <Link to="/contact" onClick={() => setMobileOpen(false)}>Get API Access</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const Footer = () => (
  <footer className="gradient-hero text-primary-foreground">
    <div className="container mx-auto px-4 py-16 lg:px-8">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="VeriSekure Logo" className="h-8 w-auto brightness-0 invert" />
          </Link>
          <p className="mt-4 text-sm text-primary-foreground/70">India's unified platform for identity, financial, business, and risk verification APIs.</p>
          <p className="mt-4 text-sm text-primary-foreground/70">India's unified platform for identity, financial, business, and risk verification APIs.</p>
        </div>

        <div>
          <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-accent">Products</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/services/identity-kyc" className="hover:text-accent">Identity & KYC</Link></li>
            <li><Link to="/services/financial-banking" className="hover:text-accent">Financial Verification</Link></li>
            <li><Link to="/services/business-kyb" className="hover:text-accent">Business KYB</Link></li>
            <li><Link to="/services/legal-criminal" className="hover:text-accent">Background Checks</Link></li>
            <li><Link to="/services/document-ai" className="hover:text-accent">Document AI</Link></li>
            <li><Link to="/all-apis" className="hover:text-accent">All APIs →</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-accent">Company</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/about" className="hover:text-accent">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
            <li><Link to="/privacy" className="hover:text-accent">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-accent">Terms of Service</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-accent">Industries</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/industries/fintech" className="hover:text-accent">Fintech</Link></li>
            <li><Link to="/industries/banking" className="hover:text-accent">Banking</Link></li>
            <li><Link to="/industries/insurance" className="hover:text-accent">Insurance</Link></li>
            <li><Link to="/industries/ecommerce" className="hover:text-accent">E-Commerce</Link></li>
            <li><Link to="/industries/healthcare" className="hover:text-accent">Healthcare</Link></li>
          </ul>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 md:flex-row">
        <p className="text-sm text-primary-foreground/50">© {new Date().getFullYear()} VeriSekure. All rights reserved.</p>
        <div className="flex gap-6 text-sm text-primary-foreground/50">
          <Link to="/privacy" className="hover:text-accent">Privacy</Link>
          <Link to="/terms" className="hover:text-accent">Terms</Link>
          <Link to="/contact" className="hover:text-accent">Contact</Link>
        </div>
      </div>
    </div>
  </footer>
);

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div className="flex min-h-screen flex-col">
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

export default Layout;
