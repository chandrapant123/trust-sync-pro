import { useState } from "react";
import { Home, ChevronRight, History, CalendarIcon, Upload } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
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
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const AdminFundRequest = () => {
  const [amount, setAmount] = useState("");
  const [bank, setBank] = useState("");
  const [transactionType, setTransactionType] = useState("");
  const [utrNumber, setUtrNumber] = useState("");
  const [transactionDate, setTransactionDate] = useState<Date | undefined>();
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ready for API integration
    console.log({ amount, bank, transactionType, utrNumber, transactionDate, file });
  };

  const handleReset = () => {
    setAmount("");
    setBank("");
    setTransactionType("");
    setUtrNumber("");
    setTransactionDate(undefined);
    setFile(null);
  };

  return (
    <div>
      {/* Breadcrumb + History button */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <nav className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <Link to="/admin/dashboard" className="flex items-center gap-1 transition-colors hover:text-foreground">
            <Home className="h-4 w-4" />
            <span>Home</span>
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="font-medium text-foreground">Fund Request</span>
        </nav>
        <Button variant="outline" size="sm" asChild>
          <Link to="/admin/fund-request-history">
            <History className="mr-2 h-4 w-4" /> History
          </Link>
        </Button>
      </div>

      <h1 className="font-heading text-2xl font-bold text-foreground">Fund Request</h1>
      <p className="mt-1 text-sm text-muted-foreground">Submit a new fund request</p>

      {/* Form Card */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="text-lg">Add Fund Request</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {/* Amount */}
              <div className="space-y-2">
                <Label htmlFor="amount">Amount <span className="text-destructive">*</span></Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="Enter amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                  min={1}
                />
              </div>

              {/* Bank */}
              <div className="space-y-2">
                <Label htmlFor="bank">Bank <span className="text-destructive">*</span></Label>
                <Input
                  id="bank"
                  placeholder="Enter bank name"
                  value={bank}
                  onChange={(e) => setBank(e.target.value)}
                  required
                />
              </div>

              {/* Transaction Type */}
              <div className="space-y-2">
                <Label>Transaction Type <span className="text-destructive">*</span></Label>
                <Select value={transactionType} onValueChange={setTransactionType} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent className="z-50">
                    <SelectItem value="IMPS">IMPS</SelectItem>
                    <SelectItem value="UPI">UPI</SelectItem>
                    <SelectItem value="NEFT">NEFT</SelectItem>
                    <SelectItem value="RTGS">RTGS</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* UTR Number */}
              <div className="space-y-2">
                <Label htmlFor="utr">UTR Number <span className="text-destructive">*</span></Label>
                <Input
                  id="utr"
                  placeholder="Enter UTR number"
                  value={utrNumber}
                  onChange={(e) => setUtrNumber(e.target.value)}
                  required
                />
              </div>

              {/* Transaction Date */}
              <div className="space-y-2">
                <Label>Transaction Date <span className="text-destructive">*</span></Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn("w-full justify-start text-left font-normal", !transactionDate && "text-muted-foreground")}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {transactionDate ? format(transactionDate, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={transactionDate}
                      onSelect={setTransactionDate}
                      initialFocus
                      className="pointer-events-auto p-3"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Upload File */}
              <div className="space-y-2">
                <Label htmlFor="file">Upload File <span className="text-destructive">*</span></Label>
                <div className="relative">
                  <Input
                    id="file"
                    type="file"
                    className="cursor-pointer"
                    onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                    required
                  />
                </div>
                {file && <p className="text-xs text-muted-foreground truncate">{file.name}</p>}
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <Button type="button" variant="secondary" onClick={handleReset}>Reset</Button>
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminFundRequest;
