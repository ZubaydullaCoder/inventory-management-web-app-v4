"use client";

import { PageHeader } from "@/components/ui/page-header";
import { DataTable } from "@/components/ui/data-table";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, Phone, Mail } from "lucide-react";

const sampleSuppliers = [
  {
    id: 1,
    name: "Tech Wholesale Co.",
    contactPerson: "Ahmad Karimov",
    phone: "+998901234567",
    email: "contact@techwholesale.uz",
    totalOrders: 15,
    lastOrder: "2024-08-01",
    actions: "",
  },
  {
    id: 2,
    name: "Home Essentials Ltd.",
    contactPerson: "Malika Tosheva",
    phone: "+998901234568",
    email: "orders@homeessentials.uz",
    totalOrders: 8,
    lastOrder: "2024-07-28",
    actions: "",
  },
  {
    id: 3,
    name: "Book Distribution LLC",
    contactPerson: "Bobur Nazarov",
    phone: "+998901234569",
    email: "sales@bookdist.uz",
    totalOrders: 23,
    lastOrder: "2024-08-05",
    actions: "",
  },
];

export default function SuppliersPage() {
  const handleAddSupplier = () => {
    console.log("Add new supplier");
  };

  const columns = [
    {
      key: "name" as const,
      title: "Company Name",
    },
    {
      key: "contactPerson" as const,
      title: "Contact Person",
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
      key: "totalOrders" as const,
      title: "Total Orders",
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
        title="Supplier Management"
        description="Manage your suppliers and track purchase orders"
        actionLabel="+ Add New Supplier"
        onAction={handleAddSupplier}
      />

      <DataTable
        data={sampleSuppliers}
        columns={columns}
        emptyMessage="No suppliers found. Add your first supplier to start managing purchases."
      />
    </div>
  );
}
