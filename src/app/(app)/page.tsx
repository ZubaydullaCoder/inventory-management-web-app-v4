import { PageHeader } from "@/components/ui/page-header";

export default function DashboardPage() {
  return (
    <div>
      <PageHeader
        title="Dashboard"
        description="Overview of your business metrics and key performance indicators"
        showAction={false}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Key Metrics Cards - Placeholder */}
        <div className="bg-card p-6 rounded-lg border">
          <h3 className="text-sm font-medium text-muted-foreground">
            Total Products
          </h3>
          <p className="text-2xl font-bold">1,234</p>
        </div>
        <div className="bg-card p-6 rounded-lg border">
          <h3 className="text-sm font-medium text-muted-foreground">
            Today&apos;s Sales
          </h3>
          <p className="text-2xl font-bold">$5,678</p>
        </div>
        <div className="bg-card p-6 rounded-lg border">
          <h3 className="text-sm font-medium text-muted-foreground">
            Low Stock Items
          </h3>
          <p className="text-2xl font-bold">23</p>
        </div>
        <div className="bg-card p-6 rounded-lg border">
          <h3 className="text-sm font-medium text-muted-foreground">
            Active Users
          </h3>
          <p className="text-2xl font-bold">12</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity - Placeholder */}
        <div className="bg-card p-6 rounded-lg border">
          <h3 className="text-lg font-semibold mb-4">Recent Sales</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">Product ABC - Qty: 2</span>
              <span className="text-sm font-medium">$45.00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Product XYZ - Qty: 1</span>
              <span className="text-sm font-medium">$23.50</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Product DEF - Qty: 3</span>
              <span className="text-sm font-medium">$67.25</span>
            </div>
          </div>
        </div>

        {/* Alerts - Placeholder */}
        <div className="bg-card p-6 rounded-lg border">
          <h3 className="text-lg font-semibold mb-4">Alerts & Notifications</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-destructive rounded-full"></div>
              <span className="text-sm">
                Product ABC is low in stock (5 remaining)
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span className="text-sm">
                New order received from Customer XYZ
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm">
                Monthly report is ready for review
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
