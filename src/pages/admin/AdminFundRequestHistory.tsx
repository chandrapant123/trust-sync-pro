import { useState, useMemo } from "react";
import { Home, ChevronRight, Plus, CalendarIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { format, isBefore, isAfter, startOfDay } from "date-fns";
import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type FundRequest = {
  srNo: number;
  amount: number;
  transactionType: string;
  utrNo: string;
  transactionDate: Date;
  status: "approved" | "pending" | "rejected";
};

const DUMMY_REQUESTS: FundRequest[] = [
  { srNo: 1, amount: 25000, transactionType: "IMPS", utrNo: "UTR-928371", transactionDate: new Date("2026-02-24"), status: "approved" },
  { srNo: 2, amount: 10000, transactionType: "UPI", utrNo: "UTR-817263", transactionDate: new Date("2026-02-23"), status: "pending" },
  { srNo: 3, amount: 50000, transactionType: "NEFT", utrNo: "UTR-736251", transactionDate: new Date("2026-02-22"), status: "approved" },
  { srNo: 4, amount: 15000, transactionType: "RTGS", utrNo: "UTR-615243", transactionDate: new Date("2026-02-21"), status: "rejected" },
  { srNo: 5, amount: 8000, transactionType: "UPI", utrNo: "UTR-524136", transactionDate: new Date("2026-02-20"), status: "approved" },
  { srNo: 6, amount: 30000, transactionType: "IMPS", utrNo: "UTR-413025", transactionDate: new Date("2026-02-19"), status: "pending" },
  { srNo: 7, amount: 12000, transactionType: "NEFT", utrNo: "UTR-301924", transactionDate: new Date("2026-02-18"), status: "approved" },
  { srNo: 8, amount: 45000, transactionType: "RTGS", utrNo: "UTR-290813", transactionDate: new Date("2026-02-16"), status: "pending" },
];

const statusVariant = (s: FundRequest["status"]) =>
  s === "approved" ? "default" : s === "pending" ? "secondary" : "destructive";

const AdminFundRequestHistory = () => {
  const [fromDate, setFromDate] = useState<Date | undefined>();
  const [toDate, setToDate] = useState<Date | undefined>();
  const [status, setStatus] = useState("all");

  const handleReset = () => {
    setFromDate(undefined);
    setToDate(undefined);
    setStatus("all");
  };

  const filtered = useMemo(() => {
    return DUMMY_REQUESTS.filter((req) => {
      if (status !== "all" && req.status !== status) return false;
      if (fromDate && isBefore(req.transactionDate, startOfDay(fromDate))) return false;
      if (toDate && isAfter(req.transactionDate, startOfDay(new Date(toDate.getTime() + 86400000)))) return false;
      return true;
    });
  }, [fromDate, toDate, status]);

  return (
    <div>
      {/* Breadcrumb + Add Request button */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <nav className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <Link to="/admin/dashboard" className="flex items-center gap-1 transition-colors hover:text-foreground">
            <Home className="h-4 w-4" />
            <span>Home</span>
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="font-medium text-foreground">Fund Request History</span>
        </nav>
        <Button size="sm" asChild>
          <Link to="/admin/fund-request">
            <Plus className="mr-2 h-4 w-4" /> Add Fund Request
          </Link>
        </Button>
      </div>

      <h1 className="font-heading text-2xl font-bold text-foreground">Fund Request History</h1>
      <p className="mt-1 text-sm text-muted-foreground">View and filter your fund request records</p>

      {/* Filter Card */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="text-lg">Fund Request Filter</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
            <div className="space-y-2">
              <Label>Select Status</Label>
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger><SelectValue placeholder="All" /></SelectTrigger>
                <SelectContent className="z-50">
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button onClick={() => {}}>Apply</Button>
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
                  <TableHead>Sr.No</TableHead>
                  <TableHead className="text-right">Amount (₹)</TableHead>
                  <TableHead>Transaction Type</TableHead>
                  <TableHead>UTR No</TableHead>
                  <TableHead>Transaction Date</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="py-8 text-center text-muted-foreground">No fund requests match your filters.</TableCell>
                  </TableRow>
                ) : (
                  filtered.map((req) => (
                    <TableRow key={req.srNo}>
                      <TableCell className="font-medium">{req.srNo}</TableCell>
                      <TableCell className="text-right font-medium">{req.amount.toLocaleString("en-IN")}</TableCell>
                      <TableCell>{req.transactionType}</TableCell>
                      <TableCell>{req.utrNo}</TableCell>
                      <TableCell>{format(req.transactionDate, "dd MMM yyyy")}</TableCell>
                      <TableCell><Badge variant={statusVariant(req.status)} className="capitalize">{req.status}</Badge></TableCell>
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

export default AdminFundRequestHistory;
