### **Frontend UI Development Plan: Static Implementation**

#### **Phase 0: Project Foundation & Core UI Kit**

This foundational phase focuses on setting up the project structure and creating a core set of reusable components that will be used across the entire application. This ensures consistency and accelerates development in subsequent phases.

- **Task 0.1: Finalize Directory Structure:** Establish the definitive folder structure for scalability (e.g., `app`, `components/ui`, `components/shared`, `lib`, `data/mock`).
- **Task 0.2: Global Styles & Layout:**
  - Implement the main `layout.tsx` with the Geist font configuration.
  - Create a primary `DashboardLayout` component that includes the main sidebar navigation and a header/user menu. This will wrap most of the application's pages.
- **Task 0.3: Install Core `shadcn/ui` Components:** Install the essential, universally used UI primitives via the CLI (e.g., Button, Card, Input, Label, Dropdown Menu, Dialog/Modal, Table).
- **Task 0.4: Create Mock Data Scaffolding:** Create a `data/mock` directory and populate it with initial static data files (e.g., `users.ts`, `products.ts`) that mimic the structure defined in the PRD.
- **Task 0.5: Develop Shared Utilities:** Create a `lib/utils.ts` for common functions and a `lib/helpers.ts` to include a `sleep` function for simulating network latency in data fetching hooks.

#### **Phase 1: Authentication & Onboarding Screens**

This phase implements the initial entry points for all users, focusing on the public-facing pages outside the main authenticated application.

- **Task 1.1: Login Page:** Develop the UI for the Login screen (`/login`) with fields for email and password, a login button, and a "Forgot Password?" link, as per the wireframe.
- **Task 1.2: Password Reset Page:** Create the UI for the Forgot Password screen (`/forgot-password`) with an email input and a "Send Reset Link" button.
- **Task 1.3: First-Time Admin Welcome Screen:** Build the dedicated "Welcome" page for the initial admin onboarding flow.

#### **Phase 2: System & User Management**

This phase builds the core administrative sections, establishing patterns for data tables and forms that will be reused extensively.

- **Task 2.1: System Settings Page:**
  - Develop the main "System Settings" page with its tabbed navigation (`Business Profile`, `Localization`, `Receipt Customization`, `Data Management`).
  - Create the individual forms for each tab using the previously installed `shadcn/ui` components.
- **Task 2.2: User Management Page:**
  - Develop a reusable `DataTable` component in `components/shared` that encapsulates `shadcn/ui` Table components and handles presentation for data, columns, and actions.
  - Implement the "User List" screen using the new `DataTable` component, populating it with mock user data.
- **Task 2.3: Add/Edit User Modal:** Create the "Add/Edit User" modal form, establishing a reusable pattern for modal-based CRUD operations.

#### **Phase 3: Inventory Module (Products, Suppliers, Categories)**

This phase tackles the comprehensive inventory management system, leveraging the components and patterns from Phase 2.

- **Task 3.1: Product Management Screens:**
  - Implement the "Product List" screen, reusing the `DataTable` component and adding search and filter controls.
  - Develop the comprehensive "Add/Edit Product" page, featuring a multi-column layout and the conditional UI for adding product variations.
- **Task 3.2: Supplier Management Screens:**
  - Implement the "Supplier List" screen using the `DataTable`.
  - Create the "Add/Edit Supplier" modal form.
- **Task 3.3: Category Management Screens:**
  - Implement the "Category List" screen using the `DataTable`.
  - Create the simple "Add/Edit Category" modal form.

#### **Phase 4: Stock Control & Purchasing Workflows**

This phase implements the more complex, multi-step workflows related to managing stock levels.

- **Task 4.1: Purchase Order (PO) Management:**
  - Build the "Purchase Order List" screen.
  - Develop the detailed "Create/Edit Purchase Order" page, including the dynamic table for adding/editing line items.
- **Task 4.2: Receive Stock Modal:** Create the specialized "Receive Stock" modal, which allows users to confirm quantities and enter expiration dates for items on a PO.
- **Task 4.3: Manual Stock Take (Audit) Flow:**
  - Build the "Stock Take List" screen.
  - Develop the "Stock Take - Counting" screen, which is a full-page, editable table of all products.
  - Create the "Discrepancy Report" screen to show variances and provide options to approve or go back.

#### **Phase 5: Point of Sale (POS) Interface**

This phase focuses on the highly interactive, cashier-facing POS screen. This will be a heavily client-side implementation.

- **Task 5.1: Main POS Layout:** Develop the core two-panel POS UI: the product selection grid/list on the left and the cart/bill panel on the right.
- **Task 5.2: Interactive Cart:** Implement the client-side logic for adding, removing, and adjusting the quantity of items in the cart.
- **Task 5.3: "Apply Discount" Modal:** Build the discount modal with logic to switch between item-level and cart-level discounts, including the conditional "Manager Override" view.
- **Task 5.4: Payment & Checkout Modals:**
  - Create the main "Payment" modal, showing the total due and payment method buttons.
  - Implement the dynamic input area that changes based on the selected payment method (e.g., shows "Amount Received" and "Change Due" for cash).
  - Develop the final "Sale Complete" confirmation screen within the modal.

#### **Phase 6: CRM & Post-Sale Management**

This phase covers all workflows that occur after a sale, including returns and customer management, reusing many existing components.

- **Task 6.1: Sales History & Returns:**
  - Build the "Sales History" screen using the `DataTable`.
  - Create the "Transaction Detail" modal that displays a full receipt.
  - Develop the "Process Return" modal, initiated from the transaction detail view.
- **Task 6.2: Customer Database Management:**
  - Build the "Customer List" screen using the `DataTable`.
  - Create the "Add/Edit Customer" modal form.
- **Task 6.3: Customer Profile & Debt Management:**
  - Develop the full "Customer Profile" page with its unique layout (sidebar for stats, main content with purchase history).
  - Build the "Debtors Report" screen.
  - Create the "Record Debt Payment" modal, accessible from both the profile and the debtors report.

#### **Phase 7: Financials, Dashboard & Reporting**

The final phase brings all the data together into high-level views for analysis and operational awareness.

- **Task 7.1: Expense & Accounts Payable:**
  - Build the "Expense List" screen and the "Log New Expense" modal.
  - Build the "Accounts Payable" (Bills to Pay) screen and the "Record Payment to Supplier" modal.
- **Task 7.2: Main Dashboard:**
  - Install a suitable charting library (e.g., Recharts).
  - Construct the dashboard page using a grid layout.
  - Develop individual widgets for KPIs, "Sales Over Time" chart, "Top-Selling Products" list, and "Actionable Alerts" (Low Stock, Expiring Products).
- **Task 7.3: Standard Reports:**
  - Create a reusable `StandardReportLayout` component that includes a title, filter controls, and an "Export to CSV" button.
  - Implement the specific data tables and filters for the `Sales Report`, `Inventory Report`, and `Expense Report` using this layout.
