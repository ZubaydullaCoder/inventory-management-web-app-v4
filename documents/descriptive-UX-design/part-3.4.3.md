Excellent. Let's detail the final workflow in this section: **3.4.3 Performing a Manual Stock Take (Audit)**.

This is a crucial feature for maintaining inventory accuracy by reconciling the system's data with the physical reality of the store. The flow is designed to be methodical, allowing for a counting phase, a review phase, and a final confirmation phase, as outlined in PRD Section 3.2.4.

---

### **User Flow Diagram: 3.4.3 Performing a Manual Stock Take**

**Objective:** A Manager or Admin performs a physical inventory count and updates the system to correct any discrepancies.

**Actor:** Manager, Admin

---

**1. Start: Navigate to Stock Take**

- The user navigates to the `Stock Take` or `Inventory Count` section from the main navigation.

**2. Stock Take List Screen**

- The user is presented with a list of previous stock takes, showing their date and status (e.g., "Completed").
- A primary button, `[Start New Stock Take]`, is displayed.

**3. User Clicks [Start New Stock Take]**

- The system initiates a new stock take session.
- The user is navigated to the "Stock Take - Counting Screen".

**4. Stock Take - Counting Screen**

- The screen displays a list of all products in the inventory.
- The user can use `Filter by Category` or `Filter by Supplier` dropdowns to narrow down the list, making it easier to count specific sections of the store.
- The list is a table with columns: `Product Name`, `SKU`, `Expected Quantity` (the current stock level in the system), and an empty `Counted Quantity` input field.

**5. User Performs Physical Count**

- The user physically counts the items in the store.
- They enter the numbers into the `Counted Quantity` field for each product. They can save their progress and come back later if needed.

**6. User Completes the Count**

- Once all items have been counted, the user clicks a `[Review & Complete Count]` button.

**7. System Generates Discrepancy Report**

- The user is taken to a "Discrepancy Report" screen.
- This screen explicitly shows **only the items where the `Expected Quantity` does not match the `Counted Quantity`**.
- The report table includes columns: `Product Name`, `Expected Qty`, `Counted Qty`, and `Variance` (the difference, e.g., "-2", "+5").

**8. User Reviews Discrepancies and Decides**

- The user reviews the list of discrepancies to ensure they are accurate.
- The screen has two main actions:
  - **IF** the user sees a mistake and needs to recount -> Clicks `[Go Back to Counting]` -> Returns to **Step 4**.
  - **IF** the user is confident in the new numbers -> Clicks `[Approve and Update Inventory]` -> **Go to Step 9**.

**9. Trigger Final Confirmation**

- Clicking `[Approve and Update Inventory]` opens a final confirmation modal: "Are you sure? This will permanently overwrite the current stock levels with your new counts. This action cannot be undone."
- The modal has `[Confirm]` and `[Cancel]` buttons.

**10. System Updates Inventory**

- Upon final confirmation, the system updates the `Current Stock Quantity` for all products to match the `Counted Quantity` entered during the stock take.
- The stock take session is marked as "Completed".

**11. Confirmation and Return**

- The user is returned to the **Stock Take List Screen (Step 2)**, where the new, completed stock take is now visible.
- A success message is displayed.
- **End of Flow.**

---

### **Wireframe Descriptions**

#### **Wireframe: Stock Take List Screen**

- **`Layout:`** Standard full-page layout.
- **`Header Area:`**
  - `Screen Title:` "Stock Takes"
  - `Start New Stock Take Button:` Primary Button, "+ Start New Stock Take", top right.
- **`Main Content Area:`**
  - `Stock Takes Table:` Columns for `Date`, `Status`, `Performed By`, and an `Action` column with a `View Report` button for completed takes.

---

#### **Wireframe: Stock Take - Counting Screen**

- **`Layout:`** A full-page workspace.
- **`Header Area:`**
  - `Page Title:` "Stock Take in Progress - [Date]"
- **`Controls Area:`**
  - `Filter by Category:` Dropdown menu.
  - `Filter by Supplier:` Dropdown menu.
- **`Main Content Area:`**
  - `Products Table:`
    - **Columns:** `Product Name`, `SKU`, `Expected Qty` (read-only), `Counted Qty` (Number Input field).
- **`Page Footer/Action Bar:`**
  - `Review & Complete Count Button:` Primary Button.

---

#### **Wireframe: Discrepancy Report & Approval Screen**

- **`Layout:`** A focused summary and decision page.
- **`Header Area:`**
  - `Page Title:` "Discrepancy Report"
- **`Main Content Area:`**
  - `Instructional Text:` "Showing items where the physical count does not match the system's records. Please review before approving."
  - `Discrepancy Table:`
    - **Columns:** `Product Name`, `Expected Qty`, `Counted Qty`, `Variance` (with color-coding for positive/negative values).
- **`Page Footer/Action Bar:`**
  - `Go Back to Counting Button:` Secondary Button.
  - `Approve and Update Inventory Button:` Primary Button (often red or a strong color to indicate a major action).

---
