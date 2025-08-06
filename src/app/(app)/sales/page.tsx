"use client";

import { PageHeader } from "@/components/ui/page-header";
import { DataTable } from "@/components/ui/data-table";
import { Button } from "@/components/ui/button";
import { Eye, Receipt } from "lucide-react";

// Sample data for demonstration
const sampleSales = [
  {
    id: 1,
    transactionId: "TXN-001",
    customer: "John Smith",
    date: "2024-08-06",
    time: "14:30",
    items: 3,
    total: "$157.50",
    paymentMethod: "Cash",
    actions: "",
  },
  {
    id: 2,
    transactionId: "TXN-002",
    customer: "Sarah Johnson",
    date: "2024-08-06",
    time: "15:45",
    items: 1,
    total: "$89.99",
    paymentMethod: "Card",
    actions: "",
  },
  {
    id: 3,
    transactionId: "TXN-003",
    customer: "Mike Brown",
    date: "2024-08-05",
    time: "11:20",
    items: 2,
    total: "$65.98",
    paymentMethod: "Cash",
    actions: "",
  },
  {
    id: 4,
    transactionId: "TXN-004",
    customer: "Walk-in Customer",
    date: "2024-08-05",
    time: "16:10",
    items: 5,
    total: "$243.75",
    paymentMethod: "Card",
    actions: "",
  },
];

export default function SalesPage() {
  const handleNewSale = () => {
    console.log("Start new sale");
  };

  const handleViewSale = (sale: (typeof sampleSales)[0]) => {
    console.log("View sale details:", sale);
  };

  const handlePrintReceipt = (sale: (typeof sampleSales)[0]) => {
    console.log("Print receipt for:", sale);
  };

  const columns = [
    {
      key: "transactionId" as const,
      title: "Transaction ID",
    },
    {
      key: "customer" as const,
      title: "Customer",
    },
    {
      key: "date" as const,
      title: "Date",
    },
    {
      key: "time" as const,
      title: "Time",
    },
    {
      key: "items" as const,
      title: "Items",
      render: (value: unknown) => (
        <span className="text-center">{String(value)}</span>
      ),
    },
    {
      key: "total" as const,
      title: "Total",
      render: (value: unknown) => (
        <span className="font-semibold text-green-600">{String(value)}</span>
      ),
    },
    {
      key: "paymentMethod" as const,
      title: "Payment",
      render: (value: unknown) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            value === "Cash"
              ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
              : "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
          }`}
        >
          {String(value)}
        </span>
      ),
    },
    {
      key: "actions" as const,
      title: "Actions",
      render: (_: unknown, record: (typeof sampleSales)[0]) => (
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => handleViewSale(record)}
            className="h-8 w-8"
          >
            <Eye className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => handlePrintReceipt(record)}
            className="h-8 w-8"
          >
            <Receipt className="h-4 w-4" />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <PageHeader
        title="Sales & Transactions"
        description="View and manage all sales transactions"
        actionLabel="+ New Sale"
        onAction={handleNewSale}
      />

      <DataTable
        data={sampleSales}
        columns={columns}
        emptyMessage="No sales recorded yet. Start your first transaction to see it here."
      />
    </div>
  );
}
