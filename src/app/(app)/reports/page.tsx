import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { Download, TrendingUp, Package, DollarSign, Users } from "lucide-react";

export default function ReportsPage() {
  return (
    <div>
      <PageHeader
        title="Reports & Analytics"
        description="Generate and view business reports and analytics"
        showAction={false}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Report Cards */}
        <div className="bg-card p-6 rounded-lg border">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="h-8 w-8 text-primary" />
            <div>
              <h3 className="text-lg font-semibold">Sales Report</h3>
              <p className="text-sm text-muted-foreground">
                Daily, weekly, and monthly sales
              </p>
            </div>
          </div>
          <Button variant="outline" className="w-full">
            <Download className="h-4 w-4 mr-2" />
            Generate Report
          </Button>
        </div>

        <div className="bg-card p-6 rounded-lg border">
          <div className="flex items-center gap-3 mb-4">
            <Package className="h-8 w-8 text-primary" />
            <div>
              <h3 className="text-lg font-semibold">Inventory Report</h3>
              <p className="text-sm text-muted-foreground">
                Stock levels and movement
              </p>
            </div>
          </div>
          <Button variant="outline" className="w-full">
            <Download className="h-4 w-4 mr-2" />
            Generate Report
          </Button>
        </div>

        <div className="bg-card p-6 rounded-lg border">
          <div className="flex items-center gap-3 mb-4">
            <DollarSign className="h-8 w-8 text-primary" />
            <div>
              <h3 className="text-lg font-semibold">Financial Report</h3>
              <p className="text-sm text-muted-foreground">
                Revenue and expense analysis
              </p>
            </div>
          </div>
          <Button variant="outline" className="w-full">
            <Download className="h-4 w-4 mr-2" />
            Generate Report
          </Button>
        </div>

        <div className="bg-card p-6 rounded-lg border">
          <div className="flex items-center gap-3 mb-4">
            <Users className="h-8 w-8 text-primary" />
            <div>
              <h3 className="text-lg font-semibold">Customer Report</h3>
              <p className="text-sm text-muted-foreground">
                Customer activity and trends
              </p>
            </div>
          </div>
          <Button variant="outline" className="w-full">
            <Download className="h-4 w-4 mr-2" />
            Generate Report
          </Button>
        </div>

        <div className="bg-card p-6 rounded-lg border">
          <div className="flex items-center gap-3 mb-4">
            <Package className="h-8 w-8 text-primary" />
            <div>
              <h3 className="text-lg font-semibold">Product Performance</h3>
              <p className="text-sm text-muted-foreground">
                Best and worst performing items
              </p>
            </div>
          </div>
          <Button variant="outline" className="w-full">
            <Download className="h-4 w-4 mr-2" />
            Generate Report
          </Button>
        </div>

        <div className="bg-card p-6 rounded-lg border">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="h-8 w-8 text-primary" />
            <div>
              <h3 className="text-lg font-semibold">Profit & Loss</h3>
              <p className="text-sm text-muted-foreground">
                P&L statements and margins
              </p>
            </div>
          </div>
          <Button variant="outline" className="w-full">
            <Download className="h-4 w-4 mr-2" />
            Generate Report
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-card p-6 rounded-lg border">
        <h3 className="text-lg font-semibold mb-4">Quick Statistics</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-primary">$12,345</p>
            <p className="text-sm text-muted-foreground">Monthly Revenue</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-primary">234</p>
            <p className="text-sm text-muted-foreground">Orders This Month</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-primary">1,567</p>
            <p className="text-sm text-muted-foreground">Total Products</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-primary">89</p>
            <p className="text-sm text-muted-foreground">Active Customers</p>
          </div>
        </div>
      </div>
    </div>
  );
}
