Excellent. Let's proceed with **5.2 Customer Purchase History & Profile View**.

This flow details what a Manager or Admin sees when they want to look at a single customer's complete record. This screen is the central hub for understanding a customer's relationship with the business, combining their personal details, financial status, and buying habits as defined in PRD Sections 5.2 and 5.3.

---

### **User Flow Diagram: 5.2 Customer Profile View**

**Objective:** A Manager or Admin views a comprehensive profile of a single customer, including their purchase history and outstanding debt.

**Actor:** Manager, Admin

---

**1. Start: Select a Customer**

- The user is on the **Customer List Screen** (from Flow 5.1).
- They find the customer they want to view and click on the customer's name or a `[View/Edit]` button in that row.

**2. Navigate to Customer Profile Page**

- The user is taken to a dedicated "Customer Profile" page for the selected individual.

**3. User Views Customer Information**

- The page is organized into distinct sections for clarity:
  - **Profile Header:** Displays the customer's `Full Name` as the main title. An `[Edit]` button is available to modify their contact details (triggering the edit modal from Flow 5.1).
  - **Debt Status:** A prominent widget or card shows the customer's `Current Outstanding Balance`. Next to this balance is a `[Record Payment]` button (this is the entry point for Flow 5.3).
  - **Purchase History:** The main content area of the page is a tab labeled "Purchase History". This tab contains a table listing every transaction associated with this customer.

**4. User Interacts with Purchase History**

- The Purchase History table is a filtered version of the main Sales Log, showing columns like `Transaction ID`, `Date`, and `Total Amount`.
- The user can click on any transaction row in this list.

**5. View Transaction Details**

- Clicking a transaction opens the same **Transaction Detail View** modal that we designed in Flow 4.3.
- This allows the user to see the full receipt for that specific past sale without leaving the customer's profile.

**6. User Closes Detail View**

- The user closes the modal and is returned to the **Customer Profile Page**.
- **End of Flow.**

---

### **Wireframe Description**

#### **Wireframe: Customer Profile Page**

**Objective:** To provide a 360-degree view of a customer, including their details, debt, and transaction history.

- **`Layout:`** A full-page layout, potentially with a main content area and a right sidebar for key stats.

- **`Header Area:`**

  - **Component:** `Page Title`
    - **Text:** The customer's `Full Name`.
  - **Component:** `Edit Customer Button`
    - **Type:** Secondary Button.
    - **Label:** "Edit Details"
    - **Action:** Opens the "Edit Customer" modal (from Flow 5.1).

- **`Right Sidebar / Top Card Section:`**

  - **`Section: Contact Information`**
    - `Phone Number:`
    - `Email:`
    - `Address:`
  - **`Section: Financial Status`**
    - **Component:** `Outstanding Balance Widget`
      - **Label:** "CURRENT DEBT"
      - **Value:** A large, bold, and color-coded display of the amount (e.g., red if > 0).
      - **Component:** `Record Payment Button`
        - **Type:** Primary Button.
        - **Label:** "Record Payment"
        - **Placement:** Directly below or next to the balance amount.
        - **Action:** Opens the "Record Debt Payment" modal (Flow 5.3).

- **`Main Content Area:`**
  - **Component:** `Tabs`
    - **Tab 1:** "Purchase History" (selected by default).
  - **Component:** `Purchase History Table`
    - **Content:** A list of the customer's transactions.
    - **Columns:** `Transaction ID`, `Date`, `Total Amount`.
    - **Interaction:** Each row is clickable and opens the `Transaction Detail View` modal.
    - **Empty State:** If the customer has no purchase history, a message appears: "This customer has not made any purchases yet."

---
