"use client";

import { PageHeader } from "@/components/ui/page-header";
import { DataTable } from "@/components/ui/data-table";
import { Button } from "@/components/ui/button";
import { Edit, Trash2 } from "lucide-react";

const sampleCategories = [
  {
    id: 1,
    name: "Electronics",
    description: "Electronic devices and accessories",
    productCount: 45,
    createdAt: "2024-01-15",
    actions: "",
  },
  {
    id: 2,
    name: "Home & Kitchen",
    description: "Household items and kitchen equipment",
    productCount: 23,
    createdAt: "2024-01-20",
    actions: "",
  },
  {
    id: 3,
    name: "Books & Stationery",
    description: "Books, notebooks, and office supplies",
    productCount: 67,
    createdAt: "2024-02-01",
    actions: "",
  },
];

export default function CategoriesPage() {
  const handleAddCategory = () => {
    console.log("Add new category");
  };

  const columns = [
    {
      key: "name" as const,
      title: "Category Name",
    },
    {
      key: "description" as const,
      title: "Description",
    },
    {
      key: "productCount" as const,
      title: "Products",
      render: (value: unknown) => (
        <span className="font-medium">{String(value)} items</span>
      ),
    },
    {
      key: "createdAt" as const,
      title: "Created",
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
        title="Product Categories"
        description="Organize your products into categories for better management"
        actionLabel="+ Add New Category"
        onAction={handleAddCategory}
      />

      <DataTable
        data={sampleCategories}
        columns={columns}
        emptyMessage="No categories found. Create your first category to organize products."
      />
    </div>
  );
}
