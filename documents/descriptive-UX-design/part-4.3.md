Got it. Let's proceed with **4.3 Sales History & Transaction Log**.

This section is crucial for `Managers` and `Admins` who need to review past transactions for accounting, customer service, or operational oversight. It also serves as the starting point for processing returns, which we'll cover in the next step. The design will focus on providing clear, searchable, and filterable data as specified in PRD Section 4.3.

---

### **User Flow Diagram: 4.3 Sales History & Transaction Log**

**Objective:** A Manager or Admin views and finds specific transactions in a detailed log.

**Actor:** Manager, Admin

---

**1. Start: Navigate to Sales History**

- The user is logged in.
- They click on `Sales History` or `Transactions` in the main application navigation.

**2. Sales History Screen**

- The user is taken to the "Sales History" screen.
- The main part of the screen is a comprehensive table listing all completed transactions in reverse chronological order (newest first).
- The table includes columns as per the PRD: `Transaction ID`, `Date/Time`, `Cashier Name`, `Customer Name` (if applicable), `Total Amount`, `Payment Method`.

**3. User Filters the Log (Optional)**

- Above the table, there are several filter controls to help the user find specific transactions.
- The user can filter by:
  - `Date Range` (using a date picker with presets like "Today", "Last 7 Days", or a custom range).
  - `Cashier` (a dropdown list of all users with Cashier permissions).
  - `Payment Method` (a dropdown list: "Cash", "Card", "E-Wallet", "On Account").
- As the user applies filters, the transaction list updates in real-time.

**4. User Views Transaction Details**

- The user finds the transaction they are interested in.
- They click anywhere on the transaction's row.

**5. Transaction Detail View**

- Clicking a transaction opens a "Transaction Detail" modal or navigates to a new page.
- This view displays a digital copy of the full receipt for that sale.
- It includes:
  - All header information (Business Name, Transaction ID, Date, etc.).
  - A line-by-line list of all `Items Sold`, including `Quantity`, `Price per Item`, and any `Discounts` applied to each.
  - The `Subtotal`, `Total Discounts`, `Taxes`, and `Final Total`.
  - The `Payment Method` used.
- This screen is the starting point for returns. It contains a `[Process Return]` button.

**6. User Closes Detail View**

- The user clicks a `[Close]` or `[Back]` button to return to the main **Sales History Screen (Step 2)**.
- **End of Flow.**

---

### **Wireframe Descriptions**

#### **Wireframe: Sales History Screen**

**Objective:** To provide a powerful and easy-to-use interface for browsing and finding past sales.

- **`Layout:`** Standard full-page layout.
- **`Header Area:`**
  - **Component:** `Screen Title`
    - **Text:** "Sales History"
- **`Main Content Area:`**
  - **`Section: Filter Controls`**
    - **Placement:** Above the main table.
    - **Component:** `Date Range Picker`
    - **Component:** `Cashier Filter` (Dropdown menu)
    - **Component:** `Payment Method Filter` (Dropdown menu)
    - **Component:** `[Apply Filters]` Button (or filters apply automatically on change).
  - **`Section: Transactions Table`**
    - **Component:** A data table with sortable columns.
    - **Columns:** `Transaction ID`, `Date/Time`, `Cashier Name`, `Customer Name`, `Total Amount`, `Payment Method`.
    - **Interaction:** Each row is clickable to open the detail view.

---

#### **Wireframe: Transaction Detail View (Modal)**

**Objective:** To display a clear, receipt-like summary of a single past transaction.

- **`Layout:`** A large modal pop-up that overlays the Sales History screen.
- **`Header Area:`**
  - **Component:** `Modal Title`
    - **Text:** "Transaction Details - #[Transaction ID]"
- **`Main Content Area (Receipt Layout):`**
  - **`Section: Sale Information`**
    - `Date/Time:`
    - `Cashier:`
    - `Customer:`
  - **`Section: Items List`**
    - A table showing each item sold.
    - **Columns:** `Product`, `Quantity x Price`, `Discount`, `Line Total`.
  - **`Section: Summary`**
    - `Subtotal:`
    - `Total Discounts:`
    - `Final Total:`
  - **`Section: Payment`**
    - `Payment Method:`
- **`Footer/Action Bar:`**
  - **Component:** `Process Return Button`
    - **Type:** Secondary or Tertiary Button.
    - **Label:** "Process Return / Refund"
    - **Action:** Initiates the Returns & Refunds workflow (Flow 4.4).
  - **Component:** `Close Button`
    - **Type:** Primary or Secondary Button.
    - **Label:** "Close"
    - **Action:** Closes the modal.

---
