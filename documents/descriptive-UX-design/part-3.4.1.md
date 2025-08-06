Excellent. Let's proceed with **3.4 Stock Control & Purchasing**.

This is a more complex area with several distinct workflows. To keep things clear and organized, we will break it down into the three main user stories from the PRD:

- **3.4.1 Creating a Purchase Order (PO)**
- **3.4.2 Receiving Stock Against a PO**
- **3.4.3 Performing a Manual Stock Take (Audit)**

We will start with the first and most common task: **3.4.1 Creating a Purchase Order**. This flow is based on the user story in PRD Section 3.5.1: _"As a manager, I want to create a purchase order to send to my supplier, so I have a clear record of what I ordered, when, and at what cost."_

---

### **User Flow Diagram: 3.4.1 Creating a Purchase Order**

**Objective:** A Manager or Admin creates a formal Purchase Order (PO) to procure stock from a supplier.

**Actor:** Manager, Admin

---

**1. Start: Navigate to Purchase Orders**

- The user is logged in.
- They click on `Purchasing` or `Purchase Orders` in the main navigation (likely under an `Inventory` parent menu).

**2. Purchase Order (PO) List Screen**

- The user is taken to a screen listing all existing POs.
- The list is a table with columns like `PO ID`, `Supplier`, `Date Created`, `Status` (e.g., Draft, Ordered, Completed), and `Total Cost`.
- The list can be filtered by status.
- A primary button, `[Create New Purchase Order]`, is displayed.

**3. User Clicks [Create New Purchase Order]**

- The user is navigated to a new "Create Purchase Order" page.

**4. User Selects a Supplier**

- The first step on the form is to select a `Supplier` from a dropdown list (populated from the suppliers we designed in 3.2).

**5. User Adds Products to the PO**

- Once a supplier is selected, an "Add Product" control becomes active.
- The user searches for products by name or SKU.
- When a product is selected, it's added as a line item to a table on the PO form.
- For each line item, the user must enter the `Quantity` they wish to order.
- The `Cost Price` field is pre-filled from the product's record but is **editable** for this specific PO (to account for special pricing, etc.).
- The system automatically calculates the line total (`Quantity` x `Cost Price`) and the overall PO total cost.

**6. User Reviews and Saves the PO**

- After adding all products, the user has two options for saving:
  - **Option A: Save as Draft:** The user clicks `[Save as Draft]`. The PO is saved with a "Draft" status. This is for POs that are not yet finalized.
  - **Option B: Place Order:** The user clicks `[Save and Mark as Ordered]`. The PO is saved with an "Ordered" status. This signifies the order has been officially sent to the supplier.

**7. Confirmation and Return**

- The system saves the PO with the appropriate status.
- The user is returned to the **PO List Screen (Step 2)**, where the newly created PO is now visible at the top of the list.
- A success message is displayed.
- **End of Flow.**

---

### **Wireframe Descriptions**

#### **Wireframe: Purchase Order (PO) List Screen**

**Objective:** Display all POs and allow the user to initiate a new one.

- **`Layout:`** Standard full-page layout.
- **`Header Area:`**
  - **Component:** `Screen Title`
    - **Text:** "Purchase Orders"
  - **Component:** `Create New PO Button`
    - **Type:** Primary Button
    - **Label:** "+ Create New Purchase Order"
    - **Placement:** Top right.
- **`Main Content Area:`**
  - **Component:** `Filter Controls`
    - `Filter by Status:` Dropdown/Tabs ("All", "Draft", "Ordered", "Completed").
  - **Component:** `Purchase Orders Table`
    - **Columns:** `PO ID`, `Supplier`, `Date Created`, `Status` (with a colored tag), `Total Cost`, `Actions`.
    - **Content of `Actions` column:** `View/Edit Button`.

---

#### **Wireframe: Create/Edit Purchase Order Page**

**Objective:** A detailed form for building and finalizing a purchase order.

- **`Layout:`** A full-page, multi-section form.
- **`Header Area:`**
  - **Component:** `Page Title`
    - **Text (Dynamic):** "Create New Purchase Order" or "Editing PO #[ID]"
- **`Section 1: PO Details`**
  - **Component:** `Supplier Dropdown` (Required)
    - **Label:** "Select a Supplier"
  - **Component:** `PO Date` (Date Picker, auto-filled with today's date)
  - **Component:** `PO Status` (Read-only text label, e.g., "Status: Draft")
- **`Section 2: Items to Order`**
  - **Component:** `Add Product Search Bar`
    - **Placeholder Text:** "Search by Product Name or SKU to add to order..."
  - **Component:** `PO Items Table`
    - **This table is populated as the user adds products.**
    - **Columns:**
      - `Product Name`
      - `SKU`
      - `Quantity` (Number Input field)
      - `Cost Price` (Number Input field, pre-filled but editable)
      - `Line Total` (Read-only, auto-calculated)
      - `Action` (A "Remove" icon/button for each line item)
- **`Section 3: Order Summary`**
  - **Placement:** Typically on the right side or bottom of the page.
  - **Component:** `Total Cost Display`
    - `Subtotal:` (Sum of all line totals)
    - `Total:` (Final calculated cost)
- **`Page Footer/Action Bar:`**
  - **Component:** `Save as Draft Button`
    - **Type:** Secondary Button
    - **Label:** "Save as Draft"
  - **Component:** `Mark as Ordered Button`
    - **Type:** Primary Button
    - **Label:** "Save and Mark as Ordered"
  - **Component:** `Cancel Link`
    - **Action:** Discards changes and returns to the PO List screen.

---
