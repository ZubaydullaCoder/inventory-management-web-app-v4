Excellent. Let's proceed with the final and most impactful section: **Part 7: Dashboard, Reports & Analytics**.

This is where all the data we've meticulously planned to collect comes together to provide real value and actionable insights to the business owner. This section is based on the requirements in PRD Sections 7.1 and 7.2. We will break it down into the two main components: the at-a-glance Dashboard and the detailed Standard Reports.

Let's start with **7.1 Main Dashboard**.

---

### **User Flow Diagram: 7.1 Main Dashboard**

**Objective:** An Admin or Manager gets an immediate, high-level overview of the business's current state and key metrics upon logging in.

**Actor:** Admin, Manager

---

**1. Start: User Logs In**

- An `Admin` or `Manager` user successfully logs into the application.
- They are immediately directed to the **Main Dashboard** screen. (A `Cashier` would be directed to the POS screen instead).

**2. User Views the Dashboard**

- The Dashboard loads and displays a collection of widgets, each summarizing a key area of the business. The user does not need to take any action; the information is presented to them automatically.

**3. User Interacts with the Dashboard (Optional)**

- The user can perform several interactions:
  - **Time Period Filter:** The user can change the time period for the Key Performance Indicator (KPI) widgets (e.g., from "Today" to "This Month"). This action re-calculates and updates the KPI widgets.
  - **View Reports:** Many widgets will have a "View Details" or "See Full Report" link, which acts as a shortcut, navigating the user directly to the relevant detailed report screen (e.g., clicking on the "Low Stock Alerts" widget takes them to the filtered Product List).
  - **Drill Down on Charts:** The user can hover over data points on the visual charts (like the "Sales Over Time" chart) to see specific values in a tooltip.

**4. User Identifies Areas for Action**

- Based on the information presented, especially in the "Actionable Alerts" section, the user decides what task to perform next.
  - Example: Seeing 5 items in "Low Stock Alerts", the user clicks the widget to navigate to the product list to create a new Purchase Order.
  - Example: Seeing "Expiring Products", the user knows to check the physical stock or plan a promotion.
- **End of Flow.**

---

### **Wireframe Description: 7.1 Main Dashboard**

**Objective:** To consolidate key data from all modules into a clear, digestible, and actionable single screen.

- **`Layout:`** A multi-column grid of "widgets" or "cards". This layout is flexible and allows for easy rearrangement or future additions.

- **`Header Area:`**

  - **Component:** `Screen Title`
    - **Text:** "Dashboard"
  - **Component:** `Global Time Period Filter`
    - **Type:** Dropdown Menu or a set of buttons.
    - **Options:** "Today", "This Week", "This Month".
    - **Placement:** Top right of the dashboard content area.

- **`Main Content Area (Widget Grid):`**

  - **`Row 1: Key Performance Indicators (KPIs)`** (Based on PRD 7.1)

    - A row of prominent boxes, each displaying a single, important number.
    - **Widget 1:** `Total Revenue`
    - **Widget 2:** `Net Profit`
    - **Widget 3:** `Total Expenses`
    - **Widget 4:** `Total Accounts Receivable` (Money owed by customers)
    - **Widget 5:** `Total Accounts Payable` (Money owed to suppliers)

  - **`Row 2: Visual Charts`**

    - **Widget 6:** `Sales Over Time`
      - **Type:** Line or Bar Chart.
      - **Content:** Displays daily or weekly sales revenue for the selected time period.
    - **Widget 7:** `Top-Selling Products`
      - **Type:** Horizontal Bar Chart or a simple List.
      - **Content:** Shows the top 5 products by revenue or quantity sold for the current month.

  - **`Row 3: Actionable Alerts`**
    - **Widget 8:** `Low Stock Alerts`
      - **Type:** A list.
      - **Content:** Lists all products whose `Current Stock Quantity` is at or below their `Low Stock Threshold`. Each item is a link to that product's edit page.
    - **Widget 9:** `Expiring Products Alerts`
      - **Type:** A list.
      - **Content:** Lists products that are expired or will expire soon (e.g., within 30 days). Each item is a link.

---
