Excellent. Let's proceed with the final step of our entire design process: **7.2 Standard Reports**.

This section details the data-heavy pages that allow `Managers` and `Admins` to perform deeper analysis beyond the high-level dashboard summaries. Each report is designed for a specific purpose, is filterable, and, as per the PRD, is exportable to CSV.

---

### **User Flow Diagram: 7.2 Accessing Standard Reports**

**Objective:** A Manager or Admin navigates to, filters, and exports detailed reports for in-depth analysis.

**Actor:** Manager, Admin

---

**1. Start: Navigate to the Reports Section**

- The user is logged in.
- They click on `Reports` in the main application navigation. This might open a sub-menu.

**2. Select a Specific Report**

- From the navigation menu or a dedicated "Reports" landing page, the user selects the report they want to view from a list:
  - `Sales Report`
  - `Profit & Loss (P&L) Statement`
  - `Inventory Report`
  - `Expense Report`

**3. View the Selected Report Screen**

- The user is taken to the dedicated page for the chosen report.
- The page displays a title, filter controls, and a detailed data table.

**4. User Filters the Report Data (Optional)**

- The user utilizes the on-screen filter controls to narrow down the data.
- **Example (Sales Report):** They might filter by a custom `Date Range` and a specific `Cashier`.
- **Example (Inventory Report):** They might filter by `Category` to see the value of all "Beverages".
- The data table updates automatically based on the applied filters.

**5. User Exports the Report (Optional)**

- After filtering the data to their satisfaction, the user clicks a primary `[Export to CSV]` button.
- The system generates a CSV file containing the data currently displayed in the table.
- The user's browser downloads the file.

**6. User Analyzes Data**

- The user reviews the data on the screen or opens the CSV file in a spreadsheet program for further analysis or record-keeping.
- **End of Flow.**

---

### **Wireframe Descriptions**

For this section, we will create a single, reusable wireframe template that applies to all standard reports, as they share the same core structure.

#### **Wireframe: Standard Report Page Template**

**Objective:** A consistent and functional layout for all detailed, data-heavy reports.

- **`Layout:`** Standard full-page layout.

- **`Header Area:`**

  - **Component:** `Screen Title`
    - **Text (Dynamic):** This changes based on the report (e.g., "Detailed Sales Report", "Inventory Report").
  - **Component:** `Export Button`
    - **Type:** Primary Button.
    - **Label:** "Export to CSV"
    - **Placement:** Top right, aligned with the title.

- **`Content Area:`**

  - **`Section: Filter Controls`**

    - **Placement:** A dedicated bar above the data table.
    - **Components (Dynamic):** The specific filter controls will change depending on the report.
      - **Common:** `Date Range Picker`.
      - **Sales Report:** `Cashier Filter`, `Customer Filter`, `Product Category Filter`.
      - **Inventory Report:** `Category Filter`, `Supplier Filter`.
      - **Expense Report:** `Expense Category Filter`.

  - **`Section: Data Table`**

    - **Component:** A large, detailed data table.
    - **Columns (Dynamic):** The columns are specific to each report as defined in the PRD (Section 7.2).
      - **Sales Report Columns:** `Transaction ID`, `Date/Time`, `Product(s) Sold`, `Quantity`, `Price per Item`, `Discount Applied`, `Total Sale Amount`, `Cashier`, `Customer`.
      - **Inventory Report Columns:** `Product Name`, `SKU`, `Category`, `Supplier`, `Current Stock Quantity`, `Cost Price`, `Selling Price`, `Total Stock Value`.
      - **Expense Report Columns:** `Expense Date`, `Description`, `Category`, `Amount`.
      - **P&L Statement:** This is a special case. It's not a standard table but a structured financial statement with specific lines for `Income`, `COGS`, `Gross Profit`, `Expenses`, and `Net Profit`, as defined in PRD 7.2.2.

  - **`Section: Additional Features` (Conditional)**
    - **Component:** `Additional Action Buttons`
    - **Example (Inventory Report):** A `[Show Dead Stock]` button that filters the report to show items that haven't sold in >90 days.

---
