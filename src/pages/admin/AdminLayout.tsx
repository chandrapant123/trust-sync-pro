import { Navigate, Outlet, Link, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Shield, LayoutDashboard, FileText, Settings, LogOut, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Dashboard", path: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Pages", path: "/admin/pages", icon: FileText },
  { label: "Blog Posts", path: "/admin/blog", icon: BookOpen },
  { label: "SEO Settings", path: "/admin/seo", icon: Settings },
];

const AdminLayout = () => {
  const { user, isAdmin, loading, signOut } = useAuth();
  const location = useLocation();

  if (loading) return <div className="flex min-h-screen items-center justify-center"><p className="text-muted-foreground">Loading...</p></div>;
  if (!user || !isAdmin) return <Navigate to="/admin" replace />;

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-card">
        <div className="flex h-16 items-center gap-2 border-b border-border px-6">
          <Shield className="h-5 w-5 text-accent" />
          <span className="font-heading text-lg font-bold text-foreground">Veri<span className="text-accent">Sekure</span></span>
        </div>
        <nav className="space-y-1 p-4">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${location.pathname === item.path ? "bg-accent/10 text-accent" : "text-muted-foreground hover:bg-secondary hover:text-foreground"}`}>
              <item.icon className="h-4 w-4" /> {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto border-t border-border p-4">
          <p className="mb-2 text-xs text-muted-foreground truncate">{user.email}</p>
          <Button variant="ghost" size="sm" className="w-full justify-start" onClick={signOut}>
            <LogOut className="mr-2 h-4 w-4" /> Sign Out
          </Button>
          <Button variant="ghost" size="sm" className="w-full justify-start mt-1" asChild>
            <Link to="/"><Shield className="mr-2 h-4 w-4" /> View Site</Link>
          </Button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-background">
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
