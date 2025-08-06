# Table of Contents for Descriptive UX Design

---

### **UX Flow Table of Contents**

**Part 1: Initial Setup & Authentication**

- 1.1. User Login Flow
  - 1.1.1. Successful Login (for each role: Admin, Manager, Cashier)
  - 1.1.2. Incorrect Credentials
  - 1.1.3. Forgot Password / Password Reset
- 1.2. First-Time Admin Onboarding & System Configuration
  - 1.2.1. Setting Up Business Profile (Section 2.3.1)
  - 1.2.2. Configuring Localization (Language & Currency) (Section 2.3.2)
  - 1.2.3. Customizing Receipt Details (Section 2.3.3)

**Part 2: User & Access Management (Admin Flow)**

- 2.1. Viewing the User List
- 2.2. Creating a New User (Assigning Role)
- 2.3. Editing an Existing User's Details & Role
- 2.4. Deleting a User
- 2.5. Attempting to Delete an Admin (Error Flow)

**Part 3: Inventory & Product Management (Manager/Admin Flow)**

- 3.1. Core Product Management
  - 3.1.1. Viewing the Product List
  - 3.1.2. Creating a New Simple Product (Section 3.1.1)
  - 3.1.3. Creating a New Product with Variations (Section 3.1.2)
  - 3.1.4. Editing an Existing Product
- 3.2. Supplier (Dealer) Management
  - 3.2.1. Creating, Reading, Updating, Deleting (CRUD) Suppliers (Section 3.4)
- 3.3. Product Category Management
  - 3.3.1. CRUD Operations for Categories (Section 3.3)
- 3.4. Stock Control & Purchasing
  - 3.4.1. Creating a New Purchase Order (PO) (Section 3.5.1)
  - 3.4.2. Receiving Stock from a PO (updates inventory) (Section 3.5.2)
  - 3.4.3. Performing a Manual Stock Take (Stock Audit) (Section 3.2.4)
- 3.5. Data Management (Admin Flow)
  - 3.5.1. Importing Products via CSV (Success & Error states) (Section 2.4)
  - 3.5.2. Exporting Key Data Sets (Section 2.4)

**Part 4: Sales & Point of Sale (POS) (Primarily Cashier Flow)**

- 4.1. Standard Sale Workflow
  - 4.1.1. Starting a New Sale
  - 4.1.2. Adding Products to Cart (Search, Scan, Tap)
  - 4.1.3. Adjusting Cart (Change Quantity, Remove Item)
  - 4.1.4. Applying Discounts (Item & Cart Level, with Manager Override) (Section 4.2)
- 4.2. Checkout & Payment
  - 4.2.1. Payment with Cash (Calculating Change)
  - 4.2.2. Payment with Card / E-Wallet
  - 4.2.3. Assigning a Sale to an Existing Customer (Section 5.1)
  - 4.2.4. Adding a New Customer during Checkout (Section 5.1)
- 4.3. Sale on Credit (Accounts Receivable)
  - 4.3.1. Processing a Sale "On Account" for an assigned Customer (Section 5.3)

**Part 5: Post-Sale Management (Manager/Admin Flow)**

- 5.1. Handling Returns & Refunds
  - 5.1.1. Finding an Original Transaction in Sales History (Section 4.3)
  - 5.1.2. Processing a Full or Partial Return (Section 4.4)
- 5.2. Reviewing Sales History

**Part 6: Customer Relationship Management (CRM) (Manager/Admin Flow)**

- 6.1. CRUD Operations for Customers (Section 5.1)
- 6.2. Viewing a Customer's Profile & Purchase History (Section 5.2)
- 6.3. Managing Customer Debt (Accounts Receivable)
  - 6.3.1. Viewing the Debtors Report (Section 5.3)
  - 6.3.2. Recording a Debt Payment from a Customer (Section 5.3)

**Part 7: Financial Management (Manager/Admin Flow)**

- 7.1. Expense Management
  - 7.1.1. Logging a New Expense (Section 6.1)
  - 7.1.2. Managing Expense Categories (Admin Only) (Section 6.1)
- 7.2. Accounts Payable Management
  - 7.2.1. Viewing Bills to Pay (from completed POs) (Section 6.2)
  - 7.2.2. Recording a Bill Payment to a Supplier (Section 6.2)

**Part 8: Dashboards & Reporting (Admin/Manager Flow)**

- 8.1. Viewing the Main Dashboard (KPIs, Charts, Alerts) (Section 7.1)
- 8.2. Accessing and Filtering Standard Reports (Section 7.2)
  - 8.2.1. Sales Report
  - 8.2.2. Profit & Loss (P&L) Statement
  - 8.2.3. Inventory Report (including "dead stock" identification)
  - 8.2.4. Expense Report

---
