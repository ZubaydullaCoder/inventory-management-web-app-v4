"use client";

import { PageHeader } from "@/components/ui/page-header";
import { DataTable } from "@/components/ui/data-table";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, AlertTriangle } from "lucide-react";

// Sample data for demonstration
const sampleProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    sku: "WH-001",
    category: "Electronics",
    stock: 25,
    price: "$89.99",
    status: "Active",
    actions: "",
  },
  {
    id: 2,
    name: "Coffee Mug",
    sku: "CM-002",
    category: "Home & Kitchen",
    stock: 5,
    price: "$12.99",
    status: "Low Stock",
    actions: "",
  },
  {
    id: 3,
    name: "Laptop Stand",
    sku: "LS-003",
    category: "Accessories",
    stock: 0,
    price: "$45.00",
    status: "Out of Stock",
    actions: "",
  },
  {
    id: 4,
    name: "USB-C Cable",
    sku: "UC-004",
    category: "Electronics",
    stock: 150,
    price: "$19.99",
    status: "Active",
    actions: "",
  },
];

export default function ProductsPage() {
  const handleAddProduct = () => {
    console.log("Add new product");
  };

  const handleEditProduct = (product: (typeof sampleProducts)[0]) => {
    console.log("Edit product:", product);
  };

  const handleDeleteProduct = (product: (typeof sampleProducts)[0]) => {
    console.log("Delete product:", product);
  };

  const columns = [
    {
      key: "name" as const,
      title: "Product Name",
    },
    {
      key: "sku" as const,
      title: "SKU",
    },
    {
      key: "category" as const,
      title: "Category",
    },
    {
      key: "stock" as const,
      title: "Stock",
      render: (value: unknown, record: (typeof sampleProducts)[0]) => (
        <div className="flex items-center gap-2">
          {record.stock <= 5 && record.stock > 0 && (
            <AlertTriangle className="h-4 w-4 text-yellow-500" />
          )}
          {record.stock === 0 && (
            <AlertTriangle className="h-4 w-4 text-red-500" />
          )}
          <span
            className={
              record.stock === 0
                ? "text-red-600 font-medium"
                : record.stock <= 5
                ? "text-yellow-600 font-medium"
                : ""
            }
          >
            {String(value)}
          </span>
        </div>
      ),
    },
    {
      key: "price" as const,
      title: "Price",
    },
    {
      key: "status" as const,
      title: "Status",
      render: (value: unknown) => {
        const status = String(value);
        let className = "px-2 py-1 rounded-full text-xs font-medium ";

        if (status === "Active") {
          className +=
            "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
        } else if (status === "Low Stock") {
          className +=
            "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
        } else if (status === "Out of Stock") {
          className +=
            "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
        }

        return <span className={className}>{status}</span>;
      },
    },
    {
      key: "actions" as const,
      title: "Actions",
      render: (_: unknown, record: (typeof sampleProducts)[0]) => (
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => handleEditProduct(record)}
            className="h-8 w-8"
          >
            <Edit className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => handleDeleteProduct(record)}
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
        title="Product Management"
        description="Manage your inventory and product information"
        actionLabel="+ Add New Product"
        onAction={handleAddProduct}
      />

      <DataTable
        data={sampleProducts}
        columns={columns}
        emptyMessage="No products found. Add your first product to get started."
      />
    </div>
  );
}
