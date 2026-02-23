import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, LogIn } from "lucide-react";

const AdminLogin = () => {
  const { user, isAdmin, loading, signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  if (loading) return <div className="flex min-h-screen items-center justify-center"><p className="text-muted-foreground">Loading...</p></div>;
  if (user && isAdmin) return <Navigate to="/admin/dashboard" replace />;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    const { error } = await signIn(email, password);
    if (error) {
      setError(error.message);
    }
    setSubmitting(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary">
            <Shield className="h-7 w-7 text-primary-foreground" />
          </div>
          <h1 className="mt-4 font-heading text-2xl font-bold text-foreground">Admin Login</h1>
          <p className="mt-1 text-sm text-muted-foreground">VeriSekure Content Management</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          {error && <p className="text-sm text-destructive">{error}</p>}
          {user && !isAdmin && <p className="text-sm text-destructive">You do not have admin access.</p>}
          <Button variant="saffron" className="w-full" type="submit" disabled={submitting}>
            {submitting ? "Signing in..." : <><LogIn className="mr-2 h-4 w-4" /> Sign In</>}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
