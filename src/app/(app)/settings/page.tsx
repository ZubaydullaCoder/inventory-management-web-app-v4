"use client";

import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { Building, Globe, Receipt, Database } from "lucide-react";
import { useState } from "react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("business");

  const tabs = [
    { id: "business", label: "Business Profile", icon: Building },
    { id: "localization", label: "Localization", icon: Globe },
    { id: "receipt", label: "Receipt Settings", icon: Receipt },
    { id: "data", label: "Data Management", icon: Database },
  ];

  return (
    <div>
      <PageHeader
        title="System Settings"
        description="Configure your business settings and system preferences"
        showAction={false}
      />

      <div className="bg-card rounded-lg border">
        {/* Tabs Navigation */}
        <div className="border-b">
          <div className="flex flex-wrap gap-0">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 font-medium text-sm border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? "border-primary text-primary bg-primary/5"
                      : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === "business" && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Business Profile</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Business Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter business name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter contact email"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter phone number"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Tax ID / INN
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter tax ID (optional)"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Business Address
                </label>
                <textarea
                  className="w-full p-2 border rounded-md"
                  rows={3}
                  placeholder="Enter complete business address"
                />
              </div>
            </div>
          )}

          {activeTab === "localization" && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Localization Settings</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Display Language
                  </label>
                  <select className="w-full p-2 border rounded-md">
                    <option value="en">English</option>
                    <option value="uz">Uzbek (Latin)</option>
                    <option value="ru">Russian</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Currency Symbol
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="UZS"
                    defaultValue="UZS"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === "receipt" && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Receipt Customization</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">
                    Show business logo on receipt
                  </label>
                  <input type="checkbox" className="h-4 w-4" />
                </div>
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">
                    Show business address on receipt
                  </label>
                  <input type="checkbox" className="h-4 w-4" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">
                    Show phone number on receipt
                  </label>
                  <input type="checkbox" className="h-4 w-4" defaultChecked />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Custom Footer Message
                </label>
                <textarea
                  className="w-full p-2 border rounded-md"
                  rows={2}
                  placeholder="Thank you for your purchase!"
                  defaultValue="Thank you for your purchase!"
                />
              </div>
            </div>
          )}

          {activeTab === "data" && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Data Import / Export</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Product Import</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Import products in bulk using our CSV template.
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline">Download Template</Button>
                    <Button variant="outline">Upload CSV</Button>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Data Export</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Export key data for backup or analysis.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline">Export Sales History</Button>
                    <Button variant="outline">Export Current Inventory</Button>
                    <Button variant="outline">Export Customer List</Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Save Button */}
          <div className="mt-8 pt-6 border-t">
            <Button>Save Settings</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
