import { useState, useMemo } from "react";
import { Home, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { format, isAfter, isBefore, startOfDay } from "date-fns";
import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Transaction = {
  id: string;
  date: Date;
  type: "credit" | "debit";
  amount: number;
  description: string;
  status: "success" | "pending" | "failed";
};

const DUMMY_TRANSACTIONS: Transaction[] = [
  { id: "TXN-10234", date: new Date("2026-02-24"), type: "credit", amount: 5000, description: "Aadhaar Verification Pack", status: "success" },
  { id: "TXN-10233", date: new Date("2026-02-23"), type: "debit", amount: 120, description: "PAN Verification API Call", status: "success" },
  { id: "TXN-10232", date: new Date("2026-02-22"), type: "debit", amount: 80, description: "GST Verification API Call", status: "success" },
  { id: "TXN-10231", date: new Date("2026-02-21"), type: "credit", amount: 10000, description: "Wallet Recharge", status: "success" },
  { id: "TXN-10230", date: new Date("2026-02-20"), type: "debit", amount: 200, description: "Bank Account Verification", status: "failed" },
  { id: "TXN-10229", date: new Date("2026-02-19"), type: "debit", amount: 150, description: "Voter ID Verification", status: "success" },
  { id: "TXN-10228", date: new Date("2026-02-18"), type: "credit", amount: 2500, description: "Refund – Failed Batch", status: "pending" },
  { id: "TXN-10227", date: new Date("2026-02-17"), type: "debit", amount: 90, description: "Driving License Check", status: "success" },
  { id: "TXN-10226", date: new Date("2026-02-15"), type: "debit", amount: 300, description: "Criminal Record Screening", status: "success" },
  { id: "TXN-10225", date: new Date("2026-02-14"), type: "credit", amount: 7500, description: "Enterprise Plan Top-up", status: "success" },
  { id: "TXN-10224", date: new Date("2026-02-12"), type: "debit", amount: 60, description: "Email Verification API", status: "pending" },
  { id: "TXN-10223", date: new Date("2026-02-10"), type: "debit", amount: 110, description: "CKYC Verification", status: "success" },
];

const statusVariant = (s: Transaction["status"]) =>
  s === "success" ? "default" : s === "pending" ? "secondary" : "destructive";

const AdminTransactions = () => {
  const [type, setType] = useState("all");
  const [transactionId, setTransactionId] = useState("");
  const [fromDate, setFromDate] = useState<Date | undefined>();
  const [toDate, setToDate] = useState<Date | undefined>();

  const handleReset = () => {
    setType("all");
    setTransactionId("");
    setFromDate(undefined);
    setToDate(undefined);
  };

  const filtered = useMemo(() => {
    return DUMMY_TRANSACTIONS.filter((txn) => {
      if (type !== "all" && txn.type !== type) return false;
      if (transactionId && !txn.id.toLowerCase().includes(transactionId.toLowerCase())) return false;
      if (fromDate && isBefore(txn.date, startOfDay(fromDate))) return false;
      if (toDate && isAfter(txn.date, startOfDay(new Date(toDate.getTime() + 86400000)))) return false;
      return true;
    });
  }, [type, transactionId, fromDate, toDate]);

  return (
    <div>
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-1.5 text-sm text-muted-foreground">
        <Link to="/admin/dashboard" className="flex items-center gap-1 transition-colors hover:text-foreground">
          <Home className="h-4 w-4" />
          <span>Home</span>
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-medium text-foreground">Transaction History</span>
      </nav>

      <h1 className="font-heading text-2xl font-bold text-foreground">Transaction History</h1>
      <p className="mt-1 text-sm text-muted-foreground">View and filter your transaction records</p>

      {/* Filter Card */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="text-lg">Transaction Filter</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2">
              <Label htmlFor="type">Select Type</Label>
              <Select value={type} onValueChange={setType}>
                <SelectTrigger id="type"><SelectValue placeholder="All" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="debit">Debit</SelectItem>
                  <SelectItem value="credit">Credit</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="txn-id">Transaction ID</Label>
              <Input id="txn-id" placeholder="Enter Transaction ID" value={transactionId} onChange={(e) => setTransactionId(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label>From Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !fromDate && "text-muted-foreground")}>
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {fromDate ? format(fromDate, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar mode="single" selected={fromDate} onSelect={setFromDate} initialFocus className="pointer-events-auto p-3" />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label>To Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !toDate && "text-muted-foreground")}>
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {toDate ? format(toDate, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar mode="single" selected={toDate} onSelect={setToDate} initialFocus className="pointer-events-auto p-3" />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button onClick={() => {}}>Search</Button>
            <Button variant="secondary" onClick={handleReset}>Reset</Button>
          </div>
        </CardContent>
      </Card>

      {/* Results Table */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="text-lg">Results ({filtered.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Transaction ID</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead className="text-right">Amount (₹)</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center text-muted-foreground py-8">No transactions match your filters.</TableCell>
                  </TableRow>
                ) : (
                  filtered.map((txn) => (
                    <TableRow key={txn.id}>
                      <TableCell className="font-medium">{txn.id}</TableCell>
                      <TableCell>{format(txn.date, "dd MMM yyyy")}</TableCell>
                      <TableCell className="capitalize">{txn.type}</TableCell>
                      <TableCell className={cn("text-right font-medium", txn.type === "credit" ? "text-green-600" : "text-red-500")}>
                        {txn.type === "credit" ? "+" : "−"}{txn.amount.toLocaleString("en-IN")}
                      </TableCell>
                      <TableCell>{txn.description}</TableCell>
                      <TableCell><Badge variant={statusVariant(txn.status)} className="capitalize">{txn.status}</Badge></TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminTransactions;
