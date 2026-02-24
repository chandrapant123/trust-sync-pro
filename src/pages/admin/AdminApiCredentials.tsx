import { useState } from "react";
import { Home, ChevronRight, Pencil, Copy, Check, Key } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const INITIAL_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlZlcmlTZWt1cmUiLCJpYXQiOjE3MTg4NzA3MTZ9.abc123xyzMockTokenValue";

const AdminApiCredentials = () => {
  const [ipAddress, setIpAddress] = useState("192.168.1.100");
  const [editIpOpen, setEditIpOpen] = useState(false);
  const [editIpValue, setEditIpValue] = useState("");
  const [accessToken, setAccessToken] = useState(INITIAL_TOKEN);
  const [copied, setCopied] = useState(false);
  const [confirmGenerateOpen, setConfirmGenerateOpen] = useState(false);

  // JWT state
  const [jwtKey, setJwtKey] = useState<string | null>(null);
  const [confirmJwtOpen, setConfirmJwtOpen] = useState(false);

  const handleCopyToken = async (token: string) => {
    await navigator.clipboard.writeText(token);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleEditIpOpen = () => {
    setEditIpValue(ipAddress);
    setEditIpOpen(true);
  };

  const handleEditIpSubmit = () => {
    if (editIpValue.trim()) {
      setIpAddress(editIpValue.trim());
    }
    setEditIpOpen(false);
  };

  const handleGenerateToken = () => {
    // Mock token regeneration
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const rand = Array.from({ length: 32 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
    setAccessToken(`eyJhbGciOiJIUzI1NiJ9.mock.${rand}`);
    setConfirmGenerateOpen(false);
  };

  const handleGenerateJwt = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const rand = Array.from({ length: 48 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
    setJwtKey(`jwt_${rand}`);
    setConfirmJwtOpen(false);
  };

  return (
    <div>
      {/* Breadcrumb */}
      <div className="mb-6">
        <nav className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <Link to="/admin/dashboard" className="flex items-center gap-1 transition-colors hover:text-foreground">
            <Home className="h-4 w-4" />
            <span>Home</span>
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="font-medium text-foreground">API Credentials</span>
        </nav>
      </div>

      <h1 className="font-heading text-2xl font-bold text-foreground">API Credentials</h1>
      <p className="mt-1 text-sm text-muted-foreground">Manage your API credentials and access tokens</p>

      {/* Credentials Card */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="text-lg">API Credential Details</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Partner ID</TableHead>
                <TableHead>IP Address</TableHead>
                <TableHead>Access Token</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">VSEK-PRT-20260001</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">{ipAddress}</span>
                    <Button variant="ghost" size="icon" className="h-7 w-7" onClick={handleEditIpOpen}>
                      <Pencil className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <code className="max-w-[280px] truncate rounded bg-muted px-2 py-1 text-xs">
                      {accessToken}
                    </code>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 shrink-0"
                      onClick={() => handleCopyToken(accessToken)}
                    >
                    {copied ? <Check className="h-3.5 w-3.5 text-primary" /> : <Copy className="h-3.5 w-3.5" />}
                    </Button>
                    {copied && <span className="text-xs font-medium text-primary">Copied!</span>}
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <Button size="sm" onClick={() => setConfirmGenerateOpen(true)}>Generate</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* JWT Key Card */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Key className="h-5 w-5 text-muted-foreground" />
            JWT Key
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              {jwtKey ? (
                <code className="rounded bg-muted px-3 py-1.5 text-xs break-all">{jwtKey}</code>
              ) : (
                <Badge variant="secondary">No token generated</Badge>
              )}
            </div>
            <Button size="sm" onClick={() => setConfirmJwtOpen(true)} className="shrink-0">
              Generate
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Edit IP Dialog */}
      <Dialog open={editIpOpen} onOpenChange={setEditIpOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Edit IP Address</DialogTitle>
          </DialogHeader>
          <div className="space-y-2 py-4">
            <Label htmlFor="ip-address">IP Address</Label>
            <Input
              id="ip-address"
              placeholder="Enter your IP address"
              value={editIpValue}
              onChange={(e) => setEditIpValue(e.target.value)}
            />
          </div>
          <DialogFooter>
            <Button onClick={handleEditIpSubmit}>Submit</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Confirm Generate Access Token */}
      <AlertDialog open={confirmGenerateOpen} onOpenChange={setConfirmGenerateOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will regenerate your access token. Any existing integrations using the current token will stop working.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>No</AlertDialogCancel>
            <AlertDialogAction onClick={handleGenerateToken}>Yes</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Confirm Generate JWT */}
      <AlertDialog open={confirmJwtOpen} onOpenChange={setConfirmJwtOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will generate a new JWT key. Any existing key will be replaced.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>No</AlertDialogCancel>
            <AlertDialogAction onClick={handleGenerateJwt}>Yes</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AdminApiCredentials;
