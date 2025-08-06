"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Package,
  Users,
  UserCheck,
  Truck,
  BarChart3,
  Settings,
  Store,
  Receipt,
  TrendingUp,
  ShoppingBag,
  DollarSign,
  ClipboardList,
} from "lucide-react";

interface NavItem {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  description?: string;
}

const navigation: NavItem[] = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
    description: "Overview and key metrics",
  },
  {
    title: "Products",
    href: "/products",
    icon: Package,
    description: "Manage inventory and products",
  },
  {
    title: "Categories",
    href: "/categories",
    icon: ShoppingBag,
    description: "Organize product categories",
  },
  {
    title: "Suppliers",
    href: "/suppliers",
    icon: Truck,
    description: "Manage supplier relationships",
  },
  {
    title: "Purchase Orders",
    href: "/purchase-orders",
    icon: ClipboardList,
    description: "Order and receive stock",
  },
  {
    title: "POS / Sales",
    href: "/pos",
    icon: Store,
    description: "Process customer transactions",
  },
  {
    title: "Sales History",
    href: "/sales",
    icon: Receipt,
    description: "View transaction history",
  },
  {
    title: "Customers",
    href: "/customers",
    icon: Users,
    description: "Customer information and debts",
  },
  {
    title: "Expenses",
    href: "/expenses",
    icon: DollarSign,
    description: "Track business expenses",
  },
  {
    title: "Reports",
    href: "/reports",
    icon: BarChart3,
    description: "Analytics and insights",
  },
  {
    title: "Users",
    href: "/users",
    icon: UserCheck,
    description: "User management and roles",
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
    description: "System configuration",
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-64 flex-col border-r bg-card">
      {/* Brand/Logo Area */}
      <div className="flex h-16 items-center border-b px-6">
        <Link href="/" className="flex items-center space-x-2">
          <TrendingUp className="h-6 w-6 text-primary" />
          <span className="text-lg font-semibold text-foreground">
            Inventory Pro
          </span>
        </Link>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 overflow-y-auto p-4">
        <div className="space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
                  isActive
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground"
                )}
              >
                <Icon className="h-4 w-4" />
                {item.title}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* User Area / Footer */}
      <div className="border-t p-4">
        <div className="text-xs text-muted-foreground">
          © 2025 Inventory Pro
        </div>
      </div>
    </div>
  );
}
