Excellent. Let's detail the financial management components. This section is crucial for providing a complete picture of the business's health by tracking money flowing out (expenses, supplier payments) and consolidating key financial data.

---

### **6.0 Financial Management**

This module defines the features for tracking business expenses and managing payments owed to suppliers. It provides the necessary data for accurate profitability analysis.

#### **6.1 Expense Tracking & Categorization**

- **User Story:** "As a business owner, I need to easily log all my operational costs, like rent, salaries, and utilities, so I can accurately calculate my net profit and understand where my money is going."

- **Functionality:**
  - A dedicated "Expenses" page where `Admins` and `Managers` can view a list of all recorded business expenses.
  - The list should be searchable and filterable by date range and expense category.
  - A "Log New Expense" button that opens a form with the following fields:
    - `Expense Description` (Text, Required): e.g., "January Rent", "Electricity Bill".
    - `Amount` (Number, Required).
    - `Expense Date` (Date Picker, Required).
    - `Category` (Dropdown, Required): Select from a predefined list of expense categories.
    - `Notes` (Text, Optional): For any additional details.
  - **Expense Category Management:** A simple settings area where an `Admin` can `Create`, `Read`, `Update`, and `Delete` expense categories (e.g., "Rent", "Utilities", "Salaries", "Marketing", "Supplies").

#### **6.2 Accounts Payable Management (Money Owed to Suppliers)**

This feature tracks the money the business owes to its suppliers for goods received. It is directly linked to the Purchase Order system.

- **User Story:** "When I receive a shipment of products from my supplier, I want the system to automatically create a bill that I need to pay, so I can easily track all my payables and avoid missing payments."

- **Functionality:**
  - **Automatic Bill Creation:** When a `Purchase Order` is marked as "Completed" (as defined in Section 3.5.2), the system must automatically generate a corresponding bill in Accounts Payable.
  - **Accounts Payable Ledger:** A dedicated "Bills to Pay" or "Accounts Payable" page that lists all unpaid bills.
  - The ledger will be a table showing:
    - `Supplier Name`
    - `Bill ID` (can be linked to the original PO number)
    - `Bill Date`
    - `Amount Owed`
  - **Recording Payments:**
    - Each bill in the ledger will have a "Record Payment" button.
    - Clicking this button will open a form where the user confirms the `Payment Amount` and `Payment Date`.
    - Once confirmed, the system marks the bill as "Paid", removing it from the active Accounts Payable list.
    - This action creates a record of the cash outflow, which is essential for accurate financial reporting.

#### **6.3 Financial Overview & Summaries**

This section defines the key financial metrics the system must calculate. These metrics will serve as the data source for the main dashboard (Section 7.1) and financial reports (Section 7.2).

- **User Story:** "As a business owner, I need the system to automatically calculate my core financial metrics like revenue, profit, and debts, so I can get a quick and accurate snapshot of my business's performance at any time."

- **Core Calculated Metrics:**
  - `Total Revenue`: The sum of all completed sales (for cash, card, and e-wallet) plus all payments received against customer debts.
  - `Cost of Goods Sold (COGS)`: The sum of the `Cost Price` for all products that have been sold.
  - `Gross Profit`: A calculated value: `Total Revenue` - `COGS`.
  - `Total Expenses`: The sum of all expenses logged via the `Expense Tracking` feature (Section 6.1).
  - `Net Profit`: A calculated value: `Gross Profit` - `Total Expenses`.
  - `Total Accounts Receivable`: The current total sum of all outstanding customer debts.
  - `Total Accounts Payable`: The current total sum of all unpaid bills to suppliers.

---

This section provides the final link in the chain of money flow. We have now defined how to manage products, sales, customers, and expenses. The next and final step is to present all this information in a useful and actionable way.
