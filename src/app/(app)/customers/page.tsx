"use client";

import { PageHeader } from "@/components/ui/page-header";
import { DataTable } from "@/components/ui/data-table";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, Phone, Mail } from "lucide-react";

const sampleCustomers = [
  {
    id: 1,
    name: "John Smith",
    email: "john@example.com",
    phone: "+998901234567",
    totalOrders: 15,
    totalSpent: "$1,245.50",
    lastOrder: "2024-08-06",
    actions: "",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah@example.com",
    phone: "+998901234568",
    totalOrders: 8,
    totalSpent: "$678.20",
    lastOrder: "2024-08-05",
    actions: "",
  },
  {
    id: 3,
    name: "Mike Brown",
    email: "mike@example.com",
    phone: "+998901234569",
    totalOrders: 23,
    totalSpent: "$2,156.75",
    lastOrder: "2024-08-04",
    actions: "",
  },
];

export default function CustomersPage() {
  const handleAddCustomer = () => {
    console.log("Add new customer");
  };

  const columns = [
    {
      key: "name" as const,
      title: "Customer Name",
    },
    {
      key: "email" as const,
      title: "Email",
      render: (value: unknown) => (
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-muted-foreground" />
          {String(value)}
        </div>
      ),
    },
    {
      key: "phone" as const,
      title: "Phone",
      render: (value: unknown) => (
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-muted-foreground" />
          {String(value)}
        </div>
      ),
    },
    {
      key: "totalOrders" as const,
      title: "Total Orders",
    },
    {
      key: "totalSpent" as const,
      title: "Total Spent",
      render: (value: unknown) => (
        <span className="font-semibold text-green-600">{String(value)}</span>
      ),
    },
    {
      key: "lastOrder" as const,
      title: "Last Order",
    },
    {
      key: "actions" as const,
      title: "Actions",
      render: () => (
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Edit className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-destructive hover:text-destructive"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <PageHeader
        title="Customer Management"
        description="Manage customer information and track their purchase history"
        actionLabel="+ Add New Customer"
        onAction={handleAddCustomer}
      />

      <DataTable
        data={sampleCustomers}
        columns={columns}
        emptyMessage="No customers found. Add your first customer to get started."
      />
    </div>
  );
}
