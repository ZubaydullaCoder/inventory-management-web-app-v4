import { Button } from "@/components/ui/button";
import { Bell, User, LogOut } from "lucide-react";

export function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-background px-6">
      {/* Page Title Area - will be populated by individual pages */}
      <div className="flex items-center">
        <h1 className="text-lg font-semibold text-foreground">
          {/* Page title will be added by individual pages */}
        </h1>
      </div>

      {/* Header Actions */}
      <div className="flex items-center space-x-4">
        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-4 w-4" />
          {/* Notification indicator */}
          <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-destructive text-[10px] text-destructive-foreground flex items-center justify-center">
            3
          </span>
        </Button>

        {/* User Menu */}
        <div className="flex items-center space-x-2">
          <div className="text-right">
            <p className="text-sm font-medium text-foreground">Admin User</p>
            <p className="text-xs text-muted-foreground">Administrator</p>
          </div>
          <Button variant="ghost" size="icon">
            <User className="h-4 w-4" />
          </Button>
        </div>

        {/* Logout */}
        <Button variant="ghost" size="icon">
          <LogOut className="h-4 w-4" />
        </Button>
      </div>
    </header>
  );
}
