Excellent. Let's proceed with the final and most critical part of the CRM module: **5.3 Managing Customer Debts (Accounts Receivable)**.

This section covers the entire lifecycle of a credit sale, from the initial transaction to tracking the debt and finally recording the payment. It combines workflows from the POS (for the Cashier) and financial reporting (for Managers/Admins), as defined in PRD Section 5.3.

---

### **User Flow Diagram: 5.3 Managing Customer Debts**

**Objective:** To enable sales on credit, track outstanding customer debts, and record payments against those debts.

**Actor:** Cashier, Manager, Admin

---

#### **Part 1: Selling on Credit (Cashier Workflow)**

- **1. Start at POS Checkout with an Assigned Customer**
  - A Cashier is at the **POS Interface** with items in the cart.
  - Crucially, a customer profile has been assigned to the sale (as per Flow 5.1 POS Integration).
- **2. Initiate Payment**
  - The Cashier clicks the `[Payment]` button.
- **3. Select "On Account" Payment Method**
  - The **Payment Modal** opens. Because a customer is assigned, the `[On Account]` payment button is now enabled and selectable.
  - The Cashier clicks the `[On Account]` button.
- **4. Complete the Sale**
  - The Cashier clicks `[Complete Sale]`.
- **5. System Processes Credit Sale**
  - The system performs the standard sale actions (creates sales record, updates inventory).
  - **Key Difference:** Instead of recording immediate revenue, the system adds the total sale amount to the customer's `Current Outstanding Balance`.
- **6. Confirmation**
  - The "Sale Complete" screen appears, and the workflow concludes like a normal sale.
- **End of Part 1.**

---

#### **Part 2: Tracking All Debts (Manager/Admin Workflow)**

- **1. Start: Navigate to Debtors Report**
  - A Manager or Admin navigates to the reporting section of the application.
  - They click on a report titled `Debtors` or `Accounts Receivable`.
- **2. View Debtors Report Screen**
  - The screen displays a simple, clear table listing **only the customers who have a non-zero outstanding balance**.
  - The table includes columns: `Customer Name`, `Phone Number`, and `Total Amount Owed`.
  - Each row has a `[Record Payment]` button, providing a direct action to settle the debt.
- **End of Part 2.**

---

#### **Part 3: Recording a Debt Payment (Manager/Admin Workflow)**

- **1. Start: Initiate Payment Recording**
  - This flow can be started from two different places:
    - **Option A:** From the **Customer Profile Page** (Flow 5.2), by clicking the `[Record Payment]` button next to the customer's balance.
    - **Option B:** From the **Debtors Report Screen** (Part 2 of this flow), by clicking the `[Record Payment]` button on a customer's row.
- **2. "Record Debt Payment" Modal Opens**
  - A modal pop-up appears.
  - It displays the customer's name and their current `Total Amount Owed` for confirmation.
  - It contains a single input field: `Amount Paid`.
- **3. User Enters Amount and Confirms**
  - The user enters the amount the customer has paid into the input field.
  - They click the `[Confirm Payment]` button.
- **4. System Processes the Payment**
  - The system performs two key actions:
    1.  Reduces the customer's `Current Outstanding Balance` by the `Amount Paid`.
    2.  Creates a financial transaction record for the payment received, which will now be counted as revenue.
- **5. Confirmation and Return**
  - The modal closes, and a success message is displayed.
  - The user is returned to the previous screen (either the Customer Profile or the Debtors Report), where the customer's outstanding balance is now visibly updated or they are removed from the Debtors list if the balance is zero.
- **End of Part 3.**

---

### **Wireframe Descriptions**

#### **Wireframe: Debtors Report Screen**

**Objective:** To provide a clear, actionable list of all customers who currently owe money.

- **`Layout:`** Standard full-page layout.
- **`Header Area:`**
  - `Screen Title:` "Debtors Report (Accounts Receivable)"
- **`Main Content Area:`**
  - `Instructional Text:` "Showing all customers with an outstanding balance."
  - `Debtors Table:`
    - **Columns:** `Customer Name`, `Phone Number`, `Total Amount Owed` (sorted highest to lowest by default).
    - **Action Column:** Contains a `[Record Payment]` button for each row.

---

#### **Wireframe: Record Debt Payment Modal**

**Objective:** A simple form to quickly record a payment made against an outstanding balance.

- **`Layout:`** A focused modal pop-up.
- **`Header Area:`**
  - `Modal Title:` "Record Debt Payment"
- **`Main Content Area:`**
  - `Customer Name Display:` Read-only text showing the customer's name.
  - `Current Debt Display:` Read-only text showing the "Total Amount Owed: [Amount]".
  - `Amount Paid Input Field:` (Number Input, Required)
    - **Label:** "Amount Paid"
- **`Footer/Action Bar:`**
  - `Confirm Payment Button:` Primary Button.
  - `Cancel Button:` Secondary Button.

---
