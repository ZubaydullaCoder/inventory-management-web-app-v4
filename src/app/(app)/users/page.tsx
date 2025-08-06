"use client";

import { PageHeader } from "@/components/ui/page-header";
import { DataTable } from "@/components/ui/data-table";
import { Button } from "@/components/ui/button";
import { Edit, Trash2 } from "lucide-react";

// Sample data for demonstration
const sampleUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Manager",
    status: "Active",
    createdAt: "2024-01-15",
    actions: "", // Placeholder for actions column
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Cashier",
    status: "Active",
    createdAt: "2024-01-20",
    actions: "", // Placeholder for actions column
  },
  {
    id: 3,
    name: "Bob Wilson",
    email: "bob@example.com",
    role: "Inventory Manager",
    status: "Inactive",
    createdAt: "2024-02-01",
    actions: "", // Placeholder for actions column
  },
];

export default function UsersPage() {
  const handleAddUser = () => {
    console.log("Add new user");
  };

  const handleEditUser = (user: (typeof sampleUsers)[0]) => {
    console.log("Edit user:", user);
  };

  const handleDeleteUser = (user: (typeof sampleUsers)[0]) => {
    console.log("Delete user:", user);
  };

  const columns = [
    {
      key: "name" as const,
      title: "Name",
    },
    {
      key: "email" as const,
      title: "Email",
    },
    {
      key: "role" as const,
      title: "Role",
    },
    {
      key: "status" as const,
      title: "Status",
      render: (value: unknown) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            value === "Active"
              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
              : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
          }`}
        >
          {String(value)}
        </span>
      ),
    },
    {
      key: "createdAt" as const,
      title: "Created At",
    },
    {
      key: "actions" as const,
      title: "Actions",
      render: (_: unknown, record: (typeof sampleUsers)[0]) => (
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => handleEditUser(record)}
            className="h-8 w-8"
          >
            <Edit className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => handleDeleteUser(record)}
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
        title="User Management"
        description="Manage system users and their access permissions"
        actionLabel="+ Add New User"
        onAction={handleAddUser}
      />

      <DataTable
        data={sampleUsers}
        columns={columns}
        emptyMessage="No users found. Create your first user to get started."
      />
    </div>
  );
}
